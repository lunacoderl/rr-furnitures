import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { business } from '../../data/business';
import { openDirectWhatsApp } from '../../utils/createWhatsAppMessage';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    if (location.pathname === '/contact') {
      const formEl = document.getElementById('enquiry-form-section');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/contact');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    /* Global Vertical Floating CTA Dock - Fixed in Right Corner across ALL pages */
    <aside
      aria-label="Quick contact and navigation actions"
      className="global-floating-dock"
      style={{
        position: 'fixed',
        right: '1.25rem',
        bottom: '2rem',
        zIndex: 950,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.65rem',
        pointerEvents: 'auto'
      }}
    >
      {/* 1. SCROLL TO TOP CTA (Vertical alignment top item) */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={scrollToTop}
          onMouseEnter={() => setHoveredButton('top')}
          onMouseLeave={() => setHoveredButton(null)}
          title="Scroll to Top"
          aria-label="Scroll to top of page"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(23, 21, 21, 0.88)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(201, 154, 50, 0.45)',
            color: '#C99A32',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            opacity: showScrollTop ? 1 : 0,
            transform: showScrollTop ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(12px)',
            pointerEvents: showScrollTop ? 'auto' : 'none',
            visibility: showScrollTop ? 'visible' : 'hidden'
          }}
          className="dock-btn-hover"
        >
          <ArrowUp size={20} strokeWidth={2.4} />
        </button>

        {/* Desktop Tooltip */}
        {hoveredButton === 'top' && showScrollTop && (
          <div
            style={{
              position: 'absolute',
              right: '54px',
              backgroundColor: '#171515',
              color: '#F6F0E7',
              border: '1px solid rgba(201, 154, 50, 0.4)',
              borderRadius: '6px',
              padding: '0.35rem 0.65rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}
            className="hidden md:block"
          >
            Scroll to Top
          </div>
        )}
      </div>

      {/* 2. BOOK NOW CTA */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={handleBookNow}
          onMouseEnter={() => setHoveredButton('book')}
          onMouseLeave={() => setHoveredButton(null)}
          title="Book Now / Custom Enquiry"
          aria-label="Book Now"
          style={{
            height: '44px',
            minWidth: '44px',
            padding: '0 0.85rem',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #C99A32 0%, #A97A20 100%)',
            border: '1px solid #E0AE41',
            color: '#171515',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(201, 154, 50, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
          className="dock-btn-hover"
        >
          <Calendar size={18} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}
          >
            Book Now
          </span>
        </button>

        {/* Desktop Tooltip */}
        {hoveredButton === 'book' && (
          <div
            style={{
              position: 'absolute',
              right: '124px',
              backgroundColor: '#171515',
              color: '#F6F0E7',
              border: '1px solid rgba(201, 154, 50, 0.4)',
              borderRadius: '6px',
              padding: '0.35rem 0.65rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}
            className="hidden md:block"
          >
            Book Custom Sofa / Visit
          </div>
        )}
      </div>

      {/* 3. WHATSAPP CTA */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={() => openDirectWhatsApp()}
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
          className="dock-btn-hover"
        >
          <MessageCircle size={24} strokeWidth={2.2} />
        </button>

        {/* Desktop Tooltip */}
        {hoveredButton === 'whatsapp' && (
          <div
            style={{
              position: 'absolute',
              right: '56px',
              backgroundColor: '#171515',
              color: '#F6F0E7',
              border: '1px solid rgba(37, 211, 102, 0.4)',
              borderRadius: '6px',
              padding: '0.35rem 0.65rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}
            className="hidden md:block"
          >
            WhatsApp Instant Chat
          </div>
        )}
      </div>

      {/* 4. CALL CTA */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a
          href={`tel:${business.contact?.phoneRaw || business.phoneRaw || '+917997145791'}`}
          onMouseEnter={() => setHoveredButton('call')}
          onMouseLeave={() => setHoveredButton(null)}
          title={`Call RR Enterprises (${business.contact?.phone || business.phone || '79971 45791'})`}
          aria-label="Call RR Enterprises"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#651F2A',
            backgroundImage: 'linear-gradient(135deg, #7E2835 0%, #521620 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.25)',
            color: '#F6F0E7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(101, 31, 42, 0.5)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
          className="dock-btn-hover"
        >
          <Phone size={21} strokeWidth={2.2} />
        </a>

        {/* Desktop Tooltip */}
        {hoveredButton === 'call' && (
          <div
            style={{
              position: 'absolute',
              right: '56px',
              backgroundColor: '#171515',
              color: '#F6F0E7',
              border: '1px solid rgba(101, 31, 42, 0.6)',
              borderRadius: '6px',
              padding: '0.35rem 0.65rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              pointerEvents: 'none'
            }}
            className="hidden md:block"
          >
            Call 79971 45791
          </div>
        )}
      </div>

      <style>{`
        .dock-btn-hover:hover {
          transform: scale(1.1) translateY(-2px) !important;
        }
        @media (max-width: 640px) {
          .global-floating-dock {
            right: 0.85rem !important;
            bottom: 1.5rem !important;
            gap: 0.55rem !important;
          }
        }
      `}</style>
    </aside>
  );
}
