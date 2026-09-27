import React from 'react';
import { Armchair, Factory, Compass, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: 'customization',
      icon: Armchair,
      title: 'Customization',
      desc: 'Design, fabric and foam choices.'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Manufacturing',
      desc: 'Furniture making capabilities.'
    },
    {
      id: 'craftsmanship',
      icon: Compass,
      title: 'Craftsmanship',
      desc: 'Attention to form and finish.'
    },
    {
      id: 'care',
      icon: Sparkles,
      title: 'Care & Maintenance',
      desc: 'Repair and cleaning services.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        borderTop: '1px solid #EAE3D9',
        borderBottom: '1px solid #EAE3D9',
        padding: '3.5rem 0'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr repeat(4, 1fr)',
            gap: '1.5rem',
            alignItems: 'center'
          }}
          className="why-rr-grid"
        >
          {/* Column 1: Main Title */}
          <div style={{ paddingRight: '1rem' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: '#78716C',
                textTransform: 'uppercase',
                marginBottom: '0.2rem'
              }}
            >
              WHY
            </span>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#1C1917',
                margin: '0 0 0.5rem 0',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              RR FURNITURES?
            </h2>
            <p
              style={{
                color: '#666',
                fontSize: '0.78rem',
                lineHeight: 1.45,
                margin: 0
              }}
            >
              Customization, manufacturing, craftsmanship and care — all under one roof.
            </p>
          </div>

          {/* Columns 2-5: The 4 Pillars */}
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  borderLeft: '1px solid #E8E0D2',
                  paddingLeft: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
                className="why-pillar"
              >
                <div
                  style={{
                    color: '#7D2431',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <IconComp size={28} strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#1C1917',
                    margin: '0 0 0.35rem 0'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#666',
                    fontSize: '0.75rem',
                    lineHeight: 1.35,
                    margin: 0
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-rr-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .why-pillar {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 540px) {
          .why-rr-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
