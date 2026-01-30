export const Header = ({ stationCount }) => {
  return (
    <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-8 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">🌤️ Pogoda w Polsce</h1>
        <p className="text-blue-100">
          Dane z IMGW-PIB • {stationCount} stacji pomiarowych
        </p>
      </div>
    </header>
  );
};
