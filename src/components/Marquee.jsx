import React from "react";

const Marquee = () => {
  const images = [
    {
      link: "/src/assets/rec-logo.png",
    },
    {
      link: "/src/assets/benchling.png",
    },
    {
      link: "/src/assets/genscript-logo.png",
    },
    {
      link: "/src/assets/twist-logo.png",
    },
    {
      link: "/src/assets/IDT-logo.png",
    },
  ];
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block ">
        {/* Your content goes here */}
        {/* <p className="text-lg font-bold">This is a marquee effect in Tailwind CSS with React!</p> */}
        <div className="flex flex-row gap-20">
          {images.map((image, index) => (
            <img src={image.link} alt="" className="w-[200px] object-scale-down" key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
