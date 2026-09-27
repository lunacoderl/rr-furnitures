import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Eye, Filter } from 'lucide-react';
import { works, workCategories } from '../data/works';
import { RevealUp } from '../components/motion/Reveal';
import Lightbox from '../components/ui/Lightbox';

export default function Works() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filtered = works.filter((item) => {
    if (selectedCat === 'all') return true;
    if (selectedCat === 'Videos') return false; // Handled separately or with video cards
    return item.category === selectedCat;
  });

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main style={{ backgroundColor: '#171515', color: '#F6F0E7', minHeight: '100vh', paddingTop: '6.5rem' }}>
      
      {/* Works Page Hero */}
      <section style={{ padding: '4rem 0 3rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '800px' }}>
            <RevealUp>
              <div className="label-eyebrow" style={{ color: '#C99A32', marginBottom: '1rem' }}>
                WORKS DONE ARCHIVE
              </div>
            </RevealUp>
            <RevealUp delay={0.1}>
              <h1 className="h1-hero" style={{ color: '#F6F0E7', marginBottom: '1.25rem' }}>
                Our Work,{' '}
                <span style={{ color: '#C99A32', fontStyle: 'italic', display: 'block' }}>
                  In Their Space.
                </span>
              </h1>
            </RevealUp>
            <RevealUp delay={0.2}>
              <p style={{ color: '#DED3C2', fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9 }}>
                Explore custom-designed sectionals, sofa-cum-beds, Chesterfield tufted pieces, and complete living room suites crafted and delivered by RR Furnitures in Ongole.
              </p>
            </RevealUp>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '2rem 0', backgroundColor: '#1E1B1B', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', gap: '0.65rem', overflowX: 'auto', paddingBottom: '0.5rem' }} className="scrollbar-none">
            {workCategories.map((cat) => {
              const isSelected = selectedCat === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '9999px',
                    backgroundColor: isSelected ? '#651F2A' : 'rgba(255, 255, 255, 0.05)',
                    border: isSelected ? '1px solid #C99A32' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: isSelected ? '#F6F0E7' : '#DED3C2',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asymmetric Works Grid */}
      <section className="section-wrapper" style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <motion.div layout className="grid-12" style={{ gap: '2rem' }}>
            <AnimatePresence>
              {filtered.map((item, idx) => {
                const colSpan = idx % 3 === 0 ? 'span 7' : idx % 3 === 1 ? 'span 5' : 'span 6';
                const cardHeight = colSpan === 'span 7' ? '460px' : '380px';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ gridColumn: colSpan }}
                  >
                    <div
                      onClick={() => handleOpenLightbox(idx)}
                      style={{
                        width: '100%',
                        height: cardHeight,
                        borderRadius: '6px',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer',
                        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
                        backgroundColor: '#1E1B1B',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                      className="group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                        className="group-hover:scale-105"
                      />

                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, transparent 35%, rgba(23, 21, 21, 0.88) 100%)',
                          transition: 'opacity 0.35s ease'
                        }}
                        className="group-hover:opacity-95"
                      />

                      {/* Top Badges */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '1.25rem',
                          left: '1.25rem',
                          right: '1.25rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          zIndex: 10
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-brand)',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            background: 'rgba(23, 21, 21, 0.85)',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '2px',
                            color: '#C99A32',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {item.id}
                        </span>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            background: 'rgba(23, 21, 21, 0.85)',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '2px',
                            color: '#DED3C2',
                            fontWeight: 600
                          }}
                        >
                          {item.categoryLabel}
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '1.75rem',
                          left: '1.75rem',
                          right: '1.75rem',
                          zIndex: 10,
                          color: '#F6F0E7'
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', color: '#C99A32', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.2rem' }}>
                          {item.shortSubtitle}
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '0.5rem' }}>
                          {item.title}
                        </h3>
                        <p style={{ color: '#DED3C2', fontSize: '0.85rem', lineHeight: 1.6, opacity: 0.9 }}>
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={filtered}
        activeIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />

    </main>
  );
}
