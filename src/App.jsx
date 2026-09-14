import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PaymentSimulator from './components/PaymentSimulator';
import MigratoryRoadmap from './components/MigratoryRoadmap';
import PackageCatalog from './components/PackageCatalog';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import SplashScreen from './components/SplashScreen';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <div className="min-h-screen bg-page text-primary selection:bg-brand-red selection:text-white">
      {!splashComplete && (
        <SplashScreen onComplete={() => setSplashComplete(true)} />
      )}
      <Header isSplashComplete={splashComplete} />
      <main>
        <Hero />
        <PaymentSimulator />
        <MigratoryRoadmap />
        <PackageCatalog />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
