import { motion } from 'framer-motion';

const educationData = [
    {
        degree: 'B.Tech Computer Science & Engineering',
        institution: 'Lovely Professional University',
        period: "Aug' 23 – Present",
        category: 'CATEGORY_01',
        number: '001',
        details: [
            'CGPA: 8.04',
            'Phagwara, Punjab'
        ]
    },
    {
        degree: 'Intermediate (PCM)',
        institution: 'Vidya Bharti Public School',
        period: "Mar' 21 – May' 22",
        category: 'CATEGORY_02',
        number: '002',
        details: [
            'Percentage: 88%',
            'Sikar, Rajasthan'
        ]
    },
    {
        degree: 'Matriculation (10th)',
        institution: 'Sophia Senior Secondary School',
        period: "Mar' 19 – May' 20",
        category: 'CATEGORY_03',
        number: '003',
        details: [
            'Percentage: 88%',
            'Bikaner, Rajasthan'
        ]
    }
];

export default function Education() {
    return (
        <section className="container" id="education" style={{ padding: 'clamp(5vh, 10vh, 15vh) 0' }}>
            {/* Header matches Skills section */}
            <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
                <span className="section-label" style={{ marginBottom: '1rem' }}>MY BACKGROUND</span>
                <h2 style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', 
                    margin: '0 auto', 
                    maxWidth: '800px',
                    lineHeight: 1.2
                }}>
                    A strong semantic foundation in <br className="desktop-only" /> <span style={{ color: 'var(--brand-orange)' }}>Academic Excellence.</span>
                </h2>
            </div>

            {/* Circular Cards Container */}
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: 'clamp(2rem, 4vw, 3rem)',
                justifyContent: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {educationData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="data-card glow-orange"
                        style={{
                            /* Make it a perfect circle */
                            width: 'clamp(280px, 28vw, 350px)',
                            aspectRatio: '1 / 1',
                            borderRadius: '50%',
                            
                            /* Centering content inside the circle */
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            
                            /* Padding to keep text away from curved edges */
                            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                            position: 'relative'
                        }}
                    >
                        {/* Similar top-labels as Skills section but centered */}
                        <div className="mono" style={{ 
                            fontSize: '11px', 
                            color: 'var(--brand-orange)', 
                            marginBottom: '1.2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px'
                        }}>
                            <span>{item.period}</span>
                        </div>

                        {/* Title & Institution */}
                        <h3 style={{ 
                            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
                            marginBottom: '0.8rem', 
                            letterSpacing: '-0.02em',
                            color: '#fff',
                            lineHeight: 1.3
                        }}>
                            {item.degree}
                        </h3>
                        
                        <div style={{
                            fontSize: '0.85rem',
                            color: 'var(--brand-orange)',
                            opacity: 0.9,
                            marginBottom: '1.5rem',
                            fontWeight: 600
                        }}>
                            {item.institution}
                        </div>

                        {/* Bullet Details */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
                            {item.details.map((detail, i) => (
                                <div key={i} className="mono" style={{ 
                                    fontSize: '12px', 
                                    opacity: 0.8 
                                }}>
                                    {detail}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
