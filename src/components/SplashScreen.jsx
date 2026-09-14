import React, { useState, useEffect, useRef } from 'react';

export default function SplashScreen({ onComplete }) {
  // phases: 'initial' -> 'centered' -> 'moving' -> 'done'
  const [phase, setPhase] = useState('initial');
  const [flightStyle, setFlightStyle] = useState({});
  const bigLogoRef = useRef(null);

  useEffect(() => {
    // Ensure viewport is at top on load
    window.scrollTo(0, 0);

    // Prevent scrolling while splash animation is active
    document.body.style.overflow = 'hidden';

    // 1. Reveal logo at center with smooth scale-in
    const enterTimer = setTimeout(() => {
      setPhase('centered');
    }, 40);

    // 2. Begin flight to header logo position
    const moveTimer = setTimeout(() => {
      const targetEl = document.getElementById('header-logo');
      const bigLogoEl = bigLogoRef.current;

      if (targetEl && bigLogoEl) {
        const targetRect = targetEl.getBoundingClientRect();
        const bigRect = bigLogoEl.getBoundingClientRect();

        if (targetRect.height > 0 && bigRect.height > 0) {
          const deltaX = (targetRect.left + targetRect.width / 2) - (bigRect.left + bigRect.width / 2);
          const deltaY = (targetRect.top + targetRect.height / 2) - (bigRect.top + bigRect.height / 2);
          const scale = targetRect.height / bigRect.height;

          setFlightStyle({
            transform: `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`,
            transition: 'transform 850ms cubic-bezier(0.16, 1, 0.3, 1)',
          });
          setPhase('moving');
          return;
        }
      }

      // Fallback if target element not ready
      setPhase('done');
      onComplete?.();
    }, 750);

    // 3. Complete and hand off to navbar logo
    const doneTimer = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
      onComplete?.();
    }, 1650);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(moveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('done');
    document.body.style.overflow = '';
    onComplete?.();
  };

  if (phase === 'done') return null;

  return (
    <div 
      className="fixed inset-0 z-[100] pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Background layer matching last active theme (light / dark) */}
      <div
        onClick={handleSkip}
        className={`absolute inset-0 bg-page pointer-events-auto transition-opacity duration-700 ${
          phase === 'moving' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: phase === 'moving' ? '120ms' : '0ms',
        }}
      >
        {/* Subtle ambient brand glow behind centerpiece */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 blur-3xl pointer-events-none transition-opacity duration-500"
          style={{ opacity: phase === 'moving' ? 0 : 1 }}
        />
      </div>

      {/* Flight Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer flight node */}
        <div
          ref={bigLogoRef}
          style={flightStyle}
          className="relative z-10 will-change-transform transform-gpu flex items-center justify-center"
        >
          {/* Inner entrance node (scale-in & fade-in) */}
          <div
            className={`flex items-center justify-center transition-all duration-500 ${
              phase === 'initial'
                ? 'opacity-0 scale-90'
                : 'opacity-100 scale-100'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <img
              src="/logo.svg"
              alt="Travel Check Paraguay"
              className="header-logo h-24 sm:h-32 md:h-36 w-auto object-contain pointer-events-none drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
