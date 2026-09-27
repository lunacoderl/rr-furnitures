import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesHero() {
  const handleScrollToGrid = () => {
    const el = document.getElementById('services-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '88vh',
        backgroundColor: '#121010',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Image: Caramel/Mustard Luxury Sectional Sofa in Living Room */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <img
          src="/images/sofas/sofawork-02.png"
          alt="Complete Furniture Solutions - RR Furnitures"
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

      {/* Decorative Gold Circular Badge / Seal in Bottom Right */}
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#D4AF37',
          zIndex: 2,
          opacity: 0.85
        }}
        className="hero-badge"
      >
        <div
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            border: '1px dashed rgba(212, 175, 55, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem'
          }}
        >
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase' }}>
            CRAFTSMANSHIP
          </span>
          <div style={{ width: '20px', height: '1px', backgroundColor: '#D4AF37', margin: '4px 0' }} />
          <span style={{ fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8 }}>
            LASTING COMFORT
          </span>
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
        <div style={{ maxWidth: '620px' }}>
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
            OUR SERVICES
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
            Complete<br />
            Furniture<br />
            Solutions.
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
            From custom sofa designs and manufacturing to repair, cleaning and upholstery — all under one roof.
          </p>

          {/* Action Button */}
          <button
            onClick={handleScrollToGrid}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: '#5A1621',
              color: '#FFFFFF',
              padding: '0.85rem 1.85rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
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
            Explore Our Services <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
