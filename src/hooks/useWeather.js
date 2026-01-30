import { useState, useEffect } from 'react';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://danepubliczne.imgw.pl/api/data/synop'
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        console.error('Weather fetch error:', err);
        setError(err.message || 'Failed to fetch weather data');
        setWeatherData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // Refresh data every 10 minutes
    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);
  }, []);

  return { weatherData, loading, error };
};
