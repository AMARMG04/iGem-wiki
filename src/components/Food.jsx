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
  // Create separate refs for each micro-plastic
  const microRef1 = useRef(null);
  const microRef2 = useRef(null);
  const microRef3 = useRef(null);
  const microRef4 = useRef(null);
  const microRef5 = useRef(null);
  const microRef6 = useRef(null);
  const microRef7 = useRef(null);
  const microRef8 = useRef(null);
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

    // Ensure ScrollTrigger works properly
    ScrollTrigger.refresh();

    // Individual animations for each micro-plastic
    gsap.to(microRef1.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 850,
      x: 650,
      ease: "power1.out",
    });

    gsap.to(microRef2.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 700,
      x: 650,
      ease: "power1.out",
    });

    gsap.to(microRef3.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 700,
      x: 950,
      ease: "power1.out",
    });

    gsap.to(microRef4.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 800,
      x: 750,
      ease: "power1.out",
    });

    gsap.to(microRef5.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 700,
      x: 850,
      ease: "power1.out",
    });

    gsap.to(microRef6.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 700,
      x: 750,
      ease: "power1.out",
    });

    gsap.to(microRef7.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 810,
      x: 880,
      ease: "power1.out",
    });

    gsap.to(microRef8.current, {
      scrollTrigger: {
        trigger: ".plasticsdiv",
        start: "top center",
        endTrigger: ".body-image",
        end: "top center",
        scrub: true,
      },
      y: 770,
      x: 590,
      ease: "power1.out",
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
            <div className='z-50 micro-plastics rounded-full absolute right-10 top-[100px] bg-red-600 w-[9px] h-[15px]' ref={microRef1}></div>
            <div className='z-50 micro-plastics rounded-full absolute right-10 bottom-[90px] bg-blue-600 w-[9px] h-[15px]' ref={microRef2}></div>
            <div className='z-50 micro-plastics rounded-full absolute left-7 top-[190px] bg-red-600 w-[9px] h-[15px]' ref={microRef3}></div>
            <div className='z-50 micro-plastics rounded-full absolute right-[170px] top-[60px] bg-yellow-600 w-[9px] h-[15px]' ref={microRef4}></div>
            <div className='z-50 micro-plastics rounded-full absolute left-[60px] bottom-[90px] bg-blue-600 w-[9px] h-[15px]' ref={microRef5}></div>
            <div className='z-50 micro-plastics rounded-full absolute right-[170px] bottom-[40px] bg-green-600 w-[9px] h-[15px]' ref={microRef6}></div>
            <div className='z-50 micro-plastics rounded-full absolute left-11 top-[80px] bg-green-600 w-[9px] h-[15px]' ref={microRef7}></div>
            <div className='z-50 micro-plastics rounded-full absolute right-[30px] top-[190px] bg-yellow-600 w-[9px] h-[15px]' ref={microRef8}></div>
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
