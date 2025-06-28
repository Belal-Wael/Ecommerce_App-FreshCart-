import React, { useState } from 'react'
import BrandSlider from '../BrandSlider/BrandSlider';
import OurBrands from '../OurBrands/OurBrands';
import useBrands from '../../Hooks/useBrands';
import { BeatLoader } from 'react-spinners';
// import Style from './Template.module.css'

export default function Brands() {
 

    const [Counter,SetCounter]=useState(0);
     let {loading} =useBrands();

     if(loading){
      return <div className='w-full h-screen flex justify-center items-center'>
        <BeatLoader className='mx-auto' color='blue' />
      </div>
     }
  return <>
     <BrandSlider/>
     <OurBrands/>
  </>
}
