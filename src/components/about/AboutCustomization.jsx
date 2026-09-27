import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Armchair, Palette, Layers } from 'lucide-react';

export default function AboutCustomization() {
  const steps = [
    {
      num: '01',
      title: 'Design',
      desc: 'Choose the form and style.',
      icon: Armchair,
      image: '/images/sofas/sofawork-01.png',
      alt: 'Sofa design and structure'
    },
    {
      num: '02',
      title: 'Fabric',
      desc: 'Wide range of upholstery options.',
      icon: Palette,
      image: '/hero-service.png',
      alt: 'Fabric and textile swatches'
    },
    {
      num: '03',
      title: 'Foam',
      desc: 'Comfort options for your needs.',
      icon: Layers,
      image: '/images/workshop/workshop-08.jpg',
      alt: 'Certified density foam layering'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '5rem 0',
        borderTop: '1px solid #EAE3D9',
        borderBottom: '1px solid #EAE3D9',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.1fr) minmax(400px, 2fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="customization-about-grid"
        >
          {/* Left Column: Heading, Subtitle & CTA */}
          <div style={{ paddingRight: '1rem' }}>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}
            >
              YOUR SOFA.<br />
              <span style={{ color: '#5A1621' }}>YOUR CHOICES.</span>
            </h2>

            <p
              style={{
                color: '#57534E',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                marginTop: '1.25rem',
                marginBottom: '1.75rem',
                maxWidth: '380px'
              }}
            >
              Customization gives every piece its own character. Choose the design, fabric and foam that suits your style, space and comfort.
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
              Explore Customization <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: 3 Step Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}
            className="steps-about-grid"
          >
            {steps.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.num}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '1rem 0.9rem',
                    border: '1px solid #EBE4DA',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '230px'
                  }}
                >
                  {/* Top Image */}
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      height: '110px',
                      backgroundColor: '#F5EFEB',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <img
                      src={s.image}
                      alt={s.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom Text & Icon */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.35rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span
                          style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: '#5A1621'
                          }}
                        >
                          {s.num}
                        </span>
                        <span
                          style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: '#1C1917'
                          }}
                        >
                          {s.title}
                        </span>
                      </div>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          backgroundColor: '#F7F3EE',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#5A1621'
                        }}
                      >
                        <IconComp size={13} />
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '0.74rem',
                        color: '#78716C',
                        lineHeight: 1.35,
                        margin: 0
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .customization-about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .steps-about-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .steps-about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
