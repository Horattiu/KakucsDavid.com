// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Work from './Components/Work';
// import AboutMe from './Components/AboutMe';
// import Contact from './Components/Contact';
// import Home from './Components/Home';
// import ProjectDetails from './Components/ProjectDetails';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/aboutme" element={<AboutMe />} />
//         <Route path="/work" element={<Work />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/projects/:id" element={<ProjectDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Work from './Components/Work';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Home from './Components/Home';
import ProjectDetails from './Components/ProjectDetails';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Router>
        <Navbar onToggleMode={handleToggleMode} />

        <Routes>
          <Route exact path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route
            path="/aboutme"
            element={<AboutMe isDarkMode={isDarkMode} />}
          />
          <Route path="/work" element={<Work isDarkMode={isDarkMode} />} />
          <Route
            path="/contact"
            element={<Contact isDarkMode={isDarkMode} />}
          />
          <Route
            path="/projects/:id"
            element={<ProjectDetails isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
