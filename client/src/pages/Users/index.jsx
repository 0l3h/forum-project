import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import defaultAvatar from '../../images/default-avatar.svg';
import styles from './Users.module.sass';
import PopularQuestions from '../../components/PopularQuestions';
import SubscribeSection from '../../components/SubscribeSection';

function Users() {
  return <>
    <Navbar/>

    <main className={styles.container}>
      <SideMenu/>
      
      <section className={styles.content}>

        <div className={styles.userlist}>
          <h1 className={styles.heading}>Users</h1>

          <ul>
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
        </div>          

        <div>
          <PopularQuestions/>

          <SubscribeSection/>
        </div>
      </section>
    </main>

    <Footer/>
  </>
}

export default Users;