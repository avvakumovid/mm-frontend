import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { ThemeButton } from '../../ui';
import styles from './Login.module.scss';
import { ThemeContext } from './../../../context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { useLoginUserMutation } from '../../../store/features/authApi';
import { useCookies } from 'react-cookie';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [loginUser, { data, isError, error }] = useLoginUserMutation();
  const [cookies, setCookie] = useCookies(['access-token']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = ({ email, password }) =>
    loginUser({ username: email, password });
  useEffect(() => {
    if (data?.token) {
      const date = new Date();
      date.setMonth(date.getMonth() + 1);
      setCookie('access-token', data.token, { expires: date });
    }

    if (isError) {
      setErrorMsg('Invalid email or password');
    }
  }, [data, isError, setCookie, error]);
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
        <div className={styles.error}>{isError && <span>{errorMsg}</span>}</div>
      </form>
      <div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Login;
