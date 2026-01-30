import { useWeather } from '../hooks/useWeather';
import { useEffect, useState } from 'react';

export const DebugData = () => {
  const { weatherData, loading } = useWeather();
  const [allKeys, setAllKeys] = useState([]);

  useEffect(() => {
    if (weatherData.length > 0) {
      const keys = Object.keys(weatherData[0]);
      setAllKeys(keys);
      console.log('=== API DEBUG ===');
      console.log('Liczba stacji:', weatherData.length);
      console.log('Dostępne klucze:', keys);
      console.log('Pierwsza stacja:', weatherData[0]);
      console.log('================');
    }
  }, [weatherData]);

  if (loading || weatherData.length === 0) return null;

  const firstStation = weatherData[0];
  
  return (
    <div style={{ background: '#fff3cd', padding: '20px', margin: '20px 0', borderRadius: '8px', borderLeft: '4px solid #ff6b6b' }}>
      <h3>🔍 DEBUG - Struktura API danych:</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
        <thead>
          <tr style={{ background: '#ffe0e0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Klucz</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Wartość</th>
          </tr>
        </thead>
        <tbody>
          {allKeys.map(key => (
            <tr key={key}>
              <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>{key}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {String(firstStation[key]).substring(0, 50)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: '15px', color: '#666' }}>
        <strong>Liczba stacji:</strong> {weatherData.length} | 
        <strong style={{ marginLeft: '20px' }}>Liczba pól:</strong> {allKeys.length}
      </p>
    </div>
  );
};
