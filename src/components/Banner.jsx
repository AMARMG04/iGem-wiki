import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="relative w-full h-[calc(100vh-100px)] bg-teal-950">
      {/* <img
        src="/src/assets/footer-bg.jpeg"
        alt="background for banner"
        className="z-0 w-full h-[calc(100vh-100px)] object-cover"
      /> */}

      <TypeAnimation
        sequence={[
          "Parts",
          1000,
          "Parts Overview", //  Continuing previous Text
          1000,
          "Parts",
          1000,
          "",
          1000,
        ]}
        repeat={Infinity}
        className="text-white text-[100px] font-nohemi_m absolute inset-0 flex items-center justify-center typewriter"
      />
    </div>
  );
};

export default Banner;
