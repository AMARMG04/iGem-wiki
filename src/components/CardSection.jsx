import React, { useEffect, useRef } from 'react';
import { FaTree, FaTint } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFish } from 'react-icons/fa';
import { FaWater } from 'react-icons/fa';
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const iconStyle = {
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const iconTextStyle = {
  transition: 'color 0.3s ease',
};

const CardSection = () => {
  const cardRefs = useRef([]);
  const textRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP scroll effect for cards
    cardRefs.current.forEach((card, index) => {
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
      <section ref={textRef} className="text-center mb-12 py-10 text-8xl text-black-700 bg-pink-500">
        <p className="text-xxl font-nohemi_b">impactful facts related to</p>
        <p className="text-xxl font-nohemi_b">microplastics</p>
      </section>

      <section className="flex flex-wrap justify-center gap-6 pb-12 bg-black-500">
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative"
        >
          <div
            ref={(el) => (iconRefs.current[0] = el)}
            className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full mb-4"
            style={iconStyle}
          >
            <FaFish className="icon text-white text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-nohemi_b text-gray-800 mb-2">
          2050
          </div>
          <div className="text-2xl font-nohemi_b text-gray-800 mb-2">
          By the 
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
          <div className="flex items-center justify-center font-inter mt-4 text-gray-800">
          year there will be more plastic than fish in the ocean.
          </div>
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
            <FaTint className="icon text-white text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-nohemi_b text-gray-800 mb-2">
          83%
          </div>
          <div className="text-2xl font-nohemi_b text-gray-800 mb-2">
Of tap water
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
          <div className="flex items-center justify-center font-inter mt-4 text-gray-800">
          Tested globally contains microplastics, affecting human health.          </div>
        </div>

        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative"
        >
          <div
            ref={(el) => (iconRefs.current[2] = el)}
            className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4"
            style={iconStyle}
          >
            <FaWater className="icon text-white text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-nohemi_b text-gray-800 mb-2">
          1 Trillion
          </div>
          <div className="text-2xl font-nohemi_b text-gray-800 mb-2">
          Microplastic
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
          <div className="flex items-center justify-center font-inter mt-4 text-gray-800">
          particles are estimated to be floating in the world's oceans
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
