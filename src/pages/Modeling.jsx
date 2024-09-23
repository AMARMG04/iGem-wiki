import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { description } from "../data/description";
import { modeling } from "../data/modeling";
import NewBanner from "../components/NewBanner";
import MDSimulation from "../components/MDSimulation";

function renderWithBold(text) {
  const parts = text.split(/(\*\*[^**]+\*\*)/); // Split by **...**
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

const Modeling = () => {
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
    <div className="bg-customCream ">
      <Navbar />
      {/* <Banner title="Project Description" color="green" /> */}
      <div className="">
        <NewBanner title="Modelling" color="customCream" />
      </div>
      <div className=" p-10 flex flex-row gap-10 bg-white">
        <div className="p-4 min-w-[300px] h-fit sticky top-28">
          <h1 className="font-nohemi_m mb-4 text-3xl">Table of Contents</h1>
          <ul className="flex flex-col">
            {modeling.map((item, index) => (
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
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex flex-col gap-10 ">
          {/* Computational Modeling */}
          <div
            ref={(el) => (sectionsRef.current[`section-0`] = el)}
            id="section-0"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
              {modeling[0].title}
            </h1>
            <p className="font-inter font-medium text-justify text-lg">
              {modeling[0].content}
            </p>
          </div>

          {/* What are Microplastics? */}
          <div
            ref={(el) => (sectionsRef.current[`section-1`] = el)}
            id="section-1"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
              {modeling[1].title}
            </h1>
            <p className="font-inter font-medium text-justify text-lg">
              {modeling[1].content}
            </p>
          </div>

          <div class="flex flex-col gap-4 items-center">
            <div>
              <img
                src="/src/assets/image_5.png"
                alt="Coarse-Grained Peptide Structure"
                className="w-[600px] h-auto rounded-xl"
              />
              <p className="font-nohemi_r text-center my-4">MD Simulated Polystyrene</p>
            </div>

            <div>
              <img
                src="/src/assets/image_2.png"
                alt="Atomistic Peptide Structure"
                className="w-[600px] h-auto rounded-xl"
              />
              <p className="font-nohemi_r text-center my-4">Atomistic Structure of the Peptide KLWWMIRRW.pdb</p>
            </div>

            <div>
              <img
                src="/src/assets/image_3.png"
                alt="Coarse-Grained Peptide Structure"
                className="w-[600px] h-auto rounded-xl"
              />
              <p className="font-nohemi_r text-center my-4">Coarse Grained Structure of the KLWWMIRRW_cg.pdb</p>
            </div>

            <div>
              <img
                src="/src/assets/image_4.png"
                alt="Atomistic Peptide Structure"
                className="w-[600px] h-auto rounded-xl"
              />
              <p className="font-nohemi_r text-center my-4">Coarse Grained Structure of the KLWWMIRRW_cg.gro</p>
            </div>
          </div>

          {/* Why Focus on Isolation and Segregation of Microplastics? */}
          <div
            ref={(el) => (sectionsRef.current[`section-2`] = el)}
            id="section-2"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
              {modeling[2].title}
            </h1>
            <p className="font-inter font-medium text-justify text-lg">
              {modeling[2].content}
            </p>
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/src/assets/image_1.jpg"
              alt=""
              className="object-scale-down h-[1000px]"
            />
          </div>

          {/* Harmful Effects of Microplastics */}
          <div
            ref={(el) => (sectionsRef.current[`section-3`] = el)}
            id="section-3"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
              {modeling[3].title}
            </h1>
            <p className="font-inter font-medium text-justify text-lg">
              {modeling[3].content}
            </p>
          </div>

          <section class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              Modelling Microplastics
            </h2>
            <div class="overflow-x-auto">
              <table class="min-w-full border-collapse block md:table">
                <thead class="block md:table-header-group">
                  <tr class="border-b bg-gray-50 md:border-none block md:table-row">
                    <th class="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider block md:table-cell">
                      Characteristics
                    </th>
                    <th class="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider block md:table-cell">
                      PS
                    </th>
                    <th class="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider block md:table-cell">
                      PE
                    </th>
                    <th class="p-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider block md:table-cell">
                      PP
                    </th>
                  </tr>
                </thead>
                <tbody class="block md:table-row-group">
                  <tr class="border-b md:border-none block md:table-row">
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      Polymer Chain Length
                    </td>
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      50
                    </td>
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      160
                    </td>
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      100
                    </td>
                  </tr>
                  <tr class="border-b md:border-none block md:table-row">
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      Number of Chains
                    </td>
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      16
                    </td>
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      18
                    </td>
                    <td class="p-3 text-sm text-gray-600 block md:table-cell">
                      19
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What is the Ongoing Research on Microplastics? */}
          <div
            ref={(el) => (sectionsRef.current[`section-4`] = el)}
            id="section-4"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
              {modeling[4].title}
            </h1>
            <p className="font-inter font-medium text-justify text-lg">
              {modeling[4].content}
            </p>
            <MDSimulation></MDSimulation>
          </div>

          {/* What is Our Project? */}
          <div
            ref={(el) => (sectionsRef.current[`section-5`] = el)}
            id="section-5"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
              {modeling[5].title}
            </h1>
            <p className="font-inter font-medium text-justify text-lg">
              {modeling[5].content}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-8">
            <img
              src="/src/assets/graph_1.png"
              alt="Atomistic Peptide Structure"
            />
            <img
              src="/src/assets/graph_2.png"
              alt="Coarse-Grained Peptide Structure"
            />
            <img
              src="/src/assets/graph_3.png"
              alt="Atomistic Peptide Structure"
            />
            <img
              src="/src/assets/graph_5.png"
              alt="Coarse-Grained Peptide Structure"
            />
            <img
              src="/src/assets/graph_4.jpeg"
              alt="Atomistic Peptide Structure"
            />
          </div>

          {/* References */}
          <div
            ref={(el) => (sectionsRef.current[`section-7`] = el)}
            id="section-7"
            className="flex flex-col gap-4"
          >
            <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
              {description[7].title}
            </h1>
            <p className="font-inter font-medium text-justify text-lg">
              <ul className="flex flex-col gap-4 list-decimal pl-4">
                {description[7].links.map((ref, index) => (
                  <a href={ref.link} target="_blank">
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

export default Modeling;
