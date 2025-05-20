import React from "react";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiSpring } from "react-icons/si";

const WorkExperience = () => {
  return (
    // <div id="WorkExperience" className=" md:p-24">
    <div
      id="work-experience"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-gradient-to-tr from-sky-900 via-sky-950 to-sky-800 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 my-4 "
    >
      <h2 className="text-center text-4xl md:text-5xl font-extrabold  mb-5">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Work Experience
        </span>
      </h2>
      <div className="flex flex-wrap pt-8 items-center justify-around">
        {/* Tech Stack Icons Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#f8981d" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#68A063" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpring color="#6DB33F" size={50} />
          </span>
        </div>

        {/* Work Experience Details Section */}
        <div className="flex flex-col gap-8">
          {/* Experience 1 */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaJava color="#f8981d" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Java Developer, ICT Academy</h2>
              <p className="text-sm leading-tight font-thin">
                Sep 2024 - Sep 2024
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Worked on Java-based banking management system project.
                </li>
                <li>
                  - Gained experience in backend development and database
                  handling.
                </li>
              </ul>
            </span>
          </div>

          {/* Experience 2 */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaReact color="#61DAFB" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Full Stack Developer, Slash Mark
              </h2>
              <p className="text-sm leading-tight font-thin">
                Mar 2024 - May 2024
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Worked with MongoDB, Express, React, and Node.js to build
                  full-stack applications.
                </li>
                <li>
                  - Managed project workflows, user experience, and design
                  decisions.
                </li>
              </ul>
            </span>
          </div>

          {/* Experience 3 */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiMongodb color="#47A248" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Web Developer, Octanet Services</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2024 - Feb 2024
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Developed and designed responsive websites using HTML, CSS,
                  and JavaScript.
                </li>
                <li>
                  - Worked closely with UX/UI teams to improve user interfaces.
                </li>
              </ul>
            </span>
          </div>

          {/* Experience 4 */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiSpring color="#6DB33F" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Java & SQL Training, Besant Technologies
              </h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2023 - Sep 2023
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Trained in Java and SQL with hands-on experience in
                  real-world applications.
                </li>
                <li>
                  - Developed applications using Java and integrated them with
                  databases.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
