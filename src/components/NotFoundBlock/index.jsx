import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Not found
      </h1>
      <p className={styles.description}>
        Excuse me! This page is not found in the internet-shop
      </p>
    </div>
  );
};

export default NotFoundBlock;
