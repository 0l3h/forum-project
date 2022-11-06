import React from 'react';
import styles from './Home.module.sass';
import Header from '../../components/Header';
import questionAnswerScreenshot from './../../images/question-answer.png';
import postsScreenshot from './../../images/question-screenshot.png';
import askQuestionScreenshot from './../../images/ask-question.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function index() {
    return <>
        <Navbar/>
        
        <main>
            <Header/>
            
            <ul className={styles.features}>
                <li className={styles.featCard}>
                    <span className={styles.heading}>+25000</span>
                    
                    <p>Questions already asked</p>
                </li>
                
                <li className={styles.featCard}>
                    <span className={styles.heading}>+120000</span>
                    
                    <p>Visitors every month</p>
                </li>
                
                <li className={styles.featCard}>
                    <span className={styles.heading}>10 posts</span>
                    
                    <p>Every new second</p>
                </li>
            </ul>

            <section className={styles.details}>
                <div className={styles.description}>
                    <div>
                        <h3 className={styles.heading}>
                            Find answers
                        </h3>
                        
                        <p className={styles.text}>
                            Stuck with the problem? Chances are someone already asked for help
                        </p>
                    </div>

                    <div className={styles.screenshot}>
                        <img src={postsScreenshot} alt="" />
                    </div>
                </div>
                
                <div className={styles.description}>
                    <div>
                        <h3 className={styles.heading}>
                            Ask questions
                        </h3>
                        
                        <p className={styles.text}>
                            If you can't find solution, you may ask other devs about your specific problem
                        </p>
                    </div>

                    <div className={styles.screenshot}>
                        <img src={askQuestionScreenshot} alt="" />
                    </div>
                </div>
                
                <div className={styles.description}>                    
                    <div>
                        <h3 className={styles.heading}>
                            Help others
                        </h3>
                        
                        <p className={styles.text}>
                            Know solution to the problem? Help by providing the answer
                        </p>
                    </div>

                    <div className={styles.screenshot}>
                        <img src={questionAnswerScreenshot} alt="" />
                    </div>
                </div>
            </section>
        </main>

        <Footer/>
    </>
}

export default index