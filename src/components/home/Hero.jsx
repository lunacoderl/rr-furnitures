import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const customerAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  ];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#171515',
        color: '#F6F0E7',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden'
      }}
    >
      {/* FULL-BLEED HERO BACKGROUND IMAGE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-home.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
        aria-hidden="true"
      />

      {/* REFINED EDITORIAL GRADIENT OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(16, 14, 14, 0.88) 0%, rgba(16, 14, 14, 0.65) 42%, rgba(16, 14, 14, 0.25) 75%, rgba(16, 14, 14, 0.45) 100%)',
          zIndex: 2
        }}
        aria-hidden="true"
      />

      {/* TOP & BOTTOM SUBTLE VIGNETTES */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(16, 14, 14, 0.6) 0%, transparent 25%, transparent 75%, rgba(16, 14, 14, 0.7) 100%)',
          zIndex: 3
        }}
        aria-hidden="true"
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '680px' }}>
          
          {/* Eyebrow: CUSTOM / COMFORT / CHARACTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#D8C6AE',
              fontWeight: 500,
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>CUSTOM</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>COMFORT</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>CHARACTER</span>
          </motion.div>

          {/* Main Title: Furniture That Shapes Your Space. */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)',
              lineHeight: 1.08,
              fontWeight: 500,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.55)'
            }}
          >
            Furniture That<br />Shapes Your Space.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.25vw, 1.15rem)',
              lineHeight: 1.65,
              color: '#E8E1D5',
              maxWidth: '520px',
              marginBottom: '2.5rem',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
            }}
          >
            Custom sofa designs, furniture manufacturing and furniture-care solutions around your requirements.
          </motion.p>

          {/* Action Buttons: Explore Our Work & Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            <Link
              to="/works"
              style={{
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.8rem 1.75rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 25px rgba(90, 22, 33, 0.45)',
                transition: 'all 0.25s ease',
                border: '1px solid rgba(255, 255, 255, 0.15)'
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
              <span>Explore Our Work</span>
              <span style={{ fontSize: '0.95rem' }}>➔</span>
            </Link>

            <Link
              to="/services"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                padding: '0.8rem 1.75rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.45)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
              }}
            >
              Our Services
            </Link>
          </motion.div>

          {/* Social Proof: Avatars + 5 Gold Stars + Trusted by 100+ Happy Customers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            {/* Overlapping circular avatars */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {customerAvatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Happy customer ${i + 1}`}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #5A1621',
                    marginLeft: i === 0 ? 0 : '-10px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#C99A32" color="#C99A32" />
                ))}
              </div>
              <span style={{ fontSize: '0.78rem', color: '#E8E1D5', fontWeight: 500, letterSpacing: '0.02em' }}>
                Trusted by 100+ Happy Customers
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM RIGHT: Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#D8C6AE',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            backgroundColor: 'rgba(23, 21, 21, 0.5)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F6F0E7',
            transition: 'all 0.2s ease'
          }}
          className="hover:border-[#C99A32] hover:text-[#C99A32]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8 }}>
          Scroll Down
        </span>
      </div>
    </section>
  );
}
