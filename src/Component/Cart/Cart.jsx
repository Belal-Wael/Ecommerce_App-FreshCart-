import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import imptyCart from '../../assets/images/debc8be2-83d7-4338-9384-351464883ac9.jpg'

export default function Cart() {
 
  let [cartDetails,setCartDetails]=useState(null);

  let {getCartItems , removeFromCart , updateCartItem , setCart}=useContext(CartContext);
  
  let [cartId,setCartId]=useState('');
  let navigate=useNavigate();

  async function getCartProducts() {
     let response=await getCartItems();
     setCartDetails(response?.data);
     setCartId(response?.data?.cartId)
     console.log(response.data.cartId);
     
  }

  async function removeItemFormCart(productId) {
    let response=await removeFromCart(productId);
    setCartDetails(response.data);
    setCart(response.data)
 }
  
 async function updateItemInCart(productId , count) {
  let response=await updateCartItem(productId , count);
  setCartDetails(response.data)
  console.log(response.data);
  
}

    useEffect(()=>{
      getCartProducts();
    } , [])

  return <>
   <div className="relative overflow-x-auto  sm:rounded-lg py-12">
 {cartDetails &&  cartDetails?.data?.products.length > 0?
  <table className="w-[75%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody> 
      {
        cartDetails?.data?.products.map((item)=>    
          <tr key={item.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
              <img src={item.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className="px-2 py-4 font-semibold text-gray-900 dark:text-white">
            {item.product.title}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <button onClick={()=>{updateItemInCart(item.product.id , item.count-1)}} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                  </svg>
                </button>
                <div>
                  <span>{item.count}</span>
                </div>
                <button onClick={()=>{updateItemInCart(item.product.id , item.count+1)}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
            </td>
            <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
              $ {item.price}
            </td>
            <td className="px-6 py-4 cursor-pointer">
              <span className="font-medium  text-red-600 dark:text-red-500 hover:underline" onClick={()=>removeItemFormCart(item.product.id)}>Remove</span>
            </td>
          </tr>
        )
      }
    </tbody>
  </table> :<img src={imptyCart} alt='Empty Cart Photo' className='max-w-[400px] object-contain m-auto'/>
  }
  {
    cartDetails && cartDetails?.data?.products.length&&
    <div className="btn my-2" onClick={()=>navigate(`/CheckOut/${cartId}`)}>CheckOut Now!</div>
  }
</div>

  </>
}
