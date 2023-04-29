// import { useRef } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import '../Styles/main.css';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle('responsive_nav');
//   };
//   const closeNavbar = () => {
//     navRef.current.classList.remove('responsive_nav');
//   };

//   return (
//     <header>
//       <h3>LOGO</h3>
//       <nav ref={navRef}>
//         {/* <a href="/#">Home</a> */}
//         <a href="#about" onClick={() => closeNavbar()}>
//           about
//         </a>
//         <a href="#work" onClick={() => closeNavbar()}>
//           Work
//         </a>
//         <a href="#contact" onClick={() => closeNavbar()}>
//           Contact
//         </a>
//         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//           <FaTimes />
//         </button>
//       </nav>
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// export default Navbar;

// import { useRef } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import '../Styles/main.css';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navRef = useRef();
//   const navigate = useNavigate();

//   const showNavbar = () => {
//     navRef.current.classList.toggle('responsive_nav');
//   };
//   const closeNavbar = () => {
//     navRef.current.classList.remove('responsive_nav');
//   };

//   const handleJumpToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//     closeNavbar();
//   };

//   return (
//     <header>
//       <h3>LOGO</h3>
//       <nav ref={navRef}>
//         <a onClick={() => handleJumpToSection('about')}>about</a>
//         <a onClick={() => handleJumpToSection('work')}>Work</a>
//         <a onClick={() => handleJumpToSection('contact')}>Contact</a>
//         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//           <FaTimes />
//         </button>
//       </nav>
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// export default Navbar;

import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const closeNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  const handleJumpToSection = (id) => {
    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
    closeNavbar();
  };

  return (
    <header>
      <h3 className="logo">LOGO</h3>
      <nav className="nav" ref={navRef}>
        <a onClick={() => handleJumpToSection('about')}>ABOUT</a>
        <a onClick={() => handleJumpToSection('work')}>WORK</a>
        <a onClick={() => handleJumpToSection('contact')}>CONTACT</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes fill="white" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars fill="white" />
      </button>
    </header>
  );
}

export default Navbar;
