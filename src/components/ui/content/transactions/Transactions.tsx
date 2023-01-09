import { useTransactionsQuery } from '../../../../store/features/transactionsApi';
import Header from './Header/Header';
import Item from './Item/Item';
import styles from './Transactions.module.scss';
import { useAuth } from './../../../../hooks/useAuth';

const Transactions = () => {
  const { token } = useAuth();
  const { data = [], isLoading } = useTransactionsQuery({ token });
  //TODO: add skeleton
  if (isLoading) return <span>Loading</span>;

  return (
    <div className={styles.transactions}>
      <Header />
      <div className={styles.content}>
        {data.map(transaction => (
          <Item
            key={transaction.id}
            name={transaction.name}
            createdAt={transaction.createdAt}
            amount={transaction.amount}
            image={transaction.category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
