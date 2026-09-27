import React from 'react';
import { Armchair, Compass, Award, ShieldCheck } from 'lucide-react';

export default function ServicesWhyChoose() {
  const pillars = [
    {
      id: 'customized',
      icon: Armchair,
      title: 'Customized Solutions'
    },
    {
      id: 'workmanship',
      icon: Compass,
      title: 'Skilled Workmanship'
    },
    {
      id: 'materials',
      icon: Award,
      title: 'Quality Materials'
    },
    {
      id: 'maintenance',
      icon: ShieldCheck,
      title: 'Care & Maintenance'
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
            gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(380px, 2fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="services-why-grid"
        >
          {/* Left Column: Heading & Subtitle */}
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
              Why Choose<br />
              Our Services?
            </h2>

            <p
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: '360px'
              }}
            >
              We focus on quality materials, skilled workmanship and personalized solutions for every furniture need.
            </p>
          </div>

          {/* Right Column: 4 Framed Square Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem'
            }}
            className="services-why-cards"
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
                    padding: '1.75rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    minHeight: '150px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
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
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
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
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: 1.3,
                      margin: 0
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-why-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .services-why-cards {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
