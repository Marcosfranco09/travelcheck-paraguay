import React from 'react';
import { Plane, ShieldCheck, CreditCard, ArrowRight, Check, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const whatsappUrl = "https://wa.me/595985212187?text=Hola!%20Deseo%20cotizar%20un%20paquete%20migratorio%20a%20Espa%C3%B1a%20con%20plan%20de%20pago";

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-page">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Content Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Eyebrow */}
            <div className="flex justify-center lg:justify-start">
              <span className="eyebrow-label">
                Paquetes Migratorios & Vuelos a España
              </span>
            </div>

            {/* Main Headline (Max 1 red accent, unified criteria) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary leading-[1.2] tracking-tight">
              Viaja a <span className="text-brand-blue">España y Europa</span> con acompañamiento real y pago <span className="text-brand-red">en cuotas</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Organizamos tu paquete migratorio completo con boletos, reservas y seguro médico obligatorio. Planes de pago accesibles y transparentes adaptados a tu presupuesto.
            </p>

            {/* 4 Feature Bullets - Unified to ONE Brand Blue color with neutral background */}
            <div className="grid sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-3 bg-card p-3.5 border border-border hover:border-brand-blue/70 hover:-translate-y-0.5 transition-all duration-200 group">
                <Check className="w-4 h-4 text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-secondary group-hover:text-primary transition-colors">Acompañamiento antes y en destino</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-3.5 border border-border hover:border-brand-blue/70 hover:-translate-y-0.5 transition-all duration-200 group">
                <Check className="w-4 h-4 text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-secondary group-hover:text-primary transition-colors">Cuotas semanales, quincenales o mensuales</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-3.5 border border-border hover:border-brand-blue/70 hover:-translate-y-0.5 transition-all duration-200 group">
                <Check className="w-4 h-4 text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-secondary group-hover:text-primary transition-colors">Seguro médico Schengen obligatorio</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-3.5 border border-border hover:border-brand-blue/70 hover:-translate-y-0.5 transition-all duration-200 group">
                <Check className="w-4 h-4 text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-secondary group-hover:text-primary transition-colors">Vuelos con equipaje en bodega incluido</span>
              </div>
            </div>

            {/* Action Buttons (1 filled primary CTA, rest outline) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm font-medium w-full sm:w-auto py-3.5 px-6"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Cotizar por WhatsApp</span>
              </a>

              <a 
                href="#simulador"
                className="btn btn-secondary text-sm font-medium w-full sm:w-auto py-3.5 px-6"
              >
                <span>Simulador de Cuotas</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Row (Neutral & Corporate) */}
            <div className="pt-6 border-t border-border grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-semibold text-primary">100%</p>
                <p className="text-xs text-muted mt-0.5">Asesoría Integral</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-brand-blue">España</p>
                <p className="text-xs text-muted mt-0.5">Destino Principal</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-primary">Flexible</p>
                <p className="text-xs text-muted mt-0.5">Plan de Cuotas</p>
              </div>
            </div>

          </div>

          {/* Right Column: Real Destination Photo with Brand Blue Overlay + Route Card */}
          <div className="lg:col-span-5">
            <div className="relative border border-border bg-card overflow-hidden hover-lift group">
              
              {/* Destination Photo Header with Brand Blue Overlay */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Madrid, España" 
                  className="w-full h-full object-cover img-subtle-zoom"
                />
                {/* Brand blue 20% overlay for consistency */}
                <div className="absolute inset-0 bg-[#0038A8]/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-black/30" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-card border border-border">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span className="text-xs font-semibold text-primary">Madrid & Destinos en Europa</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-card text-secondary border border-border">
                    ASU — MAD
                  </span>
                </div>
              </div>

              {/* Route & Inclusions Content */}
              <div className="p-5 sm:p-6 space-y-5">
                
                {/* Flight Path Graphic */}
                <div className="bg-subtle p-4 border border-border space-y-3">
                  <div className="flex items-center justify-between text-center">
                    <div>
                      <p className="text-xl font-semibold text-primary">ASU</p>
                      <p className="text-[11px] text-muted">Asunción, PY</p>
                    </div>

                    <div className="flex-1 px-3 relative flex items-center justify-center">
                      <div className="w-full h-[1px] bg-border relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-1 border border-border group-hover:border-brand-blue transition-colors">
                          <Plane className="w-3.5 h-3.5 text-brand-blue transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xl font-semibold text-primary">MAD</p>
                      <p className="text-[11px] text-muted">Madrid, ES</p>
                    </div>
                  </div>

                  {/* Connected cities */}
                  <div className="flex flex-wrap gap-1 justify-center pt-1 border-t border-border">
                    {['Barcelona', 'Valencia', 'Málaga', 'Alicante', 'Bilbao'].map((city) => (
                      <span key={city} className="text-[10px] px-1.5 py-0.5 bg-card text-secondary border border-border">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Package Inclusions list - Unified Brand Blue accents */}
                <div className="space-y-2.5">
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">
                    Incluido en tu paquete:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-secondary">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span><strong>Boleto Aéreo Confirmado:</strong> Ida o ida/vuelta con equipaje.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span><strong>Hospedaje & Reserva Inicial:</strong> Documentos para control migratorio.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span><strong>Seguro Médico Internacional:</strong> Cobertura Schengen obligatoria.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span><strong>Orientación 24/7:</strong> Acompañamiento antes de salir y al llegar.</span>
                    </li>
                  </ul>
                </div>

                {/* Direct Contact Footer */}
                <div className="p-3.5 bg-subtle border border-border flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-muted">Oficina & Asistencia</p>
                    <p className="text-xs font-semibold text-primary">+595 985 212 187</p>
                  </div>
                  <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-card text-whatsapp border border-border hover:border-whatsapp transition-colors"
                    title="Enviar mensaje en WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
