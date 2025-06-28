import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Style from './Template.module.css'

export default function Categories() {
 

    const [Categories,SetCategories]=useState([]);

    function getCategories(){
      axios.get(`https://ecommerce.routemisr.com/api/v1/Categories`)
      .then((response)=>{
        SetCategories(response.data.data);
      })
      .catch((error)=>{
        console.error("There was an error fetching the categories!", error);
      })
    }

    useEffect(()=>{
      getCategories();
    } , [])

  return <>
    <div className="container py-6">
       <h2 className='text-gray-900 text-center text-5xl font-extrabold mono-type mt-6'><span className='text-blue-600'>OUR</span> Categories</h2>
        <hr className='w-1/4 mx-auto my-4 border-2 border-gray-700' />
        <div className='grid xl:grid-cols-4 gap-2 pt-6'>
           {
              Categories.map((category)=> <div key={category._id} className='p-2 flex items-center justify-between text-left gap-3 m-2 bg-gray-300 hover:translate-x-1 transation-all duration-300 rounded-lg cursor-pointer'>
                  <div className='flex items-center gap-3'>
                  <img src={category.image} alt="" className='w-10 h-11'/>
                  <h3 className='text-gray-900 font-bold text-xl'>{category.name}</h3>
                  </div>
                  <i class="fa-solid fa-angles-right text-blue-600"></i>
              </div>)
           }
        </div>
    </div>
  </>
}
