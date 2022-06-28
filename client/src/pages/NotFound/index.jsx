import React from 'react';
import Page from './../../pages/Page';
import styles from './NotFound.module.sass';
import errorCodeImage from './../../images/page-not-found.svg';

function NotFoundPage() {
  return (
    <Page>
      <main className={styles.content}>
        <span>Sorry, we couldn't find such page</span>
        <img className="img-404" src={errorCodeImage} alt="error code" />
      </main>
    </Page>
  )
}

export default NotFoundPage