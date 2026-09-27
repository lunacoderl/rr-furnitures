import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutWorkshop() {
  const craftPhotos = [
    {
      src: '/images/workshop/workshop-01.jpg',
      alt: 'Artisan hand tailoring upholstery cushion'
    },
    {
      src: '/images/workshop/workshop-04.jpg',
      alt: 'Industrial sewing machine stitching velvet'
    },
    {
      src: '/images/workshop/workshop-03.jpg',
      alt: 'Artisan workshop frame and spring inspection'
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
            gridTemplateColumns: 'minmax(320px, 1fr) minmax(380px, 1.8fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="workshop-about-grid"
        >
          {/* Left Column: Heading & Subtitle */}
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
              OUR WORKSHOP
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#6A1D28',
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                letterSpacing: '-0.02em'
              }}
            >
              Where the Work<br />
              Happens.
            </h2>

            <p
              style={{
                color: '#57534E',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '380px'
              }}
            >
              Our workshop is where raw materials take shape. Skilled craftsmanship, quality materials and careful finishing come together to create furniture that fits your space.
            </p>

            <Link
              to="/works"
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
              Take a Look Inside <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: 3 Vertical Craft Photos */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}
            className="workshop-photos-row"
          >
            {craftPhotos.map((photo, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  backgroundColor: '#EAE3D9',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  border: '1px solid #ECE4DA'
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .workshop-about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 580px) {
          .workshop-photos-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
