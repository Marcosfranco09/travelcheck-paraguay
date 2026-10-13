import React, { useEffect, useRef } from 'react';
import { Close } from './Icons';
import terms from '../content/terms';
export default function TermsDialog({ open, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open) { if (dialog.open) dialog.close(); return; }
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { if (dialog.open) dialog.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [open]);
  return <dialog ref={ref} className="tc-terms-dialog" aria-labelledby="terms-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="tc-terms-shell"><header className="tc-terms-header"><div><h2 id="terms-title">Términos y Condiciones Generales</h2><p>Travel Check Paraguay EAS · RUC: 80174953-0</p></div><button autoFocus type="button" onClick={onClose} aria-label="Cerrar términos y condiciones"><Close /></button></header>
    <div className="tc-terms-content" tabIndex={0}>{terms.map(section => <section key={section.title}><h3>{section.title}</h3>{section.paragraphs?.map(text => <p key={text}>{text}</p>)}{section.items && <ul>{section.items.map(text => <li key={text}>{text}</li>)}</ul>}</section>)}</div>
    <div className="tc-terms-bottom"><p>Última actualización: 2026 · Asunción, Paraguay</p><button className="btn btn-secondary" type="button" onClick={onClose}>Cerrar</button></div></div>
  </dialog>;
}
