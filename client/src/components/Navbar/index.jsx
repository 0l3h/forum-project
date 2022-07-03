import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.sass';
import UserDropdown from '../UserDropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isLogged, setIsLogged] = useState(true);

  const toggleMenu = e => {
    e.target.style = { 
      backgroundImage: 'url(../../images.close-menu-icon.svg)' 
    };
    
    setIsOpen(isOpen => !isOpen);
  };

  return <nav className={styles.navbar}>
    <img src="/logo.png" alt="logo" className={styles.logo}/>
    
    <button className={styles.menuToggle} onClick={toggleMenu} data-menu-open={isOpen.toString()}>
    </button>

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
        isLogged? 
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