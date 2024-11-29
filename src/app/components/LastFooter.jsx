import React from 'react'
import Link from 'next/link'

const LastFooter = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[20px] px-[5vw] mt-[10vh] pb-[5vh] mb-[5vh] bg-[#F5F5F6]'>
      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>ASSISTANCE</h2>
        <Link href='/'>Contact</Link>
        <Link href='/'>Email Us</Link>
        <Link href='/'>Chat With Us</Link>
        <Link href='/'>Track Your Order</Link>
        <Link href='/'>Returns & Exchange</Link>
        <Link href='/'>Resize & Repair</Link>
        <Link href='/'>FAQs</Link>
        <Link href='/'>Accessiblity</Link>
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>EXPERIENCE BR</h2>
        <Link href='/'>The BR Difference</Link>
        <Link href='/'>Free Express Shipping</Link>
        <Link href='/'>Free Returns</Link>
        <Link href='/'>Payment Options</Link>
        <Link href='/'>Lifetime Warranty</Link>
        <Link href='/'>Enhanced Warranty Plan</Link>
       
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>SHOP</h2>
        <Link href='/'>Lab Grown Jewelry</Link>
        <Link href='/'>Diamond Jewelry</Link>
        <Link href='/'>Sapphire Jewelry</Link>
        <Link href='/'>Emerald Jewelry</Link>
        <Link href='/'>Ruby Jewelry</Link>
        <Link href='/'>Tanzanite Jewelry</Link>
        <Link href='/'>Pearl Jewelry</Link>
        <Link href='/'>Opal Jewelry</Link>
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>ABOUT US</h2>
        <Link href='/'>Our Story</Link>
        <Link href='/'>Customer Reviews</Link>
        <Link href='/'>BR in the Press</Link>
        <Link href='/'>The Blog</Link>
    
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>PARTNER WITH US</h2>
        <Link href='/'>Affiliate Program</Link>
        <Link href='/'>Join the Glam Squad</Link>
   
      </div>

      <div className='flex flex-col'>
        <h2 className='font-semibold my-[2.5vh]'>PROMOTIONS</h2>
        <Link href='/'>Promo Codes & Offers</Link>
        <Link href='/'>US Service Discount</Link>
        <Link href='/'>Community Offers</Link>
      </div>
    </div>
  )
}

export default LastFooter
