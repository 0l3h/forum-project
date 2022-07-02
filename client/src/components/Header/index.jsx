import React from 'react';
import styles from './Header.module.sass';
import searchingImage from './../../images/searching-illustration.svg';
import questionImage from './../../images/question-illustration.svg';
import answerImage from './../../images/answer-illustration.svg';

function Header() {
    const codeText = String.raw`
    function foo() {
        console.log("Ask");
    };

    function bar() {
        console.log("me");
    };
    
    foo();
    bar();
    `;

    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>
                Here to help you.
            </h1>
            
            <span className={styles.subheading}>
                Tech forum made for developers.
            </span>
            
            <section className={styles.codeSection}>
                <code>
                    <pre>{codeText}</pre>
                </code>
            </section>

            <ul className={styles.features}>
                <li className={styles.featCard}>
                    <img src={searchingImage} alt="answers image" />
                    <span>Find answers</span>
                    <p>Stuck with the problem? Chances are someone already asked for help</p>
                </li>
                
                <li className={styles.featCard}>
                    <img src={questionImage} alt="ask image"/>
                    <span>Ask questions</span>
                    <p>If you can't find solution, you may ask other devs about your specific problem</p>
                </li>
                
                <li className={styles.featCard}>
                    <img src={answerImage} alt="help image" />
                    <span>Help others</span>
                    <p>Know solution to the problem? Help by providing the answer</p>
                </li>
            </ul>
        </header>
    )
}

export default Header;