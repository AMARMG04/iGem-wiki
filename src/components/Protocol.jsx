import React, { useState } from 'react';
import protocols from '../data/protocol-data.jsx';

const Protocol = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Protocol Index */}
      <div className="w-full md:w-1/4 bg-gray-200 p-4 md:h-screen md:sticky md:top-0">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Protocol Index</h2>
        <ul className="space-y-2">
          {protocols.map((protocol, index) => (
            <li key={protocol.id}>
              <button
                className={`flex items-center p-2 text-gray-700 w-full text-left transition-colors duration-300 ${
                  activeIndex === index ? 'bg-[#fb923c] text-white' : 'hover:bg-[#fb923c] hover:text-white'
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

      {/* Right Side - Protocol Content */}
      <div className="w-full md:w-3/4 p-4 overflow-y-auto">
        {protocols.map((protocol, index) => (
          <div
            key={protocol.id}
            className={`transition-all duration-300 ${
              activeIndex === index ? 'max-h-screen mb-4' : 'max-h-0 overflow-hidden'
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
