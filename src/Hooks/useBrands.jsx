import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useBrands() {

   const [Brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      .then((response) => {
        setBrands(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { Brands , loading };
}
