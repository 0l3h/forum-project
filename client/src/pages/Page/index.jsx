import React from 'react'
import Navbar from './../../components/Navbar';
import Footer from './../../components/Footer';
import styles from './Page.module.sass';

function Page(props) {
  return <>
    <Navbar/>
    {props.children}
    <Footer/>
  </>
}

export default Page;