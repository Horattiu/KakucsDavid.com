import React, { useState, useEffect } from 'react';
import '../Styles/imageslider.css';

import aguita1 from '../img/slider/aguita1.jpg';
import busho1 from '../img/slider/busho1.jpg';
import kapacs2 from '../img/slider/kapacs2.png';
import wagner6 from '../img/slider/wagner6.png';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const images = [aguita1, busho1, kapacs2, wagner6];
  const delay = 1000; // 3 seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % images.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="slider-container">
      <img className="slider-img" src={images[index]} alt="slider" />
    </div>
    
  );
};

export default ImageSlider;
