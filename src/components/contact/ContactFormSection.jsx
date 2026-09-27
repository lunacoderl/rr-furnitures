import React, { useState } from 'react';
import { User, Phone, Layers, FileText, Send, MapPin, ArrowRight } from 'lucide-react';
import { business } from '../../data/business';
import { openWhatsAppEnquiry } from '../../utils/createWhatsAppMessage';

export default function ContactFormSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Custom Sofa Design',
    requirement: '',
    preference: 'WhatsApp'
  });

  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      requirement: formData.requirement,
      contactPreference: formData.preference
    });
    setFormSent(true);
  };

  return (
    <section
      id="enquiry-form"
      style={{
        backgroundColor: '#FBF9F5',
        padding: '3rem 0 5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(340px, 1.2fr) minmax(320px, 1fr)',
            gap: '3rem',
            alignItems: 'stretch'
          }}
          className="contact-main-grid"
        >
          {/* Left Column: Send An Enquiry Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '2.5rem',
              border: '1px solid #ECE4DA',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: '#6A1D28',
                textTransform: 'uppercase',
                marginBottom: '0.6rem'
              }}
            >
              SEND AN ENQUIRY
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.2rem',
                fontWeight: 600,
                color: '#1C1917',
                lineHeight: 1.2,
                margin: '0 0 0.5rem 0',
                letterSpacing: '-0.01em'
              }}
            >
              Tell Us What<br />
              You're Looking For.
            </h2>

            <p
              style={{
                color: '#78716C',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                marginBottom: '2rem'
              }}
            >
              Share a few details and start a conversation with our team.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.4rem' }}>
                  Full Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#A8A29E' }} />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid #E2D9CC',
                      backgroundColor: '#FAFAF7',
                      fontSize: '0.88rem',
                      color: '#1C1917',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.4rem' }}>
                  Phone Number
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#A8A29E' }} />
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid #E2D9CC',
                      backgroundColor: '#FAFAF7',
                      fontSize: '0.88rem',
                      color: '#1C1917',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              {/* Select a Service */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.4rem' }}>
                  Select a Service
                </label>
                <div style={{ position: 'relative' }}>
                  <Layers size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#A8A29E' }} />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid #E2D9CC',
                      backgroundColor: '#FAFAF7',
                      fontSize: '0.88rem',
                      color: '#1C1917',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Custom Sofa Design">Custom Sofa Design</option>
                    <option value="Sofa Manufacturing">Sofa Manufacturing</option>
                    <option value="Repair & Restoration">Repair & Restoration</option>
                    <option value="Sofa Cleaning">Sofa Cleaning</option>
                    <option value="Chair Cleaning">Chair Cleaning</option>
                    <option value="Bed Cleaning">Bed Cleaning</option>
                    <option value="Foam & Upholstery">Foam & Upholstery</option>
                  </select>
                </div>
              </div>

              {/* Requirement */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.4rem' }}>
                  Requirement
                </label>
                <div style={{ position: 'relative' }}>
                  <FileText size={16} style={{ position: 'absolute', left: '1rem', top: '1rem', color: '#A8A29E' }} />
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirement..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '8px',
                      border: '1px solid #E2D9CC',
                      backgroundColor: '#FAFAF7',
                      fontSize: '0.88rem',
                      color: '#1C1917',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              {/* Preferred Contact Radio */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#444', marginBottom: '0.5rem' }}>
                  Preferred Contact:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  {['Call', 'WhatsApp', 'Either'].map((pref) => (
                    <label key={pref} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#555', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="preference"
                        value={pref}
                        checked={formData.preference === pref}
                        onChange={() => setFormData({ ...formData, preference: pref })}
                        style={{ accentColor: '#5A1621' }}
                      />
                      {pref}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  backgroundColor: '#5A1621',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.8rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(90, 22, 33, 0.3)',
                  marginTop: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#741D2C';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#5A1621';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Send size={14} /> Send Enquiry on WhatsApp <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Right Column: Store Showcase & Directions Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
            {/* Top Photo */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/10',
                backgroundColor: '#EAE3D9',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
              }}
            >
              <img
                src="/hero-home.png"
                alt="RR Furnitures Showroom Showcase"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Bottom Card: Visit Our Store */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #ECE4DA',
                boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem'
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: '#1C1917',
                    margin: '0 0 0.6rem 0'
                  }}
                >
                  Visit Our Store
                </h3>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#666',
                    lineHeight: 1.5,
                    margin: '0 0 1.25rem 0'
                  }}
                >
                  RR Furnitures<br />
                  Rikshala Bazar, Islampet,<br />
                  1st Line, Corner, Ongole,<br />
                  Andhra Pradesh 523001
                </p>

                <a
                  href={business.maps.directUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#5A1621',
                    color: '#FFFFFF',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(90, 22, 33, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#741D2C';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#5A1621';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <MapPin size={13} /> Get Directions <ArrowRight size={13} />
                </a>
              </div>

              {/* Store Architectural Sketch / Illustration */}
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '12px',
                  backgroundColor: '#F8F4EE',
                  border: '1px dashed #D6CEBE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6A1D28',
                  flexShrink: 0
                }}
              >
                <div style={{ textAlign: 'center', padding: '0.5rem' }}>
                  <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1.2rem', color: '#D4AF37' }}>
                    RR
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    ONGOLE STUDIO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
