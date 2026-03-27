import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

export default function PdfPreview({ file, title }) {
    const canvasRef = useRef(null);
    const [status, setStatus] = useState('loading'); // 'loading' | 'done' | 'error'

    useEffect(() => {
        let cancelled = false;

        async function renderPdf() {
            try {
                setStatus('loading');

                // Dynamically import pdfjs to keep initial bundle small
                const pdfjsLib = await import('pdfjs-dist');

                // Set worker source using Vite's asset handling
                pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
                    'pdfjs-dist/build/pdf.worker.min.mjs',
                    import.meta.url
                ).href;

                const loadingTask = pdfjsLib.getDocument(file);
                const pdf = await loadingTask.promise;
                if (cancelled) return;

                const page = await pdf.getPage(1);
                if (cancelled) return;

                const canvas = canvasRef.current;
                if (!canvas) return;

                const containerWidth = canvas.parentElement?.clientWidth || 400;
                const viewport = page.getViewport({ scale: 1 });
                const scale = containerWidth / viewport.width;
                const scaledViewport = page.getViewport({ scale });

                canvas.width = scaledViewport.width;
                canvas.height = scaledViewport.height;

                const ctx = canvas.getContext('2d');
                await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
                if (!cancelled) setStatus('done');
            } catch (err) {
                if (!cancelled) setStatus('error');
            }
        }

        renderPdf();
        return () => { cancelled = true; };
    }, [file]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#fff' }}>
            {/* Canvas — always rendered, visible once done */}
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: status === 'done' ? 'block' : 'none',
                    pointerEvents: 'none'
                }}
            />

            {/* Loading state */}
            {status === 'loading' && (
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '0.6rem', background: '#111'
                }}>
                    <div style={{
                        width: '28px', height: '28px', borderRadius: '50%',
                        border: '2px solid rgba(255,85,0,0.2)',
                        borderTopColor: 'var(--brand-orange)',
                        animation: 'spin 0.8s linear infinite'
                    }} />
                    <span className="mono" style={{ fontSize: '9px', opacity: 0.4 }}>LOADING PREVIEW...</span>
                </div>
            )}

            {/* Error state */}
            {status === 'error' && (
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '0.5rem', background: '#111'
                }}>
                    <Award size={32} color="var(--brand-orange)" strokeWidth={1.5} />
                    <span className="mono" style={{ fontSize: '9px', opacity: 0.5 }}>{title}</span>
                </div>
            )}
        </div>
    );
}
