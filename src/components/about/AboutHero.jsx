import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  const handleScrollToStory = () => {
    const el = document.getElementById('our-story');
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
      {/* Background Image: Warm Living Room Beige Curved Sofa */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1
        }}
      >
        <img
          src="/hero-contact.png"
          alt="Where Comfort Meets Craft - RR Enterprises living room"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        {/* Cinematic Gradient Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(16,14,14,0.92) 0%, rgba(16,14,14,0.72) 42%, rgba(16,14,14,0.2) 100%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(16,14,14,0.7) 0%, transparent 30%, rgba(16,14,14,0.85) 100%)'
          }}
        />
      </div>

      {/* Decorative Faint Roman Gold Monogram in Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          fontFamily: 'Cinzel, "Playfair Display", Georgia, serif',
          fontSize: 'clamp(5rem, 12vw, 11rem)',
          fontWeight: 700,
          color: 'rgba(212, 175, 55, 0.22)',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 2,
          lineHeight: 1
        }}
        aria-hidden="true"
      >
        RR
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
            ABOUT US
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
            Where Comfort<br />
            Meets Craft.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '1rem',
              lineHeight: 1.7,
              margin: '0 0 2.25rem 0',
              maxWidth: '480px'
            }}
          >
            At RR Enterprises, we bring together design, materials and craftsmanship to create furniture that fits your space and your lifestyle.
          </p>

          {/* Action Button */}
          <button
            onClick={handleScrollToStory}
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
            Discover Our Story <ArrowRight size={15} />
          </button>

          {/* Slide Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginTop: '4rem',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.78rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            <span style={{ fontWeight: 600, color: '#FFFFFF' }}>01</span>
            <div style={{ width: '42px', height: '1px', backgroundColor: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
