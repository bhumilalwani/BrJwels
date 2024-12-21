'use client';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const DynamicNav = () => {

    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const lastScrollYRef = useRef(0);
    const [hoveredNav, setHoveredNav] = useState(null);
    const handleMouseEnter = (text) => {
        setHoveredNav(text);
        console.log(`Hovered on: ${text}`);
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

  return (
    <div className={`xl:flex hidden bg-white z-20 mt-[10vh] items-center justify-center w-[100%] min-h-[10vh] backdrop-opacity-0 group flex-col relative ${isNavbarVisible ? 'translate-y-0' : '-translate-y-[100%]'}`}>
      <div className="flex items-center justify-center w-full h-[20%] flex-col">
        {/* Navigation Links */}
        <div className="flex items-center justify-between gap-[5vw] flex-wrap">
          {['RINGS', 'NECKLACES', 'EARINGS', 'ENGAGEMENT RINGS', 'WEDDING RINGS', 'BRACELETS', 'COLLECTIONS', 'GIFTS', 'BLOG'].map((text, index) => (
            <Link
              onMouseEnter={() => handleMouseEnter(text)}
              key={index}
              href="/category/ring"
              className="custom-underline relative inline-block text-[var(--headings-color)] text-[14px] font-semibold hover:text-var(--headings-color) hover:no-underline group"
            >
              {text}
            </Link>
          ))}
        </div>
     
        {hoveredNav!="BLOG" ? <AllitemsDivHidden className="flex xl:flex gap-[5vw] hidden group-hover:flex" /> : <AllItemsDivEdits></AllItemsDivEdits>}
        {hoveredNav=="BLOG" ? <AllItemsDivEdits className="flex xl:flex gap-[5vw] hidden group-hover:flex"></AllItemsDivEdits> : <AllitemsDivHidden></AllitemsDivHidden>}
      </div>
    </div>
  );
};


    const AllitemsDivHidden = () => {
        const categories = [
            {
              name: "Natural Gem Stones",
              items: [
                {img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
                {img: "https://assets.angara.com/assets/homepage-Assets/us/birthstones/august.jpg?width=128&quality=95", title: "Green Sapphire Rings" },
                {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/september.jpg?width=128&quality=95", title:"Blue Sapphire Rings"},
                {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/november.jpg?width=128&quality=95", title:"Citrine Rings"},
                {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/october.jpg?width=128&quality=95", title:"Opal Rings"},
                {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/june.jpg?width=128&quality=95", title:"Pearl Rings"},
                {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/february.jpg?width=128&quality=95", title:"Amethyst Rings"},
                {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/july.jpg?width=128&quality=95", title:"Ruby Rings"}
                // Add more items here
              ],
              link: "/explore",
            },
            {
                name: "Natural Gem Stones",
                items: [
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/november.jpg?width=128&quality=95", title:"Citrine Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/october.jpg?width=128&quality=95", title:"Opal Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/june.jpg?width=128&quality=95", title:"Pearl Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/february.jpg?width=128&quality=95", title:"Amethyst Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/july.jpg?width=128&quality=95", title:"Ruby Rings"}
                    // Add more items here
                  ],
                link: "/explore",
              },
              {
                name: "Natural Gem Stones",
                items: [
                    { img:"https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
                     {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/november.jpg?width=128&quality=95", title:"Citrine Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/october.jpg?width=128&quality=95", title:"Opal Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/june.jpg?width=128&quality=95", title:"Pearl Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/february.jpg?width=128&quality=95", title:"Amethyst Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/july.jpg?width=128&quality=95", title:"Ruby Rings"}
                    // Add more items here
                  ],
                link: "/explore",
              },
              {
                name: "Natural Gem Stones",
                items: [
                    { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
                    { img: "https://assets.angara.com/assets/homepage-Assets/us/birthstones/august.jpg?width=128&quality=95", title: "Green Sapphire Rings" },
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/october.jpg?width=128&quality=95", title:"Opal Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/june.jpg?width=128&quality=95", title:"Pearl Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/february.jpg?width=128&quality=95", title:"Amethyst Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/july.jpg?width=128&quality=95", title:"Ruby Rings"}
                    // Add more items here
                  ],
                link: "/explore",
              },
              {
                name: "Original Gem Stones",
                items: [
                    { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
                    { img: "https://assets.angara.com/assets/homepage-Assets/us/birthstones/august.jpg?width=128&quality=95", title: "Green Sapphire Rings" },
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/september.jpg?width=128&quality=95", title:"Blue Sapphire Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/november.jpg?width=128&quality=95", title:"Citrine Rings"},
                   // Add more items here
                  ],
                link: "/explore",
              },
              {
                name: "Lab Gem Stones",
                items: [
                    { img: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png", title: "Red Sapphire Rings" },
                    { img: "https://assets.angara.com/assets/homepage-Assets/us/birthstones/august.jpg?width=128&quality=95", title: "Green Sapphire Rings" },
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/february.jpg?width=128&quality=95", title:"Amethyst Rings"},
                    {img:"https://assets.angara.com/assets/homepage-Assets/us/birthstones/july.jpg?width=128&quality=95", title:"Ruby Rings"}
                    // Add more items here
                  ],
                link: "/explore",
              },
            // Add more categories here
          ];
    
    
    
        return (
<div className='absolute top-[100%] z-50 w-full bg-white h-fit px-[8vh] hidden group-hover:flex py-[10px] flex items-center justify-between'>
  <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[2vw] items-start w-[80%]">
    {categories.map((category, index) => (
      <div key={index} className="item col-auto flex flex-col items-start justify-start">
        <h3 className='font-semibold text-base text-[var(--headings-color)] mb-[2.5vh]'>{category.name}</h3>
        {category.items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-start gap-[5px] mb-[2vh]">
            <img className="w-[20px] h-[20px]" src={item.img} alt={item.title} />
            <h4 className='font-normal text-sm text-[var(--primary-color)] '>{item.title}</h4>
          </div>
        ))}
        <Link className="underline transition text-[var(--primary-800)] duration-200 hover:text-[var(--secondary-color)]" href="/category/ring">
          Explore All
        </Link>
      </div>
    ))}
  </div>
  <div className=''>
    <h3 className='font-semibold text-base text-[var(--headings-color)] mb-[2.5vh] w-[20%]'>Featured Gift</h3>
    <div className='w-[14vw] relative h-[26vh] overflow-hidden'>
      <img className='fit-cover hover:scale-150 transition-transform transition duration-500 w-[100%] h-[100%]' src="https://assets.angara.com/assets/gnb-assets/ring-banner.jpg?width=768&quality=95" alt="featured item" />
    </div>
    <Link className='text-[var(--primary-800)]' href="/explore">Explore All</Link>
  </div>
</div>
      );
    };

    const AllItemsDivEdits=()=>{
        const edits=[
            {img:"https://assets.angara.com/assets/gnb-assets/the-edit-trending-now.jpg?width=768&quality=95", title:"Jwelery Trends"},
            {img:"https://assets.angara.com/assets/gnb-assets/theedit-education.jpg?width=768&quality=95", title:"Gemstones"},
            {img:"https://assets.angara.com/assets/gnb-assets/the-edit-engagement-wedding.jpg?width=768&quality=95", title:"Jwelery Trends"},
            {img:"https://assets.angara.com/assets/gnb-assets/the-edit-gift-idea.jpg?width=768&quality=95", title:"Jwelery Trends"},
            {img:"https://assets.angara.com/assets/gnb-assets/the-edit-fashion-tips.jpg?width=768&quality=95", title:"Stylings Tips"},
        ]
        return (
            <div className='absolute top-[100%] z-50 hidden group-hover:flex flex items-center justify-center gap-[20px] bg-white'>
                {
                    edits.map((edit)=>{
                        return (
                            <div key={edit.id} className='w-[19vw] overflow-hidden h-[40vh] flex items-center justify-start relative gap-[10px]'>
                                <img className='hover-scale-125 w-[100%] h-[100%] h-[100%] fit-cover w-[100%] ' src={edit.img} alt={edit.title} />
                                <div className='font-normal absolute text-xl backdrop-blur-xl w-[100%] h-[20%] top-[80%] left-[0%] opacity-1/2 text-var(--primary-color)'><span className='ml-[10%]'>{edit.title}</span></div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


export default DynamicNav;
