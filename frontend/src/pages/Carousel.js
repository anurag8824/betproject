

import React, { useEffect, useState } from "react";

const Carousel = () => {
  const images = ["/banner.jpeg", "/banner2.jpeg", "/banner.jpeg", "/banner2.jpeg", "/banner.jpeg", "/banner2.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Only re-run effect when `currentIndex` changes

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first slide after last
  };

  // Dot navigation click handler
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (

    <div className="mr-0">
    <div className="relative w-full h-1/2 bg-red-700  overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex  transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex + 1) * 100}%)`, // Move carousel to the next slide
        }}
      >
        {/* Slide Content */}
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            className="w-full flex-shrink-0"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
