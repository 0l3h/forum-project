import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../images/default-avatar.svg';
import clockIcon from '../../images/clock.png';
import answersIcon from '../../images/comment.png';
import styles from './Question.module.sass';

function Question(props) {
    const { id, question: { title, authorName, authorAvatar, answersAmount } } = props;
    
    return (
        <NavLink className={styles.questionLink} to={id}>
            <section className={styles.questionBox}>
                <div className={styles.question}>
                    <h1 className={styles.title}>{title}</h1>

                    <div className={styles.tags}>
                        <span>linux</span>
                    </div>
                </div>

                <div className={styles.askedDate}>
                    <img src={clockIcon} alt="clock" />
                    <span>asked 1 day ago</span>
                </div>

                <div className={styles.answersAmount}>
                    <img src={answersIcon} alt="answers"/>
                    <span>{answersAmount}</span>
                </div>
                
                <div className={styles.author}>
                    <img className={styles.avatar} src={authorAvatar || defaultAvatar} alt="author's avatar" />
                    <span className={styles.name}>{authorName}</span>
                </div>
            </section>
        </NavLink>
    )
}

export default Question;