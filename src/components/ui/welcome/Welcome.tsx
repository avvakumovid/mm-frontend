import styles from './Welcome.module.scss';
import { MdArrowDropUp } from 'react-icons/md';
import { useContext } from 'react';
import { ThemeContext } from './../../../context/ThemeContext';
import Category from './category/Category';
import { data } from './data';
const Welcome = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.welcome} text ${styles[theme]} `}>
      <div className={styles.top}>
        <span className={styles.breadcrumb}>Overview / Salary</span>
        <span className={styles.date}>Apr 01, 2022 - Apr 30, 2022</span>
      </div>
      <div className={styles.content}>
        <div>
          <div>
            <h1 className={styles.heading}>Welcome back, My King</h1>
            <span className={styles.subHeading}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              distinctio.
            </span>
          </div>
          <div>
            <span className={styles.totalHeading}>Total Salary</span>
            <div className={styles.total}>
              <span>$2,213.00</span>
              <MdArrowDropUp size={16} />
              <span>0.50%</span>
            </div>
          </div>
        </div>
        <div>
          {data.map(d => (
            <Category key={d.title} {...d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
