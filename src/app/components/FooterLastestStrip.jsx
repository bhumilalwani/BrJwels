import React from 'react'
import Link from 'next/link'

const FooterLastestStrip = () => {
  return (
    <div className="flex flex-col justify-center">
    <div className="w-full">
        <div className="payment-section flex flex-wrap justify-center md:gap-[3.1vw] space-x-2">
            <div className="image-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/128/174/174861.png" alt="Paypal" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:m-[0px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://s.yimg.com/fz/api/res/1.2/ILro_VoCX8RmD6bm6gzLuw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/9736e341-9507-395b-a22e-50847071d65c/t_500x300" alt="Visa" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png" alt="Mastercard" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/American-Express-Logo.png" alt="AmEx" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://comptiacdn.azureedge.net/webcontent/images/default-source/certproduct/affirm_logo.png?sfvrsn=b69bcd3a_2" alt="Affirm" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://m.media-amazon.com/images/G/01/amazonpayments/documentation/AmazonPay_BrandAssets/Logos/amazonpay-logo-rgb_clr.png" alt="Amazon Pay" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://seeklogo.com/images/N/norton-logo-A91B03B403-seeklogo.com.png" alt="Norton Secured" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://bri-bet.com/wp-content/uploads/2020/01/BBB_Accredited_Business_A_Rating-768x303.png" alt="Accredited Business" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
            <div className="image-wrapper">
                <img src="https://tse2.mm.bing.net/th?id=OIP.JBDQnZX1ALLCHQt9WwLLNgHaBe&pid=Api&P=0&h=180" alt="Bizrate" className="h-[30px] w-[50px] sm:w-[55px] m-[5px] sm:h-[40px] md:w-[79px] md:h-[50px] "/>
            </div>
        </div>
    </div>
    <div className='w-full flex flex-col mt-[5vh] lg:flex-row items-center justify-between gap-[20px] sm:px-[10vw] flex-wrap'>
    <div className='flex items-center justify-center gap-[2px]'>
        <img className='w-[40px] h-[30px]' src="https://www.freeiconspng.com/uploads/us-flag-icon-5.png" alt="" />
        <Link className='flex-nowrap text-sm underline mr-[10px]' href='/'>UNITED STATES </Link>
    </div>
    <div className='flex items-center justify-center gap-[0px] flex-wrap sm:gap-[10px] sm:gap-[20px] justify-center'>
        <Link href='/'>Education</Link>
        <span> | </span>
        <Link href='/'>Site Map</Link>
        <span> | </span>
        <Link href='/'>Privacy Policy</Link>
        <span> | </span>
        <Link href='/'>T&C</Link>
        <span> | </span>
        <Link href='/'>Do Not Sell My Personal Information</Link>
        <span> | </span>
        <Link href='/'><i className="ri-wheelchair-line"></i></Link>
    </div>
</div>

<div className='cursor-pointer w-[100%] mt-[2vw] py-[10px] text-center text-gray-700 h-[8vh] bg-[#E7E7E9]'>
            &copy;  2024 BR Inc. All Rights Reserved
</div>


</div>

  )
}

export default FooterLastestStrip
