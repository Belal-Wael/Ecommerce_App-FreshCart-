import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export default function useProducts() {

      // using tanstack query to manage data which get from server 
  function getRecinetProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let apiResponse=useQuery({
    queryKey:['recientProducts'],
    queryFn:getRecinetProducts,
    // staleTime:0,
    // retry:3000,
    refetchInterval:1000,
    refetchIntervalInBackground:true
    // refetchOnWindowFocus:true,
    // gcTime:3000
  });
  // ------------------------------------- // 

  return (
    apiResponse
  )
}
