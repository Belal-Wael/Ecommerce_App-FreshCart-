import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";

export default function ProductDetails() {
 
   let {Id,Category} = useParams();

   let [productDetails,setProductDetails]=useState(null);
   let [relatedproduct,setrelatedproduct]=useState([]);

   
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

   function getProductById(id){
       axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
       .then(({data})=>{  
        setProductDetails(data.data);
       })
       .catch(()=>{})
   }
   

   function getRelatedProducts(category){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(({data})=>{
      let AllProducts=data.data;
      let related = AllProducts.filter((p)=>p.category.name===category);
      setrelatedproduct(related);
    })
    .catch(()=>{})
   }

    useEffect(()=>{
      getProductById(Id);
      getRelatedProducts(Category);
    } , [Id,Category])

  return <>
     <div className="flex flex-col items-center justify-center pb-5 pt-[60px] md:pt-[50px] lg:pt-[40px] md:flex-row">
       <div className=" md:w-1/4 w-2/4 pb-2">
       <Slider {...settings}>
         {
          productDetails?.images.map((src)=> <img className='w-full' src={src} alt={productDetails?.title} />)
         }
        </Slider>
       </div>
       <div className="w-full md:w-2/4 pt-8 md:p-6">
           <h1 className='text-lg font-normal text-gray-950'>{productDetails?.title}</h1>
           <p className='text-gray-700 mt-4'>{productDetails?.description}</p>
           <div className='flex justify-between items-center my-4 text-gray-900'>
                      <span>{productDetails?.price} EGP</span>
                      <span>{productDetails?.ratingsAverage } <i className='fas fa-star text-yellow-400'></i> </span>
                    </div>
                    <div className="my-2 cursor-pointer text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800">Add To Cart</div>
          </div>
        </div>
       <div className="grid  grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4 py-6">
      {
        relatedproduct.map((product) =>
          <div key={product.id} className='px-4 py-4'>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
              <Link to={`/productDetails/${product.id}/${product.category.name}`}>
              <img className="pb-2 rounded-t-lg w-full" src={product.imageCover} alt={product.title} />
              </Link>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{product.category.name}</h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>

                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{product.ratingsAverage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 ">{product.price} EGP</span>
                  <div className="text-white  cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  </>
}
