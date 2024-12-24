'use client';
import { PricesByLocation } from '@/interfaces/graphs.interfaces';
import { useEffect, useState } from 'react';
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

export const PricesByCity = ({ state }: { state?: string }) => {
  const [pricesByCity, setPricesByCity] = useState<PricesByLocation[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const url = state ? `/api/city?state=${state}` : `/api/city`;
        const response = await fetch(url);
        const data: PricesByLocation[] = await response.json();
        setPricesByCity(data);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchProperties();
  }, [state]);

  return (
    <div>
      <h1>Precios por Ciudad</h1>
      <ResponsiveContainer
        minWidth={'500px'}
        minHeight={'300px'}
        width="100%"
        height="100%"
      >
        <LineChart
          width={500}
          height={300}
          data={pricesByCity}
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
