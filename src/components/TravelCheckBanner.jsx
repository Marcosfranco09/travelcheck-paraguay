import React, { useState, useRef } from 'react';

export default function TravelCheckBanner({ text = 'Viajá acompañado. Viajá con Travel Check.' }) {
  const [activeSide, setActiveSide] = useState(null); // 'left' | 'right' | null
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Diagonal seam calculation:
    // At top (y = 0), seam is at 56% width
    // At bottom (y = height), seam is at 44% width
    const seamRatio = 0.56 - (0.12 * (y / rect.height));
    const targetSide = (x / rect.width) < seamRatio ? 'left' : 'right';

    setActiveSide((prev) => (prev !== targetSide ? targetSide : prev));
  };

  const handleMouseLeave = () => {
    setActiveSide(null);
  };

  return (
    <div 
      ref={wrapperRef}
      className={`tc-banner-wrapper ${activeSide ? 'is-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`tc-diagonal-banner ${
          activeSide === 'left' ? 'expand-left' : activeSide === 'right' ? 'expand-right' : ''
        }`}
      >
        {/* Right Base Layer: Secondary Color (Brand Red) */}
        <div className="tc-banner-bg-right" />

        {/* Left Diagonal Layer: Primary Color (Brand Blue) */}
        <div className="tc-banner-bg-left" />

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
