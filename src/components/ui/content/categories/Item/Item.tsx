import React, { useContext } from 'react';
import { ThemeContext } from '../../../../../context/ThemeContext';
import { GroupedTransaction } from '../../../../../types';
import styles from './Item.module.scss';

const Item = ({ count, image, name, total, type }: GroupedTransaction) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.item} ${styles[theme]}`}>
      <div className={styles.left}>
        <img className={styles.logo} src={image} alt={name} />
        <div className={`${styles.text} text`}>
          <span>{name}</span>
          <span>{type}</span>
        </div>
      </div>
      <div
        className={`${styles.amount} ${
          total > 0 ? styles.success : styles.danger
        }`}
      >
        <span>
          {total > 0 ? '+' : '-'}$ {Math.abs(total)}
        </span>
      </div>
    </div>
  );
};

export default Item;
