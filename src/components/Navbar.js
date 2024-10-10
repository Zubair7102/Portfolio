import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import MZA from "../assets/Credential.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = useCallback(() => setNav(prev => !prev), []);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
      observer.disconnect();
    };
  }, []);

  const renderNavItem = useCallback((item) => (
    <li key={item} className="ml-10">
      <Link
        to={item}
        smooth={true}
        duration={500}
        className={`text-sm uppercase font-semibold tracking-wider transition-all duration-300 py-2 px-4 rounded-full ${
          activeSection === item
            ? "bg-cyan-500 text-[#0a192f]"
            : "text-gray-300 hover:bg-cyan-500/20"
        }`}
      >
        {item}
      </Link>
    </li>
  ), [activeSection]);

  return (
    <nav className={`fixed w-full h-20 z-[100] ${shadow ? "bg-[#0a192f]/90 backdrop-blur-md" : "bg-[#0a192f]"} transition-all duration-300`}>
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link to="home" smooth={true} duration={500}>
          <img src={MZA} alt="Logo" className="w-[50px] cursor-pointer hover:scale-105 transition-transform duration-300" />
        </Link>
        <div>
          <ul className="hidden md:flex items-center">
            {navItems.map(renderNavItem)}
          </ul>
          <button 
            className="md:hidden focus:outline-none" 
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className={`w-6 h-0.5 bg-cyan-500 transition-all duration-300 ${nav ? "rotate-45" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-cyan-500 absolute transition-all duration-300 ${nav ? "opacity-0" : "top-3"}`}></div>
              <div className={`w-6 h-0.5 bg-cyan-500 transition-all duration-300 ${nav ? "-rotate-45" : ""}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed left-0 top-0 w-full h-screen ${nav ? "bg-black/70" : "bg-transparent pointer-events-none"} transition-all duration-500`}
        aria-hidden={!nav}
      >
        <div className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] p-10 ease-in duration-500 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
          <div>
            <div className="flex w-full items-center justify-between mb-8">
              <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                <img src={MZA} alt="Logo" className="w-[50px]" />
              </Link>
            </div>
            <div className="border-b border-gray-300/20 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-gray-300 italic">Let's build something legendary together</p>
            </div>
          </div>
          <nav className="py-4 flex flex-col">
            <ul className="uppercase">
              {navItems.map((item) => (
                <li key={item} className="py-4">
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    onClick={handleClick}
                    className={`text-lg font-semibold tracking-wider transition-all duration-300 ${
                      activeSection === item ? "text-cyan-500" : "text-gray-300 hover:text-cyan-500"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;