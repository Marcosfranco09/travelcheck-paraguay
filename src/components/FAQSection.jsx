import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo funcionan los planes de pago en cuotas semanales, quincenales o mensuales?',
      a: 'Tú eliges el paquete deseado y la frecuencia que mejor se adapte a tu presupuesto (semanal, quincenal o mensual). Fijamos un calendario claro y transparente. Vas abonando tu cuota de manera organizada hasta completar el plan antes de tu fecha de vuelo, garantizando el precio sin fluctuaciones de último momento.'
    },
    {
      q: '¿Los pasajes y seguros son válidos y emitidos oficialmente?',
      a: 'Sí, absolutamente. Emitimos boletos aéreos electrónicos con código PNR confirmable directamente en la web de las aerolíneas internacionales (Air Europa, Iberia, LATAM, etc.). El seguro médico cumple rigurosamente con la cobertura mínima de 30.000 euros exigida por el Tratado de Schengen de la Unión Europea.'
    },
    {
      q: '¿Qué ocurre si se presentan cambios en las fechas de mi viaje?',
      a: 'Nuestros planes contemplan acompañamiento continuo. Si necesitas reprogramar tu viaje con debida anticipación, gestionamos las opciones según las políticas de la aerolínea y adaptamos tu cronograma de pagos.'
    },
    {
      q: '¿Qué documentación necesito para empezar a financiar mi paquete?',
      a: 'Solo requieres tu documento de identidad paraguayo vigente (Cédula de Identidad) o pasaporte. No exigimos trámites bancarios complejos ni avales pesados. Nuestro objetivo es hacer accesible la oportunidad de viajar a Europa de manera organizada.'
    },
    {
      q: '¿Tienen oficina física en Paraguay donde pueda reunirme con un asesor?',
      a: '¡Sí! Nuestra oficina física se encuentra ubicada en la Avda. José Félix Bogado, Edificio Zenith, 10° Piso, Asunción, Paraguay. Puedes solicitar una cita previa o comunicarte a nuestro canal oficial de WhatsApp.'
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-page relative border-t border-border">
      <div className="container">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16 flex flex-col items-center reveal">
          <span className="eyebrow-label">
            Respuestas Claras
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Preguntas <span className="text-brand-blue">Frecuentes</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto font-normal">
            Resolvemos tus dudas principales para que viajes con total seguridad y confianza.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 reveal delay-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-card border transition-all duration-200 ${
                  isOpen ? 'border-brand-blue shadow-sm' : 'border-border hover:border-brand-blue/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-medium text-primary text-sm sm:text-base cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-[-2px] hover:bg-subtle/40 active:bg-subtle/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-brand-blue' : ''}`} />
                </button>

                {/* Animated Accordion Container (Entrance & Exit) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-secondary border-t border-border leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ask Question CTA */}
        <div className="text-center mt-12 space-y-3 reveal delay-200">
          <p className="text-xs sm:text-sm text-muted">¿Tienes una duda específica que no figura aquí?</p>
          <a
            href="https://wa.me/595985212187?text=Hola!%20Tengo%20una%20consulta%20sobre%20mi%20viaje"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-xs font-medium py-3 px-6"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Consultar directamente a nuestro asesor</span>
          </a>
        </div>

      </div>
    </section>
  );
}
