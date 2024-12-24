'use client';
import { Footer } from '@/components/Footer';
import { PricesByCity } from '@/components/graphs/PricesByCity';
import { PricesByStateGraph } from '@/components/graphs/PricesByState';
import { Header } from '@/components/Header';
import { PropertyTypeSelect } from '@/components/PropertyTypeSelect';
import { StateSelect } from '@/components/StateSelect';
import { PricesByLocation } from '@/interfaces/graphs.interfaces';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [pricesByState, setPricesByState] = useState<PricesByLocation[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        console.log(`selectedPropertyType: ${selectedPropertyType}`);
        const states = selectedPropertyType
          ? await fetch(`/api/state?propertyType=${selectedPropertyType}`)
          : await fetch('/api/state');
        const pricesByLocation: PricesByLocation[] = await states.json();
        setPricesByState(pricesByLocation);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchProperties();
  }, [selectedPropertyType]);

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <section className="my-8 p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <section className="filters mb-8">
            <PropertyTypeSelect
              onPropertyTypeChange={setSelectedPropertyType}
              selectedPropertyType={selectedPropertyType}
            />
            <StateSelect
              onStateChange={setSelectedState}
              selectedState={selectedState}
              states={pricesByState}
            />
          </section>
          <PricesByStateGraph data={pricesByState} />
          <PricesByCity
            state={selectedState}
            propertyType={selectedPropertyType}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
