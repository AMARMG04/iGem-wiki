import React, { useState, useEffect, useRef } from "react";
import LinkedIn from "../assets/image.png";
import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from "react-icons/io";

const Carousel = ({ team_members }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = index * carouselRef.current.offsetWidth;
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const newIndex = Math.round(
        carouselRef.current.scrollLeft / carouselRef.current.offsetWidth
      );
      setCurrentSlide(newIndex);
    }
  };

  const handleNextSlide = () => {
    const nextIndex = (currentSlide + 1) % team_members.length;
    setCurrentSlide(nextIndex);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = nextIndex * carouselRef.current.offsetWidth;
    }
  };

  const handlePrevSlide = () => {
    const prevIndex = (currentSlide - 1 + team_members.length) % team_members.length;
    setCurrentSlide(prevIndex);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = prevIndex * carouselRef.current.offsetWidth;
    }
  };

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          backgroundColor: 0xffffff,
          points: 11.0,
          maxDistance: 25.0,
          spacing: 16.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="">
      <div ref={vantaRef} className="relative w-full h-screen">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory h-full w-screen flex no-scrollbar"
        >
          {team_members.map((member, index) => (
            <div
              className="flex-none w-screen h-full flex justify-center items-center snap-center relative"
              key={index}
            >
              <div className="w-full mt-5 pt-11 pl-24 relative z-10">
                {/* Black Glassmorphism Container */}
                <div className="bg-white-200 backdrop-blur-md border border-white/30 shadow-lg my-20 absolute p-10 md:w-[550px] md:h-fit lg:w-[850px] lg:h-fit lg:mx-10 rounded-3xl text-black">
                  <h2 className="text-[76px] mb-3 font-nohemi_sb text-black capitalize">
                    {member.name}
                  </h2>
                  <div className="flex">
                    <h3 className="text-black font-nohemi_m text-2xl mb-4">
                      {member.role} |
                    </h3>
                    <a
                      href="https://www.linkedin.com/"
                      className="flex items-center justify-center text-2xl font-nohemi_m text-black pb-4"
                    >
                      <img
                        src={LinkedIn}
                        className="w-6 mx-2"
                        alt="LinkedIn icon"
                      />
                      LinkedIn
                    </a>
                  </div>
                  <p className="text-black font-inter text-xl text-justify">
                    {member.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative flex justify-center z-0 ml-[900px]">
                  <img
                    src={member.image}
                    alt={`${member.name} image`}
                    className="lg:w-auto lg:h-[700px]"
                  />
                </div>

                {/* Arrows */}
                <div className="absolute inset-0 flex justify-between items-center px-5">
                  <button
                    onClick={handlePrevSlide}
                    className="bg-black/30 backdrop-blur-lg border border-white/30 shadow-lg pl-8 rounded-full hover:bg-white/50 transition duration-300"
                  >
                    <IoMdArrowDropleftCircle className="text-white text-6xl" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="bg-black/30 backdrop-blur-lg border border-white/30 shadow-lg pr-8 rounded-full hover:bg-white/50 transition duration-300"
                  >
                    <IoMdArrowDroprightCircle className="text-white text-6xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="z-10 absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          {team_members.map((_, index) => (
            <button
              key={index}
              className={`rounded-full cursor-pointer ${
                index === currentSlide
                  ? "bg-black w-4 h-4"
                  : "w-3 h-3 bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
