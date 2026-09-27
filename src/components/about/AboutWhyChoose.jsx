import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Armchair, Factory, Compass, ShieldCheck } from 'lucide-react';

export default function AboutWhyChoose() {
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
      desc: 'Attention to detail and finish.'
    },
    {
      id: 'care',
      icon: ShieldCheck,
      title: 'Care & Maintenance',
      desc: 'Repair and cleaning services.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#15251C',
        backgroundImage: 'linear-gradient(135deg, #182B20 0%, #0E1A13 100%)',
        color: '#FFFFFF',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(380px, 2.2fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="why-choose-green-grid"
        >
          {/* Left Column: Heading, Subtitle & Button */}
          <div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Why Customers<br />
              Choose RR Furnitures?
            </h2>

            <p
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '340px'
              }}
            >
              A combination of customization, manufacturing, craftsmanship and furniture-care solutions makes RR Furnitures a preferred choice.
            </p>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#7D2431',
                color: '#FFFFFF',
                padding: '0.75rem 1.6rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#962B3B';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7D2431';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Column: 4 Framed Square Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem'
            }}
            className="green-cards-row"
          >
            {pillars.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    padding: '1.5rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '190px',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E5C06E',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <IconComp size={20} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      margin: '0 0 0.35rem 0'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.72rem',
                      color: 'rgba(255, 255, 255, 0.65)',
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
      </div>

      <style>{`
        @media (max-width: 960px) {
          .why-choose-green-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .green-cards-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .green-cards-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
