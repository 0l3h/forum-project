import React from 'react';
import MenuLink from '../MenuLink';
import styles from './SideMenu.module.sass';

function SideMenu() {
  return (
    <section className={styles.sideMenu}>
        <span className={styles.menuHeading}>Menu</span>

        <MenuLink title='All questions' route='/browse-questions'/>
        <MenuLink title='Users' route='/users'/>
    </section>
  )
}

export default SideMenu;