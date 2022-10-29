import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { useParams } from 'react-router';
import { NavLink, useNavigate } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';
import schemas from '../../validation/validationSchema';
import TextInput from '../../components/TextInput';
import { getQuestionByIdRequest, voteQuestionRequest } from '../../slices/question.slice';
import { createAnswerRequest } from '../../slices/answers.slice';
import defaultAvatar from '../../images/default-avatar.svg';
import lockImage from '../../images/padlock.png';
import styles from './Question.module.sass';
import LoadingSpinner from '../../components/LoadingSpinner';

function Question() {
    const { questionId } = useParams();
    const question = useSelector(state => state.question.questionPost);
    const isFetching = useSelector(state => state.question.isFetching);
    const userData = useSelector(state => state.user.userData);
    const userAvatar = question?.user?.profilePictureUrl || defaultAvatar;
    const navigate = useNavigate();

    const initialValues = {
        answer: ''
    };

    const dispatch = useDispatch();

    const postAnswer = values => {
        dispatch(createAnswerRequest({ ...values, questionId }));
    };

    const voteQuestion = (vote) => {
        if(!userData.id) {
            return navigate('/log-in');
        }
        dispatch(voteQuestionRequest({ questionId, vote }));
    };

    const voteAnswer = (vote) => {
        dispatch(voteAnswerRequest({ questionId, vote }));
    };
    
    useEffect(() => {
        dispatch(getQuestionByIdRequest(questionId));
    }, [questionId]);

    if(isFetching) {
        return <LoadingSpinner/>
    }
    else {
        return <main className={styles.content}>
            <div className={styles.heading}>
                <h1>{question.title}</h1>

                <span>asked {question.createdAt && formatDistance(new Date(question.createdAt), new Date(), { addSuffix: true })}</span>
                <span>viewed {question.views_amount} times</span>
                <span>{question.votesValue || 0} upvotes</span>
            </div>

            <div>
                <section className={styles.question}>
                    <div className={styles.questionBody}>
                        <ReactMarkdown>
                            {question.questionBody}
                        </ReactMarkdown>
                    </div>

                    <div className={styles.votes}>
                        <button onClick={() => voteQuestion(1)}>Upvote</button>
                        <button onClick={() => voteQuestion(-1)}>Downvote</button>
                    </div>

                    <div className={styles.user}>
                        <div className={styles.userAvatar}>
                            <img src={userAvatar} alt="user avatar" />
                        </div>
                        <span>{question?.user?.username}</span>
                    </div>
                </section>

                <h2 className={styles.answersAmount}>{question?.answers?.length || 0} answer(s)</h2>

                <section className={styles.answers}>
                    <ul>
                        {
                            question?.answers?.length?
                            question.answers.map((answer) => (
                                <li className={styles.answer} key={uuidv4()}>
                                    <div className={styles.answerContent}>
                                        <ReactMarkdown>
                                            {answer.answerBody}
                                        </ReactMarkdown>
                                    </div>
        
                                    <div>
                                        <div className={styles.votes}>
                                            <span>{answer.votesAmount} votes</span>
                                            <button onClick={() => voteQuestion(1)}>Upvote</button>
                                            <button onClick={() => voteQuestion(-1)}>Downvote</button>
                                        </div>

                                        <div>
                                            <span>answered {answer.createdAt && formatDistance(new Date(answer.createdAt), new Date(), { addSuffix: true })}</span>
                                            
                                            <section className={styles.author}>
                                                <div className={styles.avatar}>
                                                    <img src={answer.user.profilePictureUrl || defaultAvatar} alt="user avatar"/>
                                                </div>
                                                
                                                <span>{answer.user.username}</span>
                                            </section>
                                        </div>
                                    </div>
                                </li>
                            ))
                            :
                            <p>No one has answered this question yet.</p>
                        }
                    </ul>
                </section>

                {
                    userData.id? 
                    <>
                        <Formik initialValues={initialValues} validationSchema={schemas.answerSchema} onSubmit={postAnswer}>
                            <Form className={styles.form}>
                                <h2>Your answer</h2>
                                
                                <TextInput name='answer'/>  
                            
                                <button type="submit" className={styles.submitButton}>
                                    Post
                                </button>
                            </Form>
                        </Formik>
                    </>
                    :
                    <section className={styles.writeAnswer}>
                        <img src={lockImage} alt="lock"/>
                        
                        <div>                            
                            <span>You need to log in to answer this question. </span>

                            <NavLink to='/log-in' className={styles.loginButton}>
                                Log In
                            </NavLink>
                        </div>
                    </section>
                }
            </div>
        </main>
    }

   
}

export default Question;