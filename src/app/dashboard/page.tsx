'use client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { IProperty } from '@/models/property.model';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/property');
        const data: IProperty[] = await response.json();
        console.log(`setting data: ${JSON.stringify(data)}`);
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
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
          <p>cantidad de propiedades: {properties.length}</p>
          {properties.length > 0 ? (
            <ul>
              {properties.map((property, index) => (
                <li key={index}>
                  <p>{property.address?.state?.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div>Loading...</div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
