import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you make customized sofas?',
      a: 'Yes! Custom sofa design is our core craft. We manufacture sofas according to your exact room floor measurements, seating geometry, and preferred aesthetics.'
    },
    {
      q: 'Can we choose sofa cloth and foam?',
      a: 'Absolutely. You have full freedom to browse our wide range of fabrics (velvet, linen, suede, Darpan Cloth) and choose certified branded foam densities (Duroflex, MM Foam, Century).'
    },
    {
      q: 'Do you repair existing sofas?',
      a: 'Yes, we provide complete sofa repair, structural realignment, spring tensioning, and full upholstery replacement to restore your furniture.'
    },
    {
      q: 'Do you provide sofa cleaning?',
      a: 'Yes, we offer professional deep extraction sofa cleaning that eliminates dust, stains, and allergens without harming delicate fabric fibers.'
    },
    {
      q: 'Do you clean chairs and beds?',
      a: 'Yes! In addition to sofas, we provide professional cleaning for dining chairs, office chairs, recliners, bed headboards, and mattresses.'
    },
    {
      q: 'How can I place an enquiry?',
      a: 'You can fill out the enquiry form above, reach out directly on WhatsApp at 099857 04432, or call us directly anytime during business hours.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '0 0 5.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.2rem',
              fontWeight: 600,
              color: '#1C1917',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.01em'
            }}
          >
            Frequently Asked Questions
          </h2>

          <Link
            to="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#5A1621',
              color: '#FFFFFF',
              padding: '0.65rem 1.4rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(90, 22, 33, 0.25)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#741D2C';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#5A1621';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All FAQs <ArrowRight size={13} />
          </Link>
        </div>

        {/* 2-Columns Grid: Left Photo, Right 2-Col FAQs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(360px, 2.2fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="faq-main-grid"
        >
          {/* Left: Warm Photo */}
          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundColor: '#EAE3D9',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                border: '1px solid #ECE4DA'
              }}
            >
              <img
                src="/hero-contact.png"
                alt="RR Furnitures Comfortable Living Space"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Right: 2 Columns of 3 FAQ Items */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem 1.5rem'
            }}
            className="faq-items-grid"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '1.1rem 1.25rem',
                    border: '1px solid #ECE4DA',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: '#1C1917',
                        lineHeight: 1.35
                      }}
                    >
                      {faq.q}
                    </span>

                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: '#F8F4EE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6A1D28',
                        flexShrink: 0
                      }}
                    >
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                  </div>

                  {isOpen && (
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: '#666',
                        lineHeight: 1.5,
                        marginTop: '0.75rem',
                        marginBottom: 0,
                        paddingTop: '0.65rem',
                        borderTop: '1px solid #F5EFEB'
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-main-grid {
            grid-template-columns: 1fr !important;
          }
          .faq-items-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
