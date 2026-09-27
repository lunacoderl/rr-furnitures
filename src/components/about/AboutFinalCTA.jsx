import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutFinalCTA() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '420px',
        backgroundColor: '#121010',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: '5.5rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Background Living Room with Burgundy Velvet Sofa */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <img
          src="/hero-home.png"
          alt="RR Enterprises luxury sofa interior"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: 0.4,
            filter: 'brightness(0.7)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(18,16,16,0.92) 0%, rgba(18,16,16,0.75) 45%, rgba(18,16,16,0.4) 100%)'
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
            Let's Create Something<br />
            Made for Your Space.
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
            Have a sofa requirement, custom design idea or a service request? We're here to help.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#741D2C',
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
                e.currentTarget.style.backgroundColor = '#8C2436';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#741D2C';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Us <ArrowRight size={15} />
            </Link>

            <Link
              to="/works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '0.8rem 1.8rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.3)',
                fontSize: '0.88rem',
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
              Explore Our Works <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
