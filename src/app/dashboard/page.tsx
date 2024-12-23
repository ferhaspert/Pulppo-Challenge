'use client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
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

const Dashboard = () => {
  const [pricesByState, setPricesByState] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/state');
        const data = await response.json();
        setPricesByState(data);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <section className="my-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Gráficos</h2>
          {pricesByState.length ? (
            <PricesByStateGraph data={pricesByState} />
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

const PricesByStateGraph = ({ data }: { data: any }) => {
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

export default Dashboard;
