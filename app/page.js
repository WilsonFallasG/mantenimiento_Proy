'use client'
import { useState, useEffect } from 'react';
import getDocument from './firebase/getAllData';
import '../app/globals.css';
const Page = () => {
  const [unidadData, setUnidadData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUnidad, setSelectedUnidad] = useState('');
  const [selectedPlaca, setSelectedPlaca] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const { result, error } = await getDocument('Unidad');
        if (error) {
          console.error(error);
        } else {
          setUnidadData(result);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleUnidadChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedUnidad(selectedValue);

    const unidad = unidadData.find((item) => item === selectedValue);
    setSelectedPlaca(unidad.placa);
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', fontSize: '20px' }}>Cargando...</div>;
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px' }}>Unidades registradas:</h1>
        {unidadData.length > 0 ? (
          <>
            <select
              value={selectedUnidad}
              onChange={handleUnidadChange}
              style={{ fontSize: '18px', marginTop: '10px', width: '300px' }}
            >
              <option value="">Seleccionar Unidad</option>
              {unidadData.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {selectedUnidad && (
              <p style={{ fontSize: '28px', marginTop: '10px' }}>
                {selectedPlaca}
              </p>
            )}
            {selectedUnidad && (
              <p style={{ fontSize: '18px', marginTop: '10px' }}>
                <a href={`/busqueda/${selectedUnidad}`}>Ver mantenimientos</a>
              </p>
            )}
          </>
        ) : (
          <p style={{ fontSize: '18px', marginTop: '10px' }}>No hay unidades registradas.</p>
        )}
      </div>
    </div>
  );
};

export default Page;

