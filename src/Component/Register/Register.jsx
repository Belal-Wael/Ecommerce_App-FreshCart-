import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { userContext } from '../../Context/userContext';

export default function Register() {
 
  
    let navigate=useNavigate();
    
    let [ApiError,setApiError]=useState('');
    let [isLoading,setIsLoading]=useState(false);

    let {setUserLogin}=useContext(userContext);

     async function handelRegister(formValues){
        // console.log(formValues);
            setIsLoading(true)
           await  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formValues)
              .then((apiResponse)=>{
               if(apiResponse?.data?.message==='success'){
                 localStorage.setItem('userToken',apiResponse?.data?.token);
                 setUserLogin(apiResponse?.data?.token);
                 navigate('/'); // routing to home using progrmatic routing 
                 setIsLoading(false)
               }
              }
              )
              .catch((apiResponse)=>{
                setApiError(apiResponse?.response?.data?.message);
                setIsLoading(false)
              })
        
     }


    let validateSchema=yup.object().shape({
       name:yup.string().min(3,"name must be greater than 3").max(10,"name must be less than 10").required("name is required"),
       email:yup.string().email("invalid email").required("email is required"),
       phone:yup.string().matches(/^01[0125][0-9]{8}$/ , "phone must be Egypt Number").required("phone is required"),
       password:yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/ , "password must start with capital character and contain at least 5 character").required("password is required"),
       rePassword:yup.string().oneOf([yup.ref('password')],"rePassword must be match with password").required("rePassword is required"),
    })
    //  function myValidate(formValues){
    //   let errors={}
    //    if(formValues.name===''){
    //     errors.name="name is required";
    //    }
    //    else if(!/^[A-Z][a-z]{3,5}$/.test(formValues.name)){
    //     errors.name="name must start with capital Character . . .";
    //    }
    //    if(formValues.email===''){
    //     errors.email="Email is required";
    //    }
    //    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)){
    //     errors.email="invalid email";
    //    }

    //   return errors;
    //  }

     let formik=useFormik({
      initialValues:{
        name:'',
        phone:'',
        email:'',
        password:'',
        rePassword:''
      },
      // validate:myValidate,
      validationSchema:validateSchema,
      onSubmit:handelRegister
     })

  return <>
    <div className='py-6 max-w-lg mx-auto'>
    <form action="" onSubmit={formik.handleSubmit}>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>Register Now</h1>


        {ApiError &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {ApiError}
        </div> }

        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="name" value={formik.values.name} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name :</label>
        </div>
        
       {formik.errors.name &&formik.touched.name?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.name}
        </div> : null}



        <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" value={formik.values.email} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email Address :</label>
        </div>
         
        {formik.errors.email &&formik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.email}
        </div> : null}


        <div className="relative z-0 w-full mb-5 group">
            <input type="tel" name="phone" value={formik.values.phone} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone Number :</label>
        </div>
        {formik.errors.phone &&formik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.phone}
        </div> : null}



        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" value={formik.values.password} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
        </div>

        {formik.errors.password &&formik.touched.password?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.password}
        </div> : null}


        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="rePassword" value={formik.values.rePassword} id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your rePassword :</label>
        </div>
        {formik.errors.rePassword &&formik.touched.rePassword?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.rePassword}
        </div> : null}

        <button type="submit" className ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           {isLoading?<i className='fas fa-spinner fa-spin'></i>:'Submit'}
          </button>
     </form>
    </div>
  </>
}


