import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ArrowRight } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function ContactQuickCards() {
  const cards = [
    {
      id: 'call',
      icon: Phone,
      title: 'Call Us',
      highlight: business.contact?.phoneDisplay || '099857 04432',
      desc: 'Talk directly with our team.',
      action: () => {
        window.location.href = `tel:${business.contact?.phone || '09985704432'}`;
      },
      image: '/images/workshop/workshop-01.jpg'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      iconColor: '#25D366',
      title: 'WhatsApp',
      highlight: 'Chat With Us',
      desc: 'Quickest way to get a response.',
      action: () => openDirectWhatsApp(),
      image: '/hero-service.png'
    },
    {
      id: 'visit',
      icon: MapPin,
      title: 'Visit Our Store',
      highlight: 'Ongole Showroom',
      desc: 'Find us on Google Maps.',
      action: () => {
        window.open(business.maps.directUrl, '_blank');
      },
      image: '/images/workshop/workshop-05.jpg'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      highlight: 'rrfurnitures@gmail.com',
      desc: 'Drop us a message anytime.',
      action: () => {
        window.location.href = 'mailto:rrfurnitures@gmail.com';
      },
      image: '/images/workshop/workshop-08.jpg'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '3rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem'
          }}
          className="quick-cards-grid"
        >
          {cards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.id}
                onClick={card.action}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '1.4rem',
                  border: '1px solid #ECE4DA',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C99A32';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ECE4DA';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.03)';
                }}
              >
                {/* Left Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ color: card.iconColor || '#6A1D28', marginBottom: '0.4rem' }}>
                    <IconComp size={18} />
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#78716C', fontWeight: 500 }}>
                    {card.title}
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1C1917', margin: '0.15rem 0' }}>
                    {card.highlight}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#A8A29E' }}>
                    {card.desc}
                  </div>
                </div>

                {/* Right Miniature Visual & Circular Arrow Button */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', height: '100%' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      backgroundColor: '#F5EFEB',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#5A1621',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .quick-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .quick-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
