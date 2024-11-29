import Link from 'next/link'
import React from 'react'


const StaticNav = () => {
  return (
  
        <div className='flex items-center justify-between bg-white px-[26px] flex-wrap py-[32px]'>
        <div className='hidden lg:flex items-center '>
            <h3 className='text-sm'>24/7 Customer Support | </h3>         
            <Link className='cursor-pointer hover:text-[#CAA968] text-black' href="/contact">+1-844-527-4367</Link>

        </div>
        

        {/* <div className='flex lg:hidden items-center justify-center'>
        <i className="ri-menu-2-line text-4xl text-gray-700"></i>

        </div> */}

        <div className='logo -ml-[10px] sm:ml-[18%]'>
            {/* <img src="" alt="" /> */}
            <h1 className='text-2xl font-semibold cursor-pointer'>BR JEW.</h1>
        </div>

        <div className='flex items-center justify-between rounded-md'>
            <div className='flex items-center justify-between gap-[10px] '>
            <i className="ri-search-line text-xl"></i>
            <input className='outline-none capitalize text-xl font-normal rounded-md p-[10px]' type="text" placeholder='Search...' />
            </div>
        </div>

        <div className='flex items-center justify-between gap-[15px] w-[10vw]'>
        <i className="ri-user-line font-thin text-2xl transform hover:-translate-y-[2px] transition cursor-pointer"></i>
        <i className="ri-heart-line font-thin text-2xl transform hover:-translate-y-[2px] transition cursor-pointer"></i>
        <i className="ri-handbag-line font-thin text-2xl transform hover:-translate-y-[2px] transition cursor-pointer"></i>
        </div>

        </div>

  )
}

export default StaticNav
