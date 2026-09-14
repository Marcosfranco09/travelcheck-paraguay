import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitch({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      className={`relative inline-flex items-center w-[74px] h-[34px] rounded-full p-[2px] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 border cursor-pointer select-none overflow-hidden group ${
        isDark
          ? 'border-indigo-800 bg-slate-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
          : 'border-sky-300 bg-sky-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)]'
      } ${className}`}
      title={isDark ? 'Vuelo nocturno (Modo Noche) - Clic para cambiar a diurno' : 'Vuelo diurno (Modo Día) - Clic para cambiar a nocturno'}
      aria-label="Cambiar tema visual entre vuelo de día y vuelo de noche"
    >
      {/* ================= PISTA / CIELO DÍA ================= */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 transition-opacity duration-500 ${
          isDark ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Línea de ruta aérea central */}
        <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-white/50" />

        {/* Nubes en el destino diurno (derecha) */}
        <div className="absolute right-2 top-1.5 flex flex-col items-end gap-0.5 opacity-90 transition-transform duration-500 group-hover:translate-x-0.5">
          <svg className="w-5 h-3 text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]" viewBox="0 0 24 14" fill="currentColor">
            <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <svg className="w-3.5 h-2 text-white/70 -mr-1" viewBox="0 0 24 14" fill="currentColor">
            <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>
      </div>

      {/* ================= PISTA / CIELO NOCHE ================= */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-slate-950 via-[#0B1528] to-[#14233D] transition-opacity duration-500 ${
          isDark ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Línea de ruta aérea nocturna con balizas */}
        <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-sky-400/30" />

        {/* Constelación / Estrellas en el cielo nocturno (izquierda) */}
        <div className="absolute left-2.5 top-2 flex flex-col gap-1.5 transition-transform duration-500 group-hover:-translate-x-0.5">
          <svg className="w-2.5 h-2.5 text-amber-200 fill-current animate-pulse drop-shadow-[0_0_3px_rgba(253,230,138,0.8)]" viewBox="0 0 24 24">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <span className="w-1 h-1 rounded-full bg-cyan-200 shadow-[0_0_2px_#38bdf8] ml-2" />
        </div>

        {/* Luces de aproximación de pista a la derecha */}
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60">
          <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_3px_#34d399]" />
          <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_3px_#34d399]" />
        </div>
      </div>

      {/* ================= ESTELA DE CONDENSACIÓN (JET CONTRAIL) ================= */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-[2px] pointer-events-none transition-all duration-600 ease-out ${
          isDark
            ? 'left-3 w-8 bg-gradient-to-r from-transparent via-cyan-400/30 to-cyan-300/80'
            : 'left-2 w-5 bg-gradient-to-r from-transparent to-white/70'
        }`}
      />

      {/* ================= AVIÓN REAL (THE AIRPLANE SLIDER) ================= */}
      <div
        style={{
          transitionTimingFunction: 'cubic-bezier(0.34, 1.35, 0.64, 1)',
        }}
        className={`relative z-20 w-[38px] h-[30px] flex items-center justify-center transition-all duration-500 will-change-transform transform-gpu ${
          isDark ? 'translate-x-[32px]' : 'translate-x-0'
        } group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 60 48"
          className="w-full h-full drop-shadow-[0_3px_4px_rgba(0,0,0,0.35)] transition-transform duration-300"
        >
          <defs>
            {/* Gradientes del fuselaje diurno */}
            <linearGradient id="fuselageDayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Gradientes de las alas diurnas */}
            <linearGradient id="wingDayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Gradiente nocturno metálico con reflejo estelar */}
            <linearGradient id="fuselageNightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="45%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Sombra proyectada del avión sobre la pista */}
          <g transform="translate(0, 0)">
            {/* Estabilizadores horizontales traseros */}
            <path
              d="M 8,24 L 2,13 L 8,13 L 14,22 Z"
              fill={isDark ? '#38BDF8' : 'url(#wingDayGrad)'}
              stroke={isDark ? '#0284C7' : '#94A3B8'}
              strokeWidth="0.5"
            />
            <path
              d="M 8,24 L 2,35 L 8,35 L 14,26 Z"
              fill={isDark ? '#38BDF8' : 'url(#wingDayGrad)'}
              stroke={isDark ? '#0284C7' : '#94A3B8'}
              strokeWidth="0.5"
            />

            {/* Ala Izquierda / Port Wing (arriba) */}
            <path
              d="M 26,22.5 L 14,4 L 20,4 L 35,22 Z"
              fill={isDark ? '#BAE6FD' : 'url(#wingDayGrad)'}
              stroke={isDark ? '#38BDF8' : '#94A3B8'}
              strokeWidth="0.5"
            />

            {/* Ala Derecha / Starboard Wing (abajo) */}
            <path
              d="M 26,25.5 L 14,44 L 20,44 L 35,26 Z"
              fill={isDark ? '#BAE6FD' : 'url(#wingDayGrad)'}
              stroke={isDark ? '#38BDF8' : '#94A3B8'}
              strokeWidth="0.5"
            />

            {/* Motores a reacción / Turbofans */}
            <rect
              x="23"
              y="11"
              width="9"
              height="3.5"
              rx="1.75"
              fill={isDark ? '#1E293B' : '#475569'}
              stroke={isDark ? '#38BDF8' : '#334155'}
              strokeWidth="0.4"
            />
            <rect
              x="30"
              y="11.5"
              width="2"
              height="2.5"
              rx="1"
              fill={isDark ? '#38BDF8' : '#0038A8'}
            />

            <rect
              x="23"
              y="33.5"
              width="9"
              height="3.5"
              rx="1.75"
              fill={isDark ? '#1E293B' : '#475569'}
              stroke={isDark ? '#38BDF8' : '#334155'}
              strokeWidth="0.4"
            />
            <rect
              x="30"
              y="34"
              width="2"
              height="2.5"
              rx="1"
              fill={isDark ? '#38BDF8' : '#0038A8'}
            />

            {/* Cuerpo del fuselaje */}
            <path
              d="M 3,24 C 3,22.8 6,21.5 14,21.5 L 43,21.5 Q 50,21.5 53,24 Q 50,26.5 43,26.5 L 14,26.5 C 6,26.5 3,25.2 3,24 Z"
              fill={isDark ? 'url(#fuselageNightGrad)' : 'url(#fuselageDayGrad)'}
              stroke={isDark ? '#0284C7' : '#94A3B8'}
              strokeWidth="0.5"
            />

            {/* Franja de librea Travel Check (Azul y Rojo) */}
            <path
              d="M 14,22.8 L 47,22.8 Q 48.5,23.4 49,24 Q 48.5,24.6 47,25.2 L 14,25.2 Z"
              fill={isDark ? '#0038A8' : '#0038A8'}
            />
            <path
              d="M 12,23.6 L 45,23.6 Q 46,23.8 46.5,24 Q 46,24.2 45,24.4 L 12,24.4 Z"
              fill="#D52B1E"
            />

            {/* Cabina / Parabrisas de pilotos */}
            <path
              d="M 46,22.6 Q 49,23.3 50.5,24 Q 49,24.7 46,25.4 Q 47.5,24 46,22.6 Z"
              fill={isDark ? '#0F172A' : '#0F172A'}
              stroke={isDark ? '#7DD3FC' : '#38BDF8'}
              strokeWidth="0.4"
            />

            {/* Ventanillas de pasajeros (iluminadas en noche) */}
            {isDark && (
              <g fill="#FEF08A" opacity="0.9">
                <circle cx="20" cy="22.3" r="0.5" />
                <circle cx="24" cy="22.3" r="0.5" />
                <circle cx="28" cy="22.3" r="0.5" />
                <circle cx="32" cy="22.3" r="0.5" />
                <circle cx="36" cy="22.3" r="0.5" />
                <circle cx="40" cy="22.3" r="0.5" />
              </g>
            )}

            {/* Estabilizador vertical / Cola del avión con bandera TravelCheck */}
            <path
              d="M 5,24 L 2,24 L 1,22.5 L 9,23.2 L 13,24 L 9,24.8 L 1,25.5 L 2,24 Z"
              fill="#0038A8"
              stroke="#002D87"
              strokeWidth="0.4"
            />
            <polygon points="1,22.5 5,23.2 1,23.5" fill="#D52B1E" />

            {/* Luces de navegación en puntas de ala (Estándar OACI: Babor = Rojo, Estribor = Verde) */}
            <circle
              cx="14"
              cy="4"
              r="1.2"
              fill="#EF4444"
              className={isDark ? 'drop-shadow-[0_0_3px_#EF4444]' : ''}
            />
            <circle
              cx="14"
              cy="44"
              r="1.2"
              fill="#22C55E"
              className={isDark ? 'drop-shadow-[0_0_3px_#22C55E]' : ''}
            />

            {/* Luz estroboscópica anticolisión superior (destello blanco en noche) */}
            {isDark && (
              <circle
                cx="30"
                cy="24"
                r="1"
                fill="#FFFFFF"
                className="animate-ping"
              />
            )}
          </g>
        </svg>
      </div>
    </button>
  );
}
