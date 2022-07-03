import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../images/default-avatar.svg'
import dropdownOpenIcon from '../../images/dropdown-open-icon.svg'
import dropdownCloseIcon from '../../images/dropdown-close-icon.svg'
import styles from './UserDropdown.module.sass'

function UserDropdown() {
    const userAvatar = undefined;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen);
    };
    
    return (
        <section className={styles.dropdown}>
            <button className={styles.dropdownButton} onClick={toggleMenu}>
                <img src={isOpen? dropdownCloseIcon : dropdownOpenIcon} className={styles.dropdownIcon} alt="menu icon"/>
            </button>
            <img src={userAvatar || defaultAvatar} className={styles.avatar} alt="user avatar"/>
            <span className={styles.username}>Edd</span>
        
            <section className={styles.menu} data-is-open={isOpen.toString()}>
                <NavLink to='/view-profile' className={styles.pageLink}>
                    {/* <img src={personImage} alt="person image"/> */}
                    <span>View profile</span>
                </NavLink>
                
                <NavLink to='/edit-profile' className={styles.pageLink}>
                    {/* <img src={editImage} alt="edit profile image"/> */}
                    <span>Edit profile</span>
                </NavLink>
                
                <NavLink to='/log-out' className={styles.pageLink}>
                    {/* <img src={logoutImage} alt="log out image"/> */}
                    <span>Log out</span>
                </NavLink>
            </section>
        </section>
    )
}

export default UserDropdown;