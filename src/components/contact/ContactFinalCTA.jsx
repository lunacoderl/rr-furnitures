import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function ContactFinalCTA() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '400px',
        backgroundColor: '#121010',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Background Living Room with Sofa */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <img
          src="/hero-home.png"
          alt="Ready to talk furniture - RR Enterprises"
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
            background:
              'linear-gradient(90deg, rgba(18,16,16,0.92) 0%, rgba(18,16,16,0.75) 45%, rgba(18,16,16,0.3) 100%)'
          }}
        />
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
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.15,
              margin: '0 0 1.25rem 0',
              letterSpacing: '-0.01em'
            }}
          >
            Ready to Talk Furniture?
          </h2>

          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '480px'
            }}
          >
            Have a design in mind or need a service? We're here to help.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${business.contact?.phone || business.phone || '07997145791'}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.8rem 1.8rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
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
              <Phone size={14} /> Call Us <ArrowRight size={14} />
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
                padding: '0.8rem 1.8rem',
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
    </section>
  );
}
