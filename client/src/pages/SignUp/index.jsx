import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Formik} from 'formik';
import Page from '../Page';
import Input from '../../components/Input';
import styles from './SignUp.module.sass';
import schema from '../../validation/validationSchema';

function SignUp() {
  const initialValues = {
    file: null,
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const submit = values => {
    console.log(values);
  }

  return (
    <Page>
        <main className={styles.content}>
            <Formik 
              initialValues={initialValues} 
              onSubmit={submit} 
              validationSchema={schema.signupShema}>
              
              <Form className={styles.signupForm}>
                  <h1 className={styles.heading}>Sign up</h1>

                  <Input type="file" name="photo" label="Choose an image" accept=".jpeg, .png, .img"/>
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
    </Page>
  )
}

export default SignUp;