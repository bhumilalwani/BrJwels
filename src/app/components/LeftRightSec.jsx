'use client';
import React, { useState, useEffect } from 'react';

const LeftRightSec = () => {
const [currentIndex, setCurrentIndex] = useState(0);
    const videos = [
        {
          id: 0,
          title:"Color",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_publisher.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_06-care.mp4",
        },
        {
          id: 1,
          title:"Cut",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_01-color.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_01.mp4",
        },
        {
          id: 2,
          title:"Curation",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_02-cut.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_02-cut.mp4",
        },
        {
          id: 3,
          title:"Customize",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_03-curation.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_03-curation.mp4",
        },
        {
          id: 4,
          title:"Craftsman",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
        },
        {
          id: 5,
          title:"Care",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
        },
        {
          id: 6,
          title:"Cost",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
        },
        {
          id: 7,
          title:"Communication",
          poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
          src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
        },
      ];

      

  return (
    <div className="mt-[10vh] mx-auto sm:px-[5%] flex flex-col">
      <div className="flex flex-col sm:flex-row w-full items-center">
        <div className="w-full sm:w-[60%] flex flex-col ml-[30px] sm:pr-[10px] p-[2vh] sm:pt-[6vh] sm:pb-[5vh] sm:pl-[20vh] items-start justify-start h-fit bg-[#F5F5F6]">
          <h3 className="mb-[1vh] text-lg font-semibold">Our 8 Cs Promise</h3>
          <p className="min-w-[20vw] text-sm">
            Unlike other e-tailers, we powered a 400-year legacy in gemstones and jewelry-making with cutting-edge
            technology to make bespoke fine jewelry accessible for the very first time. Without the middlemen, you can
            count on us to deliver your dream jewelry at high speed, and with 30 percent more value.
          </p>
        </div>
        <div className="sm:w-[40%] w-[80%] ">
          <VideoCarousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
        
        
      </div>
      <div className="flex flex-col justify-center items-center mt-[4vh] bg-gray-50">
      {/* Buttons Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-1 w-[100%] sm:w-[40%] mx-auto p-2">
        {videos.map((video, index) => (
          <button
            key={video.id}
            className={`flex gap-[5%] items-center p-1 rounded-md -mt-[10%] sm:mt-[0%] sm:w-[80%] transition ${
              index === currentIndex
                ? "bg-gray-300 "
                : "bg-white "
            } hover:bg-gray-400 hover:text-gray-800`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={video.poster}
              alt={video.title}
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] rounded-full mb-2"
            />
            <span className="text-sm sm:text-lg font-semibold">{video.title}</span>
          </button>
        ))}
      </div>
    </div>
  
    </div>
  );
};

const VideoCarousel = (props) => {
    const videos = [
      {
        id: 0,
        title:"Color",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_publisher.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_06-care.mp4",
      },
      {
        id: 1,
        title:"Cut",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_01-color.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_01.mp4",
      },
      {
        id: 2,
        title:"Curation",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_02-cut.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_02-cut.mp4",
      },
      {
        id: 3,
        title:"Customize",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_03-curation.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_03-curation.mp4",
      },
      {
        id: 4,
        title:"Craftsman",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
      },
      {
        id: 5,
        title:"Care",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
      },
      {
        id: 6,
        title:"Cost",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
      },
      {
        id: 7,
        title:"Communication",
        poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
        src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
      },
    ];
  
    // const [currentIndex, setCurrentIndex] = useState(0);
  
  
  
    return (
      <div className="relative w-full">
        {/* Video Player */}
        <div className="relative">
          <video
            key={videos[props.currentIndex].id}
            autoPlay
            muted
            loop
            poster={videos[props.currentIndex].poster}
            className="w-full h-auto"
            src={videos[props.currentIndex].src}
          />
        </div>
  
        {/* Navigation */}
        <div className="flex justify-center mt-[10px] space-x-4">
          {videos.map((video, index) => (
            <button
              key={video.id}
              className={`w-4 h-1 ${
                index === props.currentIndex ? 'bg-gray-500' : 'bg-gray-200'
              }`}
              onClick={() => props.setCurrentIndex(index)}
              aria-label={`Go to video ${index + 1}`}
            />

            
          ))}
        </div>


  
        {/* Controls */}
        {/* <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
          aria-label="Previous video"
        >
          &lt;
        </button> */}
        {/* <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
          aria-label="Next video"
        >
          &gt;
        </button> */}
      </div>
    );
  };
  

export default LeftRightSec;
