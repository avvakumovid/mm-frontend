import React, { FC, useContext } from 'react';
import styles from './Item.module.scss';
import { ThemeContext } from './../../../../../context/ThemeContext';

export interface ItemProps {
  name: string;
  date: string;
  amount: number;
  logo: string;
}

const Item: FC<ItemProps> = ({ name, date, amount, logo }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.item} ${styles[theme]}`}>
      <div className={styles.left}>
        <div className={styles.logo} />
        <div className={`${styles.text} text`}>
          <span>{name}</span>
          <span>{date}</span>
        </div>
      </div>
      <div
        className={`${styles.amount} ${
          amount > 0 ? styles.success : styles.danger
        }`}
      >
        <span>
          {amount > 0 ? '+' : '-'}$ {Math.abs(amount)}
        </span>
      </div>
    </div>
  );
};

export default Item;
