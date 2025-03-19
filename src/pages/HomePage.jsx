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
import TextChanger from "../components/textChange/TextChanger";

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
    <div className="flex flex-col items-center bg-gradient-to-r from-indigo-900 to-green-900 min-h-screen px-5 py-10">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-5 md:px-10 mt-10">
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            <TextChanger />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            MERN Stack Developer
          </p>

          <button
            onClick={scrollToContact} // Change made here
            className="rounded-lg border border-white bg-transparent mt-6 px-6 py-3 text-emerald-50 text-lg font-semibold flex items-center justify-center hover:bg-emerald-600 transition-all"
          >
            Contact Me!
            <FaArrowRightLong className="ml-3" size={20} />
          </button>

          <div className="flex justify-center gap-6 mt-6">
            {/* Social Media Icons */}
            <Link
              to="https://www.linkedin.com/in/shweta-bharti-48b850259/"
              target="_blank"
            >
              <FaLinkedinIn className="text-[27px] text-green-300 hover:text-red-400 transition-all" />
            </Link>
            <Link to="https://github.com/Shweta220803" target="_blank">
              <FaGithub className="text-[27px] text-green-300 hover:text-red-400 transition-all" />
            </Link>
            <Link to="https://t.me/shweta@22" target="_blank">
              <FaTelegramPlane className="text-[27px] text-green-300 hover:text-red-400 transition-all" />
            </Link>
            <Link to="#" target="_blank">
              <FaTwitter className="text-[27px] text-green-300 hover:text-red-400 transition-all" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center mt-10 relative">
          <img
            src={userBanner}
            alt="user"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl transform hover:scale-105 transition-all"
          />
        </div>
      </div>

      {/* Latest Work Button */}
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={scrollToAbout}
          className="rounded-lg border border-white bg-transparent py-3 px-6 text-emerald-50 text-lg font-semibold hover:bg-emerald-600 transition-all"
        >
          About Me!
          <FaArrowDownLong className="ml-3" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
