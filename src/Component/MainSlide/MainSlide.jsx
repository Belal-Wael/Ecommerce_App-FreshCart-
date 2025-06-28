import React, { useEffect, useState } from 'react'
import mainSlider1 from '../../assets/images/slider-image-3.jpeg'
import mainSlider2 from '../../assets/images/slider-image-2.jpeg'
import mainSlider3 from '../../assets/images/slider-image-1.jpeg'
import Slide1 from '../../assets/images/slider-image-1.jpeg'
import Slide2 from '../../assets/images/slider-image-2.jpeg'
import Slider from "react-slick";


export default function MainSlide() {
 

    const [Counter,SetCounter]=useState(0);

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true,
      arrows:false
    };

    useEffect(()=>{

    } , [])

  return <>
     <div className="row">
      <div className="w-full md:w-3/4">
      <Slider {...settings} className='' >
          <img src={mainSlider1} alt="" className=' w-full md:h-[400px]' />
          <img src={mainSlider2} alt="" className=' w-full md:h-[400px]' />
          <img src={mainSlider3} alt="" className=' w-full md:h-[400px]' />
        </Slider>
      </div>
      <div className="w-1/4 hidden md:block">
      <img src={Slide1} alt="" className=' w-full h-[200px]'/>
      <img src={Slide2} alt="" className=' w-full h-[200px]'/>
      </div>
     </div>
  </>
}
