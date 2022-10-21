import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';
import forumPageImage from '../../images/forum-page.png';
import sentinelLogo from '../../images/companies/sentinel.png';
import omnisightLogo from '../../images/companies/omnisight.png';
import goldandstoneLogo from '../../images/companies/goldandstone.png';
import illumaLogo from '../../images/companies/illuma.png';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>
                Helping you to write better software.
            </h1>
            
            <span className={styles.subheading}>
                Tech forum made for developers.
            </span>

            <div className={styles.links}>
                <NavLink className={styles.browseQuestionsButton} to='/browse-questions'>
                    Browse Questions
                </NavLink>

                <NavLink className={styles.joinButton} to='/sign-up'>
                    Join The Community
                </NavLink>
            </div>
            
            <img src={forumPageImage} alt="Forum page" className={styles.forumImage}/>

            <div className={styles.sponsors}>
                <img src={sentinelLogo} alt="" />
                <img src={omnisightLogo} alt="" />
                <img src={goldandstoneLogo} alt="" />
                <img src={illumaLogo} alt="" />
            </div>
        </header>
    )
}

export default Header;