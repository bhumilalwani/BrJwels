'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';


import StaticNav from '@/app/components/StaticNav';
import DynamicNav from '@/app/components/DynamicNav';

const Page = () => {
  const params = useParams();
  const [showFilter, setShowFilter] = useState(false);
  const productImages = [
    [
      "https://raymondleejewelers.net/wp-content/uploads/2019/02/custom-design-a-ring-example.jpg",
      "https://www.brides.com/thmb/kvx0c_MuM_CVlklXFQy0C6-WNrA=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/il_fullxfull.1852208181_6mbc_2400x-a3b790cc79e04e73b00351b79b2008a2.jpg",
      "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
    ],
    [
      "https://i.etsystatic.com/12828076/r/il/6cef40/2347357644/il_fullxfull.2347357644_6pfl.jpg",
      "https://cdn.shopify.com/s/files/1/0256/7896/3506/products/engagementrings_1024x1024.jpg?v=1597937021",
      "https://i.etsystatic.com/17210700/r/il/fd0715/4555858865/il_1080xN.4555858865_4lps.jpg",
    ],
    [
        "https://raymondleejewelers.net/wp-content/uploads/2019/02/custom-design-a-ring-example.jpg",
        "https://www.brides.com/thmb/kvx0c_MuM_CVlklXFQy0C6-WNrA=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/il_fullxfull.1852208181_6mbc_2400x-a3b790cc79e04e73b00351b79b2008a2.jpg",
        "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
      ],
      [
        "https://i.etsystatic.com/12828076/r/il/6cef40/2347357644/il_fullxfull.2347357644_6pfl.jpg",
        "https://cdn.shopify.com/s/files/1/0256/7896/3506/products/engagementrings_1024x1024.jpg?v=1597937021",
        "https://i.etsystatic.com/17210700/r/il/fd0715/4555858865/il_1080xN.4555858865_4lps.jpg",
      ],
      [
        "https://raymondleejewelers.net/wp-content/uploads/2019/02/custom-design-a-ring-example.jpg",
        "https://www.brides.com/thmb/kvx0c_MuM_CVlklXFQy0C6-WNrA=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/il_fullxfull.1852208181_6mbc_2400x-a3b790cc79e04e73b00351b79b2008a2.jpg",
        "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
      ],
      [
        "https://i.etsystatic.com/12828076/r/il/6cef40/2347357644/il_fullxfull.2347357644_6pfl.jpg",
        "https://cdn.shopify.com/s/files/1/0256/7896/3506/products/engagementrings_1024x1024.jpg?v=1597937021",
        "https://i.etsystatic.com/17210700/r/il/fd0715/4555858865/il_1080xN.4555858865_4lps.jpg",
      ],
      [
        "https://raymondleejewelers.net/wp-content/uploads/2019/02/custom-design-a-ring-example.jpg",
        "https://www.brides.com/thmb/kvx0c_MuM_CVlklXFQy0C6-WNrA=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/il_fullxfull.1852208181_6mbc_2400x-a3b790cc79e04e73b00351b79b2008a2.jpg",
        "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
      ],
      [
        "https://i.etsystatic.com/12828076/r/il/6cef40/2347357644/il_fullxfull.2347357644_6pfl.jpg",
        "https://cdn.shopify.com/s/files/1/0256/7896/3506/products/engagementrings_1024x1024.jpg?v=1597937021",
        "https://i.etsystatic.com/17210700/r/il/fd0715/4555858865/il_1080xN.4555858865_4lps.jpg",
      ],
      [
        "https://raymondleejewelers.net/wp-content/uploads/2019/02/custom-design-a-ring-example.jpg",
        "https://www.brides.com/thmb/kvx0c_MuM_CVlklXFQy0C6-WNrA=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/il_fullxfull.1852208181_6mbc_2400x-a3b790cc79e04e73b00351b79b2008a2.jpg",
        "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
      ],
      [
        "https://i.etsystatic.com/12828076/r/il/6cef40/2347357644/il_fullxfull.2347357644_6pfl.jpg",
        "https://cdn.shopify.com/s/files/1/0256/7896/3506/products/engagementrings_1024x1024.jpg?v=1597937021",
        "https://i.etsystatic.com/17210700/r/il/fd0715/4555858865/il_1080xN.4555858865_4lps.jpg",
      ],
          
  ];

  const [prevState, setPrevState] = useState(productImages);

  const LoadMoreHandeler = () => {
    setPrevState((prev) => [...prev, ...productImages]);
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div className='text-black'>
      <StaticNav />
      <DynamicNav/>

      <div className='flex flex-col mt-[5vh] items-start px-[5%]'>
        <div className='flex flex-col sm:flex-row items-center gap-[10%]'>
        <div className='flex flex-col'><h2 className='text-gray-800 text-xl font-semibold text-left capitalize'>
          {params.product}
        </h2>
        <p className='text-sm mt-[1vh] sm:w-[30%] font-semibold text-gray-500 '>
          Make a statement wherever you go with handcrafted rings from Angara.
          From &quot;love tokens to outfit pick-me-ups, we have got them all. Get exploring
        </p></div>
        <div className='grid grid-cols-2 sm:flex scrollbar-hidden overflow-x-scroll -translate-x-[0%] sm:-ml-[45%] p-[1vw] gap-3 mt-[5vh]'>
            <div className='flex sm:w-[18vw] items-center relative justify-center'>
              <div className='w-[44vw] overflow-hidden'>
                <img
                  className='w-[100%] h-[22vh] hover:scale-125 transform-transition duration-500'
                  src="https://www.brides.com/thmb/kvx0c_MuM_CVlklXFQy0C6-WNrA=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/il_fullxfull.1852208181_6mbc_2400x-a3b790cc79e04e73b00351b79b2008a2.jpg"
                  alt="Ring Image"
                />
              </div>
              <h3 className='absolute top-[78%] text-left ml-[2%] text-lg font-semibold text-gray-200 capitalize'>
                white gem
              </h3>
            </div>
         
            <div className='flex sm:w-[18vw] items-center relative justify-center'>
              <div className='w-[44vw] overflow-hidden'>
                <img
                  className='w-[100%] h-[22vh] hover:scale-125 transform-transition duration-500'
                  src="https://www.brides.com/thmb/kvx0c_MuM_CVlklXFQy0C6-WNrA=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/il_fullxfull.1852208181_6mbc_2400x-a3b790cc79e04e73b00351b79b2008a2.jpg"
                  alt="Ring Image"
                />
              </div>
              <h3 className='absolute top-[78%] text-left ml-[2%] text-lg font-semibold text-gray-200 capitalize'>
                white gem
              </h3>
            </div>
          </div>
          </div>
        <div className='flex flex-col gap-2'>
          
          <div className='filter&sort flex items-center justify-center gap-[5%] sm:gap-[15%] py-[20px] w-[100%]'>
            <h3 className='text-gray-500 text-normal '>5394 custom rings</h3>
            <button
              onClick={toggleFilter}
              className='text-black text-normal font-semibold px-[12px] rounded-[5px] py-[5px] border-[1px]'
            >
              Filter
            </button>
            <button className='text-black text-normal font-semibold px-[12px] rounded-[5px] py-[5px] border-[1px]'>
              Sort By
            </button>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 p-[1vw] gap-3 mt-[0vh]'>
            {prevState.map((images, index) => (
              <ProductItem key={index} images={images} />
            ))}
          </div>
          <button
            onClick={LoadMoreHandeler}
            className='loadMore border-[1px] border-black px-[12px] py-[6px] w-[80%] sm:w-[20%] sm:mt-[5vh] mx-auto mb-[10vh]'
          >
            Load More
          </button>
        </div>
      </div>
      {showFilter ? <FilterSection setShowFilter={setShowFilter}/> : null}
    </div>
  );
};

