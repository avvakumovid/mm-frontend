import React, { useContext } from 'react';
import styles from './Content.module.scss';
import { ThemeContext } from './../../../context/ThemeContext';
import Transactions from './transactions/Transactions';
import Graphic from '../graphic/Graphic';

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.content} ${styles[theme]}`}>
      <div className={styles.transactions}>
        <Transactions />
      </div>
      <div className={styles.chart}>
        <Graphic />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Content;
