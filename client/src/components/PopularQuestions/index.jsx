import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPopularQuestionsRequest } from '../../slices/popularQuestions.slice';
import flameIcon from '../../images/flame.png';
import styles from './PopularQuestions.module.sass';


function PopularQuestions() {
  const popularQuestions = useSelector(state => state.popularQuestions.data);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPopularQuestionsRequest());
  }, [])

  return (
    <section className={styles.popular}>
        <div>
          <img src={flameIcon} alt="popular questions icon" />
          <h2 className={styles.heading}>Most discussed</h2>
        </div>
        
        <ul className={styles.questionsList}>
          {
            popularQuestions.map(question => (
              <NavLink key={uuidv4()} className={styles.questionLink} to={`/browse-questions/${question.id}`}>{question.title}</NavLink>
            )) 
          }
        </ul>
    </section>
  )
}

export default PopularQuestions;