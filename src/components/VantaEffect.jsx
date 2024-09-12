// VantaEffect.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import VANTA from 'vanta/dist/vanta.dots.min';

const VantaEffect = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const vantaEffect = VANTA.DOTS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xe12889,
      color2: 0x5c3518,
      backgroundColor: 0xffffff,
      size: 4.70,
      spacing: 54.00,
      showLines: false
    });

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="vanta-container w-full h-full"></div>
  );
};

export default VantaEffect;
