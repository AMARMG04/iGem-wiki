import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const NewNavbar = () => {
  const navItems = [
    {
      label: 'Team',
      pages: [
        { name: 'Team Members', link: '/team_members' },
        { name: 'Mentors', link: '/mentors' },
        { name: 'Attributions', link: '/attributions' },
      ],
    },
    {
      label: 'Project',
      pages: [
        { name: 'Project Description', link: '/project_description' },
        { name: 'Engineering', link: '/engineering' },
        { name: 'Implementation', link: '/implementation' },
        { name: 'Sustainability', link: '/sustainability' },
        { name: 'Notebook', link: '/notebook' },
        { name: 'Safety', link: '/safety' },
        { name: 'Results', link: '/results' },
        { name: 'Contribution', link: '/contribution' },
        { name: 'Experiments', link: '/experiments' },
        { name: 'POC', link: '/poc' },
      ],
    },
    {
      label: 'Dry Lab',
      pages: [
        { name: 'Modeling', link: '/modeling' },
        { name: 'Genetic Circuit', link: '/genetic_circuit' },
      ],
    },
    {
      label: 'Parts',
      pages: [{ name: 'Overview', link: '/parts' }],
    },
    {
      label: 'Human Practices',
      pages: [
        { name: 'iHP', link: '/ihp' },
        { name: 'Collab', link: '/collab' },
        { name: 'Education', link: '/education' },
        { name: 'Sponsorship / Acknowledgement', link: '/sponsorship' },
      ],
    },
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
    <nav className="sticky top-0 z-[1000] backdrop-blur-lg" data-aos="fade-down" data-aos-duration="2000">
      <div className="container px-4 sm:px-9 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="lg:w-[95px] w-[60px] mr-2" src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-[15px] font-nohemi_r focus:outline-none"
                >
                  {item.label}
                </button>
                {openDropdownIndex === index && (
                  <ul className="absolute left-0 mt-2 w-48 bg-[#0A7EAF]/80 backdrop-blur-lg text-white rounded-lg shadow-lg py-2 z-20">
                    {item.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <a href={page.link} className="block px-4 py-2 hover:bg-gray-100 hover:text-[#0A7EAF]">
                          {page.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button for Desktop */}
          <div className="hidden lg:flex justify-center items-center">
            <a
              href="#"
              className="text-white font-nohemi_r bg-gradient-to-r from-blue-900 to-pink-700 py-2 px-4 rounded-md"
            >
              Play A Game
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 bg-blue-gray-900 bg-opacity-90 z-20 p-6 flex flex-col lg:hidden">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-2xl text-white font-semibold"
                  >
                    {item.label}
                  </button>
                  {openDropdownIndex === index && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {item.pages.map((page, pageIndex) => (
                        <li key={pageIndex}>
                          <a href={page.link} className="block text-lg text-white">
                            {page.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-4 border rounded-md text-white text-center block"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavbar;
