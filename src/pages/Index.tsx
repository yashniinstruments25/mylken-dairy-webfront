
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
