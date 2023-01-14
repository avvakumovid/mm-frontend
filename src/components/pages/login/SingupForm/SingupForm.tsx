import React, { useContext } from 'react';
import styles from './SingupForm.module.scss';
import { useAuth } from '../../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { ThemeContext } from '../../../../context/ThemeContext';
interface SingupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Form = () => {
  const { singup, isError } = useAuth();
  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingupForm>();
  const onSubmit: SubmitHandler<SingupForm> = data => singup(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form} ${styles[theme]}`}
    >
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        className={styles.input}
        type='text'
        {...register('firstName', { required: 'First name is required' })}
      />
      <div className={styles.error}>
        {errors.firstName && <span>{errors.firstName?.message}</span>}
      </div>
      <label htmlFor='lastName'>Last Name</label>
      <input
        id='lastName'
        className={styles.input}
        type='text'
        {...register('lastName', { required: 'Last Name is required' })}
      />
      <div className={styles.error}>
        {errors.lastName && <span>{errors.lastName?.message}</span>}
      </div>
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
        {isError && <span>This email already exist</span>}
      </div>
      <input value='singup' className={`${styles.submit} text`} type='submit' />
    </form>
  );
};

export default Form;
