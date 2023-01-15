import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SubscribeSection from '../../components/SubscribeSection';
import PopularQuestions from '../../components/PopularQuestions';
import SideMenu from '../../components/SideMenu';
import TopUsers from '../../components/TopUsers';
import styles from './BrowseQuestions.module.sass';

function BrowseQuestions() {
  useEffect(() => {
    window.gtag('config', 'G-WJZPSFS6SG', {
      send_page_view: false,
    });

    window.gtag('event', 'page_view', {
      page_title: 'Questions page',
    })
  }, [])

  return <>
    <Navbar/>

    <main className={styles.container}>
      <SideMenu/>

      <div className={styles.content}>
        <Outlet/>

        <div>
          <PopularQuestions/>

          <TopUsers/>
        </div>
      </div>
    </main>

    <Footer/>
  </>
}

export default BrowseQuestions