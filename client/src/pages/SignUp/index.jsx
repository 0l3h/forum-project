import React from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../Page';
import styles from './SignUp.module.sass'

function SignUp() {
  return (
    <Page>
        <main className={styles.content}>
            <form action="" className={styles.signupForm}>
                <h1 className={styles.heading}>Sign up</h1>

                <label htmlFor="username"/>
                <input type="text" name="username" placeholder="Username"/>

                <label htmlFor="email"/>
                <input type="email" name="email" placeholder="Email"/>

                <label htmlFor="password"/>
                <input type="email" name="password" placeholder="Password"/>

                <label htmlFor="repeatedPassword"/>
                <input type="email" name="repeatedPassword" placeholder="Repeat your password"/>
            
                <span>
                  Already have an account? {' '}

                  <NavLink to="/log-in" className={styles.signupLink}>
                    Log in 
                  </NavLink>
                </span>

                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </main>
    </Page>
  )
}

export default SignUp;