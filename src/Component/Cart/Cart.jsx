import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import imptyCart from '../../assets/images/debc8be2-83d7-4338-9384-351464883ac9.jpg'
import { BeatLoader } from 'react-spinners';

export default function Cart() {
 
  let [cartDetails,setCartDetails]=useState(null);
  let [isLoading, setIsLoading] = useState(true);

  let {getCartItems , removeFromCart , updateCartItem , setCart}=useContext(CartContext);
  
  let [cartId,setCartId]=useState('');
  let navigate=useNavigate();

  async function getCartProducts() {
     setIsLoading(true);
     let response=await getCartItems();
     setCartDetails(response?.data);
     setCartId(response?.data?.cartId)
     console.log(response.data.cartId);
     setIsLoading(false);
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
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
     <div className="container mx-auto px-4">
       {/* Header Section */}
       <div className="text-center mb-12">
         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
             Shopping Cart
           </span>
         </h1>
         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
           Review your items and proceed to checkout
         </p>
       </div>

       {isLoading ? (
         <div className="flex justify-center items-center py-20">
           <div className="text-center">
             <BeatLoader color='#3B82F6' size={15} />
             <p className="mt-4 text-gray-600">Loading your cart...</p>
           </div>
         </div>
       ) : cartDetails && cartDetails?.data?.products.length > 0 ? (
         <div className="max-w-6xl mx-auto">
           {/* Cart Summary */}
           <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
             <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-bold text-gray-800">Cart Items ({cartDetails?.data?.products.length})</h2>
               <div className="text-right">
                 <p className="text-sm text-gray-600">Total Items</p>
                 <p className="text-2xl font-bold text-blue-600">{cartDetails?.data?.totalCartPrice} EGP</p>
               </div>
             </div>

             {/* Cart Table */}
             <div className="overflow-x-auto">
               <table className="w-full text-sm text-left text-gray-500">
                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 rounded-lg">
                   <tr>
                     <th scope="col" className="px-6 py-4 rounded-l-lg">
                       <span className="sr-only">Image</span>
                     </th>
                     <th scope="col" className="px-6 py-4">
                       Product
                     </th>
                     <th scope="col" className="px-6 py-4">
                       Quantity
                     </th>
                     <th scope="col" className="px-6 py-4">
                       Price
                     </th>
                     <th scope="col" className="px-6 py-4 rounded-r-lg">
                       Action
                     </th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200"> 
                   {
                     cartDetails?.data?.products.map((item)=>    
                       <tr key={item.product.id} className="bg-white hover:bg-gray-50 transition-colors duration-200">
                         <td className="px-6 py-4">
                           <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                             <img 
                               src={item.product.imageCover} 
                               className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                               alt={item.product.title} 
                             />
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <div>
                             <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.product.title}</h3>
                             <p className="text-gray-500 text-sm">{item.product.category?.name}</p>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="flex items-center space-x-3">
                             <button 
                               onClick={()=>{updateItemInCart(item.product.id , item.count-1)}} 
                               className="inline-flex items-center justify-center w-8 h-8 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                               type="button"
                             >
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                               </svg>
                             </button>
                             <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">{item.count}</span>
                             <button 
                               onClick={()=>{updateItemInCart(item.product.id , item.count+1)}} 
                               className="inline-flex items-center justify-center w-8 h-8 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                               type="button"
                             >
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                               </svg>
                             </button>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <span className="text-xl font-bold text-gray-900">{item.price} EGP</span>
                         </td>
                         <td className="px-6 py-4">
                           <button 
                             onClick={()=>removeItemFormCart(item.product.id)}
                             className="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                           >
                             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                             </svg>
                             Remove
                           </button>
                         </td>
                       </tr>
                     )
                   }
                 </tbody>
               </table>
             </div>
           </div>

           {/* Checkout Button */}
           <div className="text-center">
             <button 
               onClick={()=>navigate(`/CheckOut/${cartId}`)}
               className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
             >
               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
               </svg>
               Proceed to Checkout
             </button>
           </div>
         </div>
       ) : (
         <div className="text-center py-20">
           <div className="max-w-md mx-auto">
             <img 
               src={imptyCart} 
               alt='Empty Cart' 
               className='w-64 h-64 mx-auto mb-8 rounded-2xl shadow-lg'
             />
             <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
             <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
             <button 
               onClick={() => navigate('/Products')}
               className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
             >
               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               Start Shopping
             </button>
           </div>
         </div>
       )}
     </div>
   </div>
  </>
}
