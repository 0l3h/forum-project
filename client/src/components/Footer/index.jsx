import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.sass';
import twitterLogo from '../../images/twitter-logo.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import instagramLogo from '../../images/instagram-logo.png';

function Footer() {
    return <footer className={styles.footer}>
        <NavLink to="/credits" className={styles.credits}>Credits</NavLink>

        <section className={styles.media}>
            <NavLink to="/credits" className={styles.credits}>
                <img className={styles.mediaLogo} src={twitterLogo} alt="Twitter"/>
            </NavLink>

            <NavLink to="/credits" className={styles.credits}>
                <img className={styles.mediaLogo} src={linkedinLogo} alt="LinkedIn"/>
            </NavLink>
            
            <NavLink to="/credits" className={styles.credits}>
                <img className={styles.mediaLogo} src={instagramLogo} alt="Instagram"/>
            </NavLink>
        </section>

        <span>2022 Ⓒ All rights reserved</span>
    </footer>
}

export default Footer;