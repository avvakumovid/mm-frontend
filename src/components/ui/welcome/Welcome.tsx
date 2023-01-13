import styles from './Welcome.module.scss';
import { useContext } from 'react';
import { ThemeContext } from './../../../context/ThemeContext';
import Category from './category/Category';
import { useAuth } from './../../../hooks/useAuth';
import { useSumSpendsQuery } from '../../../store/features/transactionsApi';

const Welcome = () => {
  const { theme } = useContext(ThemeContext);
  const { token, user } = useAuth();
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
            <h1 className={styles.heading}>Welcome back, {user?.firstName}</h1>
            <span className={styles.subHeading}>
              He is a good man whom fortune makes better.
            </span>
          </div>
          <div className={styles.bottom}>
            <div>
              <span className={styles.totalHeading}>Total account</span>
              <div className={styles.total}>
                <span>
                  {spends.reduce((acc, n) => (acc += n.total), 0).toFixed(2)} $
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          {spends.map(spend => (
            <Category
              key={spend.type}
              count={spend.count}
              title={spend.type}
              total={spend.total}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
