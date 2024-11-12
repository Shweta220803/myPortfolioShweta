import React from 'react';
import portfolioImage from '../../assets/images/portfolio.png';
import charityImage from '../../assets/images/charity.png';
import snakeGameImage from '../../assets/images/SnakeGame.jpeg';
import quizImage from '../../assets/images/quiz.jpeg';



const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my skills, projects, and work experience. Built using React and Tailwind CSS for a modern, responsive design.',
    imageUrl: portfolioImage,
    githubLink: 'https://github.com/Shweta220803/MyPortfolio',
    techStack: ['#React', '#TailwindCSS'],
  },
  {
    title: 'Charity-Connection Web Application',
    description: 'A charity web application that connects donors with organizations supporting healthcare, education, and elderly care, enabling secure donations and verified assistance requests for impactful social support.',
    imageUrl: charityImage,
    githubLink: 'https://github.com/Shweta220803/Charity-Web-Application.git',
    techStack: ['#MongoDB', '#ExpressJS', '#React', '#NodeJS', '#EmailJS'],
  },
  {
    title: 'Snake Game',
    description: 'A classic Snake game built using Java with Swing and AWT for graphical representation.',
    imageUrl: snakeGameImage,
    githubLink: 'https://github.com/Shweta220803/Snake-Game',
    techStack: ['#Java', '#Swing', '#AWT'],
  },
  {
    title: 'Quiz Application',
    description: 'A quiz application built using HTML, CSS, and JavaScript where users can attempt quizzes in various categories with real-time results.',
    imageUrl: quizImage,
    githubLink: 'https://github.com/Shweta220803/Quiz-Application',
    techStack: ['#HTML', '#CSS', '#JavaScript'],
  },
];

const Projects = () => (
  <div className="bg-sky-950 py-4">
    <h2 className="text-center pt-5 text-4xl md:text-5xl lg:text-6xl font-bold border-b-2 border-red-500 p-5">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-6 lg:px-10 pt-5">
      {projects.map(({ title, description, imageUrl, githubLink, techStack }) => (
        <div key={title} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700">{description}</p>
            {/* Technology Stack */}
            <ul className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech, index) => (
                <li key={index} className="bg-gray-700 text-white text-sm rounded-lg px-2 py-1">
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 font-semibold hover:underline"
            >
              Know More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
