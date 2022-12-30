import React, { FC, useContext } from 'react';
import { GiAbstract115 } from 'react-icons/gi';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import styles from './Category.module.scss';
import { ThemeContext } from './../../../../context/ThemeContext';

export interface CategoryProps {
  title: string;
  count: number;
  progress: number;
}

const Category: FC<CategoryProps> = ({ title, count, progress }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.category} ${styles[theme]} `}>
      <div className={styles.top}>
        <GiAbstract115 />
        <span>{title}</span>
      </div>
      <div className={styles.bottom}>
        <span>{count}</span>
        {progress > 0 ? (
          <MdArrowDropUp size={16} className={styles.success} />
        ) : (
          <MdArrowDropDown size={16} className={styles.danger} />
        )}

        <span className={`${progress > 0 ? styles.success : styles.danger}`}>
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default Category;
