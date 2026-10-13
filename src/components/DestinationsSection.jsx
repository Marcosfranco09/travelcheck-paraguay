import React from 'react';
import { WhatsAppIcon, ArrowUpRight, ContentIcon } from './Icons';

// Representative architectural landmark images
const destinationCards = [
  {
    country: 'España',
    landmark: 'Sagrada Familia & Plaza Mayor',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=700&q=80',
  },
  {
    country: 'Italia',
    landmark: 'Coliseo Romano',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80',
  },
  {
    country: 'Polonia',
    landmark: 'Plaza del Castillo en Varsovia',
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=700&q=80',
  },
  {
    country: 'Brasil',
    landmark: 'Cristo Redentor en Río',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=700&q=80',
  },
  {
    country: 'Argentina',
    landmark: 'Obelisco de Buenos Aires',
    image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=700&q=80',
  },
  {
    country: 'México',
    landmark: 'Pirámide de Chichén Itzá',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=700&q=80',
  },
  {
    country: 'República Dominicana',
    landmark: 'Zona Colonial & Playas',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=700&q=80',
  },
  {
    country: 'Estados Unidos',
    landmark: 'Estatua de la Libertad & NYC',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=700&q=80',
  },
];

export default function DestinationsSection() {
  const whatsappUrl = `https://wa.me/595985212187?text=${encodeURIComponent('Hola Travel Check, quiero pedir mi cotización para mi viaje.\nDestino: \nFecha aproximada: \nCantidad de pasajeros: ')}`;

  return (
    <section id="destinos" className="tc-section tc-destinations-section" aria-labelledby="heading-destinos">
      <div className="container">
        <header className="tc-section-heading reveal">
          <p className="tc-eyebrow eyebrow-label">
            <ContentIcon text="destino" /> ¿A DÓNDE QUERÉS VIAJAR?
          </p>
          <h2 id="heading-destinos">
            Tenemos opciones para <span className="text-brand-blue">diferentes destinos.</span>
          </h2>
          <p className="text-secondary max-w-2xl text-sm">
            Elegí tu próximo destino. Te ayudamos a organizar vuelos, traslados, alojamiento, seguro al viajero y asesoramiento integral.
          </p>
        </header>

        {/* Minimalist Visual Cards Grid */}
        <div className="tc-destinations-grid">
          {destinationCards.map((item, idx) => (
            <article
              key={item.country}
              className="tc-destination-card reveal"
              style={{ transitionDelay: `${(idx % 4) * 70}ms` }}
            >
              <img
                src={item.image}
                alt={`Destino: ${item.country}`}
                loading="lazy"
                className="tc-destination-img"
              />
              <div className="tc-destination-shadow" aria-hidden="true" />
              <div className="tc-destination-label-wrap">
                <h3 className="tc-destination-country">{item.country}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div className="tc-destinations-footer reveal">
          <p className="tc-destinations-more-note">
            ¿Tenés otro país en mente? Consultanos por paquetes a cualquier parte del mundo.
          </p>
          <a
            className="tc-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            <span>PEDIR MI COTIZACIÓN</span>
            <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
