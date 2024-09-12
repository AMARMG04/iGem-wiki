import React, { useState, useEffect, useRef } from "react";
import { contents, links } from "../data/table";
import NewBanner from "../components/NewBanner";
import Navbar from "../components/Navbar";

const Parts = () => {
  const [activeLink, setActiveLink] = useState("");
  const sectionsRef = useRef({});

  const handleScroll = (id) => {
    setActiveLink(id);
    const target = document.getElementById(id);
    if (target) {
      // Scroll with offset for the sticky navbar
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 200; // Adjust offset
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveLink(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this to trigger when 50% of the section is in view
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
    <div className="bg-customCream">
       <Navbar></Navbar>
       <NewBanner title="Mentors" color="customCream" />
      <div className="p-10 font-general bg-white">
        <div className="flex flex-row gap-4 ">
          {/* Table of Contents */}
          <div className="min-w-[300px]">
            <div className="table-contents h-[700px] p-4 rounded-lg sticky top-44">
              <h2 className="text-[30px] font-nohemi_m mb-4">
                Table of Contents
              </h2>
              <ul className="flex flex-col">
                {links.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center text-[20px] font-nohemi_r cursor-pointer h-14 ${
                      activeLink === item.href
                        ? "text-blue-500 border-l-2 border-blue-500 pl-5"
                        : " border-l-2 border-gray-500 text-black pl-5"
                    }`}
                  >
                    <a
                      onClick={() => handleScroll(item.href)}
                      className="hover:text-blue-500"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Table */}
          <div className="w-full p-10 rounded-sm">
            <div
              className="mb-10 flex flex-col"
              id="table1"
              ref={(el) => (sectionsRef.current["table1"] = el)}
            >
              <div>
                <h1 className="my-2 font-nohemi_m text-[35px]">
                  Parts Collection
                </h1>
              </div>

              <div>
                <h2 className="font-inter font-regular text-justify">
                  Vilnius-Lithuania iGEM 2023 team's goal is to employ synthetic
                  biology tools to modify naturally produced Komagataeibacter
                  xylinus bacterial cellulose polymer composition. Firstly, we
                  chose to produce a cellulose-chitin polymer that would later
                  be deacetylated, creating bacterial cellulose-chitosan (parts:
                  BBa_K4719013, BBa_K4719014, BBa_K4719019, BBa_K4719020). This
                  polymer is an easily modifiable platform (part: BBa_K4719024)
                  compared to bacterial cellulose, with biomedicine and
                  molecular biology applications. As a second approach, we
                  designed indigo-dyed cellulose that could be used as a green
                  chemistry way to apply cellulose in the textile industry
                  (part: BBa_K4719018). Lastly, we have achieved a bioplastic
                  composite of bacterial cellulose and polyhydroxybutyrate (PHB)
                  synthesized by K. xylinus (part: BBa_K4719017). We designed
                  parts to combine separate production steps to optimize the
                  polymers' manufacturing process. (Parts: BBa_K4719027,
                  BBa_K4719028). This collection is meant to be used for
                  obtaining a polymer of the user’s choice, whether that would
                  be bacterial cellulose-chitosan, bacterial cellulose-PHB, or
                  in situ dyed cellulose. What is more, by designing these
                  constructs, we demonstrated a collection of of synthetic
                  biology tools for K. xylinus, which could be applied to create
                  various combinations of biopolymer and bacterial cellulose
                  composites.
                </h2>
                <ol className="mt-3 list-disc ml-5 font-inter font-regular">
                  <li>
                    {" "}
                    <a href="" className="text-orange-800">
                      BBa_K4719013
                    </a>{" "}
                    - Incorporation of N-acetylglucosamine into bacterial
                    cellulose.
                  </li>
                  <li>
                    <a href="" className="text-orange-800">
                      BBa_K4719013
                    </a>{" "}
                    - Incorporation of N-acetylglucosamine into bacterial
                    cellulose.
                  </li>
                  <li>
                    <a href="" className="text-orange-800">
                      BBa_K4719013
                    </a>{" "}
                    - Incorporation of N-acetylglucosamine into bacterial
                    cellulose.
                  </li>
                  <li>
                    <a href="" className="text-orange-800">
                      BBa_K4719013
                    </a>{" "}
                    - Incorporation of N-acetylglucosamine into bacterial
                    cellulose.
                  </li>
                  <li>
                    <a href="" className="text-orange-800">
                      BBa_K4719013
                    </a>{" "}
                    - Incorporation of N-acetylglucosamine into bacterial
                    cellulose.
                  </li>
                  <li>
                    <a href="" className="text-orange-800">
                      BBa_K4719013
                    </a>{" "}
                    - Incorporation of N-acetylglucosamine into bacterial
                    cellulose.
                  </li>
                </ol>
              </div>

              {/* <div className='-m-1.5 overflow-x-auto'>
              <div className='p-1.5 min-w-full inline-block align-middle'>
              <div className='border rounded-lg shadow overflow-hidden'>
              <table className='min-w-full divide-y divide-gray-200'>
              <thead>
              <tr className='divide-x divide-gray-200'>
              <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Type</th>
              <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Part Number</th>
              <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Name</th>
              <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">Description</th>
              <th scope='col' className="px-6 py-3 text-center text-xs  text-black font-bold uppercase">New/existing</th>
              </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
              {contents.map((item) => (
                <tr key={item.part} id={item.part} className='divide-x'>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.part}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.new}</td>
                </tr>
                ))}
                </tbody>
                </table>
                
                
                
                </div>
                </div>
                </div> */}
            </div>

            <div
              className="mb-10 flex flex-col"
              id="table2"
              ref={(el) => (sectionsRef.current["table2"] = el)}
            >
              <div>
                <h1 className="my-2 font-nohemi_m text-[35px]">Basic Parts</h1>
              </div>

              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="font-nohemi_m">
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Part Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            New/existing
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 font-inter font-regular">
                        {contents.map((item) => (
                          <tr
                            key={item.part}
                            id={item.part}
                            className="divide-x"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.part}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.new}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mb-10 flex flex-col"
              id="table3"
              ref={(el) => (sectionsRef.current["table3"] = el)}
            >
              <div>
                <h1 className="my-2 font-nohemi_m text-[35px]">
                  Composite Parts
                </h1>
              </div>
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="font-nohemi_m">
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Part Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            New/existing
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 font-regular font-inter">
                        {contents.map((item) => (
                          <tr
                            key={item.part}
                            id={item.part}
                            className="divide-x"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.part}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.new}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;
