import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  YAxis,
} from 'recharts';
const data = [
  { name: Date.now(), amount: 400 },
  { name: Date.now(), amount: 300 },
  { name: Date.now(), amount: 50 },
  { name: Date.now(), amount: 700 },
];

const Graphic = () => {
  return (
    <AreaChart
      width={730}
      height={350}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#339AF0' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#339AF0' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid color='#339AF0' strokeDasharray='8' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='amount'
        stroke='#339AF0'
        fillOpacity={1}
        fill='url(#colorUv)'
      />
      <Area
        type='monotone'
        dataKey='pv'
        stroke='#82ca9d'
        fillOpacity={1}
        fill='url(#colorPv)'
      />
    </AreaChart>
  );
};

export default Graphic;
