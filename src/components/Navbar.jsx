import React from 'react'
// import { Menu, X } from 'lucide-react'
import { useState } from 'react'
// import logo from "../assets/logo.png"
// import { navItems } from "./../constants"
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => { 
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Team", href: "#" },
    { label: "Project", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Human Practices", href: "#" },
    { label: "Awards", href: "#" },
  ];
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-gray-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    {/* <img className='w-40 mr-2' src={logo} alt="" /> */}
                    <h1 className="text-[30px]">LOGO</h1>
                </div>
                <ul className="hidden lg:flex  space-x-12">
                    {navItems.map((item, index) => (
                     <li key={index}>
                       <a href={navItems.href}>{item.label}</a>
                     </li>

                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                  <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-400  py-2 px-3 rounded-md text-white'>
                   Play a game
                  </a>
                </div>
                {/* <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                  </button>
                </div> */}
            </div>
            {mobileDrawerOpen && (
            <div  className = "fixed right-0 z-20 bg-blue-gray-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
             <ul>
              {navItems.map((item,index) =>(
                 <li key={index} className='py-4'>
                   <a href={navItems.href} className='text-1xl'>{item.label}</a>
                 </li>
              ))}
             </ul>
             <div className="flex space-x-6">
              <a href="#" className='bg-gradient-to-r  from-orange-500 to-orange-400 py-2 px-3 border rounded-md w-80 mt-2 text-center'>
              Play a game
              </a>
             </div>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar