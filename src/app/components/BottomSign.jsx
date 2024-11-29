import React from 'react'

const BottomSign = () => {
  return (
    <div className='text-center bg-[#F5F5F6] w-[100%] h-[30%]'>
      <h3>Get <span>12%</span> off on your first order</h3>
      <div className='flex items-center justify-center mt-[2vh] mb-[2vh]'>
        <input type="text" className='border-[1px] border-solid border-black px-[32px] py-[5px]' placeholder='Enter Email Address*'/>
        <button className='cursor-pointer bg-black text-white px-[32px] py-[8px] text-sm font-normal text-center'>Sign Up</button>
      </div>
      <hr />
      <hr />
    <h3 className='text-center'>Your privacy matters. For details, see our <span className='underline'>Privacy Policy.</span></h3>
    <div className='cursor-pointer flex items-center justify-center mt-[2vh]'>
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
