import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './QuestionsList.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionsRequest } from '../../slices/questions.slice';
import Question from '../../components/Question';

function QuestionsList() {
    const selector = ({questions: { questionPosts }}) => questionPosts;
    const questions = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestionsRequest());
    }, [])
    
    return (
        <section className={styles.questions}>
            <h1 className={styles.heading}>All questions</h1>
            <h4 className={styles.resultsAmount}>9 results found</h4>

            {/* <Filter/> */}

            <form action="">
            <input type="button" value="Latest"/>
            <input type="button" value="Oldest"/>
            <input type="button" value="Upvotes"/>
            <input type="button" value="Downvotes"/>
            </form>

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
};

export default QuestionsList;