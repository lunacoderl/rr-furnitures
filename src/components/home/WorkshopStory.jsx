import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function WorkshopStory() {
  const craftPhotos = [
    {
      src: '/images/workshop/workshop-01.jpg',
      alt: 'Hands tailoring luxury upholstery fabric'
    },
    {
      src: '/images/workshop/workshop-03.jpg',
      alt: 'Solid timber frame and tensile spring webbing'
    },
    {
      src: '/images/workshop/workshop-04.jpg',
      alt: 'Heavy duty precision industrial sewing'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#151313',
        color: '#FFFFFF',
        padding: '5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 0.8fr) minmax(260px, 1fr) minmax(360px, 1.8fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="workshop-grid"
        >
          {/* Left: Craftsman at workbench */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                backgroundColor: '#222',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)'
              }}
            >
              <img
                src="/images/workshop/workshop-07.jpg"
                alt="Master craftsman at work in RR Furnitures workshop"
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

          {/* Center: Title & Story Copy */}
          <div style={{ padding: '0 0.5rem' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: '#D4AF37',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              ONLINE DIRECT
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.4rem',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              FROM WORKSHOP<br />
              TO HOME.
            </h2>

            <p
              style={{
                color: '#A8A29E',
                fontSize: '0.9rem',
                lineHeight: 1.65,
                marginTop: '1.25rem',
                marginBottom: '1.75rem',
                maxWidth: '320px'
              }}
            >
              Skilled craft, quality materials and careful finishing come together to create furniture that fits your space.
            </p>

            <Link
              to="/about"
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
                boxShadow: '0 4px 14px rgba(90, 22, 33, 0.4)',
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
              See Our Process <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: 3 Craft Photos in a row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}
            className="craft-photos-grid"
          >
            {craftPhotos.map((photo, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  backgroundColor: '#262323',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .workshop-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .craft-photos-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .craft-photos-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
