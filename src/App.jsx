import { useState, useEffect } from 'react';
import { useWeather } from './hooks/useWeather';
import { Header } from './Components/Header';
import { SearchFilter } from './Components/SearchFilter';
import { WeatherCard } from './Components/WeatherCard';
import { WeatherMap } from './Components/WeatherMap';
import { LoadingSpinner } from './Components/LoadingSpinner';
import { ErrorDisplay } from './Components/ErrorDisplay';

function App() {
  const { weatherData, loading, error } = useWeather();
  const [filteredData, setFilteredData] = useState([]);

  // Update filtered data when weather data changes
  useEffect(() => {
    setFilteredData(weatherData);
  }, [weatherData]);

  const handleFilterChange = (filtered) => {
    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-blue-100">
      <Header stationCount={weatherData.length} />

      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="flex justify-center items-center min-h-96">
              <LoadingSpinner />
            </div>
          )}

          {error && !loading && (
            <div className="flex justify-center items-center min-h-96">
              <ErrorDisplay
                error={error}
                onRetry={() => window.location.reload()}
              />
            </div>
          )}

          {!loading && !error && weatherData.length > 0 && (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">🗺️ Mapa pogody</h2>
                <WeatherMap stations={weatherData} />
              </div>

              <SearchFilter
                data={weatherData}
                onFilterChange={handleFilterChange}
              />

              {filteredData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredData.map((station, index) => (
                    <WeatherCard key={index} station={station} />
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center min-h-96">
                  <p className="text-xl text-gray-600">
                    Nie znaleziono stacji spełniającej kryteria wyszukiwania.
                  </p>
                </div>
              )}
            </>
          )}

          {!loading && !error && weatherData.length === 0 && (
            <div className="flex justify-center items-center min-h-96">
              <p className="text-xl text-gray-600">
                Brak danych pogodowych do wyświetlenia.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;