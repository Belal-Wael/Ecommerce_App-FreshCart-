import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {
 

  let {userLogin,setUserLogin}=useContext(userContext);
  let{cart}=useContext(CartContext);

  
  
  let navigate=useNavigate();

  function LogOut(){
    localStorage.removeItem('userToken');
    setUserLogin(null);
    navigate('/login');
  }



return (
  <>
    <nav className="bg-white/95 backdrop-blur-md dark:bg-gray-900/95 fixed w-full z-20 top-0 start-0 border-b border-gray-200/50 dark:border-gray-600/50 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-3 md:py-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse me-1 mb-1 md:mb-0 group">
         <div className="relative">
           <i className="fa-solid fa-cart-shopping h-7 w-auto text-blue-600 text-2xl group-hover:text-blue-700 transition-colors duration-300"></i>
           <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
         </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            YourCart
          </span>
        </Link>

        <div className="flex md:order-2 items-center space-x-4 rtl:space-x-reverse">
          {userLogin && (
            <>
              <span
                onClick={LogOut}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 font-medium"
              >
                LogOut
              </span>

              <Link to={'/cart'} className="relative cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 group">
                <div className="relative">
                  <span className="absolute -top-2 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs px-2 py-1 font-bold shadow-lg animate-bounce">
                    {cart?.numOfCartItems || 0}
                  </span>
                  <i className="fa-solid fa-cart-shopping text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
              </Link>

              <div className="hidden space-x-3 rtl:space-x-reverse text-gray-600 dark:text-gray-400 text-xl md:flex">
                <i className="fab fa-facebook hover:text-blue-600 cursor-pointer transition-all duration-300 hover:scale-110"></i>
                <i className="fab fa-twitter hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110"></i>
                <i className="fab fa-instagram hover:text-pink-600 cursor-pointer transition-all duration-300 hover:scale-110"></i>
                <i className="fab fa-youtube hover:text-red-600 cursor-pointer transition-all duration-300 hover:scale-110"></i>
                <i className="fab fa-tiktok hover:text-black cursor-pointer transition-all duration-300 hover:scale-110"></i>
              </div>
            </>
          )}

          {!userLogin && (
            <>
              <NavLink
                to="/login"
                className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-6 md:py-2.5 text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-6 md:py-2.5 text-center dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-300 border border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500"
              >
                Register
              </NavLink>
            </>
          )}

          <button
            data-collapse-toggle="navbar-sticky-links"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-end text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-300"
            aria-controls="navbar-sticky-links"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {userLogin && (
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky-links"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {[{path:'/',name:"Home"},{path:'/Products',name:"Products"},{path:'/brands',name:"Brands"},{path:'/Categories',name:"Categories"}]
              .map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={`${item.path}`}
                    className={({ isActive }) =>
                      `block py-2 px-3 font-bold rounded-lg md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-300 ${
                        isActive
                          ? "text-white md:bg-transparent py-2 px-4  md:text-blue-600 md:dark:text-blue-400 shadow-lg"
                          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 hover:scale-105"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  </>
);


}
