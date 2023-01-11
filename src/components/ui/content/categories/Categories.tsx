import React from 'react';
import styles from './Categories.module.scss';
import { useAuth } from './../../../../hooks/useAuth';
import { useGroupedTransactionsQuery } from '../../../../store/features/transactionsApi';
import Item from './Item/Item';

const Categories = () => {
  const { token } = useAuth();
  const { data = [] } = useGroupedTransactionsQuery(token);
  return (
    <div className={styles.categories}>
      <h2 className='text'>Categories</h2>
      <div className={styles.content}>
        {data.map(item => (
          <Item key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
