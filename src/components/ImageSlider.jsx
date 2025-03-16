import React, { useState } from 'react';

const images = [
  '/prince1.jpg',
  'princeteam.jpeg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-md mb-8">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Prince ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg text-white"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg text-white"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;