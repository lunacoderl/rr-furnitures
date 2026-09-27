import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Layers,
  Wrench,
  Sofa,
  Factory
} from 'lucide-react';
import { services } from '../data/services';
import { works } from '../data/works';
import { business } from '../data/business';
import { openDirectWhatsApp } from '../utils/createWhatsAppMessage';
import { RevealUp } from '../components/motion/Reveal';
import Lightbox from '../components/ui/Lightbox';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const service = services.find((item) => item.slug === slug);

  // 404 Service Not Found Handler
  if (!service) {
    return (
      <main style={{ minHeight: '80vh', backgroundColor: '#171515', color: '#F6F0E7', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '8rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '540px', padding: '2rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: '#C99A32', textTransform: 'uppercase', fontWeight: 600 }}>
            404 • UNKNOWN SERVICE
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: '0.5rem 0 1rem 0' }}>
            Service Not Found
          </h1>
          <p style={{ color: '#DED3C2', marginBottom: '2rem', lineHeight: 1.7 }}>
            The requested furniture service is not recognized or has been updated. Please explore our active services directory.
          </p>
          <Link to="/services" className="btn-primary">
            <ArrowLeft size={16} />
            Back to All Services
          </Link>
        </div>
      </main>
    );
  }

  // Related Works dynamically filtered by service tags
  const relatedWorks = works.filter((w) =>
    w.tags.some((t) => service.tags.includes(t) || t === service.slug)
  ).slice(0, 3);

  // Other related services for loop
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  const handleOpenGallery = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main style={{ backgroundColor: '#171515', color: '#F6F0E7', minHeight: '100vh', paddingTop: '5.5rem' }}>
      
      {/* 01 SERVICE HERO WITH BREADCRUMB & ACCENT */}
      <section
        style={{
          position: 'relative',
          padding: '5rem 0 4rem 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Accent Glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            backgroundColor: service.accent,
            opacity: 0.12,
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          
          {/* Breadcrumb Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78rem',
              color: '#DED3C2',
              opacity: 0.75,
              marginBottom: '2rem'
            }}
          >
            <Link to="/" style={{ color: '#DED3C2', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/services" style={{ color: '#DED3C2', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={13} />
            <span style={{ color: '#C99A32', fontWeight: 600 }}>{service.title}</span>
          </nav>

          <div className="grid-12" style={{ alignItems: 'center' }}>
            
            {/* Left Header Specs (7 Cols) */}
            <div style={{ gridColumn: 'span 7' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${service.accent}`,
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  color: '#C99A32',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                SERVICE {service.id} • {service.category}
              </div>

              <h1 className="h1-hero" style={{ color: '#F6F0E7', marginBottom: '1.25rem' }}>
                {service.title}
              </h1>

              <p style={{ color: '#DED3C2', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '580px', marginBottom: '2.5rem' }}>
                {service.overview}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary" style={{ backgroundColor: service.accent }}>
                  Enquire About This Service
                  <ArrowRight size={15} />
                </Link>

                <button
                  type="button"
                  onClick={() => openDirectWhatsApp(`Hello RR Enterprises, I am interested in your ${service.title} service.`)}
                  className="btn-secondary"
                >
                  <MessageCircle size={15} color="#25D366" />
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Hero Image (5 Cols) */}
            <div style={{ gridColumn: 'span 5' }}>
              <div
                style={{
                  width: '100%',
                  height: 'clamp(320px, 38vw, 440px)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                  position: 'relative'
                }}
              >
                <img
                  src={service.heroImage}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 02 OVERVIEW & ARCHITECTURAL HIGHLIGHTS */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#1E1B1B', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container-custom">
          <div className="grid-12" style={{ alignItems: 'flex-start' }}>
            
            <div style={{ gridColumn: 'span 6' }}>
              <span className="label-eyebrow" style={{ color: '#C99A32', marginBottom: '0.75rem' }}>
                SCOPE & CAPABILITY
              </span>
              <h2 className="h2-editorial" style={{ color: '#F6F0E7', marginBottom: '1.25rem' }}>
                Designed Around Your Requirements.
              </h2>
              <p style={{ color: '#DED3C2', fontSize: '1rem', lineHeight: 1.8, opacity: 0.9 }}>
                Every home has unique layout constraints and personal tactile preferences. Whether crafting a new bespoke suite or re-engineering an existing piece, we ensure structural integrity, genuine materials, and bench-made finishing.
              </p>
            </div>

            <div style={{ gridColumn: 'span 6' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {service.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '1.25rem',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <CheckCircle2 size={18} color="#C99A32" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: '#F6F0E7', fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03 WHAT WE OFFER (4 MODULES) */}
      <section className="section-wrapper" style={{ padding: '5rem 0' }}>
        <div className="container-custom">
          
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <span className="label-eyebrow" style={{ color: '#C99A32', justifyContent: 'center' }}>
              WHAT WE WORK ON
            </span>
            <h2 className="h2-editorial" style={{ color: '#F6F0E7', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              What This Service Includes
            </h2>
            <p style={{ color: '#DED3C2', fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
              A disciplined, material-first approach to executing your furniture needs.
            </p>
          </div>

          <div className="grid-12" style={{ gap: '1.75rem' }}>
            {service.whatWeOffer.map((offer, idx) => (
              <div
                key={idx}
                style={{
                  gridColumn: 'span 6',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '2.25rem',
                  borderRadius: '6px'
                }}
              >
                <div style={{ fontFamily: 'var(--font-brand)', fontSize: '0.85rem', color: '#C99A32', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.5rem' }}>
                  0{idx + 1} //
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#F6F0E7', marginBottom: '0.65rem' }}>
                  {offer.title}
                </h3>
                <p style={{ color: '#DED3C2', fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.85 }}>
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 04 VISUAL PROCESS WITH ANIMATED CONNECTOR */}
      <section style={{ padding: '5rem 0', backgroundColor: '#1E1B1B', borderTop: '1px solid rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container-custom">
          
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <span className="label-eyebrow" style={{ color: '#C99A32', justifyContent: 'center' }}>
              STEP-BY-STEP WORKFLOW
            </span>
            <h2 className="h2-editorial" style={{ color: '#F6F0E7', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
              The Execution Journey
            </h2>
            <p style={{ color: '#DED3C2', fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.85 }}>
              From initial consultation to final room inspection, every phase is handled with precision.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`, gap: '1.5rem', position: 'relative' }}>
            {service.process.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(23, 21, 21, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '1.75rem 1.5rem',
                  borderRadius: '6px',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-brand)', fontSize: '1.1rem', fontWeight: 800, color: '#C99A32' }}>
                    {step.number}
                  </span>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', color: '#DED3C2', textTransform: 'uppercase', opacity: 0.6 }}>
                    {step.step}
                  </span>
                </div>

                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#F6F0E7', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>

                <p style={{ color: '#DED3C2', fontSize: '0.82rem', lineHeight: 1.6, opacity: 0.8 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05 SERVICE VISUAL GALLERY & LIGHTBOX */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="section-wrapper" style={{ padding: '5rem 0' }}>
          <div className="container-custom">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <span className="label-eyebrow" style={{ color: '#C99A32' }}>
                  SERVICE GALLERY
                </span>
                <h2 className="h2-editorial" style={{ color: '#F6F0E7', marginTop: '0.4rem' }}>
                  Real Pieces & Craft
                </h2>
              </div>
            </div>

            <div className="grid-12" style={{ gap: '1.5rem' }}>
              {service.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenGallery(idx)}
                  style={{
                    gridColumn: idx === 0 ? 'span 6' : 'span 3',
                    height: '280px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                  className="group"
                >
                  <img
                    src={img}
                    alt={`${service.title} showcase ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 06 DYNAMICALLY MATCHED RELATED WORKS */}
      {relatedWorks.length > 0 && (
        <section style={{ padding: '4.5rem 0', backgroundColor: '#1E1B1B' }}>
          <div className="container-custom">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <span className="label-eyebrow" style={{ color: '#C99A32' }}>
                  ARCHIVE SPOTLIGHT
                </span>
                <h2 className="h2-editorial" style={{ color: '#F6F0E7', marginTop: '0.4rem' }}>
                  Related Works
                </h2>
              </div>
              <Link to="/works" style={{ color: '#C99A32', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>
                View All Works →
              </Link>
            </div>

            <div className="grid-12" style={{ gap: '1.75rem' }}>
              {relatedWorks.map((work) => (
                <div
                  key={work.id}
                  style={{
                    gridColumn: 'span 4',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ width: '100%', height: '220px' }}>
                    <img src={work.image} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: '#C99A32', textTransform: 'uppercase', fontWeight: 600 }}>
                      {work.categoryLabel}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#F6F0E7', margin: '0.35rem 0 0.5rem 0' }}>
                      {work.title}
                    </h3>
                    <p style={{ color: '#DED3C2', fontSize: '0.82rem', lineHeight: 1.6, opacity: 0.85 }}>
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07 CONVERSION CTA */}
      <section style={{ padding: '5.5rem 0', textAlign: 'center', backgroundColor: '#171515', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container-custom" style={{ maxWidth: '720px' }}>
          <span className="label-eyebrow" style={{ color: '#C99A32', justifyContent: 'center', marginBottom: '1rem' }}>
            DIRECT CONSULTATION
          </span>
          <h2 className="h2-editorial" style={{ color: '#F6F0E7', marginBottom: '1rem' }}>
            Have Something Specific in Mind?
          </h2>
          <p style={{ color: '#DED3C2', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', opacity: 0.9 }}>
            Talk directly with our artisans in Ongole. Share room photos, dimension constraints, or fabric swatches for honest guidance.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold" style={{ padding: '0.9rem 2.2rem' }}>
              Enquire About {service.shortTitle}
              <ArrowRight size={15} />
            </Link>
            <button
              type="button"
              onClick={() => openDirectWhatsApp(`Hi RR Enterprises, I would like to discuss ${service.title}.`)}
              className="btn-secondary"
            >
              <MessageCircle size={16} color="#25D366" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* 08 RELATED SERVICES NAVIGATION LOOP */}
      <section style={{ padding: '4rem 0', backgroundColor: '#111010', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.14em', color: '#C99A32', textTransform: 'uppercase', fontWeight: 600 }}>
              EXPLORE MORE SERVICES
            </span>
            <Link to="/services" style={{ color: '#DED3C2', textDecoration: 'none', fontSize: '0.85rem' }}>
              All 07 Services →
            </Link>
          </div>

          <div className="grid-12" style={{ gap: '1.5rem' }}>
            {otherServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.slug}`}
                style={{
                  gridColumn: 'span 4',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '1.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: '#F6F0E7',
                  transition: 'all 0.3s ease'
                }}
                className="hover:border-[#C99A32] hover:bg-white/[0.05]"
              >
                <span style={{ fontFamily: 'var(--font-brand)', fontSize: '0.75rem', color: '#C99A32', fontWeight: 700 }}>
                  SERVICE {item.id}
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', margin: '0.35rem 0' }}>
                  {item.title}
                </h4>
                <p style={{ color: '#DED3C2', fontSize: '0.8rem', lineHeight: 1.6, opacity: 0.8 }}>
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for Service Gallery */}
      <Lightbox
        isOpen={lightboxOpen}
        items={service.gallery || []}
        activeIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />

    </main>
  );
}
