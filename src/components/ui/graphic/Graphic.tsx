import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useTransactionsByDateQuery } from '../../../store/features/transactionsApi';
import {
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  YAxis,
} from 'recharts';
import { ITransactionsByDate } from '../../../types';

interface GraphicProps {
  data: ITransactionsByDate[];
}

const Graphic = ({ data }: GraphicProps) => {
  const [height, setWindowHeight] = useState(window.innerHeight * 0.4);
  const [width, setWindowWidth] = useState(window.innerWidth * 0.45);

  const detectSize = () => {
    setWindowHeight(window.innerHeight * 0.4);
    setWindowWidth(window.innerWidth * 0.4);
  };
  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [height, width]);
  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      style={{
        alignSelf: 'self-start',
      }}
      margin={{ top: 10, right: 50, bottom: 0 }}
    >
      <defs>
        <linearGradient id='incomeColor' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#2B8A3E' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#2B8A3E' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='expenseColor' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#C92A2A' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#C92A2A' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='createdAt' />
      <YAxis />
      <CartesianGrid color='#339AF0' strokeDasharray='8' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='expense'
        stroke='#C92A2A'
        fillOpacity={0.3}
        fill='url(#expenseColor)'
      />
      <Area
        type='monotone'
        dataKey='income'
        stroke='#2B8A3E'
        stackId='1'
        fillOpacity={0.3}
        fill='url(#incomeColor)'
      />
    </AreaChart>
  );
};

export default Graphic;
