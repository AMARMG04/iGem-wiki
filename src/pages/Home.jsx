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
import Micros from "../assets/micros.png";
import "../components/waves.css";
import Ocean from "../components/Ocean";
import Food from "../components/Food";

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
    height: 100px; /* Increased height */
    width: 30px;
    -webkit-transform: rotate(180deg);
    top: -200px; /* Adjusted position */
    left: 15px;
}
.ray2 {
    height: 130px; /* Increased height */
    width: 8px;
    -webkit-transform: rotate(220deg);
    top: -120px; /* Adjusted position */
    left: 75px;
}
.ray3 {
    height: 200px; /* Increased height */
    width: 50px;
    -webkit-transform: rotate(250deg);
    top: -110px; /* Adjusted position */
    left: 100px;
}
.ray4 {
    height: 150px; /* Increased height */
    width: 14px;
    -webkit-transform: rotate(305deg);
    top: 20px; /* Adjusted position */
    left: 100px;
}
.ray5 {
    height: 170px; /* Increased height */
    width: 30px;
    -webkit-transform: rotate(-15deg);
    top: 50px; /* Adjusted position */
    left: 40px;
}
.ray6 {
    height: 120px; /* Increased height */
    width: 50px;
    -webkit-transform: rotate(30deg);
    top: 50px; /* Adjusted position */
    left: -40px;
}
.ray7 {
    height: 210px; /* Increased height */
    width: 10px;
    -webkit-transform: rotate(70deg);
    top: -60px; /* Adjusted position */
    left: -40px;
}
.ray8 {
    height: 150px; /* Increased height */
    width: 30px;
    -webkit-transform: rotate(100deg);
    top: -70px; /* Adjusted position */
    left: -90px;
}
.ray9 {
    height: 110px; /* Increased height */
    width: 10px;
    -webkit-transform: rotate(120deg);
    top: -90px; /* Adjusted position */
    left: -60px;
}
.ray10 {
    height: 220px; /* Increased height */
    width: 23px;
    -webkit-transform: rotate(150deg);
    top: -215px; /* Adjusted position */
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
  const microsRef = useRef([]);

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
          trigger: ".reach", // Ocean component's parent container
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        y: "50vh", // Adjust the y value to move plastics down
        ease: "power2.out",
        opacity: 0,
      });
    });

    microsRef.current.forEach((micro) => {
      gsap.to(micro, {
         opacity: 1 ,
        scrollTrigger: {
          
          trigger: ".reach", // Ocean component's parent container
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        // Adjust the y value to move plastics down
        ease: "power2.out",
       
      });
    });

    microsRef.current.forEach((micro, index) => {
      gsap.to(micro, {
        
        scrollTrigger: {
          
          trigger: ".wdiv", // Ocean component's parent container
          start: "top bottom",
          end: ".pimg",
          scrub: 30,
        },
        // Adjust the y value to move plastics down
        
        y:"200vh",
        x:`${index * 3}vw`,
        ease: "power2.out",
       
      });

    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black h-fit xl:mt-4 overflow-hidden">
      <div className="text-black z-20 lg:h-[80%] xl:h-[100vh] relative">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-white font-bold lg:text-[75px] xl:text-[100px] font-keania" data-aos="fade-up"
     data-aos-duration="2000">
            PLASTICOPS
          </h1>
          {/* <NewHome /> */}
         
          <div className="absolute lg:top-[0px] xl:top-[100px]">
            <img src={World} alt="World" className="lg:w-[390px] xl:w-[495px] h-auto" />
            <div ref={worldRef}>
            <div className=" animate-float">

              <img
                src={Plastic3}
                alt=""
                className="absolute left-0 bottom-[45px] w-32 animate-float"
                ref={(el) => (plasticsRef.current[1] = el)}
              />
              <div className='micros z-0 opacity-0 rounded-full absolute left-10 bottom-[40px]  bg-blue-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[1] = el)} ></div>
              <div className='micros z-0 opacity-0 rounded-full absolute left-20 bottom-[60px]  bg-red-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[2] = el)}></div>
              <div className='micros z-0 opacity-0 rounded-full absolute left-50 bottom-[80px]  bg-yellow-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[3] = el)}></div>
              <div className='micros z-0 opacity-0 rounded-full absolute left-[40px] bottom-[120px]  bg-green-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[4] = el)} ></div>



            </div>


           <div className=" animate-float">
              <img
                src={Plastic3}
                alt=""
                className="absolute right-[-40px] bottom-[300px] w-32 animate-float"
                ref={(el) => (plasticsRef.current[2] = el)}
              />
              <div className='micros opacity-0 rounded-full absolute right-[-40px] bottom-[300px] bg-yellow-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[5] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[-20px] bottom-[350px] bg-green-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[6] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[0px] bottom-[300px] bg-red-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[7] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[10px] bottom-[350px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[8] = el)} ></div>



            </div>
            <div className=" animate-float">
              <img
                src={Plastic1}
                alt=""
                className="absolute left-[-85px] bottom-[300px] w-[210px] animate-float"
                ref={(el) => (plasticsRef.current[3] = el)}
              />
              <div className='micros opacity-0 rounded-full absolute left-[-40px] bottom-[300px] bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[9] = el)}  ></div>
              <div className='micros opacity-0 rounded-full absolute left-[-20px] bottom-[350px] bg-green-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[10] = el)}  ></div>
              <div className='micros opacity-0 rounded-full absolute left-[0px] bottom-[300px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[11] = el)}  ></div>
              <div className='micros opacity-0 rounded-full absolute left-[10px] bottom-[350px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[12] = el)}  ></div>



            </div>

            <div className=" animate-float">
              <img
                src={Plastic2}
                alt=""
                className="absolute right-[-40px] bottom-[80px] w-[180px] animate-float"
                ref={(el) => (plasticsRef.current[4] = el)}
              />
              <div className='micros opacity-0 rounded-full absolute right-[-10px] bottom-[140px] bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[13] = el)}  ></div>
              <div className='micros opacity-0 rounded-full absolute right-[40px] bottom-[60px] bg-green-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[14] = el)}  ></div>
              <div className='micros opacity-0 rounded-full absolute right-[-20px] bottom-[80px] bg-red-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[15] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[40px] bottom-[120px] bg-blue-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[16] = el)}  ></div>

            </div>

            <div className=" animate-float">
              <img
                src={Plastic1}
                alt=""
                className="absolute right-[120px] bottom-[-70px] w-[200px] animate-float"
                ref={(el) => (plasticsRef.current[5] = el)}
              />
              <div className='micros opacity-0 rounded-full absolute right-[190px] bottom-[40px] bg-yellow-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[17] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[240px] bottom-[20px] bg-green-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[18] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[190px] bottom-[-20px] bg-red-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[19] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[230px] bottom-[-40px] bg-blue-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[20] = el)}  ></div>
            </div>


            <div className=" animate-float">
              <img
                src={Plastic2}
                alt=""
                className="absolute right-[160px] bottom-[400px] w-[160px] animate-float"
                ref={(el) => (plasticsRef.current[6] = el)}
              />
              <div className='micros opacity-0 rounded-full absolute right-[190px] bottom-[400px] bg-yellow-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[21] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[180px] bottom-[450px] bg-green-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[22] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[240px] bottom-[430px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[23] = el)} ></div>
              <div className='micros opacity-0 rounded-full absolute right-[220px] bottom-[490px] bg-red-600 w-[9px] h-[15px]'  ref={(el) => (microsRef.current[24] = el)} ></div>
            </div>
 

        
{/* 
            
            

            <div className="absolute right-[-30px] top-[380px] animate-float ">
              <img
                src={Plastic1}
                alt=""
                className="w-52 animate-float"
                ref={(el) => (plasticsRef.current[5] = el)}
              />
              <div className='rounded-full bg-red-600 w-[9px] h-[15px]' ></div>

            </div> */}
          </div>
          </div>  
        </div>

        {/* Info Boxes and Scroll Down Section */}
        <div className="absolute left-24 top-50 p-4 py-6 rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white" style={{
          boxShadow: "0px 0px 175.5799560546875px 0 #680783, 0px 0px 271.760009765625px 0 #680783, 0px 0px 231.8599853515625px 0 #680783, 0px 0px 65.92999267578125px 0 #680783, 0px 0px 20.97999954223633px 0 #680783, 0px 0px 7.989999771118164px 0 #680783",
        }} data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"data-aos-duration="2000"  >
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2 font-keania">400 Million Tons</p>
          <p className="text-right text-3xl">/ year</p>
        </div>

        <div className=" absolute left-36 xl:left-40 top-[350px] xl:top-[390px] p-4 py-6 rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white" style={{
          boxShadow: "0px 0px 3px 0 #680783, 0px 0px 2px 0 #680783, 0px 0px 3px 0 #680783, 0px 0px 19px 0 #680783, 0px 0px 30px 0 #680783, 0px 0px 27.989999771118164px 0 #680783",
        }} data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" data-aos-duration="2000">
          <h2 className="text-xl font-quick">PLASTIC RECYCLED: <span className="font-keania text-[30px] text-green-400">9%</span></h2>
          <h2 className="text-xl my-4 font-quick">PLASTIC BURNT: <span className="font-keania text-[30px] text-red-400">12%</span></h2>
        </div>

        <div className=" absolute right-24 top-[140px] p-4 w-[300px] py-6 h-auto rounded-[13px] bg-violet-800 border-2 border-[#9d57f7]/[0.47] text-white" style={{
          boxShadow: "0px 0px 175.5799560546875px 0 #680783, 0px 0px 271.760009765625px 0 #680783, 0px 0px 231.8599853515625px 0 #680783, 0px 0px 65.92999267578125px 0 #680783, 0px 0px 20.97999954223633px 0 #680783, 0px 0px 7.989999771118164px 0 #680783",
        }} data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" data-aos-duration="2000">
          <h2 className="text-xl text-center font-quick">DEPRICIATED MARINE ECOSYSTEM VALUE</h2>
          <p className="text-3xl text-center my-2 font-keania text-orange-200">$400 Million</p>
          <p className="text-3xl text-center my-2 font-keania">To</p>
          <p className="text-3xl text-center my-2 font-keania text-orange-200">$2500 Million</p>
        </div>

        <div className="absolute right-24 top-[400px] pt-4 xl:pt-10 w-[300px] py-6 h-auto rounded-xl text-white bg-transparent" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="text-2xl pb-4 text-center font-quick">SCROLL DOWN</h2>
          <div className="text-center items-center justify-center flex">
            <IoIosArrowDropdown size={50} className="animate-bounce" />
          </div>
        </div>
      </div>

      {/* New Section and Ocean Component */}
      <section className=" new-section relative">

        <div className="items-center justify-center h-auto grid grid-cols-2">
          <div>
        <img src={Micros} alt="" className="absolute top-[280px] left-[210px] lg:w-[270px] xl:w-[320px]" />

          <div className="next-section flex items-center justify-center h-screen px-20 text-white">
          
          </div>
          </div>
          <div className="w-[80%] reach col-span-1">
            <style>{glowStyle}</style>
            <div className="rounded-full w-[170px] h-[170px] absolute top-4 right-[650px] bg-white glow">
              <div className="sun">
                <div className="ray_box">
                  <div className="ray ray1"></div>
                  <div className="ray ray2"></div>
                  <div className="ray ray3"></div>
                  <div className="ray ray4"></div>
                  <div className="ray ray5"></div>
                  <div className="ray ray6"></div>
                  <div className="ray ray7"></div>
                  <div className="ray ray8"></div>
                  <div className="ray ray9"></div>
                  <div className="ray ray10"></div>
                </div>
              </div>
            </div>


            <h2 className="text-[45px] ml-12 text-white font-nohemi_sb mb-4">WHAT ARE THEY?</h2>
            {/* <img src={Micros} alt="" className="z-100 w-96" /> */}

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
          <div className="wdiv  px-28">
            <Ocean />

          </div>
        </div>
      </section>
      {/* <div className="bg-white">
        <video src=""></video>
      </div> */}
    <Food />
    </div>
  );
};

export default Home;
