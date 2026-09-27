import React from 'react';
import { Palette, Box, Scissors, CheckCircle } from 'lucide-react';

export default function AboutProcess() {
  const steps = [
    {
      num: '01',
      title: 'Select',
      subtitle: 'Materials & Design',
      icon: Palette
    },
    {
      num: '02',
      title: 'Shape',
      subtitle: 'Frame & Form',
      icon: Box
    },
    {
      num: '03',
      title: 'Craft',
      subtitle: 'Foam & Upholstery',
      icon: Scissors
    },
    {
      num: '04',
      title: 'Finish',
      subtitle: 'Details & Final Look',
      icon: CheckCircle
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#26090E',
        backgroundImage: 'linear-gradient(135deg, #2D0B12 0%, #1A0508 100%)',
        color: '#FFFFFF',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(360px, 1.8fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="process-grid"
        >
          {/* Left Column: Master Artisan at Woodworking Bench */}
          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                backgroundColor: '#1E060A',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <img
                src="/images/workshop/workshop-07.jpg"
                alt="Craftsman shaping timber frame in workshop"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Heading, Subtitle & 4-Step Process Timeline */}
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              FROM MATERIAL TO MASTERPIECE
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Crafted With<br />
              <span style={{ fontStyle: 'italic', color: '#E5C06E' }}>Care at Every Step.</span>
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                marginBottom: '3rem',
                maxWidth: '480px'
              }}
            >
              Every piece of furniture goes through a careful process — from material selection to final finishing — ensuring comfort, durability and a look that fits your space.
            </p>

            {/* 4-Step Process Timeline */}
            <div style={{ position: 'relative' }}>
              {/* Connecting Dotted Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '30px',
                  right: '30px',
                  height: '1px',
                  borderTop: '1px dashed rgba(212, 175, 55, 0.4)',
                  zIndex: 0
                }}
                className="timeline-line"
              />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}
                className="timeline-steps"
              >
                {steps.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div
                      key={s.num}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}
                    >
                      {/* Step Circle with Icon */}
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: '#3B1017',
                          border: '1.5px solid #D4AF37',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#D4AF37',
                          marginBottom: '0.75rem',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                        }}
                      >
                        <IconComp size={20} />
                      </div>

                      {/* Number & Name */}
                      <span
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#FFFFFF'
                        }}
                      >
                        {s.num}
                      </span>

                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#E5C06E',
                          marginTop: '0.2rem'
                        }}
                      >
                        {s.title}
                      </span>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'rgba(255,255,255,0.6)',
                          marginTop: '0.2rem',
                          lineHeight: 1.3
                        }}
                      >
                        {s.subtitle}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .timeline-steps {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .timeline-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
