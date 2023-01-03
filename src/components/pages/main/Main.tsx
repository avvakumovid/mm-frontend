import React from 'react';
import { Content, Header, Welcome } from '../../ui';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Welcome />
      <Content />
    </div>
  );
};

export default Main;
