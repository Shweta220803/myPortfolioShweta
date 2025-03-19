import React from "react";
import ProjectCard from "./ProjectCard";
import blogImg from "../../assets/images/blog.jpeg";
import voiceImg from "../../assets/images/voiceAssitance.png";
import snakeImg from "../../assets/images/SnakeGame.jpeg";
import quizImg from "../../assets/images/quiz.jpeg";
import charityImg from "../../assets/images/charity.png";
import elearningImg from "../../assets/images/eLearningImg.png";

const Projects = () => {
  return (
    <div id="Projects" className="bg-gray-900 py-16 px-6 md:px-24 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blogging Website */}
        <ProjectCard
          title="Blogging Website"
          main="This is a blogging website created with MERN stack utilizing several component libraries for enhanced functionality and UI design."
          image={blogImg}
          demoLink="https://github.com/Shweta220803/Blog-Application-using-MERN-Stack.git"
          sourceCodeLink="https://github.com/Shweta220803/Blog-Application-using-MERN-Stack.git"
        />

        {/* Voice Assistance */}
        <ProjectCard
          title="Voice Assistance"
          main="A voice assistant built using HTML, CSS, and JavaScriptfor real-time search and response."
          image={voiceImg}
          demoLink="https://github.com/Shweta220803/Virtual_Assistant.git"
          sourceCodeLink="https://github.com/Shweta220803/Virtual_Assistant.git"
        />

        {/* Snake Game */}
        <ProjectCard
          title="Snake Game"
          main="A classic Snake Game built with Java and Swing, featuring smooth controls and increasing difficulty."
          image={snakeImg}
          demoLink="https://github.com/Shweta220803/Snake-Game.git"
          sourceCodeLink="https://github.com/Shweta220803/Snake-Game.git"
        />

        {/* Quiz Application */}
        <ProjectCard
          title="Quiz Application"
          main="A HTML, CSS and JavaScript app that allows users to create and attempt quizzes with real-time scoring."
          image={quizImg}
          demoLink="https://github.com/Shweta220803/Quiz-Application.git"
          sourceCodeLink="https://github.com/Shweta220803/Quiz-Application.git"
        />

        {/* Charity App */}
        <ProjectCard
          title="Charity Donation Web App"
          main="A Charity Donation web application built with MERN Stack to help the person in the field of education, Healthcare."
          image={charityImg}
          demoLink="https://github.com/Shweta220803/Charity-Web-Application.git"
          sourceCodeLink="https://github.com/Shweta220803/Charity-Web-Application.git"
        />

        {/* AI-Powered e-Learning Platform */}
        <ProjectCard
          title="AI-Powered e-Learning Platform"
          main="An AI-based learning platform built with MERN stack and AI model integration."
          image={elearningImg}
          demoLink="https://github.com/Shweta220803/AI-Powered-e-Learning-Application.git"
          sourceCodeLink="https://github.com/Shweta220803/AI-Powered-e-Learning-Application.git"
        />
      </div>
    </div>
  );
};

export default Projects;
