import React, { useState } from 'react';
import TermsDialog from './TermsDialog';
import MapPin from '@mui/icons-material/LocationOnOutlined';
import Mail from '@mui/icons-material/MailOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import ShieldCheck from '@mui/icons-material/VerifiedUserOutlined';
import { WhatsAppIcon } from './Icons';

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);
  return (
    <footer className="bg-card border-t border-border pt-14 pb-10 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 pb-10 border-b border-border reveal">
          
          {/* Brand Info (Col 1) */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Travel Check Paraguay" className="brand-logo h-10 w-auto object-contain" />
            </div>

            <p className="text-xs text-secondary leading-relaxed font-normal max-w-lg">
              Agencia de viajes especializada en paquetes migratorios y pasajes aéreos a España y Europa. Acompañamiento personalizado y planes de pago flexibles en cuotas semanales, quincenales y mensuales.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href="https://wa.me/595985212187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-subtle border border-border text-secondary hover:text-whatsapp hover:border-whatsapp hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/travelcheck.py" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-subtle border border-border text-secondary hover:text-brand-red hover:border-brand-red hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-subtle border border-border text-secondary hover:text-brand-blue hover:border-brand-blue hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details (Col 2) */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">Contacto & Oficina</h4>
            
            <ul className="space-y-2.5 text-xs text-secondary">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>Avda. José Félix Bogado, Edificio Zenith, 10° Piso, Asunción, Paraguay</span>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <span>WhatsApp / Teléfono: <strong className="text-primary">+595 985 212 187</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>travelcheck.paraguay@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-muted flex-shrink-0" />
                <span>Razón Social: Travel Check Paraguay EAS</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-muted flex-shrink-0" />
                <span>RUC: <strong className="text-primary font-mono">80174953-0</strong></span>
              </li>
            </ul>

            <div className="pt-1">
              <button 
                type="button" 
                onClick={() => setTermsOpen(true)} 
                className="text-xs text-brand-blue hover:text-brand-red transition-colors underline underline-offset-4 cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Ver Términos y Condiciones Generales →</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-3">
          <p>© {new Date().getFullYear()} Travel Check Paraguay EAS. Todos los derechos reservados.</p>
          <p>Asesoramiento y financiación transparente para tu viaje a Europa</p>
        </div>

      </div>
      <TermsDialog open={termsOpen} onClose={() => setTermsOpen(false)} />
    </footer>
  );
}
