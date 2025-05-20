import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { id: "home-section", label: "Home" },
    { id: "about-section", label: "About" },
    { id: "projects-section", label: "Projects" },
    { id: "experience-section", label: "Experience" },
    { id: "skills-section", label: "Skills" },
    { id: "education-section", label: "Education" },
  ];

  return (
    <header className="bg-sky-950 py-4 fixed w-full z-50 shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse tracking-wide">
          My<span className="ml-1">Portfolio</span>
        </div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-white">
          {navLinks.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              className="hover:text-emerald-500 cursor-pointer py-2 hover:underline underline-offset-4"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            role="button"
            className="inline-block bg-gradient-to-r from-purple-800  to-blue-500 hover:from-blue-500 hover:to-pink-700 text-white px-4 py-2 rounded-full font-medium transition duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white" size={24} />
            ) : (
              <FaBars className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-sky-950 px-4 py-4">
          <ul className="flex flex-col items-center space-y-4 text-white">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="hover:text-emerald-500 cursor-pointer block"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-medium transition duration-300 text-center block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
