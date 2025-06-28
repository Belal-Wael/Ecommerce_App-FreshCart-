import React, { useEffect, useState } from 'react'
import useBrands from '../../Hooks/useBrands';

export default function OurBrands() {
 

    const [Counter,SetCounter]=useState(0);
    let {Brands} = useBrands();

    useEffect(()=>{

    } , [])
    

  return <>
     <div className='text-center py-10'>
      <h2 className='text-4xl font-bold py-2 border-b-2 border-blue-500 w-fit m-auto px-2'>OUR BRANDS</h2>
        <div className="container  grid grid-cols-6 pt-4 px-8">
          {
            Brands.map((brand)=> <div key={brand._id} className=''>
               <img src={brand.image} alt=""  className='hover:scale-150 transition-all cursor-pointer'/>
            </div> )
          }
        </div>
     </div>




  </>
}
