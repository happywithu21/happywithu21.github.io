import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Student",
    text: "Great place with amazing coffee at affordable prices. Perfect for students who are looking for a high-quality yet budget-friendly experience!",
    stars: 5
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "Regular Customer",
    text: "Loved the ambiance and budget-friendly menu. Highly recommended for anyone looking for the best affordable cafe in Delhi.",
    stars: 5
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Food Blogger",
    text: "One of the best affordable cafes in Delhi. Will definitely visit again for the great vibes and excellent service.",
    stars: 5
  }
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="data-card"
    style={{
      padding: '2.5rem',
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 85, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      position: 'relative'
    }}
  >
    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.05, color: 'var(--brand-orange)' }}>
      <Quote size={40} fill="currentColor" />
    </div>

    <div style={{ display: 'flex', gap: '4px' }}>
      {[...Array(testimonial.stars)].map((_, i) => (
        <Star key={i} size={16} fill="var(--brand-orange)" color="var(--brand-orange)" />
      ))}
    </div>

    <p style={{ 
      fontSize: '1.1rem', 
      lineHeight: 1.6, 
      opacity: 0.9, 
      fontStyle: 'italic',
      color: 'var(--text-main)'
    }}>
      "{testimonial.text}"
    </p>

    <div style={{ marginTop: 'auto' }}>
      <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--brand-orange)' }}>{testimonial.name}</h4>
      <span className="mono" style={{ fontSize: '10px', opacity: 0.4, textTransform: 'uppercase' }}>{testimonial.role}</span>
    </div>
  </motion.div>
);

export default function Testimonials() {
  return (
    <section className="container" id="testimonials" style={{ padding: '10vh 4vw' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-label">SOCIAL PROOF</span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.02em',
            marginTop: '1rem'
          }}>
            CUSTOMER <span style={{ color: 'var(--brand-orange)' }}>TESTIMONIALS</span>
          </h2>
          <p style={{ opacity: 0.6, marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            Hear from our community about their experience at Urban Brew Café, the most loved affordable cafe in Delhi.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
