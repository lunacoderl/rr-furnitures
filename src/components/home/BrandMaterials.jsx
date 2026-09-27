import React from 'react';

export default function BrandMaterials() {
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
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          minHeight: '84px',
          width: '100%'
        }}
        className="brand-strip-container"
      >
        {/* Left Dark Wood Block */}
        <div
          style={{
            backgroundColor: '#2A1F1B',
            backgroundImage: 'radial-gradient(circle at 50% 50%, #3D2B24 0%, #1F1714 100%)',
            padding: '1.2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '260px',
            borderRight: '1px solid rgba(255,255,255,0.1)'
          }}
          className="brand-strip-title"
        >
          <span
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#D4AF37',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}
          >
            BRANDS & MATERIALS
          </span>
        </div>

        {/* Right White Logos Strip */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#FBF9F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '1rem 2rem',
            gap: '2rem',
            overflowX: 'auto'
          }}
          className="brand-logos-row"
        >
          {brandLogos.map((brand) => (
            <div
              key={brand.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem 1rem',
                opacity: 0.9,
                transition: 'opacity 0.2s ease',
                flexShrink: 0
              }}
            >
              {brand.render()}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .brand-strip-container {
            flex-direction: column !important;
          }
          .brand-strip-title {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
            padding: 1rem !important;
          }
          .brand-logos-row {
            padding: 1.5rem 1rem !important;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
