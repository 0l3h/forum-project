import React from 'react';
import styles from './QuoteBox.module.sass';
import quoteLogo from '../../images/quote-box-logo.png';

function QuoteBox() {
  return (
    <div className={styles.quoteBox}>
        <img src={quoteLogo} className={styles.quoteLogo} alt="quote logo" />
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default QuoteBox;