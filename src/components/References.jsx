"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export default function References({references}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md">
      <button
        className="w-full font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6 flex justify-between items-center p-4 font-bold bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        References
        <ChevronDownIcon
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        } overflow-auto`}
      >
        <div className="">
          {references.map((ref, index) => (
            <a href={ref.link} target="_blank">
              <div
                key={index}
                className="border-b pb-4 p-4 space-y-4 hover:bg-indigo-700 hover:text-white"
              >
                <h3 className="font-nohemi_m text-2xl">{ref.title} {ref.year}</h3>
                <p className="text-md font-inter font-medium">
                  {ref.authors}
                </p>
                <div className="flex justify-between font-inter font-semibold">
                <p>{ref.volume !== "NA" ? `${ref.journal}, ${ref.volume}` : ref.journal}</p>
                {ref.page !== "NA" && <p>{ref.page}</p>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
