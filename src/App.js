// import React from 'react';
// import { BrowserRouter as Router} from 'react-router-dom'; 
// import HomePage from './pages/HomePage';
// import LatestWork from './pages/projects/LatestWork';
// import ContactPage from './pages/contact/ContactPage';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import AboutPage from './pages/about/AboutPage';
// import Projects from './pages/projects/Projects';
// import Skills from './pages/Skills';
// import TechnologyStacks from './pages/TeckStacks/TechnologyStacks';
// import WorkExperience from './pages/work/WorkExperience';

// const App = () => {
//   return (
//     <Router>

//       <div className='bg-sky-950 h-screen-full text-white'>
//         <Navbar />
//         <HomePage />
//         <AboutPage />
//         <Projects />
//         <Skills />
//         <LatestWork />
//         <TechnologyStacks />
//         <WorkExperience />
//         <ContactPage />

//         <Footer />
//       </div>
//       </Router>

//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import LatestWork from './pages/projects/LatestWork';
import ContactPage from './pages/contact/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/about/AboutPage';
import Projects from './pages/projects/Projects';
import Skills from './pages/Skills';
import TechnologyStacks from './pages/TeckStacks/TechnologyStacks';
import WorkExperience from './pages/work/WorkExperience';

const App = () => {
  return (
    <Router>
      <div className='bg-sky-950 text-white'>
        <Navbar />

        {/* Wrap each section with a div having an ID matching the navbar link */}
        <div id="home-section">
          <HomePage />
        </div>
        <div id="about-section">
          <AboutPage />
        </div>
        <div id="projects-section">
          <Projects />
        </div>
        <div id="skills-section">
          <Skills />
        </div>
        <div id="latest-work-section">
          <LatestWork />
        </div>
        <div id="technology-stacks-section">
          <TechnologyStacks />
        </div>
        <div id="experience-section">
          <WorkExperience />
        </div>
        <div id="contact-section">
          <ContactPage />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
