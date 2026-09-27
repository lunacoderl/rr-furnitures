import React from 'react';
import { Clock, MapPin, ExternalLink } from 'lucide-react';
import { business } from '../../data/business';

export default function ContactLocationHours() {
  const days = [
    { day: 'Monday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Thursday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Friday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 9:00 PM' }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '0 0 5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
          className="location-hours-grid"
        >
          {/* Column 1: Find Us Easily (Map Preview Card) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid #ECE4DA',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#1C1917',
                  margin: '0 0 0.35rem 0'
                }}
              >
                Find Us Easily
              </h3>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: '#78716C',
                  margin: '0 0 1.25rem 0'
                }}
              >
                Located in the heart of Ongole.
              </p>
            </div>

            {/* Map Preview Card */}
            <a
              href={business.maps.directUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #E2D9CC',
                position: 'relative',
                display: 'block',
                textDecoration: 'none',
                aspectRatio: '16/9',
                backgroundColor: '#EAE3D9'
              }}
            >
              <iframe
                title="RR Furnitures Ongole Location"
                src="https://maps.google.com/maps?q=RR+Furnitures+Rikshala+Bazar+Islampet+Ongole+523001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)')}
              >
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#6A1D28',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <MapPin size={13} /> Open in Google Maps <ExternalLink size={12} />
                </div>
              </div>
            </a>
          </div>

          {/* Column 2: Business Hours */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid #ECE4DA',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#F8F4EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6A1D28'
                }}
              >
                <Clock size={16} />
              </div>
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#1C1917',
                  margin: 0
                }}
              >
                Business Hours
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {days.map((d) => (
                <div
                  key={d.day}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.82rem',
                    paddingBottom: '0.45rem',
                    borderBottom: '1px solid #F5EFEB'
                  }}
                >
                  <span style={{ color: '#444', fontWeight: 500 }}>{d.day}</span>
                  <span style={{ color: '#78716C' }}>{d.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Storefront Photo with Illuminated RR Sign */}
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              border: '1px solid #ECE4DA',
              position: 'relative',
              backgroundColor: '#1E1B1B'
            }}
          >
            <img
              src="/images/workshop/workshop-07.jpg"
              alt="RR Furnitures Storefront in Ongole"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.85)'
              }}
            />
            {/* Glowing Brand Sign Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                backgroundColor: 'rgba(23, 20, 20, 0.75)',
                backdropFilter: 'blur(8px)',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}
            >
              <div
                style={{
                  fontFamily: 'Cinzel, "Playfair Display", Georgia, serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#D4AF37',
                  letterSpacing: '0.08em',
                  lineHeight: 1
                }}
              >
                RR
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.24em',
                  color: '#FFFFFF',
                  marginTop: '0.2rem'
                }}
              >
                FURNITURES
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-hours-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
