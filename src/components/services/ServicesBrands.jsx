import React from 'react';

export default function ServicesBrands() {
  const brandLogos = [
    {
      id: 'duroflex',
      name: 'duroflex',
      render: () => (
        <span style={{ color: '#E11D48', fontFamily: 'system-ui, sans-serif', fontWeight: 800, fontSize: '1.45rem', letterSpacing: '-0.03em' }}>
          duroflex
        </span>
      )
    },
    {
      id: 'mmfoam',
      name: 'M.M. FOAM',
      render: () => (
        <span style={{ color: '#0284C7', fontFamily: 'system-ui, sans-serif', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '0.04em' }}>
          M.M. FOAM
        </span>
      )
    },
    {
      id: 'surerest',
      name: 'SUREREST',
      render: () => (
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ backgroundColor: '#1E40AF', color: '#FFFFFF', padding: '0.15rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em' }}>
            SUREREST
          </span>
          <span style={{ fontSize: '0.55rem', color: '#991B1B', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            SPRING MATTRESS
          </span>
        </div>
      )
    },
    {
      id: 'century',
      name: 'CENTURY FOAMS',
      render: () => (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ display: 'inline-block', width: '18px', height: '18px', borderRadius: '50%', border: '3px solid #DC2626' }}></span>
          <span style={{ color: '#1C1917', fontFamily: 'system-ui, sans-serif', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.02em' }}>
            CENTURY <span style={{ color: '#DC2626' }}>FOAMS</span>
          </span>
        </div>
      )
    },
    {
      id: 'darpan',
      name: 'DARPAN CLOTH',
      render: () => (
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ color: '#1C1917', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.08em' }}>
            DARPAN
          </span>
          <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: '#666', textTransform: 'uppercase' }}>
            FABRIC & DÉCOR
          </span>
        </div>
      )
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #EAE3D9',
        borderBottom: '1px solid #EAE3D9',
        padding: '3.5rem 0',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(380px, 2fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="services-brands-grid"
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
                marginBottom: '0.5rem'
              }}
            >
              MATERIALS & BRANDS
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.85rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.2,
                margin: '0 0 0.6rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Quality You Can Trust.
            </h2>

            <p
              style={{
                color: '#666',
                fontSize: '0.82rem',
                lineHeight: 1.5,
                margin: 0
              }}
            >
              We work with trusted brands and quality materials to ensure better comfort, finish and long-lasting use.
            </p>
          </div>

          {/* Right Column: Brand Logos Ribbon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              overflowX: 'auto',
              padding: '0.5rem 0'
            }}
            className="services-brand-ribbon"
          >
            {brandLogos.map((brand) => (
              <div
                key={brand.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem',
                  opacity: 0.9,
                  flexShrink: 0
                }}
              >
                {brand.render()}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-brands-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .services-brand-ribbon {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
