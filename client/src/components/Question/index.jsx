import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../images/default-avatar.svg';
import styles from './Question.module.sass';

function Question(props) {
    const {text, authorName, authorAvatar, answersAmount} = props;
    
    return (
        <NavLink className={styles.questionLink} to='/question'>
            <section className={styles.questionBox}>
                <div className={styles.author}>
                    <img className={styles.avatar} src={authorAvatar || defaultAvatar} alt="author's avatar" />
                    <span className={styles.author}>{authorName}</span>
                </div>
                <span className={styles.answersAmount}>
                    {answersAmount} answer(s)
                </span>
                <p className={styles.text}>{text}</p>
            </section>
        </NavLink>
    )
}

export default Question;