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
    // <div className="mt-[10vh] w-full min-h-[60vh] relative py-[5vh] mx-auto sm:px-[5%] flex flex-col pb-[20vh] pt-[40%] md:pt-[20%] bg-[#F5F5F6]">
    //  
    //   <div className="flex flex-col justify-center items-center -mt-[50%] sm:-mt-[8vh] mx-auto">
    //   {/* Buttons Section */}
    //   <div className="grid grid-cols-2 md:hidden mt-[55vw] sm:mt-[0vh] gap-4 sm:gap-4 w-[100%] sm:w-[100%] mx-auto p-2">
    //     {videos.map((video, index) => (
    //       <button
    //         key={video.id}
    //         className={`flex gap-[5%] items-center relative w-[100%] p-1 rounded-md sm:w-[100%] px-2 transition ${
    //           index === currentIndex
    //             ? "bg-gray-300 "
    //             : "bg-white "
    //         } hover:bg-gray-400 hover:text-gray-800`}
    //         onClick={() => setCurrentIndex(index)}
    //       >
    //         <img
    //           src={video.poster}
    //           alt={video.title}
    //           className="w-[36px] absolute -left-[10%] h-[40px] sm:w-[46px] md:w-[52px] md:h-[55px] sm:h-[50px] rounded-full mb-2"
    //         />
    //         <span className="text-sm sm:text-lg ml-[5vw] font-semibold">{video.title}</span>
    //       </button>
    //     ))}
    //   </div>
    // </div>
  
// 

    // </div>

        <div className='grid grid-cols-1 md:grid-cols-2 w-[100%] py-8 bg-[#F5F5F6] px-10'>
 <div className="flex flex-col w-[100%] items-center">
        
          <div className='flex flex-col items-start justify-center px-5 mx-auto'>
            <h3 className="mb-[1vh] text-lg font-semibold mt-[5%] md:mt-[0%]">Our 8 Cs Promise</h3>
           <p className=" text-sm">
             Unlike other e-tailers, we powered a 400-year legacy in gemstones and jewelry-making with cutting-edge
             technology to make bespoke fine jewelry accessible for the very first time. Without the middlemen, you can
             count on us to deliver your dream jewelry at high speed, and with 30 percent more value.
           </p></div>

          
        </div>
   
      <div className="mt-[5%] flex items-center justify-start sm:justify-center px-5">
          <VideoCarousel className="fit-cover" currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
       
        </div>

         {/* Buttons Section */}
      <div className="grid md:-mt-[20%] lg:-mt-[40%] xl:-mt-[60%] grid-cols-2 content-center w-[90%] sm:w-[90%] md:w-[80%] lg:w-[80%] mt-[6%] mx-auto lg:ml-[20%] mr-[2vh]">
         {videos.map((video, index) => (
          <button
            key={video.id}
            className={`flex rounded-[4px] gap-[5%] w-[16vh] pr-10 shrink-0 items-center mb-2 transition ${
              index === currentIndex
                ? "bg-gray-300 "
                : "bg-white "
            } hover:bg-gray-200 hover:text-gray-800`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={video.poster}
              alt={video.title}
              className="w-[40px] shrink-0 h-[40px] mt-2 -ml-[20%] rounded-full mb-2"
            />
            <span className="text-xs text-gray-600 font-semibold">{video.title}</span>
          </button>
        ))}
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
      <div className="relative w-[75%] lg:w-[75%]">
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
        <div className="flex justify-center mt-[6px] space-x-4">
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
