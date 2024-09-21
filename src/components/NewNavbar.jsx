import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

const NewNavbar = () => {
  const navItems = [
    {
      label: 'Team',
      pages: [
        { name: "Team Members", link: "/team_members" },
        { name: "Mentors", link: "/mentors" },
        { name: "Attributions", link: "/attributions" },
      ]
    },
    {
      label: 'Project',
      pages: [
        { name: "Project Description", link: "/project_description" },
        { name: "Engineering", link: "/engineering" },
        { name: "Implementation", link: "/implementation" },
        { name: "Sustainability", link: "/sustainability" },
        { name: "Notebook", link: "/notebook" },
        { name: "Safety", link: "/safety" },
        { name: "Results", link: "/results" },
        { name: "Contribution", link: "/contribution" },
        { name: "Experiments", link: "/experiments" },
        { name: "POC", link: "/poc" },
      ]
    },
    {
      label: 'Dry Lab',
      pages: [
        { name: "Modeling", link: "/modeling" },
        { name: "Genetic Circuit", link: "/genetic_circuit" },
      ]
    },
    {
      label: 'Parts',
      pages: [
        { name: "Overview", link: "/parts" },
      ]
    },
    {
      label: 'Human Practices',
      pages: [
        { name: "iHP", link: "/ihp" },
        { name: "Collab", link: "/collab" },
        { name: "Education", link: "/education" },
        { name: "Sponsorship / Acknowledgement", link: "/sponsorship" },
      ]
    }
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <nav className="sticky top-0 z-[1000] backdrop-blur-lg " data-aos="fade-down" data-aos-duration="2000">
      <div className="container px-9 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="lg:w-[95px] mr-2" src={logo} alt="" />
          </div>
          <ul className="hidden lg:flex space-x-12 lg:gap-8 xl:gap-12">
            {navItems.map((item, index) => (
              <li key={index} className="text-white relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-[15px] font-nohemi_r focus:outline-none"
                >
                  {item.label}
                </button>
                {openDropdownIndex === index && (
                  <ul className="absolute left-0 mt-2 w-48 bg-[#0A7EAF]/80 backdrop-blur-3xl text-white rounded-lg shadow-lg py-2 z-20">
                    {item.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <a
                          href={page.link}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#0A7EAF]"
                        >
                          {page.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="https://igem-plasticop.netlify.app"
              className="text-white font-nohemi_r bg-gradient-to-r from-blue-900 to-pink-700 py-2 px-3 rounded-md"
            >
              Play A Game
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-blue-gray-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-1xl text-white"
                  >
                    {item.label}
                  </button>
                  {openDropdownIndex === index && (
                    <ul className="mt-2 space-y-2">
                      {item.pages.map((page, pageIndex) => (
                        <li key={pageIndex}>
                          <a href={page.link} className="block text-center">
                            {page.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 border rounded-md w-80 mt-2 text-center"
              >
                Play A Game
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavbar;
