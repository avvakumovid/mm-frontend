import React, { useEffect, useState } from 'react';
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
var mydate = new Date();
const data = [
  { name: mydate.toDateString(), amount: 400 },
  { name: mydate.toDateString(), amount: 300 },
  { name: mydate.toDateString(), amount: 50 },
  { name: mydate.toDateString(), amount: 700 },
];

const Graphic = () => {
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
