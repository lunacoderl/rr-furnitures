import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
        MASTER HEADER: 
        100% STICKY on Mobile & Desktop, Zero Horizontal Overflow, 
        Sculpted Luxury Island Design on Desktop 
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
          transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
          padding: isScrolled ? '0.65rem 0' : '1.15rem 0',
          backgroundColor: isScrolled
            ? 'rgba(18, 16, 16, 0.94)'
            : 'rgba(23, 21, 21, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled
            ? '1px solid rgba(201, 154, 50, 0.22)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 12px 35px -8px rgba(0, 0, 0, 0.6)' : 'none'
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
            paddingLeft: 'clamp(1rem, 4vw, 3rem)',
            paddingRight: 'clamp(1rem, 4vw, 3rem)'
          }}
        >
          {/* LEFT: BESPOKE ROMAN MONOGRAM CREST */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              color: '#F6F0E7',
              transition: 'transform 0.25s ease'
            }}
            className="group"
          >
            {/* Architectural Gold Emblem Ring */}
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                border: '1.5px solid rgba(201, 154, 50, 0.55)',
                background: 'linear-gradient(135deg, rgba(35, 28, 26, 0.9) 0%, rgba(18, 14, 13, 0.95) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(201, 154, 50, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-brand)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
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
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#F6F0E7',
                    lineHeight: 1.1
                  }}
                >
                  RR FURNITURES
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '4px',
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
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#C2B6A6',
                  marginTop: '1px',
                  fontWeight: 500
                }}
              >
                BESPOKE SOFAS & CRAFTSMANSHIP
              </span>
            </div>
          </Link>

          {/* CENTER: UNIQUE DESKTOP FLOATING NAVIGATION CAPSULE */}
          <nav
            style={{
              display: 'none'
            }}
            className="hidden lg:flex items-center"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(23, 21, 21, 0.75)',
                padding: '0.35rem 0.5rem',
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
                      fontSize: '0.85rem',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '0.03em',
                      textDecoration: 'none',
                      color: isActive ? '#171515' : '#E8E1D5',
                      backgroundColor: isActive ? '#C99A32' : 'transparent',
                      padding: '0.45rem 1.15rem',
                      borderRadius: '9999px',
                      transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
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

          {/* RIGHT: DESKTOP LUXURY ACTIONS (Search + Phone Hotline + Primary CTA) */}
          <div
            style={{ display: 'none' }}
            className="hidden md:flex items-center gap-3.5"
          >
            {/* Quick Catalog Search */}
            <Link
              to="/works"
              style={{
                width: '38px',
                height: '38px',
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
              title="Explore Custom Works & Catalog"
              aria-label="Explore Works"
            >
              <Search size={16} />
            </Link>

            {/* Direct Phone Helpline Badge */}
            <a
              href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+919985704432'}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#F6F0E7',
                textDecoration: 'none',
                fontSize: '0.8rem',
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

            {/* Primary Luxury CTA Button */}
            <Link
              to="/contact"
              style={{
                background: 'linear-gradient(135deg, #651F2A 0%, #4E131C 100%)',
                color: '#F6F0E7',
                padding: '0.6rem 1.35rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.84rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(201, 154, 50, 0.45)',
                boxShadow: '0 4px 18px rgba(101, 31, 42, 0.4)',
                transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#C99A32';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(101, 31, 42, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(201, 154, 50, 0.45)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(101, 31, 42, 0.4)';
              }}
            >
              <span>Get in Touch</span>
              <span style={{ color: '#D4AF37', fontSize: '0.9rem' }}>➔</span>
            </Link>
          </div>

          {/* MOBILE CONTROLS: WhatsApp Quick Tap + Menu Toggle */}
          <div
            style={{ display: 'flex' }}
            className="flex lg:hidden items-center gap-2.5"
          >
            <button
              type="button"
              onClick={() => openDirectWhatsApp()}
              style={{
                background: 'rgba(37, 211, 102, 0.16)',
                border: '1px solid rgba(37, 211, 102, 0.35)',
                color: '#25D366',
                padding: '0.45rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer'
              }}
              aria-label="Direct WhatsApp Enquiry"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                color: '#F6F0E7',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* COMPACT FLOATING MOBILE DROPDOWN (Small, Right below header, NOT full screen) */}
      {mobileMenuOpen && (
        <>
          {/* Subtle click-outside backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              zIndex: 995
            }}
            className="lg:hidden"
            aria-hidden="true"
          />

          {/* Small Sleek Floating Menu Card */}
          <div
            style={{
              position: 'fixed',
              top: '68px',
              right: '1rem',
              width: 'calc(100% - 2rem)',
              maxWidth: '300px',
              zIndex: 999,
              backgroundColor: 'rgba(20, 18, 18, 0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1.5px solid rgba(201, 154, 50, 0.35)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxSizing: 'border-box'
            }}
            className="lg:hidden"
          >
            {/* Header label */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: '#C99A32',
                  textTransform: 'uppercase',
                  fontWeight: 700
                }}
              >
                Menu Directory
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: '#A89985',
                  fontWeight: 500
                }}
              >
                RR Furnitures
              </span>
            </div>

            {/* Navigation links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
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
                      fontSize: '0.92rem',
                      fontWeight: isActive ? 700 : 500,
                      textDecoration: 'none',
                      color: isActive ? '#C99A32' : '#F6F0E7',
                      backgroundColor: isActive ? 'rgba(201, 154, 50, 0.12)' : 'transparent',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
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
            <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />

            {/* ONLY Call and WhatsApp action buttons! */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <a
                href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+919985704432'}`}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  backgroundColor: '#651F2A',
                  color: '#F6F0E7',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-sans)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <Phone size={14} />
                <span>Call {business.contact?.phone || business.phone || '099857 04432'}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  openDirectWhatsApp();
                  setMobileMenuOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  fontWeight: 600,
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-sans)',
                  cursor: 'pointer'
                }}
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
