// import React from 'react';
// import '../Styles/contact.css';
// import { FaLinkedin, FaInstagram, FaBehance, FaPhone } from 'react-icons/fa';
// import { FiMail } from 'react-icons/fi';

// const Contact = ({ isDarkTheme }) => {
//   return (
//     <div
//       id="contact"
//       className={`contact-container ${isDarkTheme ? 'dark-mode' : ''}`}
//     >
//       <h1 className="contact-title">Contact</h1>
//       <div className="info-container">
//         <p className="contact-info">
//           <FiMail className="mail" />
//           davidko@gmail.com
//         </p>
//         <p className="contact-info contact-info2">
//           <FaPhone className="phone" />
//           +40 074 234 121
//         </p>
//       </div>

//       <div className="icons-container">
//         <div className="icons-text-container">
//           <p className="icons-text">FOLLOW ME</p>
//         </div>
//         <div className="icons-box">
//           <FaLinkedin size={30} color="#0e76a8" />
//           <a
//             href="https://www.behance.net/kakucsdavidaron"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaBehance size={30} color="#dd2a7b" />
//           </a>
//           <a
//             href="https://www.instagram.com/daaviddivaad/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram size={30} color="#dd2a7b" />
//           </a>
//         </div>
//       </div>
//       <div className="line">
//         <p className="bottom-text">©KakucsDavid</p>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import '../Styles/contact.css';
import { FaLinkedin, FaInstagram, FaBehance, FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useState } from 'react';

const Contact = ({ isDarkTheme }) => {
  console.log('isDarkTheme:', isDarkTheme);
  return (
    <div
      id="contact"
      className={`contact-container ${isDarkTheme ? 'dark-theme' : ''}`}
    >
      <h1 className={`contact-title ${isDarkTheme ? 'dark-mode-text' : ''}`}>
        reach out :)
      </h1>
      <div className="info-container">
        <p
          data-aos="fade-up"
          className={`contact-info ${isDarkTheme ? 'dark-mode-text' : ''}`}
        >
          kakucsdavidaron@gmail.com
        </p>
        <p
          data-aos="fade-up"
          className={`contact-info contact-info2 ${
            isDarkTheme ? 'dark-mode-text' : ''
          }`}
        >
          +40 0745 236 775
        </p>
      </div>

      <div className="icons-container">
        <div className="icons-text-container">
          <p className={`icons-text ${isDarkTheme ? 'dark-mode-text' : ''}`}>
            FOLLOW ME
          </p>
        </div>
        <div className="icons-box">
          <FaLinkedin size={30} color="#0e76a8" />
          <a
            href="https://www.behance.net/kakucsdavidaron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance size={30} color="#dd2a7b" />
          </a>
          <a
            href="https://www.instagram.com/davidkakucs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#dd2a7b" />
          </a>
        </div>
      </div>
      <div className="line">
        <p className={`bottom-text ${isDarkTheme ? 'dark-mode-text' : ''}`}>
          ©KakucsDavid
        </p>
      </div>
    </div>
  );
};

export default Contact;
