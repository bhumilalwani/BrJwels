import React from 'react'

const ReasonsToShop = () => {
  return (
    <div className='mt-[10vh] mb-[10vh] flex flex-col items-center gap-[5vh] justify-center'>
      <h2 className='text-center text-xl text-[var(--headings-color)] sm:text-2xl mb-[2vh] font-normal p-4 rounded-[10px]'>More Reasons To Shop</h2>
      <div className='flex items-center justify-center gap-[2vw] sm:gap-[20vh]'>
    <div className='flex items-center justify-center gap-[1vw] flex-col'>
    <img className='w-[50px] h-[50px]' src="https://beautybio.com/cdn/shop/files/Ethical_Sourcing_550x.png?v=1681744051" alt="" />
    <h3 className='text-[var(--primary-color)]'>Ethical Sourcing</h3>
    </div>
    <div className='flex items-center justify-center gap-[1vw] flex-col'>
    <img className='w-[50px] h-[50px]' src="https://www.davidjones.com/images/assetimages/w19/other/gbj/gbj-logo.png" alt="" />
    <h3 className='text-[var(--primary-color)]'>Ethical Sourcing</h3>
    </div>
    <div className='flex items-center justify-center gap-[1vw] flex-col'>
    <img className='w-[50px] h-[50px]' src="https://bybonniejewelry.com/media/wysiwyg/ethical_sourcing/icon-04.png" alt="" />
    <h3 className='text-[var(--primary-color)]'>Ethical Sourcing</h3>
    </div>
    
      </div>
     
    </div>
  )
}

export default ReasonsToShop
