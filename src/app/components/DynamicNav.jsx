import React from 'react'
import Link from 'next/link';


const DynamicNav = () => {
  return (
    <div className='flex items-center justify-center w-[100%] h-[20%] '>
      <div className='flex items-center justify-between gap-[5vw]'>
      <Link
    href="/rings"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
   RINGS
    <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
    {/* <AllitemsDivHidden></AllitemsDivHidden> */}
  </Link>   

  <Link
    href="/necklaces"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
    NECKLACES
    <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>

  <Link
    href="/earings"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
EARINGS   
 <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>

  <Link
    href="/engagementRings"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
    ENGAGEMENT RINGS
    <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>

  <Link
    href="/weddingRings"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
   WEDDING RINGS
    <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>

  <Link
    href="/bracelets"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
BRACELETS    <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>

  <Link
    href="/collections"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
COLLECTIONS   <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>

  <Link
    href="/gifts"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
GIFTS    <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>

  <Link
    href="/blog"
    className="relative inline-block text-black text-[14px] font-semibold group hover:text-black hover:no-underline"
  >
BLOG   <span
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#CAA968] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"
    ></span>
  </Link>
      </div>
    </div>
  )
}



const AllitemsDivHidden = () => {
    const items = [
        { name: "Red Sapphire Rings", imgSrc: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png" },
        { name: "Ruby Rings", imgSrc: "https://freepngimg.com/thumb/jewellery/49104-4-ruby-hd-download-free-image.png" },
        // Add more items as needed
      ];
      
      return (
        <div className='w-[20vw] h-fit absolute hidden group-hover:grid'>
        <div className='h-fit px-[20px] py-[10px] bg-green-100 grid grid-cols-3 gap-4 '>
        <div className='item '>
        <h2>Natural Gem Stone</h2>{items.map((item, index) => (
            <div className='flex items-center justify-between gap-[5px]' key={index}>
              <img className='w-[1vw] h-[1vw]' src={item.imgSrc} alt="" />
              <h4>{item.name}</h4>
            </div>
          ))}
         
          </div>

          <div className='item '>
          <h2>Natural Gem Stone</h2>{items.map((item, index) => (
            <div className='flex items-center justify-between gap-[5px]' key={index}>
              <img className='w-[1vw] h-[1vw]' src={item.imgSrc} alt="" />
              <h4>{item.name}</h4>
            </div>
          ))}
          </div>

          <div className='item '>
          <h2>Natural Gem Stone</h2>{items.map((item, index) => (
            <div className='flex items-center justify-between gap-[5px]' key={index}>
              <img className='w-[1vw] h-[1vw]' src={item.imgSrc} alt="" />
              <h4>{item.name}</h4>
            </div>
          ))}
          </div>

          <div className='item '>
          <h2>Natural Gem Stone</h2>{items.map((item, index) => (
            <div className='flex items-center justify-between gap-[5px]' key={index}>
              <img className='w-[1vw] h-[1vw]' src={item.imgSrc} alt="" />
              <h4>{item.name}</h4>
            </div>
          ))}
          </div>
          <Link href='/explore' className='underline hover:text-[#CAA968]'>Explore All</Link>
        </div>
        </div>
      );
      
}




export default DynamicNav
