'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import StaticNav from '@/app/components/StaticNav';
import DynamicNav from '@/app/components/DynamicNav';
import { useRef } from 'react';
import BottomSign from '@/app/components/BottomSign';
import Awards from '@/app/components/Awards';
import FooterLastestStrip from '@/app/components/FooterLastestStrip';
import LastFooter from '@/app/components/LastFooter';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// import required modules
import { Navigation } from 'swiper/modules';

const Page = () => {
  const params = useParams();
  const [showFilter, setShowFilter] = useState(false);
  const productTitles = [
   {title:"Lab Grown Diamonds ",
    price:"$999",
    images : [
        "https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr1381opd/8x6mm-aaaa-opal-rose-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr1432d/2.1mm-hsi2-diamond-white-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/lsr4329d/10x8mm-fgvs-lab-grown-diamond-white-gold-ring.jpg?width=414&quality=95",
      ]
   },
   {title:"Lab Grown Diamonds ",
    price:"$999",
    images : [
        "https://assets.angara.com/ring/sr1381opd/8x6mm-aaaa-opal-rose-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr1381opd/8x6mm-aaaa-opal-rose-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr1432d/2.1mm-hsi2-diamond-white-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/lsr4329d/10x8mm-fgvs-lab-grown-diamond-white-gold-ring.jpg?width=414&quality=95",
      ]
   },
   {title:"Lab Grown Diamonds ",
    price:"$999",
    images : [
        "https://assets.angara.com/ring/sr3709ed_h/8.20x6.07x4.20mm-aaa-emerald-white-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr1381opd/8x6mm-aaaa-opal-rose-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr2500fwprd/5mm-aaaa-freshwater-cultured-pearl-yellow-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/lsr4329d/10x8mm-fgvs-lab-grown-diamond-white-gold-ring.jpg?width=414&quality=95",
      ]
   },
   {title:"Lab Grown Diamonds ",
    price:"$999",
    images : [
        "https://assets.angara.com/ring/sr2500fwprd/5mm-aaaa-freshwater-cultured-pearl-yellow-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr1381opd/8x6mm-aaaa-opal-rose-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/sr1432d/2.1mm-hsi2-diamond-white-gold-ring.jpg?width=414&quality=95",
        "https://assets.angara.com/ring/lsr4329d/10x8mm-fgvs-lab-grown-diamond-white-gold-ring.jpg?width=414&quality=95",
      ]
   },
  ];



  const celebrateWithColor=[
    'https://edge.curalate.com/v1/img/6Ygup5L_YdhmBlU_LMIs9cP_O6C66CiHUjwHLT49lXA=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/qtADTsxIXFY8QboSPSvWxJMNgrRf5MukUQXk4LC1haA=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/MHLTX0vyS81a9m3Dsv64c42mkcevjsJ0PTf4z-k-Ezk=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/oDe5DZe6iAsLCkHHbm6-4kUblp-GOCqohCDBnE8o2tA=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/zd8rYqw3zL10j-UvQkbKJjPQWoVFxBY121N_AKexWBw=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/6Ygup5L_YdhmBlU_LMIs9cP_O6C66CiHUjwHLT49lXA=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/qtADTsxIXFY8QboSPSvWxJMNgrRf5MukUQXk4LC1haA=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/MHLTX0vyS81a9m3Dsv64c42mkcevjsJ0PTf4z-k-Ezk=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/oDe5DZe6iAsLCkHHbm6-4kUblp-GOCqohCDBnE8o2tA=/w/300?typ=webp',
    'https://edge.curalate.com/v1/img/zd8rYqw3zL10j-UvQkbKJjPQWoVFxBY121N_AKexWBw=/w/300?typ=webp'


]
  const [prevState, setPrevState] = useState(productTitles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const LoadMoreHandeler = () => {
    setPrevState((prev) => [...prev, ...productTitles]);
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const products = [
    {
      id: "1",
      name: "white gem",
      img: "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
    },
    {
      id: "2",
      name: "blue gem",
      img: "https://raymondleejewelers.net/wp-content/uploads/2019/02/custom-design-a-ring-example.jpg",
    },
    {
      id: "3",
      name: "gold gem",
      img: "https://i.etsystatic.com/12828076/r/il/6cef40/2347357644/il_fullxfull.2347357644_6pfl.jpg",
    },
   
      {
        id: "5",
        name: "blue gem",
        img: "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
      },
      {
        id: "6",
        name: "gold gem",
        img: "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
      },
          {
      id: "7",
      name: "white gem",
      img: "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
    },
    {
      id: "8",
      name: "blue gem",
      img: "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
    },
    {
      id: "9",
      name: "gold gem",
      img: "https://i.pinimg.com/originals/a6/e9/ba/a6e9bacd8703944b93f9710a5250db75.jpg",
    },
  ];
  const sliderRef = useRef(null); // Ref to track the slider div

  const handleLeftClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -20, behavior: 'smooth' });
    }
  };


  return (
    <div className='text-black'>
      <StaticNav />
      <DynamicNav/>

      <div className='flex flex-col mt-[5vh] items-start px-[2%]'>
        <div className='flex flex-col sm:flex-row w-[100%] h-[100%] bg-white items-center gap-[1%]'>
        <div className='flex flex-col w-[95%] ml-5'><h2 className='text-[var(--primary-800)] text-xl font-semibold text-left capitalize'>
          {/* {params.product} */}
          Rings
        </h2>
        <p className='text-sm mt-[1vh] font-semibold text-[var(--primary-500)] mb-5'>
          Make a statement wherever you go with handcrafted rings from Angara.
          From &quot;love tokens to outfit pick-me-ups, we have got them all. Get exploring
        </p>
        <div className='flex-col mt-[5vh] items-start justify-center hidden xl:flex'>
            <h3 className='text-[var(--primary-500)] fony-semibold text-base text-[var(--primary-500)]'>Get 10% OFF on orders over $500 & Free Gifts</h3>
            <button className='bg-black text-white mt-[2vh] font-sm px-[10px] py-[5px] mb-[5vh]'>View All Offers</button>
        </div>
        </div>
        <div className="relative w-[100%] sm:w-[50%]">
      {/* Left Arrow */}
      
      {/* Slider Container */}
      <div className="relative w-[100%] flex justify-center ">
  <Swiper
    centeredSlides={true}
    navigation={{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }}
    spaceBetween={2}
    slidesPerView={3} // Default slides per view
                        // Space between slides
    breakpoints={{
  750: {
    slidesPerView:3,
  },
    640: {
      slidesPerView: 2, // 2 slides on screens larger than 768px
    },
    500:{
        slidesPerView:2,
    },
    400:{
        slidesPerView:1,
    },
    0: {
      slidesPerView: 1, // 1 slide on screens larger than 480px
    },
  }} // Adds space between slides
    // Allows slides to be centered based on their content width
    modules={[Navigation]}
    className="mySwiperCategoryTop w-[60%] " // Adjust the width of the Swiper container
  >
    {products.map((product) => (
     <SwiperSlide key={product.id} className="swiperSlide flex justify-center items-center">
     <Link
       href={`/productDetails/${product.id}`}
       className="flex sm:w-[15vw] shrink-0 h-[35vh] items-center relative justify-center"
     >
       <div className="w-[100%] h-[100%] overflow-hidden hover:contrast-50 transition duration-300">
         <img
           className="w-[90%] h-[100%] transition duration-500" // No hover effects
           src={product.img}
           alt={product.name}
         />
       </div>
       <h3 className="absolute top-[78%] text-left ml-[2%] text-lg font-semibold text-gray-200 capitalize">
         {product.name}
       </h3>
     </Link>
   </SwiperSlide>
    ))}
  </Swiper>
 

  {/* Custom Navigation Buttons */}
  <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
    {/* Custom Previous Button Icon */}
  
  </div>

  <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
    {/* Custom Next Button Icon */}
  
  </div>
</div>


    </div>
          </div>
          <div className='flex items-center w-[100%] justify-between md:ml-[40%] md:w-[60%] mt-[4vh]'>
            <h3 className='text-[var(--primary-800)] text-xl font-bold'>5394 custom rings</h3>
            <button
              onClick={toggleFilter}
              className='hover:bg-black hover:text-white duration-500 text-[var(--headings-color)] md:hidden text-normal font-semibold px-[12px] rounded-[5px] py-[5px] border-[1px]'
            >
              Filter
            </button>
            <div className='flex flex-col sm:flex-row'><button className='hover:bg-black hover:text-white duration-500 text-black text-normal font-semibold px-[12px] rounded-[5px] py-[5px] border-[1px]'>
             <h2 className='text-[var(--headings-color)]'>Sort By</h2>
           
            </button>  <select className=' text-[var(--primary-800)] bg-transparent outline-none'>
        <option className='text-xs text-[var(--primary-800)]' value="Best Seller">Best Seller</option>
        <option className='text-xs text-[var(--primary-800)]' value="Best Seller">Best Seller</option>
        <option className='text-xs text-[var(--primary-800)]' value="Best Seller">Best Seller</option>
        <option className='text-xs text-[var(--primary-800)]' value="Best Seller">Best Seller</option>
    </select></div>
            </div>
        <div className='flex relative flex-col mt-[1vh] sm:flex-row items-start gap-2 -mt-[0%] '>
          
          <div className='filter-sort sticky sm:w-[30%] flex items-center justify-center gap-[5%] sm:gap-[15%] py-[20px] w-[100%]'>
          
           <FilterSectionForBigScreens className="hidden sm:flex"></FilterSectionForBigScreens>
          </div>
          <div className='flex flex-col w-[100%] md:w-[72%] items-center mx-auto justify-center'>
            <div className='grid ml-[10%] justify-center grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-[1vw] gap-3 mt-[0vh]'>
            {prevState.map((obj, index) => (
            <div key={index} className='flex flex-col text-[var(--headings-color)]'>
                <ProductItem key={index} images={obj.images}/>    {/* Text Section */}
            <div className="text-left">
              <h3 className="product-name text-base font-medium">
                {obj.title}
              </h3>
              <span className="price text-md text-[var(--primary-800)]">{obj.price}</span>
            </div></div>
            ))}
          </div>
          <button
            onClick={LoadMoreHandeler}
            className='loadMore whitespace-nowrap hover:bg-black hover:text-white duration-500 border-[1px] mt-[4vh] border-black px-[12px] py-[6px] w-[80%] sm:w-[20%] sm:mt-[5vh] mx-auto mb-[10vh]'
          >
            Load More
          </button></div>
        </div>
      </div>
      {showFilter ? <FilterSection setShowFilter={setShowFilter}/> : null}
      <div className="w-[100%] flex flex-col items-center sm:mt-[10vh] ">
      <h2 className="font-semibold text-2xl text-[var(--headings-color)]">#CelebrateWithColor</h2>
      <p className="text-[var(--primary-500)] mt-2 px-4">
        Keep up with @Brjewelry making colorful noise in the world.
      </p>
      <div className="relative w-[80%] overflow-x-scroll scrollbar-hidden mt-6">
        {/* Slider */}
        <div
          className="flex gap-4 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${celebrateWithColor.length * 60}%`,
          }}
        >
            
          {celebrateWithColor.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[10%] h-[] sm:w-[5%] hover:contrast-50 transition-transform duration-500"
              
              
            >
              <img
                src={image}
                alt={`Celebrate With Color ${index}`}
                className="w-full h-30 object-cover rounded-md"
              />
            </div>
          ))}


       
        </div>

      
      
        
      </div>

      <TabSwitcher></TabSwitcher>
      <AllAboutRings></AllAboutRings>
    </div>
    <div className='sm:h-[20vh]'></div>
    <BottomSign ></BottomSign>
    <div className='sm:h-[10vh] '></div>
    <Awards></Awards>
    <LastFooter></LastFooter>
    <FooterLastestStrip></FooterLastestStrip>
    </div>
  );
};  



