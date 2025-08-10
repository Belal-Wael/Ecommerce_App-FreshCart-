import React, { useContext, useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import img1 from '../../assets/images/mobile-shopping-concept-a-man-and-a-woman-buy-things-in-the-online-store-through-a-big-smartphone-e-commerce-and-online-shopping-illustration-in-flat-style-vector.jpg'
import img2 from '../../assets/images/images.jpg'
import img3 from '../../assets/images/images (1).jpg'
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';


export default function Products() {
 

    const [Counter,SetCounter]=useState(0);
    let { data, isLoading } = useProducts();


    let { addToCart, setCart } = useContext(CartContext);
  async function addProductToCart(productId) {

    let response = await addToCart(productId);
    if (response?.data?.status == 'success') {
      setCart(response.data)
      toast.success('Your Product Add Successfully', {
        duration: 1500,
        position: 'top-center'
      })
    }
    else {
      toast.error('Error in Adding Product ', {
        duration: 1500
      })
    }
  }

    useEffect(()=>{
     
    } , [])

   if (isLoading) {
    return <div className='py-8 flex justify-center w-full'>
      <BeatLoader color='blue' />
    </div>
  }

  return <>
     <div className="container py-10 md:py-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 mb-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
          
          <div className="relative z-10">
            <h1 className='text-center text-4xl md:text-6xl font-bold text-gray-800 mb-6'>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Shop Now
              </span>
            </h1>
            <p className="text-center text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Discover a wide range of high-quality products at competitive prices
            </p>
            
            {/* Images Grid */}
            <div className='flex justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto'>
              <div className="relative group">
                <img 
                  src={img1} 
                  className='w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 object-cover rounded-2xl shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105' 
                  alt="Shopping Experience" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="relative group transform translate-y-8 md:translate-y-12">
                <img 
                  src={img2} 
                  className='w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 object-cover rounded-2xl shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105' 
                  alt="Online Shopping" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="relative group">
                <img 
                  src={img3} 
                  className='w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 object-cover rounded-2xl shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105' 
                  alt="E-commerce" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">Our Featured Products</span>
          </div>
        </div>

     <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 md:gap-6 px-4 py-6">
      {
        data?.data?.data.map((product) =>
          <div key={product.id} className='px-2 py-2 w-full'>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <Link to={`/productDetails/${product.id}/${product.category.name}`}>
              <img className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" src={product.imageCover} alt={product.title} />
              </Link>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">{product.category.name}</h5>
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800 ms-3">{product.ratingsAverage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">{product.price} EGP</span>
                  <button 
                    className="text-white cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-300 transition-all duration-200 transform hover:scale-105" 
                    onClick={() => addProductToCart(product.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
     </div>
  </>
}
