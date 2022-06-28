import React from 'react';
import styles from './Footer.module.sass';
import twitterLogo from '../../images/twitter-logo.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import instagramLogo from '../../images/instagram-logo.png';

function Footer() {
    return <footer className="footer">
        <section className="follow-us">
            <span>Follow us</span>
            <img className="media-logo" src={twitterLogo} alt="Twitter logo" />
            <img className="media-logo" src={linkedinLogo} alt="LinkedIn logo" />
            <img className="media-logo" src={instagramLogo} alt="Instagram logo" />
        </section>
        <span>2022 Ⓒ All rights reserved</span>
    </footer>
}

export default Footer;