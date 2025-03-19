import React from "react";
import myElearning from "../../assets/images/eLearningImg.png"; 

const LatestWork = () => {
  return (
    <div className="py-10 bg-gray-800">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white pb-5 border-b-4 border-pink-500 p-4">
        Latest Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-12 pt-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start space-y-5">
          <h3 className="text-3xl md:text-4xl text-pink-700 font-bold">
            AI-Powered e-Learning Platform
          </h3>
          <p className="text-gray-300 text-lg">
            The AI-powered e-learning platform integrates cutting-edge AI technologies to provide personalized learning experiences. The platform allows users to engage with interactive courses, quizzes, and tasks, while AI continuously adapts the content based on the learner's progress and performance.
          </p>
          <p className="text-gray-300 text-lg">
            The platform not only enhances the user experience through AI, but also includes a secure and seamless authentication process using JWT (JSON Web Tokens). This ensures that user sessions are managed securely, providing access to personalized content while maintaining privacy and integrity.
          </p>
          <p className="text-gray-300 text-lg">
            Additionally, the platform supports features such as real-time progress tracking, interactive discussions, and AI-driven feedback to help learners succeed.
          </p>
          <ul className="flex flex-wrap gap-3 pt-4 text-white font-medium">
            <li className="bg-gradient-to-r from-pink-500 to-red-500 text-center rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-all">
              #React
            </li>
            <li className="bg-gradient-to-r from-pink-500 to-red-500 text-center rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-all">
              #Tailwind CSS
            </li>
            <li className="bg-gradient-to-r from-pink-500 to-red-500 text-center rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-all">
              #NodeJS
            </li>
            <li className="bg-gradient-to-r from-pink-500 to-red-500 text-center rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-all">
              #JWT Authentication
            </li>
            <li className="bg-gradient-to-r from-pink-500 to-red-500 text-center rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-all">
              #AI Integration
            </li>
            <li className="bg-gradient-to-r from-pink-500 to-red-500 text-center rounded-full px-4 py-2 shadow-lg transform hover:scale-105 transition-all">
              #MongoDB
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center bg-gradient-to-tl from-gray-700 to-gray-900 p-5 rounded-xl shadow-2xl transform hover:scale-105 transition-all">
          <img
            src={myElearning}
            alt="AI-Powered e-Learning Platform"
            className="w-full max-w-md h-auto border-4 border-pink-600 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
