
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/ui/ProductGrid';
import { products } from '@/data/products';

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState('popular');
  
  const getSortedProducts = () => {
    switch (sortOption) {
      case 'price-low':
        return [...products].sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case 'price-high':
        return [...products].sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      case 'newest':
        return [...products].filter(p => p.new).concat([...products].filter(p => !p.new));
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      default: // popular
        return products;
    }
  };
  
  return (
    <div className="volt-container py-8">
      <h1 className="heading-xl mb-2">All Products</h1>
      <p className="text-gray-600 mb-6">Browse our selection of high-quality electronics</p>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters (desktop) */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg border shadow-sm sticky top-24">
            <h3 className="font-medium mb-4">Filter Products</h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Categories</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="smartphones" className="mr-2" />
                  <label htmlFor="smartphones" className="text-sm">Smartphones</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="laptops" className="mr-2" />
                  <label htmlFor="laptops" className="text-sm">Laptops</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="audio" className="mr-2" />
                  <label htmlFor="audio" className="text-sm">Audio</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="accessories" className="mr-2" />
                  <label htmlFor="accessories" className="text-sm">Accessories</label>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Price Range</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="price-1" className="mr-2" />
                  <label htmlFor="price-1" className="text-sm">Under $100</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="mr-2" />
                  <label htmlFor="price-2" className="text-sm">$100 - $500</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="mr-2" />
                  <label htmlFor="price-3" className="text-sm">$500 - $1000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="mr-2" />
                  <label htmlFor="price-4" className="text-sm">Over $1000</label>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Availability</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="in-stock" className="mr-2" />
                  <label htmlFor="in-stock" className="text-sm">In Stock</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="on-sale" className="mr-2" />
                  <label htmlFor="on-sale" className="text-sm">On Sale</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Button variant="outline" className="w-full">
              <Filter size={16} className="mr-2" />
              Filter Products
            </Button>
          </div>
          
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">{products.length} products</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Sort by:</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="text-sm border rounded-md p-1"
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Best Rating</option>
              </select>
            </div>
          </div>
          
          {/* Products Grid */}
          <ProductGrid products={getSortedProducts()} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
