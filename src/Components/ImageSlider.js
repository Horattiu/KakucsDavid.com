// import React, { useState, useEffect } from 'react';
// import '../Styles/imageslider.css';

// import aguita1 from '../img/slider/aguita1.jpg';
// import busho1 from '../img/slider/busho1.jpg';
// import kapacs2 from '../img/slider/kapacs2.png';
// import wagner6 from '../img/slider/wagner6.png';

// const ImageSlider = () => {
//   const [index, setIndex] = useState(0);
//   const images = [aguita1, busho1, kapacs2, wagner6];
//   const delay = 1000; // 3 seconds

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((index + 1) % images.length);
//     }, delay);
//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <div className="slider-container">
//       <img className="slider-img" src={images[index]} alt="slider" />
//     </div>

//   );
// };

// export default ImageSlider;

// ////////////////////

// import React, { useState, useEffect } from "react";
// import "../Styles/imageslider.css";

// import aguita1 from "../img/slider/aguita1.jpg";
// import busho1 from "../img/slider/busho1.jpg";
// import kapacs2 from "../img/slider/kapacs2.png";
// import wagner6 from "../img/slider/wagner6.png";

// const ImageSlider = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((currentImage) =>
//         currentImage === images.length - 1 ? 0 : currentImage + 1
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const images = [aguita1, busho1, kapacs2, wagner6];

//   return (
//     <div className="slider-container">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           className={`slider-img ${
//             index === currentImage ? "active" : ""
//           }`}
//           src={image}
//           alt="slider"
//         />
//       ))}
//     </div>
//   );
// };

// export default ImageSlider;

// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import '../Styles/imageslider.css';

import aguita1 from '../img/slider/aguita1.jpg';
import busho1 from '../img/slider/busho1.jpg';
import kapacs2 from '../img/slider/kapacs2.png';
import wagner6 from '../img/slider/wagner6.png';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: aguita1,
      alt: 'Aguita 1',
    },
    {
      image: busho1,
      alt: 'Busho 1',
    },
    {
      image: kapacs2,
      alt: 'Kapacs 2',
    },
    {
      image: wagner6,
      alt: 'Wagner 6',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 680);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <img
          key={index}
          className={`slider-img ${index === currentSlide ? 'active' : ''}`}
          src={slide.image}
          alt={slide.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
