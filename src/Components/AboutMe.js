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

import React, { useState, useEffect } from 'react';
import '../Styles/about.css';
import ImageSlider from './ImageSlider';
import AOS from 'aos';

const AboutMe = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      id="about"
      className={`about-container ${
        isDarkTheme ? 'dark-theme' : 'light-theme'
      }`}
    >
      <div className="flex-container">
        <div className="description-container">
          <p className="description">Hello, I'm David</p>
          <p className="sub-description">freelance graphic designer</p>
          <p className="descriptionnn" data-aos="fade-up">
            I am assisting brands and businesses in transforming their ideas
            into reality by developing long-lasting, unique visual identities
            and inspiring worlds that captivate their target audience.
          </p>
        </div>
        <ImageSlider />
      </div>
    </div>
  );
};

export default AboutMe;
