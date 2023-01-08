import styles from './Header.module.scss';
import ThemeButton from '../theme-button/ThemeButton';
import { useAuth } from '../../../hooks/useAuth';
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className={`${styles.header} backgroundContent`}>
      <nav>
        <a className={styles.logo} href='/#'>
          <img src='' alt='' />
        </a>
        <ul className='text'>
          <li>
            <span>
              {user?.firstName} {user?.lastName}
            </span>
          </li>
          <li>
            <a className={styles.logout} onClick={() => logout()}>
              LOG OUT
            </a>
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
