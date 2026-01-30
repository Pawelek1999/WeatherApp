export const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div className="bg-red-500 bg-opacity-90 rounded-lg shadow-lg p-8 text-white text-center max-w-md">
      <div className="text-5xl mb-4">⚠️</div>
      <h3 className="text-2xl font-bold mb-2">Błąd ładowania</h3>
      <p className="text-red-100 mb-6">{error}</p>
      <button
        onClick={onRetry}
        className="bg-white text-red-600 font-semibold py-2 px-6 rounded-lg hover:bg-red-50 transition-colors"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
};
