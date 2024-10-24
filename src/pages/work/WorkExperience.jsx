import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Java Developer",
      company: "ICT Academy",
      years: "2nd Sep 2024 - 28th Sep 2024",
      description:
        "Completed Java Training with ICT Academy in Java development with real-life experience on a banking management system project.",
      techStack: ["#Java", "#Spring", "#Maven", "#JDBC"],
    },
    {
      role: "Full Stack Developer",
      company: "Slash Mark, Startup India",
      years: "15th Mar 2024 - 15th May 2024",
      description:
        "Worked on Creative Direction, User Experience, Visual Design, Project Management, and Team Leading.",
      techStack: ["#MongoDB", "#ExpressJS", "#React", "#NodeJS"],
    },
    {
      role: "Web Developer",
      company: "Octanet Services, Pvt Ltd.",
      years: "1st Jan 2024 - 1st Feb 2024",
      description:
        "Gained experience in Creative Direction, User Experience, Visual Design, Project Management, and Team Leading.",
      techStack: ["#HTML", "#CSS", "#JavaScript"],
    },
    {
      role: "Java & SQL Training",
      company: "Besant Technologies",
      years: "5th Aug 2023 - 20th Sep 2023",
      description:
        "Trained in Java and SQL with a focus on real-world applications and project work.",
      techStack: ["#Java", "#SQL"],
    },
  ];

  return (
    <div>
      <h2 className="text-center pt-5 text-4xl md:text-5xl lg:text-6xl font-bold border-b-2 border-red-500 p-5">
        Work Experience
      </h2>

      {/* Work Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-10 pt-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col p-5 bg-gray-200 shadow-lg rounded-lg"
          >
            {/* Experience Details */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-pink-700">
                {exp.role}
              </h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.years}</p>
              <p className="text-gray-400 mt-2">{exp.description}</p>

              {/* Tech Stack */}
              <ul className="list-style-none flex flex-wrap gap-3 pt-4 text-sky-500">
                {exp.techStack.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-center border border-gray-300 w-[80px] sm:w-[100px] rounded-[10px] p-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
