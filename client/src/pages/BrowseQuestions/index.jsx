import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SubscribeSection from '../../components/SubscribeSection';
import PopularQuestions from '../../components/PopularQuestions';
import SideMenu from '../../components/SideMenu';
import TopUsers from '../../components/TopUsers';
import styles from './BrowseQuestions.module.sass';

function BrowseQuestions() {
  return <>
    <Navbar/>

    <main className={styles.container}>
      <SideMenu/>

      <div className={styles.content}>
        <Outlet/>

        <div>
          <NavLink className={styles.askButton} to='/ask-question'>
            Ask question
          </NavLink>

          <PopularQuestions/>

          <TopUsers/>

          <SubscribeSection/>
        </div>
      </div>
    </main>

    <Footer/>
  </>
}

export default BrowseQuestions