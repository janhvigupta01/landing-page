"use client"
import React, { useState } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/ocean.jpg',
    '/fish-coco-cola.png',
    '/front.png',
    '/water-pollution.png',
    '/scream.png'
    // Add more image URLs here for additional slides
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-4 relative">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          alt="Hero"
          className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center ${index === currentSlide ? '' : 'hidden'}`}
          height="400"
          src={imageUrl}
          width="1200"
        />
      ))}
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={prevSlide}>
        Prev
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
