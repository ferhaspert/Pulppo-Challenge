'use client';
import { Footer } from '@/components/Footer';
import { PricesByCity } from '@/components/graphs/PricesByCity';
import { PricesByStateGraph } from '@/components/graphs/PricesByState';
import { Header } from '@/components/Header';
import { PricesByLocation } from '@/interfaces/graphs.interfaces';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [pricesByState, setPricesByState] = useState<PricesByLocation[]>([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/state');
        const data: PricesByLocation[] = await response.json();
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

          <PricesByStateGraph data={pricesByState} />
          <h2>Precios por ciudad</h2>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="mb-4"
          >
            <option value="">Seleccione un estado</option>
            {pricesByState.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          <PricesByCity state={selectedState} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
