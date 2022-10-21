import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.sass';
import companyLogo from '../../images/askmeLogo.png';
import twitterLogo from '../../images/twitter-logo.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import instagramLogo from '../../images/instagram-logo.png';

function Footer() {
    return <footer className={styles.footer}>
        <div>
            {/* <img src={companyLogo} className={styles.askmeLogo} alt="Askme logo" /> */}

            <p>Askme is a forum created by one developer as a personal project</p>
        
            <section>
                <NavLink to="/credits">
                    <img className={styles.mediaLogo} src={twitterLogo} alt="Twitter"/>
                    {/* Twitter */}
                </NavLink>

                <NavLink to="/credits">
                    <img className={styles.mediaLogo} src={linkedinLogo} alt="LinkedIn"/>
                    {/* LinkedIn */}
                </NavLink>
                
                <NavLink to="/credits">
                    <img className={styles.mediaLogo} src={instagramLogo} alt="Instagram"/>
                    {/* Instagram */}
                </NavLink>
            </section>
        </div>


        <div className={styles.links}>
            <ul>
                <h1>Recources</h1>

                <li>
                    <NavLink to="/credits">Credits</NavLink>
                </li>
            </ul>

            <ul>
                <h1>Company</h1>
                
                <li>
                    <NavLink to="/404-page">About</NavLink>
                </li>
                
                <li>
                    <NavLink to="/404-page">Privacy Policy</NavLink>
                </li>
                
                <li>
                    <NavLink to="/404-page">Career</NavLink>
                </li>
            </ul>

            <ul>
                <h1>Product</h1>
                <li>
                    <NavLink to="/404-page">Askme Plus+</NavLink>
                </li>
                
                <li>
                    <NavLink to="/404-page">Privacy Policy</NavLink>
                </li>
                
                <li>
                    <NavLink to="/404-page">Career</NavLink>
                </li>
            </ul>
        </div>

        

    </footer>
}

export default Footer;