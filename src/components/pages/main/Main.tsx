import React from 'react';
import { Content, Welcome } from '../../ui';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div>
      <Welcome />
      <Content />
    </div>
  );
};

export default Main;
