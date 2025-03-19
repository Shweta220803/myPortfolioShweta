import React from "react";

const ProjectCard = ({ title, main, image, demoLink, sourceCodeLink }) => {
  return (
    <div className="p-5 flex flex-col w-full sm:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform transform hover:scale-105">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={image}
        alt={title}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-4 text-white">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-400">
        {main}
      </p>
      <div className="mt-4 p-2 flex gap-2 md:gap-4 justify-center">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105"
          >
            Demo
          </a>
        )}
        {sourceCodeLink && (
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
