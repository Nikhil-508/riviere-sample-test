import React, { useEffect, useState } from 'react'
import './TopSection.css'
import { RiArrowDownSLine } from "react-icons/ri";
import { Assets } from '../Assets/Assets';

const TopSection = () => {

  const categories = [
    'Accessories',
    'Five Gallon Bottle',
    'Coupons',
    'Small Bottles'
  ];

  const [placeholder, setPlaceholder] = useState(categories[0]); // Initial placeholder
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % categories.length; // Cycle through categories
      setPlaceholder(categories[index]);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const images = [Assets.bannerimg1, Assets.bannerimg1, Assets.bannerimg1]; // Add multiple images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='top-container'>

      <div className='top-nav'>
        <div className='top-left'>
          <h1>Abu Dhabi <span><img src={Assets.downArrow} alt="" /></span></h1>
          <span>Shabiya</span>
        </div>
        <div className='top-right'>
          <img src={Assets.chatGif} alt="chatgif" />
          <img className='bell-Icon' src={Assets.bellIcon} alt="" />
          <h4>4</h4>
        </div>

      </div>
      <div className='search-bar'>
      <input type="text" placeholder={`Search "${placeholder}"`} />
        <img src={Assets.lens} alt="" />
      </div>
      <div className="banner-container">
      <div className="banner-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>

      {/* Tracking Dots */}
      <div className="tracking-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TopSection
