import styles from './Header.module.scss';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

interface HeaderProps {
  heading: string;
  subHeading: string;
}

const Header = ({ heading, subHeading }: HeaderProps) => {
  return (
    <div className={`${styles.header} text`}>
      <div className={styles.heading}>
        <span>{heading}</span>
        <span>{subHeading}</span>
      </div>
      <div className={styles.arrows}>
        <RiArrowLeftSLine />
        <RiArrowRightSLine />
      </div>
    </div>
  );
};

export default Header;
