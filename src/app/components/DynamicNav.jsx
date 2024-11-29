'use client';
import React from 'react';
import Link from 'next/link';

const DynamicNav = () => {
  return (
    <div className='flex items-center justify-center w-[100%] h-[20%] group flex-col'>
      <div className=" flex items-center justify-center w-full h-[20%] flex-col">
      {/* Navigation Links */}
      <div className="flex items-center justify-between gap-[5vw] flex-wrap">
        {['RINGS', 'NECKLACES', 'EARINGS', 'ENGAGEMENT RINGS', 'WEDDING RINGS', 'BRACELETS', 'COLLECTIONS', 'GIFTS', 'BLOG'].map((text, index) => (
          <Link
            key={index}
            href={`/${text.toLowerCase().replace(" ", "")}`}
            className="custom-underline relative inline-block text-black text-[14px] font-semibold hover:text-black hover:no-underline group"
          >
            {text}
            {/* <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span> */}
          </Link>
        ))}
      </div>
      <AllitemsDivHidden className="grid sm:grid-cols-5 sm:block sm:grid gap-[5vw] hidden group-hover:grid"></AllitemsDivHidden>
    </div>
    </div>
  );
};

const AllitemsDivHidden = () => {

    const categories = [
        {
          name: "Natural Gem Stones",
          items: [
            { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
            { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
            // Add more items here
          ],
          link: "/explore",
        },

        {
            name: "Natural Gem Stones",
            items: [
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              // Add more items here
            ],
            link: "/explore",
          },

          {
            name: "Natural Gem Stones",
            items: [
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              // Add more items here
            ],
            link: "/explore",
          },

          {
            name: "Natural Gem Stones",
            items: [
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              // Add more items here
            ],
            link: "/explore",
          },

          {
            name: "Original Gem Stones",
            items: [
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              // Add more items here
            ],
            link: "/explore",
          },

          {
            name: "Lab Gem Stones",
            items: [
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
              // Add more items here
            ],
            link: "/explore",
          },
        // Add more categories here
      ];
      


    return (
        
        <div className="absolute top-[17%] w-full bg-white h-fit px-[20px] py-[10px] grid grid-cols-5 gap-[5vw] hidden group-hover:grid">
    {categories.map((category, index) => (
      <div key={index} className="item flex flex-col items-center justify-center">
        <h3>{category.name}</h3>
        {category.items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center gap-[5px]">
            <img className="w-[20px] h-[20px]" src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
        <Link className="underline hover:text-[#CAA968]" href={category.link}>
          Explore All
        </Link>
      </div>
    ))}
    <div className=''>
        <h3>Featured Gift</h3>
        <img className='w-[20px]' src="https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png" alt="featured item" />
        <h4>Red Sapphire Gift</h4>
        <Link href="/explore">Explore All</Link>
    </div>
  </div>
  );
};

export default DynamicNav;
