import React from 'react';
import { formatDistance } from 'date-fns'
import { NavLink } from 'react-router-dom';
import removeMarkdown from 'remove-markdown';
import defaultAvatar from '../../images/default-avatar.svg';
import likeIcon from '../../images/like.png';
import commentIcon from '../../images/comment.png';
import clockIcon from '../../images/clock.png';
import viewsIcon from '../../images/views.png';
import styles from './Question.module.sass';

function Question(props) {
    const { 
        id, 
        question: { 
            title, 
            questionBody,
            createdAt, 
            views_amount,
            votesValue,
            user: {
                profilePictureUrl,
                username
            }
    }} = props;
    
    return (
        <div className={styles.questionLink}>
            <section className={styles.questionBox}>
                <div className={styles.questionContainer}>
                    <div className={styles.question}>
                        <NavLink  to={id}>
                            <h1 className={styles.title}>{title}</h1>
                        </NavLink>
                        <p className={styles.questionBody}>{removeMarkdown(questionBody)}</p>
                    </div>

                    <div className={styles.info}>
                        <div>
                            <div>
                                <img src={clockIcon} alt="clock" />
                                <span>Asked {formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}</span>
                            </div>

                            <div>
                                <img src={viewsIcon} alt="clock" />
                                <span>{views_amount} views</span>
                            </div>

                            <div>
                                <img src={likeIcon} alt="clock" />
                                <span>{votesValue || 0} upvotes</span>
                            </div>

                            <div>
                                <img src={commentIcon} alt="clock" />
                                <span>0 answers</span> 
                            </div>
                        </div>

                        <div className={styles.author}>
                            <img className={styles.avatar} src={profilePictureUrl || defaultAvatar} alt="author's avatar" />
                            <span className={styles.name}>{username}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Question;