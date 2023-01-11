import React, { useContext, Dispatch, SetStateAction } from 'react';
import styles from './Header.module.scss';
import { period, periodArray } from '../../../../types/index';
import { ThemeContext } from '../../../../context/ThemeContext';

interface HeaderProps {
  period: period;
  setPeriod: Dispatch<SetStateAction<period>>;
}

const Header = ({ period, setPeriod }: HeaderProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.header}>
      {periodArray.map(p => (
        <span
          className={`text ${styles[theme]} ${
            period === p ? styles.active : ''
          }`}
          onClick={() => {
            setPeriod(p);
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Header;
