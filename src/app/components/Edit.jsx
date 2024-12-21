'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Headings from './Headings';



const Edit = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      href: "https://www.angara.com/blog/clover-rings-for-everyday-elegance/",
      imageSrc: "https://assets.angara.com/blog/Clover-Rings.jpg?width=768&quality=95",
      altText: "Shop the Trend: Top 7 Clover Rings for Everyday Elegance",
      title: "Shop the Trend: Top 7 Clover Rings for Everyday Elegance",
    },
    {
      href: "https://www.angara.com/blog/clover-shaped-pendants-and-necklaces/",
      imageSrc: "https://assets.angara.com/blog/Clover-Shaped-Pendants-and-Necklaces.jpg?width=768&quality=95",
      altText: "Clover-Shaped Pendants and Necklaces: The Perfect Blend of Luck and Style",
      title: "Clover-Shaped Pendants and Necklaces: The Perfect Blend of Luck and Style",
    },
    {
      href: "https://www.angara.com/blog/clover-earrings-for-every-occasion/",
      imageSrc: "https://assets.angara.com/blog/Lucky-Clover-Earrings.jpg?width=768&quality=95",
      altText: "Lucky Clover Earrings: The Perfect Pair for Every Occasion",
      title: "Lucky Clover Earrings: The Perfect Pair for Every Occasion",
    },
    {
        href: "https://www.angara.com/blog/clover-rings-for-everyday-elegance/",
        imageSrc: "https://assets.angara.com/blog/Clover-Rings.jpg?width=768&quality=95",
        altText: "Shop the Trend: Top 7 Clover Rings for Everyday Elegance",
        title: "Shop the Trend: Top 7 Clover Rings for Everyday Elegance",
      },
      {
        href: "https://www.angara.com/blog/clover-shaped-pendants-and-necklaces/",
        imageSrc: "https://assets.angara.com/blog/Clover-Shaped-Pendants-and-Necklaces.jpg?width=768&quality=95",
        altText: "Clover-Shaped Pendants and Necklaces: The Perfect Blend of Luck and Style",
        title: "Clover-Shaped Pendants and Necklaces: The Perfect Blend of Luck and Style",
      },
      {
        href: "https://www.angara.com/blog/clover-earrings-for-every-occasion/",
        imageSrc: "https://assets.angara.com/blog/Lucky-Clover-Earrings.jpg?width=768&quality=95",
        altText: "Lucky Clover Earrings: The Perfect Pair for Every Occasion",
        title: "Lucky Clover Earrings: The Perfect Pair for Every Occasion",
      },
    // Add more items as needed
  ];

  return (
    <section className="py-12" data-section="The Edit">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
       
         
          <Headings text="The Edit"></Headings>
        </div>

        {/* Container for horizontal scrolling */}
        <div className="overflow-x-auto scrollbar-hidden flex space-x-6">
          {data.map((item, index) => (
            <div key={index} className="rounded-lg group overflow-hidden shadow-lg flex-none w-52 sm:w-72">
              <Link href={item.href} passHref>
                <img
                  className="w-full h-60 object-cover"
                  src={item.imageSrc}
                  alt={item.altText}
                />
                <div className="p-4">
                  <h3 className="text-lg text-[var(--primary-color)] font-semibold truncate">{item.title}</h3>
                  <span className=" text-gray-500 font-medium transition-transform duration-500 hover:underline">Read & Shop</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center mt-[2%]'><button className='border-[1px] border-[var(--headings-color)] text-[var(--headings-color)] px-[14%] py-[2%] sm:px-[4%] sm:py-[0.5%]'>Read More</button></div>
    </section>
  );
};

export default Edit;
