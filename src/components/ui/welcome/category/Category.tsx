import React, { FC, useContext } from 'react';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import styles from './Category.module.scss';
import { ThemeContext } from './../../../../context/ThemeContext';

export interface CategoryProps {
  title: string;
  count: number;
  total: number;
}

const Category: FC<CategoryProps> = ({ title, count, total }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.category} ${styles[theme]} `}>
      <div className={styles.top}>
        {total > 0 ? (
          <GiReceiveMoney size={26} className={styles.success} />
        ) : (
          <GiPayMoney size={26} className={styles.danger} />
        )}
        <span>Total count {title}`s</span>
      </div>
      <div className={styles.bottom}>
        <span>{count}</span>
        {total > 0 ? (
          <MdArrowDropUp size={16} className={styles.success} />
        ) : (
          <MdArrowDropDown size={16} className={styles.danger} />
        )}

        <span className={`${total > 0 ? styles.success : styles.danger}`}>
          {total}%
        </span>
      </div>
    </div>
  );
};

export default Category;
