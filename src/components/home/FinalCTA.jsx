import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function FinalCTA() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '440px',
        backgroundColor: '#121010',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Background Living Room Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <img
          src="/hero-contact.png"
          alt="Luxury living room sofa interior"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: 0.35,
            filter: 'brightness(0.65)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(18,16,16,0.92) 0%, rgba(18,16,16,0.7) 50%, rgba(18,16,16,0.92) 100%)'
          }}
        />
      </div>

      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2.5rem'
          }}
          className="final-cta-row"
        >
          {/* Left Column: Heading, Subtitle & Buttons */}
          <div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.6rem',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              HAVE A SOFA IN MIND?
            </h2>

            <p
              style={{
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.2rem',
                marginTop: '0.6rem',
                marginBottom: '1.75rem'
              }}
            >
              Let's Create Something Made for Your Space.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#5A1621',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(90, 22, 33, 0.4)',
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
                Get in Touch <ArrowRight size={14} />
              </Link>

              <Link
                to="/works"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Right Column: 2 Dark Pill Contact Cards */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            {/* Call Us Card */}
            <a
              href={`tel:${business.contact?.phone || business.phone || '07997145791'}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                backgroundColor: 'rgba(23, 20, 20, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '9999px',
                padding: '0.7rem 1.5rem',
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37'
                }}
              >
                <Phone size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Call Us
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                  {business.contact?.phoneDisplay || business.phone || '79971 45791'}
                </div>
              </div>
            </a>

            {/* WhatsApp Us Card */}
            <button
              onClick={() => openDirectWhatsApp()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                backgroundColor: 'rgba(23, 20, 20, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '9999px',
                padding: '0.7rem 1.5rem',
                color: '#FFFFFF',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <MessageCircle size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  WhatsApp Us
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  Chat Now <ArrowRight size={13} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .final-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
