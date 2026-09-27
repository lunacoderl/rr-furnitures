import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Armchair, Factory, Wrench, Sparkles, Bed, Layers } from 'lucide-react';

export default function AboutWhatWeDo() {
  const services = [
    {
      id: 'custom-sofa',
      title: 'Custom Sofa Design',
      image: '/hero-contact.png',
      icon: Armchair,
      path: '/services'
    },
    {
      id: 'manufacturing',
      title: 'Sofa Manufacturing',
      image: '/images/sofas/sofawork-02.png',
      icon: Factory,
      path: '/services'
    },
    {
      id: 'repair',
      title: 'Repair & Restoration',
      image: '/images/workshop/workshop-07.jpg',
      icon: Wrench,
      path: '/services'
    },
    {
      id: 'sofa-cleaning',
      title: 'Sofa Cleaning',
      image: '/hero-service.png',
      icon: Sparkles,
      path: '/services'
    },
    {
      id: 'chair-cleaning',
      title: 'Chair Cleaning',
      image: '/images/sofas/sofaworks-03.png',
      icon: Armchair,
      path: '/services'
    },
    {
      id: 'bed-cleaning',
      title: 'Bed Cleaning',
      image: '/images/sofas/sofaworks-01.png',
      icon: Bed,
      path: '/services'
    },
    {
      id: 'foam-upholstery',
      title: 'Foam & Upholstery',
      image: '/images/workshop/workshop-08.jpg',
      icon: Layers,
      path: '/services'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#F5EFEB',
        padding: '5rem 0',
        borderTop: '1px solid #E8E0D2',
        borderBottom: '1px solid #E8E0D2',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Top Header Row with Watermark 02 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem',
            position: 'relative'
          }}
        >
          {/* Left Title */}
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
              WHAT WE DO
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em'
              }}
            >
              One Place. Multiple<br />
              Furniture Solutions.
            </h2>
          </div>

          {/* Right Subtitle & CTA */}
          <div style={{ maxWidth: '440px' }}>
            <p
              style={{
                color: '#57534E',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                margin: '0 0 1.25rem 0'
              }}
            >
              From custom sofas and manufacturing to repair, cleaning and upholstery, RR Furnitures brings together furniture solutions under one roof.
            </p>

            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(90, 22, 33, 0.25)',
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
              Explore All Services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Watermark 02 in Background */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '-15px',
              fontFamily: 'Playfair Display, serif',
              fontSize: '5.5rem',
              fontWeight: 700,
              color: 'rgba(212, 175, 55, 0.2)',
              userSelect: 'none',
              pointerEvents: 'none',
              lineHeight: 1
            }}
          >
            02
          </div>
        </div>

        {/* 7 Horizontal Rounded-Top Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.85rem'
          }}
          className="services-cards-grid"
        >
          {services.map((item) => {
            const IconComp = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #ECE4DA',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                }}
              >
                {/* Image Top */}
                <div
                  style={{
                    aspectRatio: '4/3',
                    overflow: 'hidden',
                    backgroundColor: '#EAE3D9'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Details Bottom */}
                <div
                  style={{
                    padding: '0.85rem 0.65rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', marginBottom: '0.5rem' }}>
                    <div style={{ color: '#7D2431', flexShrink: 0, marginTop: '2px' }}>
                      <IconComp size={15} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#1C1917',
                        lineHeight: 1.25
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#F8F4EE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7D2431'
                      }}
                    >
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-cards-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
