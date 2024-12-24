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

function constructUrlParams(
  params?: Record<string, string | number | boolean | null | undefined>
): string {
  if (!params) {
    return ''; // Si no se proporcionan parámetros, devuelve una cadena vacía
  }

  const queryString = Object.entries(params)
    .filter(
      ([_, value]) => value !== undefined && value !== null && value !== ''
    ) // Excluye valores undefined, null o cadenas vacías
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join('&');

  return queryString ? `?${queryString}` : ''; // Agrega el "?" solo si hay parámetros
}

export const PricesByCity = ({
  state,
  propertyType,
}: {
  state?: string;
  propertyType?: string;
}) => {
  const [pricesByCity, setPricesByCity] = useState<PricesByLocation[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const url = `/api/city${constructUrlParams({ state, propertyType })}`;
        const response = await fetch(url);
        const data: PricesByLocation[] = await response.json();
        setPricesByCity(data);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchProperties();
  }, [state, propertyType]);

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
