"use client";

import React, { useState, useRef, useEffect } from "react";

import ProductCustomization from "@/app/components/ProductCustomization";
import StaticNav from "@/app/components/StaticNav";
import DynamicNav from "@/app/components/DynamicNav";
import Link from "next/link";

const ProductPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  const customizationRef = useRef(null);
  const imageRef = useRef(null);

  const images = [
    "https://assets.angara.com/ring/sr3374sd_h/9.70x7.06x5.66mm-a-blue-sapphire-18k-white-gold-ring.jpg?width=640&quality=95&width=320&quality=95",
    "https://assets.angara.com/ring/sr3374sd_h/9.70x7.06x5.66mm-a-blue-sapphire-18k-white-gold-ring_2.jpg?width=640&quality=95&width=320&quality=95",
    "https://assets.angara.com/ring/sr3374sd_h/9.70x7.06x5.66mm-a-blue-sapphire-18k-white-gold-ring_5.jpg?width=640&quality=95&width=320&quality=95",
    "https://assets.angara.com/ring/sr3374sd_h/9.70x7.06x5.66mm-a-blue-sapphire-18k-white-gold-ring_7.jpg?width=640&quality=95&width=320&quality=95",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(false); // Stop sticky behavior when the ProductCustomization section is visible
        } else {
          setIsSticky(true); // Make image sticky again when not visible
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the customization section is visible
      }
    );

    if (customizationRef.current) {
      observer.observe(customizationRef.current);
    }

    return () => {
      if (customizationRef.current) {
        observer.unobserve(customizationRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <StaticNav />
      <DynamicNav />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/productDetails/prod" className="hover:text-gray-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/productDetails/prod" className="hover:text-gray-700">
            Jewelry
          </Link>
          <span>/</span>
          <Link href="/productDetails/prod" className="hover:text-gray-700">
            Rings
          </Link>
          <span>/</span>
          <span className="text-gray-900">
            Solitaire Round Diamond Infinity Promise Ring
          </span>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className={`aspect-square sm:grid bg-green-200 grid-cols-2 bg-white ${isSticky ? "sticky top-4" : ""}`}>
                <img
                  ref={imageRef}
                  src={images[activeImage]}
                  alt="Product view"
                  className="w-full h-full sm:w-[80%] object-contain"
                />

                <div>
                    
                    <div className="slider">
                        <input className="bg-red-900 custom-range rotate-90 sm:block hidden appearance-none" type= "range" placeholder="color" ></input>
                    </div>
                </div>

              </div>
              <div className="flex mt-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 border ${activeImage === index ? "border-blue-600" : "border-gray-200"}`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="sticky top-4">
              <h1 className="text-2xl text-gray-800 font-bold mb-4">
                Solitaire Round Diamond Infinity Promise Ring
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 01 00.95.69l1.07-3.292c.3-.921 1.603-.921 1.902 0l1.07 3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">(101 Reviews)</span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl text-gray-800">$3,555</span>
                <span className="text-xl text-gray-500 line-through">$3,949</span>
                <span className="text-sm text-green-600 font-medium">(10% OFF)</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <p className="text-sm text-gray-600">
                  Pay as low as $1,777.05/month (0% interest)
                  <button className="text-blue-600 ml-[5%] hover:underline">Select Plan</button>
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                  <span>10% OFF + FREE Jewelry Gifts</span>
                  <span className="text-gray-500">(Ends in 00h:12m:24s)</span>
                  <button className="text-blue-600 hover:underline">View Offer</button>
                </div>
              </div>

              <ProductCustomization ref={customizationRef} />

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
