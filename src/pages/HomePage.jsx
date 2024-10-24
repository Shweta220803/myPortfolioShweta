import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import userBanner from "../assets/images/user.jpeg";
import {
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-5 md:px-10 mt-10">
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl font-serif ml-0 md:ml-[5rem]">
            Shweta Bharti
          </h1>
          <p className="text-lg md:text-xl pt-2">MERN Stack Developer</p>

          <button
            onClick={scrollToContact} // Change made here
            className="rounded-lg border border-white bg-transparent mt-4 text-emerald-50 text-white font-bold p-2 flex items-center justify-between relative"
          >
            Contact Me!
            <FaArrowRightLong className="ml-2 -mr-4" size={20} />
          </button>

          <div className="flex items-end justify-center md:justify-start gap-5 mt-4 pt-4 pl-0 md:pl-10">
            {/* Social Media Icons */}
            <Link
              to="https://www.linkedin.com/in/shweta-bharti-48b850259/"
              target="_blank"
            >
              <FaLinkedinIn className="text-[27px] text-green-700 hover:text-red-400" />
            </Link>
            <Link to="https://github.com/Shweta220803" target="_blank">
              <FaGithub className="text-[27px] text-green-700 hover:text-red-400" />
            </Link>
            <Link to="https://t.me/shweta@22" target="_blank">
              <FaTelegramPlane className="text-[27px] text-green-700 hover:text-red-400" />
            </Link>
            <Link to="#" target="_blank">
              <FaTwitter className="text-[27px] text-green-700 hover:text-red-400" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center mt-10 relative">
          <img
            src={userBanner}
            alt="user images"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-green-500 shadow-lg md:mr-[5rem]"
          />
        </div>
      </div>

      {/* Latest Work Button */}
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={scrollToAbout}
          className="rounded-lg border border-white bg-transparent m-4 p-4 text-emerald-50 text-white font-bold"
        >
          About Me!
          <FaArrowDownLong className="ml-2 -mr-4" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
