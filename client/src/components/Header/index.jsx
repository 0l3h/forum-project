import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';
import forumPageImage from '../../images/technologies.svg';

function Header() {
    return (
        <header className={styles.header}>
           <div>
                <h1 className={styles.heading}>
                    Helping you to write better software.
                </h1>
                
                <span className={styles.subheading}>
                    A place to share knowledge related to software development.
                </span>

                <div className={styles.links}>
                    <NavLink className={styles.browseQuestionsButton} to='/browse-questions'>
                        Browse Questions
                    </NavLink>

                    <NavLink className={styles.joinButton} to='/sign-up'>
                        Join The Community
                    </NavLink>
                </div>
           </div>
            
            <img src={forumPageImage} alt="Forum page" className={styles.forumImage}/>
        </header>
    )
}

export default Header;