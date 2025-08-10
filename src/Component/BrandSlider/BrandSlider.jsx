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
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
      };

  return <>
    {/* Hero Section */}
    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-400 rounded-full"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className='text-center text-4xl md:text-5xl font-bold mb-4 text-gray-800'>
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            EXPLORE OFFICIAL BRAND STORE
          </span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Discover premium brands and exclusive collections
        </p>
        
        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gradient-to-r from-slate-50 to-blue-50 text-gray-500 font-medium">Featured Brands</span>
          </div>
        </div>
      </div>
    </div>

    {/* Slider Section */}
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {
           Brands.map((brand)=>
             <div key={brand._id} className='px-4'>
               <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group">
                 <div className="flex flex-col items-center">
                   <div className="w-20 h-20 md:w-24 md:h-24 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                     <img 
                       src={brand.image} 
                       alt={brand.name} 
                       className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                     />
                   </div>
                   <h3 className='text-blue-600 font-semibold text-sm md:text-base text-center group-hover:text-blue-700 transition-colors duration-300'>
                     {brand.name}
                   </h3>
                 </div>
               </div>
             </div>
           )
          }
        </Slider>
      </div>
    </div>
  </>
}
