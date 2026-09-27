import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Armchair, Factory, Wrench, Sparkles, Bed, Layers } from 'lucide-react';

export default function ServicesGrid() {
  const row1 = [
    {
      num: '01',
      title: 'Custom Sofa Design',
      desc: 'Designed made around your space and comfort.',
      image: '/images/sofas/sofawork-01.png',
      icon: Armchair
    },
    {
      num: '02',
      title: 'Sofa Manufacturing',
      desc: 'Quality furniture manufacturing and finishing.',
      image: '/images/workshop/workshop-07.jpg',
      icon: Factory
    }
  ];

  const row2 = [
    {
      num: '03',
      title: 'Repair & Restoration',
      desc: 'Bring your furniture back to life.',
      image: '/images/workshop/workshop-01.jpg',
      icon: Wrench
    },
    {
      num: '04',
      title: 'Sofa Cleaning',
      desc: 'Deep cleaning for a fresh and healthy sofa.',
      image: '/hero-service.png',
      icon: Sparkles
    },
    {
      num: '05',
      title: 'Chair Cleaning',
      desc: 'Cleaning and care for all types of chairs.',
      image: '/images/sofas/sofaworks-03.png',
      icon: Armchair
    }
  ];

  const row3 = [
    {
      num: '06',
      title: 'Bed Cleaning',
      desc: 'Cleaning solutions for beds and mattresses.',
      image: '/images/sofas/sofaworks-01.png',
      icon: Bed
    },
    {
      num: '07',
      title: 'Foam & Upholstery Solutions',
      desc: 'Wide range of foam and fabric upholstery options.',
      image: '/images/workshop/workshop-08.jpg',
      icon: Layers
    }
  ];

  const renderServiceCard = (item, isCompact = false) => {
    const IconComp = item.icon;
    return (
      <div
        key={item.num}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid #ECE4DA',
          boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr 1fr' : '1.1fr 1.3fr',
          minHeight: isCompact ? '200px' : '230px',
          transition: 'all 0.25s ease'
        }}
        className="service-feature-card"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.03)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Left Side: Content */}
        <div
          style={{
            padding: isCompact ? '1.25rem 1.1rem' : '1.75rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            {/* Top Icon & Number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#F8F4EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6A1D28'
                }}
              >
                <IconComp size={16} />
              </div>
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#6A1D28'
                }}
              >
                {item.num}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: isCompact ? '1.15rem' : '1.35rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.25,
                margin: '0 0 0.5rem 0'
              }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: isCompact ? '0.75rem' : '0.82rem',
                color: '#78716C',
                lineHeight: 1.45,
                margin: 0
              }}
            >
              {item.desc}
            </p>
          </div>

          {/* Bottom Action Pill / Arrow Button */}
          <div style={{ marginTop: '1rem' }}>
            <Link
              to="/contact"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 10px rgba(90, 22, 33, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#741D2C';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5A1621';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label={`Inquire about ${item.title}`}
            >
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#EAE3D9' }}>
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
            loading="lazy"
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="services-grid"
      style={{
        backgroundColor: '#FBF9F5',
        padding: '2rem 0 5.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Row 1: 2 Cards (01 & 02) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
            marginBottom: '1.25rem'
          }}
          className="grid-2-col"
        >
          {row1.map((item) => renderServiceCard(item, false))}
        </div>

        {/* Row 2: 3 Cards (03, 04 & 05) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            marginBottom: '1.25rem'
          }}
          className="grid-3-col"
        >
          {row2.map((item) => renderServiceCard(item, true))}
        </div>

        {/* Row 3: 2 Cards (06 & 07) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem'
          }}
          className="grid-2-col"
        >
          {row3.map((item) => renderServiceCard(item, false))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .grid-2-col, .grid-3-col {
            grid-template-columns: 1fr !important;
          }
          .service-feature-card {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .service-feature-card {
            grid-template-columns: 1fr !important;
          }
          .service-feature-card > div:last-child {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
}
