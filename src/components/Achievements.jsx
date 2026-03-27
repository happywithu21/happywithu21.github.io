import { motion } from 'framer-motion';

const hackathons = [
    {
        title: 'Idea-Thon at IIIT Delhi',
        date: 'Oct 2025',
        role: 'TOP 50 PARTICIPANT',
        desc: 'Selected among the top 50 students in the highly competitive Hackathon at IIIT Delhi.'
    },
    {
        title: 'Vertos Got Talent 2.0',
        date: 'Sept 2024',
        role: '2ND POSITION',
        desc: 'Secured 2nd position in Vertos Got Talent 2.0, a university-level dance competition held at Lovely Professional University.'
    },
    {
        title: 'ChatGPT-4 Prompt Engineering',
        date: 'Jul 2025',
        role: 'INFOSYS SPRINGBOARD',
        desc: 'Earned a certification focusing on Generative AI and Large Language Models (LLM).'
    },
    {
        title: 'Zero Day Apocalypse',
        date: 'Sept 2025',
        role: 'RANKED 7 | NSUT DELHI',
        desc: 'A prompt engineering challenge at NSUT Delhi — AI trained to refuse all answers. Cleared 8 of 10 levels, securing Rank 7.'
    }
];

const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } })
};

export default function Achievements() {
    return (
        <section
            id="achievements"
            style={{
                padding: 'clamp(5vh, 10vh, 15vh) 6vw',
                background: 'var(--bg-color)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background glow */}
            <div style={{
                position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)',
                width: '800px', height: '400px',
                background: 'radial-gradient(ellipse, rgba(255,85,0,0.04) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
            >
                <span className="section-label">HIGHLIGHTS</span>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    marginTop: '0.5rem',
                    lineHeight: 1.2
                }}>
                    Achievements &{' '}
                    <span style={{ color: 'var(--brand-orange)' }}>Certifications</span>
                </h2>
            </motion.div>

            {/* Hackathons & Events */}
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Subsection label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        marginBottom: '1.8rem'
                    }}
                >
                    {/* Trophy icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4a2 2 0 0 1-2-2V5h4"/>
                        <path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/>
                        <path d="M12 17v4"/>
                        <path d="M8 21h8"/>
                        <path d="M6 3h12v8a6 6 0 0 1-12 0V3z"/>
                    </svg>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                        Hackathons &amp; Events
                    </h3>
                </motion.div>

                {/* Cards grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                    gap: '1.2rem'
                }}>
                    {hackathons.map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariant}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(238,237,228,0.08)',
                                borderRadius: '16px',
                                padding: '1.4rem 1.6rem',
                                position: 'relative',
                                transition: 'border-color 0.3s ease, background 0.3s ease',
                                cursor: 'default'
                            }}
                            whileHover={{
                                borderColor: 'rgba(255,85,0,0.3)',
                                backgroundColor: 'rgba(255,85,0,0.04)'
                            }}
                        >
                            {/* Title + Date */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                                    {item.title}
                                </h4>
                                <span className="mono" style={{
                                    fontSize: '10px',
                                    padding: '3px 10px',
                                    borderRadius: '100px',
                                    background: 'rgba(255,85,0,0.1)',
                                    border: '1px solid rgba(255,85,0,0.25)',
                                    color: 'var(--brand-orange)',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0
                                }}>
                                    {item.date}
                                </span>
                            </div>

                            {/* Role / Issuer */}
                            <p className="mono" style={{
                                fontSize: '10px',
                                color: 'var(--brand-orange)',
                                letterSpacing: '0.1em',
                                marginBottom: '0.8rem',
                                opacity: 0.85
                            }}>
                                {item.role}
                            </p>

                            {/* Description */}
                            <p style={{ fontSize: '0.87rem', opacity: 0.6, lineHeight: 1.7, color: 'var(--text-main)' }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
