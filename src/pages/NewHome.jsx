import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import World from "../assets/world.png";
import { IoIosArrowDropdown } from "react-icons/io";
import Bg from "../assets/bgimg.jpg";
import Plastic1 from "../assets/plastic1.png";
import Plastic2 from "../assets/plastic2.png";
import Plastic3 from "../assets/plastic3.png";
import Micros from "../assets/micros.png";
import "../components/waves.css";
import Ocean from "../components/Ocean";
import Food from "../components/Food";
import NewNavbar from "../components/NewNavbar";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {


  const glowStyle = `
 .glow1 {
      animation: glowRed 1s ease-in-out infinite alternate;
    }

    @keyframes glowRed {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px red, 0 0 40px red, 0 0 50px red, 0 0 60px red, 0 0 70px red;
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px red, 0 0 40px red, 0 0 50px red, 0 0 60px red, 0 0 70px red, 0 0 80px red;
      }
    }

    .glow2 {
      animation: glowBlue 1s ease-in-out infinite alternate;
    }

    @keyframes glowBlue {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px blue, 0 0 40px blue, 0 0 50px blue, 0 0 60px blue, 0 0 70px blue;
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px blue, 0 0 40px blue, 0 0 50px blue, 0 0 60px blue, 0 0 70px blue, 0 0 80px blue;
      }
    }

.micros{
z-index: 1000;
}
body {
  background:#2EB5E5 ;
}
  .text-stroke {
  -webkit-text-stroke-width: 2px; /* The width of the stroke */
  -webkit-text-stroke-color: black; /* The color of the stroke */
  text-stroke-width: 2px; /* For compatibility with other browsers */
  text-stroke-color: black; /* For compatibility */
}

body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: black;        /* color of the tracking area */
}
  body::-webkit-scrollbar-thumb {
  background-color: blue;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 3px solid orange;  /* creates padding around scroll thumb */
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
        y: "65vh", // Adjust the y value to move plastics down
        ease: "power2.out",
        opacity: 0,
      });
    });

    microsRef.current.forEach((micro) => {
      gsap.to(micro, {
        opacity: 1,
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

        y: "200vh",
        x: `${index * 3}vw`,
        ease: "power2.out",

      });

    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <NewNavbar />
      {/* <div
        className="bg-bgimg h-screen bg-cover bg-center">
        <div className=" bg-black/60 h-screen">
          <div  >

            <h1 className="font-nohemi_m text-[110px] items-center text-white px-10 pt-[22%] "  data-aos="fade-right" data-aos-duration="2000">Microplastics</h1>
            <p className="font-nohemi_r text-[25px] w-[1000px] items-center text-white px-10"  data-aos="fade-right" data-aos-duration="2000">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, sit! Sed molestiae autem rerum quos, qui rem? Exercitationem, eos reiciendis. Consequatur quidem expedita veritatis perspiciatis, beatae assumenda porro inventore repellat.</p>
          </div>
        </div>
 
      </div> */}
      {/* <div className="h-screen flex items-center justify-center pt-[100px]">
<h1 className="font-nohemi_m text-[70px] text-center text-white" data-aos="fade-up"
     data-aos-duration="2000">“WE’RE LIVING ON THE EDGE WHERE PLASTICS POISON SOIL, WATER AND OUR LIVES.”<br /><h1 className="text-white font-nohemi_l text-[45px] text-end py-7 px-5">- A poor resident of Cooum river bank
</h1> </h1>
</div> */}
      {/* <div className="h-screen flex items-center justify-center">
  <style>{glowStyle}</style>
<h1 className="font-nohemi_sb text-[70px] text-center text-white" data-aos="fade-up"
     data-aos-duration="2000" ><h1 className="mb-10 text-[90px]">With us,</h1> <h1 className='text-center text-white font-bold text-[150px] font-keania'>
     <span className='glow1 font-nohemi_b'>PLAST</span><span className='glow2 font-nohemi_b'>ICOPS</span>
   </h1 > <h1 className="pt-10">We can turn this situation around </h1></h1>
     
</div> */}
      <div className="bg-black h-fit mt-[10%] overflow-hidden relative">
        <div className="text-black z-20 lg:h-[80%] xl:h-[100vh] ">

          <div className="flex justify-center items-center">

            {/* <NewHome /> */}



            {/* <div className="absolute left-[180px] top-[230px]">

<h1 className="text-start text-white text-[90px]  font-nohemi_sb" data-aos="fade-left"
     data-aos-duration="3000">Lets </h1>
</div> */}

            {/* <div className="absolute right-[180px] top-[230px]">
<h1 className="text-start text-white text-[90px] font-nohemi_sb" data-aos="fade-right"
     data-aos-duration="3000">Clean </h1>
</div> */}
            <div className="absolute lg:top-[0px] xl:top-[100px] world-div">
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
                  <div className='micros z-0 opacity-0 rounded-full absolute left-20 bottom-[60px]  bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[2] = el)}></div>
                  <div className='micros z-0 opacity-0 rounded-full absolute left-50 bottom-[80px]  bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[3] = el)}></div>
                  <div className='micros z-0 opacity-0 rounded-full absolute left-[40px] bottom-[120px]  bg-green-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[4] = el)} ></div>



                </div>


                <div className=" animate-float">
                  <img
                    src={Plastic3}
                    alt=""
                    className="absolute right-[-40px] bottom-[300px] w-32 animate-float"
                    ref={(el) => (plasticsRef.current[2] = el)}
                  />
                  <div className='micros opacity-0 rounded-full absolute right-[-40px] bottom-[300px] bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[5] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[-20px] bottom-[350px] bg-green-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[6] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[0px] bottom-[300px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[7] = el)} ></div>
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
                  <div className='micros opacity-0 rounded-full absolute right-[-20px] bottom-[80px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[15] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[40px] bottom-[120px] bg-blue-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[16] = el)}  ></div>

                </div>

                <div className=" animate-float">
                  <img
                    src={Plastic1}
                    alt=""
                    className="absolute right-[120px] bottom-[-70px] w-[200px] animate-float"
                    ref={(el) => (plasticsRef.current[5] = el)}
                  />
                  <div className='micros opacity-0 rounded-full absolute right-[190px] bottom-[40px] bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[17] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[240px] bottom-[20px] bg-green-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[18] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[190px] bottom-[-20px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[19] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[230px] bottom-[-40px] bg-blue-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[20] = el)}  ></div>
                </div>


                <div className=" animate-float">
                  <img
                    src={Plastic2}
                    alt=""
                    className="absolute right-[160px] bottom-[400px] w-[160px] animate-float"
                    ref={(el) => (plasticsRef.current[6] = el)}
                  />
                  <div className='micros opacity-0 rounded-full absolute right-[190px] bottom-[400px] bg-yellow-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[21] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[180px] bottom-[450px] bg-green-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[22] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[240px] bottom-[430px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[23] = el)} ></div>
                  <div className='micros opacity-0 rounded-full absolute right-[220px] bottom-[490px] bg-red-600 w-[9px] h-[15px]' ref={(el) => (microsRef.current[24] = el)} ></div>
                </div>

              </div>
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


              <h2 className="text-[45px] ml-12 text-white font-nohemi_sb mb-4" data-aos="fade-left" data-aos-duration="2000">WHAT ARE THEY?</h2>
              {/* <img src={Micros} alt="" className="z-100 w-96" /> */}

              <p className="text-lg text-white leading-relaxed font-nohemi_r" data-aos="fade-left" data-aos-duration="2000">
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
        <div >
          <Food />
        </div>
      </div>

    </div>
  );
};

export default Home;
