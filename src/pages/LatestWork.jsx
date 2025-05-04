import React from "react";
import myElearning from "../assets/lms.png"; // Replace with actual LMS image

const LatestWork = () => {
  return (
    <div
      id="latest-work"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gradient-to-tr from-sky-900 via-sky-950 to-sky-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mt-4"
    >
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          My Latest Work
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-pink-500">
            Learning Management System (LMS) – MERN Stack
          </h3>
          <p className="text-gray-300">
            Built a full-stack LMS web application enabling two roles: Educators
            and Students, featuring integrated authentication, payment gateway,
            and course management.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed using MongoDB, Express.js, React.js, and Node.js</li>
            <li>Styled with Tailwind CSS and responsive across devices</li>
            <li>Integrated Clerk for authentication and webhook support</li>
            <li>Educators can manage courses and track enrollments</li>
            <li>Students can enroll and pay via Stripe Payment Gateway</li>
          </ul>
          <p className="text-gray-300">
            <strong>Technology Stack:</strong> MongoDB, Express.js, React.js,
            Node.js, Clerk, Webhooks, Stripe, Tailwind CSS
          </p>

          <div className="flex flex-wrap gap-3 pt-4 text-white font-medium">
            {[
              "#React",
              "#Tailwind CSS",
              "#Node.js",
              "#Express",
              "#MongoDB",
              "#Stripe",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-sky-800 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative group">
          <div className="rounded-xl overflow-hidden border-4 border-pink-600 shadow-2xl transform transition-transform group-hover:scale-105">
            <img
              src={myElearning}
              alt="Learning Management System"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
