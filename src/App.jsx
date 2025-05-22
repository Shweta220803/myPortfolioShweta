import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="bg-sky-950 text-white w-full overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-sky-950 text-white ">
                <div id="home-section">
                  <Home />
                </div>
                <div id="about-section">
                  <About />
                </div>
                <div id="skills-section">
                  <Skills />
                </div>
                <div id="projects-section">
                  <Projects />
                </div>
                <div id="education-section">
                  <Education />
                </div>
                <div id="experience-section">
                  <Experience />
                </div>
                <div id="contact-section">
                  <Contact />
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
