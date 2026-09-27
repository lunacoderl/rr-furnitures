import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingContact from './components/ui/FloatingContact';
import ScrollToTop from './components/ui/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Works from './pages/Works';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all 404 Route */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Floating Action Pill & WhatsApp triggers */}
      <FloatingContact />

      {/* Master Architectural Global Footer */}
      <Footer />
    </Router>
  );
}
