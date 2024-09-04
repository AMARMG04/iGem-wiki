
import './CircleTrail.css'
import React, { useEffect, useRef } from 'react';

const CircleTrail = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  const colors = [
    "#2e047a", "#380581", "#420588", "#4d068f", "#570696"," #61069d", "#6b06a4", "#7606ab", "#8005b1", "#8b04b8", "#9602be", "#a100c4"
  ];

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const animateCircles = () => {
      let { x, y } = coords.current;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [colors]);

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => circlesRef.current[index] = el}
        ></div>
      ))}
    </>
  );
};

export default CircleTrail;
