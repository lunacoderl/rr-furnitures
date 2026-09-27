import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function WorksGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Sofas', 'Sectionals', 'Sofa-cum-Bed', 'Recliner', 'Custom'];

  const allItems = [
    { id: 1, title: 'Bespoke Cream L-Sectional', category: 'Sectionals', image: '/images/sofas/sofawork-01.png' },
    { id: 2, title: 'Mustard Velvet Sectional', category: 'Sectionals', image: '/images/sofas/sofawork-02.png' },
    { id: 3, title: 'Burgundy Velvet Sofa Bed', category: 'Sofa-cum-Bed', image: '/images/sofas/sofawork-03.png' },
    { id: 4, title: 'Ocean Blue Modular Sofa', category: 'Sofas', image: '/images/sofas/sofawork-04.png' },
    { id: 5, title: 'Charcoal Linen Lounge Sofa', category: 'Sofas', image: '/images/sofas/sofaworks-01.png' },
    { id: 6, title: 'Caramel Leatherette Couch', category: 'Custom', image: '/images/sofas/sofaworks-02.png' },
    { id: 7, title: 'Neutral Contemporary Suite', category: 'Recliner', image: '/images/sofas/sofaworks-03.png' },
    { id: 8, title: 'Solid Wood Accent Sofa', category: 'Custom', image: '/images/sofas/sofaworks-04.png' }
  ];

  const filteredItems = activeFilter === 'All'
    ? allItems
    : allItems.filter(item => item.category === activeFilter);

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Top Header & Filter Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Left Column: Heading & Subtitle */}
          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: '#5A1621',
                textTransform: 'uppercase',
                borderLeft: '2px solid #5A1621',
                paddingLeft: '0.5rem',
                marginBottom: '0.6rem'
              }}
            >
              OUR WORKS
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.4rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em'
              }}
            >
              Made. Finished.<br />
              In Their Spaces.
            </h2>

            <p
              style={{
                color: '#666',
                fontSize: '0.9rem',
                marginTop: '0.6rem',
                marginBottom: '1rem'
              }}
            >
              A selection of sofa and furniture work from RR Enterprises.
            </p>

            <Link
              to="/works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(90, 22, 33, 0.25)',
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
              View All Works <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center'
            }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    backgroundColor: isActive ? '#380E15' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#444444',
                    border: isActive ? '1px solid #380E15' : '1px solid #D6CEBE',
                    borderRadius: '9999px',
                    padding: '0.45rem 1.1rem',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8-Grid Photo Gallery */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem'
            }}
            className="gallery-grid"
          >
            {(filteredItems.length > 0 ? filteredItems : allItems).map((item) => (
              <div
                key={item.id}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  aspectRatio: '16/10',
                  backgroundColor: '#EBE4D8',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  position: 'relative'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Right Floating Arrow */}
          <div
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D6CEBE',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333333',
              cursor: 'pointer',
              zIndex: 2
            }}
          >
            <ChevronRight size={18} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
