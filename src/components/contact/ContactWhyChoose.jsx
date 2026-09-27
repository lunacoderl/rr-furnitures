import React from 'react';
import { Armchair, Factory, Wrench, ShieldCheck } from 'lucide-react';

export default function ContactWhyChoose() {
  const pillars = [
    {
      id: 'customization',
      icon: Armchair,
      title: 'Customization',
      desc: 'Discuss design, fabric and foam choices.'
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Manufacturing',
      desc: 'Furniture making and finishing.'
    },
    {
      id: 'repair',
      icon: Wrench,
      title: 'Repair & Care',
      desc: 'Repair, cleaning and upholstery solutions.'
    },
    {
      id: 'oneplace',
      icon: ShieldCheck,
      title: 'One Place',
      desc: 'Multiple furniture solutions under one roof.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#26080D',
        backgroundImage: 'linear-gradient(135deg, #2D0B11 0%, #1A0508 100%)',
        color: '#FFFFFF',
        padding: '5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.1fr) minmax(360px, 1.4fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="why-contact-grid"
        >
          {/* Left Column: Heading & 4 Capability Blocks */}
          <div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: '0 0 2rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Why Contact<br />
              RR Enterprises?
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.75rem 1.5rem'
              }}
              className="why-contact-pillars"
            >
              {pillars.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E5C06E',
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
                          color: '#FFFFFF',
                          margin: '0 0 0.25rem 0'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          color: 'rgba(255, 255, 255, 0.65)',
                          lineHeight: 1.35,
                          margin: 0
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Landscape Photo of Blue Modular Sofa */}
          <div>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/10',
                backgroundColor: '#1E060A',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <img
                src="/hero-work.png"
                alt="RR Enterprises Blue Modular Sofa Creation"
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
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 520px) {
          .why-contact-pillars {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
