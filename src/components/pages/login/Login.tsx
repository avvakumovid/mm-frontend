import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { ThemeButton } from '../../ui';
import styles from './Login.module.scss';
import { ThemeContext } from './../../../context/ThemeContext';
import { useContext } from 'react';
import { useLazyLoginQuery } from '../../../store/features/userApi';
import { useAuth } from './../../../hooks/useAuth';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const { login } = useAuth();
  const onSubmit: SubmitHandler<LoginForm> = ({ email, password }) =>
    login({ username: email, password });

  return (
    <div className={`${styles.login} text `}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles[theme]}>
        <div className={styles.error}>
          {errors.email && <span>{errors.email?.message}</span>}
        </div>
        <input
          type='email'
          {...register('email', { required: 'Email is required' })}
        />

        <div className={styles.error}>
          {errors.password && <span>{errors.password?.message}</span>}
        </div>
        <input
          type='password'
          {...register('password', { required: 'Password is required' })}
        />

        <input className={`${styles.submit} text`} type='submit' />
      </form>
      <div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Login;
