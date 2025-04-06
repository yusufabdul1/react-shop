
import { useSearchParams, Link } from 'react-router-dom';
import { searchProducts } from '@/data/products';
import ProductGrid from '@/components/ui/ProductGrid';
import { Button } from '@/components/ui/button';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const searchResults = searchProducts(query);
  
  return (
    <div className="volt-container py-8">
      <h1 className="heading-xl mb-2">Search Results</h1>
      <p className="text-gray-600 mb-6">
        {searchResults.length > 0 
          ? `Found ${searchResults.length} products for "${query}"`
          : `No products found for "${query}"`}
      </p>
      
      {searchResults.length > 0 ? (
        <ProductGrid products={searchResults} />
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="heading-lg mb-4">We don't have this product currently</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Try checking our categories for similar products or search with different keywords.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/categories">
              <Button variant="outline">Browse Categories</Button>
            </Link>
            <Link to="/">
              <Button className="bg-volt-blue text-white hover:bg-blue-600">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
