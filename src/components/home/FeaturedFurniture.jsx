import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { works } from '../../data/works';
import { RevealUp } from '../motion/Reveal';
import Lightbox from '../ui/Lightbox';

export default function FeaturedFurniture() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Take the first 4 pieces for the asymmetrical showcase
  const featured = works.slice(0, 4);

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      style={{
        backgroundColor: '#DED3C2',
        color: '#171515',
        position: 'relative'
      }}
      className="section-wrapper surface-beige"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <RevealUp>
              <span className="label-eyebrow" style={{ color: '#651F2A' }}>
                SELECTED ARCHIVE
              </span>
            </RevealUp>
            <RevealUp delay={0.1}>
              <h2 className="h2-editorial" style={{ color: '#171515', marginTop: '0.4rem' }}>
                A Few Pieces.{' '}
                <span style={{ color: '#651F2A', fontStyle: 'italic' }}>
                  A Lot of Character.
                </span>
              </h2>
            </RevealUp>
          </div>

          <RevealUp delay={0.2}>
            <Link
              to="/works"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#651F2A',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                borderBottom: '1px solid #651F2A',
                paddingBottom: '0.2rem'
              }}
            >
              View Complete Gallery (08)
              <ArrowRight size={15} />
            </Link>
          </RevealUp>
        </div>

        {/* Asymmetrical Grid: Large, Small, Small, Large */}
        <div className="grid-12" style={{ gap: '2rem' }}>
          
          {/* Item 01: Large Left Card (7 Cols) */}
          <div style={{ gridColumn: 'span 7' }}>
            <FeaturedCard
              item={featured[0]}
              index={0}
              aspect="clamp(380px, 40vw, 500px)"
              onOpen={() => handleOpenLightbox(0)}
            />
          </div>

          {/* Item 02: Small Right Card (5 Cols) */}
          <div style={{ gridColumn: 'span 5' }}>
            <FeaturedCard
              item={featured[1]}
              index={1}
              aspect="clamp(380px, 40vw, 500px)"
              onOpen={() => handleOpenLightbox(1)}
            />
          </div>

          {/* Item 03: Small Left Card (5 Cols) */}
          <div style={{ gridColumn: 'span 5' }}>
            <FeaturedCard
              item={featured[2]}
              index={2}
              aspect="clamp(360px, 38vw, 460px)"
              onOpen={() => handleOpenLightbox(2)}
            />
          </div>

          {/* Item 04: Large Right Card (7 Cols) */}
          <div style={{ gridColumn: 'span 7' }}>
            <FeaturedCard
              item={featured[3]}
              index={3}
              aspect="clamp(360px, 38vw, 460px)"
              onOpen={() => handleOpenLightbox(3)}
            />
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={featured}
        activeIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />
    </section>
  );
}

function FeaturedCard({ item, index, aspect, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        height: aspect,
        position: 'relative',
        borderRadius: '6px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 16px 35px -10px rgba(23, 21, 21, 0.15)',
        backgroundColor: '#171515'
      }}
    >
      {/* Background Image with Hover Scale */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: isHovered ? 'scale(1.06)' : 'scale(1)'
        }}
      />

      {/* Dark Overlay with Opacity Hover Transition */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(23, 21, 21, 0.1) 0%, rgba(23, 21, 21, 0.75) 100%)',
          transition: 'opacity 0.4s ease',
          opacity: isHovered ? 0.9 : 0.65
        }}
      />

      {/* Top Tag: Number and Category */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem',
          left: '1.25rem',
          right: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#F6F0E7',
          zIndex: 10
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-brand)',
            fontSize: '0.85rem',
            fontWeight: 700,
            background: 'rgba(23, 21, 21, 0.8)',
            backdropFilter: 'blur(8px)',
            padding: '0.35rem 0.75rem',
            borderRadius: '2px',
            color: '#C99A32',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          0{index + 1}
        </span>

        <span
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            background: 'rgba(23, 21, 21, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '0.35rem 0.75rem',
            borderRadius: '2px',
            color: '#DED3C2',
            fontWeight: 600
          }}
        >
          {item.categoryLabel}
        </span>
      </div>

      {/* Bottom Content Card */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '1.5rem',
          right: '1.5rem',
          zIndex: 10,
          color: '#F6F0E7',
          transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <div style={{ fontSize: '0.78rem', color: '#C99A32', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 600 }}>
          {item.shortSubtitle}
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '0.65rem' }}>
          {item.title}
        </h3>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: '#F6F0E7',
            opacity: isHovered ? 1 : 0.8,
            transition: 'gap 0.3s ease'
          }}
        >
          <span>View Piece</span>
          <ArrowRight
            size={14}
            color="#C99A32"
            style={{
              transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>
      </div>
    </div>
  );
}
