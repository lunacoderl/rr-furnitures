import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

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
                  href={`tel:${business.contact?.phone || business.phone || '07997145791'}`}
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
                  {business.contact?.phoneDisplay || business.phone || '79971 45791'}
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Direct Connect (Call & WhatsApp only) */}
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
              Direct Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                type="button"
                onClick={() => openDirectWhatsApp()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 0.85rem',
                  borderRadius: '6px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </button>

              <a
                href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+917997145791'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 0.85rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#F6F0E7',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C99A32';
                  e.currentTarget.style.color = '#C99A32';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = '#F6F0E7';
                }}
              >
                <Phone size={14} />
                <span>Call Hotline</span>
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
            © {new Date().getFullYear()} RR Enterprises. All Rights Reserved.
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
