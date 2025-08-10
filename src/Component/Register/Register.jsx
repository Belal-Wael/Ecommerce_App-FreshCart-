import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as yup from 'yup'
import { userContext } from '../../Context/UserContext';

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

     let formik=useFormik({
      initialValues:{
        name:'',
        phone:'',
        email:'',
        password:'',
        rePassword:''
      },
      validationSchema:validateSchema,
      onSubmit:handelRegister
     })

  return <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <i className="fas fa-user-plus text-white text-2xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Create Account
            </span>
          </h1>
          <p className="text-gray-600">Join us and start your shopping journey</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {ApiError && (
              <div className="p-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg flex items-center" role="alert">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {ApiError}
              </div>
            )}

            <div className="space-y-4">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input 
                  type="text" 
                  name="name" 
                  value={formik.values.name} 
                  id="name" 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formik.errors.name && formik.touched.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                />
              </div>
              {formik.errors.name && formik.touched.name && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg flex items-center" role="alert">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {formik.errors.name}
                </div>
              )}

              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input 
                  type="email" 
                  name="email" 
                  value={formik.values.email} 
                  id="email" 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formik.errors.email && formik.touched.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg flex items-center" role="alert">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {formik.errors.email}
                </div>
              )}

              {/* Phone Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-phone text-gray-400"></i>
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formik.values.phone} 
                  id="phone" 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formik.errors.phone && formik.touched.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                />
              </div>
              {formik.errors.phone && formik.touched.phone && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg flex items-center" role="alert">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {formik.errors.phone}
                </div>
              )}

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input 
                  type="password" 
                  name="password" 
                  value={formik.values.password} 
                  id="password" 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formik.errors.password && formik.touched.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                />
              </div>
              {formik.errors.password && formik.touched.password && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg flex items-center" role="alert">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {formik.errors.password}
                </div>
              )}

              {/* RePassword Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input 
                  type="password" 
                  name="rePassword" 
                  value={formik.values.rePassword} 
                  id="rePassword" 
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    formik.errors.rePassword && formik.touched.rePassword ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Confirm your password"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                />
              </div>
              {formik.errors.rePassword && formik.touched.rePassword && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg flex items-center" role="alert">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {formik.errors.rePassword}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <input 
                id="agree-terms" 
                name="agree-terms" 
                type="checkbox" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
              </label>
            </div>

            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Creating account...
                </div>
              ) : (
                <div className="flex items-center">
                  <i className="fas fa-user-plus mr-2"></i>
                  Create Account
                </div>
              )}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
}


