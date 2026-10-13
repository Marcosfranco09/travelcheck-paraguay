import React from 'react';
import { ArrowUpRight, WhatsAppIcon, ContentIcon, FlightIcon } from './components/Icons';
import Header from './components/Header';
import Footer from './components/Footer';
import DestinationsSection from './components/DestinationsSection';
import ExperiencesSection from './components/ExperiencesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import TravelCheckBanner from './components/TravelCheckBanner';
import useScrollReveal from './hooks/useScrollReveal';
import copy from './content/site-copy.json';
import './content/site.css';

const whatsapp = message => `https://wa.me/595985212187?text=${encodeURIComponent(message)}`;
const ids = ['inicio', 'servicios', 'espana', 'polonia', 'pagos', 'acompanamiento', 'destinos', 'experiencias', 'nosotros', 'preguntas', 'contacto'];
const messages = {
  '[QUIERO COTIZAR ESPAÑA]': 'Hola Travel Check, quiero cotizar un viaje a España.',
  '[QUIERO INFORMACIÓN PARA TRABAJAR EN POLONIA]': 'Hola Travel Check. QUIERO TRABAJAR EN POLONIA. Quisiera conocer las vacantes y los requisitos para postularme.',
  '[CONSULTAR PLANES DE PAGO]': 'Hola Travel Check, quiero consultar las modalidades y condiciones de pago disponibles.',
  '[VER EXPERIENCIAS DE NUESTROS PASAJEROS]': 'Hola Travel Check, quisiera ver experiencias reales de sus pasajeros.',
};
function Block({ text }) {
  if (text.startsWith('[') && text.endsWith(']')) return <a className="tc-cta" href={whatsapp(messages[text] || 'Hola Travel Check, quisiera asesoramiento para mi viaje.\nNombre: \nDestino: \nFecha aproximada: \nCantidad de pasajeros: ')} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="w-5 h-5 flex-shrink-0" /><span>{text.slice(1, -1)}</span><ArrowUpRight className="w-4 h-4 flex-shrink-0" /></a>;
  if (text.includes('\n')) return <ul className="tc-list">{text.split(/\r?\n/).map(line => <li key={line} className="reveal"><ContentIcon text={line} /><span>{line}</span></li>)}</ul>;
  return <p>{text}</p>;
}
function Blocks({ section, start, end }) { return copy[section].slice(start, end).map((text, i) => <Block key={i} text={text} />); }
function Cards({ section, start, count, numbered = false }) {
  return <div className="tc-cards">{Array.from({ length: count }, (_, i) => <article className="tc-card reveal" style={{ transitionDelay: `${i % 3 * 80}ms` }} key={i}>{numbered && <span className="tc-number">{String(i + 1).padStart(2, '0')}</span>}<h3><ContentIcon text={copy[section][start + i * 2]} />{copy[section][start + i * 2]}</h3><p>{copy[section][start + i * 2 + 1]}</p></article>)}</div>;
}
function Section({ index, children }) {
  return <section id={ids[index]} className={`tc-section tc-section-${index}`} aria-labelledby={`heading-${index}`}><div className="container"><header className="tc-section-heading reveal"><p className="tc-eyebrow eyebrow-label"><ContentIcon text={copy[index][0]} />{copy[index][0]}</p><h2 id={`heading-${index}`}>{copy[index][1]}</h2></header><div className="tc-copy">{children || <Blocks section={index} start={2} />}</div></div></section>;
}
export default function App() {
  useScrollReveal();
  return <div className="tc-site">
    <a className="tc-skip" href="#contenido">Ir al contenido</a>
    <Header />
    <main id="contenido"><section id="inicio" className="tc-hero"><div className="container tc-hero-grid"><div className="tc-copy"><p className="tc-eyebrow">{copy[0][0]}</p><h1>Tu próximo destino <span className="text-brand-blue">empieza</span> <span className="text-brand-red">acá.</span></h1><Blocks section={0} start={2} /></div><aside className="tc-route reveal" aria-label="Destinos y servicios"><span className="tc-route-top">PARAGUAY → EL MUNDO</span><div className="tc-route-orbit" aria-hidden="true"><FlightIcon /></div><p className="tc-route-title">Conectamos personas con destinos y oportunidades.</p><div className="tc-route-links"><a href="#espana"><ContentIcon text="España" />Viajes a España <ArrowUpRight /></a><a href="#polonia"><ContentIcon text="Polonia" />Oportunidades laborales en Polonia <ArrowUpRight /></a><a href="#destinos"><ContentIcon text="internacional" />Paquetes internacionales <ArrowUpRight /></a></div></aside></div></section>
    <Section index={1} /><Section index={2} />
    <Section index={3}><Blocks section={3} start={2} end={4} /><h3>{copy[3][4]}</h3><Cards section={3} start={5} count={5} numbered /><Blocks section={3} start={15} end={19} /><div className="tc-notice"><Block text={copy[3][19]} /></div></Section>
    <Section index={4}><Blocks section={4} start={2} end={4} /><Cards section={4} start={4} count={3} /><Blocks section={4} start={10} /></Section>
    <Section index={5}><Blocks section={5} start={2} end={4} /><Cards section={5} start={4} count={3} /><TravelCheckBanner text={copy[5][10]} /></Section>
    <DestinationsSection />
    <ExperiencesSection />
    <Section index={8}><Cards section={8} start={2} count={6} /></Section>
    <FAQSection />
    <ContactSection /></main>
    <Footer />
    <a className="tc-floating" href={whatsapp('Hola Travel Check, quisiera hablar con un asesor.')} target="_blank" rel="noopener noreferrer" aria-label="Hablar con Travel Check por WhatsApp"><WhatsAppIcon className="w-7 h-7" /></a>
  </div>;
}
