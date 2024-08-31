import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "../components/Hero";
import Mentors from "../components/Mentors";
const team_members = [
  {
    name: "Lucy",
    image: "/src/assets/signe.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
  {
    name: "Lucy",
    image: "/src/assets/signe.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
  {
    name: "Lucy",
    image: "/src/assets/signe.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
  {
    name: "Lucy",
    image: "/src/assets/signe.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <>
    <div className="" >
   <Hero />
    </div>
    <section className="scroll-section-outer relative  ">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner ">
          {
            team_members.map((member, index) => (
                <div className=" h-[100vh] w-[100vw] flex justify-center items-center" key={index}>
            <div className="w-full mt-5 pt-10">
              <h2 className="text-[84px] mx-10 mt-8">{member.name}</h2>
              <div className="z-10 bg-gray-900 absolute p-4 md:w-[550px] md:h-[280px] lg:w-[800px] lg:h-[400px] lg:mx-10 rounded-3xl">
                <p className="text-white">
                 {member.description}
                </p>
              </div>
              <div className="relative left-7 flex justify-end z-0">
                <img
                  src={member.image}
                  alt="Image"
                  className="lg:w-[600px]"
                />
              </div>
            </div>
          </div>
            ))
          }

{/* <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div> */}
        </div>
      </div>
    </section>
    <Mentors />
    </>
  );
}

export default ScrollSection;