const ProductItem = ({images}) => {
  // State to track the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
 

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-item relative z-0">
    <div className="product-card flex flex-col items-center space-y-4 p-2">
      <div className="media relative w-[80%] lg:w-[60%]">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded-lg w-full pb-5 h-auto fit-cover"
                alt={`Product ${index + 1}`}
                src={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
      <div className='flex flex-col'>
        <div className="flex md:hidden overflow-y-scroll backdrop-blur-lg flex-row w-[100%] h-[100%] fixed top-0 left-0 z-50 bg-white shadow-lg">
        {/* Categories */}
        <div className="w-[50%] p-4 border-r-[1px] border-gray-300">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 hover:bg-gray-200 ${
                activeCategory === index
                  ? "text-[#c48c1f]" // Active category color
                  : "text-[var(--primary-800)]"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </div>
          ))}
        </div>
  
        {/* Subcategories */}
        <div className="w-[40%] p-4 h-fit">
          {activeCategory !== null && categories[activeCategory].subcategories.length > 0 ? (
            <ul className="space-y-2">
              {categories[activeCategory].subcategories.map((subcategory, index) => (
                <li key={index} className="text-[var(--primary-800)] cursor-pointer hover:text-[#c48c1f]">
                  {subcategory}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[var(--primary-500)]">Select a category to view subcategories</p>
          )}
        </div>
        <div className='mt-[2vh]'>
          <i onClick={closeFilterBar} className="ri-close-line"></i>
        </div>
      
      </div>
        <div className='flex fixed top-[93%] z-50 w-[100%] items-center justify-between'>
        <button onClick={closeFilterBar} className='w-[50%] py-[2vh] hover:bg-white hover:text-black transition transition-transforn duration-500 bg-black text-white text-xl text-center'>
          Cancel
        </button>
        <button className='bg-black w-[50%] py-[2vh] hover:bg-white hover:text-black transition transition-transforn duration-500 text-white text-xl text-center'>
          Apply
        </button>
      </div>
     </div>
    );
  };



const FilterSectionForBigScreens = () => {
  const [expandedSections, setExpandedSections] = useState({
    metalType: true,
    naturalGemstones: false,
    labGrownGemstones: false,
    gemstoneShape: false,
    jewelryStyles: false,
    price: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full hidden md:block max-w-[280px] bg-white -mt-[0vh]">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button className="text-sm text-[var(--primary-500)] hover:text-[var(--primary-800)]">
          Clear All
        </button>
      </div>

      {/* Metal Type Filter */}
      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection('metalType')}
        >
          <h3 className="text-base font-medium">Metal Type</h3>
          <span className="text-gray-400">
            {expandedSections.metalType ? '−' : '+'}
          </span>
        </div>
        {expandedSections.metalType && (
          <div className="px-4 pb-4">
            <label className="flex items-center space-x-3 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />
              <div className="flex items-center">
                <span className="w-6 h-6 mr-2">
                  <span className="block w-4 h-4 rounded-full bg-gray-200"></span>
                </span>
                <span className="text-sm">White Gold</span>
                <span className="text-sm text-[var(--primary-500)] ml-1">(4602)</span>
              </div>
            </label>
            <label className="flex items-center space-x-3 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />
              <div className="flex items-center">
                <span className="w-6 h-6 mr-2">
                  <span className="block w-4 h-4 rounded-full bg-yellow-200"></span>
                </span>
                <span className="text-sm">Yellow Gold</span>
                <span className="text-sm text-[var(--primary-500)] ml-1">(4271)</span>
              </div>
            </label>
            <label className="flex items-center space-x-3 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />
              <div className="flex items-center">
                <span className="w-6 h-6 mr-2">
                  <span className="block w-4 h-4 rounded-full bg-rose-200"></span>
                </span>
                <span className="text-sm">Rose Gold</span>
                <span className="text-sm text-[var(--primary-500)] ml-1">(3980)</span>
              </div>
            </label>
          </div>
        )}
      </div>

      {/* Natural Gemstones Filter */}
      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection('naturalGemstones')}
        >
          <h3 className="text-base font-medium">Natural Gemstones</h3>
          <span className="text-gray-400">
            {expandedSections.naturalGemstones ? '-' : '+'}
          </span>
        </div>
        {expandedSections.naturalGemstones && (
          <div className="px-4 pb-4">{/* Add natural gemstones options */}</div>
        )}
      </div>

      {/* Lab Grown Gemstones Filter */}
      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection('labGrownGemstones')}
        >
          <h3 className="text-base font-medium">Lab Grown Gemstones</h3>
          <span className="text-gray-400">
            {expandedSections.labGrownGemstones ? '−' : '+'}
          </span>
        </div>
        {expandedSections.labGrownGemstones && (
          <div className="px-4 pb-4">
            {/* Add lab-grown gemstones options */}
          </div>
        )}
      </div>

      {/* Gemstone Shape Filter */}
      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection('gemstoneShape')}
        >
          <h3 className="text-base font-medium">Gemstone Shape</h3>
          <span className="text-gray-400">
            {expandedSections.gemstoneShape ? '−' : '+'}
          </span>
        </div>
        {expandedSections.gemstoneShape && (
          <div className="px-4 pb-4">
            {/* Add gemstone shape options */}
          </div>
        )}
      </div>

      {/* Jewelry Styles Filter */}
      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection('jewelryStyles')}
        >
          <h3 className="text-base font-medium">Jewelry Styles</h3>
          <span className="text-gray-400">
            {expandedSections.jewelryStyles ? '−' : '+'}
          </span>
        </div>
        {expandedSections.jewelryStyles && (
          <div className="px-4 pb-4">
            {/* Add jewelry styles options */}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleSection('price')}
        >
          <h3 className="text-base font-medium">Price</h3>
          <span className="text-gray-400">
            {expandedSections.price ? '−' : '+'}
          </span>
        </div>
        {expandedSections.price && (
          <div className="px-4 pb-4">
            {/* Add price filter options */}
          </div>
        )}
      </div>
    </div>
  );
};


