import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
  

export default function Footer() {
 

    const [Counter,SetCounter]=useState(0);

    useEffect(()=>{

    } , [])

  return <>
    
<footer className="bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gray-900 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full -translate-x-16 -translate-y-16"></div>
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-400 rounded-full translate-x-12 translate-y-12"></div>
  </div>

  <div className="relative z-10 mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16">
    <div className="md:flex md:justify-between">
      <div className="mb-8 md:mb-0">
        <Link to={'/'} className="flex items-center group">
          <div className="relative">
            <i className="fa-solid fa-cart-shopping pe-3 w-auto text-blue-600 text-2xl group-hover:text-blue-700 transition-colors duration-300"></i>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            YourCart
          </span>
        </Link>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
          Your trusted destination for premium products and exceptional shopping experience. Discover quality, innovation, and style.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white flex items-center">
            <i className="fas fa-users mr-2 text-blue-600"></i>
            Follow us
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-3">
            <li>
              <a href="https://github.com/themesberg/flowbite" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <i className="fab fa-github mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                Github
              </a>
            </li>
            <li>
              <a href="https://discord.gg/4eeurUVvTy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <i className="fab fa-discord mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                Discord
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white flex items-center">
            <i className="fas fa-gavel mr-2 text-blue-600"></i>
            Legal
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-3">
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <i className="fas fa-shield-alt mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <i className="fas fa-file-contract mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white flex items-center">
            <i className="fas fa-headset mr-2 text-blue-600"></i>
            Support
          </h2>
          <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-3">
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <i className="fas fa-question-circle mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <i className="fas fa-envelope mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-12" />
    
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm sm:text-center text-gray-600 dark:text-gray-400">
        © 2025 <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-semibold">YourCart Team</a>. All Rights Reserved.
      </span>
      
      <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
        <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110">
          <i className="fab fa-facebook text-xl"></i>
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110">
          <i className="fab fa-twitter text-xl"></i>
          <span className="sr-only">Twitter page</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 hover:scale-110">
          <i className="fab fa-instagram text-xl"></i>
          <span className="sr-only">Instagram page</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:scale-110">
          <i className="fab fa-youtube text-xl"></i>
          <span className="sr-only">YouTube page</span>
        </a>
        <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110">
          <i className="fab fa-tiktok text-xl"></i>
          <span className="sr-only">TikTok page</span>
        </a>
      </div>
    </div>
  </div>
</footer>


  </>
}
