import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Works', path: '/works' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>

      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="navbar__desktop">
        {/* Left: Logo + Title */}
        <div className="navbar__left">
          <Link to="/" className="navbar__brand">
            <div className="navbar__logo-mark">
              <span>RR</span>
            </div>
            <div className="navbar__brand-text">
              <span className="navbar__brand-name">RR Enterprises</span>
              <span className="navbar__brand-sub">Ongole</span>
            </div>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="navbar__center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Get Quote */}
        <div className="navbar__right">
          <Link to="/contact" className="navbar__quote-btn">
            Get Quote
          </Link>
        </div>
      </div>

      {/* ===== MOBILE NAVBAR ===== */}
      <div className="navbar__mobile">
        {/* Left: Logo */}
        <Link to="/" className="navbar__mobile-logo">
          <div className="navbar__logo-mark navbar__logo-mark--sm">
            <span>RR</span>
          </div>
        </Link>

        {/* Center: Title */}
        <Link to="/" className="navbar__mobile-title">
          RR Enterprises
        </Link>

        {/* Right: Hamburger */}
        <button
          type="button"
          className={`navbar__hamburger ${mobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ===== MOBILE DROPDOWN ===== */}
      <div className={`navbar__dropdown ${mobileMenuOpen ? 'navbar__dropdown--open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className={`navbar__dropdown-link ${isActive(link.path) ? 'navbar__dropdown-link--active' : ''}`}
          >
            <span>{link.label}</span>
            {isActive(link.path) && <span className="navbar__dropdown-dot" />}
          </Link>
        ))}
        <div className="navbar__dropdown-divider" />
        <Link
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="navbar__dropdown-quote"
        >
          Get Quote
        </Link>
      </div>

      {/* Backdrop overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
