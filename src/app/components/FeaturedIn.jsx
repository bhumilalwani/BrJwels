'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const FeaturedIn = () => {
  return (
    <div className="pt-10 pb-20 px-[20px] flex flex-col justify-center items-center"> {/* Center container */}
       <h3 className='text-center text-2xl font-normal text-[var(--headings-color)] mb-12'>Featured In</h3>
      <div className="w-full pl-[15%] flex justify-center items-center"> {/* Wrapper for centering Swiper */}
       
        <Swiper
          className="w-[90%] sm:w-[80%] px-10" // Adjust width for responsiveness
          centeredSlides={true}
          spaceBetween={0} // Space between slides
          slidesPerView={3} // Visible slides
          loop={true} // Infinite loop
          autoplay={{ delay: 2500 }} // Auto slide every 2 seconds
          modules={[Autoplay, Pagination, Navigation]}
        >
          {/* Render each image inside a SwiperSlide */}
          {["https://assets.angara.com/assets/homepage-Assets/us/featured-in/vogue.svg?width=128&quality=95", "https://assets.angara.com/assets/homepage-Assets/us/featured-in/new-york-post-logo.svg?width=128&quality=95%201x,%20https://assets.angara.com/assets/homepage-Assets/us/featured-in/new-york-post-logo.svg?width=26&quality=95%202x", "https://assets.angara.com/assets/homepage-Assets/us/featured-in/forbes.svg?width=128&quality=95", "https://assets.angara.com/assets/homepage-Assets/us/featured-in/the-knot.svg?width=128&quality=95", "https://assets.angara.com/assets/homepage-Assets/us/featured-in/medium.svg?width=128&quality=95"].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-[70%] sm:w-[50%] lg:w-[30%]">
                <img
                  src={image}
                 alt="Featured Logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedIn;
