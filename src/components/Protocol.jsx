import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import protocols from '../data/protocol-data.jsx';

const Protocol = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    ScrollReveal().reveal('.protocol-index', {
      origin: 'left',
      distance: '50px',
      duration: 800,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.protocol-content', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 200,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      <div className="protocol-index w-full md:w-1/4 bg-gray-200 p-4 md:h-screen md:sticky md:top-0 reveal">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Protocol Index</h2>
        <ul className="space-y-2">
          {protocols.map((protocol, index) => (
            <li key={protocol.id}>
              <button
                className={`flex items-center p-2 text-gray-700 w-full text-left transition-all duration-300 transform rounded-lg shadow-md ${
                  activeIndex === index
                    ? 'bg-[#fb923c] text-white shadow-orange-500/50 scale-105'
                    : 'hover:bg-[#fb923c] hover:text-white hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {protocol.icon}
                <span className="ml-2">{protocol.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-3/4 p-4 overflow-y-auto protocol-content reveal">
        {protocols.map((protocol, index) => (
          <div
            key={protocol.id}
            className={`transition-all duration-500 ease-in-out transform ${
              activeIndex === index
                ? 'max-h-screen mb-4 opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            {protocol.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Protocol;
