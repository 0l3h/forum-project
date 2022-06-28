import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.sass';

function Navbar() {
  return <nav className={styles.navbar}>
    <img src="/logo.png" alt="logo" className={styles.logo}/>
    <NavLink className={styles.navLink} to='/'>
      Home
    </NavLink>
    
    <NavLink className={styles.navLink} to='/browse-questions'>
      Questions
    </NavLink>
    
    <NavLink className={styles.navLink} to='/ask-question'>
      Ask a question
    </NavLink>
    
    <NavLink className={styles.loginButton} to='/log-in'>
      Log in
    </NavLink>
    
    <NavLink className={styles.signupButton} to='/sign-up'>
      Sign up
    </NavLink>
  </nav>;
}

export default Navbar;