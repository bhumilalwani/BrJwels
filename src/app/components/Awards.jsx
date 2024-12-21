import React from 'react'
import Headings from './Headings'

const Awards = () => {
  return (
    <div className='w-[100%] h-[20vh] flex flex-col items-center justify-center gap-[5vh] mt-[5vh]'>
   <Headings text="Awards And Accolades"></Headings>
    <div className='flex items-center gap-[5vw] justify-center -mt-[0vh] py-[2vh] w-[100%]'>
        <img className='w-[20vw]' src="https://www.gjepc.org/assets/images/51.png" alt="" />
        <img className='w-[20vw]' src="https://www.gjepc.org/assets/images/igja-awards/co-par.png" alt="" />
        <img className='w-[20vw]' src="https://www.jewellermagazine.com/Img/143773" alt="" />
        
    </div>
    </div>
  )
}

export default Awards
