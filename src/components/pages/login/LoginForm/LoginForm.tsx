import React, { useContext } from 'react';
import styles from './LoginForm.module.scss';
import { useAuth } from '../../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { ThemeContext } from '../../../../context/ThemeContext';
interface LoginForm {
  email: string;
  password: string;
}

const Form = () => {
  const { login, isError } = useAuth();
  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = ({ email, password }) =>
    login({ username: email, password });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles[theme]}`}
    >
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        className={styles.input}
        type='email'
        {...register('email', { required: 'Email is required' })}
      />
      <div className={styles.error}>
        {errors.email && <span>{errors.email?.message}</span>}
      </div>

      <label htmlFor='password'>Password</label>
      <input
        id='password'
        className={styles.input}
        type='password'
        {...register('password', { required: 'Password is required' })}
      />
      <div className={styles.error}>
        {errors.password && <span>{errors.password?.message}</span>}
      </div>
      <div className={styles.error}>
        {isError && <span>Invalided credentials</span>}
      </div>
      <input className={`${styles.submit} text`} type='submit' />
    </form>
  );
};

export default Form;
