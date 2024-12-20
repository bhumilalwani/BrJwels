'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

// StaticNav Component
const StaticNav = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [currentCategory, setCurrentCategory] = useState('main');
  const [showLogin, setShowLogin] = useState(false); // State to toggle login overlay

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

  // Open Overlay (show login)
  const openOverLay = () => {
    setShowLogin(true);
  };

  // Close Overlay (hide login)
  const closeOverLay = () => {
    setShowLogin(false);
  };

  // Prevent body scrolling when login overlay is visible
  useEffect(() => {
    if (showLogin) {
      // Disable body scroll when overlay is shown
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when overlay is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount or when overlay is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLogin]);

  return (
    <div className='bg-white'>
      {/* Navbar */}
      <div className={`fixed top-0 w-full z-30 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between bg-white px-[12px] sm:px-[26px] py-[32px]">
          {/* Hamburger Menu */}
          <div className="flex xl:hidden items-center">
            <i onClick={menuHandler} className="ri-menu-2-line text-2xl sm:text-4xl text-[var(--primary-800)] cursor-pointer"></i>
          </div>
        <div className='flex items-center justify-center gap-1 hidden xl:flex text-[var(--primary-800)]'>24/7 Customer Support<span> | </span><span className='hover:text-[var(--secondary-color)] cursor-pointer'>+1-844-527-4367</span></div>
          {/* Logo */}
          <div className="logo ml-[5px] ">
            <Link href="/" className="text-2xl font-semibold cursor-pointer">BR JEW.</Link>
          </div>

     

          {/* Icons */}
          <div className="flex items-center text-[var(--primary-800)] justify-center gap-[5px] sm:gap-[15px] pl-[5px]">
                 {/* Search Bar for Large Screens */}
          <div className="hidden sm:flex items-center justify-center w-fit px-[10px] py-[5px] rounded-[2px] border-[1px] bg-white border-[var(--headings-color)]">
            <div className="flex items-center justify-center gap-[5px] sm:gap-[10px]">
              <i className="ri-search-line text-normal sm:text-xl"></i>
              <input className="outline-none capitalize text-normal sm:text-xl font-normal rounded-md" type="text" placeholder="Search..." />
            </div>
          </div>
          <i
  onClick={openOverLay}
  className="transition duration-[5000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:-mt-[0.6%] hover:text-[var(--primary-800)] ri-user-line text-2xl cursor-pointer"
></i>
<i
  className="transition duration-[5000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:-mt-[0.6%] hover:text-[var(--primary-800)] ri-heart-line text-2xl cursor-pointer"
></i>
<Link
  href="/cart"
  className="transition duration-[5000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:-mt-[0.6%] hover:text-[var(--primary-800)] ri-handbag-line text-2xl cursor-pointer"
></Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className={`mx-auto w-[70%] mt-[16vh] sm:hidden transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-center px-[5px] py-[5px] rounded-[2px] border-[1px] border-gray-500">
          <i className="ri-search-line text-[var(--primary-800)] mr-2"></i>
          <input className="outline-none capitalize text-normal font-normal rounded-md text-[var(--primary-800)] placeholder-text-[var(--primary-800)] w-full" type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Backdrop */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenuHandler}></div>
      )}

      {/* Side Menu */}
      <div className={`fixed top-0 left-0 bg-white w-[70%] max-w-sm shadow-md z-50 transition-transform duration-300 ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ height: '100vh', overflowY: 'auto' }}>
        {/* Menu Links */}
        <div className="p-4 bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            {currentCategory !== 'main' && (
              <i onClick={handleBackToCategories} className="ri-arrow-left-s-line text-lg -ml-[5vw] sm:text-2xl cursor-pointer"></i>
            )}
            <h2 className="text-lg font-semibold">{currentCategory === 'main' ? 'Menu' : `${currentCategory}`}</h2>
            <i onClick={closeMenuHandler} className="ri-close-line text-lg sm:text-2xl cursor-pointer"></i>
          </div>

          {currentCategory === 'main'
            ? categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b cursor-pointer hover:text-[var(--primary-800)]" onClick={() => handleCategoryClick(category)}>
                <Link href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="text-lg">{category}</span>
                </Link>
                <i className="ri-arrow-right-s-line text-xl"></i>
              </div>
            ))
            : subcategories[currentCategory]?.map((subcategory, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b cursor-pointer hover:text-[var(--primary-800)]">
                <Link href="/category/product">
                  <span className="text-lg">{subcategory}</span>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* Overlay for Login */}
      {showLogin && <Login closeOverLay={closeOverLay} />}
    </div>
  );
};

const Login = ({ closeOverLay }) => {
  const [view, setView] = useState("login");

  return (
    <div className="overlay transition-transform duration-500 top-0 text-center left-0 w-[100%] h-[100%] bg-[#666666] z-50 fixed flex items-center justify-center bg-opacity-50">
      {view === "login" && (
        <form className="flex relative items-start px-[3%] lg:w-[30%] w-[80%] sm:w-[40%] relative h-[50%] bg-gray-100 justify-start pt-[8%] sm:pt-10 gap-5 flex-col">
              <div className="close w-[100%] flex items-start text-sm sm:text-lg cursor-pointer absolute top-2 right-4 justify-end">
          <i className="ri-close-large-line" onClick={closeOverLay}></i>
        </div>
          <div className="flex items-center justify-between w-[100%]">
            <h1 className="lg:text-2xl text-xl font-thin">Log In</h1>
            <button className="text-base font-thick" onClick={() => setView("register")}>Create New Account</button>
          </div>
          <input className="p-2 capitalize border-[1px] border-gray-500 w-[100%] bg-gray-100" type="email" placeholder="Email*" />
          <input className="p-2 capitalize border-[1px] border-gray-500 w-[100%] bg-gray-100" type="password" placeholder="Password*" />
          <button className="font-thin" onClick={() => setView("forgotPassword")}>Forgot Password?</button>
          <button className="bg-black text-white text-center text-xl w-[100%] p-2">Log In</button>
          <div className="w-full absolute left-0 bottom-0 py-3 bg-[#dddcd9]">
            <button onClick={() => setView("register")} className="text-[var(--primary-800)] font-normal">Dont have an account? <span className="text-black font-bold">Register Now</span></button>
          </div>
        </form>
      )}
      {view === "register" && <Register closeOverLay={closeOverLay} setView={setView} />}
      {view === "forgotPassword" && <ForgotPassword setView={setView} />}
    </div>
  );
};

// Forgot Password Component
const ForgotPassword = ({ setView, closeOverLay }) => {
  return (
    <div className="flex items-start justify-center bg-gray-100 p-5 gap-5 flex-col w-[80%] sm:w-[40%] lg:w-[30%]">
      <div className="close w-[100%] flex items-start text-sm sm:text-lg cursor-pointer absolute top-2 right-4 justify-end">
        <i className="ri-close-large-line" onClick={closeOverLay}></i>
      </div>
      <div className="flex items-start justify-between mt-8 w-[100%]">
        <h1 className="sm:text-2xl text-gray-700 lg:pb-10 text-xl">Forgot Password</h1>
        <button onClick={() => setView("login")} className="text-lg text-[var(--primary-800)]">Go Back</button>
      </div>
      <h3 className="text-[var(--primary-800)] -mt-[10%] text-left">Please enter your email address below to receive a password reset link.</h3>
      <input type="text" placeholder="Email*" className="text-black text-base p-2 border-gray-400 w-[100%] border-[1px]" />
      <div className="flex items-center justify-center mt-8 w-[100%]">
        <button className="bg-black text-white w-[100%] sm:px-[9%] px-[4%] py-[2.5%] text-xl font-semibold">Submit</button>
      </div>
    </div>
  );
};

// Register Component
const Register = ({ setView, closeOverLay }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gray-100 pl-[10%] pr-[8%] py-5 relative">
        <div className="close w-[100%] flex items-start text-sm sm:text-lg cursor-pointer absolute top-2 right-4 justify-end">
          <i className="ri-close-large-line" onClick={closeOverLay}></i>
        </div>
        <div className="flex items-start justify-between mt-10 w-[100%]">
          <h1 className="sm:text-2xl text-gray-700 pb-10 text-xl">Create New Account</h1>
          <button onClick={() => setView("login")} className="text-lg">Log In</button>
        </div>
        <div className="flex flex-col items-start justify-center w-[100%] gap-2 pb-5">
          <input type="text" placeholder="First Name*" className="text-black text-base p-2 border-gray-300 w-[90%] border-[1px]" />
          <input type="text" placeholder="Last Name*" className="text-black text-base p-2 border-gray-300 w-[90%] border-[1px]" />
          <input type="text" placeholder="Email*" className="text-black text-base p-2 border-gray-300 w-[90%] border-[1px]" />
          <input type="text" placeholder="Password*" className="text-black text-base p-2 border-gray-300 w-[90%] border-[1px]" />
          <input type="text" placeholder="Confirm Password*" className="text-black text-base p-2 border-gray-300 w-[90%] border-[1px]" />
        </div>
        <div className="text-gray-500 text-sm flex items-start gap-2 w-[80%] -ml-[20%] text-left">
          <input type="checkbox" className="mt-[2%]" id="terms-checkbox" />
          <label htmlFor="terms-checkbox">By clicking Register, I agree and accept your <a href="/terms" className="text-blue-600">Terms</a> and <a href="/privacy" className="text-blue-600">Privacy Policy</a>.</label>
        </div>

        <div className="text-gray-500 text-sm flex items-start gap-2 w-[80%] -ml-[20%] text-left">
          <input type="checkbox" defaultChecked className="mt-[2%]" id="terms-checkbox" />
          <label htmlFor="terms-checkbox">Sign me up for exclusive offers from Angara</label>
        </div>

        <div className="flex items-center justify-center mt-8 w-[100%]">
          <button className="bg-black text-white w-[80%] sm:px-[10vh] px-[5vh] py-[1.2vh] text-xl font-semibold">Register</button>
        </div>
      </div>
      <div className="text-lg bg-gray-300 w-[100%] p-2 text-center text-gray-700 cursor-pointer">
        Already have an account? <span className="text-black whitespace-nowrap" onClick={() => setView("login")}>Log In</span>
      </div>
    </div>
  );
};

export default StaticNav;
