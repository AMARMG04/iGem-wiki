import React, { useState, useRef } from 'react';
import { FaDraftingCompass, FaHammer, FaFlask, FaBook } from 'react-icons/fa';
import arrow from '../assets/arrow.png'
const icons = [
  { id: 'design', icon: <FaDraftingCompass className="text-4xl" />, bgColor: 'bg-blue-100', color: 'text-blue-500' },
  { id: 'build', icon: <FaHammer className="text-4xl" />, bgColor: 'bg-green-100', color: 'text-green-500' },
  { id: 'test', icon: <FaFlask className="text-4xl" />, bgColor: 'bg-red-100', color: 'text-red-500' },
  { id: 'learn', icon: <FaBook className="text-4xl" />, bgColor: 'bg-yellow-100', color: 'text-yellow-500' },
];

const Cycle = ({ content, position = 'left', title }) => {
  const [selectedContent, setSelectedContent] = useState('design');
  const cycleRef = useRef(null);
  const contentRef = useRef(null);

  const handleSelect = (id) => {
    setSelectedContent(id);
  };

  return (
    <div className="flex h-screen bg-white relative">
      <div className={`w-1/2 flex items-center justify-center relative ${position === 'left' ? 'order-1' : 'order-2'}`}>
        <div className="relative w-96 h-96">
          {/* Circle Border */}
          <div className="absolute w-full h-full rounded-full border-2 border-gray-400"></div>

          {/* Cycle 1 Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl font-bold text-gray-800">{title}</div>
          </div>

          <div ref={cycleRef} className="absolute inset-0 flex items-center justify-center">
            {icons.map((item, index) => (
              <button
                key={item.id}
                className={`absolute transform transition-transform duration-500 hover:scale-110`}
                onClick={() => handleSelect(item.id)}
                style={{
                  top: index === 0 ? '0%' : index === 2 ? '100%' : '50%',
                  left: index === 3 ? '0%' : index === 1 ? '100%' : '50%',
                  transform: `translate(-50%, -50%) rotate(${index * 90}deg)`,
                }}
              >
                <div
                  className={`p-4 rounded-lg shadow-lg flex items-center justify-center relative ${item.bgColor} ${item.color}`}
                  style={{
                    border: item.id === selectedContent ? '3px solid black' : 'none', // Square border for selected card
                  }}
                >
                  {item.icon}
                </div>
              </button>
            ))}
          </div>

          
          <img
            src={arrow} // Replace with your image path
            alt="Choose to view"
            className="absolute top-1/2 right-full transform -translate-y-48 -translate-x-12"
            style={{ width: '100px', height: 'auto' }} // Adjust size as needed
          />
          
          {/* Text below the arrow */}
          <div className="absolute top-1/2 right-full transform -translate-y-52 -translate-x-12 text-center font-nohemi_m">
            <span className="text-lg font-semibold">Choose to view</span>
          </div>
          
        </div>
      </div>

      <div className={`w-1/2 flex items-center justify-center p-10 bg-transparent ${position === 'left' ? 'order-2' : 'order-1'}`}>
        <div className="max-w-xs w-full">
          <div
            ref={contentRef}
            className={`bg-white rounded-lg shadow-lg p-8 transition-transform duration-500 ease-in-out transform ${selectedContent} 
              ${selectedContent === 'design' ? 'scale-100' : 'scale-95'}`} // Adjusting scale based on selected content
          >
            <h2 className="text-5xl font-bold mb-4 text-gray-800 capitalize">{selectedContent}</h2>
            <p className="text-lg text-gray-700">{content[selectedContent]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
