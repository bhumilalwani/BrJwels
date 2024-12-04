import Link from 'next/link';
import React from 'react';

const Collections = () => {
  return (
    <div className="px-[20px] flex items-center justify-center gap-[20px] mt-[10vh] flex-wrap">
      {/* First Image Block */}
      <div className="w-full md:w-[40vw] lg:w-[30vw] h-[60vh] sm:h-[70vh] relative cursor-pointer overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
          src="https://i.pinimg.com/736x/91/23/48/912348f025bc98db9ccd6151083e9320.jpg"
          alt="Celestial Collection"
        />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-200/20 transition-transform duration-1000 transform translate-y-[-100%] group-hover:translate-y-0 flex flex-col justify-center items-center">
          <h3 className="sm:text-3xl text-2xl text-gray-800 font-bold mb-4">
            Celestial Collection
          </h3>
          <Link
            href="/shop/:prodId"
            className="text-black text-xl text-gray-200 font-bold hover:underline"
          >
            Shop Now <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>

      {/* Second Image Block */}
      <div className="w-full md:w-[40vw] lg:w-[30vw] h-[70vh] relative cursor-pointer overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
          src="https://i.pinimg.com/736x/57/62/7c/57627c3896e2a22d07a72484b9bd10ca.jpg"
          alt="Celestial Collection"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200/20 transition-transform duration-1000 transform translate-y-[-100%] group-hover:translate-y-0 flex flex-col justify-center items-center">
          <h3 className="sm:text-3xl text-2xl text-gray-800 font-bold mb-4">
            Celestial Collection
          </h3>
          <Link
            href="/shop/:prodId"
            className="text-black text-xl text-gray-200 font-bold hover:underline"
          >
            Shop Now <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>

      {/* Third Image Block */}
      <div className="w-full md:w-[40vw] lg:w-[30vw] h-[70vh] relative cursor-pointer overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
          src="https://i.pinimg.com/736x/94/74/22/94742287b5b997505eb4ca12fbb91ee8.jpg"
          alt="Celestial Collection"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200/20 transition-transform duration-1000 transform translate-y-[-100%] group-hover:translate-y-0 flex flex-col justify-center items-center">
          <h3 className="sm:text-3xl text-2xl text-gray-800 font-bold mb-4">
            Celestial Collection
          </h3>
          <Link
            href="/shop/:prodId"
            className="text-black text-xl text-gray-200 font-bold hover:underline"
          >
            Shop Now <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
