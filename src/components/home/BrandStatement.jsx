import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BrandStatement() {
  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        color: '#171515',
        position: 'relative',
        paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4.5rem, 7vw, 6.5rem)',
        overflow: 'hidden'
      }}
    >
      {/* Background Oversized Faint Luxury Script Monogram "RR" */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '5%',
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: 'italic',
          fontSize: 'clamp(14rem, 24vw, 24rem)',
          fontWeight: 400,
          color: 'rgba(201, 154, 50, 0.08)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 0.8,
          zIndex: 1
        }}
        aria-hidden="true"
      >
        RR
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Editorial Statement (5 Columns) */}
          <div style={{ gridColumn: 'span 5', paddingRight: 'clamp(0rem, 2vw, 1.5rem)' }}>
            
            {/* Subtle Vertical Accent & Eyebrow */}
            <div style={{ borderLeft: '2px solid #651F2A', paddingLeft: '1rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#651F2A',
                  fontWeight: 600,
                  display: 'block'
                }}
              >
                ABOUT RR FURNITURES
              </span>
            </div>

            {/* Main Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                lineHeight: 1.12,
                color: '#171515',
                marginBottom: '1.5rem',
                fontWeight: 600
              }}
            >
              <span style={{ color: '#651F2A', display: 'block' }}>
                More Than Furniture.
              </span>
              <span style={{ color: '#1E1B1B', fontWeight: 400 }}>
                It's how a room feels.
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.75,
                color: '#4A4444',
                marginBottom: '2.5rem',
                maxWidth: '480px'
              }}
            >
              RR Furnitures brings together customization, manufacturing, upholstery and furniture-care services to create solutions that fit different spaces and requirements.
            </p>

            {/* Know Our Story Button */}
            <Link
              to="/about"
              style={{
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.75rem 1.65rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 20px rgba(90, 22, 33, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6E1B28';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5A1621';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Know Our Story</span>
              <span style={{ fontSize: '0.95rem' }}>➔</span>
            </Link>

          </div>

          {/* Right Column: Architectural Staggered Collage (7 Columns) */}
          <div style={{ gridColumn: 'span 7', position: 'relative', marginTop: 'clamp(2rem, 3vw, 0rem)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
              
              {/* Vertical Editorial Tag Strip */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.62rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#A85A48',
                  fontWeight: 600,
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  userSelect: 'none'
                }}
              >
                <span>SPACES</span>
                <span>PEOPLE</span>
                <span>COMFORT</span>
                <span>TOGETHER</span>
              </div>

              {/* Main Large Sofa Photograph */}
              <div
                style={{
                  flex: 1,
                  height: 'clamp(320px, 38vw, 460px)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  position: 'relative'
                }}
              >
                <img
                  src="/hero-contact.png"
                  alt="Plush modular sofa in a modern sunlit living room"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Secondary Overlapping Wall Planter Photo */}
              <div
                style={{
                  width: 'clamp(140px, 18vw, 220px)',
                  height: 'clamp(240px, 28vw, 340px)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.18)',
                  border: '1px solid rgba(0, 0, 0, 0.06)'
                }}
                className="hidden sm:block"
              >
                <img
                  src="/images/workshop/workshop-05.jpg"
                  alt="Modern interior plant styling"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

            </div>

            {/* Inset Overlapping Bottom Fabric Swatch Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '2.5rem',
                width: 'clamp(150px, 20vw, 230px)',
                height: 'clamp(100px, 14vw, 150px)',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 18px 40px rgba(0, 0, 0, 0.25)',
                border: '4px solid #FBF9F5',
                zIndex: 15
              }}
              className="hidden md:block"
            >
              <img
                src="/hero-service.png"
                alt="Burgundy and neutral upholstery fabric rolls"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
