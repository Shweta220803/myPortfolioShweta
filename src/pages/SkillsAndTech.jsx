import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Sample data
const technologies = [
  { name: "Java", icon: "fab fa-java", level: 90 },
  { name: "React", icon: "fab fa-react", level: 95 },
  { name: "Node.js", icon: "fab fa-node-js", level: 90 },
  { name: "JavaScript", icon: "fab fa-js-square", level: 95 },
  { name: "MySQL", icon: "fab fa-mysql-square", level: 95 },
  { name: "MongoDB", icon: "fab fa-mongo-square", level: 95 },
];

const skills = [
  { name: "Communication", level: 90, color: "#6e0b53" },
  { name: "Time Management", level: 90, color: "#2c0661" },
  { name: "Public Speaking", level: 90, color: "#6e0b53" },
  { name: "Confidence", level: 90, color: "#2c0661" },
  { name: "Team Building", level: 80, color: "#6e0b53" },
];

const SkillsAndTech = () => {
  return (
    <div
      id="skills-section"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gradient-to-tr from-sky-900 via-sky-950 to-sky-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      {/* LEFT COLUMN - Technology Stack with Horizontal Progress Bars */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-center text-3xl font-bold mb-6 border-b-4 border-red-500 pb-2">
          Technology Stack
        </h2>
        <div className="space-y-6">
          {technologies.map((tech, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 text-xl mb-1">
                <i className={`${tech.icon} text-[2rem] text-blue-400`}></i>
                <span>{tech.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN - Skills with Circular Progress Bars */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-center text-3xl font-bold mb-6 border-b-4 border-red-500 pb-2">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: skill.color,
                    trailColor: "#1F2937",
                    strokeWidth: 8,
                  })}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTech;
