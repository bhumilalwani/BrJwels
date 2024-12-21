import React from 'react'
import Headings from './Headings'

const ReasonsToShop = () => {
  return (
    <div className='mt-[10vh] mb-[10vh] flex flex-col items-center gap-[5vh] justify-center'>
        <Headings text="More Reasons To Shop"></Headings>
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
