import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "Communication", level: 90, color: "#38B2AC" },
  { name: "Time Management", level: 90, color: "#F7DF1E" },
  { name: "Public Speaking", level: 90, color: "#38B2AD" },
  { name: "Decision Making", level: 95, color: "#47A248" },
  { name: "Confidence", level: 90, color: "#F7DF1E" },
  { name: "Team Building", level: 80, color: "#38B2AC" },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-teal-900 to-green-900 py-12">
      <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 border-b-4 border-red-500 pb-4">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-4 md:px-10">
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
                  trailColor: "#d6d6d6",
                  strokeWidth: 8,
                })}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mt-3">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
