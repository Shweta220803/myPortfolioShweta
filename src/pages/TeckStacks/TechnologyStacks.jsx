import React from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { useSpring, animated } from "@react-spring/web";

const TechnologyStacks = () => {
  // Animation for the icons
  const animation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.5)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="p-5 sm:p-10">
      <h2 className="text-center pt-5 text-4xl md:text-5xl lg:text-6xl font-bold border-b-2 border-red-500 p-5">
        Technologies Stack
      </h2>
      <p className="text-center text-gray-300 pt-4">
        👉 Including programming languages, databases, development frameworks, etc.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 text-center">
        {/* Each technology is animated */}
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaJava className="inline-block text-red-600 text-[2.5rem]" />
          <p>Java</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <SiCplusplus className="inline-block text-blue-500 text-[2.5rem]" />
          <p>C++</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <SiMysql className="inline-block text-orange-500 text-[2.5rem]" />
          <p>MySQL</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaJs className="inline-block text-yellow-500 text-[2.5rem]" />
          <p>JavaScript</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaReact className="inline-block text-blue-600 text-[2.5rem]" />
          <p>React JS</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaNodeJs className="inline-block text-green-600 text-[2.5rem]" />
          <p>Node JS</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <SiExpress className="inline-block text-gray-600 text-[2.5rem]" />
          <p>Express JS</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <SiMongodb className="inline-block text-green-500 text-[2.5rem]" />
          <p>MongoDB</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaPhp className="inline-block text-indigo-600 text-[2.5rem]" />
          <p>PHP</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaHtml5 className="inline-block text-orange-500 text-[2.5rem]" />
          <p>HTML</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaCss3Alt className="inline-block text-blue-600 text-[2.5rem]" />
          <p>CSS</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <FaBootstrap className="inline-block text-purple-600 text-[2.5rem]" />
          <p>Bootstrap</p>
        </animated.div>
        <animated.div className="p-4 border rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" style={animation}>
          <SiTailwindcss className="inline-block text-teal-500 text-[2.5rem]" />
          <p>Tailwind CSS</p>
        </animated.div>
      </div>
    </div>
  );
};

export default TechnologyStacks;
