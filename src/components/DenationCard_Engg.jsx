import React, { useEffect, useRef } from 'react';
import { FaDraftingCompass, FaHammer, FaFlask, FaBook } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const iconStyle = {
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const iconTextStyle = {
  transition: 'color 0.3s ease',
};

const DenationCard_Engg = () => {
  const cardRefs = useRef([]);
  const textRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP scroll effect for cards
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            markers: false,
          },
        }
      );
    });

    // GSAP animation for large text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      }
    );

    // GSAP animation for icons
    iconRefs.current.forEach((icon) => {
      gsap.fromTo(
        icon,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: icon,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className='pt-10'>
    

      <section className="flex flex-wrap justify-center gap-6 pb-12 bg-black-500">
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative"
        >
          <div
            ref={(el) => (iconRefs.current[0] = el)}
            className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-4"
            style={iconStyle}
          >
            <FaDraftingCompass className="icon text-blue-500 text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-nohemi_b text-gray-800 mb-2">
            Design
          </div>
          <div className="text-2xl font-nohemi_b text-gray-800 mb-2">
            Creating engaging user interfaces.
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
         
        </div>

        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative"
        >
          <div
            ref={(el) => (iconRefs.current[1] = el)}
            className="w-20 h-20 flex items-center justify-center bg-green-700 rounded-full mb-4"
            style={iconStyle}
          >
            <FaHammer className="icon text-white text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-nohemi_b text-gray-800 mb-2">
            Build
          </div>
          <div className="text-2xl font-nohemi_b text-gray-800 mb-2">
            Developing functional applications.
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
         
        </div>

        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative"
        >
          <div
            ref={(el) => (iconRefs.current[2] = el)}
            className="w-20 h-20 flex items-center justify-center bg-red-100 rounded-full mb-4"
            style={iconStyle}
          >
            <FaFlask className="icon text-red-500 text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-nohemi_b text-gray-800 mb-2">
            Test
          </div>
          <div className="text-2xl font-nohemi_b text-gray-800 mb-2">
            Ensuring quality and performance.
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
         
        </div>

        <div
          ref={(el) => (cardRefs.current[3] = el)}
          className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative"
        >
          <div
            ref={(el) => (iconRefs.current[3] = el)}
            className="w-20 h-20 flex items-center justify-center bg-yellow-100 rounded-full mb-4"
            style={iconStyle}
          >
            <FaBook className="icon text-yellow-500 text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-nohemi_b text-gray-800 mb-2">
            Learn
          </div>
          <div className="text-2xl font-nohemi_b text-gray-800 mb-2">
            Continuous knowledge acquisition.
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
          
        </div>
      </section>
    </div>
  );
};

export default DenationCard_Engg;
