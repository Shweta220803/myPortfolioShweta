import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaCuttlefish,
  FaBootstrap,
  FaCompass,
  // FaVisualstudiocode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  //   SiMaterialui,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React JS", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      //   { name: "Material UI", icon: <SiMaterialui /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node JS", icon: <FaNodeJs /> },
      { name: "Express JS", icon: <SiExpress /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Springboot", icon: <SiSpringboot /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <FaCuttlefish /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C", icon: <FaCuttlefish /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      // { name: "VS Code", icon: <FaVisualstudiocode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Compass", icon: <FaCompass /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="relative py-10 px-5 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-400">Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto pt-3">
          I am proficient in full-stack development with strong expertise in
          Java, React, and the MERN stack. My skills also include
          problem-solving, effective teamwork, and time management, enabling me
          to deliver efficient and scalable solutions.
        </p>
      </div>

      {/* Middle Vertical Line */}
      <div className="absolute left-1/2 top-45 h-3/4 w-1 bg-purple-500 transform -translate-x-1/2 z-0">
        {/* Line Dot */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-6 bg-[#0e0e1a] border-4 border-purple-600 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-20 z-10 relative shadow-lg shadow-purple-700">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Connector line */}
            <div
              className={`absolute top-1/2 w-50 h-1 bg-purple-500 ${
                index % 2 === 0 ? "right-[50%]" : "left-[50%]"
              } transform -translate-y-1/2`}
            ></div>

            {/* Skill card */}
            <div className="bg-[#101828] p-6 rounded-lg shadow-lg shadow-purple-500 w-[300px] text-white border border-purple-600 z-10 transform transition duration-300 hover:-translate-x-4">
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-purple-800 text-sm rounded-full shadow-md"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
