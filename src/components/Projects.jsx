import React from "react";
import { Link } from "react-router-dom";
import lmsImg from "../assets/lms.png";
import groceryImg from "../assets/grocery.png";
import blogImg from "../assets/blog.png";
import voiceImg from "../assets/virtualAss.png";
import snakeImg from "../assets/SnakeGame.jpeg";

const Projects = () => {
  const topProjects = [
    {
      title: "Grocery Shop Web Application",
      main: "A full-stack GroceryShop platform developed using the MERN stack.",
      image: groceryImg,
      tech: ["React JS", "Node.js", "Express", "MongoDB", "CSS", "HTML"],
      demoLink: "https://github.com/Shweta220803/Green-Cart.git",
      sourceCodeLink: "https://github.com/Shweta220803/Green-Cart.git",
    },
    {
      title: "LMS-PORTAL",
      main: "A full-stack learning management system platform developed using the MERN stack.",
      image: lmsImg,
      tech: ["React JS", "Node.js", "Express", "MongoDB", "CSS", "HTML"],
      demoLink: "https://learning-management-system-frontend-three.vercel.app/",
      sourceCodeLink:
        "https://github.com/Shweta220803/learning-management-system.git",
    },
    {
      title: "Blogging Website",
      main: "A full-stack blogging platform developed using the MERN stack.",
      image: blogImg,
      tech: ["React JS", "Node.js", "Express", "MongoDB", "CSS", "HTML"],
      demoLink:
        "https://github.com/Shweta220803/Blog-Application-using-MERN-Stack.git",
      sourceCodeLink:
        "https://github.com/Shweta220803/Blog-Application-using-MERN-Stack.git",
    },
  ];

  const bottomProjects = [
    {
      title: "Voice Assistant",
      main: "A voice-controlled assistant built with JavaScript.",
      image: voiceImg,
      tech: ["JavaScript", "HTML", "CSS"],
      demoLink: "https://github.com/Shweta220803/Virtual_Assistant.git",
      sourceCodeLink: "https://github.com/Shweta220803/Virtual_Assistant.git",
    },
    {
      title: "Snake Game",
      main: "A classic Snake Game implemented using Java and Swing.",
      image: snakeImg,
      tech: ["Java", "Swing"],
      demoLink: "https://github.com/Shweta220803/Snake-Game.git",
      sourceCodeLink: "https://github.com/Shweta220803/Snake-Game.git",
    },
  ];

  return (
    <div id="Projects" className="bg-gray-900 py-16 px-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-16">My Projects</h1>

      {/* Top 3 Projects */}
      <div className="flex flex-wrap justify-center gap-8 mb-24 relative">
        {topProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0c0e19] w-[300px] rounded-2xl shadow-xl shadow-slate-800 hover:scale-105 transition-transform p-4 z-10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover"
            />
            <div className="mt-4">
              <h3 className="text-xl text-center font-bold">{project.title}</h3>
              <p className="text-sm text-gray-400 text-center mt-2 pb-2">
                {project.main}
              </p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center pb-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-purple-900 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-4 mb-5">
                <Link
                  to={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#465697] px-4 py-2 text-sm rounded-3xl font-semibold hover:scale-105 duration-300"
                >
                  Demo
                </Link>
                <Link
                  to={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#465697] px-4 py-2 text-sm rounded-3xl font-semibold hover:scale-105 duration-300"
                >
                  Source
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Optional vertical line between top and bottom */}
        <div className="absolute left-1/2 top-[90%] transform -translate-x-1/2 h-24 w-1 bg-purple-600 z-0"></div>
      </div>

      {/* Bottom 2 Projects */}
      <div className="flex flex-wrap justify-center gap-16 relative">
        {bottomProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0c0e19] w-[300px] rounded-2xl shadow-xl shadow-slate-800 hover:scale-105 transition-transform p-4 z-10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover"
            />
            <div className="mt-4">
              <h3 className="text-xl text-center font-bold">{project.title}</h3>
              <p className="text-sm text-gray-400 text-center mt-2">
                {project.main}
              </p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center pb-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-purple-900 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-4 mb-3">
                <Link
                  to={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#465697] px-4 py-2 text-sm rounded-3xl font-semibold hover:scale-105 duration-300"
                >
                  Demo
                </Link>
                <Link
                  to={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#465697] px-4 py-2 text-sm rounded-3xl font-semibold hover:scale-105 duration-300"
                >
                  Source
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
