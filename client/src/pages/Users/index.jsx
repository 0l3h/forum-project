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
                    <img src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg&_gl=1*1m0yxti*_ga*MTMzNTE4NzUzLjE2NjE0MjMwNDg.*_ga_8JE65Q40S6*MTY2Njk2NzExMC45LjEuMTY2Njk2NzU1MS4wLjAuMA.." alt="user avatar"/>
                </div>
                <span>Jane</span>
            </NavLink>
            <NavLink to='/404' className={styles.user}>
                <div className={styles.userAvatar}>
                    <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg&_gl=1*17byi4k*_ga*MTMzNTE4NzUzLjE2NjE0MjMwNDg.*_ga_8JE65Q40S6*MTY2Njk2NzExMC45LjEuMTY2Njk2NzE0NS4wLjAuMA.." alt="user avatar"/>
                </div>
                <span>John</span>
            </NavLink>
            <NavLink to='/404' className={styles.user}>
                <div className={styles.userAvatar}>
                    <img src="https://images.pexels.com/photos/3214777/pexels-photo-3214777.jpeg?cs=srgb&dl=pexels-ralph-rabago-3214777.jpg&fm=jpg&_gl=1*1xpvi3n*_ga*MTMzNTE4NzUzLjE2NjE0MjMwNDg.*_ga_8JE65Q40S6*MTY2Njk2NzExMC45LjEuMTY2Njk2NzM3OC4wLjAuMA.." alt="user avatar"/>
                </div>
                <span>Caleb</span>
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