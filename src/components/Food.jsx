import React, { useEffect, useRef } from 'react';
import Body from "../assets/body.png";
import Water from "../assets/water.png";
import Lenis from "@studio-freight/lenis";
import MagnifyImage from "./MagnifyImage";
import Land2 from './Land2';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Food = () => {
  const microRef = useRef([]);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);

    // Ensure the ScrollTrigger works properly
    ScrollTrigger.refresh();

    // Animation for microplastic divs
    microRef.current.forEach((micro) => {
      if (micro) {
        gsap.to(micro, {
          scrollTrigger: {
            trigger: ".plasticsdiv",  // Start the animation when plasticsdiv enters the viewport
            start: "top center",      // Start when the top of plasticsdiv is at the center
            endTrigger: ".body-image",// End when body-image section is reached
            end: "top center",        // End when the top of body-image reaches the center
            scrub: true,              // Smoothly link the animation to the scroll
          },
          y: 700,
          x: 750,  // Move down by 500px, adjust as necessary
          ease: "power1.out",  // Smooth easing
        });
      }
    });

    // Cleanup Lenis when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <div className="bg-customCream h-auto pb-[90px]">
        <h1 className="font-nohemi_m text-[70px] text-center pt-[120px]">How Does It Affect Food</h1>

        <div className="pt-[90px] grid grid-cols-2">
          <div className="relative col-span-1 w-1/2 flex mx-auto items-center justify-center plasticsdiv z-50" data-aos="fade-right">
            <div className=" mt-1 ">
              <MagnifyImage src={Water} />
            </div>
            {/* Microplastic divs */}
            <div className='z-50 micro-plastics rounded-full absolute right-10 top-[100px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[1] = el)}></div>
            <div className='z-50 micro-plastics rounded-full absolute right-10 bottom-[90px] bg-blue-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[2] = el)}></div>
            <div className='z-50 micro-plastics rounded-full absolute left-7 top-[190px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[3] = el)}></div>
            <div className='z-50 micro-plastics rounded-full absolute right-[170px] top-[60px] bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[4] = el)}></div>
            <div className='z-50 micro-plastics rounded-full absolute left-[60px] bottom-[90px] bg-blue-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[5] = el)}></div>
            <div className='z-50 micro-plastics rounded-full absolute right-[170px] bottom-[40px] bg-green-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[6] = el)}></div>
            <div className='z-50 micro-plastics rounded-full absolute left-11 top-[80px] bg-green-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[7] = el)}></div>
            <div className='z-50micro-plastics rounded-full absolute right-[30px] top-[190px] bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microRef.current[8] = el)}></div>
          </div>
          <div className="col-span-1 justify-start" data-aos="fade-left">
            <p className='font-nohemi_l text-justify text-[25px] pt-9 mr-[100px]'>Lorem ipsum dolor sit amet consectetur...</p>
          </div>
        </div>

        {/* Body Image Section */}
        <div className='mt-[180px]'>
          <div className="grid grid-cols-2 body-image" data-aos="fade-right">
            <div className="col-span-1 justify-start">
              <p className='font-nohemi_l text-justify text-[25px] pt-9 ml-[100px]'>Lorem ipsum dolor sit amet consectetur...</p>
            </div>
            <div className="col-span-1 flex mx-auto items-center justify-center" data-aos="fade-left">
              <img src={Body} alt="Body" className='w-[600px] mb-20 z-0' />
            </div>
          </div>
        </div>
      </div>
      <Land2 />
    </div>
  );
};

export default Food;
