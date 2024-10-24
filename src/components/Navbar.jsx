import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-sky-950 py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        {/* Logo or Title */}
        <div className="text-white text-3xl font-bold">
          My<span className="text-pink-800">Portfolio</span>
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

        {/* Navigation Links */}
        <nav
          className={`md:flex md:items-center md:space-x-8 ${
            isOpen ? "block" : "hidden"
          } absolute md:static bg-sky-950 w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-white">
            <li>
              <Link
                to="about-section" // Scroll to the section with id="about-section"
                smooth={true}
                duration={500}
                className="hover:text-emerald-500 cursor-pointer py-2"
                onClick={toggleMenu} // Close menu on link click
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects-section"
                smooth={true}
                duration={500}
                className="hover:text-emerald-500 cursor-pointer py-2"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="technology-stacks-section"
                smooth={true}
                duration={500}
                className="hover:text-emerald-500 cursor-pointer py-2"
                onClick={toggleMenu}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                to="experience-section"
                smooth={true}
                duration={500}
                className="hover:text-emerald-500 cursor-pointer py-2"
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="skills-section"
                smooth={true}
                duration={500}
                className="hover:text-emerald-500 cursor-pointer py-2"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                className="hover:text-emerald-500 cursor-pointer py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
