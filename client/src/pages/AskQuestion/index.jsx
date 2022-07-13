import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../../slices/questionsSlice.js';
import Input from '../../components/Input';
import warningIcon from '../../images/warning-icon.png';
import Page from '../Page';
import TextInput from '../../components/TextInput';
import styles from './AskQuestion.module.sass';
import schemas from '../../validation/validationSchema';

function AskQuestion() {
    const dispatch = useDispatch();
    
    const initialValues = {
        title: '',
        questionBody: ''
    };

    const submit = values => {
        dispatch(askQuestion(values));
    };

    return (
        <Page>
            <main className={styles.content}>
                <Formik initialValues={initialValues} validationSchema={schemas.questionSchema} onSubmit={submit}>
                    <Form className={styles.questionForm}>
                        <h1 className={styles.heading}>Ask a public question</h1>
                        
                        <section className={styles.warning}>
                            <img src={warningIcon} className={styles.warningIcon} alt="warning icon" />
                            <p>When writing a question, remember to follow our community rules</p>
                        </section>

                        <Input type="text" label="Title" name="title" className={styles.titleInput}/>

                        <TextInput name="questionBody"/>

                        <button type="submit" className={styles.postButton}>
                            Post
                        </button>
                    </Form>
                </Formik>
            </main>
        </Page>
    )
}

export default AskQuestion