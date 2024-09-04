import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function VerticalSection() {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline.fromTo(
      colLeftRef.current,
      { y: 0 },
      { y: '170vh', duration: 1, ease: 'none' },
      0
    );

    ScrollTrigger.create({
      animation: timeline,
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom center',
      scrub: true,
    });
  }, []);

  return (
    <section ref={sectionRef} id="vertical" className="min-h-[200vh] w-full">
      <div className="container mx-auto flex">
        <div ref={colLeftRef} className="w-1/2 border-l-4 border-[#ff98a2] p-6">
          <h2 className="text-6xl font-black leading-[0.85] text-white">
            <span>About</span>
            <span>Smooth</span>
            <span>Scroll</span>
          </h2>
        </div>
        <div className="w-2/5 space-y-60">
          {Array(4).fill().map((_, index) => (
            <div key={index} className="vertical__item text-white">
              <h3 className="text-2xl font-bold text-[#ff98a2] uppercase">
                Smooth Scroll Lenis
              </h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth
                navigation, all while using the platform and keeping it
                accessible.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerticalSection;
