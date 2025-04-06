
import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { searchProducts, Product } from '@/data/products';

const SearchBarWithSuggestions = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle clicks outside the suggestions box
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const results = searchProducts(query).slice(0, 5); // Limit to 5 suggestions
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  const handleInputFocus = () => {
    if (query.trim().length >= 2) {
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (productId: number) => {
    setShowSuggestions(false);
    navigate(`/product/${productId}`);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearch} className="flex w-full">
        <div className="relative flex w-full">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.trim().length >= 2) {
                setShowSuggestions(true);
              } else {
                setShowSuggestions(false);
              }
            }}
            onFocus={handleInputFocus}
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

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((product) => (
                <li 
                  key={product.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0"
                  onClick={() => handleSuggestionClick(product.id)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-3">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            query.trim().length >= 2 && (
              <div className="p-3 text-center text-gray-500">
                No matching products for '{query}'
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBarWithSuggestions;
