import { useState } from 'react';

export const SearchFilter = ({ data, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      onFilterChange(data);
    } else {
      const filtered = data.filter((station) =>
        station.stacja?.toLowerCase().includes(term.toLowerCase())
      );
      onFilterChange(filtered);
    }
  };

  return (
    <div className="mb-8 w-full max-w-7xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Szukaj stacji pomiarowej..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-6 py-3 bg-blue-50 border-2 border-blue-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400">
          🔍
        </span>
      </div>
    </div>
  );
};
