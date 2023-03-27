// import React from 'react';
// import '../Styles/about.css';

// import ImageSlider from './ImageSlider';

// const AboutMe = () => {
//   return (
//     <div id="about" className="about-container">
//       {/* <h1 className="about-title">hi, i;m david</h1> */}
//       <div className="flex-container">
//         <div className="description-container">
//           <p className="description">Hello, I'm David</p>
//           <p className="sub-description">freelance Graphic Designer</p>
//         </div>
//         {/* <div className="slider-container"> */}
//         <ImageSlider />
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import React, { useState } from 'react';
import '../Styles/about.css';
import ImageSlider from './ImageSlider';

const AboutMe = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      id="about"
      className={`about-container ${
        isDarkTheme ? 'dark-theme' : 'light-theme'
      }`}
    >
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            onClick={handleToggleTheme}
            checked={isDarkTheme}
          />
          <span className="slider round"></span>
        </label>
        <span className="toggle-label">Toggle Theme</span>
      </div>
      <div className="flex-container">
        <div className="description-container">
          <p className="description">Hello, I'm David</p>
          <p className="sub-description">freelance Graphic Designer</p>
        </div>
        <ImageSlider />
      </div>
    </div>
  );
};

export default AboutMe;
