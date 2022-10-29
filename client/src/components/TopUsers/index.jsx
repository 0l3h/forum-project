import React from 'react';
import styles from './TopUsers.module.sass';
import topUsersIcon from '../../images/popularity.png';

function TopUsers() {
  return (
    <div className={styles.topUsers}>
        <div>
            <img src={topUsersIcon} alt="top users icon" />
            <span className={styles.heading}>Top Users</span>
        </div>
        
        <ul className={styles.userList}>
            <li>
                <span>n1cknam3_1</span>
                <span>31 likes</span>
            </li>
            <li>
                <span>_some_other_name</span>
                <span>20 likes</span>
            </li>
            <li>
                <span>juliakp</span>
                <span>14 likes</span>
            </li>
            <li>
                <span>h3llo</span>
                <span>9 likes</span>
            </li>
        </ul>
    </div>
  )
};

export default TopUsers;