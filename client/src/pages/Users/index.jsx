import React from 'react';
import defaultAvatar from '../../images/default-avatar.svg';
import styles from './Users.module.sass';

function Users() {
  return (
    <section className={styles.content}>
        <h1 className={styles.heading}>Users</h1>
        
        <ul className={styles.userlist}>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Daniel</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Matthew</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Kevin</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Benjamin</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Ryan</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>John</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Tyler</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Raymond</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Dylan</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Gary</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Scott</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Caleb</span>
            </li>
            <li className={styles.user}>
                <img src={defaultAvatar} alt="user avatar"/>
                <span>Jacob</span>
            </li>
        </ul>
    </section>
  )
}

export default Users;