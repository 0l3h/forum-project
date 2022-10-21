import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.sass';
import UserDropdown from '../UserDropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const userId = useSelector(state => state.user.userData.id);
  const navRef = useRef(null);
  const location = useLocation();
  
  const toggleMenu = e => {
    e.target.style = { 
      backgroundImage: 'url(../../images.close-menu-icon.svg)' 
    };
    
    setIsOpen(isOpen => !isOpen);
  };

  useEffect(() => setIsOpen(false), [location.pathname]);
  useEffect(() => {
    const handleClick = (event) => {
        navRef.current &&
        !navRef.current.contains(event.target) &&
        setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [navRef]);

  return <nav className={styles.navbar} ref={navRef}>
      <img src="/logo.png" alt="logo" className={styles.logo}/>
      
      <button className={styles.menuToggle} onClick={toggleMenu} data-menu-open={isOpen.toString()}></button>

      <section className={styles.links}>
        <NavLink className={styles.navLink} to='/'>
          Home
        </NavLink>
        
        <NavLink className={styles.navLink} to='/browse-questions'>
          Questions
        </NavLink>
        
        <NavLink className={styles.navLink} to='/ask-question'>
          Ask a question
        </NavLink>

        {
          userId? 
            <UserDropdown/>
            :
            <>
              <NavLink className={styles.loginButton} to='/log-in'>
                Log in
              </NavLink>
              
              <NavLink className={styles.signupButton} to='/sign-up'>
                Sign up
              </NavLink>
            </>
        }
      </section>
  </nav>;
}

export default Navbar;