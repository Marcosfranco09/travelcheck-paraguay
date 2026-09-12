import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['simulador', 'roadmap', 'paquetes', 'testimonios', 'faq'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // If in Hero banner near top, no section is highlighted
      if (scrollY < 200) {
        setActiveSection('');
        return;
      }

      // If reached the bottom of page, highlight the last section (faq)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (windowHeight + Math.ceil(scrollY) >= documentHeight - 60) {
        setActiveSection('faq');
        return;
      }

      // Check which section intersects the reading checkpoint
      const checkpoint = 120;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= checkpoint && rect.bottom > checkpoint) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Simulador de Cuotas', href: '#simulador' },
    { name: 'Ruta Migratoria', href: '#roadmap' },
    { name: 'Paquetes Migratorios', href: '#paquetes' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' }
  ];

  const whatsappUrl = "https://wa.me/595985212187?text=Hola%20Travel%20Check,%20quisiera%20recibir%20asesoramiento%20para%20viajar%20a%20Espa%C3%B1a";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 header-glass ${
      scrolled ? 'scrolled py-1.5' : 'py-3'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center text-decoration-none group">
            <img 
              src="/logo.svg" 
              alt="Travel Check Paraguay" 
              className="header-logo h-[52px] w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </a>

          {/* Right Section: Navigation & Actions */}
          <div className="flex items-center justify-end gap-6 sm:gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(sectionId)}
                    className={`text-sm py-1 relative transition-colors duration-200 ${
                      isActive 
                        ? 'text-brand-blue font-semibold after:w-full' 
                        : 'text-secondary hover:text-brand-blue font-medium after:w-0 hover:after:w-full'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-blue after:transition-all after:duration-200`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons & Theme Toggle */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-xs font-medium py-2.5 px-4"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Directo</span>
              </a>

              {/* Theme Switch (Día / Noche) */}
              <ThemeSwitch />
            </div>

            {/* Mobile Controls (Theme Switch + Hamburger) */}
            <div className="flex sm:hidden items-center gap-2">
              <ThemeSwitch />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-card border border-border text-primary hover:text-brand-blue hover:border-brand-blue focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-1"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hidden sm:flex lg:hidden p-2 bg-card border border-border text-primary hover:text-brand-blue hover:border-brand-blue focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-1"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Entrance & Exit Animation */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border p-6 flex flex-col gap-3 transition-all duration-300 ease-out origin-top transform ${
        mobileMenuOpen
          ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto shadow-xl'
          : 'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
      }`}>
        {navLinks.map((link) => {
          const sectionId = link.href.substring(1);
          const isActive = activeSection === sectionId;
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveSection(sectionId);
                setMobileMenuOpen(false);
              }}
              className={`text-sm py-2 border-b border-border transition-colors flex items-center justify-between ${
                isActive
                  ? 'text-brand-blue font-semibold bg-subtle/50 px-2 -mx-2'
                  : 'text-primary hover:text-brand-blue font-medium'
              }`}
            >
              <span>{link.name}</span>
              {isActive && <span className="w-1.5 h-1.5 bg-brand-blue"></span>}
            </a>
          );
        })}
        <a
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-whatsapp w-full mt-2 justify-center py-3 text-xs font-semibold"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          <span>Consultar por WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
