import { ThemeButton } from '../../ui';
import styles from './Login.module.scss';
import { ThemeContext } from './../../../context/ThemeContext';
import { useContext, useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import SingupForm from './SingupForm/SingupForm';

const Login = () => {
  const [type, setType] = useState<'login' | 'sing up'>('login');
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.login} text `}>
      <div className={styles.heading}>
        <h1>{type}</h1>
        <ThemeButton />
      </div>
      <div className={`${styles.main}  ${styles[theme]}`}>
        {type === 'login' ? <LoginForm /> : <SingupForm />}
      </div>
      <span
        onClick={() => {
          setType(prev => (prev === 'login' ? 'sing up' : 'login'));
        }}
        className={styles.hint}
      >
        {type === 'login' ? 'sing up' : 'login'}
      </span>
    </div>
  );
};

export default Login;
