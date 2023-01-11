import styles from './Header.module.scss';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

const Header = () => {
  return (
    <div className={`${styles.header} text`}>
      <div className={styles.heading}>
        <span>All transactions</span>
        <span>Recent expenses</span>
      </div>
      <div className={styles.arrows}>
        <RiArrowLeftSLine />
        <RiArrowRightSLine />
      </div>
    </div>
  );
};

export default Header;