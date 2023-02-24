import React, { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../slices/user.slice';
import { Form, Formik} from 'formik';
import companyLogo from '../../images/askmeLogo.png';
import Input from '../../components/Input';
import styles from './SignUp.module.sass';
import schema from '../../validation/validationSchema';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userId = useSelector(state => state.user.userData.id);
  const errorMessage = useSelector(state => state.user.error);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    window.gtag('config', 'G-WJZPSFS6SG', {
      send_page_view: false,
    });

    window.gtag('event', 'page_view', {
      page_title: 'Sign up page',
    })
  }, []);

  useEffect(() => {
    if (userId) {
      window.gtag('event', 'signup'); 
      
      navigate(from);
    }
  });

  const submit = values => {
    dispatch(signUpRequest(values));
  }

  return (
    <main className={styles.content}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={submit} 
        validationSchema={schema.signupSchema}>
        
        <Form className={styles.signupForm}>
            <img src={companyLogo} alt="logo" />
            
            <h1 className={styles.heading}>Sign up</h1>
            
            <label htmlFor="username">Username</label>
            <Input type="text" name="username" placeholder="Username"/>
            
            <label htmlFor="email">Email</label>
            <Input type="email" name="email" placeholder="Email"/>
            
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" placeholder="Password"/>
            
            <label htmlFor="confirmPassword">Confirm your password</label>
            <Input type="password" name="confirmPassword" placeholder="Repeat your password"/>

            <div>
              <span>Already have an account?</span>
              <NavLink to="/log-in" className={styles.loginLink}> Log in</NavLink>
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

export default SignUp;