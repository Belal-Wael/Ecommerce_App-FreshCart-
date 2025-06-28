import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Products from './Component/Products/Products'
import Cart from './Component/Cart/Cart'
import Brands from './Component/Brands/Brands'
import Categories from './Component/Categories/Categories'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import NotFound from './Component/NotFound/NotFound'
import UserContextProvider from './Context/UserContext'
import CounterContextProvider from './Context/CounterContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import CheckOut from './Component/CheckOut/CheckOut'
import Orders from './Component/Orders/Orders'






let query =new QueryClient();

  
let Route=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'Products',element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'Cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'brands',element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'Categories',element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'productDetails/:Id/:Category',element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'Login',element:<Login/>},
    {path:'Register',element:<Register/>},
    {path:'CheckOut/:cartId',element:<ProtectedRoute><CheckOut/></ProtectedRoute>},
    {path:'allorders',element:<ProtectedRoute><Orders/></ProtectedRoute>},
    {path:'*',element:<NotFound/>},
  ]}
 ])

function App() {
  

  return (
    <>
    <CartContextProvider>

          <QueryClientProvider client={query}>

              <UserContextProvider>
                  <CounterContextProvider>
                    <RouterProvider router={Route}></RouterProvider>
                    <Toaster/>
                    <ReactQueryDevtools></ReactQueryDevtools>
                  </CounterContextProvider>
              </UserContextProvider>

          </QueryClientProvider>
    </CartContextProvider>

    </>
  )
}

export default App
