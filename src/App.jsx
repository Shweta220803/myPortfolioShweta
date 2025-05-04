import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LatestWork from "./pages/LatestWork";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import About from "./pages/About";
import SkillsAndTech from "./pages/SkillsAndTech";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="bg-sky-950 text-white">
        <Navbar />

        {/* Wrap each section with a div having an ID matching the navbar link */}
        <div id="home-section">
          <Home />
        </div>
        <div id="about-section">
          <About />
        </div>
        {/* <div id="projects-section">
          <Projects />
        </div> */}
        <div id="skills-section">
          <SkillsAndTech />
        </div>
        <div id="latest-work-section">
          <LatestWork />
        </div>

        <div id="experience-section">
          <Experience />
        </div>
        <div id="contact-section">
          <Contact />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
