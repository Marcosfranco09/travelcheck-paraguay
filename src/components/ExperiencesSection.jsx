import React from 'react';
import { ContentIcon } from './Icons';

const testimonials = [
  {
    name: 'Jorge Benítez',
    destination: 'Madrid, España',
    purpose: 'Reencuentro familiar y turismo',
    quote: 'Pude organizar mi viaje a España con el plan de cuotas semanales. Me dieron tranquilidad en cada requisito y llegué a Barajas sin ningún inconveniente.',
    rating: 5,
    date: 'Viajó en Agosto 2026',
  },
  {
    name: 'María Liz Caballero',
    destination: 'Varsovia, Polonia',
    purpose: 'Oportunidad laboral formal',
    quote: 'Me postulé desde Asunción para la vacante en Polonia. El contrato de trabajo ya estaba gestionado antes de subir al avión. El acompañamiento de Travel Check fue clave.',
    rating: 5,
    date: 'Viajó en Septiembre 2026',
  },
  {
    name: 'Fernando Gómez',
    destination: 'Barcelona, España',
    purpose: 'Turismo y proyecto personal',
    quote: 'La atención personalizada marca la diferencia. Te asesoran sobre el seguro al viajero y la documentación exacta para viajar seguro.',
    rating: 5,
    date: 'Viajó en Julio 2026',
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiencias" className="tc-section tc-section-7" aria-labelledby="heading-7">
      <div className="container">
        <header className="tc-section-heading reveal">
          <p className="tc-eyebrow eyebrow-label">
            <ContentIcon text="historia" /> HISTORIAS QUE EMPIEZAN CON UN VIAJE
          </p>
          <h2 id="heading-7">
            Nuestros pasajeros son nuestra <span className="text-brand-blue">mejor presentación</span>
          </h2>
          <p className="text-secondary max-w-2xl text-sm">
            Cada persona que confía en Travel Check tiene una historia diferente: algunos viajan para conocer un nuevo destino, otros para reencontrarse con su familia y otros para buscar nuevas oportunidades laborales.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="tc-testimonials-grid">
          {testimonials.map((item, idx) => (
            <article
              key={item.name}
              className="tc-testimonial-card reveal"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="tc-testimonial-stars" aria-label="5 estrellas">
                {'★'.repeat(item.rating)}
              </div>
              <blockquote className="tc-testimonial-quote">
                “{item.quote}”
              </blockquote>
              <div className="tc-testimonial-footer">
                <div className="tc-testimonial-author">
                  <div className="tc-testimonial-avatar" aria-hidden="true">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="tc-testimonial-name">{item.name}</h3>
                    <p className="tc-testimonial-dest">{item.destination}</p>
                  </div>
                </div>
                <div className="tc-testimonial-meta">
                  <span className="tc-testimonial-tag">{item.purpose}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
