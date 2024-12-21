import React from 'react'
import Link from 'next/link'
import Headings from './Headings'

const Gifts = () => {
  return (
    <div className='px-[2vw] pb-[10vh] flex flex-col items-center justify-center'>
        <Headings text="Gifts That Say It All"/>
      <div className='flex items-center mt-[5vh] justify-center gap-4 sm:gap-6 lg:gap-10 flex-wrap px-[5vw]'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] overflow-hidden group'>
              <img
                className='rounded-full w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                src="https://assets.angara.com/assets/homepage-Assets/new-assets/us/gifts/price-2.jpg?width=256&quality=95"
                alt="Gift Image"
              />
            </div>
            <h3 className='text-[var(--primary-800)] mt-2 text-sm sm:text-base'>Over $2,500</h3>
          </div>
        ))}
        <div className='text-center -mt-2 ml-[2vw] w-full'>
          <Link href='/' className='underline text-[var(--primary-800)] text-sm sm:text-base'>View All Gifts</Link>
        </div>
      </div>
    </div>
  )
}

export default Gifts
