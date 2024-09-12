import React, { useState, useEffect, useRef } from "react";
import Banner from "../components/Banner";
import { description } from "../data/description";

const ProjectDescription = () => {
  const [activeLink, setActiveLink] = useState(""); // To track active section
  const sectionsRef = useRef({}); // To store references to each section

  const handleScroll = (id) => {
    setActiveLink(id);
    const target = document.getElementById(id);
    if (target) {
      // Scroll with an offset for the sticky navbar
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 200; // Adjust offset as needed
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveLink(sectionId); // Update active link based on section in view
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold for triggering
      }
    );

    // Observe each section
    Object.keys(sectionsRef.current).forEach((sectionId) => {
      const section = sectionsRef.current[sectionId];
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      Object.keys(sectionsRef.current).forEach((sectionId) => {
        const section = sectionsRef.current[sectionId];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="bg-white">
      <Banner title="Project Description" color="green" />
      <div className=" p-10 flex flex-row gap-10">
        <div className="p-4 min-w-[300px] h-fit sticky top-28">
          <h1 className="font-nohemi_m mb-4 text-3xl">Table of Contents</h1>
          <ul className="flex flex-col">
            {description.map((item, index) => (
              <li
                key={index}
                className={`flex items-center font-nohemi_r cursor-pointer py-4 ${
                  activeLink === `section-${index}`
                    ? "text-blue-500 border-l-2 border-blue-500 pl-5"
                    : "border-l-2 border-gray-500 text-black pl-5"
                }`}
              >
                <a
                  onClick={() => handleScroll(`section-${index}`)}
                  className="hover:text-blue-500 text-[20px]"
                >
                  {item.title}
                </a>

                {/* If content is an array of objects, display the subtitles */}
                {/* {Array.isArray(item.content) &&
                  item.content.map(
                    (subItem, subIndex) =>
                      subItem.subtitle && (
                        <a
                          key={subIndex}
                          onClick={() =>
                            handleScroll(`section-${index}-${subIndex}`)
                          }
                          className={`hover:text-blue-500 text-[18px] ${
                            activeLink === `section-${index}-${subIndex}`
                              ? "text-blue-500"
                              : "text-black"
                          }`}
                        >
                          {subItem.subtitle}
                        </a>
                      )
                  )} */}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex flex-col gap-10">
          {/* Plastic Pollution */}
          <div
            ref={(el) => (sectionsRef.current[`section-0`] = el)}
            id="section-0"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[0].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              {description[0].content}
            </p>
          </div>

          <div>
            <img src="/src/assets/description/image1.jpg" alt="" />
          </div>

          {/* What are Microplastics? */}
          <div
            ref={(el) => (sectionsRef.current[`section-1`] = el)}
            id="section-1"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[1].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              {description[1].content}
            </p>
          </div>

          <div>
            <img src="/src/assets/description/image2.jpeg" alt="" />
          </div>

          {/* Why Focus on Isolation and Segregation of Microplastics? */}
          <div
            ref={(el) => (sectionsRef.current[`section-2`] = el)}
            id="section-2"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[2].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              <ul className="flex flex-col gap-4 list-disc pl-4">
                {description[2].content.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </p>
          </div>

          {/* Harmful Effects of Microplastics */}
          <div
            ref={(el) => (sectionsRef.current[`section-3`] = el)}
            id="section-3"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[3].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              <ul className="flex flex-col gap-4">
                {description[3].content.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </p>
          </div>

          {/* What is the Ongoing Research on Microplastics? */}
          <div
            ref={(el) => (sectionsRef.current[`section-4`] = el)}
            id="section-4"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[4].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              {description[4].subcontent}
            </p>
            <p className="font-inter font-regular text-justify text-lg">
              <ul className="flex flex-col gap-4 list-disc pl-4">
                {description[4].content.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </p>
          </div>

          {/* What is Our Project? */}
          <div
            ref={(el) => (sectionsRef.current[`section-5`] = el)}
            id="section-5"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[5].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              <ul className="flex flex-col gap-4 list-decimal pl-4">
                {description[5].content.map((con, index) => (
                  <li key={index}>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl font-nohemi_m">{con.subtitle}</h1>
                      <ul className="flex flex-col gap-4 list-disc pl-4">
                        {con.subcontent.map((subcon, subIndex) => (
                          <li key={subIndex}>{subcon}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </p>
          </div>

          <div>
            <img src="/src/assets/description/image3.jpeg" alt="" />
          </div>

          {/* Applications */}
          <div
            ref={(el) => (sectionsRef.current[`section-6`] = el)}
            id="section-6"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[6].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              <ul className="flex flex-col gap-4 list-decimal pl-4">
                {description[6].content.map((con, index) => (
                  <li key={index}>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl font-nohemi_m">{con.subtitle}</h1>
                      <p>{con.subcontent}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </p>
          </div>
      
          <div>
            <img src="/src/assets/description/image5.jpeg" alt="" />
          </div>

          <div>
            <img src="/src/assets/description/image4.jpeg" alt="" />
          </div>

          {/* References */}
          <div
            ref={(el) => (sectionsRef.current[`section-7`] = el)}
            id="section-7"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl">{description[7].title}</h1>
            <p className="font-inter font-regular text-justify text-lg">
              <ul className="flex flex-col gap-4 list-decimal pl-4">
                {description[7].links.map((ref, index) => (
                  <a href={ref.link}>
                    <li className="hover:cursor-pointer" key={index}>
                      {ref.name}
                    </li>
                  </a>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
