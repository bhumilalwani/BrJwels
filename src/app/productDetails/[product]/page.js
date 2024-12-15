'use client'

import React, { useRef, useState } from "react";
import Link from "next/link";
import ProductCustomization from "@/app/components/ProductCustomization";
import StaticNav from "@/app/components/StaticNav";
import DynamicNav from "@/app/components/DynamicNav";
import LeftRightSec from "@/app/components/LeftRightSec";
import CustomerReview from "@/app/components/CustomerReview";
import Awards from "@/app/components/Awards";
import FooterLastestStrip from "@/app/components/FooterLastestStrip";
import BottomSign from "@/app/components/BottomSign";
import LastFooter from "@/app/components/LastFooter";
import MostLoved from "@/app/components/MostLoved";
const ProductPage = () => {
    
        const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
      
        // Mouse move event handler
        const handleMouseMove = (event) => {
          setCursorPosition({
            x: event.clientX,
            y: event.clientY,
          });
        };
  const [activeImage, setActiveImage] = useState(0);

  // Default images in case none are provided
  const defaultImages = [
    "https://cdn-yotpo-images-production.yotpo.com/Review/628007773/612133633/original.jpg?1726934633?width=940&quality=95",
    "/placeholder.svg?height=640&width=640",
    "/placeholder.svg?height=640&width=640",
    "/placeholder.svg?height=640&width=640",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const [likedStones, setLikedStones] = useState({});

  const birthstones = [
      { name: 'Garnet', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
      { name: 'Amethyst', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
      { name: 'Aquamarine', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
      { name: 'Diamond', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
      { name: 'Garnet', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
      { name: 'Amethyst', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
      { name: 'Aquamarine', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
      { name: 'Diamond', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
  ];

  const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % birthstones.length);
  };

  const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? birthstones.length - 1 : prevIndex - 1));
  };

  const [activeTab, setActiveTab] = useState("similar");

  const recommendations = {
    similar: [
      { id: 1, name: "Solitaire Diamond Ring", price: "$1,200", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Gold Infinity Ring", price: "$980", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Eternity Band", price: "$1,500", image: "https://via.placeholder.com/150" },
    ],
    diamond: [
      { id: 4, name: "Princess Cut Ring", price: "$2,000", image: "https://via.placeholder.com/150" },
      { id: 5, name: "Vintage Diamond Ring", price: "$1,800", image: "https://via.placeholder.com/150" },
    ],
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
const images=[
    "https://assets.angara.com/common-images/gift-box-above-$2000.jpg?width=640&quality=95&width=768&quality=95",
  
    "https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=640&quality=95&width=768&quality=95",
    "https://cdn-yotpo-images-production.yotpo.com/Review/628007773/612133633/original.jpg?1726934633?width=940&quality=95",
    "https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant_200.jpg?width=940&quality=95&width=768&quality=95",
    "https://assets.angara.com/pendant/sp1084sd/5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=940&quality=95&width=768&quality=95",
    "https://assets.angara.com/pendant/sp1084sd/5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=940&quality=95&width=768&quality=95"
]

const [toShowProdDets, setToShowProdDets]=useState(false)

const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === celebrateWithColor.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? celebrateWithColor.length - 1 : prevIndex - 1
    );
  };
  const LikeHandler = (stoneName) => {
      setLikedStones((prevLiked) => ({
          ...prevLiked,
          [stoneName]: !prevLiked[stoneName], // Toggle liked state
      }));
  };
  // Use provided images or fall back to default images
  const productImages = images.length > 0 ? images : defaultImages;

  const [isActive, setIsActive]=useState("")

  return (
    <div className="min-h-screen bg-white ">
      <StaticNav />
      <DynamicNav />

      <div className="flex flex-col gap-[2vh] mx-auto my-[2vh] px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <Link href="/jewelry" className="hover:text-gray-700">Jewelry</Link>
          <span>/</span>
          <Link href="/jewelry/rings" className="hover:text-gray-700">Rings</Link>
          <span>/</span>
          <span className="text-gray-900">Solitaire Round Diamond Infinity Promise Ring</span>
        </div>
        <div className="md:hidden block">
        <h1 className="text-base font-semibold text-gray-700 ">
                Solitaire Round Diamond Infinity Promise Ring
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 underline ">(101 Reviews)</span>
              </div>
</div>
        
      </div>

      <main className="container mx-auto px-4 pt-8 w-full">
  <div className="flex flex-col md:flex-row gap-6">
    {/* Left Section */}
    <div className="md:w-[45%] xl:w-[65%] w-full">
      <div className="xl:hidden relative">
        <div className="sticky top-4 aspect-square bg-white">
          {productImages.length > 0 && (
            <img
              src={productImages[activeImage]}
              alt={`Product view ${activeImage + 1}`}
              className="w-full h-full object-contain"
            />
          )}
            {/* Thumbnail Buttons */}
        <div className="flex mt-4 gap-2 overflow-x-scroll scrollbar-hidden">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`flex-shrink-0 w-20 h-20 border ${
                activeImage === index ? "border-gray-600" : "border-gray-200"
              }`}
            >
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        </div>

      
        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setActiveImage((prev) =>
              prev === 0 ? productImages.length - 1 : prev - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            setActiveImage((prev) =>
              prev === productImages.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
     
            <div className="hidden xl:grid grid-cols-2 gap-2 w-[100%] px-5">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[100%] group"
                  onMouseMove={handleMouseMove}
                //   style={{ cursor: 'none' }}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full fit-contain cursor-crosshair"
                  />
                  {/* Custom Cursor */}
                  {/* <div
                    className="absolute hidden group-hover:flex bg-gray-300 rounded-full px-4 py-2 border-[1px] border-black"
                    style={{
                      top: `${cursorPosition.y}px`,
                      left: `${cursorPosition.x}px`,
                      pointerEvents: 'none',
                      zIndex: 999,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <i className="ri-add-large-fill py-1"></i>
                  </div> */}
                </div>
              ))}
              <SkinToneSlider></SkinToneSlider>
            </div>
          
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 w-full">
      <div className="sticky top-4 space-y-6">
        {/* Product Details */}
        <h1 className="text-base font-semibold text-gray-700">
          Solitaire Round Diamond Infinity Promise Ring
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 underline">(101 Reviews)</span>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-4">
          <span className="text-3xl text-gray-800">$3,555</span>
          <span className="text-xl text-gray-500 line-through">$3,949</span>
          <span className="text-sm text-green-600 font-medium">(10% OFF)</span>
        </div>

        {/* Customization */}
        <ProductCustomization />

        {/* Buttons */}
        <div className="flex gap-2 md:w-[60%]">
        <button className="flex-1 relative bg-black text-white text-white py-3 transition-transform px-6 group ">
                  Add to Cart
                  <span className="absolute left-0 top-[100%] bg-[#c48c1f] w-[0%] h-[4px] rounded-[0px] duration-1000 group-hover:w-full"></span>

                </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</main>

      <div className="w-[100%]">
        
        <div className="my-[10vh]">
          <LeftRightSec></LeftRightSec>
  
        </div>
        <div>
            <section className="section-gap py-10 bg-white transition-transform duration-500">
                <div className="container mx-auto text-center sm:px-[10vh]">
                    <h2 className="text-2xl font-normal mb-14">Recently Viewed</h2>
                    <div className="relative flex justify-center items-center">
                        {/* Left Arrow */}
                        {/* <button
                            onClick={prevSlide}
                            className="absolute left-0 text-gray-800 text-2xl rounded-full p-2 z-10"
                        >
                            &lt;
                        </button> */}

                        {/* Slider */}
                        <div className="relative w-[80%] overflow-hidden">
    <div
        className="flex transition-transform ease-in-out overflow-x-scroll scrollbar-hidden duration-500 gap-[20px]"
        style={{
            transform: `translateX(-${currentIndex * 80}px)`,
        }}
    >
        {birthstones.map((stone, index) => (
            <Link href="/productDetails/hsbcs" key={index}>
                <div className="relative group w-[300px] h-[350px] text-left bg-white px-[6%] sm:px-10 rounded-lg hover:shadow-lg">
                    <img
                        src={stone.image}
                        alt={stone.name}
                        className="sm:w-24 sm:h-24 transition-transform duration-500 w-[40%] h-[20%] rounded-full mx-auto mb-4"
                    />
                    <i
                        onClick={() => LikeHandler(stone.name)}
                        className={`absolute right-[8%] top-[5%] cursor-pointer font-extralight text-lg ${
                            likedStones[stone.name]
                                ? 'ri-heart-fill text-black-700' // Filled heart
                                : 'ri-heart-line text-gray-500' // Outlined heart
                        }`}
                    ></i>
                    <p className="font-semibold">{stone.name}</p>
                    <p className="text-gray-500 text-sm">Birthstone description</p>
                    <h3>$1,999.9</h3>
                    <button className="group-hover:block hidden sm:px-[50px] px-[30px] mt-[4vh] py-[8px] border-[1.5px] border-solid border-black whitespace-nowrap">
                        Customize Now
                    </button>
                </div>
            </Link>
        ))}
    </div>
</div>

                        {/* Right Arrow */}
                        {/* <button
                            onClick={nextSlide}
                            className="absolute right-0 text-gray-800 text-2xl p-2 z-10"
                        >
                            &gt;
                        </button> */}
                    </div>
                </div>
            </section>
        </div>
      <BottomSign></BottomSign>
      <div className='h-[8vh]'></div>
      <Awards></Awards>
      <ContactUs></ContactUs>
      <LastFooter></LastFooter>
      <FooterLastestStrip></FooterLastestStrip>
  </div>
    </div>
  );
};

const SkinToneSlider=()=>{
    const [skinTone, setSkinTone] = useState(0.25)
  
    const handleSliderChange = (e) => {
      setSkinTone(parseFloat(e.target.value))
    }
  
    return (
      <div className="relative hidden xl:block z-10 w-[476px] h-[476px] cursor-crosshair">
        {/* Main product image */}
       <div className="relative z-10">
        {/* Light skin tone overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-20">
          <img
            src="https://assets.angara.com/assets/product/pen-light.jpg?width=1024&quality=95"
            alt="Light Skin Tone"
            width={476}
            height={476}
          />
        </div>
  
        {/* Dark skin tone overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-30 transition-opacity duration-300"
          style={{ opacity: skinTone }}
        >
          <img
            src="https://assets.angara.com/assets/product/pen-dark.jpg?width=1024&quality=95"
            alt="Dark Skin Tone"
            width={476}
            height={476}
          />
        </div>
        <img 
        className="absolute z-50 w-[100%] left-0 top-0" alt="7x5mm AAA Blue Sapphire Teardrop Pendant with Diamond in White Gold pen" 
        srcSet="https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant_400.png?width=940&amp;quality=95&amp;width=360&amp;quality=95 1x, https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant_400.png?width=940&amp;quality=95&amp;width=768&amp;quality=95 2x" 
        src="https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant_400.png?width=940&amp;quality=95&amp;width=768&amp;quality=95" width="334" height="334" decoding="async" data-nimg="future" loading="eager" 
        style={{color: "transparent"}} data-uw-rm-alt-original="7x5mm AAA Blue Sapphire Teardrop Pendant with Diamond in White Gold pen" data-uw-rm-alt="ALT"
        />
        </div>
        {/* Vertical slider */}
        <div className="absolute top-0 right-0 h-full w-3 z-40 flex items-center bg-opacity-25 bg-white p-4 rounded-xl mr-[10px] flex items-center justify-center">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={skinTone}
            onChange={handleSliderChange}
            className="h-full custom-range cursor-ns-resize w-3 appearance-none bg-transparent "
            style={{
              WebkitAppearance: 'slider-vertical',
            //   writing-mode: 'bt-lr',
            }}
          />
        </div>
     
      </div>
    )
  }
  
  

const ProductDetails = () => {
  return (
    <div className="container relative z-50 mx-auto p-6">
      <div className="flex flex-wrap">



        {/* Product Info */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-xl font-semibold mb-2">
            Oval Sapphire and Round Diamond Border Ring
          </h1>
          <p className="text-lg text-gray-500 mb-4">SKU: SR0169S</p>

    

          {/* Product Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Product Details:</h2>
            <p className="text-gray-700">
              This stunning oval sapphire and round diamond border ring is
              crafted with precision and elegance. Featuring a vibrant oval
              sapphire encircled by brilliant round diamonds, it exudes luxury
              and sophistication. Perfect for any special occasion.
            </p>
          </div>

          
          {/* Additional Info Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Product Specifications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stone Type: Sapphire & Diamond</li>
              <li>Stone Cut: Oval & Round</li>
              <li>Material: 14K White Gold</li>
              <li>Band Width: 2.5mm</li>
              <li>Certification: Available upon request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



const ProductReview = () => {
    const reviews = [
      {
        name: "Emily Johnson",
        rating: 5,
        comment: "Absolutely stunning! The craftsmanship is incredible, and it looks even better in person.",
        date: "November 28, 2024",
      },
      {
        name: "Michael Carter",
        rating: 4,
        comment: "Beautiful piece, but the clasp feels a bit fragile. Overall, a great purchase.",
        date: "November 25, 2024",
      },
    ];
  
    const renderStars = (rating) => {
      return Array(5)
        .fill(0)
        .map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ));
    };
  
    return (
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl text-gray-800 mb-3 text-center">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };



  const ContactUs = () => {
    return (
      <div className="w-full py-[5vh] mt-[10vh] bg-[#F5F5F6] flex items-center justify-center gap-[5vh]">
        <div className="flex flex-col items-center justify-center">
        <i className="ri-phone-line font-extralight text-2xl"></i>
            <span>Phone</span>
        </div>
        <div className="flex flex-col items-center justify-center">
        <i className="ri-mail-line font-extralight text-2xl"></i>
            <span>Email</span>
        </div>
        <div className="flex flex-col items-center justify-center">
        <i className="ri-chat-3-line font-extralight text-2xl"></i>
            <span>Chat</span>
        </div>
      </div>
    )
  }
  
 

const YouMayALsoLike = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
 
    const [likedStones, setLikedStones] = useState({});
    const birthstones = [
        { name: 'Garnet', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Amethyst', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Aquamarine', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Diamond', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Garnet', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Amethyst', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Aquamarine', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
        { name: 'Diamond', image: 'https://assets.angara.com/ring/sr1912sd/5mm-aaa-blue-sapphire-white-gold-ring.jpg?width=256&quality=95' },
    ];
  
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % birthstones.length);
    };
  
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? birthstones.length - 1 : prevIndex - 1));
    };

  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
                <h1 className="text-2xl text-gray-600 my-[30px]">You May Also Like</h1>
                <div className="flex items-center justify-center gap-[2vw] group">
                  {/* {Object.keys(recommendations).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setTab(tab)}
                        className={`text-gray-700 text-sm border-b-2 border-${
                            tab === currentTab? 'gray-600' : 'transparent'
                        } hover:text-gray-600 hover:border-gray-600 transition duration-300`}
                    >
                        {tab}
                    </button>
                  ))} */}
                </div>
              <div className="relative z-10 flex w-[80%] justify-center items-center">
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 text-gray-800 text-2xl rounded-full p-2 z-10"
                        >
                            &lt;
                        </button>

                        {/* Slider */}
                        <div className="relative z-10 w-[80%] overflow-hidden">
                            <div
                                className="flex transition-transform ease-in-out duration-300 gap-[20px]"
                                style={{
                                    transform: `translateX(-${currentIndex * 140}px)`,
                                }}
                            >
                                {birthstones.map((stone, index) => (
                                    <div
                                        key={index}
                                        className="relative w-fit text-left bg-white px-[6%] sm:px-10 py-6 rounded-lg hover:shadow-lg"
                                    >
                                        <img
                                            src={stone.image}
                                            alt={stone.name}
                                            className="sm:w-24 sm:h-24 w-[40%] h-[40%] rounded-full mx-auto mb-4"
                                        />
                                        <i
                                            onClick={() => LikeHandler(stone.name)}
                                            className={`absolute right-[8%] top-[5%] cursor-pointer font-extralight text-lg ${
                                                likedStones[stone.name]
                                                    ? 'ri-heart-fill text-black-700' // Filled heart
                                                    : 'ri-heart-line text-gray-500' // Outlined heart
                                            }`}
                                        ></i>
                                        <p className="font-semibold">{stone.name}</p>
                                        <p className="text-gray-500 text-sm">Birthstone description</p>
                                        <h3>$1,999.9</h3>
                                        <button className="sm:px-[50px] px-[30px] mb-[2vh] mt-[4vh] py-[8px] border-[1.5px] border-solid border-black whitespace-nowrap">
                                            Customize Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 text-gray-800 text-2xl p-2 z-10"
                        >
                            &gt;
                        </button>
                    </div>
              </div>
  )
}


  

export default ProductPage;




