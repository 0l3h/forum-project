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
                Lorem, ipsum dolor.
            </h1>
            
            <span className={styles.subheading}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit.
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officia.</p>
                </li>
                
                <li className={styles.featCard}>
                    <img src={questionImage} alt="ask image"/>
                    <span>Ask questions</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </li>
                
                <li className={styles.featCard}>
                    <img src={answerImage} alt="help image" />
                    <span>Help others</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>
            </ul>
        </header>
    )
}

export default Header;