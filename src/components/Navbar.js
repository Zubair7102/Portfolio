import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Credential.png";

const navItems = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = "cursor-pointer rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:bg-white/10 hover:text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-gray-900/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <img src={logo} alt="MZA logo" className="h-12 w-12 rounded-full border border-white/10" />
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item} className="!px-0">
              <Link to={item} smooth duration={500} className={navLinkClass}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setNavOpen((prev) => !prev)} className="text-2xl text-gray-200 md:hidden" aria-label="Toggle navigation">
          {navOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {navOpen && (
        <div className="border-t border-white/10 bg-gray-900/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item} className="!px-0">
                <Link
                  to={item}
                  smooth
                  duration={500}
                  onClick={() => setNavOpen(false)}
                  className="block cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:bg-white/10"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
