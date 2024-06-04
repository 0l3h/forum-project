import React from 'react';
import errorCodeImage from './../../images/page-not-found.svg';

function NotFoundPage() {
  return (
    <main>
      <span>Sorry, we couldn't find such page</span>
      <img className="img-404" src={errorCodeImage} alt="error code" />
    </main>
  )
}

export default NotFoundPage