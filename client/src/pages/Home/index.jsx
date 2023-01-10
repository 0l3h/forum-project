import React, { useEffect } from 'react';
import styles from './Home.module.sass';
import Header from '../../components/Header';
import questionAnswerScreenshot from './../../images/question-answer.png';
import questionImage from './../../images/question-illustration.png';
import findImage from './../../images/searching-illustration.png';
import helpImage from './../../images/help-illustration.png';
import postsScreenshot from './../../images/question-screenshot.png';
import askQuestionScreenshot from './../../images/ask-question.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

function index() {
    useEffect(() => {
        window.gtag('config', 'G-WJZPSFS6SG', {
            send_page_view: false,
        });

        window.gtag('event', 'page_view', {
            page_title: 'Homepage',
        })
    }, [])
    
    return <>
        <Navbar/>
        
        <main>
            <Header/>
            
            <ul className={styles.features}>
                <div>
                    <h2>First among the best</h2>
                    <p>One of the most popular forums out there.</p>
                </div>
                
                <div>
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
                </div>
            </ul>

            <section className={styles.details}>
                <h2>See what you can do</h2>
                <p>Here you'll find all of the help you need</p>

                <div className={styles.description}>
                    <div>
                        <span>
                            <img src={findImage} alt="" />
                        </span>

                        <h3 className={styles.heading}>
                            Find answers
                        </h3>
                        
                        <p className={styles.text}>
                            Stuck with the problem? Chances are someone already asked for help
                        </p>

                        <NavLink to='/browse-questions'>Browse Questions</NavLink>
                    </div>

                    <div className={styles.screenshot}>
                        <img src={postsScreenshot} alt="" />
                    </div>
                </div>
                
                <div className={styles.description}>
                    <div>
                        <span>
                            <img src={questionImage} alt="" />
                        </span>

                        <h3 className={styles.heading}>
                            Ask questions
                        </h3>
                        
                        <p className={styles.text}>
                            If you can't find solution, you may ask other devs about your specific problem
                        </p>

                        <NavLink to='/ask-question'>Ask community</NavLink>
                    </div>

                    <div className={styles.screenshot}>
                        <img src={askQuestionScreenshot} alt="" />
                    </div>
                </div>
                
                <div className={styles.description}>                    
                    <div>
                        <span>
                            <img src={helpImage} alt="" />
                        </span>

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