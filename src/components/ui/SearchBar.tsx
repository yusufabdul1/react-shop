
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full">
      <div className="relative flex w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full rounded-l-md border border-gray-300 pl-4 pr-12 py-2 focus:border-volt-blue focus:ring-volt-blue focus:outline-none focus:ring-1"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center text-gray-500 hover:text-volt-blue"
        >
          <Search size={20} />
        </button>
        <button
          type="submit"
          className="bg-volt-blue text-white px-4 rounded-r-md hover:bg-blue-600 transition-colors hidden sm:flex items-center"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
