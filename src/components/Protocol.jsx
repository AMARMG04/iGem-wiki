import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import protocols from '../data/protocol-data.jsx';
import Banner from './Banner.jsx';

const Protocol = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionsRef = useRef([]);

  // Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
    <>
      <Banner title="Protocols" />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 rounded-md m-5 shadow-lg font-nohemi_m">
        {/* Protocol Index - Timeline Bar */}
        <div className="protocol-index w-full md:w-1/4 bg-gray-200 p-4 md:h-screen md:sticky md:top-0 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Protocol Timeline</h2>
          <ul className="relative space-y-10 pl-5">
            {protocols.map((protocol, index) => (
              <li key={protocol.id} className="flex items-center">
                {/* Timeline bar */}
                <div className="absolute left-0 top-1 h-full w-1 bg-gray-400"></div>
                <div
                  className={`flex items-center z-10 w-6 h-6 rounded-full transition-colors duration-300 ${
                    activeIndex === index
                      ? 'bg-blue-500 ring-4 ring-blue-200'
                      : 'bg-gray-400'
                  }`}
                />
                {/* Protocol Title */}
                <button
                  className={`ml-4 text-left transition-all duration-300 transform ${
                    activeIndex === index
                      ? 'text-blue-500 font-bold'
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                  onClick={() => {
                    sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="text-lg">{protocol.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Protocol Content */}
        <div className="protocol-content w-full md:w-3/4 p-6 overflow-y-auto bg-white rounded-lg shadow-md text-white">
          {protocols.map((protocol, index) => (
            <div
              key={protocol.id}
              ref={(el) => (sectionsRef.current[index] = el)}
              data-index={index}
              className={`transition-all duration-700 ease-in-out transform mb-10 text-white ${
                activeIndex === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
              }`}
            >
              <div className="p-6 bg-gradient-to-r from-blue-300 to-blue-400 rounded-lg shadow-md text-white">
                {protocol.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Protocol;
