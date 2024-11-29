'use client'

import React from 'react'
import { useState } from 'react';


const Edit = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sections = [
        { title: "Know About Sapphire", image:"https://gem-a.com/images/GemHub/Gem_knowledge/zircon/34_Blue_Zircon_GemA_HM.jpg", description: "Learn and shop" },
        { title: "Know About Blue Sapphire", image:"https://gem-a.com/images/GemHub/Gem_knowledge/zircon/34_Blue_Zircon_GemA_HM.jpg", description: "Learn and shop" },
        { title: "Know About Sapphire", image:"https://gem-a.com/images/GemHub/Gem_knowledge/zircon/34_Blue_Zircon_GemA_HM.jpg", description: "Learn and shop" },
        { title: "Know About Sapphire", image:"https://gem-a.com/images/GemHub/Gem_knowledge/zircon/34_Blue_Zircon_GemA_HM.jpg", description: "Learn and shop" },
        { title: "Know About Sapphire", image:"https://gem-a.com/images/GemHub/Gem_knowledge/zircon/34_Blue_Zircon_GemA_HM.jpg", description: "Learn and shop" },
      ];
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? sections.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Gemstone Collection</h2>
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 60}%)` }}
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[65%] bg-white p-6 rounded-lg shadow-lg mx-4 text-center"
              >
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <img className="sm:w-[30%] w-[50%] h-[30%] sm:h-[50%] ml-[50%] -translate-x-[50%] rounded-[10px] my-[4vh] sm:my-[8vh]" src={section.image} alt="" />
                <p className="text-gray-700">{section.description}</p>
              </div>
            ))}
          </div>
  
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
          >
            ←
          </button>
  
          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
          >
            →
          </button>
        </div>
      </div>
    );
  };

export default Edit
