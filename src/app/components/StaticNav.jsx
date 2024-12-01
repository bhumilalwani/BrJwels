'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const StaticNav = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [currentCategory, setCurrentCategory] = useState('main'); // State to track current category or subcategory view

  // Categories data
  const categories = [
    'Rings',
    'Necklaces',
    'Earrings',
    'Engagement Rings',
    'Wedding Rings',
    'Bracelets',
    'Collections',
    'Gifts',
    'The Edit',
    'Wishlist',
  ];

  const subcategories = {
    'Rings': ['Blue Sapphire Rings', 'Ruby Rings', 'Emerald Rings', 'Opal Rings', 'Aquamarine Rings', 'Pearl Rings', 'Amethyst Rings', 'Garnet Rings', 'London Blue Topaz Rings', 'Morganite Rings', 'Tanzanite Rings', 'Explore All'],
    'Necklaces': ['Blue Sapphire Rings', 'Ruby Rings', 'Emerald Rings', 'Opal Rings', 'Aquamarine Rings', 'Pearl Rings', 'Amethyst Rings', 'Garnet Rings', 'London Blue Topaz Rings', 'Morganite Rings', 'Tanzanite Rings', 'Explore All'],
    'Earrings': ['Blue Sapphire Rings', 'Ruby Rings', 'Emerald Rings', 'Opal Rings', 'Aquamarine Rings', 'Pearl Rings', 'Amethyst Rings', 'Garnet Rings', 'London Blue Topaz Rings', 'Morganite Rings', 'Tanzanite Rings', 'Explore All'],
    // Add subcategories for other categories as needed
  };

  // Handle menu toggle
  const menuHandler = () => {
    setSideMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setSideMenuOpen(false);
  };

  // Handle scroll direction for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        setNavbarVisible(false); // Hide on scroll down
      } else {
        setNavbarVisible(true); // Show on scroll up
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show subcategories when a category is clicked
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  // Back to main categories
  const handleBackToCategories = () => {
    setCurrentCategory('main');
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between bg-white px-[12px] sm:px-[26px] py-[32px]">
          {/* Hamburger Menu */}
          <div className="flex xl:hidden items-center">
            <i
              onClick={menuHandler}
              className="ri-menu-2-line text-2xl sm:text-4xl text-gray-700 cursor-pointer"
            ></i>
          </div>

          {/* Logo */}
          <div className="logo ml-[5px] ">
            <h1 className="text-2xl font-semibold cursor-pointer">BR JEW.</h1>
          </div>
          <div
        className={`mx-auto w-[30%] mt-[0vh] transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
         

             {/* Search Bar for Large Screens */}
<div className="hidden sm:flex items-center justify-center px-[10px] py-[5px] rounded-[2px] border-[1px] border-black">
  <div className="flex items-center justify-center gap-[5px] sm:gap-[10px]">
    <i className="ri-search-line text-normal sm:text-xl"></i>
    <input
      className="outline-none capitalize text-normal sm:text-xl font-normal rounded-md"
      type="text"
      placeholder="Search..."
    />
  </div>
</div>







      </div>
          {/* Icons */}
          <div className="flex items-center justify-center gap-[5px] sm:gap-[15px] pl-[5px]">
            <i className="ri-user-line text-2xl cursor-pointer"></i>
            <i className="ri-heart-line text-2xl cursor-pointer"></i>
            <i className="ri-handbag-line text-2xl cursor-pointer"></i>
          </div>
        </div>
      </div>
{/* Mobile Search Bar */}
<div
        className={`mx-auto w-[38vh] mt-[16vh] sm:hidden transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex items-center justify-center px-[5px] py-[5px] rounded-[2px] border-[1px] border-black">
          <i className="ri-search-line text-gray-700"></i>
          <input
            className="outline-none capitalize text-normal font-normal rounded-md text-gray-700 placeholder-gray-700 w-full"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      {/* Backdrop */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenuHandler}
        ></div>
      )}

   
     {/* Side Menu */}
<div
  className={`fixed top-0 left-0 bg-white w-[70%] max-w-sm shadow-md z-50 transition-transform duration-300 ${
    isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
  style={{ height: '100vh', overflowY: 'auto' }} // Added inline style for full height and scrolling
>
  {/* Menu Links */}
  <div className="p-4">
    {/* Menu Header */}
    <div className="flex items-center justify-between p-4 border-b">
      {currentCategory !== 'main' && (
        <i
          onClick={handleBackToCategories}
          className="ri-arrow-left-s-line text-lg -ml-[5vw] sm:text-2xl cursor-pointer"
        ></i>
      )}
      <h2 className="text-lg font-semibold">
        {currentCategory === 'main' ? 'Menu' : `${currentCategory}`}
      </h2>
      <i
        onClick={closeMenuHandler}
        className="ri-close-line text-lg sm:text-2xl cursor-pointer"
      ></i>
    </div>

    {currentCategory === 'main'
      ? categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border-b cursor-pointer hover:text-[#CAA968]"
            onClick={() => handleCategoryClick(category)}
          >
            <span className="text-lg">{category}</span>
            <i className="ri-arrow-right-s-line text-xl"></i>
          </div>
        ))
      : subcategories[currentCategory]?.map((subcategory, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border-b cursor-pointer hover:text-[#CAA968]"
          >
            <Link href={`/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="text-lg">{subcategory}</span>
            </Link>
          </div>
        ))}
  </div>
</div>

    </div>
  );
};

export default StaticNav;
