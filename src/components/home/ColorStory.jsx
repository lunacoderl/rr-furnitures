import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ColorStory() {
  const [selectedSwatch, setSelectedSwatch] = useState('blue');

  const swatches = [
    {
      id: 'burgundy',
      name: 'Burgundy',
      color: '#651F2A',
      image: '/hero-home.png',
      texture: 'linear-gradient(135deg, #7A2433 0%, #4D141D 100%)'
    },
    {
      id: 'mustard',
      name: 'Mustard',
      color: '#C99A32',
      image: '/images/sofas/sofawork-02.png',
      texture: 'linear-gradient(135deg, #E2B246 0%, #9B7018 100%)'
    },
    {
      id: 'blue',
      name: 'Blue',
      color: '#285873',
      image: '/hero-work.png',
      texture: 'linear-gradient(135deg, #376F8F 0%, #1B3C4F 100%)'
    },
    {
      id: 'beige',
      name: 'Beige',
      color: '#D8C9B4',
      image: '/hero-contact.png',
      texture: 'linear-gradient(135deg, #E6DDD0 0%, #B8A58D 100%)'
    },
    {
      id: 'grey',
      name: 'Grey',
      color: '#6E6E6E',
      image: '/images/sofas/sofawork-01.png',
      texture: 'linear-gradient(135deg, #8E8E8E 0%, #4D4D4D 100%)'
    },
    {
      id: 'rose',
      name: 'Rose',
      color: '#9C6272',
      image: '/images/sofas/sofaworks-01.png',
      texture: 'linear-gradient(135deg, #B5798B 0%, #764553 100%)'
    }
  ];

  const current = swatches.find((s) => s.id === selectedSwatch) || swatches[2];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        color: '#171515',
        position: 'relative',
        paddingTop: 'clamp(4.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(4.5rem, 6vw, 6rem)',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom">
        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Heading & Action (3.5 Columns) */}
          <div style={{ gridColumn: 'span 4', paddingRight: 'clamp(0rem, 2vw, 1.5rem)' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.1rem, 3.4vw, 3rem)',
                lineHeight: 1.15,
                color: '#171515',
                marginBottom: '1rem',
                fontWeight: 600,
                letterSpacing: '-0.01em'
              }}
            >
              COLOR CHANGES<br />EVERYTHING.
            </h2>

            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.7,
                color: '#555',
                marginBottom: '2rem'
              }}
            >
              Explore a range of fabrics, textures and colors to match your style and space.
            </p>

            <Link
              to="/services/reupholstery-fabric-replacement"
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
              <span>Explore Fabric Options</span>
              <span style={{ fontSize: '0.95rem' }}>➔</span>
            </Link>
          </div>

          {/* Center Column: Large Landscape Blue Sofa Photo (5.5 Columns) */}
          <div style={{ gridColumn: 'span 5' }}>
            <div
              style={{
                width: '100%',
                height: 'clamp(280px, 32vw, 380px)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                position: 'relative'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={`${current.name} luxury sectional sofa`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: 6 Vertical Swatches with Labels & Arrow (3 Columns) */}
          <div style={{ gridColumn: 'span 3', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.85rem',
                width: '100%',
                maxWidth: '260px'
              }}
            >
              {swatches.map((swatch) => {
                const isSelected = swatch.id === selectedSwatch;

                return (
                  <button
                    key={swatch.id}
                    type="button"
                    onClick={() => setSelectedSwatch(swatch.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '1/1.5',
                        borderRadius: '6px',
                        background: swatch.texture,
                        border: isSelected ? '2px solid #5A1621' : '1px solid rgba(0,0,0,0.12)',
                        boxShadow: isSelected ? '0 6px 16px rgba(90, 22, 33, 0.35)' : '0 2px 6px rgba(0,0,0,0.08)',
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.25s ease'
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: isSelected ? '#5A1621' : '#666',
                        fontWeight: isSelected ? 600 : 500
                      }}
                    >
                      {swatch.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Slider Arrow */}
            <button
              type="button"
              onClick={() => {
                const nextIdx = (swatches.findIndex((s) => s.id === selectedSwatch) + 1) % swatches.length;
                setSelectedSwatch(swatches[nextIdx].id);
              }}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                color: '#171515',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.2s ease'
              }}
              className="hover:border-[#5A1621] hover:text-[#5A1621]"
              aria-label="Next color swatch"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
