import React, { useState } from 'react';

export default function TravelCheckBanner({ text = 'Viajá acompañado. Viajá con Travel Check.' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`tc-banner-wrapper ${isHovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`tc-diagonal-banner ${isHovered ? 'expand-blue' : ''}`}
      >
        {/* Right Base Layer: Secondary Color (Brand Red) */}
        <div className="tc-banner-bg-right" />

        {/* Left Diagonal Layer: Primary Color (Brand Blue) */}
        <div className="tc-banner-bg-left" />

        {/* Avión que sobrevuela al hacer hover */}
        <div className="tc-banner-plane" aria-hidden="true">
          <div className="tc-banner-plane-trail" />
          <svg
            viewBox="0 0 60 48"
            className="tc-banner-plane-svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="fuselageBannerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              <linearGradient id="wingBannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
            </defs>

            <g transform="translate(0, 0)">
              {/* Estabilizadores horizontales traseros */}
              <path
                d="M 8,24 L 2,13 L 8,13 L 14,22 Z"
                fill="url(#wingBannerGrad)"
                stroke="#94A3B8"
                strokeWidth="0.5"
              />
              <path
                d="M 8,24 L 2,35 L 8,35 L 14,26 Z"
                fill="url(#wingBannerGrad)"
                stroke="#94A3B8"
                strokeWidth="0.5"
              />

              {/* Ala Izquierda / Port Wing (arriba) */}
              <path
                d="M 26,22.5 L 14,4 L 20,4 L 35,22 Z"
                fill="url(#wingBannerGrad)"
                stroke="#94A3B8"
                strokeWidth="0.5"
              />

              {/* Ala Derecha / Starboard Wing (abajo) */}
              <path
                d="M 26,25.5 L 14,44 L 20,44 L 35,26 Z"
                fill="url(#wingBannerGrad)"
                stroke="#94A3B8"
                strokeWidth="0.5"
              />

              {/* Motores a reacción */}
              <rect
                x="23"
                y="11"
                width="9"
                height="3.5"
                rx="1.75"
                fill="#475569"
                stroke="#334155"
                strokeWidth="0.4"
              />
              <rect
                x="30"
                y="11.5"
                width="2"
                height="2.5"
                rx="1"
                fill="#0038A8"
              />

              <rect
                x="23"
                y="33.5"
                width="9"
                height="3.5"
                rx="1.75"
                fill="#475569"
                stroke="#334155"
                strokeWidth="0.4"
              />
              <rect
                x="30"
                y="34"
                width="2"
                height="2.5"
                rx="1"
                fill="#0038A8"
              />

              {/* Cuerpo del fuselaje */}
              <path
                d="M 3,24 C 3,22.8 6,21.5 14,21.5 L 43,21.5 Q 50,21.5 53,24 Q 50,26.5 43,26.5 L 14,26.5 C 6,26.5 3,25.2 3,24 Z"
                fill="url(#fuselageBannerGrad)"
                stroke="#94A3B8"
                strokeWidth="0.5"
              />

              {/* Franja de librea Travel Check (Azul y Rojo) */}
              <path
                d="M 14,22.8 L 47,22.8 Q 48.5,23.4 49,24 Q 48.5,24.6 47,25.2 L 14,25.2 Z"
                fill="#0038A8"
              />
              <path
                d="M 12,23.6 L 45,23.6 Q 46,23.8 46.5,24 Q 46,24.2 45,24.4 L 12,24.4 Z"
                fill="#D52B1E"
              />

              {/* Cabina / Parabrisas */}
              <path
                d="M 46,22.6 Q 49,23.3 50.5,24 Q 49,24.7 46,25.4 Q 47.5,24 46,22.6 Z"
                fill="#0F172A"
                stroke="#38BDF8"
                strokeWidth="0.4"
              />

              {/* Estabilizador vertical con bandera TravelCheck */}
              <path
                d="M 5,24 L 2,24 L 1,22.5 L 9,23.2 L 13,24 L 9,24.8 L 1,25.5 L 2,24 Z"
                fill="#0038A8"
                stroke="#002D87"
                strokeWidth="0.4"
              />
              <polygon points="1,22.5 5,23.2 1,23.5" fill="#D52B1E" />

              {/* Luces de navegación en puntas de ala */}
              <circle cx="14" cy="4" r="1.2" fill="#EF4444" />
              <circle cx="14" cy="44" r="1.2" fill="#22C55E" />
            </g>
          </svg>
        </div>

        {/* Centered Large White Text Overlay */}
        <div className="tc-banner-content">
          <p className="tc-banner-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
