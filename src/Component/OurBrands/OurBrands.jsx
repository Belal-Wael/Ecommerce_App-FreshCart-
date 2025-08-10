import React, { useEffect, useState } from 'react'
import useBrands from '../../Hooks/useBrands';

export default function OurBrands() {
 

    const [Counter,SetCounter]=useState(0);
    let {Brands} = useBrands();

    useEffect(()=>{

    } , [])
    

  return <>
     <div className='bg-gradient-to-br from-gray-50 to-blue-50 py-16'>
       <div className="container mx-auto px-4">
         {/* Header Section */}
         <div className="text-center mb-12">
           <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-800'>
             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
               OUR BRANDS
             </span>
           </h2>
           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
             Partner with the world's leading brands for exceptional quality and innovation
           </p>
         </div>

         {/* Brands Grid */}
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
           {
             Brands.map((brand)=> 
               <div key={brand._id} className='group'>
                 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 h-full flex flex-col items-center justify-center">
                   <div className="w-16 h-16 md:w-20 md:h-20 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                     <img 
                       src={brand.image} 
                       alt={brand.name} 
                       className='w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300 cursor-pointer'
                     />
                   </div>
                   <h3 className='text-blue-600 font-semibold text-sm text-center group-hover:text-blue-700 transition-colors duration-300'>
                     {brand.name}
                   </h3>
                 </div>
               </div>
             )
           }
         </div>

         {/* Call to Action */}
         <div className="text-center mt-12">
           <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 cursor-pointer">
             <span className="font-semibold">View All Brands</span>
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </div>
         </div>
       </div>
     </div>
  </>
}
