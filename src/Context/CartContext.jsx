import axios from "axios";
import { createContext, useEffect, useState } from "react";



export let CartContext = createContext();


export default function CartContextProvider(Props){


    let [cart , setCart]=useState({numberOfCartItems : 0});
    let headers={
        token:localStorage.getItem('userToken')
    }
    
    function removeFromCart(productId) {
        return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            headers:headers
        }).then((response)=>response)
        .catch((error)=>error)
    }

    function updateCartItem(productId,Count) {
        return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:Count},{
            headers:headers
        }).then((response)=>response)
        .catch((error)=>error)
    }

    function  getCartItems() {

      return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers:headers
        }).then((response)=>response)
        .catch((error)=>error)
    }

    function addToCart(ProductID){
        console.log('headers ::::',headers);
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:ProductID},
            {
                headers:headers // headers only because the same name.
            }
        ).then((response)=>response)
        .catch((error)=>error)
    }


     function CheckOut(cartId , url , formValues){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,{shippingAddress:formValues},
            {
                headers:headers // headers only because the same name.
            }
        ).then((response)=>response)
        .catch((error)=>error)
    }

    async function getCart(){        
      let response =  await getCartItems();
      setCart(response.data)
    }

    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            getCart();
        }
    }, [])

    return <CartContext.Provider value={{cart , setCart,addToCart , getCartItems , removeFromCart,updateCartItem , CheckOut}}>
           {Props.children}
    </CartContext.Provider>
}