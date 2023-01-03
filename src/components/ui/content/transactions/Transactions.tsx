import React from 'react';
import Header from './Header/Header';
import Item, { ItemProps } from './Item/Item';
import styles from './Transactions.module.scss';

const data: ItemProps[] = [
  {
    amount: 251,
    name: 'PayPall',
    date: 'Thu 27 Oct',
    logo: '',
  },
  {
    amount: -312,
    name: 'Binance',
    date: 'Thu 27 Oct',
    logo: '',
  },
  {
    amount: 43,
    name: 'YouTube',
    date: 'Thu 27 Oct',
    logo: '',
  },
  {
    amount: 754,
    name: 'Google',
    date: 'Thu 27 Oct',
    logo: '',
  },
  {
    amount: 754,
    name: 'Google',
    date: 'Thu 27 Oct',
    logo: '',
  },
  {
    amount: 754,
    name: 'Google',
    date: 'Thu 27 Oct',
    logo: '',
  },
  {
    amount: 754,
    name: 'Goqwegle',
    date: 'Thu 27 Oct',
    logo: '',
  },
];

const Transactions = () => {
  return (
    <div className={styles.transactions}>
      <Header />
      <div className={styles.content}>
        {data.map(d => (
          <Item
            key={d.name}
            name={d.name}
            date={d.date}
            amount={d.amount}
            logo={d.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
