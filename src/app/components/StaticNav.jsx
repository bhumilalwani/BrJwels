'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const StaticNav = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const menuHandler = () => {
    setSideMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setSideMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between bg-white px-[26px] flex-wrap py-[32px] relative">
      {/* Top Bar */}
      <div className="hidden lg:flex items-center">
        <h3 className="text-sm">24/7 Customer Support | </h3>
        <Link className="cursor-pointer hover:text-[#CAA968] text-black" href="/contact">
          +1-844-527-4367
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="flex lg:hidden items-center justify-center">
        <i
          onClick={menuHandler}
          className="ri-menu-2-line text-4xl text-gray-700 cursor-pointer"
        ></i>
      </div>

      {/* Logo */}
      <div className="logo -ml-[10px] sm:ml-[18%]">
        <h1 className="text-2xl font-semibold cursor-pointer">BR JEW.</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between rounded-md">
        <div className="flex items-center justify-between gap-[10px]">
          <i className="ri-search-line text-xl"></i>
          <input
            className="outline-none capitalize text-xl font-normal rounded-md sm:p-[10px]"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center justify-center gap-[5px] sm:gap-[15px] w-[10vw] pl-[5px] ml-[10%] mt-[10%] sm:mt-[0%] -translate-x-[0%] sm:ml-[0px] sm:-translate-x-[0px]">
        <i className="ri-user-line font-thin text-2xl transform hover:-translate-y-[2px] sm:-ml-[10vw] md:ml-[0px] transition cursor-pointer"></i>
        <i className="ri-heart-line font-thin text-2xl transform hover:-translate-y-[2px] transition cursor-pointer"></i>
        <i className="ri-handbag-line font-thin text-2xl transform hover:-translate-y-[2px] transition cursor-pointer"></i>
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
        className={`fixed top-0 left-0 h-full bg-white w-[70%] max-w-sm shadow-md z-50 transition-transform duration-300 ${
          isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <i
            onClick={closeMenuHandler}
            className="ri-close-line sm:text-2xl text-lg cursor-pointer"
          ></i>
        </div>

        {/* Menu Links */}
        <div className="p-4">
          {[
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
          ].map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border-b cursor-pointer hover:text-[#CAA968]"
            >
              <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                <span className="text-lg">{link}</span>
              </Link>
              <i className="ri-arrow-right-s-line text-xl"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticNav;
