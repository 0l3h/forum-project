import React, { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import companyLogo from '../../images/logo.png';
import loginImage from '../../images/login-illustration.svg';
import instagramLogo from '../../images/instagram-logo.png';
import twitterLogo from '../../images/twitter-logo.png';
import linkedInLogo from '../../images/linkedin-logo.png';
import { logInRequest } from '../../slices/auth.slice';
import schemas from '../../validation/validationSchema';
import styles from './LogIn.module.sass';
import Input from '../../components/Input';

function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const selector = state => state.auth.userData.id; 

    const userId = useSelector(selector);

    const from = location.state?.from?.pathname || "/";

    const initialValues = {
        username: '',
        password: '',
    }

    useEffect(() => {
        console.log(userId, from)
        userId && navigate(from, { replace: true });
    });

    const submit = values => {
        dispatch(logInRequest(values));
    }

    return (
        <main className={styles.content}>
            <div className={styles.sideSection}>
        
                <h1>Welcome!</h1>
    
                <p>Enter the system to use Askme fully</p>

                {/* <img src={loginImage} alt="" /> */}

                <div className={styles.decor}></div>

                <section className={styles.socials}>
                    <img src={instagramLogo} alt="" />
                    <img src={twitterLogo} alt="" />
                    <img src={linkedInLogo} alt="" />
                </section>

                <div className={styles.decor2}></div>
            </div>
            
            <Formik 
                initialValues={initialValues} 
                validationSchema={schemas.loginSchema}
                onSubmit={submit}>
                <Form className={styles.loginForm}>
                    <img src={companyLogo} alt="logo" />

                    <h1 className={styles.heading}>Log in</h1>

                    <Input type="text" label="Username" name="username" placeholder='Username'/>
                    <Input type="password" label="Enter your password" name="password" placeholder='Password'/>

                    <div>
                        <span>Have no account yet?</span>
                        <NavLink to="/sign-up" className={styles.signupLink}> Sign up</NavLink>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </Form>
            </Formik>
        </main>
    )
}

export default LogIn;