import { useFormik } from 'formik';
import { useContext } from 'react';
import * as yup from 'yup'
import { CartContext } from '../../Context/CartContext';
import { useParams } from 'react-router-dom';

export default function CheckOut() {
 
   let {CheckOut} = useContext(CartContext);
     
   let{cartId}=useParams();
   
    

    let validateSchema=yup.object().shape({
    details:yup.string().required("details is required"),
    phone:yup.string().matches(/^01[0125][0-9]{8}$/ , "phone must be Egypt Number").required("phone is required"),
    city:yup.string().required("City is required"),
    })

     let formik=useFormik({
        initialValues:{
          details:'',
          phone:'',
          city:'',
        },
        validationSchema:validateSchema,
        onSubmit:()=>hendelPaymentRequest(cartId , 'http://localhost:5173')
      })
     
     async function hendelPaymentRequest(cartId , url ){  
        let {data} = await CheckOut(cartId , url , formik?.values);
         if(data?.status === 'success'){
          window.location.href=data?.session?.url;
         }        
     }



    

     

  return <>
    <div className='py-6 max-w-lg mx-auto'>
    <form action="" onSubmit={formik.handleSubmit}>
        <h1 className='text-3xl font-bold mb-6 text-main'>CheckOut </h1>


        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="details" value={formik.values.details} id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your details :</label>
        </div>
        
       {formik.errors.details &&formik.touched.details?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.details}
        </div> : null}


        <div className="relative z-0 w-full mb-5 group">
            <input type="tel" name="phone" value={formik.values.phone} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone Number :</label>
        </div>
        {formik.errors.phone &&formik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.phone}
        </div> : null}





        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="city" value={formik.values.city} id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your City :</label>
        </div>
         
        {formik.errors.city &&formik.touched.city?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
          {formik.errors.city}
        </div> : null}



        <button type="submit" className ="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
           Pay Now
          </button>
     </form>
    </div>
  </>
}


