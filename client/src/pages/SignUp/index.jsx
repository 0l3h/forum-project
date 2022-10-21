import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../slices/user.slice';
import { Form, Formik} from 'formik';
import instagramLogo from '../../images/instagram-logo.png';
import twitterLogo from '../../images/twitter-logo.png';
import linkedInLogo from '../../images/linkedin-logo.png';
import companyLogo from '../../images/logo.png';
import Input from '../../components/Input';
import styles from './SignUp.module.sass';
import schema from '../../validation/validationSchema';

function SignUp() {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const submit = values => {
    dispatch(signUpRequest(values));
  }

  return (
    <main className={styles.content}>
      <div className={styles.sideSection}>
        
        <h1>Welcome!</h1>

        <p>Enter the system to use Askme fully</p>

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
        onSubmit={submit} 
        validationSchema={schema.signupSchema}>
        
        <Form className={styles.signupForm}>
            <img src={companyLogo} alt="logo" />
            
            <h1 className={styles.heading}>Sign up</h1>

            <Input type="text" name="username" label="Username (max 20 characters)" placeholder="Username"/>
            <Input type="email" name="email" label="Email" placeholder="Email"/>
            <Input type="password" name="password" label="Create a password" placeholder="Password"/>
            <Input type="password"name="confirmPassword" label="Confirm your password" placeholder="Repeat your password"/>

            <div>
              <span>Already have an account?</span>
              <NavLink to="/log-in" className={styles.signupLink}> Log in</NavLink>
            </div>

            <button type="submit" className={styles.submitButton}>Submit</button>
        </Form>
      </Formik>
    </main>
  )
}

export default SignUp;