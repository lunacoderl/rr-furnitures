import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Armchair, Compass, Scissors, CheckCircle, Sparkles } from 'lucide-react';

export default function ServicesProcess() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      subtitle: 'Your Needs',
      icon: Armchair
    },
    {
      num: '02',
      title: 'Design',
      subtitle: '& Plan',
      icon: Compass
    },
    {
      num: '03',
      title: 'Craft &',
      subtitle: 'Upholster',
      icon: Scissors
    },
    {
      num: '04',
      title: 'Quality',
      subtitle: 'Check',
      icon: CheckCircle
    },
    {
      num: '05',
      title: 'Finished',
      subtitle: 'Furniture',
      icon: Sparkles
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '5.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(400px, 2fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="services-process-grid"
        >
          {/* Left Column: Heading, Subtitle & CTA */}
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: '#6A1D28',
                textTransform: 'uppercase',
                marginBottom: '0.6rem'
              }}
            >
              OUR PROCESS
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                letterSpacing: '-0.02em'
              }}
            >
              From Requirement<br />
              to Finished Furniture.
            </h2>

            <p
              style={{
                color: '#57534E',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '360px'
              }}
            >
              A simple and transparent process to bring your furniture ideas to reality.
            </p>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.75rem 1.6rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(90, 22, 33, 0.25)',
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
              Explore Detailed Service <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: 5-Step Process Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Connecting Dotted Line */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '25px',
                right: '25px',
                height: '1px',
                borderTop: '1px dashed #C99A32',
                zIndex: 0
              }}
              className="process-dotted-line"
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 1
              }}
              className="process-steps-row"
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
                    {/* Circle Icon Badge */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #C99A32',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6A1D28',
                        marginBottom: '0.75rem',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                      }}
                    >
                      <IconComp size={18} />
                    </div>

                    {/* Step Number */}
                    <span
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#6A1D28'
                      }}
                    >
                      {s.num}
                    </span>

                    {/* Title & Subtitle */}
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#1C1917',
                        marginTop: '0.2rem',
                        lineHeight: 1.25
                      }}
                    >
                      {s.title}
                    </span>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: '#78716C',
                        lineHeight: 1.2
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

      <style>{`
        @media (max-width: 900px) {
          .services-process-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .process-steps-row {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
          .process-dotted-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
