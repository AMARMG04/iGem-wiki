import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import World from "../assets/world.png";
import { IoIosArrowDropdown } from "react-icons/io";
import Plastic1 from "../assets/plastic1.png";
import "../components/waves.css"
import Ocean from "../components/Ocean";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const worldRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const worldElement = worldRef.current;

    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    gsap.to(worldElement, {
      scrollTrigger: {
        trigger: ".next-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
      x: "-30vw",
      y: "70vw",
      ease: "power2.out",
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black h-fit relative xl:p-0">
      <div className="text-black z-20 lg:h-[80%] xl:h-[100vh] relative">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-white font-bold text-[90px] font-keania">
            MICROPLASTICS
          </h1>
          <img
            ref={worldRef}
            src={World}
            alt="World"
            className=" xl:w-[435px] h-auto absolute lg:top-[85px]"
          />

          
        </div>

        <div
          className="absolute left-24 top-50 p-4 py-6 rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white"
          style={{
            boxShadow:
              "0px 0px 175.5799560546875px 0 #680783, 0px 0px 271.760009765625px 0 #680783, 0px 0px 231.8599853515625px 0 #680783, 0px 0px 65.92999267578125px 0 #680783, 0px 0px 20.97999954223633px 0 #680783, 0px 0px 7.989999771118164px 0 #680783",
          }}
        >
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2 font-keania">
            400 Million Tons
          </p>
          <p className="text-right text-3xl">/ year</p>
        </div>

        <div className="absolute left-36 top-[350px] p-4 py-6 rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white"
          style={{
            boxShadow:
              "0px 0px 3px 0 #680783, 0px 0px 2px 0 #680783, 0px 0px 3px 0 #680783, 0px 0px 19px 0 #680783, 0px 0px 30px 0 #680783, 0px 0px 27.989999771118164px 0 #680783",
          }}
        >
          <h2 className="text-xl font-quick">PLASTIC RECYCLED: <span className="font-keania text-[30px] text-green-400">9%</span> </h2>
        <h2 className="text-xl my-4 font-quick">PLASTIC BURNT: <span className="font-keania text-[30px] text-red-400">12%</span> </h2>
        </div>
        
        <div className="absolute right-24 top-[140px] p-4 w-[300px] py-6 h-auto  rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white"
          style={{
            boxShadow:
              "0px 0px 175.5799560546875px 0 #680783, 0px 0px 271.760009765625px 0 #680783, 0px 0px 231.8599853515625px 0 #680783, 0px 0px 65.92999267578125px 0 #680783, 0px 0px 20.97999954223633px 0 #680783, 0px 0px 7.989999771118164px 0 #680783",
          }}
        >
          <h2 className="text-xl text-center font-quick">
            DEPRICIATED MARINE ECOSYSTEM VALUE
          </h2>
          <p className="text-3xl text-center my-2 font-keania text-yellow-200">$400 Million</p>
          <p className="text-3xl text-center my-2 font-keania">To</p>
          <p className="text-3xl text-center my-2 font-keania text-yellow-200">$2500 Million</p>
        </div>
        
        <div className="absolute right-24 top-[400px] pt-4 w-[300px] py-6 h-auto rounded-xl text-white bg-transparent ">
          <h2 className="text-2xl pb-4 text-center font-quick">SCROLL DOWN</h2>
          <div className="text-center items-center justify-center flex ">
          <IoIosArrowDropdown size={50} className="animate-bounce" />
          </div>
        </div>
      </div>

      <div className=" items-center justify-center h-auto grid grid-cols-2">
      {/* <img src={Plastic1} className="w-44" alt="" />  */}
      {/* The next section to trigger the image movement */}
      <div className="next-section flex items-center justify-center h-screen px-20  text-white col-span-1">
      {/* <div className="absolute top-10">

      
      </div> */}
        </div>
        <div className="w-[80%] ml-12 col-span-1">
          <h2 className="text-[45px] text-white font-nohemi_sb mb-4">WHAT ARE THEY?</h2>
          <p className="text-lg text-white leading-relaxed font-nohemi_r">
            Microplastics are small plastic particles less than 5mm in size, 
            which are pervasive in our environment. They come from a variety 
            of sources, including the breakdown of larger plastic debris, 
            microbeads in personal care products, and synthetic fibers from 
            textiles. These tiny particles pose significant risks to marine 
            ecosystems, as they are ingested by marine organisms and can 
            cause physical harm, chemical contamination, and even enter 
            the human food chain.
          </p>
          
        </div>
        </div>

        <div class="container2">
  <section className="new-sec">
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
    <div className="wave wave4"></div>
  </section>
  <div className="wdiv  px-28">
    <Ocean />
  </div>
</div>


    </div>
  );
};

export default Home;
