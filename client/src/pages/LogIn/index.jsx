import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import schemas from '../../validation/validationSchema';
import styles from './LogIn.module.sass';
import Input from '../../components/Input';

function LogIn() {
    const initialValues = {
        username: '',
        password: '',
    }

    const submit = values => {
        console.log(values);
    }

    return (
        <main className={styles.content}>
            <Formik 
                initialValues={initialValues} 
                validationSchema={schemas.loginSchema}
                onSubmit={submit}>
                <Form className={styles.loginForm}>
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