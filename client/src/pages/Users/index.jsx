import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './../../images/default-avatar.svg';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu';
import styles from './Users.module.sass';
import TopUsers from '../../components/TopUsers';
import PopularQuestions from '../../components/PopularQuestions';
import SubscribeSection from '../../components/SubscribeSection';
import { getUsersRequest } from '../../slices/users.slice';

function Users() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [])

  if(users?.usersData?.isFetching) {
    return <LoadingSpinner/>
  } 
  else {
    return <>
      <Navbar/>

      <main className={styles.container}>
        <SideMenu/>
        
        <section className={styles.content}>

          <div className={styles.userlist}>
            <h1 className={styles.heading}>Users</h1>

            <ul>
              {
                users?.usersData?.length?
                users.usersData.map(user => (
                  <li className={styles.user} key={user.id}>
                    <div className={styles.userAvatar}>
                      <img src={user.profilePictureUrl || defaultAvatar} alt="user avatar"/>
                    </div>
                    
                    <NavLink to='/404'>
                      <span>{user.username}</span>
                    </NavLink>
                  </li>
                ))
                :
                <p>No users are present</p>
              }
            </ul>
          </div>          

          <div>
            <PopularQuestions/>
            <TopUsers/>
            <SubscribeSection/>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  }
}

export default Users;