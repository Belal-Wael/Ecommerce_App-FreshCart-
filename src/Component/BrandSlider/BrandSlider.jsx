import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import useBrands from '../../Hooks/useBrands';

export default function BrandSlider() {
 

    const [Counter,SetCounter]=useState(0);
     let {Brands} =useBrands();
   
    useEffect(()=>{
    } , [])

     var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 5,
        slidesToScroll: 1,
         autoplay:true,
        autoplaySpeed: 1000,
        cssEase: "linear",
      };

  return <>
    <h2 className='text-center text-4xl font-bold my-8 mono-type '>EXPLORE OFFICIAL BRAND STORE</h2>
    <hr className='w-1/4 mx-auto mb-5' />
     <Slider {...settings}>
       {
        Brands.map((brand)=><div key={brand._id} className='text-center bg-gray-900 text-white p-1'>
             <img src={brand.image} alt="" />
             <h3 className='text-blue-500 font-bold'>{brand.name}</h3>
         </div>
        )
       }
    </Slider>
  </>
}
