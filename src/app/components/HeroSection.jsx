import React from 'react'
import Link from 'next/link'

const  HeroSection = () => {
  return (
    <div className=''>
      <div className="relative mt-[10px] w-full h-screen overflow-hidden">
  {/* <!-- Background Video --> */}
  <video autoPlay loop muted src="/videos/Hero-Banner.mp4" className="absolute inset-0 w-full sm:h-full h-[70%] object-cover z-[-1]"
  >
   
    Your browser does not support the video tag.
  </video>


  {/* <!-- Content Over Video --> */}
  <div className="relative z-10 flex flex-col items-start ml-[20%] gap-[10px] justify-center h-full">
  <h4 className='text-xl text-white font-normal'>Who Needs Black Friday, When We&apos;ve Got Color?</h4>
                            <h1 className='text-[#C48C1F] text-2xl font-semibold'>2024&apos;s MOST COLORFUL DEALS</h1>
                            <div className="timer">Sale Ends In: <div className="countdown" id="countdownTimer">
                                    <span id="hours">00</span>h
                                    <span>:</span>
                                    <span id="minutes">00</span>m
                                    <span>:</span>
                                    <span id="seconds">00</span>s
                                </div>
                            </div>
                            <div className="hero-button border-[1px] border-solid border-white px-[25px] py-[10px] hover:bg-white ">
                                <Link href="/shop" className='text-white text-2xl font-normal hover:no-underline hover:text-black'>Shop Now</Link>
                            </div>
  </div>
</div>



<section className="sm:mt-[5%] -mt-[30%] sm:mb-[5%] mb-[10%] mx-auto w-fit ">
  <div className="container mx-auto">
    <div className="sm:flex grid grid-cols-3 items-center sm:gap-10 sm:flex-wrap">
      {/* Rings */}
      <div className="group relative">
        <Link
          href="/category/ring"
          className="block text-center"
          aria-label="Rings Category"
        >
          <div className="relative w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] mx-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              src="https://assets.angara.com/assets/homepage-Assets/new-assets/us/top-categories/rings.jpg?width=414&quality=95"
              alt="Main Image of Rings category"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="https://images.designtrends.com/wp-content/uploads/2016/02/16114154/Shiny-Blue-Ring.jpg" 
              alt="Secondary Image of Rings category"
            />
          </div>
          <span className="category-label">Rings</span>
        </Link>
      </div>
      {/* Earrings */}
      <div className="group relative">
        <Link
          href="/category/ring"
          className="block text-center"
          aria-label="Earrings Category"
        >
          <div className="relative w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] mx-auto ">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              src="https://assets.angara.com/assets/homepage-Assets/new-assets/us/top-categories/earrings.jpg?width=414&quality=95"
              alt="Main Image of Earrings category"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="https://cdn.fascinatingdiamonds.com/Website+Fancy+Images/2+Carat+Heart+Cut+Diamond+Earring+In+White+Gold-FDEAR10411HT-2.00CT.jpg" 
              alt="Secondary Image of Earrings category"
            />
          </div>
          <span className="category-label">Earrings</span>
        </Link>
      </div>
      {/* Necklaces */}
      <div className="group relative">
        <Link
          href="/category/ring"
          className="block text-center"
          aria-label="Necklaces Category"
        >
          <div className="relative w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] mx-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              src="https://assets.angara.com/assets/homepage-Assets/new-assets/us/top-categories/necklace.jpg?width=414&quality=95"
              alt="Main Image of Necklaces category"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="https://tse3.mm.bing.net/th?id=OIP.-xPUlSH38m8cOfUeR2MTUgHaHa&pid=Api&P=0&h=180"
              alt="Secondary Image of Necklaces category"
            />
          </div>
          <span className="category-label">Necklaces</span>
        </Link>
      </div>
      {/* Bracelets */}
      <div className="group relative">
        <Link
          href="/category/ring"
          className="block text-center"
          aria-label="Bracelets Category"
        >
          <div className="relative w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] mx-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              src="https://assets.angara.com/assets/homepage-Assets/new-assets/us/top-categories/bracelets.jpg?width=414&quality=95"
              alt="Main Image of Bracelets category"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="https://tse3.mm.bing.net/th?id=OIP.-xPUlSH38m8cOfUeR2MTUgHaHa&pid=Api&P=0&h=180" 
              alt="Secondary Image of Bracelets category"
            />
          </div>
          <span className="category-label">Bracelets</span>
        </Link>
      </div>
      {/* Lab Diamond Jewelry */}
      <div className="group relative">
        <Link
          href="/category/ring"
          className="block text-center"
          aria-label="Lab Diamond Jewelry Category"
        >
          <div className="relative w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] mx-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              src="https://assets.angara.com/assets/homepage-Assets/new-assets/us/top-categories/lab-grown-jewelry.jpg?width=414&quality=95"
              alt="Main Image of Lab Diamond Jewelry category"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="https://tse3.mm.bing.net/th?id=OIP.-xPUlSH38m8cOfUeR2MTUgHaHa&pid=Api&P=0&h=180" 
              alt="Secondary Image of Lab Diamond Jewelry category"
            />
          </div>
          <span className="category-label">
            Lab Diamond Jewelry
          </span>
        </Link>
      </div>
      {/* GIA Collection */}
      <div className="group relative">
        <Link
          href="/category/ring"
          className="block text-center"
          aria-label="GIA Collection Category"
        >
          <div className="relative w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] mx-auto">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              src="https://assets.angara.com/assets/homepage-Assets/new-assets/us/top-categories/certified-jewelry.jpg?width=414&quality=95"
              alt="Main Image of GIA Collection category"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              src="https://tse3.mm.bing.net/th?id=OIP.-xPUlSH38m8cOfUeR2MTUgHaHa&pid=Api&P=0&h=180"
              alt="Secondary Image of GIA Collection category"
            />
          </div>
          <span className="category-label">
            GIA Collection
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>;

    </div>
  )
}

export default HeroSection
