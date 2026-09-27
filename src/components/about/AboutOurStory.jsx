import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Armchair, Layers, Scissors, ShieldCheck, ChevronRight } from 'lucide-react';

export default function AboutOurStory() {
  const pillars = [
    {
      id: 'design',
      title: 'Design',
      desc: 'Ideas shaped around your space.',
      icon: Armchair
    },
    {
      id: 'materials',
      title: 'Materials',
      desc: 'Wide range of fabrics and foam options.',
      icon: Layers
    },
    {
      id: 'craftsmanship',
      title: 'Craftsmanship',
      desc: 'Furniture built with attention to detail.',
      icon: Scissors
    },
    {
      id: 'care',
      title: 'Care',
      desc: 'Repair, cleaning and upholstery solutions.',
      icon: ShieldCheck
    }
  ];

  return (
    <section
      id="our-story"
      style={{
        backgroundColor: '#FBF9F5',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1.1fr) minmax(320px, 1.2fr) minmax(280px, 1fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="our-story-grid"
        >
          {/* Left Column: Heading, Copy & CTA */}
          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: '#6A1D28',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              OUR STORY
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                letterSpacing: '-0.02em'
              }}
            >
              <span style={{ color: '#6A1D28' }}>More Than Furniture.</span><br />
              <span style={{ color: '#1C1917' }}>It's Your Space.</span>
            </h2>

            <p
              style={{
                color: '#57534E',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '380px'
              }}
            >
              RR Enterprises focuses on creating furniture that balances comfort, design and practical requirements. From customized sofa designs to manufacturing, upholstery and furniture-care services, we work across different stages of the furniture experience.
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
              Know Our Journey <ArrowRight size={14} />
            </Link>
          </div>

          {/* Center Column: Photographic Collage */}
          <div style={{ position: 'relative' }}>
            {/* Faint script decorative RR in background */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '10px',
                fontFamily: 'Cinzel, "Playfair Display", Georgia, serif',
                fontSize: '6.5rem',
                color: 'rgba(212, 175, 55, 0.16)',
                userSelect: 'none',
                pointerEvents: 'none',
                lineHeight: 1,
                zIndex: 0
              }}
            >
              RR
            </div>

            {/* Main Image */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
                aspectRatio: '4/3',
                backgroundColor: '#EAE3D9',
                position: 'relative',
                zIndex: 1
              }}
            >
              <img
                src="/hero-contact.png"
                alt="RR Enterprises bespoke living space"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Inset Detail Image */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '15px',
                width: '120px',
                height: '120px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '4px solid #FFFFFF',
                boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                backgroundColor: '#FFF',
                zIndex: 2
              }}
            >
              <img
                src="/images/workshop/workshop-08.jpg"
                alt="Artisan upholstery finish"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Right Column: 4 Feature Pillars with Icons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            {pillars.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    border: '1px solid #ECE4DA',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C99A32';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#ECE4DA';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#F8F4EE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7D2431',
                        flexShrink: 0
                      }}
                    >
                      <IconComp size={18} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'Playfair Display, serif',
                          fontSize: '0.98rem',
                          fontWeight: 600,
                          color: '#1C1917',
                          margin: 0
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          color: '#78716C',
                          margin: '0.15rem 0 0 0'
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <ChevronRight size={14} style={{ color: '#A8A29E', flexShrink: 0 }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .our-story-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
