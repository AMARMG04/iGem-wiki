import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NewNavbar from "../components/NewNavbar";
import World from "../assets/world.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const worldRef = useRef(null);

  useEffect(() => {
    const worldElement = worldRef.current;

    // Move the image down with the scroll and then shift it left when entering the next section
    gsap.to(worldElement, {
      scrollTrigger: {
        trigger: ".next-section", // Start animation as the next section comes into view
        start: "top bottom", // Trigger when the top of the next section hits the bottom of the viewport
        end: "top center", // End when the top of the next section hits the center of the viewport
        scrub: true, // Smooth animation
      },
      x: "-25vw",
      y: "65vw", // Shift the image to the left
      ease: "power1.out",
    });
  }, []);

  return (
    //     <div className="bg-customCream '#FFFAE9',
    //  h-screen relative">
    <div
      className="bg-black '#FFFAE9',
 h-screen relative"
    >
      {/* <NewNavbar /> */}
      <div className="text-black lg:h-[80%] xl:h-[100vh] relative">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-white text-[120px] font-keania">
            MICROPLASTICS
          </h1>
          <img
            ref={worldRef}
            src={World}
            alt="World"
            className="lg:w-[500] xl:w-[650px] h-auto absolute top-[115px]"
          />
        </div>

        <div
          className="absolute left-24 top-60 p-4 py-6 rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white "
          style={{
            boxShadow:
              "0px 0px 1175.5799560546875px 0 #680783, 0px 0px 671.760009765625px 0 #680783, 0px 0px 391.8599853515625px 0 #680783, 0px 0px 195.92999267578125px 0 #680783, 0px 0px 55.97999954223633px 0 #680783, 0px 0px 27.989999771118164px 0 #680783",
          }}
        >
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2 font-keania">
            400 Million Tons
          </p>
          <p className="text-right text-3xl">/ year</p>
        </div>

        <div className="absolute left-36 top-[450px] p-4 py-6 rounded-xl text-white bg-violet-800 shadow-lg shadow-purple-800 ">
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2 font-keania">
            400 Million Tons
          </p>
          <p className="text-right text-3xl">/ year</p>
        </div>
        <div className="absolute right-24 top-[250px] p-4 w-[300px] py-6 h-auto rounded-xl text-white bg-violet-800 shadow-lg shadow-purple-800">
          <h2 className="text-xl text-center font-quick">
            DEPRICIATED MARINE ECOSYSTEM VALUE
          </h2>
          <p className="text-3xl text-center my-2 font-keania">$400 Million</p>
          <p className="text-3xl text-center my-2 font-keania">To</p>
          <p className="text-3xl text-center my-2 font-keania">$2500 Million</p>
        </div>
        <div className="absolute right-24 top-[550px] p-4 w-[300px] py-6 h-auto rounded-xl text-white bg-transparent border border-purple-700 shadow-md shadow-purple-800">
          <h2 className="text-xl text-center font-quick">SCROLL DOWN</h2>
        </div>
      </div>
      {/* The next section to trigger the image movement */}
      <div className="next-section h-screen bg-slate-600">
        <h2 className="text-center text-4xl pt-20">Next Section</h2>
        {/* More content here */}
      </div>
    </div>
  );
};

export default Home;
