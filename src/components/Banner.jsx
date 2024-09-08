import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = (props) => {

  return (
   
<div className={`relative w-full h-[calc(100vh-100px)] bg-${props.color}-500`}>
      <TypeAnimation
        sequence={[
          props.title, // Correct usage
          2000,
        
          "",
          1000,
        ]}
        repeat={Infinity}
        className="text-black text-[100px] font-nohemi_m absolute inset-0 flex items-center justify-center typewriter"
      />
    </div>
  );
};

export default Banner;
