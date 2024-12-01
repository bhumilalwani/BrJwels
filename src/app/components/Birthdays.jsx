'use client';
import React, { useState } from 'react';

const Birthdays = () => {
  const images = [
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://assets.angara.com/assets/homepage-Assets/us/birthstones/december.jpg?width=128&quality=95",
    "https://assets.angara.com/assets/homepage-Assets/us/birthstones/august.jpg?width=128&quality=95",
    "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png",
    "https://assets.angara.com/assets/homepage-Assets/us/birthstones/november.jpg?width=128&quality=95",
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
    <div className='flex flex-col mt-[5vh] overflow-hidden px-[10vw]'>
            <h4 className='font-semibold text-2xl text-center'>Make Birthdays More Colorful</h4>
     <div className='flex flex-row items-center'>
       {/* Previous Button */}
       <button
          className={`transform -mt-[8vh] text-3xl z-10 ${
            currentIndex === 0 ? 'hidden' : ''
          }`}
          onClick={handlePrev}
        >
          <i className="ri-arrow-left-s-line text-black text-lg"></i>
        </button>
      <div className="relative w-[70%] mx-auto mt-[6vh] mb-[10vh] overflow-hidden">
     

        {/* Swiper Wrapper */}
        <div className="flex justify-center gap-[10px] w-fit overflow-hidden items-center">
          <div
            className="swiper-wrapper flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div
                className="swiper-slide flex flex-col justify-center rounded-[10px] p-[10px] hover:bg-gray-100 group cursor-pointer ml-[20px] items-center w-full shrink-0"
                key={index}
                style={{ width: `${100 / images.length}%` }}
              >
                <img
                  className="w-[30%] h-[45%]"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <h3 className="text-gray-500 mt-2 group-hover:underline">January</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
       
      </div>
      <button
          className={`-mt-[8vh] transform text-3xl z-10 ${
            currentIndex === images.length - 3 ? 'hidden' : ''
          }`}
          onClick={handleNext}
        >
          <i className="ri-arrow-right-s-line text-black text-lg"></i>
        </button></div> 
      <div className='w-full h-[80%] sm:h-[30vh] sm:h-[50vh] mb-[4vh] sm:mb-[10vh] cursor-pointer'>
        <img className='w-full h-[100%]' src="https://assets.angara.com/promotion/NewHomePage2024/HomepageGiftingMainBannerDesktop.jpg" alt="" />
      </div>
    </div>
  );
};

export default Birthdays;
