import React from 'react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterXIcon } from '../ui/SocialIcons';
import { business } from '../../data/business';

export default function SocialShowcase() {
  const reelCards = [
    {
      id: 1,
      image: '/hero-home.png',
      alt: 'Luxury burgundy sofa showcase reel'
    },
    {
      id: 2,
      image: '/hero-work.png',
      alt: 'Ocean blue sectional delivery reel'
    },
    {
      id: 3,
      image: '/hero-contact.png',
      alt: 'Living room comfort setup reel'
    },
    {
      id: 4,
      image: '/images/workshop/workshop-07.jpg',
      alt: 'Workshop artisan crafting reel'
    },
    {
      id: 5,
      image: '/images/workshop/workshop-08.jpg',
      alt: 'High density foam layering reel'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#4A1119',
        backgroundImage: 'linear-gradient(135deg, #4A1119 0%, #350A10 100%)',
        color: '#FFFFFF',
        padding: '4.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.1fr) minmax(400px, 1.9fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="social-showcase-grid"
        >
          {/* Left Column: Heading & 3 Social Channel Links */}
          <div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.4rem',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              MORE WORK.<br />
              MORE INSPIRATION.
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                marginTop: '1rem',
                marginBottom: '2rem',
                maxWidth: '340px'
              }}
            >
              Follow our journey on social media for the latest reels, updates and ideas.
            </p>

            {/* 3 Channels Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem'
              }}
              className="social-channels-row"
            >
              {/* Instagram */}
              <div>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginBottom: '0.6rem'
                  }}
                >
                  <InstagramIcon size={18} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  @rrfurnitures1980
                </div>
                <a
                  href={business.social.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    marginTop: '0.25rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  Follow Us <ArrowRight size={11} />
                </a>
              </div>

              {/* YouTube */}
              <div>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginBottom: '0.6rem'
                  }}
                >
                  <YoutubeIcon size={18} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  RR Ramachandra Reddy
                </div>
                <a
                  href={business.social.youtube.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    marginTop: '0.25rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  Subscribe <ArrowRight size={11} />
                </a>
              </div>

              {/* X / Twitter */}
              <div>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginBottom: '0.6rem'
                  }}
                >
                  <TwitterXIcon size={16} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  @rrenterprises99
                </div>
                <a
                  href={business.social?.x?.url || business.social?.twitter?.url || 'https://x.com/rrenterprises99'}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    marginTop: '0.25rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  Follow Us <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Vertical Reel Cards with Slider Arrow */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '0.65rem'
              }}
              className="reel-cards-row"
            >
              {reelCards.map((reel) => (
                <div
                  key={reel.id}
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    aspectRatio: '9/15',
                    backgroundColor: '#2A080E',
                    position: 'relative',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <img
                    src={reel.image}
                    alt={reel.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                  {/* Small Play Button */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <Play size={10} style={{ fill: 'currentColor', marginLeft: '1px' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Edge Slide Arrow */}
            <div
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .social-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .reel-cards-row {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .social-channels-row {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .reel-cards-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
