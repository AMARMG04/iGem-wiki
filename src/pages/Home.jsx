import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import World from "../assets/world.png";
import { IoIosArrowDropdown } from "react-icons/io";
import Plastic1 from "../assets/plastic1.png";
import Plastic2 from "../assets/plastic2.png";
import Plastic3 from "../assets/plastic3.png";
import Plastic4 from "../assets/plastic4.png";
import "../components/waves.css";
import Ocean from "../components/Ocean";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const glowStyle = `




body {
  background:#2EB5E5 ;
}

.sun { 
  position: absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	margin: auto;  
	width:70px;
	height:70px;
	border-radius:50%;	
	background:white;
	opacity:0.9;			
	box-shadow: 0px 0px 40px 15px white;  
}

.ray_box {
  position: absolute;
  margin: auto;
	top:0px;
	left:0;
	right:0;
	bottom:0;	
  width:70px;  
  -webkit-animation: ray_anim 120s linear infinite;
  animation: ray_anim 120s linear infinite;
}
.ray {  
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
		background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%); 
    margin-left:10px;
    border-radius:80% 80% 0 0;
    position:absolute;
    opacity:0.1;
}

.ray1 {    
    height:170px;
    width:30px;
   -webkit-transform: rotate(180deg);
    top:-175px;
    left: 15px;
}
.ray2 {
    height:100px;
    width:8px;
   -webkit-transform: rotate(220deg);
    top:-90px;
    left: 75px;
}
.ray3 {
    height:170px;
    width:50px;
   -webkit-transform: rotate(250deg);
    top:-80px;
    left: 100px;
}
.ray4 {
    height:120px;
    width:14px;
   -webkit-transform: rotate(305deg);
    top:30px;
    left: 100px;
}
.ray5 {
    height:140px;
    width:30px;
   -webkit-transform: rotate(-15deg);
    top:60px;
    left: 40px;
}
.ray6 {
    height:90px;
    width:50px;
   -webkit-transform: rotate(30deg);
    top:60px;
    left: -40px;
}
.ray7 {
    height:180px;
    width:10px;
   -webkit-transform: rotate(70deg);
    top:-35px;
    left: -40px;
}
.ray8 {
    height:120px;
    width:30px;
   -webkit-transform: rotate(100deg);
    top:-45px;
    left:-90px;
}
.ray9 {
    height:80px;
    width:10px;
   -webkit-transform: rotate(120deg);
    top:-65px;
    left:-60px;
}
.ray10 {
    height:190px;
    width:23px;
   -webkit-transform: rotate(150deg);
    top:-185px;
    left: -60px;
}


@-webkit-keyframes ray_anim { 
		0% { -webkit-transform: rotate(0deg); transform: rotate(0deg);}    
    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg);}
}

  .glow {
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      box-shadow: 0 0 20px #fff, 0 0 40px #fff, 0 0 60px orange, 0 0 80px orange , 0 0 100px orange, 0 0 120px orange , 0 0 140px orange;
    }
    to {
      box-shadow: 0 0 40px #fff, 0 0 60px orange , 0 0 80px orange, 0 0 100px orange , 0 0 120px orange, 0 0 140px orange , 0 0 160px orange;
    }
  }

`;
  const worldRef = useRef(null);
  const plasticsRef = useRef([]);
  const lenisRef = useRef(null);

  useEffect(() => {
    const worldElement = worldRef.current;

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    // GSAP animation for the world image
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

    // GSAP animations for plastic images
    plasticsRef.current.forEach((plastic) => {
      gsap.to(plastic, {
        scrollTrigger: {
          trigger: ".container2", // Ocean component's parent container
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        y: "50vh", // Adjust the y value to move plastics down
        ease: "power2.out",
        opacity: 1,
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black h-fit relative xl:mt-4">
      <div className="text-black z-20 lg:h-[80%] xl:h-[100vh] relative">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-white font-bold text-[100px] font-keania">
            MICROPLASTICS
          </h1>
          <div className="absolute lg:top-[85px] xl:top-[100px]" ref={worldRef}>
            <img src={World} alt="World" className="xl:w-[495px] h-auto" />
            <img
              src={Plastic4}
              alt=""
              className="absolute right-0 bottom-[0px] w-36 animate-float"
              ref={(el) => (plasticsRef.current[0] = el)}
            />
            <img
              src={Plastic2}
              alt=""
              className="absolute left-0 bottom-[0px] w-44 animate-float"
              ref={(el) => (plasticsRef.current[1] = el)}
            />
            <img
              src={Plastic3}
              alt=""
              className="absolute right-[-40px] bottom-[300px] w-32 animate-float"
              ref={(el) => (plasticsRef.current[2] = el)}
            />
            <img
              src={Plastic2}
              alt=""
              className="absolute left-0 top-[0px] w-44 animate-float"
              ref={(el) => (plasticsRef.current[3] = el)}
            />
            <img
              src={Plastic1}
              alt=""
              className="absolute left-[-90px] top-[150px] w-52 animate-float"
              ref={(el) => (plasticsRef.current[4] = el)}
            />
            <img
              src={Plastic1}
              alt=""
              className="absolute right-[50px] top-[-30px] w-52 animate-float"
              ref={(el) => (plasticsRef.current[5] = el)}
            />
          </div>
        </div>

        {/* Info Boxes and Scroll Down Section */}
        <div className="absolute left-24 top-50 p-4 py-6 rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white" style={{
          boxShadow: "0px 0px 175.5799560546875px 0 #680783, 0px 0px 271.760009765625px 0 #680783, 0px 0px 231.8599853515625px 0 #680783, 0px 0px 65.92999267578125px 0 #680783, 0px 0px 20.97999954223633px 0 #680783, 0px 0px 7.989999771118164px 0 #680783",
        }}>
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2 font-keania">400 Million Tons</p>
          <p className="text-right text-3xl">/ year</p>
        </div>

        <div className="absolute left-36 xl:left-40 top-[350px] xl:top-[390px] p-4 py-6 rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white" style={{
          boxShadow: "0px 0px 3px 0 #680783, 0px 0px 2px 0 #680783, 0px 0px 3px 0 #680783, 0px 0px 19px 0 #680783, 0px 0px 30px 0 #680783, 0px 0px 27.989999771118164px 0 #680783",
        }}>
          <h2 className="text-xl font-quick">PLASTIC RECYCLED: <span className="font-keania text-[30px] text-green-400">9%</span></h2>
          <h2 className="text-xl my-4 font-quick">PLASTIC BURNT: <span className="font-keania text-[30px] text-red-400">12%</span></h2>
        </div>

        <div className="absolute right-24 top-[140px] p-4 w-[300px] py-6 h-auto rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white" style={{
          boxShadow: "0px 0px 175.5799560546875px 0 #680783, 0px 0px 271.760009765625px 0 #680783, 0px 0px 231.8599853515625px 0 #680783, 0px 0px 65.92999267578125px 0 #680783, 0px 0px 20.97999954223633px 0 #680783, 0px 0px 7.989999771118164px 0 #680783",
        }}>
          <h2 className="text-xl text-center font-quick">DEPRICIATED MARINE ECOSYSTEM VALUE</h2>
          <p className="text-3xl text-center my-2 font-keania text-orange-200">$400 Million</p>
          <p className="text-3xl text-center my-2 font-keania">To</p>
          <p className="text-3xl text-center my-2 font-keania text-orange-200">$2500 Million</p>
        </div>

        <div className="absolute right-24 top-[400px] pt-4 xl:pt-10 w-[300px] py-6 h-auto rounded-xl text-white bg-transparent">
          <h2 className="text-2xl pb-4 text-center font-quick">SCROLL DOWN</h2>
          <div className="text-center items-center justify-center flex">
            <IoIosArrowDropdown size={50} className="animate-bounce" />
          </div>
        </div>
      </div>

      {/* New Section and Ocean Component */}
      <section className="new-section relative">
        <div className="items-center justify-center h-auto grid grid-cols-2">
          <div className="next-section flex items-center justify-center h-screen px-20 text-white col-span-1">
          </div>
          <div className="w-[80%]  col-span-1">
            <style>{glowStyle}</style>
<div className="rounded-full w-[170px] h-[170px] absolute top-12 right-32 bg-white glow">
<div class="sun">
    <div class="ray_box">
        <div class="ray ray1"></div>
        <div class="ray ray2"></div>
        <div class="ray ray3"></div>
        <div class="ray ray4"></div>
        <div class="ray ray5"></div>
        <div class="ray ray6"></div>
        <div class="ray ray7"></div>
        <div class="ray ray8"></div>
        <div class="ray ray9"></div>
        <div class="ray ray10"></div>
    </div>
</div>
</div>


            <h2 className="text-[45px] ml-12 text-white font-nohemi_sb mb-4">WHAT ARE THEY?</h2>
            <p className="text-lg text-white leading-relaxed font-nohemi_r">
              Microplastics are small plastic particles less than 5mm in size, which are pervasive in our environment. They come from a variety of sources, including the breakdown of larger plastic debris, microbeads in personal care products, and synthetic fibers from textiles. These tiny particles pose significant risks to marine ecosystems, as they are ingested by marine organisms and can cause physical harm, chemical contamination, and even enter the human food chain.
            </p>
          </div>
        </div>

        <div className="container2">
          <section className="new-sec">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
          </section>
          <div className="wdiv px-28">
            <Ocean />
            
          </div>
        </div>
      </section>
      {/* <div className="bg-white">
        <video src=""></video>
      </div> */}
    </div>
  );
};

export default Home;
