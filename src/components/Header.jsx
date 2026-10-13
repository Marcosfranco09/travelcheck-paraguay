import React, { useEffect, useRef, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { Menu, Close, WhatsAppIcon, ExpandMore } from './Icons';

const menuItems = [
  {
    label: 'Destinos',
    id: 'destinos',
    children: [
      { label: 'España', id: 'espana' },
      { label: 'Polonia', id: 'polonia' },
      { label: 'Otros destinos', id: 'destinos' },
    ],
  },
  {
    label: 'Servicios',
    id: 'servicios',
    children: [
      { label: 'Acompañamiento', id: 'acompanamiento' },
      { label: 'Planes de pago', id: 'pagos' },
    ],
  },
  {
    label: 'Experiencias',
    id: 'experiencias',
  },
  {
    label: 'Nosotros',
    id: 'nosotros',
    children: [
      { label: 'Preguntas frecuentes', id: 'preguntas' },
    ],
  },
  {
    label: 'Contacto',
    id: 'contacto',
  },
];

// Flattens all valid section ids to observe scroll spy
const allTrackedIds = ['destinos', 'espana', 'polonia', 'servicios', 'acompanamiento', 'pagos', 'experiencias', 'nosotros', 'preguntas', 'contacto'];

export default function Header() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      setScrolled(window.scrollY > 20);
      const checkpoint = (headerRef.current?.getBoundingClientRect().height || 80) + 36;
      let current = '';

      for (const id of allTrackedIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= checkpoint) {
          current = id;
        }
      }

      if (window.scrollY > 200 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 16) {
        current = 'contacto';
      }

      setActive(current);
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Determine if a parent top-level menu item is active
  const isItemActive = (item) => {
    if (active === item.id) return true;
    if (item.children && item.children.some(c => c.id === active)) return true;
    return false;
  };

  const handleMouseEnter = (label) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label) => {
    setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`tc-modern-header ${scrolled ? 'scrolled' : ''}`}
      onKeyDown={event => {
        if (event.key === 'Escape') {
          setOpenDropdown(null);
          setMobileOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="tc-header-inner">
        {/* LOGO */}
        <a href="#inicio" className="tc-header-logo-link" aria-label="Travel Check Paraguay, ir al inicio" onClick={closeAllMenus}>
          <img
            id="header-logo"
            src="/logo.svg"
            alt="Travel Check Paraguay"
            className="tc-header-logo"
          />
        </a>

        {/* DESKTOP NAVIGATION (5 Items in Center) */}
        <nav className="tc-header-nav" aria-label="Navegación principal">
          {menuItems.map(item => {
            const hasDropdown = Boolean(item.children && item.children.length > 0);
            const isOpen = openDropdown === item.label;
            const activeClass = isItemActive(item) ? 'is-active' : '';

            return (
              <div
                key={item.label}
                className={`tc-nav-item-wrapper ${hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={hasDropdown ? () => handleMouseEnter(item.label) : undefined}
                onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
              >
                <div className="tc-nav-parent-row">
                  <a
                    href={`#${item.id}`}
                    className={`tc-main-nav-link ${activeClass}`}
                    aria-current={isItemActive(item) ? 'page' : undefined}
                    aria-haspopup={hasDropdown ? 'true' : undefined}
                    aria-expanded={hasDropdown ? isOpen : undefined}
                    onClick={() => {
                      setOpenDropdown(null);
                    }}
                  >
                    <span>{item.label}</span>
                  </a>
                  {hasDropdown && (
                    <button
                      type="button"
                      className={`tc-dropdown-trigger ${isOpen ? 'rotated' : ''}`}
                      aria-label={`Desplegar submenú de ${item.label}`}
                      aria-expanded={isOpen}
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    >
                      <ExpandMore className="tc-chevron-icon" />
                    </button>
                  )}
                </div>

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div
                    className={`tc-dropdown-menu ${isOpen ? 'is-open' : ''}`}
                    role="menu"
                    aria-label={`Submenú ${item.label}`}
                  >
                    {item.children?.map(sub => (
                      <a
                        key={sub.label}
                        href={`#${sub.id}`}
                        role="menuitem"
                        className={`tc-dropdown-link ${active === sub.id ? 'is-sub-active' : ''}`}
                        onClick={() => {
                          setOpenDropdown(null);
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ACTIONS (WhatsApp Button & ThemeSwitch swapped) */}
        <div className="tc-header-actions-right">
          <a
            href="https://wa.me/595985212187?text=Hola%20Travel%20Check%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="tc-cta tc-header-wa-btn"
          >
            <WhatsAppIcon className="tc-wa-btn-icon" />
            <span>Cotizá por WhatsApp</span>
          </a>
          <ThemeSwitch />

          {/* Mobile hamburger button */}
          <button
            ref={toggleRef}
            className="tc-mobile-hamburger"
            type="button"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="tc-fullscreen-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU PANEL */}
      <div
        id="tc-fullscreen-menu"
        className={`tc-mobile-panel ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="tc-mobile-panel-content">
          <nav className="tc-mobile-accordion-nav" aria-label="Navegación móvil">
            {menuItems.map(item => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isExpanded = mobileExpanded[item.label];

              return (
                <div key={item.label} className="tc-mobile-item">
                  <div className="tc-mobile-item-header">
                    <a
                      href={`#${item.id}`}
                      className={`tc-mobile-link ${isItemActive(item) ? 'is-active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                    {hasDropdown && (
                      <button
                        type="button"
                        className={`tc-mobile-chevron-btn ${isExpanded ? 'rotated' : ''}`}
                        aria-label={`Alternar subopciones de ${item.label}`}
                        aria-expanded={isExpanded}
                        onClick={() => toggleMobileSubmenu(item.label)}
                      >
                        <ExpandMore />
                      </button>
                    )}
                  </div>

                  {hasDropdown && isExpanded && (
                    <div className="tc-mobile-submenu">
                      {item.children?.map(sub => (
                        <a
                          key={sub.label}
                          href={`#${sub.id}`}
                          className={`tc-mobile-sublink ${active === sub.id ? 'is-active' : ''}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="tc-mobile-actions-footer">
            <a
              href="https://wa.me/595985212187?text=Hola%20Travel%20Check%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="tc-cta tc-header-wa-btn mobile-full"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon className="tc-wa-btn-icon" />
              <span>Cotizá por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
