import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
 

    const [Counter,SetCounter]=useState(0);

    useEffect(()=>{

    } , [])

  return <>
     <Navbar/>
      <div className="container mx-auto px-10 min-h-screen my-6 py-10 overflow-hidden">
       <Outlet></Outlet>
      </div>
     <Footer/>
  </>
}
