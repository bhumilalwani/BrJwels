'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import Headings from './Headings';

const Birthdays = () => {
  const images = [
    { image: 'https://assets.angara.com/assets/homepage-Assets/us/birthstones/january.jpg?width=128&quality=95', month: 'January' },
    { image: 'https://assets.angara.com/assets/homepage-Assets/us/birthstones/december.jpg?width=128&quality=95', month: 'February' },
    { image: 'https://assets.angara.com/assets/homepage-Assets/us/birthstones/august.jpg?width=128&quality=95', month: 'March' },
    { image: 'https://assets.angara.com/assets/homepage-Assets/us/birthstones/april.jpg?width=128&quality=95', month: 'April' },
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/may.jpg?width=128&quality=95", month:"May"},
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/june.jpg?width=128&quality=95", month:"June"},
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/july.jpg?width=128&quality=95", month:"July"},
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/august.jpg?width=128&quality=95", month:"August"},
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/september.jpg?width=128&quality=95", month:"September"},
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/october.jpg?width=128&quality=95", month:"October"},
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/november.jpg?width=128&quality=95", month:"November"},
    { image:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/december.jpg?width=128&quality=95", month:"December"},
   

  ];

  return (
    <div className="flex flex-col mt-[5vh] ">
     
      <Headings text="Make Birthdays More Colorful"></Headings>
      <div className="mySwiperBirthdayWraper relative w-[70%] mx-auto mt-[6vh] mb-[10vh]">
      <Swiper
        rewind={true}
        navigation={true} 
        
        modules={[Navigation]}
        className="mySwiperBirthday px-10"
        slidesPerView={8}
        breakpoints={{
            50:{
                slidesPerView:1,
            
            },
            350:{
                slidesPerView:3
            },
            600:{
                slidesPerView:5
            },
            740:{
                slidesPerView:8
            }
        }}
      >
          {images.map((image, index) => (
            <SwiperSlide className="w-[300px] h-[300px]" key={index}>
              <div className="flex flex-col justify-center rounded-[10px] p-[10px] transition duration-300 hover:bg-gray-100 group cursor-pointer ml-[20px] items-center">
                <img className="w-[20%] scale-75 h-[35%]" src={image.image} alt={`Slide ${index + 1}`} />
                <h3 className="text-[var(--primary-800)] mt-2 group-hover:underline">{image.month}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-[80%] sm:h-[30vh] sm:h-[70vh] mb-[4vh] sm:mb-[10vh] cursor-pointer">
        <img
          className="w-full h-[100%]"
          src="https://assets.angara.com/promotion/NewHomePage2024/HomepageGiftingMainBannerDesktop.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Birthdays;
