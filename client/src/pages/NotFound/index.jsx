import React from 'react';
import styles from './NotFound.module.sass';
import errorCodeImage from './../../images/page-not-found.svg';

function NotFoundPage() {
  return (
    <main className={styles.content}>
      <span>Sorry, we couldn't find such page</span>
      <img className="img-404" src={errorCodeImage} alt="error code" />
    </main>
  )
}

export default NotFoundPage