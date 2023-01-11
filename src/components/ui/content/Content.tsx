import React, { useContext, useState } from 'react';
import styles from './Content.module.scss';
import { ThemeContext } from './../../../context/ThemeContext';
import Transactions from './transactions/Transactions';
import { Header, Graphic } from './graphic';
import { useAuth } from './../../../hooks/useAuth';
import { useTransactionsByDateQuery } from '../../../store/features/transactionsApi';
import { period } from '../../../types';

const Content = () => {
  const { theme } = useContext(ThemeContext);
  const { token } = useAuth();
  const [period, setPeriod] = useState<period>('month');
  const { data = [], isLoading } = useTransactionsByDateQuery({
    token,
    period,
  });
  return (
    <div className={`${styles.content} ${styles[theme]}`}>
      <div className={styles.transactions}>
        <Transactions />
      </div>
      <div className={styles.chart}>
        <Header period={period} setPeriod={setPeriod} />
        <Graphic data={data} />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Content;
