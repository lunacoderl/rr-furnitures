import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutOurStory from '../components/about/AboutOurStory';
import AboutWhatWeDo from '../components/about/AboutWhatWeDo';
import AboutProcess from '../components/about/AboutProcess';
import AboutCustomization from '../components/about/AboutCustomization';
import AboutWorkshop from '../components/about/AboutWorkshop';
import AboutBrands from '../components/about/AboutBrands';
import AboutWhyChoose from '../components/about/AboutWhyChoose';
import AboutReviews from '../components/about/AboutReviews';
import AboutFinalCTA from '../components/about/AboutFinalCTA';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 01: HERO — Where Comfort Meets Craft */}
      <AboutHero />

      {/* 02: OUR STORY — More Than Furniture. It's Your Space */}
      <AboutOurStory />

      {/* 03: WHAT WE DO — One Place. Multiple Furniture Solutions (7 Service Cards) */}
      <AboutWhatWeDo />

      {/* 04: CRAFTED WITH CARE — From Material to Masterpiece (4-Step Process) */}
      <AboutProcess />

      {/* 05: YOUR SOFA. YOUR CHOICES — Customization (3 Step Cards) */}
      <AboutCustomization />

      {/* 06: OUR WORKSHOP — Where the Work Happens (3 Craft Photos) */}
      <AboutWorkshop />

      {/* 07: MATERIALS & BRANDS — Quality Materials You Can Trust */}
      <AboutBrands />

      {/* 08: WHY CUSTOMERS CHOOSE RR FURNITURES — 4 Framed Feature Cards */}
      <AboutWhyChoose />

      {/* 09: WHAT CUSTOMERS SAY — Real Feedback. True Experiences (3 Review Cards) */}
      <AboutReviews />

      {/* 10: FINAL CTA — Let's Create Something Made for Your Space */}
      <AboutFinalCTA />
    </main>
  );
}
