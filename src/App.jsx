import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PaymentSimulator from './components/PaymentSimulator';
import MigratoryRoadmap from './components/MigratoryRoadmap';
import PackageCatalog from './components/PackageCatalog';
import TestimonialSlider from './components/TestimonialSlider';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-page text-primary selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <PaymentSimulator />
        <MigratoryRoadmap />
        <PackageCatalog />
        <TestimonialSlider />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
