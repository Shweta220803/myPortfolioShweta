import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import lmsImg from "../assets/lms.png";
import groceryImg from "../assets/grocery.png";

import blogImg from "../assets/blog.png";
import voiceImg from "../assets/virtualAss.png";
import snakeImg from "../assets/SnakeGame.jpeg";
import quizImg from "../assets/quiz.jpeg";
import charityImg from "../assets/charity.png";

const Projects = () => {
  const projectData = [
    {
      title: "Grocery Shop Web Appplication",
      main: "A full-stack GroceryShop platform developed using the MERN stack.",
      image: groceryImg,
      demoLink: " https://github.com/Shweta220803/Green-Cart.git",
      sourceCodeLink: "https://github.com/Shweta220803/Green-Cart.git",
    },
    {
      title: "LMS-PORTAL",
      main: "A full-stack learning management system platform developed using the MERN stack.",
      image: lmsImg,
      demoLink: "https://learning-management-system-frontend-three.vercel.app/",
      sourceCodeLink:
        "https://github.com/Shweta220803/learning-management-system.git",
    },

    {
      title: "Blogging Website",
      main: "A full-stack blogging platform developed using the MERN stack.",
      image: blogImg,
      demoLink:
        "https://github.com/Shweta220803/Blog-Application-using-MERN-Stack.git",
      sourceCodeLink:
        "https://github.com/Shweta220803/Blog-Application-using-MERN-Stack.git",
    },
    {
      title: "Voice Assistant",
      main: "A voice-controlled assistant built with JavaScript.",
      image: voiceImg,
      demoLink: "https://github.com/Shweta220803/Virtual_Assistant.git",
      sourceCodeLink: "https://github.com/Shweta220803/Virtual_Assistant.git",
    },
    {
      title: "Snake Game",
      main: "A classic Snake Game implemented using Java and Swing.",
      image: snakeImg,
      demoLink: "https://github.com/Shweta220803/Snake-Game.git",
      sourceCodeLink: "https://github.com/Shweta220803/Snake-Game.git",
    },
    {
      title: "Quiz Application",
      main: "A dynamic quiz app with HTML, CSS, and JS.",
      image: quizImg,
      demoLink: "https://github.com/Shweta220803/Quiz-Application.git",
      sourceCodeLink: "https://github.com/Shweta220803/Quiz-Application.git",
    },
    {
      title: "Charity Donation Web App",
      main: "MERN-based web app for donations in education and healthcare sectors.",
      image: charityImg,
      demoLink: "https://github.com/Shweta220803/Charity-Web-Application.git",
      sourceCodeLink:
        "https://github.com/Shweta220803/Charity-Web-Application.git",
    },
  ];

  return (
    <div id="Projects" className="bg-gray-900 py-16 px-6 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h1>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4"
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="p-5 bg-[#0c0e19] rounded-2xl shadow-xl shadow-slate-900 transition-transform transform hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <h3 className="text-xl font-bold mt-4 text-white px-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 px-2 py-2">{project.main}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#465697] px-4 py-2 text-sm rounded-3xl font-semibold hover:scale-105 duration-300"
                >
                  Demo
                </a>
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#465697] px-4 py-2 text-sm rounded-3xl font-semibold hover:scale-105 duration-300"
                >
                  Source
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
