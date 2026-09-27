import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesIntro from '../components/services/ServicesIntro';
import ServicesGrid from '../components/services/ServicesGrid';
import ServicesWhyChoose from '../components/services/ServicesWhyChoose';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesWorkInAction from '../components/services/ServicesWorkInAction';
import ServicesBrands from '../components/services/ServicesBrands';
import ServicesFinalCTA from '../components/services/ServicesFinalCTA';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 01: HERO — Complete Furniture Solutions */}
      <ServicesHero />

      {/* 02: INTRO — Furniture Care at Every Stage */}
      <ServicesIntro />

      {/* 03: 7 SERVICES SHOWCASE — Custom Sofa, Manufacturing, Repair, Cleaning, Upholstery */}
      <ServicesGrid />

      {/* 04: WHY CHOOSE OUR SERVICES — 4 Framed Capability Pillars */}
      <ServicesWhyChoose />

      {/* 05: OUR PROCESS — From Requirement to Finished Furniture (5-Step Timeline) */}
      <ServicesProcess />

      {/* 06: WORK IN ACTION — Real Furniture. Real Spaces */}
      <ServicesWorkInAction />

      {/* 07: MATERIALS & BRANDS — Quality You Can Trust */}
      <ServicesBrands />

      {/* 08: FINAL CTA — Have a Specific Requirement? */}
      <ServicesFinalCTA />
    </main>
  );
}
