import React from 'react';
import { Star, Quote, Check, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: 'María Belén & Familia',
      from: 'Asunción a Madrid',
      comment: 'Viajar con mi familia a España parecía un sueño lejano. Gracias al plan de cuotas semanales de Travel Check, pudimos organizar los pasajes y el seguro paso a paso sin apretarnos. ¡El acompañamiento al llegar a Madrid fue excelente!',
      rating: 5,
      date: 'Hace 2 meses',
      tag: 'Paquete Migratorio'
    },
    {
      id: 2,
      name: 'Carlos R. Benítez',
      from: 'San Lorenzo a Barcelona',
      comment: 'Tenía muchas dudas sobre los requisitos y el seguro médico para ingresar a Europa. Aida y su equipo me dieron todo ordenado y súper claro. Recomiendo totalmente sus planes de pago quincenales.',
      rating: 5,
      date: 'Hace 3 semanas',
      tag: 'Acompañamiento 24/7'
    },
    {
      id: 3,
      name: 'Jessica N. & Matías',
      from: 'Luque a Valencia',
      comment: 'Excelente atención. Nos ayudaron desde la reserva hasta el día que abordamos el avión. Pagamos mensualmente y el precio final fue exactamente el acordado, sin sorpresas ni recargos.',
      rating: 5,
      date: 'Hace 1 mes',
      tag: 'Plan Mensual Pareja'
    }
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-page relative border-t border-border">
      <div className="container">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16 flex flex-col items-center reveal">
          <span className="eyebrow-label">
            Historias Reales
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Lo que dicen nuestros <span className="text-brand-blue">Pasajeros</span>
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto font-normal">
            Experiencias de paraguayos que confiaron en Travel Check para iniciar su viaje a España y Europa.
          </p>
        </div>

        {/* Testimonials Grid (Animates as a single block) */}
        <div className="grid md:grid-cols-3 gap-6 reveal delay-100">
          {testimonials.map((item) => {
            return (
              <div 
                key={item.id} 
                className="bg-card border border-border p-6 flex flex-col justify-between space-y-5 hover-lift group"
              >
                <div className="space-y-3.5">
                  {/* Header: Stars (kept gold as per rating convention) & Neutral Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {/* Single neutral badge style for all categories as requested */}
                    <span className="text-[10px] px-2 py-0.5 bg-subtle text-secondary border border-border font-medium group-hover:border-brand-blue/30 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-border group-hover:text-brand-blue/50 transition-colors duration-200" />

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
                    "{item.comment}"
                  </p>
                </div>

                {/* Passenger Info */}
                <div className="pt-3.5 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-primary text-xs sm:text-sm group-hover:text-brand-blue transition-colors duration-200">{item.name}</p>
                      <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-[11px] text-muted flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-brand-red inline" /> {item.from}
                    </p>
                  </div>
                  <span className="text-[11px] text-muted">{item.date}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Trust Banner (Fintech style) */}
        <div className="mt-12 md:mt-16 p-6 sm:p-8 bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left hover-lift reveal delay-200">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-primary">¿Listo para dar el paso hacia España o Europa?</h3>
            <p className="text-xs sm:text-sm text-secondary">Habla hoy mismo con Aida González y define tu plan de cuotas adaptado.</p>
          </div>
          <a
            href="https://wa.me/595985212187?text=Hola%20Aida,%20quisiera%20recibir%20asesoramiento%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-xs font-medium py-3 px-6 flex-shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Iniciar Consulta Directa</span>
          </a>
        </div>

      </div>
    </section>
  );
}
