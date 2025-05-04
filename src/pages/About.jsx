import React from "react";
import userBanner from "../assets/bannerImg.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="mb-5 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gradient-to-tr from-sky-900 via-sky-950 to-sky-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold pt-10 mb-5">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-6 mt-5 hover:text-pink-600 text-center md:text-left">
          I’m Shweta Bharti, a passionate developer with a strong foundation in
          both frontend and backend technologies. I thrive on bringing ideas to
          life through code, ensuring both functionality and design excellence.
          My goal is to constantly improve and push the boundaries of what I can
          achieve in the tech world.
        </p>
      </div>

      <div className="md:flex flex-wrap flex-col md:flex-row items-center mt-5 gap-30">
        {/* Image Section */}
        <img
          className="md:h-80 w-80 rounded-full object-cover shadow-2xl shadow-green-700"
          src={userBanner}
          alt="About img"
        />

        {/* Qualifications and Skills Section */}
        <ul className="mt-5 md:mt-0 md:ml-10">
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                I specialize in creating dynamic and responsive frontend
                applications using technologies like React, HTML, CSS,
                TailwindCSS and JavaScript.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                I have experience in backend development with Node.js, Express,
                and MongoDB, building APIs and handling database interactions.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Database Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                I'm skilled in working with databases like MongoDB and MySQL,
                ensuring efficient data storage, retrieval, and optimization.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
