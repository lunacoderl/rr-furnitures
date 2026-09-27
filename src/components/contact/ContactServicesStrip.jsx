import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ContactServicesStrip({ onSelectService }) {
  const services = [
    {
      id: 'custom-sofa',
      title: 'Custom Sofa Design',
      image: '/hero-contact.png'
    },
    {
      id: 'manufacturing',
      title: 'Sofa Manufacturing',
      image: '/images/sofas/sofawork-02.png'
    },
    {
      id: 'repair',
      title: 'Repair & Restoration',
      image: '/images/workshop/workshop-07.jpg'
    },
    {
      id: 'sofa-cleaning',
      title: 'Sofa Cleaning',
      image: '/hero-service.png'
    },
    {
      id: 'chair-cleaning',
      title: 'Chair Cleaning',
      image: '/images/sofas/sofaworks-03.png'
    },
    {
      id: 'bed-cleaning',
      title: 'Bed Cleaning',
      image: '/images/sofas/sofaworks-01.png'
    },
    {
      id: 'foam-upholstery',
      title: 'Foam & Upholstery',
      image: '/images/workshop/workshop-08.jpg'
    }
  ];

  const handleCardClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const formEl = document.getElementById('enquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '1rem 0 5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.2rem',
              fontWeight: 600,
              color: '#1C1917',
              lineHeight: 1.2,
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.01em'
            }}
          >
            What Would You Like to Discuss?
          </h2>
          <p
            style={{
              color: '#78716C',
              fontSize: '0.88rem',
              margin: 0
            }}
          >
            Choose a service to get started. It will be pre-selected in the form above.
          </p>
        </div>

        {/* 7 Horizontal Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.85rem'
          }}
          className="contact-services-grid"
        >
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.title)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #ECE4DA',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
              }}
            >
              <div
                style={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  backgroundColor: '#EAE3D9'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>

              <div
                style={{
                  padding: '0.85rem 0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#1C1917',
                    lineHeight: 1.25
                  }}
                >
                  {item.title}
                </span>

                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#F8F4EE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6A1D28',
                    flexShrink: 0,
                    marginLeft: '0.25rem'
                  }}
                >
                  <ChevronRight size={11} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-services-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .contact-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
