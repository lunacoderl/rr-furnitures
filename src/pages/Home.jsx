import React from 'react';
import Hero from '../components/home/Hero';
import BrandStatement from '../components/home/BrandStatement';
import ServicesShowcase from '../components/home/ServicesShowcase';
import ColorStory from '../components/home/ColorStory';
import CustomizationSection from '../components/home/CustomizationSection';
import WorkshopStory from '../components/home/WorkshopStory';
import WorksGallery from '../components/home/WorksGallery';
import VideoShowcase from '../components/home/VideoShowcase';
import WhyChooseUs from '../components/home/WhyChooseUs';
import BrandMaterials from '../components/home/BrandMaterials';
import Reviews from '../components/home/Reviews';
import SocialShowcase from '../components/home/SocialShowcase';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 01: HERO — Furniture That Shapes Your Space */}
      <Hero />

      {/* 02: BRAND STATEMENT — More Than Furniture. It's how a room feels. */}
      <BrandStatement />

      {/* 03: SERVICES — Complete Furniture Solutions (7-Card Carousel) */}
      <ServicesShowcase />

      {/* 04: COLOR & MATERIAL STORY — Color Changes Everything */}
      <ColorStory />

      {/* 05: CUSTOMIZATION — Your Sofa. Your Choices (01 Design, 02 Fabric, 03 Foam) */}
      <CustomizationSection />

      {/* 06: WORKSHOP STORY — From Workshop to Home */}
      <WorkshopStory />

      {/* 07: WORKS DONE — Made. Finished. In Their Spaces (8-Grid Gallery) */}
      <WorksGallery />

      {/* 08: VIDEO SHOWCASE — See the Craft in Motion */}
      <VideoShowcase />

      {/* 09: WHY RR FURNITURES — 5-Column Architectural Strip */}
      <WhyChooseUs />

      {/* 10: BRANDS & MATERIALS — Verified Manufacturer Partners Strip */}
      <BrandMaterials />

      {/* 11: REVIEWS — Real Feedback. True Experiences (Google 5-Star Reviews) */}
      <Reviews />

      {/* 12: SOCIAL SHOWCASE — More Work. More Inspiration */}
      <SocialShowcase />

      {/* 13: FINAL CTA — Have a Sofa in Mind? */}
      <FinalCTA />
    </main>
  );
}
