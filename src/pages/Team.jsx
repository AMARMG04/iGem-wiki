import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "../components/Hero";
import Mentors from "../components/Mentors";
import LinkedIn from "../assets/image.png";
import Aos from "aos";
import "aos/dist/aos.css";

const team_members = [
  {
    name: "Lucy",
    role: "Dry Lab Lead",
    image: "/src/assets/signe.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
  {
    name: "Lucy",
    role: "Dry Lab Lead",
    image: "/src/assets/signe.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
  {
    name: "Lucy",
    role: "Dry Lab Lead",
    image: "/src/assets/signe.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
  {
    name: "Lucy",
    role: "Dry Lab Lead",
    image: "/src/assets/signe.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    Aos.init({
      duration: 1200, // Customize animation duration (in milliseconds)
      once: true, // Whether animation should happen only once
    });
  }, []);

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
      <div className="">
        <Hero />
      </div>
      <section className="scroll-section-outer relative  ">
        {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner pt-14 ">
            {team_members.map((member, index) => (
              <div
                className=" h-[100vh] w-[100vw] flex justify-center items-center"
                key={index}
              >
                <div className="w-full mt-5 pt-11 " data-aos="zoom-out">
                  {/* <h2 className="text-[84px] mx-10 mt-8 mb-3 font-semibold">{member.name}</h2> */}
                  <div className="z-10 bg-gray-900 absolute p-4 md:w-[550px] md:h-[280px] lg:w-[800px] lg:h-[400px] lg:mx-10 rounded-3xl">
                    <h2 className="text-[54px] mb-3 font-semibold text-white">
                      {member.name}
                    </h2>
                    <div className="flex">
                      <h3 className="text-white font-medium mb-4">
                        {member.role} |
                      </h3>
                      <a
                        href="hhttps://www.linkedin.com/"
                        className=" flex items-center justify-center text-white pb-4"
                      >
                        <img src={LinkedIn} className="w-4 mx-2" alt="" />
                        LinkedIn
                      </a>
                    </div>
                    <p className="text-white">{member.description}</p>
                  </div>
                  <div className="relative left-7 flex justify-end z-0">
                    <img
                      src={member.image}
                      alt="Image"
                      className="lg:w-[650px] "
                    />
                  </div>
                </div>
              </div>
            ))}

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

