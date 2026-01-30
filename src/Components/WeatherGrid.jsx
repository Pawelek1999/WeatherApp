export const WeatherGrid = ({ stations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
      {stations.map((station, index) => (
        <div key={index} className="weather-card-container">
          {/* Card content will be rendered by parent component */}
          {station}
        </div>
      ))}
    </div>
  );
};
