import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MZA from "../assets/Credential.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((prevState) => !prevState);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10 shadow-lg">
      <div>
        <img src={MZA} alt="Logo" className="w-[50px]" />
      </div>
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ${
          nav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section} className="py-6 text-4xl hover:text-cyan-500 transition duration-300">
            <Link onClick={handleClick} to={section} smooth={true} duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
