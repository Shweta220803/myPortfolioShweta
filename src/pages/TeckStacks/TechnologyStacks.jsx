import React from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const TechnologyStacks = () => {
  return (
    <div className="p-5 sm:p-10">
      <h2 className="text-center pt-5 text-4xl md:text-5xl lg:text-6xl font-bold border-b-2 border-red-500 p-5">
        Technologies Stack
      </h2>
      <p className="text-center text-gray-500 pt-4">
        👉 Including programming languages, databases, development frameworks,
        etc.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 text-center">
        <div className="p-4 border rounded shadow-md">
          <FaJava className="inline-block text-red-600 text-[2.5rem]" />
          <p>Java</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <SiCplusplus className="inline-block text-blue-500 text-[2.5rem]" />
          <p>C++</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <SiMysql className="inline-block text-orange-500 text-[2.5rem]" />
          <p>MySQL</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <SiMysql className="inline-block text-blue-500 text-[2.5rem]" />
          <p>SQL</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <FaJs className="inline-block text-yellow-500 text-[2.5rem]" />
          <p>JavaScript</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <FaReact className="inline-block text-blue-600 text-[2.5rem]" />
          <p>React JS</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <FaNodeJs className="inline-block text-green-600 text-[2.5rem]" />
          <p>Node JS</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <SiExpress className="inline-block text-gray-600 text-[2.5rem]" />
          <p>Express JS</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <SiMongodb className="inline-block text-green-500 text-[2.5rem]" />
          <p>MongoDB</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <FaPhp className="inline-block text-indigo-600 text-[2.5rem]" />
          <p>PHP</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <FaHtml5 className="inline-block text-orange-500 text-[2.5rem]" />
          <p>HTML</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <FaCss3Alt className="inline-block text-blue-600 text-[2.5rem]" />
          <p>CSS</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <FaBootstrap className="inline-block text-purple-600 text-[2.5rem]" />
          <p>Bootstrap</p>
        </div>
        <div className="p-4 border rounded shadow-md">
          <SiTailwindcss className="inline-block text-teal-500 text-[2.5rem]" />
          <p>Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStacks;
