import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { ThemeContext } from './../../../context/ThemeContext';
import ThemeButton from '../theme-button/ThemeButton';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <nav>
        <a className={styles.logo} href='/#'>
          <img src='' alt='' />
        </a>
        <ul className='text'>
          <li>
            <p>Main</p>
          </li>
          <li>
            <a href='/#'>Main</a>
          </li>
          <li>
            <a href='/#'>Login</a>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
