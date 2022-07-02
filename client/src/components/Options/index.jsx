import React from 'react';
import styles from './Options.module.sass';

function Options() {
  return (
    <section className={styles.options}>
        <div className={styles.option1}>
            <span>Dolor sit amet</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        <div className={styles.option2}>
            <span>Nibh cras pulvinar</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur voluptate vel!</p>
        </div>
    </section>
  )
}

export default Options