import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { ThemeContext } from './../../../context/ThemeContext';

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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
