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
            <NavLink to='/404' className={styles.user}>
                <div className={styles.userAvatar}>
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user avatar"/>
                </div>
                <span>Elizabeth</span>
            </NavLink>
            <NavLink to='/404' className={styles.user}>
                <div className={styles.userAvatar}>
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user avatar"/>
                </div>
                <span>Elizabeth</span>
            </NavLink>
            <NavLink to='/404' className={styles.user}>
                <div className={styles.userAvatar}>
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user avatar"/>
                </div>
                <span>Elizabeth</span>
            </NavLink>
            <NavLink to='/404' className={styles.user}>
                <div className={styles.userAvatar}>
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user avatar"/>
                </div>
                <span>Elizabeth</span>
            </NavLink>
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