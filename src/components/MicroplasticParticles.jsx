import React from 'react';
import './MicroplasticParticles.css'; // Ensure you create this CSS file

const MicroplasticParticles = () => {
  const particleCount = 100; // Adjust the number of particles

  return (
    <div className="particle-container">
      {Array.from({ length: particleCount }).map((_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
};

export default MicroplasticParticles;
