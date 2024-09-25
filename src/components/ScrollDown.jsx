import React from 'react';

const ScrollDown = () => {
  return (
    <div className="w-full">
      <svg className="arrows absolute bottom-12 left-1/2 right-1/2 transform -translate-x-1/2">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>

      <style jsx>{`
        .arrows path {
          stroke: #2994D1;
          fill: transparent;
          stroke-width: 4px;  
          animation: arrow 2s infinite;
        }

        @keyframes arrow {
          0% {opacity: 0}
          40% {opacity: 1}
          80% {opacity: 0}
          100% {opacity: 0}
        }

        .arrows path.a1 {
          animation-delay: -1s;
        }

        .arrows path.a2 {
          animation-delay: -0.5s;
        }

        .arrows path.a3 { 
          animation-delay: 0s;
        }
      `}</style>
    </div>
  );
};

export default ScrollDown;
