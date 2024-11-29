import Link from 'next/link'
import React from 'react'

const Collections = () => {
  return (
    <div className='px-[20px] flex items-center justify-center gap-[20px]'>
      <div className='w-[30vw] h-[70vh] relative cursor-pointer overflow-hidden group'>
        <img className='w-[30vw] fit-cover h-[70vh] hover:scale-125 transition-transform origin-center duration-1000' src="https://media.istockphoto.com/id/489814272/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=d8tGqzlmqMZzhcYmgE_OyDNSQ9dAdo-T3BwdaSsDbhs=" alt="" />
        <div className='absolute  group-hover:top-[80%] transform-transition duration-500 top-[90%] left-[40%] -translate-x-[50%] flex flex-col gap-[2vh] '>
            <h3 className='text-3xl text-white font-bold whitespace-nowrap'>Celistial Collection </h3>
            <Link href='/shop/:prodId'  className="opacity-0 text-[] text-xl font-bold group-hover:opacity-100 transition-opacity duration-300">
                Shop Now <i className="ri-arrow-right-line"></i>
            </Link>
        </div>
      </div>

      <div className='w-[30vw] h-[70vh] relative cursor-pointer overflow-hidden group'>
        <img className='w-[30vw] fit-cover h-[70vh] hover:scale-125 transition-transform origin-center duration-1000' src="https://assets.angara.com/assets/homepage-Assets/us/collections/aeon-collection.jpg?width=768&quality=95" alt="" />
        <div className='absolute group-hover:top-[80%] transform-transition duration-500 top-[90%] left-[40%] -translate-x-[50%] flex flex-col gap-[2vh] '>
            <h3 className='text-3xl text-white font-bold whitespace-nowrap'>Celistial Collection </h3>
            <Link href='/shop/:prodId'  className="opacity-0 text-[] text-xl font-bold group-hover:opacity-100 transition-opacity duration-300">
                Shop Now <i className="ri-arrow-right-line"></i>
            </Link>
        </div>
      </div>

      <div className='w-[30vw] h-[70vh] relative cursor-pointer overflow-hidden group'>
        <img className='w-[30vw] fit-cover h-[70vh] hover:scale-125 transition-transform origin-center duration-1000' src="https://assets.angara.com/assets/homepage-Assets/us/collections/sweet-treat.jpg?width=768&quality=95" alt="" />
        <div className='absolute group-hover:top-[80%] transform-transition duration-500 top-[90%] left-[40%] -translate-x-[50%] flex flex-col gap-[2vh] '>
            <h3 className='text-3xl text-white font-bold whitespace-nowrap '>Celistial Collection </h3>
            <Link href='/shop/:prodId'  className="opacity-0 text-black text-xl font-bold group-hover:opacity-100 transition-opacity duration-300">
                Shop Now <i className="ri-arrow-right-line"></i>
            </Link>
        </div>
      </div>
      
            
    </div>
  )
}

export default Collections
