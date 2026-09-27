import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export default function Lightbox({ isOpen, items = [], activeIndex = 0, onClose, onNavigate }) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && items.length > 1) {
        onNavigate((activeIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft' && items.length > 1) {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[activeIndex];
  const imageSrc = typeof currentItem === 'string' ? currentItem : currentItem?.image || currentItem?.src;
  const imageTitle = typeof currentItem === 'object' ? currentItem?.title : 'RR Furnitures Showcase';
  const imageCategory = typeof currentItem === 'object' ? currentItem?.categoryLabel || currentItem?.category : 'BESPOKE CRAFT';
  const imageDesc = typeof currentItem === 'object' ? currentItem?.description : '';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(10, 9, 9, 0.95)', backdropFilter: 'blur(16px)' }}
      >
        {/* Top Controls Bar */}
        <div
          className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20 pointer-events-auto"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: '#C99A32', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              {imageCategory}
            </span>
            <div style={{ color: '#F6F0E7', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
              {imageTitle}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#DED3C2', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em' }}>
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#F6F0E7', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              title={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#F6F0E7', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Center Image Container */}
        <div
          style={{ width: '100%', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={imageSrc}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: isZoomed ? 1.4 : 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            src={imageSrc}
            alt={imageTitle}
            style={{
              maxHeight: '82vh',
              maxWidth: '92vw',
              objectFit: 'contain',
              borderRadius: '4px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
              transition: 'transform 0.3s ease'
            }}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Bottom Caption */}
        {imageDesc && (
          <div
            style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', textAlign: 'center', color: '#DED3C2', fontSize: '0.9rem', maxWidth: '640px', margin: '0 auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <p>{imageDesc}</p>
          </div>
        )}

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((activeIndex - 1 + items.length) % items.length);
              }}
              style={{
                position: 'absolute',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(23, 21, 21, 0.8)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#F6F0E7',
                borderRadius: '50%',
                width: '52px',
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
                zIndex: 30
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((activeIndex + 1) % items.length);
              }}
              style={{
                position: 'absolute',
                right: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(23, 21, 21, 0.8)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#F6F0E7',
                borderRadius: '50%',
                width: '52px',
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
                zIndex: 30
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
