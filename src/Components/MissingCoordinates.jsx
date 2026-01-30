// Helper to extract stations from API and show which ones are missing coordinates
import { useWeather } from '../hooks/useWeather';
import { stationCoordinates } from '../data/stationCoordinates';

export const MissingCoordinates = () => {
  const { weatherData } = useWeather();

  if (weatherData.length === 0) return null;

  const uniqueStations = [...new Set(weatherData.map(s => s.stacja))].sort();
  const missingStations = uniqueStations.filter(station => !stationCoordinates[station]);

  if (missingStations.length === 0) {
    return (
      <div style={{ background: '#d4edda', padding: '15px', margin: '15px 0', borderRadius: '5px', color: '#155724' }}>
        ✅ Wszystkie stacje ({uniqueStations.length}) mają mapowanie koordynat!
      </div>
    );
  }

  return (
    <div style={{ background: '#f8d7da', padding: '15px', margin: '15px 0', borderRadius: '5px' }}>
      <strong>⚠️ Brakujące mapowania ({missingStations.length}):</strong>
      <pre style={{ fontSize: '11px', maxHeight: '200px', overflow: 'auto' }}>
        {missingStations.map(s => `'${s}': { lat: 0, lon: 0 },`).join('\n')}
      </pre>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Skopiuj to do stationCoordinates.js i dodaj współrzędne
      </p>
    </div>
  );
};
