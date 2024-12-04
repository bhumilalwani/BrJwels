import React from 'react'

const BottomSign = () => {
  return (
    <div className='text-center bg-[#F5F5F6] w-[100%] h-[30%] p-[10px]'>
      <h3>Get <span className='text-[#C48C1F] font-semibold'>12%</span> off on your first order</h3>
      <div className='flex items-center justify-center mt-[2vh] mb-[2vh] w-[80%] mx-auto'>
        <input type="text" className='border-[1px] border-solid border-black px-[2%] py-[2%] sm:px-[32px] sm:py-[5px]' placeholder='Enter Email'/>
        <button className='cursor-pointer bg-black text-white px-[2%] py-[3%] sm:px-[32px] sm:py-[8px] text-sm font-normal text-center whitespace-nowrap'>Sign Up</button>
      </div>
     
    <h3 className='text-center mt-[8vh]'>Your privacy matters. For details, see our <span className='underline cursor-pointer'>Privacy Policy.</span></h3>
    <div className='cursor-pointer flex items-center justify-center mt-[3vh] mt-[2vh]'>
        <h4>Follow Us:</h4>
        <i className="ri-facebook-line"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-pinterest-line"></i>
        <i className="ri-youtube-line"></i>
    </div>
    </div>
  )
}



export default BottomSign
