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
      className={`relative inline-flex items-center w-[62px] h-[32px] rounded-full p-[3px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 border ${
        isDark 
          ? 'border-indigo-800/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]' 
          : 'border-sky-300/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'
      } cursor-pointer select-none overflow-hidden group ${className}`}
      title={isDark ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
      aria-label="Cambiar tema visual día y noche"
    >
      {/* ----------------- AMBIENTE DÍA (CIELO AZUL Y NUBES) ----------------- */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 transition-opacity duration-500 ease-in-out ${
          isDark ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Nubes flotantes a la derecha */}
        <div
          className={`absolute right-1.5 top-1 flex flex-col items-end gap-0.5 transition-all duration-500 ease-out ${
            isDark ? 'opacity-0 translate-x-3' : 'opacity-100 translate-x-0'
          }`}
        >
          {/* Nube superior */}
          <svg
            className="w-5 h-3 text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]"
            viewBox="0 0 24 14"
            fill="currentColor"
          >
            <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          {/* Nube pequeña inferior */}
          <svg
            className="w-4 h-2.5 text-white/75 -mr-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]"
            viewBox="0 0 24 14"
            fill="currentColor"
          >
            <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>
      </div>

      {/* ----------------- AMBIENTE NOCHE (CIELO PROFUNDO Y ESTRELLAS) ----------------- */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 transition-opacity duration-500 ease-in-out ${
          isDark ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Estrellas titilantes a la izquierda */}
        <div
          className={`absolute left-2 top-1.5 flex flex-col gap-1 transition-all duration-500 ease-out ${
            isDark ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
          }`}
        >
          {/* Estrella brillante 1 */}
          <svg
            className="w-2.5 h-2.5 text-amber-200 fill-current animate-pulse drop-shadow-[0_0_3px_rgba(253,230,138,0.8)]"
            viewBox="0 0 24 24"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          {/* Estrella secundaria 2 */}
          <span className="w-1 h-1 rounded-full bg-indigo-200/90 ml-3.5 shadow-[0_0_2px_#c7d2fe]" />
          {/* Estrella pequeña 3 */}
          <svg
            className="w-2 h-2 text-indigo-100 fill-current ml-1 opacity-90 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]"
            viewBox="0 0 24 24"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      </div>

      {/* ----------------- CUERPO CELESTE (SOL / LUNA) ----------------- */}
      <div
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.45, 0.64, 1)' }}
        className={`relative z-10 w-[24px] h-[24px] rounded-full transition-transform duration-500 ${
          isDark ? 'translate-x-[30px]' : 'translate-x-0'
        }`}
      >
        {/* SOL (Modo Claro) */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 shadow-[0_0_10px_2px_rgba(245,158,11,0.55)] flex items-center justify-center transition-all duration-500 ease-in-out ${
            isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`}
        >
          {/* Brillo central del sol */}
          <span className="w-2 h-2 rounded-full bg-yellow-100/80" />
        </div>

        {/* LUNA (Modo Oscuro con Cráteres) */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-slate-200 via-slate-100 to-white shadow-[0_0_8px_2px_rgba(226,232,240,0.5)] transition-all duration-500 ease-in-out ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
          }`}
        >
          {/* Cráter 1 */}
          <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-slate-300/80 shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.25)]" />
          {/* Cráter 2 */}
          <span className="absolute bottom-1 left-2.5 w-1 h-1 rounded-full bg-slate-300/70 shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.25)]" />
          {/* Cráter 3 */}
          <span className="absolute top-2.5 right-1.5 w-1.5 h-1.5 rounded-full bg-slate-300/60 shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
    </button>
  );
}
