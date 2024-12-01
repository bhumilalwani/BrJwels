import React from 'react'
import Link from 'next/link'

const LastFooter = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[20px] px-[5vw] mt-[10vh] pb-[5vh] mb-[5vh] bg-[#F5F5F6]'>
      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>ASSISTANCE</h2>
        <Link className='hover:text-[#d6993e]' href='/'>Contact</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Email Us</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Chat With Us</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Track Your Order</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Returns & Exchange</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Resize & Repair</Link>
        <Link className='hover:text-[#d6993e]' href='/'>FAQs</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Accessiblity</Link>
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>EXPERIENCE BR</h2>
        <Link className='hover:text-[#d6993e]' href='/'>The BR Difference</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Free Express Shipping</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Free Returns</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Payment Options</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Lifetime Warranty</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Enhanced Warranty Plan</Link>
       
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>SHOP</h2>
        <Link className='hover:text-[#d6993e]' href='/'>Lab Grown Jewelry</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Diamond Jewelry</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Sapphire Jewelry</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Emerald Jewelry</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Ruby Jewelry</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Tanzanite Jewelry</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Pearl Jewelry</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Opal Jewelry</Link>
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>ABOUT US</h2>
        <Link className='hover:text-[#d6993e]' href='/'>Our Story</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Customer Reviews</Link>
        <Link className='hover:text-[#d6993e]' href='/'>BR in the Press</Link>
        <Link className='hover:text-[#d6993e]' href='/'>The Blog</Link>
    
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>PARTNER WITH US</h2>
        <Link className='hover:text-[#d6993e]' href='/'>Affiliate Program</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Join the Glam Squad</Link>
   
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>PROMOTIONS</h2>
        <Link className='hover:text-[#d6993e]' href='/'>Promo Codes & Offers</Link>
        <Link className='hover:text-[#d6993e]' href='/'>US Service Discount</Link>
        <Link className='hover:text-[#d6993e]' href='/'>Community Offers</Link>
      </div>
    </div>
  )
}

export default LastFooter
