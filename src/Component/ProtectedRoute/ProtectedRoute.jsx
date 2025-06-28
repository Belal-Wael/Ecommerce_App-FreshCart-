import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
     
   if(localStorage.getItem('userToken')){
        return props.children;
   }
   else{
      //  return props.children;
     return < Navigate to={'/login'}/>
   }
}
