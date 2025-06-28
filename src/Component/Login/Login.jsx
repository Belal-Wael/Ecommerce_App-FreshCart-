import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';

export default function Login() {
 
  
    let navigate=useNavigate();
    
    let [ApiError,setApiError]=useState('');
    let [isLoading,setIsLoading]=useState(false);

    let{setUserLogin}=useContext(userContext);

     async function handleLogin(formValues){
        // console.log(formValues);
              setIsLoading(true)
           await  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formValues)
              .then((apiResponse)=>{
                if(apiResponse?.data?.message==='success'){
                  localStorage.setItem('userToken',apiResponse?.data?.token);
                  setUserLogin(apiResponse?.data?.token);
                  navigate('/'); // routing to home using progrmatic routing 
                  setIsLoading(false)
                  console.log(apiResponse);
                  
                }
              }
              )
              .catch((apiResponse)=>{
                setApiError(apiResponse?.response?.data?.message);
                setIsLoading(false)
                console.log(apiResponse);
                
              })
        
     }


     let formik=useFormik({
      initialValues:{
        email:'',
        password:'',
      },
      onSubmit:handleLogin
     })

  return <>
    <div className='py-12 max-w-lg mx-auto'>
    <form action="" onSubmit={formik.handleSubmit}>
        <h1 className='text-3xl font-bold mb-6 text-gray-900'>Login  Now</h1>

        {ApiError &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {ApiError}
        </div> }


        <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" value={formik.values.email} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-900 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email Address :</label>
        </div>
      
       <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" value={formik.values.password} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gary-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-900 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
        </div>

        <div className='flex items-center py-4'>
        <button type="submit" className ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
           {isLoading?<i className='fas fa-spinner fa-spin'></i>:'Submit'}
          </button>
          <p className='pl-3'>did't have an account <span className='font-semibold '><Link to={'/Register'} className='text-gray-900'>Register Now</Link> </span></p>
        </div>
     </form>
    </div>
  </>
}


