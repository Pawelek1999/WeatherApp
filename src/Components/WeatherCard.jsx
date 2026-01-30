export const WeatherCard = ({ station }) => {
  if (!station) return null;

  const getWeatherIcon = (temperature) => {
    if (!temperature) return '❓';
    if (temperature < -10) return '🥶';
    if (temperature < 0) return '❄️';
    if (temperature < 10) return '🧊';
    if (temperature < 20) return '😊';
    if (temperature < 30) return '☀️';
    return '🔥';
  };

  // Handle API field names
  const temp = station.temperatura;
  const humidity = station.wilgotnosc_wzgledna;
  const pressure = station.cisnienie;
  const windSpeed = station.predkosc_wiatru;
  const precipitation = station.suma_opadu;
  const stationName = station.stacja || 'Brak nazwy';
  const time = station.godzina_pomiaru || 'Brak danych';

  return (
    <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold">{stationName}</h3>
          <p className="text-blue-100 text-sm">{time}:00</p>
        </div>
        <span className="text-4xl">{getWeatherIcon(temp)}</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-400 bg-opacity-30 rounded-lg p-3">
          <p className="text-blue-100 text-sm">Temperatura</p>
          <p className="text-2xl font-semibold">{temp !== null ? `${temp}°C` : 'N/A'}</p>
        </div>

        <div className="bg-blue-400 bg-opacity-30 rounded-lg p-3">
          <p className="text-blue-100 text-sm">Wilgotność</p>
          <p className="text-2xl font-semibold">{humidity !== null ? `${humidity}%` : 'N/A'}</p>
        </div>

        <div className="bg-blue-400 bg-opacity-30 rounded-lg p-3">
          <p className="text-blue-100 text-sm">Ciśnienie</p>
          <p className="text-2xl font-semibold">{pressure !== null ? `${pressure} hPa` : 'N/A'}</p>
        </div>

        <div className="bg-blue-400 bg-opacity-30 rounded-lg p-3">
          <p className="text-blue-100 text-sm">Wiatr</p>
          <p className="text-2xl font-semibold">{windSpeed !== null ? `${windSpeed} m/s` : 'N/A'}</p>
        </div>
      </div>

      {precipitation && (
        <div className="mt-4 bg-blue-400 bg-opacity-30 rounded-lg p-3">
          <p className="text-blue-100 text-sm">Opady</p>
          <p className="text-lg font-semibold">{precipitation} mm</p>
        </div>
      )}
    </div>
  );
};
