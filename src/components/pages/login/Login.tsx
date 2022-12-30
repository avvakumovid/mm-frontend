import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Login = () => {
  const [message, setMessage] = useState('');
  const { number } = useParams();
  useEffect(() => {
    if (number) {
      setMessage('This number is ' + number);
    } else {
      setMessage('No number was provide');
    }
  }, [number]);
  return (
    <div>
      <p>This is Login page</p>
      <p>{message}</p>
    </div>
  );
};

export default Login;
