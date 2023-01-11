import styles from './Welcome.module.scss';
import { MdArrowDropUp } from 'react-icons/md';
import { useContext } from 'react';
import { ThemeContext } from './../../../context/ThemeContext';
import Category from './category/Category';
import { data } from './data';
import { useAuth } from './../../../hooks/useAuth';
import { useSumSpendsQuery } from '../../../store/features/transactionsApi';

const Welcome = () => {
  const { theme } = useContext(ThemeContext);
  const { token } = useAuth();
  const { data: spends = [] } = useSumSpendsQuery(token);
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
          <div className={styles.bottom}>
            {spends.map(spend => (
              <div>
                <span className={styles.totalHeading}>Total {spend.type}</span>
                <div className={styles.total}>
                  <span>{spend.total} $</span>
                  <MdArrowDropUp size={16} />
                  <span>{spend.count}</span>
                </div>
              </div>
            ))}
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
