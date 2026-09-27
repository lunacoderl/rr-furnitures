import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sofa, Factory, Wrench, Sparkles, Armchair, Bed, Layers, ChevronRight } from 'lucide-react';
import { services } from '../../data/services';

export default function ServicesShowcase() {
  const scrollRef = useRef(null);

  const iconMap = {
    Sofa: Sofa,
    Factory: Factory,
    Wrench: Wrench,
    Sparkles: Sparkles,
    Armchair: Armchair,
    Bed: Bed,
    Layers: Layers
  };

  const servicePhotos = [
    '/images/sofas/sofawork-04.png',
    '/images/workshop/workshop-01.jpg',
    '/images/workshop/workshop-03.jpg',
    '/hero-service.png',
    '/images/sofas/sofawork-02.png',
    '/images/sofas/sofaworks-01.png',
    '/images/workshop/workshop-02.jpg'
  ];

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#171515',
        color: '#F6F0E7',
        position: 'relative',
        paddingTop: 'clamp(4.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(4.5rem, 6vw, 6rem)',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom">
        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Heading & Action (4 Columns) */}
          <div style={{ gridColumn: 'span 4', paddingRight: 'clamp(0rem, 2vw, 1.5rem)' }}>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C99A32',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              OUR SERVICES
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
                lineHeight: 1.15,
                color: '#F6F0E7',
                marginBottom: '1.25rem',
                fontWeight: 500
              }}
            >
              Complete Furniture<br />Solutions.
            </h2>

            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.7,
                color: '#DED3C2',
                opacity: 0.85,
                marginBottom: '2rem'
              }}
            >
              From custom sofas and manufacturing to repair, cleaning and upholstery — all under one roof.
            </p>

            <Link
              to="/services"
              style={{
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.75rem 1.65rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 20px rgba(90, 22, 33, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6E1B28';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5A1621';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Explore All Services</span>
              <span style={{ fontSize: '0.95rem' }}>➔</span>
            </Link>
          </div>

          {/* Right Column: 7 Service Cards Row / Carousel (8 Columns) */}
          <div style={{ gridColumn: 'span 8', position: 'relative' }}>
            
            <div
              ref={scrollRef}
              style={{
                display: 'flex',
                gap: '1rem',
                overflowX: 'auto',
                paddingBottom: '1rem',
                scrollSnapType: 'x mandatory'
              }}
              className="scrollbar-none"
            >
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Sofa;
                const photo = servicePhotos[index % servicePhotos.length];

                return (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    style={{
                      flex: '0 0 clamp(160px, 18vw, 195px)',
                      scrollSnapAlign: 'start',
                      textDecoration: 'none',
                      color: '#F6F0E7',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.3s ease'
                    }}
                    className="hover:border-[#C99A32] hover:-translate-y-1.5 group"
                  >
                    {/* Top Image with Rounded Top Corners */}
                    <div style={{ width: '100%', height: '140px', overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={photo}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        className="group-hover:scale-108"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, transparent 50%, rgba(23, 21, 21, 0.6) 100%)'
                        }}
                      />
                    </div>

                    {/* Bottom Container: Icon + Title */}
                    <div
                      style={{
                        padding: '1rem 0.85rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#1E1B1B'
                      }}
                    >
                      <IconComponent
                        size={22}
                        color="#DED3C2"
                        className="group-hover:text-[#C99A32] transition-colors"
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          lineHeight: 1.3,
                          color: '#F6F0E7'
                        }}
                      >
                        {service.title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Slider Arrow Navigation Button on Right */}
            <button
              type="button"
              onClick={scrollRight}
              style={{
                position: 'absolute',
                right: '0.25rem',
                top: '40%',
                transform: 'translateY(-50%)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(23, 21, 21, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#F6F0E7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 20,
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease'
              }}
              className="hover:border-[#C99A32] hover:text-[#C99A32]"
              aria-label="Scroll services right"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
