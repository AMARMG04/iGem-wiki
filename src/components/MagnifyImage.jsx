// 
















import React, { useState, useRef, useEffect } from 'react';

const MagnifyImage = ({ src }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierStyle, setMagnifierStyle] = useState({});
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = src;

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, 330, 330);
    };
  }, [src]);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = src;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, 330, 330);

      if (showMagnifier) {
        // Adding more micro elements with varied sizes and colors
        const microElements = [
          { x: 190, y: 80, color: 'red', size: 5 },
          { x: 120, y: 80, color: 'blue', size: 5 },
          { x: 190, y: 250, color: 'red', size: 5 },
          { x: 150, y: 190, color: 'green', size: 5 },
          { x: 90, y: 250, color: 'purple', size: 5 },
          { x: 150, y: 150, color: 'orange', size: 5 },
          { x: 220, y: 130, color: 'pink', size: 5 },
          { x: 120, y: 160, color: 'cyan', size: 5 },
          { x: 300, y: 200, color: 'lime', size: 5 },
          { x: 50, y: 50, color: 'teal', size: 5 },
          { x: 80, y: 180, color: 'brown', size: 5 },
          { x: 180, y: 160, color: 'brown', size: 5 },
          { x: 270, y: 250, color: 'violet', size: 5 },
          { x: 130, y: 300, color: 'indigo', size: 5 },
          { x: 100, y: 210, color: 'grey', size: 5 },
          { x: 230, y: 160, color: 'black', size: 1.9 },
          { x: 180, y: 120, color: 'silver', size: 1.1 },
          { x: 160, y: 260, color: 'crimson', size: 1.4 },
          { x: 70, y: 100, color: 'salmon', size: 1.6 },
          { x: 140, y: 70, color: 'khaki', size: 1.3 },
          { x: 200, y: 30, color: 'peachpuff', size: 1.5 },
        ];

        microElements.forEach((micro) => {
          ctx.fillStyle = micro.color;
          ctx.beginPath();
          ctx.arc(micro.x, micro.y, micro.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    };

    setMagnifierStyle({
      top: `${y - 50}px`, // Adjust for the size of the magnifier
      left: `${x - 50}px`,
      backgroundPosition: `${bgX}% ${bgY}%`,
    });
  };

  return (
    <div
      className="relative mx-7 my-auto"
      ref={containerRef}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
      style={{ width: '330px', height: '330px' }}
    >
      {/* Hidden Canvas to Render Combined Image and Micro Elements */}
      <canvas ref={canvasRef} width={330} height={330} style={{ display: 'none' }} />
<div>
    <h1 className='font-inter text-white text-3xl'>Hover over me!</h1>
</div>
      {/* Display the Base Image */}
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Magnifier Circle */}
      {showMagnifier && (
        <div
          className="absolute w-24 h-24 rounded-full border-4 border-white"
          style={{
            ...magnifierStyle,
            backgroundImage: `url(${canvasRef.current?.toDataURL()})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${330 * 2}px ${330 * 2}px`, // Adjust zoom level
            pointerEvents: 'none',
            zIndex: 2, // Ensure magnifier is above the base image
          }}
        />
      )}
    </div>
  );
};

export default MagnifyImage;

