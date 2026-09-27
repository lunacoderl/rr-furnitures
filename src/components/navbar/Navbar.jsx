import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Search } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Works', path: '/works' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* 
        MASTER NAVIGATION BAR:
        Ultra-clean, zero-clutter mobile layout + Sculpted Luxury Capsule on Desktop.
        100% sticky at all times with no overflow or screen crowding.
      */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          maxWidth: '100vw',
          zIndex: 1000,
          boxSizing: 'border-box',
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          padding: isScrolled ? '0.55rem 0' : '0.85rem 0',
          backgroundColor: isScrolled
            ? 'rgba(18, 16, 16, 0.96)'
            : 'rgba(23, 21, 21, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled
            ? '1px solid rgba(201, 154, 50, 0.22)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none'
        }}
      >
        <div
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            paddingLeft: 'clamp(1rem, 3vw, 2.5rem)',
            paddingRight: 'clamp(1rem, 3vw, 2.5rem)'
          }}
        >
          {/* BRAND LOGO & CREST (Streamlined & elegant on mobile) */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              color: '#F6F0E7',
              flexShrink: 0
            }}
          >
            {/* Architectural Gold Emblem */}
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '6px',
                border: '1.2px solid rgba(201, 154, 50, 0.6)',
                background: 'linear-gradient(135deg, #261D19 0%, #151110 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(201, 154, 50, 0.15)',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-brand)',
                  fontSize: '1.05rem',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-brand)',
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: '#F6F0E7',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap'
                  }}
                >
                  RR FURNITURES
                </span>
                <span
                  style={{
                    fontSize: '0.55rem',
                    padding: '0.08rem 0.3rem',
                    borderRadius: '3px',
                    backgroundColor: 'rgba(201, 154, 50, 0.15)',
                    border: '1px solid rgba(201, 154, 50, 0.35)',
                    color: '#D4AF37',
                    fontWeight: 600,
                    letterSpacing: '0.08em'
                  }}
                  className="hidden sm:inline-block"
                >
                  ONGOLE
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#A89985',
                  marginTop: '1px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap'
                }}
                className="hidden md:block"
              >
                BESPOKE SOFAS & MANUFACTURING
              </span>
            </div>
          </Link>

          {/* DESKTOP CENTER NAVIGATION CAPSULE (Hidden on mobile) */}
          <nav className="hidden lg:flex items-center">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                backgroundColor: 'rgba(23, 21, 21, 0.75)',
                padding: '0.3rem 0.45rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.08)'
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
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '0.02em',
                      textDecoration: 'none',
                      color: isActive ? '#171515' : '#E8E1D5',
                      backgroundColor: isActive ? '#C99A32' : 'transparent',
                      padding: '0.4rem 1.05rem',
                      borderRadius: '9999px',
                      transition: 'all 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
                      boxShadow: isActive
                        ? '0 4px 12px rgba(201, 154, 50, 0.35)'
                        : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#E8E1D5';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* DESKTOP RIGHT ACTIONS (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Catalog Search */}
            <Link
              to="/works"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D8C6AE',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C99A32';
                e.currentTarget.style.color = '#C99A32';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = '#D8C6AE';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              title="Explore Works Catalog"
              aria-label="Explore Works"
            >
              <Search size={15} />
            </Link>

            {/* Direct Phone Helpline */}
            <a
              href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+919985704432'}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.8rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#F6F0E7',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                transition: 'all 0.2s ease'
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

            {/* Primary CTA */}
            <Link
              to="/contact"
              style={{
                background: 'linear-gradient(135deg, #651F2A 0%, #4E131C 100%)',
                color: '#F6F0E7',
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                border: '1px solid rgba(201, 154, 50, 0.45)',
                boxShadow: '0 4px 15px rgba(101, 31, 42, 0.35)',
                transition: 'all 0.25s ease'
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

          {/* MOBILE MINIMAL CONTROLS (Clean, Single Hamburger button — zero crowding!) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: mobileMenuOpen ? 'rgba(201, 154, 50, 0.18)' : 'rgba(255, 255, 255, 0.07)',
                border: mobileMenuOpen ? '1px solid #C99A32' : '1px solid rgba(255, 255, 255, 0.14)',
                color: mobileMenuOpen ? '#C99A32' : '#F6F0E7',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* 
        COMPACT MOBILE DROPDOWN:
        Small floating luxury card, positioned cleanly under the header.
        Not full-screen! Clean links + quick Call & WhatsApp.
      */}
      {mobileMenuOpen && (
        <>
          {/* Invisible click-outside dismiss backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              zIndex: 995
            }}
            className="lg:hidden"
            aria-hidden="true"
          />

          {/* Sleek Floating Menu Dropdown */}
          <div
            style={{
              position: 'fixed',
              top: '56px',
              right: '0.85rem',
              width: '240px',
              zIndex: 999,
              backgroundColor: 'rgba(22, 20, 20, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '12px',
              border: '1px solid rgba(201, 154, 50, 0.35)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65)',
              padding: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
              boxSizing: 'border-box'
            }}
            className="lg:hidden"
          >
            {/* Navigation links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 500,
                      textDecoration: 'none',
                      color: isActive ? '#C99A32' : '#F6F0E7',
                      backgroundColor: isActive ? 'rgba(201, 154, 50, 0.12)' : 'transparent',
                      padding: '0.45rem 0.65rem',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#C99A32'
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Subtle Divider */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', margin: '0.2rem 0' }} />

            {/* ONLY Call and WhatsApp action buttons */}
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <a
                href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+919985704432'}`}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  backgroundColor: '#651F2A',
                  color: '#F6F0E7',
                  borderRadius: '6px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-sans)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <Phone size={13} />
                <span>Call</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  openDirectWhatsApp();
                  setMobileMenuOpen(false);
                }}
                style={{
                  flex: 1.2,
                  padding: '0.5rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  fontWeight: 600,
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-sans)',
                  cursor: 'pointer'
                }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
