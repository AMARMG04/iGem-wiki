import React, { useState, useEffect, useRef } from 'react';
import { FaDraftingCompass, FaHammer, FaFlask, FaBook } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const icons = [
  { id: 'design', icon: <FaDraftingCompass className="text-4xl" />, bgColor: 'bg-blue-100', color: 'text-blue-500' },
  { id: 'build', icon: <FaHammer className="text-4xl" />, bgColor: 'bg-green-100', color: 'text-green-500' },
  { id: 'test', icon: <FaFlask className="text-4xl" />, bgColor: 'bg-red-100', color: 'text-red-500' },
  { id: 'learn', icon: <FaBook className="text-4xl" />, bgColor: 'bg-yellow-100', color: 'text-yellow-500' },
];

const Cycle = ({ content, position = 'left', title }) => {
  const [selectedContent, setSelectedContent] = useState('design');
  const [rotation, setRotation] = useState(90); // Start with 90 degrees so 'design' is on the right
  const selectedIndex = icons.findIndex((icon) => icon.id === selectedContent);
  const cycleRef = useRef(null);

  const handleSelect = (id, index) => {
    setSelectedContent(id);
    setRotation(90 - 90 * index); // Adjust rotation to bring the selected icon to the right
  };

  useEffect(() => {
    // GSAP rotation animation
    gsap.to(cycleRef.current, { rotation: rotation, duration: 1.5, ease: 'power2.out' });

    // GSAP scroll effect
    gsap.fromTo(
      cycleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: cycleRef.current,
          start: 'top 80%', // Trigger animation when the top of the element is 80% from the top of the viewport
          end: 'top 30%', // End the animation when the top of the element is 30% from the top of the viewport
          scrub: true, // Smooth scroll effect
        },
      }
    );
  }, [selectedIndex, rotation]);

  return (
    <div className="flex h-screen bg-[#f5f5dc] relative">
      <div className={`w-1/2 flex items-center justify-center relative ${position === 'left' ? 'order-1' : 'order-2'}`}>
        <div className="relative w-96 h-96">
          {/* Circle Border */}
          <div className="absolute w-full h-full rounded-full border-2 border-gray-400"></div>

          {/* Cycle 1 Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl font-bold text-gray-800">{title}</div>
          </div>

          <div
            ref={cycleRef}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {icons.map((item, index) => (
              <button
                key={item.id}
                className={`absolute transform transition-transform duration-500 hover:scale-110`}
                onClick={() => handleSelect(item.id, index)}
                style={{
                  top: index === 0 ? '0%' : index === 2 ? '100%' : '50%',
                  left: index === 3 ? '0%' : index === 1 ? '100%' : '50%',
                  transform: `translate(-50%, -50%) rotate(${index * 90}deg)`,
                }}
              >
                <div
                  className={`p-4 rounded-lg shadow-lg flex items-center justify-center relative ${item.bgColor} ${item.color}`}
                  style={{
                    border: index === selectedIndex ? '3px solid black' : 'none', // Square border for selected card
                  }}
                >
                  {item.icon}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`w-1/2 flex items-center justify-center p-10 bg-transparent ${position === 'left' ? 'order-2' : 'order-1'}`}>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 capitalize">{selectedContent}</h2>
          <p className="text-lg text-gray-700">{content[selectedContent]}</p>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
