import React, { useState, useEffect, useRef } from 'react';
import LinkedIn from "../assets/image.png";

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

  return (
    <div className="relative w-full h-full">
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
            <div className="w-full mt-5 pt-11 relative z-10">
              <div className="bg-gray-900 absolute p-4 md:w-[550px] md:h-[280px] lg:w-[800px] lg:h-[400px] lg:mx-10 rounded-3xl">
                <h2 className="text-[54px] mb-3 font-semibold text-white">
                  {member.name}
                </h2>
                <div className="flex">
                  <h3 className="text-white font-medium mb-4">
                    {member.role} |
                  </h3>
                  <a
                    href="https://www.linkedin.com/"
                    className="flex items-center justify-center text-white pb-4"
                  >
                    <img
                      src={LinkedIn}
                      className="w-4 mx-2"
                      alt="LinkedIn icon"
                    />
                    LinkedIn
                  </a>
                </div>
                <p className="text-white">{member.description}</p>
              </div>
              <div className="relative flex justify-end z-0">
                <img
                  src={member.image}
                  alt={`${member.name} image`}
                  className="lg:w-[650px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {team_members.map((_, index) => (
          <button
            key={index}
            className={`rounded-full cursor-pointer ${index === currentSlide ? 'bg-black w-4 h-4' : 'w-3 h-3 bg-gray-400'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;