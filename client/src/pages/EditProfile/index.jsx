import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import SideMenu from '../../components/SideMenu';
// import warningIcon from '../../images/warning-icon.png'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DragAndDrop from '../../components/DragAndDrop';
// import { updateMyProfileRequest } from '../../slices/user.slice';

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
        // dispatch(updateMyProfileRequest(values));
    }

    return <>
        <Navbar/>

        <main>
            <SideMenu/>

            <div>

                <Formik initialValues={initialValues} onSubmit={submit}>
                    <Form>
                        <h1>Edit profile</h1>

                        <section>
                            {/* <img src={warningIcon} alt="warning icon" /> */}
                            <p>When editing your profile, remember to follow our community rules</p>
                        </section>

                        <label>
                            Username

                            <Field type="text" name="username" placeholder="e.g. us3rname"/>
                        </label>
                        
                        <DragAndDrop name="profilePicture"/>

                        <label>
                            About

                            <Field type="text" name="about" placeholder="e.g. I'm developer working with javascript"/>
                        </label>
                        
                        <label>
                            Password
                        
                            <Field type="password" name="password" placeholder="Password" autoComplete="new-password"/>
                        </label>
                        
                        <label>
                            Email

                            <Field type="email" name="email" placeholder="test@mail.com"/>
                        </label>
                        
                        <button type="submit">Confirm</button>
                    </Form>
                </Formik>
            </div>
        </main>

        <Footer/>
    </>
}

export default EditProfile;