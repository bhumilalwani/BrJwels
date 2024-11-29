
'use client'
import React from 'react'
import { useState } from 'react';

const CustomerReview = () => {
  
       const [currentIndex, setCurrentIndex] = useState(0);

       const reviews = [
        { name: "John Doe", rating: 5, feedback: "Amazing service and great quality!" },
        { name: "Jane Smith", rating: 4, feedback: "Very satisfied, would recommend!" },
        { name: "Sam Wilson", rating: 5, feedback: "Exceeded my expectations!" },
        { name: "Lisa Brown", rating: 3, feedback: "Good, but could improve in some areas." },
        { name: "Mark Lee", rating: 4, feedback: "Great experience overall!" },
      ];
const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
};

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
};

return (
  <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
    <div className="relative w-full max-w-lg overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-4 bg-white rounded-lg shadow-md mx-2 text-center"
          >
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
            <p className="text-gray-600 mt-2">{review.feedback}</p>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
        onClick={handlePrev}
      >
       <i className="ri-arrow-left-line"></i>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-black rounded-full p-2"
        onClick={handleNext}
      >
       <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  </div>
);


 
}

export default CustomerReview
