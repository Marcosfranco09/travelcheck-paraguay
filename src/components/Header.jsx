import React, { useEffect, useRef, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { Menu, Close, WhatsAppIcon } from './Icons';
const links = [['Servicios','servicios'],['España','espana'],['Polonia','polonia'],['Planes de pago','pagos'],['Acompañamiento','acompanamiento'],['Destinos','destinos'],['Experiencias','experiencias'],['Nosotros','nosotros'],['Preguntas frecuentes','preguntas'],['Contacto','contacto']];
export default function Header() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      setScrolled(window.scrollY > 20);
      const checkpoint = (header.current?.getBoundingClientRect().height || 120) + 32;
      let current = '';
      for (const [, id] of links) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= checkpoint) current = id;
      }
      if (window.scrollY > 200 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = 'contacto';
      setActive(current);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, []);
  const navLink = ([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} className={`tc-nav-link ${active === id ? 'active' : ''}`} onClick={() => { setOpen(false); }}>{label}</a>;
  return <header ref={header} className={`header-glass tc-restored-header ${scrolled ? 'scrolled' : ''}`} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
    <div className="container"><div className="tc-header-main"><a href="#inicio" aria-label="Travel Check Paraguay, inicio"><img id="header-logo" src="/logo.svg" alt="Travel Check Paraguay" className="header-logo h-[52px] w-auto object-contain" /></a><div className="tc-header-actions"><a href="https://wa.me/595985212187?text=Hola%20Travel%20Check%2C%20quisiera%20hablar%20con%20un%20asesor." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp tc-header-whatsapp"><WhatsAppIcon fontSize="small" />WhatsApp Directo</a><ThemeSwitch /><button ref={toggle} className="tc-nav-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <Close /> : <Menu />}</button></div></div><nav className="tc-restored-nav" aria-label="Navegación principal">{links.map(navLink)}</nav></div>
    <div id="mobile-nav" className={`tc-drawer ${open ? 'open' : ''}`} inert={open ? undefined : ''} aria-hidden={!open}><nav aria-label="Navegación móvil">{links.map(navLink)}</nav></div>
  </header>;
}
