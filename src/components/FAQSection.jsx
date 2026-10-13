import React, { useState } from 'react';
import { ExpandMore, HelpOutline } from './Icons';
import copy from '../content/site-copy.json';
export default function FAQSection() {
  const [open, setOpen] = useState(-1);
  return <section id="preguntas" className="tc-section" aria-labelledby="faq-title"><div className="container"><header className="tc-section-heading reveal"><span className="eyebrow-label"><HelpOutline fontSize="small" /> Respuestas claras</span><h2 id="faq-title">Preguntas <span className="text-brand-blue">frecuentes</span></h2></header><div className="tc-faq">{Array.from({ length: 6 }, (_, i) => <article key={i} className={`tc-faq-item reveal ${open === i ? 'open' : ''}`}><h3><button id={`faq-question-${i}`} type="button" aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open === i ? -1 : i)}><HelpOutline className="tc-faq-help" /><span>{copy[9][1 + i * 2]}</span><ExpandMore className="tc-faq-chevron" /></button></h3><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} aria-hidden={open !== i} className="tc-faq-panel"><div><p>{copy[9][2 + i * 2]}</p></div></div></article>)}</div></div></section>;
}
