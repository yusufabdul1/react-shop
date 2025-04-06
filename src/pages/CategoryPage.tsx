
import { useParams, Link } from 'react-router-dom';
import { getProductsByCategory, categories } from '@/data/products';
import ProductGrid from '@/components/ui/ProductGrid';
import { ChevronRight } from 'lucide-react';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const products = getProductsByCategory(categoryName || '');
  const categoryInfo = categories.find(c => c.id === categoryName);
  
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
        <div className="flex flex-col md:flex-row gap-6">
          {/* Category Info */}
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
                        <Link 
                          to={`/category/${categoryName}/${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-volt-blue hover:underline"
                        >
                          {subcat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Filters - Simple placeholder for now */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="2000" 
                      className="w-full"
                      defaultValue="2000"
                    />
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>$0</span>
                    <span>$2000+</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Availability</h4>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>In Stock Only</span>
                  </label>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Rating</h4>
                  <div className="space-y-1">
                    {[4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span>{rating}+ Stars</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="md:w-3/4">
            <ProductGrid 
              products={products} 
              title={`${categoryInfo.name} (${products.length})`} 
              emptyMessage={`No ${categoryInfo.name.toLowerCase()} found. Check back soon for new products!`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
