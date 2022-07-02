import React from 'react';
import warningIcon from '../../images/warning-icon.png'
import Page from '../Page';
import TextInput from '../../components/TextInput';
import styles from './AskQuestion.module.sass';

function AskQuestion() {

    return (
        <Page>
            <main className={styles.content}>
                <section className={styles.warning}>
                    <img src={warningIcon} alt="warning icon" />
                    <p>When writing a question, remember to follow our community rules</p>
                </section>

                <form className={styles.questionForm}>
                    <h1 className={styles.heading}>Ask a public question</h1>

                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title"/>

                    <label htmlFor="question">Question</label>
                    <TextInput type="text" name="question"/>

                    <button type="submit" className={styles.postButton}>
                        Post
                    </button>
                </form>

            </main>
        </Page>
    )
}

export default AskQuestion