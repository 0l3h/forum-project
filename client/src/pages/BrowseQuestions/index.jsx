import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Question from '../../components/Question';
import styles from './BrowseQuestions.module.sass';
import Filter from '../../components/Filter';

const selector = ({questions: { questionPosts }}) => questionPosts;

function BrowseQuestions() {
  const questions = useSelector(selector);

  return (
    <main className={styles.content}>
      <section className={styles.users}>
        <div>User</div>
        <div>User</div>
        <div>User</div>
        <div>User</div>
        <div>User</div>
      </section>

      <section className={styles.questions}>
        <h1 className={styles.heading}>All questions</h1>
        <h4 className={styles.resultsAmount}>9 results found</h4>

        <Filter/>

        {
          questions.length? 
            questions.map(q => {
              console.log(q.questionBody);
              return <Question key={uuidv4()} title={q.title} text={q.questionBody} authorName='Kevin' answersAmount={5}/>;
            })
            :
            <div>No questions have been asked yet</div>
        }
      </section>

      <section className={styles.popular}>
        <h2 className={styles.heading}>Most discussed</h2>
        
        <ul className={styles.questionsList}>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
      </section>

      <section className={styles.subscribeSection}>
        <h2 className={styles.heading}>Askme Plus+</h2>
        
        <p className={styles.text}>
          Unlock more with monthly subscription. Available for big bussinesses and small teams. Adapted for any budget.
        </p>
        
        <NavLink to='/pricing' className={styles.subscribeButton}>
          Subscribe  
        </NavLink>
      </section>
    </main>
  )
}

export default BrowseQuestions