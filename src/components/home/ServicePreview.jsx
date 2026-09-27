import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Sparkles, Layers } from 'lucide-react';
import { RevealUp } from '../motion/Reveal';

export default function ServicePreview() {
  const previewCards = [
    {
      id: 'repair',
      icon: Wrench,
      title: 'Repair & Restoration',
      slug: 'sofa-repair-restoration',
      description: 'Revitalize sunken cushions, snapped springs, wobbly joints, and worn fabric with master refurbishment.',
      image: '/images/sofas/sofawork-03.png',
      badge: 'REFURBISHMENT'
    },
    {
      id: 'cleaning',
      icon: Sparkles,
      title: 'Cleaning & Care',
      slug: 'sofa-cleaning',
      description: 'Deep fiber extraction, dust-mite sanitization, and spot stain treatment for sofas, chairs, and beds.',
      image: '/images/sofas/sofawork-04.png',
      badge: 'HYGIENE'
    },
    {
      id: 'foam',
      icon: Layers,
      title: 'Foam & Upholstery',
      slug: 'foam-upholstery',
      description: 'Custom foam block profiling and hundreds of luxury fabrics from Duroflex, MM Foam, and Darpan Cloth.',
      image: '/images/sofas/sofaworks-04.png',
      badge: 'MATERIALS'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#1E1B1B',
        color: '#F6F0E7',
        position: 'relative'
      }}
      className="section-wrapper surface-charcoal"
    >
      <div className="container-custom">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <RevealUp>
              <span className="label-eyebrow" style={{ color: '#C99A32' }}>
                COMPLETE LIFECYCLE
              </span>
            </RevealUp>
            <RevealUp delay={0.1}>
              <h2 className="h2-editorial" style={{ color: '#F6F0E7', marginTop: '0.4rem' }}>
                Furniture Services{' '}
                <span style={{ color: '#C99A32', fontStyle: 'italic' }}>
                  Beyond the Sofa.
                </span>
              </h2>
            </RevealUp>
          </div>

          <RevealUp delay={0.2}>
            <Link
              to="/services"
              className="btn-secondary"
              style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              Explore All Services
              <ArrowRight size={15} />
            </Link>
          </RevealUp>
        </div>

        {/* 3 Large Featured Cards */}
        <div className="grid-12" style={{ gap: '2rem' }}>
          {previewCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                style={{
                  gridColumn: 'span 4',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                }}
                className="hover:-translate-y-1.5 hover:border-[#C99A32]"
              >
                {/* Image Top */}
                <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(23, 21, 21, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '2px',
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      color: '#C99A32',
                      fontWeight: 600
                    }}
                  >
                    {card.badge}
                  </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '2rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                      <Icon size={20} color="#C99A32" />
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#F6F0E7' }}>
                        {card.title}
                      </h3>
                    </div>

                    <p style={{ color: '#DED3C2', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.75rem', opacity: 0.85 }}>
                      {card.description}
                    </p>
                  </div>

                  <Link
                    to={`/services/${card.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      color: '#C99A32',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textDecoration: 'none'
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
