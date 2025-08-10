import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import useProducts from '../../Hooks/useProducts';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import toast, { Toaster } from 'react-hot-toast';


export default function RecentProduct() {

  // Call Custom hook
  let { data, isError, isLoading, error } = useProducts();

  //  let [RecentProducts,setRecentProducts]=useState([]);

  //  function getRecentProduct(){
  //     axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //     .then(({data})=>{        
  //       setRecentProducts(data.data);
  //     })
  //     .catch(()=>{})
  //  }

  //   useEffect(()=>{
  //     getRecentProduct();
  //   } , [])

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
      console.log(response);
      toast.error('Error in Adding Product ', {
        duration: 1500
      })
    }
  }

  if (isLoading) {
    return <div className='py-8 flex justify-center w-full'>
      <BeatLoader color='blue' />
    </div>
  }

  if (isError) {
    return <div className='py-8 flex justify-center w-full'>
      {error}
    </div>
  }
  return <>
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2 px-4 py-6">
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
  </>
}
