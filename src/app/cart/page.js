'use client'

import React from 'react'
import StaticNav from '../components/StaticNav';
import DynamicNav from '../components/DynamicNav';
import { useState } from 'react';
import Link from 'next/link';
import FooterLastestStrip from '../components/FooterLastestStrip';
import LastFooter from '../components/LastFooter';

const Page = () => {
  return (
    <div className='flex justify-center flex-col'>
        <StaticNav></StaticNav>
        <DynamicNav></DynamicNav>
      <div className='flex flex-col items-center justify-center gap-6 my-5'>
        <h2 className='text-sm font-bold text-gray-800'>Your Shopping Bag is Empty.</h2>
        <h4 className='text-sm text-center'>To begin shopping, view our bestsellers and new <br></br> arrivals below or click <span className='underline text-black text-sm font-semibold'>here</span> to view the entire collection</h4>
      </div>
      <div className='flex items-center justify-center w-[100%] mt-[1vh] mb-[3vh]'><div className='bg-gray-400 h-[2px] w-[95%]'></div></div>
        <div className='flex flex-col items-center justify-center mb-4 mt-[5vh]'>
            <h2 className='text-2xl mb-10 text-gray-800'>Customer Favorites</h2>
            <ProductSlider></ProductSlider>
        </div>
        <hr></hr>
        <div className='flex my-4 flex-col w-[100%] items-center justify-center'>
            <h2 className='text-2xl text-center font-normal text-gray-800'>Shop Our New Arrivals</h2>
            <div className='flex items-center w-[100%] justify-center'>
               <ProductSliderSecond></ProductSliderSecond>
            </div>
        </div> 
        {/* <LastFooter></LastFooter> */}
        <div>

        </div>
         <FooterLastestStrip bg="#F5F5F6"></FooterLastestStrip>
    </div>
  )
}

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure each product has a unique id
  const products = [
    { id: 1, name: 'Product 1', price: '$99.99', image: "https://assets.angara.com/pendant/sp0530g/9x7mm-aaaa-garnet-white-gold-pendant.jpg?width=360&quality=95" },
    { id: 2, name: 'Product 2', price: '$89.99', image: "https://assets.angara.com/pendant/sp0530g/9x7mm-aaaa-garnet-white-gold-pendant.jpg?width=360&quality=95" },
    { id: 3, name: 'Product 3', price: '$79.99', image: "https://assets.angara.com/pendant/sp0530g/9x7mm-aaaa-garnet-white-gold-pendant.jpg?width=360&quality=95" },
    { id: 4, name: 'Product 4', price: '$79.99', image: "https://assets.angara.com/pendant/sp0530g/9x7mm-aaaa-garnet-white-gold-pendant.jpg?width=360&quality=95" },
    { id: 5, name: 'Product 5', price: '$89.99', image: "https://assets.angara.com/pendant/sp0530g/9x7mm-aaaa-garnet-white-gold-pendant.jpg?width=360&quality=95" },
    { id: 6, name: 'Product 6', price: '$99.99', image: "https://assets.angara.com/pendant/sp0530g/9x7mm-aaaa-garnet-white-gold-pendant.jpg?width=360&quality=95" },
  ];

  const totalProducts = products.length;

  const showProduct = (index) => {
    if (index < 0) return totalProducts - 1;
    if (index >= totalProducts) return 0;
    return index;
  };

  const handlePrev = () => {
    setCurrentIndex(showProduct(currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(showProduct(currentIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform sm:-left-[4vw] left-[10px] -translate-y-1/2 bg-gray-800 text-gray-200 text-xl font-thin px-4 py-2 rounded-full z-10"
      >
        &#10094; {/* Left arrow */}
      </button>

      {/* Slider container */}
      <div className="relative w-[100%] overflow-x-scroll overflow-y-hidden scrollbar-hidden">
        <div
          className="flex gap-0 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 720}px)`, // Moving by 240px for each item
            width: `${totalProducts * 240}px`, // Total width of the container for all items
          }}
        >
         {products.map((product) => (
  <div key={product.id} className="group relative flex-shrink-0 w-[50%] sm:w-[240px]">
    <div className="text-center flex flex-col items-center w-[60%] p-4 bg-white">
      <img src={product.image} alt={product.name} className="w-[50%] h-[80%] fit-contain rounded-lg mb-4" />
   
    </div>
    
    {/* This div will slide up on hover */}
    <div className="absolute bottom-0 w-[100%] bg-white py-6 bg-opacity-75 group-hover:translate-y-0 translate-y-full text-black text-xs font-normal flex flex-col items-center justify-center gap-5 transition-all duration-500 ease-in-out">
    <div className='opacity-100 w-[100%] flex flex-col items-center justify-center gap-2 -ml-[35%] pb-4'><h3>Aquamarine Infinity Heart</h3>
      <h2>Pendant with diamonds</h2>
      <h2>$942.5</h2>
    </div>
    </div>
  </div>
))}
           
        </div>
     
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-[10px] sm:-right-[4vw] transform -translate-y-1/2 bg-gray-800 px-4 py-2 rounded-full text-gray-200 text-xl font-thin z-10"
      >
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};


const ProductCard = ({ image, belowImage }) => {
    return (
      <div className=" flex-shrink-0 w-[100%] sm:w-[20%] py-8 ">
        <div className="text-center flex flex-col items-center justify-center w-[100%] p-4 bg-white">
          <div className='relative items-center justify-center w-[100%] flex group'>
            <img
            alt="Product"
            src={image}
            loading="lazy"
            className="  fit-contain rounded-lg w-[100%] mb-4"
          />
           {/* EXPLORE text div */}
        <div className="absolute top-0 left-0 duration-500 w-full h-full bg-gray-900 text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:flex text-xl">
          EXPLORE
        </div></div>
  
          <div className="mt-4 flex justify-center items-center space-x-2">
            <img
              alt="Below Image"
              src={belowImage}              
              loading="lazy"
              className="w-[100%] h-[50px] fit-contain"
            />
          </div>
        </div>
  
      
      </div>
    );
  };
  
  
  const ProductSliderSecond = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const products = [
      { image: "https://assets.angara.com/assets/cart-page/vintage.jpg?width=414&quality=95", belowImage: "https://assets.angara.com/assets/cart-page/vintage-gry.png?width=96&quality=95" },
      { image: "https://assets.angara.com/assets/cart-page/gia.jpg?width=256&quality=95", belowImage: "https://assets.angara.com/assets/cart-page/gia-gry.png?width=256&quality=95" },
      { image: "https://assets.angara.com/assets/cart-page/vintage.jpg?width=414&quality=95", belowImage: "https://assets.angara.com/assets/cart-page/vintage-gry.png?width=96&quality=95" },
      { image: "https://assets.angara.com/assets/cart-page/vintage.jpg?width=414&quality=95", belowImage: "https://assets.angara.com/assets/cart-page/vintage-gry.png?width=96&quality=95" }
    ];
  
    const totalProducts = products.length;
  
    const showProduct = (index) => {
      if (index < 0) return totalProducts - 1;
      if (index >= totalProducts) return 0;
      return index;
    };
  
    const handlePrev = () => {
      setCurrentIndex(showProduct(currentIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex(showProduct(currentIndex + 1));
    };
  
    return (
      <div className="relative w-full">
        {/* On small screens, show the slider with left and right buttons */}
        <div className="sm:hidden relative w-full">
          <button
            onClick={handlePrev}
            className="absolute top-[50%] left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10"
          >
            &#10094; {/* Left arrow */}
          </button>
  
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`, // Move slider based on currentIndex
              }}
            >
              {products.map((product, index) => (
                <ProductCard key={index} image={product.image} belowImage={product.belowImage} />
              ))}
            </div>
          </div>
  
          <button
            onClick={handleNext}
            className="absolute top-[50%] right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10"
          >
            &#10095; {/* Right arrow */}
          </button>
        </div>
  
        {/* On larger screens, display products in a flex container without navigation buttons */}
        <div className="hidden sm:flex justify-center items-center flex-nowrap">
          {products.map((product, index) => (
            <ProductCard key={index} image={product.image} belowImage={product.belowImage} />
          ))}
        </div>
      </div>
    );
  };
  
export default Page
