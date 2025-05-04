import React from "react";
import { MdCopyright } from "react-icons/md";
import {
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sky-950 text-white py-6">
      <p className="text-center text-xl flex items-center justify-center gap-2">
        Shweta Bharti <MdCopyright className="pt-1" /> 2024
      </p>

      <div className="flex items-center justify-center mt-4 gap-6 text-2xl flex-wrap">
        <Link
          to="https://www.linkedin.com/in/shweta-bharti-48b850259/"
          target="_blank"
        >
          <FaLinkedinIn className="hover:text-emerald-500 transition duration-300" />
        </Link>
        <Link to="https://github.com/Shweta220803" target="_blank">
          <FaGithub className="hover:text-emerald-500 transition duration-300" />
        </Link>
        <Link to="shweta@22" target="_blank">
          <FaTelegramPlane className="hover:text-emerald-500 transition duration-300" />
        </Link>
        <Link to="" target="_blank">
          <FaTwitter className="hover:text-emerald-500 transition duration-300" />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
