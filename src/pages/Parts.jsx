import React from "react";
import { contents, links } from "../data/table";
import Banner from "../components/Banner"

const Parts = () => {
  return (
    <>
      <Banner title="Parts Overview" />
      <div className="p-11 font-general bg-customCream">
        <div className="grid grid-cols-3 gap-4 ">
          {/* Table of Contents */}
          <div className="col-span-1">
            <div className="table-contents h-[700px] shadow-[0_5px_60px_-23px_rgba(0,0,0,0.3)]  p-4 rounded-lg  sticky top-44">
              <h2 className="text-[30px] font-bold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {links.map((item, index) => (
                  <li
                    key={index}
                    className="text-[20px] text-black font-medium"
                  >
                    <a href={`#${item.href}`} className="hover:text-blue-500">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Table */}
          <div className="col-span-2 shadow-[0_5px_60px_-23px_rgba(0,0,0,0.3)] border p-6 rounded-lg">
            <div className="mb-10  flex flex-col" id="table1">
              <div>
                <h1 className="my-2 font-bold text-[35px]">Parts Collection</h1>
              </div>

              <div>
                <h2>
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
                <ol className="mt-3 list-disc ml-5">
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

            <div className=" mb-10 flex flex-col" id="table2">
              <div>
                <h1 className="my-2 font-bold text-[35px]">Basic Parts</h1>
              </div>

              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Part Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            New/existing
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {contents.map((item) => (
                          <tr
                            key={item.part}
                            id={item.part}
                            className="divide-x"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
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

            <div className=" mb-10 flex flex-col" id="table3">
              <div>
                <h1 className="my-2 font-bold text-[35px]">Composite Parts</h1>
              </div>
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Part Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs  text-black font-bold uppercase"
                          >
                            New/existing
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {contents.map((item) => (
                          <tr
                            key={item.part}
                            id={item.part}
                            className="divide-x"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
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
    </>
  );
};

export default Parts;
