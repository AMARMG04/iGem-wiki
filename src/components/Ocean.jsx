import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import fishImage from '../assets/fish.png'; // Import your fish image here
import fishImage2 from '../assets/fish2.png';

gsap.registerPlugin(ScrollTrigger);
AOS.init();

const Ocean = () => {
  // Create refs for the fish elements
  const fish1Ref = useRef(null);
  const fish2Ref = useRef(null);
  const fish3Ref = useRef(null);
  const fish4Ref = useRef(null);
  const fish5Ref = useRef(null);
  const fish6Ref = useRef(null);

  // Create an array of refs for the particle divs
  const particlesRefs = useRef([]);

  useEffect(() => {
    // Fish animations
    const fishAnimations = [
      { ref: fish1Ref, start: 'top bottom', end: 'bottom top', xStart: '-100%', xEnd: '100%' },
      { ref: fish2Ref, start: 'top bottom', end: 'bottom top', xStart: '-100%', xEnd: '100%' },
      { ref: fish3Ref, start: 'top bottom', end: 'bottom top', xStart: '-100%', xEnd: '100%' },
      { ref: fish4Ref, start: 'top bottom', end: 'bottom top', xStart: '100%', xEnd: '-100%' },
      { ref: fish5Ref, start: 'top bottom', end: 'bottom top', xStart: '100%', xEnd: '-100%' },
      { ref: fish6Ref, start: 'top bottom', end: 'bottom top', xStart: '100%', xEnd: '-100%' },
    ];

    fishAnimations.forEach(({ ref, start, end, xStart, xEnd }) => {
      gsap.fromTo(
        ref.current,
        { x: xStart }, // Start position
        {
          x: xEnd, // End position
          scrollTrigger: {
            trigger: ref.current,
            start: start,
            end: end,
            scrub: 2,
          },
        }
      );
    });

    // Apply the same animation to each particle
    particlesRefs.current.forEach((particle, index) => {
      if (particle) {
        gsap.to(particle, {
          scrollTrigger: {
            trigger: particle,
            start: "top 50%", // Adjust start position based on view
            end: "bottom 50%", // Adjust end position
            scrub: 80,
             // To debug and see scroll points
          },
          
          y: "150vh", // Moves particle down as you scroll
          ease: "power2.out",
        });
      }
    });
  }, []);

  // Helper to add refs dynamically
  const addToRefs = (el) => {
    if (el && !particlesRefs.current.includes(el)) {
      particlesRefs.current.push(el);
    }
  };

  return (
    <div className='grid grid-cols-1 ocean relative'>
      {/* Fish Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          src={fishImage}
          alt='Fish 1'
          ref={fish1Ref}
          className='absolute w-20 invert'
          style={{ top: '10%', left: '30%' }}
        />
        <img
          src={fishImage}
          alt='Fish 2'
          ref={fish2Ref}
          className='absolute w-20'
          style={{ top: '25%', left: '10%' }}
        />
        <img
          src={fishImage}
          alt='Fish 3'
          ref={fish3Ref}
          className='absolute w-20 invert'
          style={{ top: '34%', left: '30%' }}
        />
        <img
          src={fishImage2}
          alt='Fish 4'
          ref={fish4Ref}
          className='absolute w-20'
          style={{ top: '55%', right: '10%' }}
        />
        <img
          src={fishImage2}
          alt='Fish 5'
          ref={fish5Ref}
          className='absolute w-20 invert'
          style={{ top: '70%', right: '40%' }}
        />
        <img
          src={fishImage2}
          alt='Fish 6'
          ref={fish6Ref}
          className='absolute w-20'
          style={{ top: '90%', left: '20%' }}
        />
      </div>

      {/* Particle Elements */}
      <div className='particles'>
      <div className='flex justify-between '>
        <div className='rounded-full bg-red-600 w-[9px] h-[15px]' ref={addToRefs}></div>
        <div className='rounded-full bg-blue-600 w-[9px] h-[10px] mt-8' ref={addToRefs}></div>
        <div className='rounded-full bg-green-600 w-[9px] h-[13px] mt-20' ref={addToRefs}></div>
        <div className='rounded-full bg-red-600 w-[9px] h-[9px] mt-18' ref={addToRefs}></div>
        <div className='rounded-full bg-yellow-600 w-[9px] h-[10px] mt-14' ref={addToRefs}></div>
        <div className='rounded-full bg-green-600 w-[9px] h-[13px]' ref={addToRefs}></div>
        <div className='rounded-full bg-pink-600 w-[9px] h-[10px] mt-10' ref={addToRefs}></div>
        <div className='rounded-full bg-yellow-600 w-[9px] h-[12px]' ref={addToRefs}></div>
        <div className='rounded-full bg-red-600 w-[9px] h-[15px]' ref={addToRefs}></div>
      </div>

      {/* Content Sections */}
      <div className='grid grid-rows-1'>
        <div className='flex flex-col items-end justify-end pt-35'>
          <div
            data-aos='fade-left'
            className='text-white w-[600px] text-justify p-4 text-2xl m-20 backdrop-blur-lg'
          >
            <h1 className='text-[50px] font-nohemi_m my-7'>What is it?</h1>
            <p className='font-nohemi_l'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla incidunt numquam libero?
              Architecto est molestias odit repudiandae, laboriosam error et consequatur praesentium, assumenda
              maxime adipisci deserunt sit corporis voluptates!
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-rows-1'>
        <div className='flex flex-col items-start justify-start pt-35'>
          <div
            data-aos='fade-left'
            className='text-white w-[600px] text-justify p-4 text-2xl m-20 backdrop-blur-lg'
          >
            <h1 className='text-[50px] font-nohemi_m my-7'>Why is it?</h1>
            <p className='font-nohemi_l'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla incidunt numquam libero?
              Architecto est molestias odit repudiandae, laboriosam error et consequatur praesentium, assumenda
              maxime adipisci deserunt sit corporis voluptates!
            </p>
          </div>
        </div>

        <div className='grid grid-rows-1'>
          <div className='flex flex-col items-end justify-end pt-35'>
            <div
              data-aos='fade-left'
              className='text-white w-[600px] text-justify p-4 text-2xl m-20 backdrop-blur-lg'
            >
              <h1 className='text-[50px] font-nohemi_m my-7'>What is it?</h1>
              <p className='font-nohemi_l'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla incidunt numquam libero?
                Architecto est molestias odit repudiandae, laboriosam error et consequatur praesentium, assumenda
                maxime adipisci deserunt sit corporis voluptates!
              </p>
            </div>
          </div>
        </div>


        </div>

      </div>
    </div>
  );
};

export default Ocean;
