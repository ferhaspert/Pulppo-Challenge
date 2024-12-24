import { useEffect, useState } from 'react';

interface PropertyTypeSelectProps {
  onPropertyTypeChange: (type: string) => void;
  selectedPropertyType: string;
}

export const PropertyTypeSelect: React.FC<PropertyTypeSelectProps> = ({
  onPropertyTypeChange,
  selectedPropertyType,
}) => {
  const [propertyTypes, setPropertyTypes] = useState<{ type: string }[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const propertyTypesResponse = await fetch('/api/property/type');
        const propertyTypes = await propertyTypesResponse.json();
        setPropertyTypes(propertyTypes);
      } catch (error) {
        console.error('Error fetching property types:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="mr-8">
      <h2>Filtrar por tipo de propiedad:</h2>
      <select
        value={selectedPropertyType}
        onChange={(e) => onPropertyTypeChange(e.target.value)}
        className="mb-4"
      >
        <option value="">Seleccione un tipo de propiedad</option>
        {propertyTypes.map(({ type }) => (
          <option key={`${type}`} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
