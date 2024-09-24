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
      <NewBanner title="Parts Collection" color="customCream" />
      <div className="p-10 font-general bg-white">
        <div className="flex flex-row gap-4 ">
          {/* Table of Contents */}
          <div className="min-w-[300px]">
            <div className="table-contents h-[700px] p-4 rounded-lg sticky top-44">
              <h2 className="text-3xl font-nohemi_m my-4">
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
          <div className="w-full p-4">
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
                <h2 className="font-inter font-medium text-justify text-lg leading-loose">
                  iGEM Team REC-CHENNAI aims to combat the highly pollutive
                  microplastic threat by employing innovative approaches in the
                  field of synthetic biology. The novel basic part that we
                  design carries peptide sequences that are targeted towards
                  highly specific binding with hydrophobic polymers such as
                  polyethylene, polypropylene, and polystyrene, which form the
                  majority of the microplastics present. These chosen peptides
                  are hydrophobic in nature and therefore carry an affinity for
                  these microplastics due to their hydrophobic nature as well.
                  We further equip this fusion protein with a 6X His tag for
                  efficient purification with the Ni-NTA affinity column. <br /><br />
                  Molecular dynamics simulations, in conjunction with
                  experiments through in vitro has established that the moieties
                  work as designed, allowing easy purification of peptides and
                  effective binding to microplastics. It presents an easily
                  scalable, effective solution to environmental conservation in
                  areas such as wastewater treatment, marine niche, and food
                  industry. This approach also contributes to the conservation
                  of flora and fauna by reducing the adverse impacts of
                  microplastic pollution toward the ecosystem and food chains.
                  <br /><br />
                  In the part collection, there are genetic constructs that
                  create microplastic-binding peptides, placing special emphasis
                  on sustainable and scalable solutions for environmental
                  conservation across multiple domains.
                </h2>
               
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
                <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">{item.part}</td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">{item.new}</td>
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
                            Name
                          </th>
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
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Length
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Notes
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
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.length}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800 text-wrap leading-loose text-justify">
                              {item.notes}
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
                            Name
                          </th>
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
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Length
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black uppercase"
                          >
                            Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 font-regular font-inter">
                        {contents.map((item, index) => (
                          <tr
                            key={index}
                            id={item.part}
                            className="divide-x"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                              {item.length}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800 text-wrap leading-loose text-justify">
                              {item.notes}
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
