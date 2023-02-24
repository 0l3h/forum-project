import React, { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import companyLogo from '../../images/askmeLogo.png';
import { logInRequest } from '../../slices/user.slice';
import schemas from '../../validation/validationSchema';
import styles from './LogIn.module.sass';
import Input from '../../components/Input';

function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const userId = useSelector(state => state.user.userData.id);
    const errorMessage = useSelector(state => state.user.error);
    const from = location.state?.from?.pathname || "/";
    const initialValues = {
        email: '',
        password: '',
    }

    useEffect(() => {
        if (userId) {
            window.gtag('event', 'login');
        
            navigate(from);
        }
    });

    useEffect(() => {
        window.gtag('config', 'G-WJZPSFS6SG', {
            send_page_view: false,
        });

        window.gtag('event', 'page_view', {
            page_title: 'Login page',
        })
    }, [])

    const submit = values => {
        dispatch(logInRequest(values));
    }

    return (
        <main className={styles.content}>
            <Formik 
                initialValues={initialValues} 
                validationSchema={schemas.loginSchema}
                onSubmit={submit}>
                <Form className={styles.loginForm}>
                    <img src={companyLogo} alt="logo" />

                    <h1 className={styles.heading}>Log in</h1>

                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" placeholder='Email'/>
                    
                    <label htmlFor="password">Password</label>
                    <Input type="password" name="password" placeholder='Enter your password'/>

                    <div>
                        <span>Have no account yet?</span>
                        <NavLink to="/sign-up" className={styles.signupLink}> Sign up</NavLink>
                    </div>

                    {
                        errorMessage && (
                            <div className={styles.errorMessage}>
                                {errorMessage}
                            </div>
                        )
                    }
                    
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </Form>
            </Formik>
        </main>
    )
}

export default LogIn;