import React from "react";
import userImage from "../../assets/images/user.jpeg"; // Replace with your actual image path

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-950 text-white">
      <div className="container mx-auto flex flex-col md:flex-row max-w-6xl p-5">
        {/* Left Column for Images */}
        <div className="flex flex-col items-center mb-5 md:mb-0 md:w-1/2">
          <img
            src={userImage}
            alt="User"
            className="w-80 h-80 rounded-full object-cover shadow-pink-950 shadow-lg"
          />
        </div>

        {/* Right Column for Qualifications */}
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="mb-4 text-gray-400">
            Hi! I'm Shweta Bharti, a passionate MERN Stack Developer with a
            strong foundation in building responsive and interactive web
            applications. My journey in technology started during my education
            in Computer Science and Engineering, where I honed my skills in
            various programming languages and frameworks.
          </p>
          <h2 className="text-xl font-semibold mb-4">Qualifications</h2>

          <div className="bg-sky-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <ul className="list-disc list-inside text-pink-500">
              <li className="text-[20px] mb-2">
                <span className="font-semibold">
                  BTech in Computer Science and Engineering
                </span>
              </li>
              <li className="text-[18px] mb-1">
                <span className="font-semibold">Institution:</span> Dev Bhoomi
                Uttarakhand University
              </li>
              <li className="text-[18px]">
                <span className="font-semibold">Duration:</span> 2021-2025
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
