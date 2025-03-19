import React from "react";
import AboutImg from "../../assets/images/user.jpeg"; // Your image
import { IoArrowForward } from "react-icons/io5";

const AboutPage = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center mt-5">
          {/* Image Section */}
          <img
            className="md:h-80 w-80 rounded-full object-cover shadow-lg"
            src={AboutImg}
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
                  applications using technologies like React, HTML, CSS, TailwindCSS and
                  JavaScript.
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
    </div>
  );
};

export default AboutPage;
