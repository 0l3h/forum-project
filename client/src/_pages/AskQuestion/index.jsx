import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
// import warningIcon from '../../images/warning-icon.png';
import TextInput from '../../components/TextInput';
import schemas from '../../validation/validationSchema';
import Footer from '../../components/Footer';

function AskQuestion() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        title: '',
        questionBody: ''
    };

    const submit = values => {
        // dispatch(createQuestionRequest(values));
        navigate('/browse-questions');
    };

    return <>
        <Navbar/>

        <main>
            <SideMenu/>

            <div>
                <Formik initialValues={initialValues} validationSchema={schemas.questionSchema} onSubmit={submit}>
                    <Form>
                        <h1>Ask a public question</h1>

                        <section>
                            {/* <img src={warningIcon} alt="warning icon" /> */}
                            <p>When writing a question, remember to follow our community rules</p>
                        </section>

                        <label htmlFor="title">
                            <span>Title</span>
                            <p>Brief summary of a problem</p>
                        </label>
                        <Input type="text" label="Title" placeholder="e.g. Can't name a file with space characters" name="title"/>

                        <label htmlFor="questionBody">
                            <span>Description</span>
                            <p>Explain what went wrong</p>
                        </label>

                        <TextInput name="questionBody"/>

                        <button type="submit">
                            Post
                        </button>
                    </Form>
                </Formik>
            </div>
        </main>

        <Footer/>
    </>
}

export default AskQuestion