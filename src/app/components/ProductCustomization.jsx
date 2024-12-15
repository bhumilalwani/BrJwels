"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper/modules';
const ProductCustomization = () => {
  const [selectedQuality, setSelectedQuality] = useState("ij-i1i2");
  const [selectedCarat, setSelectedCarat] = useState("1ct");
  const [selectedMetal, setSelectedMetal] = useState("platinum");
  const [selectedSize, setSelectedSize] = useState(7);

  return (
    <div className="space-y-8">
      {/* Gemstone Quality Section */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-start text-sm font-semibold w-full border-[0.5px] border-gray-100 mb-4">
          <h4>Gemstone Quality: Best</h4>
        </div>
        <div className="flex items-center justify-start w-full">
          <div className="flex flex-col items-center justify-center gap-5 border-r-[0.5px] border-gray-200 px-2">
            <h3 className="bg-[#FBF4E6] px-2 border-[0.6px] border-gray-300 whitespace-nowrap">
              Lab Grown
            </h3>
            <img
              className="w-[20px] h-[20px]"
              src="https://purepng.com/public/uploads/medium/purepng.com-sapphire-gem-stonesapphiregemstonemineral-corundumaluminium-oxideblue-in-colorfancysapphires-1701528980430ruv6y.png"
              alt="Sapphire"
            />
            <h4 className="text-xs text-gray-600">Premium</h4>
          </div>
          <div className="flex flex-col items-start px-2">
            <h3 className="bg-[#FBF4E6] px-2 border-[0.6px] border-gray-300 whitespace-nowrap mb-5">
              Natural
            </h3>
            <div className="flex items-center justify-center overflow-x-scroll scrollbar-hidden">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-5 border-r-[0.5px] border-gray-200 px-5"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src="https://purepng.com/public/uploads/medium/purepng.com-sapphire-gem-stonesapphiregemstonemineral-corundumaluminium-oxideblue-in-colorfancysapphires-1701528980430ruv6y.png"
                      alt="Sapphire"
                    />
                    <h4 className="text-xs text-gray-600">Premium</h4>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Total Carat Weight Section */}
      <div>
        <h3 className="text-sm font-medium mb-4">Total Carat Weight: 1 Ct</h3>
        <Swiper
  slidesPerView={6}
//   centeredSlides={true}
  spaceBetween={0}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper swiperProdCust"
>
  {["1/8 Ct", "1/4 Ct", "1/2 Ct", "1 Ct", "1.5 Ct","1.2 Ct", "1.5 Ct","1.2 Ct", "1.5 Ct"].map((carat) => (
    <SwiperSlide className="swiper " key={carat}>
      <button
        onClick={() => setSelectedCarat(carat)}
        className={`p-2 w-[75px] mb-1 border rounded-md h-[80px] ${
          selectedCarat === carat
            ? "border-gray-600"
            : "border-gray-200"
        }`}
      >
        <img className="h-[30px]" src="https://assets.angara.com/pendant/sp1084sd/5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=940&quality=95&width=768&quality=95" alt="" />
        <div className="text-xs -mt-[1vh]">{carat}</div>
       
      </button>
      {carat === "1 Ct" && (
          <div className="text-xs text-[#C48C1F] ">Popular</div>
        )}
    </SwiperSlide>
  ))}
</Swiper>

      </div>

      {/* Metal Type Section */}
      <div>
        <h3 className="text-sm font-medium mb-4">Metal Type: Platinum</h3>
        <Swiper
  slidesPerView={8}
//   centeredSlides={true}
  spaceBetween={0}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper swiperProdCust"
>
  {["Silver", "Gold", "Rose Gold", "Rose Gold","White Gold", "Rose Gold","Rose Gold", "Yellow Gold"].map((carat) => (
    <SwiperSlide className="swiper " key={carat}>
      <button
        onClick={() => setSelectedCarat(carat)}
        className={`p-2 w-[40px] mb-1 border rounded-md h-[40px] ${
          selectedCarat === carat
            ? "border-gray-600"
            : "border-gray-200"
        }`}
      >
        <img className="h-[20px]" src="https://assets.angara.com/catalog/product/metal/14k-rose-gold.png?width=50" alt="" />
        
       
      </button>
      {carat === "1 Ct" && (
          <div className="text-xs text-[#C48C1F] ">Popular</div>
        )}
        <div className="text-xs ">{carat}</div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>

      {/* Select Size Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Select Size</h3>
          <button className="text-sm text-blue-600">Size Guide</button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hidden">
          {[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`min-w-[48px] h-12 border rounded-md flex items-center justify-center ${
                selectedSize === size
                  ? "border-gray-800 bg-gray-50"
                  : "border-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="header flex items-center justify-start gap-[60%] pr-5">
  <span className="explore-heading">
    Explore Gemstones <span className="new">NEW</span>
  </span>
  <div className="gemstone flex" data-section="'cat prod gemchange'">
    <div className="gemstone-item cp">
      <div className="item-inner slider-item">
        <img
          alt="Emerald"
          srcSet="https://assets.angara.com/catalog/product/E-Round-Faceted-AAAA.png?width=32&quality=95 1x, https://assets.angara.com/catalog/product/E-Round-Faceted-AAAA.png?width=48&quality=95 2x"
          src="https://assets.angara.com/catalog/product/E-Round-Faceted-AAAA.png?width=48&quality=95"
          width="20"
          height="20"
          decoding="async"
          loading="lazy"
          style={{ color: 'transparent' }}
          data-uw-rm-alt-original="Emerald"
          data-uw-rm-alt="ALT"
        />
      </div>
    </div>
    <div className="gemstone-item cp">
      <div className="item-inner slider-item">
        <img
          alt="Ruby"
          srcSet="https://assets.angara.com/catalog/product/R-Round-Faceted-AAAA.png?width=32&quality=95 1x, https://assets.angara.com/catalog/product/R-Round-Faceted-AAAA.png?width=48&quality=95 2x"
          src="https://assets.angara.com/catalog/product/R-Round-Faceted-AAAA.png?width=48&quality=95"
          width="20"
          height="20"
          decoding="async"
          loading="lazy"
          style={{ color: 'transparent' }}
          data-uw-rm-alt-original="Ruby"
          data-uw-rm-alt="ALT"
        />
      </div>
    </div>
    <div className="gemstone-item cp">
      <div className="item-inner slider-item ">
        <img
          alt="Diamond"
          srcSet="https://assets.angara.com/catalog/product/D-Round-Faceted-GHVS.png?width=32&quality=95 1x, https://assets.angara.com/catalog/product/D-Round-Faceted-GHVS.png?width=48&quality=95 2x"
          src="https://assets.angara.com/catalog/product/D-Round-Faceted-GHVS.png?width=48&quality=95"
          width="20"
          height="20"
          decoding="async"
          loading="lazy"
          style={{ color: 'transparent' }}
          data-uw-rm-alt-original="Diamond"
          data-uw-rm-alt="ALT"
        />
      </div>
    </div>
    <div className="gemstone-count a2">+2</div>
  </div>
</div>

    </div>
  );
};



export default ProductCustomization;



