import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorySlider() {
 
   
    var settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 5,
      slidesToScroll:3,
      autoplay:true,
       responsive: [
      {
        breakpoint: 1200, // screens smaller than 1200px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // screens smaller than 992px
        settings: {
          slidesToShow: 3,
       },
      },
      {
        breakpoint: 768, // screens smaller than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
        },
      },
      {
        breakpoint: 576, // screens smaller than 576px
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        },
      },
    ],
    };

    let [Category,setCategory]=useState([]);

   function getsetCategory(){
      axios.get(`https://ecommerce.routemisr.com/api/v1/Categories`)
      .then(({data})=>{        
        setCategory(data.data);
      })
      .catch(()=>{})
   }

    useEffect(()=>{
      getsetCategory();
    } , [])

  return <>
   <div className='py-5 px-4'>
     <h2 className='text-gray-700 text-xl px-2 font-bold py-4'>Shop Popular Categories</h2>
     <Slider {...settings} className=''>
         {
          Category.map((item)=>
            <div>
               <img src={item?.image}  alt={item?.name} className='w-full cat-img p-1'/>
               <h3 className=' text-gray-700'>{item?.name}</h3>
            </div>
        )

         }
        </Slider>
   </div>
  </>
}
