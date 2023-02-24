import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionsRequest } from '../../slices/questions.slice';
import Question from '../../components/Question';
import LoadingSpinner from './../LoadingSpinner';
import styles from './QuestionsList.module.sass';

function QuestionsList() {
    const questions = useSelector(state => state.questions.questionPosts);
    const isFetching = useSelector(state => state.questions.isFetching);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestionsRequest());
    }, []);

    if(isFetching) {
        return <LoadingSpinner/>
    } else {
        return (
            <section className={styles.questions}>
                <h1 className={styles.heading}>All questions</h1>

                {
                    questions.length? 
                    questions.map(q => {
                        return <Question key={uuidv4()} id={q.id} question={q}/>;
                    })
                    :
                    <div>No questions have been asked yet</div>
                }
            </section>
        )
    }    
};

export default QuestionsList;