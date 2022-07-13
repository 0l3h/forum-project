import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './../../components/Navbar';
import Footer from './../../components/Footer';

function Page(props) {
  return <>
    <Navbar/>
      <Outlet/>
    <Footer/>
  </>
}

export default Page;