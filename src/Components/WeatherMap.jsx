import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getCoordinatesForStation } from '../data/stationCoordinates';

// Create custom icon
const createTemperatureIcon = (temperature) => {
  let color = '#3b82f6'; // blue default
  
  if (temperature < -10) color = '#0369a1'; // dark blue
  else if (temperature < 0) color = '#0ea5e9'; // light blue
  else if (temperature < 10) color = '#06b6d4'; // cyan
  else if (temperature < 20) color = '#10b981'; // green
  else if (temperature < 30) color = '#f59e0b'; // amber
  else color = '#ef4444'; // red

  return L.divIcon({
    html: `<div style="
      background-color: ${color};
      color: white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    ">${temperature}°</div>`,
    className: 'temperature-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

export const WeatherMap = ({ stations }) => {
  // Poland center coordinates
  const polandCenter = [52.0, 19.0];
  const zoom = 6;

  // Filter stations with valid coordinates
  const stationsWithCoords = stations
    .map(station => ({
      ...station,
      coords: getCoordinatesForStation(station.stacja)
    }))
    .filter(station => station.coords);

  if (stationsWithCoords.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <p className="text-gray-600">Brak danych lokalizacyjnych stacji</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer
          center={polandCenter}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {stationsWithCoords.map((station, index) => {
            const temp = station.temperatura;
            const stationName = station.stacja || 'Stacja';
            const humidity = station.wilgotnosc_wzgledna || 'N/A';
            const windSpeed = station.predkosc_wiatru || 'N/A';

            if (!temp || !station.coords) return null;

            return (
              <Marker
                key={index}
                position={[station.coords.lat, station.coords.lon]}
                icon={createTemperatureIcon(Math.round(temp))}
              >
                <Popup>
                  <div className="text-sm">
                    <p className="font-bold">{stationName}</p>
                    <p>Temperatura: <strong>{temp}°C</strong></p>
                    <p>Wilgotność: <strong>{humidity}%</strong></p>
                    <p>Wiatr: <strong>{windSpeed} m/s</strong></p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};
