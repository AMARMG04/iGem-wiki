"use client";

import { useRef, useEffect } from "react";
import { Book, Pencil } from 'lucide-react';
import NewNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const schools = [
  {
    id: 1,
    name: "Greenwood Elementary",
    description: "A nurturing environment for young minds to grow and learn.",
    content: "Greenwood Elementary is known for its innovative STEM program and beautiful green campus. Our dedicated teachers focus on hands-on learning experiences, fostering curiosity and creativity in every student."
  },
  {
    id: 2,
    name: "Riverside High School",
    description: "Preparing students for success in college and beyond.",
    content: "Riverside High School offers a rigorous academic curriculum alongside a wide range of extracurricular activities."
  },
  {
    id: 3,
    name: "Sunnydale Middle School",
    description: "Bridging the gap between elementary and high school education.",
    content: "At Sunnydale Middle School, we focus on developing critical thinking skills and fostering creativity."
  },
  {
    id: 4,
    name: "Tech Institute",
    description: "Shaping the tech leaders of tomorrow.",
    content: "Tech Institute is at the forefront of technology education, offering courses in coding and robotics."
  }
];

const DoodleIcon = ({ Icon, className }) => (
  <div className={`absolute ${className}`}>
    <Icon className="text-blue-500 opacity-50" size={24} />
  </div>
);

export default function Education() {
  const schoolRefs = useRef([]);

  const scrollToSchool = (index) => {
    schoolRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    schoolRefs.current = schoolRefs.current.slice(0, schools.length);
  }, []);

  return (
    <>
    <NewNavbar/>
    <div className="grid min-h-screen grid-cols-[280px_1fr] font-nohemi_m">
    
      <aside className="bg-gradient-to-b from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <DoodleIcon Icon={Book} className="top-4 left-4 rotate-12" />
        <DoodleIcon Icon={Pencil} className="bottom-4 right-4 -rotate-12" />
        <div className="p-6 relative z-10">
          <nav>
            <ul className="space-y-2 ">
              {schools.map((school, index) => (
                <li key={school.id}>
                  <button
                    onClick={() => scrollToSchool(index)}
                    className="w-full text-left p-3 rounded transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full mr-3 font-bold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{school.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="overflow-auto bg-gray-100 relative">
        <div className="h-screen overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-8 p-6">
            {schools.map((school, index) => (
              <div key={school.id} ref={el => schoolRefs.current[index] = el} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
                  <h2 className="text-2xl">{school.name}</h2>
                  <p className="text-blue-100">{school.description}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Animated GIF" className="w-full" /> 
                  </div>
                  <p className="text-gray-600 leading-relaxed">{school.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}
