import React from 'react';

export default function ServicesIntro() {
  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1.1fr) minmax(320px, 1.2fr) minmax(280px, 0.9fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="services-intro-grid"
        >
          {/* Left Column: Heading & Subtitle */}
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
              OUR SERVICES
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
              Furniture Care<br />
              at Every Stage.
            </h2>

            <p
              style={{
                color: '#57534E',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '360px'
              }}
            >
              Whether you want a new custom sofa, need repair, a deep clean, or are looking for quality upholstery solutions, RR Furnitures is here to help.
            </p>
          </div>

          {/* Center Column: Sofa Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundColor: '#EAE3D9',
                boxShadow: '0 12px 35px rgba(0,0,0,0.06)'
              }}
            >
              <img
                src="/hero-contact.png"
                alt="Furniture Care at Every Stage - RR Furnitures"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Right Column: Narrative Card with Monogram & 7 Services Tag */}
          <div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                border: '1px solid #ECE4DA',
                boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              {/* Top Number */}
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#6A1D28',
                  display: 'block',
                  marginBottom: '0.85rem'
                }}
              >
                01
              </span>

              <p
                style={{
                  color: '#57534E',
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem'
                }}
              >
                From design to finishing, we bring together craftsmanship, materials and care to create furniture that fits your space.
              </p>

              {/* Bottom Cursive Script RR & 7 Services Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid #F5EFEB'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cinzel, "Playfair Display", Georgia, serif',
                    fontSize: '2rem',
                    color: '#D4AF37',
                    fontWeight: 700,
                    lineHeight: 1
                  }}
                >
                  RR
                </span>

                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: '#78716C',
                    textTransform: 'uppercase'
                  }}
                >
                  7 SERVICES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .services-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
