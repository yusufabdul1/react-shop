
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory, categories } from '@/data/products';
import ProductGrid from '@/components/ui/ProductGrid';
import { ChevronRight, X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { applyAllFilters } from '@/utils/filterUtils';
import { Badge } from '@/components/ui/badge';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const categoryInfo = categories.find(c => c.id === categoryName);
  
  const allProducts = getProductsByCategory(categoryName || '');
  
  // Filter states
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  
  // Find the maximum price in the category for the slider
  const maxPrice = Math.max(...allProducts.map(p => p.price), 2000);
  
  // Apply filters when any filter changes
  useEffect(() => {
    const newFilteredProducts = applyAllFilters(
      allProducts,
      selectedSubcategory,
      priceRange,
      selectedRating
    );
    setFilteredProducts(newFilteredProducts);
  }, [allProducts, selectedSubcategory, priceRange, selectedRating]);
  
  // Handle subcategory selection
  const handleSubcategoryClick = (subcat: string) => {
    setSelectedSubcategory(prev => prev === subcat ? null : subcat);
  };
  
  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };
  
  // Handle rating selection
  const handleRatingClick = (rating: number) => {
    setSelectedRating(prev => prev === rating ? null : rating);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedSubcategory(null);
    setPriceRange([0, maxPrice]);
    setSelectedRating(null);
  };
  
  // Generate stars for rating filter
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span 
        key={i} 
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };
  
  if (!categoryInfo) {
    return (
      <div className="volt-container py-12 text-center">
        <h1 className="heading-xl mb-4">Category Not Found</h1>
        <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }
  
  // Check if any filters are active
  const hasActiveFilters = selectedSubcategory !== null || selectedRating !== null || priceRange[0] > 0 || priceRange[1] < maxPrice;
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="volt-container">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-volt-blue">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">{categoryInfo.name}</span>
          </div>
        </div>
      </div>
      
      <div className="volt-container py-8">
        {/* Active filters display */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Filtered by:</span>
            
            {selectedSubcategory && (
              <Badge variant="outline" className="flex items-center gap-1">
                {selectedSubcategory}
                <button onClick={() => setSelectedSubcategory(null)} className="ml-1">
                  <X size={14} />
                </button>
              </Badge>
            )}
            
            {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
              <Badge variant="outline" className="flex items-center gap-1">
                ${priceRange[0]} - ${priceRange[1]}
                <button onClick={() => setPriceRange([0, maxPrice])} className="ml-1">
                  <X size={14} />
                </button>
              </Badge>
            )}
            
            {selectedRating && (
              <Badge variant="outline" className="flex items-center gap-1">
                {selectedRating}+ Stars
                <button onClick={() => setSelectedRating(null)} className="ml-1">
                  <X size={14} />
                </button>
              </Badge>
            )}
            
            <Button variant="ghost" size="sm" onClick={resetFilters} className="ml-2">
              Reset All
            </Button>
          </div>
        )}
      
        <div className="flex flex-col md:flex-row gap-6">
          {/* Category Info & Filters */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="heading-lg mb-4">{categoryInfo.name}</h1>
              <p className="text-gray-600 mb-4">
                Browse our selection of {categoryInfo.name.toLowerCase()} and find the perfect device for your needs.
              </p>
              
              {categoryInfo.subcategories.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Subcategories</h3>
                  <ul className="space-y-1">
                    {categoryInfo.subcategories.map((subcat) => (
                      <li key={subcat}>
                        <button 
                          onClick={() => handleSubcategoryClick(subcat)}
                          className={`text-left w-full py-1 px-2 rounded transition-colors ${
                            selectedSubcategory === subcat 
                              ? 'bg-volt-blue text-white' 
                              : 'text-volt-blue hover:bg-gray-100'
                          }`}
                        >
                          {subcat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-4">Filters</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Price Range</h4>
                  <div className="px-2">
                    <Slider 
                      defaultValue={[0, maxPrice]}
                      value={priceRange}
                      max={maxPrice}
                      step={10}
                      onValueChange={handlePriceChange}
                      className="mb-2"
                    />
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => handleRatingClick(rating)}
                        className={`flex items-center w-full p-2 rounded transition-colors ${
                          selectedRating === rating 
                            ? 'bg-gray-100' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex mr-2">{renderStars(rating)}</div>
                        <span className="text-sm">& Up</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Availability</h4>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>In Stock Only</span>
                  </label>
                </div>
                
                {hasActiveFilters && (
                  <Button 
                    variant="outline" 
                    onClick={resetFilters}
                    className="w-full mt-4"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="md:w-3/4">
            <ProductGrid 
              products={filteredProducts} 
              title={`${categoryInfo.name} (${filteredProducts.length})`} 
              emptyMessage={
                hasActiveFilters
                  ? "No products match your current filters. Try adjusting your selections."
                  : `No ${categoryInfo.name.toLowerCase()} found. Check back soon for new products!`
              }
            />
            
            {/* No results with reset button */}
            {filteredProducts.length === 0 && hasActiveFilters && (
              <div className="mt-4 text-center">
                <Button onClick={resetFilters}>Reset All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
