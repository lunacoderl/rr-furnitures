import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterXIcon } from '../ui/SocialIcons';
import { business } from '../../data/business';

export default function ContactSocial() {
  const previewWorks = [
    { id: 1, image: '/images/sofas/sofawork-02.png', alt: 'Mustard Sectional Sofa' },
    { id: 2, image: '/images/sofas/sofawork-01.png', alt: 'Cream L-Sectional' },
    { id: 3, image: '/images/sofas/sofawork-03.png', alt: 'Burgundy Velvet Sofa Bed' },
    { id: 4, image: '/hero-work.png', alt: 'Blue Modular Sofa' },
    { id: 5, image: '/images/sofas/sofaworks-01.png', alt: 'Charcoal Modern Sofa' },
    { id: 6, image: '/images/workshop/workshop-01.jpg', alt: 'Workshop Craftsmanship' }
  ];

  return (
    <section
      style={{
        backgroundColor: '#FBF9F5',
        padding: '0 0 5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Top Header Row with Social Channel Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem'
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
              See More of Our Work
            </h2>
            <p style={{ color: '#78716C', fontSize: '0.88rem', margin: 0 }}>
              Follow us on social media for latest designs, updates and ideas.
            </p>
          </div>

          {/* Social Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Instagram */}
            <a
              href={business.social.instagram.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#E1306C',
                color: '#FFFFFF',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(225, 48, 108, 0.25)'
              }}
            >
              <InstagramIcon size={14} />
              <span>@rrfurnitures1980</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.85 }}>Follow ➔</span>
            </a>

            {/* YouTube */}
            <a
              href={business.social.youtube.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#DC2626',
                color: '#FFFFFF',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(220, 38, 38, 0.25)'
              }}
            >
              <YoutubeIcon size={14} />
              <span>RR Ramachandra Reddy</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.85 }}>Subscribe ➔</span>
            </a>

            {/* X */}
            <a
              href={business.social?.x?.url || business.social?.twitter?.url || 'https://x.com/rrenterprises99'}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#1E1B1B',
                color: '#FFFFFF',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            >
              <TwitterXIcon size={12} />
              <span>@rrenterprises99</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.85 }}>Follow ➔</span>
            </a>
          </div>
        </div>

        {/* 6 Preview Works Row with Slider Arrows */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '0.85rem'
            }}
            className="social-works-grid"
          >
            {previewWorks.map((item) => (
              <div
                key={item.id}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  aspectRatio: '16/10',
                  backgroundColor: '#EAE3D9',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  border: '1px solid #ECE4DA'
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  loading="lazy"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>

          {/* Left / Right Nav Circle Buttons */}
          <div
            style={{
              position: 'absolute',
              left: '-16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D6CEBE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#444',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronLeft size={16} />
          </div>

          <div
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D6CEBE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#444',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronRight size={16} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .social-works-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .social-works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
