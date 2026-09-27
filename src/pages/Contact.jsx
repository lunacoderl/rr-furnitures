import React, { useState, useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactQuickCards from '../components/contact/ContactQuickCards';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactLocationHours from '../components/contact/ContactLocationHours';
import ContactServicesStrip from '../components/contact/ContactServicesStrip';
import ContactWhyChoose from '../components/contact/ContactWhyChoose';
import ContactReviews from '../components/contact/ContactReviews';
import ContactSocial from '../components/contact/ContactSocial';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactFinalCTA from '../components/contact/ContactFinalCTA';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('Custom Sofa Design');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectServiceFromStrip = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 01: HERO — Let's Create Something for Your Space */}
      <ContactHero />

      {/* 02: 4 QUICK CONTACT CARDS — Call Us, WhatsApp, Visit Our Store, Email Us */}
      <ContactQuickCards />

      {/* 03: ENQUIRY FORM & VISIT OUR STORE SHOWCASE */}
      <ContactFormSection preselectedService={selectedService} />

      {/* 04: LOCATION, HOURS & STOREFRONT */}
      <ContactLocationHours />

      {/* 05: WHAT WOULD YOU LIKE TO DISCUSS? (SERVICE SELECTION STRIP) */}
      <ContactServicesStrip onSelectService={handleSelectServiceFromStrip} />

      {/* 06: WHY CONTACT RR FURNITURES? */}
      <ContactWhyChoose />

      {/* 07: WHAT CUSTOMERS SAY (GOOGLE REVIEWS) */}
      <ContactReviews />

      {/* 08: SEE MORE OF OUR WORK (SOCIAL SHOWCASE) */}
      <ContactSocial />

      {/* 09: FREQUENTLY ASKED QUESTIONS */}
      <ContactFAQ />

      {/* 10: READY TO TALK FURNITURE? (FINAL CTA) */}
      <ContactFinalCTA />
    </main>
  );
}
