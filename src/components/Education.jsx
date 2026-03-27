import { motion } from 'framer-motion';

const educationData = [
    {
        degree: 'B.Tech Computer Science & Engineering',
        institution: 'Lovely Professional University',
        period: "Aug' 23 – Present",
        location: 'Phagwara, Punjab',
        side: 'left',
        detail: {
            label: 'CGPA: 8.04',
            desc: 'Specializing in Cloud Computing, AI Automation, and Modern Web Architectures. Active contributor to technical clubs and university hackathons.'
        }
    },
    {
        degree: 'Intermediate (PCM)',
        institution: 'Vidya Bharti Public School',
        period: "Mar' 21 – May' 22",
        location: 'Sikar, Rajasthan',
        side: 'right',
        detail: {
            label: 'Percentage: 88%',
            desc: 'Foundation in Science with focus on Physics, Chemistry, and Mathematics.'
        }
    },
    {
        degree: 'Matriculation (10th)',
        institution: 'Sophia Senior Secondary School',
        period: "Mar' 19 – May' 20",
        location: 'Bikaner, Rajasthan',
        side: 'left',
        detail: {
            label: 'Percentage: 88%',
            desc: ''
        }
    }
];

const DetailCard = ({ label, desc, align = 'left' }) => (
    <div style={{
        background: 'rgba(255, 85, 0, 0.05)',
        border: '1px solid rgba(255, 85, 0, 0.2)',
        borderRadius: '12px',
        padding: '1rem 1.2rem',
        textAlign: align
    }}>
        <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: desc ? '0.4rem' : 0, color: 'var(--brand-orange)' }}>
            {label}
        </p>
        {desc && (
            <p style={{ fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.6, color: 'var(--text-main)' }}>
                {desc}
            </p>
        )}
    </div>
);

const EntryInfo = ({ item, align = 'left' }) => (
    <div style={{ textAlign: align }}>
        <h3 style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
            {item.degree}
        </h3>
        <p style={{ color: 'var(--brand-orange)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
            {item.institution}
        </p>
        <p className="mono" style={{ fontSize: '0.75rem', opacity: 0.45, marginBottom: '0.2rem' }}>
            {item.period}
        </p>
        <p className="mono" style={{ fontSize: '0.72rem', opacity: 0.35 }}>
            {item.location}
        </p>
    </div>
);

export default function Education() {
    return (
        <section
            id="education"
            style={{
                padding: 'clamp(5vh, 10vh, 15vh) 6vw',
                background: 'var(--bg-color)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Subtle orange bg glow */}
            <div style={{
                position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
                width: '700px', height: '400px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,85,0,0.04) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
            >
                <div style={{
                    width: '60px', height: '60px', borderRadius: '50%',
                    border: '1px solid rgba(255,85,0,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    background: 'rgba(255,85,0,0.06)'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                </div>
                <span className="section-label">BACKGROUND</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
                    Education
                </h2>
            </motion.div>

            {/* Timeline */}
            <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical center line */}
                <div style={{
                    position: 'absolute', left: '50%', top: 0, bottom: 0,
                    width: '1px', background: 'rgba(255,85,0,0.15)',
                    transform: 'translateX(-50%)'
                }} />

                {educationData.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 24px 1fr',
                            alignItems: 'center',
                            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                            position: 'relative'
                        }}
                    >
                        {/* Left column */}
                        <div style={{ paddingRight: '2rem', textAlign: 'right' }}>
                            {item.side === 'left'
                                ? <EntryInfo item={item} align="right" />
                                : <DetailCard label={item.detail.label} desc={item.detail.desc} align="left" />
                            }
                        </div>

                        {/* Center dot */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{
                                width: '12px', height: '12px', borderRadius: '50%',
                                background: 'var(--brand-orange)',
                                boxShadow: '0 0 14px rgba(255,85,0,0.6)',
                                flexShrink: 0, zIndex: 2
                            }} />
                        </div>

                        {/* Right column */}
                        <div style={{ paddingLeft: '2rem' }}>
                            {item.side === 'right'
                                ? <EntryInfo item={item} align="left" />
                                : <DetailCard label={item.detail.label} desc={item.detail.desc} align="left" />
                            }
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
