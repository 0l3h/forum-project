import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.sass';

function Footer() {
    return <footer className={styles.footer}>
        <p>Askme is a forum created by a single developer as a personal project</p>

        <div className={styles.links}>
            <ul>
                <h1>My socials</h1>

                <li>
                    <a href="https://www.linkedin.com/in/oleh-levchenko-351266208/" target="_blank">LinkedIn</a>
                </li>
            </ul>

            <ul>
                <h1>Resoures</h1>

                <li>
                    <NavLink to="/credits">Credits</NavLink>
                </li>
            </ul>
        </div>
    </footer>
}

export default Footer;