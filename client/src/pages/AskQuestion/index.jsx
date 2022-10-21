import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { createQuestionRequest } from '../../slices/questions.slice.js';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar/index.jsx';
import SideMenu from '../../components/SideMenu/index.jsx';
import warningIcon from '../../images/warning-icon.png';
import TextInput from '../../components/TextInput';
import styles from './AskQuestion.module.sass';
import schemas from '../../validation/validationSchema';
import Footer from '../../components/Footer/index.jsx';

function AskQuestion() {
    const dispatch = useDispatch();

    const initialValues = {
        title: '',
        questionBody: ''
    };

    const submit = values => {
        dispatch(createQuestionRequest(values));
    };

    return <>
        <Navbar/>

        <main className={styles.container}>
            <SideMenu/>

            <div className={styles.content}>
                <Formik initialValues={initialValues} validationSchema={schemas.questionSchema} onSubmit={submit}>
                    <Form className={styles.questionForm}>
                        <h1 className={styles.heading}>Ask a public question</h1>

                        <section className={styles.warning}>
                            <img src={warningIcon} className={styles.warningIcon} alt="warning icon" />
                            <p>When writing a question, remember to follow our community rules</p>
                        </section>

                        <label htmlFor="title" className={styles.label}>
                            <span>Title</span>
                            <p>Brief summary of a problem</p>
                        </label>
                        <Input type="text" label="Title" placeholder="e.g. Can't name a file with space characters" name="title" className={styles.titleInput}/>

                        <label htmlFor="questionBody">
                            <span>Description</span>
                            <p>Explain what went wrong</p>
                        </label>
                        <TextInput name="questionBody"/>

                        <button type="submit" className={styles.postButton}>
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