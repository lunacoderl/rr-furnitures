import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Works', path: '/works' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    /* 
      MASTER STICKY NAVIGATION BAR:
      - 100% Fixed at Top across ALL pages & viewports
      - Desktop: Elegant Single-Row with Centered [Home, About, Services, Works, Contact] Capsule
      - Mobile: Direct Two-Tier Architectural Nav with [Home, About, Services, Works, Contact] ALWAYS VISIBLE (Zero Clumsy Dropdowns!)
    */
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        maxWidth: '100vw',
        zIndex: 1000,
        boxSizing: 'border-box',
        transition: 'all 0.25s ease',
        backgroundColor: isScrolled
          ? 'rgba(16, 14, 14, 0.96)'
          : 'rgba(23, 21, 21, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201, 154, 50, 0.22)',
        boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.65)' : '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* =========================================================================
          DESKTOP VIEW (Screen >= 900px): Sleek 3-Zone Luxury Navbar
          ========================================================================= */}
      <div
        className="hidden md:flex container-custom"
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: isScrolled ? '0.65rem clamp(1rem, 3vw, 2.5rem)' : '0.95rem clamp(1rem, 3vw, 2.5rem)',
          transition: 'padding 0.25s ease'
        }}
      >
        {/* Left: Brand Monogram & Title */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#F6F0E7',
            flexShrink: 0
          }}
        >
          {/* Gold Crest */}
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '7px',
              border: '1.5px solid rgba(201, 154, 50, 0.7)',
              background: 'linear-gradient(135deg, #2A1F1B 0%, #151110 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 12px rgba(201, 154, 50, 0.2)',
              flexShrink: 0
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-brand)',
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#D4AF37',
                lineHeight: 1
              }}
            >
              RR
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-brand)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  color: '#F6F0E7',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap'
                }}
              >
                RR FURNITURES
              </span>
              <span
                style={{
                  fontSize: '0.58rem',
                  padding: '0.1rem 0.35rem',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(201, 154, 50, 0.15)',
                  border: '1px solid rgba(201, 154, 50, 0.35)',
                  color: '#D4AF37',
                  fontWeight: 600,
                  letterSpacing: '0.08em'
                }}
              >
                ONGOLE
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A89985',
                marginTop: '1px',
                fontWeight: 500,
                whiteSpace: 'nowrap'
              }}
            >
              BESPOKE SOFAS & CRAFTSMANSHIP
            </span>
          </div>
        </Link>

        {/* Center: Prominent Navigation Links Capsule */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(23, 21, 21, 0.85)',
            padding: '0.35rem 0.5rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 4px 15px rgba(0,0,0,0.3)',
            gap: '0.25rem'
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== '/' && location.pathname.startsWith(link.path));

            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  color: isActive ? '#171515' : '#EAE3D9',
                  backgroundColor: isActive ? '#C99A32' : 'transparent',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  transition: 'all 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
                  boxShadow: isActive
                    ? '0 3px 12px rgba(201, 154, 50, 0.4)'
                    : 'none',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#EAE3D9';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Hotline + Get in Touch Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+919985704432'}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F6F0E7',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            className="hidden xl:flex"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201, 154, 50, 0.4)';
              e.currentTarget.style.backgroundColor = 'rgba(201, 154, 50, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
            title="Call RR Furnitures"
          >
            <Phone size={13} color="#C99A32" />
            <span>099857 04432</span>
          </a>

          <Link
            to="/contact"
            style={{
              background: 'linear-gradient(135deg, #651F2A 0%, #4E131C 100%)',
              color: '#F6F0E7',
              padding: '0.55rem 1.35rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.84rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              border: '1px solid rgba(201, 154, 50, 0.45)',
              boxShadow: '0 4px 15px rgba(101, 31, 42, 0.4)',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.borderColor = '#C99A32';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(201, 154, 50, 0.45)';
            }}
          >
            <span>Get in Touch</span>
            <span style={{ color: '#D4AF37', fontSize: '0.85rem' }}>➔</span>
          </Link>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW (Screen < 900px): Clean Two-Tier Direct Sticky Header
          ALL 5 LINKS (Home, About, Services, Works, Contact) ALWAYS VISIBLE!
          NO Clumsy Dropdowns or Fullscreen Takeovers!
          ========================================================================= */}
      <div
        className="flex md:hidden"
        style={{
          flexDirection: 'column',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Tier 1: Brand Logo + Instant Call & WhatsApp Micro-Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.55rem 1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Brand Emblem + Name */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              textDecoration: 'none',
              color: '#F6F0E7'
            }}
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '6px',
                border: '1.2px solid rgba(201, 154, 50, 0.65)',
                background: 'linear-gradient(135deg, #2A1F1B 0%, #151110 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-brand)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#D4AF37',
                  lineHeight: 1
                }}
              >
                RR
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-brand)',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: '#F6F0E7',
                  lineHeight: 1
                }}
              >
                RR FURNITURES
              </span>
              <span
                style={{
                  fontSize: '0.52rem',
                  padding: '0.05rem 0.25rem',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(201, 154, 50, 0.15)',
                  border: '1px solid rgba(201, 154, 50, 0.35)',
                  color: '#D4AF37',
                  fontWeight: 600,
                  letterSpacing: '0.06em'
                }}
              >
                ONGOLE
              </span>
            </div>
          </Link>

          {/* Micro Actions: Direct Call & WhatsApp */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <a
              href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+919985704432'}`}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#651F2A',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#F6F0E7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
              title="Call RR Furnitures"
              aria-label="Call RR Furnitures"
            >
              <Phone size={14} />
            </a>

            <button
              type="button"
              onClick={() => openDirectWhatsApp()}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                border: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </button>
          </div>
        </div>

        {/* Tier 2: The 5 Essential Navigation Links Track (Always Direct 1-Tap Access!) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.4rem 0.75rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            gap: '0.25rem'
          }}
          className="mobile-nav-track"
        >
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== '/' && location.pathname.startsWith(link.path));

            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.01em',
                  textDecoration: 'none',
                  color: isActive ? '#171515' : '#DED3C2',
                  backgroundColor: isActive ? '#C99A32' : 'rgba(255, 255, 255, 0.05)',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  border: isActive ? '1px solid #E0AE41' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive ? '0 2px 8px rgba(201, 154, 50, 0.4)' : 'none',
                  textAlign: 'center',
                  flex: '1 0 auto',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.18s ease'
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <style>{`
        .mobile-nav-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
}
