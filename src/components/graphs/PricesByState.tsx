'use client';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const PricesByStateGraph = ({ data }: { data: any }) => {
  return (
    <div>
      <h1>Precios por Estado</h1>
      <ResponsiveContainer
        minWidth={'500px'}
        minHeight={'300px'}
        width="100%"
        height="100%"
      >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="max" stroke="#82ca9d" />
          <Line type="monotone" dataKey="avg" stroke="#ca8282" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
