import React from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../Page';
import styles from './LogIn.module.sass';

function LogIn() {
    return (
        <Page>
            <main className={styles.content}>
                <form action="" className={styles.loginForm}>
                    <h1 className={styles.heading}>Log in</h1>

                    <label htmlFor="username"/>
                    <input type="text" name="username" placeholder='Username'/>
                    
                    <label htmlFor="password"/>
                    <input type="password" name="password" placeholder='Password'/>

                    <span>
                        Have no account yet? {' '}

                        <NavLink to="/sign-up" className={styles.signupLink}>
                            Sign up 
                        </NavLink>
                    </span>

                    
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </main>
        </Page>
    )
}

export default LogIn;