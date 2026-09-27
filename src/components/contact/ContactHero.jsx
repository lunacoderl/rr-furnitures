import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function ContactHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        backgroundColor: '#121010',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Living Room with Curved Beige Sectional */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <img
          src="/hero-contact.png"
          alt="Let's Create Something for Your Space - RR Furnitures"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        {/* Dark Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(16,14,14,0.92) 0%, rgba(16,14,14,0.72) 45%, rgba(16,14,14,0.18) 100%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(16,14,14,0.6) 0%, transparent 35%, rgba(16,14,14,0.85) 100%)'
          }}
        />
      </div>

      {/* Decorative Gold Text in Bottom Right */}
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          textAlign: 'right',
          color: '#D4AF37',
          zIndex: 2,
          opacity: 0.85
        }}
        className="contact-hero-tag"
      >
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}>
          CUSTOM FURNITURE
        </div>
        <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.75, marginTop: '2px' }}>
          BETTER SPACES
        </div>
      </div>

      <div
        className="container-custom"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 10,
          width: '100%'
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          {/* Eyebrow */}
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#D4AF37',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}
          >
            GET IN TOUCH
          </span>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              margin: '0 0 1.25rem 0',
              letterSpacing: '-0.02em'
            }}
          >
            Let's Create<br />
            Something<br />
            for Your Space.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '1.02rem',
              lineHeight: 1.7,
              margin: '0 0 2.25rem 0',
              maxWidth: '480px'
            }}
          >
            Have a sofa requirement, furniture enquiry or service request? Talk to RR Furnitures.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${business.contact?.phone || business.phone || '09985704432'}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 6px 18px rgba(90, 22, 33, 0.4)',
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
              Call Us <ArrowRight size={14} />
            </a>

            <button
              onClick={() => openDirectWhatsApp()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'rgba(23, 20, 20, 0.85)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: '0.88rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.backgroundColor = 'rgba(23, 20, 20, 0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.backgroundColor = 'rgba(23, 20, 20, 0.85)';
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <MessageCircle size={12} />
              </div>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-hero-tag {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
