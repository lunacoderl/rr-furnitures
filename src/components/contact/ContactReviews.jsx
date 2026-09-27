import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { GoogleGIcon } from '../ui/SocialIcons';

export default function ContactReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Ravi Kumar',
      quote: 'Good Quality and service.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 2,
      name: 'Suresh Varma',
      quote: 'We can choose sofa cloth, foam and design here.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
    },
    {
      id: 3,
      name: 'Anusha Reddy',
      quote: 'Most recommended mattress shop in town.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header Row */}
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
          <div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.2rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.2,
                margin: '0 0 0.4rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              What Customers Say
            </h2>
            <p style={{ color: '#78716C', fontSize: '0.88rem', margin: 0 }}>
              Real feedback from our customers on Google.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GoogleGIcon size={20} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#1C1917' }}>4.8</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#78716C' }}>24 Google Reviews</div>
              </div>
            </div>

            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
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
              View All Reviews <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* 3 Customer Review Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem'
          }}
          className="contact-reviews-cards"
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '1.6rem 1.4rem',
                border: '1px solid #ECE4DA',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '190px'
              }}
            >
              <div>
                {/* Top Quote Mark & Stars */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      color: '#D4AF37',
                      fontWeight: 700
                    }}
                  >
                    “
                  </span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                </div>

                <p
                  style={{
                    color: '#1C1917',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                    fontWeight: 500,
                    margin: '0 0 1.25rem 0'
                  }}
                >
                  {r.quote}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #F5EFEB'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: '#EAE3D9'
                  }}
                >
                  <img
                    src={r.avatar}
                    alt={r.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <GoogleGIcon size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-reviews-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
