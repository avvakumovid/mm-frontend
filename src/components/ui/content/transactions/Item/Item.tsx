import React, { FC, useContext } from 'react';
import styles from './Item.module.scss';
import { ThemeContext } from './../../../../../context/ThemeContext';

interface ItemProps {
  name: string;
  createdAt: string;
  amount: number;
  image: string;
}

const Item: FC<ItemProps> = ({ amount, image, createdAt, name }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.item} ${styles[theme]}`}>
      <div className={styles.left}>
        <img className={styles.logo} src={image} alt={name} />
        <div className={`${styles.text} text`}>
          <span>{name}</span>
          <span>{new Date(createdAt).toLocaleString()}</span>
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