const AllAboutRings=()=>{
  const [currentPage, setCurrentPage] = useState(0)
  const reviews = [
    {
      id: 1,
      title: "Beautiful Engagement Ring",
      content: "This ring looks beautiful! The aquamarine stone was a great colour in person. I was afraid it might not look as good as the pictures online but it turned out perfect. They have great customer service as well. I wanted the ring in a size that wasn't available online but once I emailed, they were happy to accommodate my wishes and made the ring how I wanted. The engraved writing looks fantastic as well. Both my (now) fiancée and I are pleased at how beautiful the ring is.",
      rating: 5,
      author: "Scott S.",
      date: "12/03/24",
      image: "https://cdn-yotpo-images-production.yotpo.com/Review/654280321/636198600/square.jpg?1732568580&width=256&quality=95"
    },
    {
      id: 2,
      title: "Awesome!",
      content: "Exactly as described and pictured. Fast shipping and boxed beautifully!",
      rating: 5,
      author: "Valerie H.",
      date: "12/02/24",
      image: "https://cdn-yotpo-images-production.yotpo.com/Review/654154992/636129866/square.jpg?1732553439&width=256&quality=95"
    },
    {
      id: 3,
      title: "She said yes.",
      content: "The ring was amazing. My now fiancee loves it.",
      rating: 5,
      author: "Ryan F.",
      date: "11/26/24",
      image: "https://cdn-yotpo-images-production.yotpo.com/Review/654145709/636126479/square.jpg?1732552340&width=256&quality=95"
    },
    {
      id: 4,
      title: "Absolutely Stunning",
      content: "The ring exceeded all my expectations. I am thrilled with my purchase.",
      rating: 5,
      author: "Lisa T.",
      date: "11/20/24",
      image: "https://cdn-yotpo-images-production.yotpo.com/Review/653460636/634995889/square.jpg?1732207937&width=256&quality=95"
    },
    {
      id: 5,
      title: "Worth Every Penny",
      content: "Beautiful craftsmanship and an amazing price. Would highly recommend.",
      rating: 5,
      author: "James L.",
      date: "11/15/24",
      image: "https://cdn-yotpo-images-production.yotpo.com/Review/653460636/634995889/square.jpg?1732207937&width=256&quality=95"
    }
  ]
  
    // Helper to chunk reviews into groups of 3
    const chunkReviews = (arr, size) =>
        arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), [])
      
  const reviewsInChunks = chunkReviews(reviews, 3)

  const nextReviews = () => {
    setCurrentPage((prev) => (prev + 1) % reviewsInChunks.length)
  }

  const prevReviews = () => {
    setCurrentPage((prev) => (prev - 1 + reviewsInChunks.length) % reviewsInChunks.length)
  }

  

  return (
    <section className="max-w-7xl -mt-[5vh] w-full h-auto mx-auto px-4 py-12">
    <div className="space-y-8">
      <div className="bg-white p-6 w-full h-auto md:h-[80vh] rounded-lg shadow-md">
        {reviewsInChunks[currentPage].map((review) => (
          <div
            key={review.id}
            className="flex flex-col md:flex-row items-start gap-4 mb-6"
          >
            <div className="w-24 h-24  md:w-[8vw] md:h-auto flex-shrink-0">
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg md:text-xl text-[var(--headings-color)] font-semibold mb-2">
                {review.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--primary-500)] mb-4">
                {review.content}
              </p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-sm md:text-base">
                  {review.rating}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs md:text-base ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xs md:text-sm text-[var(--primary-500)]">
                <span>{review.author}</span>
                <span className="mx-2">-</span>
                <span>{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevReviews}
          className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-[var(--primary-800)] rounded-lg hover:bg-gray-200"
        >
          Previous
        </button>
        <button
          onClick={nextReviews}
          className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-[var(--primary-800)] rounded-lg hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  </section>
  
  )
}



const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("Reviews");

  return (
    <div className="switches-container flex space-x-10 relative mt-[10vh]">
      {["Reviews", "Overview"].map((tab) => (
        <h2
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`customize-button heading2 text-lg font-semibold cursor-pointer relative ${
            activeTab === tab ? "text-black" : "text-[var(--primary-500)]"
          }`}
        >
          {tab}
          {/* Animated underline */}
          <span
            className={`absolute left-0 bottom-0 h-[1px] bg-black transition-all duration-300 ${
              activeTab === tab ? "w-full" : "w-0"
            }`}
          ></span>
        </h2>
      ))}
      <hr></hr>
    </div>
  );
};





export default Page;