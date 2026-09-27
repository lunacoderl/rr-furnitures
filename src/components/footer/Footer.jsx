import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterXIcon } from '../ui/SocialIcons';
import { business } from '../../data/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#121010',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Main 4-5 Columns Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1.2fr 1.5fr 1fr',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}
          className="footer-columns-grid"
        >
          {/* Column 1: Monogram Brand Logo */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: 'Cinzel, "Playfair Display", Georgia, serif',
                  fontSize: '2rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#D4AF37',
                  lineHeight: 1
                }}
              >
                RR
              </span>
              <span
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.28em',
                  color: '#FFFFFF',
                  marginTop: '0.25rem'
                }}
              >
                FURNITURES
              </span>
            </Link>

            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.82rem',
                lineHeight: 1.6,
                marginTop: '1.25rem',
                maxWidth: '220px'
              }}
            >
              Furniture designed around your comfort.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Home', 'About', 'Services', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Custom Sofa Design', path: '/services' },
                { label: 'Manufacturing', path: '/services' },
                { label: 'Repair & Restoration', path: '/services' },
                { label: 'Cleaning', path: '/services' },
                { label: 'Foam & Upholstery', path: '/services' }
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={15} style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.15rem', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                  Michaels Bhavan, Lawyerpet, 1st Line, Corner, Ongole, Andhra Pradesh 523001
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={14} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                <a
                  href={`tel:${business.contact?.phone || business.phone || '09985704432'}`}
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {business.contact?.phoneDisplay || business.phone || '099857 04432'}
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Follow Us */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a
                href={business.social.instagram.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.color = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>

              <a
                href={business.social.youtube.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.color = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </a>

              <a
                href={business.social?.x?.url || business.social?.twitter?.url || 'https://x.com/rrenterprises99'}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.color = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                aria-label="X (Twitter)"
              >
                <TwitterXIcon size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem'
          }}
        >
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} RR Furnitures. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link
              to="/privacy"
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.75rem',
                textDecoration: 'none'
              }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link
              to="/terms"
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.75rem',
                textDecoration: 'none'
              }}
            >
              Terms & Conditions
            </Link>

            {/* Scroll to Top Circle Button */}
            <button
              onClick={scrollToTop}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                marginLeft: '1rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5A1621';
                e.currentTarget.style.borderColor = '#5A1621';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 500px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
