'use client'
import React from 'react'
import { useState, useEffect } from 'react';

const LeftRightSec = () => {
  return (
    <div className='mt-[10vh]'>
      <div className='flex w-[90%] items-center gap-0'>
        <div className='w-[60%] flex-col ml-[30px] pr-[10px] pt-[10vh] pl-[20vh] items-center justify-start h-[30vh] bg-[#F5F5F6]'>
            <h3 className='mb-[3vh]'>Our 8 Cs Promise</h3>
            <p>Unlike other e-tailers, we powered a 400-year legacy in gemstones and jewelry-making with cutting-edge technology to make bespoke fine jewelry accessible for the very first time. Without the middlemen, you can count on us to deliver your dream jewelry at high speed, and with 30 percent more value.</p>
            <div></div>
        </div>
        <div className='bg-green-700 w-[40%]'>
            <VideoCarousel></VideoCarousel>
        </div>
      </div>
    </div>
  )
}


const VideoCarousel = () => {
  const videos = [
    {
      id: 0,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_publisher.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_06-care.mp4",
    },
    {
      id: 1,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_01-color.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_01.mp4",
    },
    {
      id: 2,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_02-cut.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_02-cut.mp4",
    },
    {
      id: 3,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_03-curation.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_03-curation.mp4",
    },
    {
      id: 4,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_04-customization.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_04-customization.mp4",
    },
    {
      id: 5,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_05-carftmenship.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_05-carftmenship.mp4",
    },
    {
      id: 6,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_06-care.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_06-care.mp4",
    },
    {
      id: 7,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_07-cost.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_07-cost.mp4",
    },
    {
      id: 8,
      poster: "https://assets.angara.com/assets/8cwidget/video/us/poster/8cs_08-Reviews.jpg",
      src: "https://assets.angara.com/assets/8cwidget/video/us/8Cs_06-care.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [videos.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-opacity duration-500 ease-in-out"
        style={{ width: `${videos.length * 270}px`, transform: `translateX(-${currentIndex * 270}px)` }}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative w-[270px] flex-shrink-0 transition-opacity duration-500 ease-in-out"
          >
            <video
              autoPlay
              muted
              id={`video-${video.id}`}
              poster={video.poster}
              width="278"
              height="278"
              playsInline
              preload="metadata"
              style={{ width: "100%", display: "inline-block" }}
              src={video.src}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

  

export default LeftRightSec
