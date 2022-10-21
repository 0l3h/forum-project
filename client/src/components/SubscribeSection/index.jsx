import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubscribeSection.module.sass';

function SubscribeSection() {
  return (
    <section className={styles.subscribeSection}>
        <h2 className={styles.heading}>Askme Plus+</h2>
        
        <p className={styles.text}>
            Unlock more with monthly subscription. Available for big bussinesses and small teams. Adapted for any budget.
        </p>
        
        <NavLink to='/pricing' className={styles.subscribeButton}>
            Subscribe  
        </NavLink>
    </section>
  )
}

export default SubscribeSection;