import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import styles from './EditProfile.module.sass';
import SideMenu from '../../components/SideMenu';
import warningIcon from '../../images/warning-icon.png'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DragAndDrop from '../../components/DragAndDrop';
import { updateMyProfileRequest } from '../../slices/user.slice';

function EditProfile() {
    const dispatch = useDispatch();

    const initialValues = {
        username: '',
        about: '',
        profilePicture: null,
        password: '',
        email: '',
    };

    const submit = values => {
        dispatch(updateMyProfileRequest(values));
    }

    return <>
        <Navbar/>

        <main className={styles.content}>
            <SideMenu/>

            <div className={styles.container}>

                <Formik initialValues={initialValues} onSubmit={submit}>
                    <Form className={styles.editProfileForm}>
                        <h1 className={styles.heading}>Edit profile</h1>

                        <section className={styles.warning}>
                            <img src={warningIcon} className={styles.warningIcon} alt="warning icon" />
                            <p>When editing your profile, remember to follow our community rules</p>
                        </section>

                        <label>
                            Username

                            <Field type="text" name="username" placeholder="e.g. us3rname" className={styles.dataInput}/>
                        </label>
                        
                        <DragAndDrop name="profilePicture"/>

                        <label>
                            About

                            <Field type="text" name="about" placeholder="e.g. I'm developer working with javascript" className={styles.dataInput}/>
                        </label>
                        
                        <label>
                            Password
                        
                            <Field type="password" name="password" placeholder="Password" autoComplete="new-password" className={styles.dataInput}/>
                        </label>
                        
                        <label>
                            Email

                            <Field type="email" name="email" placeholder="test@mail.com" className={styles.dataInput}/>
                        </label>
                        
                        <button type="submit" className={styles.submitButton}>Confirm</button>
                    </Form>
                </Formik>
            </div>
        </main>

        <Footer/>
    </>
}

export default EditProfile;