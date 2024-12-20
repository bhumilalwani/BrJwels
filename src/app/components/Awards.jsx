import React from 'react'

const Awards = () => {
  return (
    <div className='w-[100%] h-[20vh] flex flex-col items-center justify-center gap-[5vh] mt-[5vh]'>
    <h2 className='text-center text-[var(--headings-color)] text-xl mt-[2vh] sm:mt-[5vh] font-semibold'>Awards & Accolades</h2>
    <div className='flex items-center gap-[5vw] justify-center -mt-[0vh] py-[2vh] w-[100%]'>
        <img className='w-[20vw]' src="https://www.gjepc.org/assets/images/51.png" alt="" />
        <img className='w-[20vw]' src="https://www.gjepc.org/assets/images/igja-awards/co-par.png" alt="" />
        <img className='w-[20vw]' src="https://www.jewellermagazine.com/Img/143773" alt="" />
        
    </div>
    </div>
  )
}

export default Awards
