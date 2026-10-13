import React, { useState } from 'react';
import { WhatsAppIcon, ArrowUpRight, ContentIcon } from './Icons';

export function buildContactMessage({ name, destination, date, passengers, poland }) {
  const travelDate = date ? date.split('-').reverse().join('/') : '';
  return ['Hola Travel Check, quisiera asesoramiento para mi viaje.', `Nombre: ${name.trim()}`, `Destino: ${destination.trim()}`, `Fecha aproximada: ${travelDate}`, `Cantidad de pasajeros: ${passengers}`, ...(poland ? ['', 'QUIERO TRABAJAR EN POLONIA', 'Quisiera conocer las oportunidades disponibles y los requisitos para postularme.'] : [])].join('\n');
}

export default function ContactSection() {
  const [fields, setFields] = useState({ name: '', destination: '', date: '', passengers: '1', poland: false });
  const update = event => setFields(previous => ({ ...previous, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }));
  const submit = event => {
    event.preventDefault();
    window.open(`https://wa.me/595985212187?text=${encodeURIComponent(buildContactMessage(fields))}`, '_blank', 'noopener,noreferrer');
  };
  return <section id="contacto" className="tc-section tc-section-10" aria-labelledby="contact-title"><div className="container">
    <header className="tc-section-heading reveal"><p className="tc-eyebrow eyebrow-label"><ContentIcon text="Empezá" /> EMPEZÁ HOY</p><h2 id="contact-title">Un mensaje puede ser el primer paso hacia tu próximo destino.</h2></header>
    <div className="tc-contact-layout">
      <div className="tc-contact-info reveal">
        <h3>Contanos qué viaje tenés en mente.</h3>
        <p>¿Querés viajar? ¿Querés conocer nuestros paquetes a España, postularte a una oportunidad laboral en Polonia o conocer nuestras opciones de pago?</p>
        <p>Completá tus datos y escribinos. Nuestro equipo te explicará las alternativas disponibles para organizar tu viaje.</p>
        <div className="tc-notice">
          <p>Si estás interesado en Polonia, marcá la opción del formulario para consultar las oportunidades laborales y los requisitos para postularte.</p>
        </div>
      </div>

      <form className="tc-contact-form reveal" onSubmit={submit}>
        <div className="tc-form-grid">
          <label htmlFor="contact-name">Tu nombre<input id="contact-name" name="name" autoComplete="name" placeholder="Nombre y apellido" value={fields.name} onChange={update} required pattern=".*\S.*" maxLength={100} /></label>
          <label htmlFor="contact-destination">Tu destino<input id="contact-destination" name="destination" placeholder="País o ciudad" value={fields.destination} onChange={update} required pattern=".*\S.*" maxLength={120} /></label>
          <label htmlFor="contact-date">Cuándo querés viajar<input id="contact-date" name="date" type="date" value={fields.date} onChange={update} required /><span className="tc-field-hint">Elegí una fecha aproximada.</span></label>
          <label htmlFor="contact-passengers">Cuántas personas viajan<input id="contact-passengers" name="passengers" type="number" min="1" step="1" value={fields.passengers} onChange={update} required /></label>
        </div>
        <label className="tc-checkbox" htmlFor="contact-poland"><input id="contact-poland" name="poland" type="checkbox" checked={fields.poland} onChange={update} /><span>Quiero trabajar en Polonia</span></label>
        <p className="tc-form-note" id="contact-note">Se abrirá WhatsApp con tus datos. Podrás revisar el mensaje antes de enviarlo.</p>
        <button type="submit" className="tc-cta" aria-describedby="contact-note"><WhatsAppIcon fontSize="small" /><span>HABLAR AHORA POR WHATSAPP</span><ArrowUpRight fontSize="small" /></button>
      </form>
    </div>
  </div></section>;
}
