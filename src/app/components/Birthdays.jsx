'use client';
import React, { useState } from 'react';

const Birthdays = () => {
  const images = [
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",

    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className='flex flex-col mt-[5vh]'>
        <h4 className='font-semibold text-2xl text-center'>Make Birthdays More Colorful</h4>
    <div className="relative w-[70%] mx-auto mt-[6vh] mb-[10vh] overflow-hidden">
      {/* Previous Button */}
      <button
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white z-10 ${
          currentIndex === 0 ? 'opacity-50' : ''
        }`}
        onClick={handlePrev}
        // disabled={currentIndex === 0}
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>

      {/* Swiper Wrapper */}
      <div className="flex justify-center items-center">
        <div
          className="swiper-wrapper flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 10}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              className="swiper-slide flex flex-col justify-center items-center w-full shrink-0"
              key={index}
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                className="w-[4vw] h-[8vh]"
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <h3 className="text-gray-400 mt-2">January</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white z-10 ${
          currentIndex === images.length - 1 ? 'opacity-50 ' : ''
        }`}
        onClick={handleNext}
        // disabled={currentIndex === images.length - 1}
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
        
        <div className='w-full h-[80%] cursor-pointer'>
            <img className='w-[100%] h-[100%]' src="http://127.0.0.1:5500/angara/img/banner-2.jpg" alt="" />
        </div>
        
    </div>
  );
};

export default Birthdays;
