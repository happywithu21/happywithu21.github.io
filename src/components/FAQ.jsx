import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Coffee, MapPin, Users, ShoppingBag } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What makes Urban Brew Café affordable?",
    answer: "As an affordable cafe in Delhi, we prioritize value without compromising quality. We offer a wide range of coffee and snacks under ₹500, making it accessible for students and budget-conscious customers looking for the best value near them.",
    icon: <Coffee size={20} />
  },
  {
    id: 2,
    question: "Where is the café located?",
    answer: "Urban Brew Café is located in Delhi and is easily accessible for nearby customers. Whether you're searching for a 'cafe near me' in the heart of the city or a cozy spot to relax, our central location makes us a perfect destination.",
    icon: <MapPin size={20} />
  },
  {
    id: 3,
    question: "Do you offer takeaway and dine-in options?",
    answer: "Yes, both takeaway and dine-in services are available. You can enjoy your favorite brew in our comfortable environment or grab it on the go if you're looking for quick service at an affordable cafe in Delhi.",
    icon: <ShoppingBag size={20} />
  },
  {
    id: 4,
    question: "Is the café suitable for students and groups?",
    answer: "Absolutely! The café provides a comfortable environment ideal for studying and socializing. With ample space and a welcoming atmosphere, we are a top choice for students and groups looking for a productive yet relaxed setting.",
    icon: <Users size={20} />
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div 
      style={{ 
        borderBottom: '1px solid rgba(238, 237, 228, 0.08)',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={toggle}
        style={{
          width: '100%',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: 'var(--text-main)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: isOpen ? 'var(--brand-orange)' : 'var(--text-dim)', transition: 'color 0.3s' }}>
            {faq.icon}
          </span>
          <span style={{ 
            fontSize: '1.1rem', 
            fontWeight: isOpen ? 700 : 500,
            transition: 'all 0.3s'
          }}>
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--brand-orange)' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ 
              paddingBottom: '1.5rem', 
              opacity: 0.8, 
              lineHeight: 1.6,
              fontSize: '0.95rem',
              color: 'var(--text-main)',
              paddingLeft: '2.25rem'
            }}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="container" id="faq" style={{ padding: '10vh 4vw' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-label">USER GUIDANCE</span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.02em',
            marginTop: '1rem'
          }}>
            FREQUENTLY ASKED <span style={{ color: 'var(--brand-orange)' }}>QUESTIONS</span>
          </h2>
        </div>

        <div className="data-card" style={{ 
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '2rem 3rem',
          borderRadius: '24px',
          border: '1px solid rgba(255, 85, 0, 0.1)'
        }}>
          {faqs.map((faq) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openId === faq.id}
              toggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
