import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesWorkInAction() {
  const stackPhotos = [
    {
      src: '/images/sofas/sofawork-02.png',
      alt: 'Mustard velvet modular sectional sofa'
    },
    {
      src: '/images/sofas/sofawork-03.png',
      alt: 'Burgundy velvet sofa bed'
    },
    {
      src: '/hero-contact.png',
      alt: 'Contemporary cream living room suite'
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
            gridTemplateColumns: 'minmax(320px, 1.4fr) minmax(280px, 1fr) minmax(180px, 0.7fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="action-work-grid"
        >
          {/* Left: Large Blue Modular Sofa Photo */}
          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/10',
                backgroundColor: '#EAE3D9',
                boxShadow: '0 14px 40px rgba(0,0,0,0.08)'
              }}
            >
              <img
                src="/hero-work.png"
                alt="Real furniture in real living space - RR Enterprises"
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

          {/* Center: Editorial Heading, Subtitle & Button */}
          <div style={{ padding: '0 0.5rem' }}>
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
              OUR WORK IN ACTION
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.4rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                letterSpacing: '-0.02em'
              }}
            >
              Real Furniture.<br />
              Real Spaces.
            </h2>

            <p
              style={{
                color: '#57534E',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                marginBottom: '1.75rem'
              }}
            >
              Take a look at some of our furniture work and see the quality and finish for yourself.
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
              View Our Works <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: 3 Stacked Preview Photos */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
            className="action-photos-stack"
          >
            {stackPhotos.map((photo, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  aspectRatio: '16/10',
                  backgroundColor: '#EAE3D9',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
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
        @media (max-width: 960px) {
          .action-work-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .action-photos-stack {
            flex-direction: row !important;
          }
          .action-photos-stack > div {
            flex: 1;
          }
        }
      `}</style>
    </section>
  );
}
