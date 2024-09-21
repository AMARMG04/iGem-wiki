import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = (props) => {
  return (
    <div className={`relative w-full h-[calc(100vh-150px)] bg-${props.color}`}>
      <div className="absolute top-36 left-1/2 w-[200px] h-[200px] bg-purple-900 rounded-full mix-blend-hard-light filter blur-2xl opacity-40  animate-blob lg:w-[400px] lg:h-[400px]"></div>
        <div className="absolute top-32 right-1/2 w-[200px] h-[200px] bg-orange-700 opacity-40-300 rounded-full mix-blend-hard-light filter blur-2xl opacity-40  animate-blob animation-delay-6000 lg:w-[400px] lg:h-[400px]"></div>
        <div className="absolute top-52 left-[600px] w-[200px] h-[200px] bg-indigo-800 rounded-full mix-blend-hard-light filter blur-2xl opacity-40  animate-blob animation-delay-4000 lg:w-[400px] lg:h-[400px]"></div>
      <TypeAnimation
        sequence={[
          props.title,
          2000,
          "",
          1000,
        ]}
        repeat={Infinity}
        className="text-black text-[100px] font-nohemi_m absolute inset-0 flex items-center justify-center typewriter"
      />

      {/* New Shape Divider */}
      <div className="custom-shape-divider-bottom-1726114992">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Inline CSS within JSX */}
      <style jsx>{`
        .custom-shape-divider-bottom-1726114992 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .custom-shape-divider-bottom-1726114992 svg {
          position: relative;
          display: block;
          width: calc(146% + 1.3px);
          height: 89px; /* Adjust height if needed */
          transform: rotateY(180deg);
        }

        .custom-shape-divider-bottom-1726114992 .shape-fill {
          fill: #ffffff; /* Change the fill color as needed */
        }
      `}</style>
    </div>
  );
};

export default Banner;
