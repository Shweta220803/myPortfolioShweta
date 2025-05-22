import React from "react";
import dbuuLogo from "../assets/dbuu.jpg";
import gpgayaLogo from "../assets/gpgaya.png";
import cbseLogo from "../assets/cbse.jpg";

const EducationCard = ({
  title,
  school,
  duration,
  grade,
  description,
  logo,
}) => (
  <div className="relative bg-[#1a1a2e] border border-purple-600 text-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-3">
      <img
        src={logo}
        alt="School Logo"
        className="w-12 h-12 mr-4 rounded-full border-2 border-purple-400"
      />
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{school}</p>
        <p className="text-sm text-gray-400">{duration}</p>
      </div>
    </div>
    <p className="font-semibold text-sm text-gray-300 mb-2">Grade: {grade}</p>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const Education = () => {
  const educationData = [
    {
      title: "Bachelor's - B.Tech in Computer Science & Engineering",
      school: "Dev Bhoomi Uttarakhand University, Dehradun",
      duration: "Aug 2022 – June 2025",
      grade: "9.00 CGPA",
      description:
        "I have completed my Bachelor's degree (B.Tech) in Computer Science & Engineering. I studied Data Structures, OOPs, DBMS, Web Development, and Software Engineering.",
      logo: dbuuLogo,
    },
    {
      title: "Diploma in Computer Science & Engineering",
      school: "Government Polytechnic Gaya, Bihar",
      duration: "Aug 2019 – March 2022",
      grade: "9.15 CGPA",
      description:
        "I have completed my Diploma degree in Computer Science & Engineering. I studied basic programming, C, C++, Java, PHP, OOPs, DBMS, and Web Development.",
      logo: gpgayaLogo,
    },
    {
      title: "CBSE (X)",
      school: "GyanSthali Bhadeja Manpur, Gaya",
      duration: "May 2018",
      grade: "70%",
      description:
        "My class 10th education focused on science with computer fundamentals, building my early interest in technology and problem solving.",
      logo: cbseLogo,
    },
  ];

  return (
    <section className="relative bg-[#0e0e1a] py-16 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-400">Education</h2>
        <p className="text-gray-400 max-w-2xl mx-auto pt-3">
          My academic journey has equipped me with a strong technical foundation
          and problem-solving abilities.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute w-1 bg-purple-600 h-full left-1/2 transform -translate-x-1/2 z-0" />

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Line Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-[#0e0e1a] border-4 border-purple-600 rounded-full"></div>
              </div>

              <div
                className={`w-full md:w-1/2 px-4 ${
                  index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <EducationCard {...edu} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
