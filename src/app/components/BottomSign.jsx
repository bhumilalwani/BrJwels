import React from 'react'

const BottomSign = () => {
  return (
    <div className='text-center bg-[var(--background-color)] w-[100%] h-[30%] p-[10px]'>
      <h3 className='text-[var(--headings-color)]'>Get <span className='text-[var(--gold)] font-semibold'>12%</span> off on your first order</h3>
      <div className='flex items-center justify-center mt-[2vh] mb-[2vh] w-[80%] mx-auto'>
        <input type="text" className='border-[1px] border-solid border-black px-[2%] py-[2%] sm:px-[32px] sm:py-[5px]' placeholder='Enter Email'/>
        <button className='cursor-pointer bg-black text-white px-[2%] py-[3%] sm:px-[32px] sm:py-[8px] text-sm font-normal text-center whitespace-nowrap'>Sign Up</button>
      </div>
     
    <h3 className='text-center text-[var(--headings-color)] mt-[8vh]'>Your privacy matters. For details, see our <span className='underline cursor-pointer'>Privacy Policy.</span></h3>
    <div className='cursor-pointer flex items-center justify-center mt-[3vh] mt-[2vh]'>
        <h4 className='text-[var(--headings-color)]'>Follow Us:</h4>
        <i className="text-[var(--headings-color)] ri-facebook-line"></i>
        <i className="text-[var(--headings-color)] ri-instagram-line"></i>
        <i className="text-[var(--headings-color)] ri-pinterest-line"></i>
        <i className="text-[var(--headings-color)] ri-youtube-line"></i>
    </div>
    </div>
  )
}



export default BottomSign
