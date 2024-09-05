import React, { useState, useEffect } from 'react';
import { FaDraftingCompass, FaHammer, FaFlask, FaBook } from 'react-icons/fa';

const icons = [
  { id: 'design', icon: <FaDraftingCompass className="text-3xl" />, bgColor: 'bg-blue-100', color: 'text-blue-500' },
  { id: 'build', icon: <FaHammer className="text-3xl" />, bgColor: 'bg-green-100', color: 'text-green-500' },
  { id: 'test', icon: <FaFlask className="text-3xl" />, bgColor: 'bg-red-100', color: 'text-red-500' },
  { id: 'learn', icon: <FaBook className="text-3xl" />, bgColor: 'bg-yellow-100', color: 'text-yellow-500' },
];

const contents = {
  design: 'Design is the process of envisioning and planning the creation of objects, systems, or solutions.',
  build: 'Build refers to the process of constructing, assembling, or developing based on a design.',
  test: 'Testing involves evaluating the system or components to ensure they meet the requirements and function properly.',
  learn: 'Learning is the acquisition of knowledge or skills through experience, study, or teaching.',
};

const Cycle = () => {
  const [selectedContent, setSelectedContent] = useState('design');
  const [rotation, setRotation] = useState(90); // Start with 90 degrees so 'design' is on the right
  const selectedIndex = icons.findIndex((icon) => icon.id === selectedContent);

  const handleSelect = (id, index) => {
    setSelectedContent(id);
    setRotation(90 - 90 * index); // Adjust rotation to bring the selected icon to the right
  };

  useEffect(() => {
    setRotation(90 - 90 * selectedIndex);
  }, [selectedIndex]);

  return (

    <div className="flex h-screen bg-[#f5f5dc]"> 
    {/* Beige background */}
      {/* Left Side: Rotating Circle Carousel */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="relative w-64 h-64">
          {/* Circle Lines */}
          <div className="absolute w-full h-full rounded-full border-2 border-gray-400"></div>

          {/* Rotating Circle */}
          <div
            className="absolute inset-0 flex items-center justify-center transform transition-transform duration-[1500ms] ease-in-out"
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
                {/* Small card for each icon */}
                <div
                  className={`p-3 rounded-lg shadow-lg flex items-center justify-center relative ${item.bgColor} ${item.color}`}
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

        {/* Connecting Lines */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gray-500"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-1 w-32 bg-gray-500"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gray-500"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-1 w-32 bg-gray-500"></div>
      </div>

      {/* Right Side: Content without background */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-transparent">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 capitalize">{selectedContent}</h2>
          <p className="text-lg text-gray-700">{contents[selectedContent]}</p>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