const ProductItem = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className='flex flex-col'>
      <div className='h-[22vh] relative overflow-hidden'>
        <img
          className='w-[100%] h-[100%] object-cover'
          src={selectedImage}
          alt="Product Image"
        />
        <div className='absolute bottom-0 p-2 flex ml-[50%] -translate-x-[50%] flex-row justify-center gap-2'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[8px] h-[8px] border-gray-300 rounded-full border-[1px] cursor-pointer ${
                selectedImage === image ? "bg-gray-900" : "bg-transparent"
              }`}
              onClick={() => handleImageClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FilterSection = (props) => {
    const setShowFilter = props.setShowFilter;
    const closeFilterBar = () => {
        console.log("njdsbckjdckjwe")
      setShowFilter(false);
    };
    const categories = [
      {
        name: "Metal Type",
        subcategories: [
          "White Gold (4602)",
          "Yellow Gold (4271)",
          "Rose Gold (3980)",
          "Platinum (3185)",
          "Silver (352)",
          "Two Tone Gold (101)",
          "Tricolor Gold (3)",
        ],
      },
      {
        name: "Gemstone Shape",
        subcategories: [
          "Round (1830)",
          "Oval (1243)",
          "Emerald Cut (569)",
          "Cushion (540)",
          "Pear (363)",
          "Cushion Rectangular (294)",
          "Princess (123)",
          "Heart (65)",
          "Square (57)",
          "Marquise (46)",
          "Radiant Cut (44)",
          "Asscher (39)",
          "Trillion (19)",
          "Square Emerald Cut (13)",
          "Five Petal Flower (11)",
          "Baguette (10)",
          "Hexagon (8)",
          "Octagonal (6)",
        ],
      },
      {
        name: "Jewelry Styles",
        subcategories: [
          "Cocktail (274)",
          "Infinity (142)",
          "Eternity (87)",
          "Two Stone (73)",
          "Plain (65)",
          "Heart (58)",
          "Adjustable (35)",
          "Art Deco (31)",
          "Knot (28)",
          "Initials (26)",
          "Ring Enhancers (20)",
          "Cross (3)",
        ],
      },
      {
        name: "Carat Weight",
        subcategories: [
          "Cocktail (274)",
          "Infinity (142)",
          "Eternity (87)",
          "Two Stone (73)",
          "Plain (65)",
          "Heart (58)",
          "Adjustable (35)",
          "Art Deco (31)",
          "Knot (28)",
          "Initials (26)",
          "Ring Enhancers (20)",
          "Cross (3)",
        ],
      },
      {
        name: "Jewelry Types",
        subcategories: [
          "Cocktail (274)",
          "Infinity (142)",
          "Eternity (87)",
          "Two Stone (73)",
          "Plain (65)",
          "Heart (58)",
          "Adjustable (35)",
          "Art Deco (31)",
          "Knot (28)",
          "Initials (26)",
          "Ring Enhancers (20)",
          "Cross (3)",
        ],
      },
      {
        name: "Price",
        subcategories: [
          "Cocktail (274)",
          "Infinity (142)",
          "Eternity (87)",
          "Two Stone (73)",
          "Plain (65)",
          "Heart (58)",
          "Adjustable (35)",
          "Art Deco (31)",
          "Knot (28)",
          "Initials (26)",
          "Ring Enhancers (20)",
          "Cross (3)",
        ],
      },
    ];
  
    const [activeCategory, setActiveCategory] = useState(1); // Set the second category as default
  
    return (
      <div className="flex backdrop-blur-lg flex-row w-[80%] absolute top-[10%] h-screen bg-white shadow-lg">
        {/* Categories */}
        <div className="w-[50%] p-4 border-r-[1px] border-gray-300">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 hover:bg-gray-200 ${
                activeCategory === index
                  ? "text-[#c48c1f]" // Active category color
                  : "text-gray-700"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </div>
          ))}
        </div>
  
        {/* Subcategories */}
        <div className="w-[40%] p-4">
          {activeCategory !== null && categories[activeCategory].subcategories.length > 0 ? (
            <ul className="space-y-2">
              {categories[activeCategory].subcategories.map((subcategory, index) => (
                <li key={index} className="text-gray-700 cursor-pointer hover:text-[#c48c1f]">
                  {subcategory}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Select a category to view subcategories</p>
          )}
        </div>
        <div className='mt-[2vh]'>
          <i onClick={closeFilterBar} class="ri-close-line"></i>
        </div>
      </div>
    );
  };
  
  

export default Page;
