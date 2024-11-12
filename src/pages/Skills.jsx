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
    <div className="bg-sky-950 py-4">
      <h2 className="text-center pt-5 text-4xl md:text-5xl lg:text-6xl font-bold border-b-2 border-red-500 p-5">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto px-4 p-10">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: "gray",
                  pathColor: skill.color,
                  trailColor: "#d6d6d6",
                })}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
