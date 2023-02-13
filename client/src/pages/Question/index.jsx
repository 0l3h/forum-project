import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form } from 'formik';
import { useParams } from 'react-router';
import { NavLink, useNavigate } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import schemas from '../../validation/validationSchema';
import TextInput from '../../components/TextInput';

import { 
    getQuestionByIdRequest, 
    voteQuestionRequest, 
    createAnswerRequest, 
} from '../../slices/question.slice';

import defaultAvatar from '../../images/default-avatar.svg';
import lockImage from '../../images/padlock.png';
import styles from './Question.module.sass';
import LoadingSpinner from '../../components/LoadingSpinner';
import Answer from '../../components/Answer';

function Question() {
    const { questionId } = useParams();
    const question = useSelector(state => state.question.questionPost);
    const isFetching = useSelector(state => state.question.isFetching);
    const userData = useSelector(state => state.user.userData);
    const userAvatar = question?.user?.profilePictureUrl || defaultAvatar;
    const [isUpvoteQuestionDisabled, setUpvoteQuestionDisabled] = useState();    
    const navigate = useNavigate();

    const initialValues = {
        answer: ''
    };

    const dispatch = useDispatch();

    const postAnswer = values => {
        dispatch(createAnswerRequest({ ...values, questionId }));
        dispatch(getQuestionByIdRequest(questionId));
    };

    const voteQuestion = (vote) => {
        setUpvoteQuestionDisabled(true);

        if(!userData.id) {
            return navigate('/log-in');
        }
        
        dispatch(voteQuestionRequest({ questionId, vote }));
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
                        <button disabled={isUpvoteQuestionDisabled} onClick={(e) => voteQuestion(1)}>Upvote</button>
                        <button disabled={isUpvoteQuestionDisabled} onClick={(e) => voteQuestion(-1)}>Downvote</button>
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
                                <Answer answer={answer} key={uuidv4()}/>
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