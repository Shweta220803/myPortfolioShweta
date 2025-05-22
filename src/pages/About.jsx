import React from "react";
import userBanner from "../assets/bannerImg.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="mb-5 text-white bg-gradient-to-tr from-sky-900 via-sky-950 to-sky-900 shadow-xl mx-4 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-8">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          About Me
        </span>
      </h2>

      {/* Container for text and image */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-2xl shadow-green-700"
            src={userBanner}
            alt="About img"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-base md:text-xl text-gray-400 mb-6 hover:text-pink-600 transition-colors duration-300">
            I’m Shweta Bharti, a passionate web developer with a strong
            foundation in both frontend and backend technologies. I thrive on
            bringing ideas to life through code, ensuring both functionality and
            design excellence. My goal is to constantly improve and push the
            boundaries of what I can achieve in the tech world.
          </p>

          <ul className="space-y-6">
            {[
              {
                title: "Frontend Developer",
                desc: "I specialize in creating dynamic and responsive frontend applications using technologies like React, HTML, CSS, TailwindCSS and JavaScript.",
              },
              {
                title: "Backend Developer",
                desc: "I have experience in backend development with Node.js, Express, and MongoDB, building APIs and handling database interactions.",
              },
              {
                title: "Database Developer",
                desc: "I'm skilled in working with databases like MongoDB and MySQL, ensuring efficient data storage, retrieval, and optimization.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <IoArrowForward size={26} className="mt-1 text-pink-500" />
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mt-1">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
