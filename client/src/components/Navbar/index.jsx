'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';
// import { useSelector } from 'react-redux';
// import UserDropdown from '../UserDropdown';

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const userId = useSelector(state => state.user.userData.id);
  // const navRef = useRef(null);
  // const location = useLocation();

  const userId = 's;dfld;f';
  
  // const toggleMenu = e => {
  //   e.target.style = { 
  //     backgroundImage: 'url(../../images.close-menu-icon.svg)' 
  //   };
    
  //   setIsOpen(isOpen => !isOpen);
  // };

  // useEffect(() => setIsOpen(false), [location.pathname]);
  // useEffect(() => {
  //   const handleClick = (event) => {
  //       navRef.current &&
  //       !navRef.current.contains(event.target) &&
  //       setIsOpen(false);
  //   };

  //   document.addEventListener('mousedown', handleClick);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, [navRef]);

  return <nav className='p-3 flex justify-between'>
      <Image 
        src="/logo.png" 
        width={70}
        height={70}
        alt="logo"/>
      
      <section className='flex gap-5'>
        <Link href='/' className='hover:text-blue-600'>Home</Link>
        <Link href='/questions' className='hover:text-blue-600'>Questions</Link>
        <Link href='/ask-question' className='hover:text-blue-600'>Ask a question</Link>

        {/* { */}
          {/* userId?  */}
            {/* <UserDropdown/> */}
            {/* : */}
            <>
              <Link href='/log-in'>
                Log in
              </Link>
              
              <Link href='/sign-up'>
                Sign up
              </Link>
            </>
        {/* } */}
      </section>
  </nav>;
}

export default Navbar;