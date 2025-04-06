
import { useState } from 'react';
import { products } from '@/data/products';
import ProductGrid from '@/components/ui/ProductGrid';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/ui/CountdownTimer';

const DealsPage = () => {
  const [activeTab, setActiveTab] = useState('flash');
  
  // Filter products with discount (on sale)
  const saleProducts = products.filter(product => product.discount && product.discount > 0);
  
  // Mock flash deal products (top 5 discounted products)
  const flashDeals = [...saleProducts]
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(0, 5);
  
  // Mock clearance products (next 8 discounted products)
  const clearanceProducts = [...saleProducts]
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(5, 13);
  
  // Mock bundle deals (random selection of 6 products)
  const bundleDeals = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <div className="volt-container py-8">
      <h1 className="heading-xl mb-2">Deals & Promotions</h1>
      <p className="text-gray-600 mb-6">Discover our latest offers and biggest savings</p>
      
      {/* Flash Deal Banner */}
      <div className="bg-gradient-to-r from-volt-blue/90 to-blue-700 text-white p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Flash Deal of the Day</h2>
            <p className="text-white/80 mb-4">Limited-time offers. Grab them before they're gone!</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-1">Ending in:</p>
            <CountdownTimer targetDate={new Date(Date.now() + 24 * 60 * 60 * 1000)} />
          </div>
        </div>
      </div>
      
      {/* Deal Tabs */}
      <div className="mb-6 border-b">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('flash')}
            className={`pb-2 px-1 font-medium ${
              activeTab === 'flash' 
                ? 'text-volt-blue border-b-2 border-volt-blue' 
                : 'text-gray-600'
            }`}
          >
            Flash Deals
          </button>
          <button
            onClick={() => setActiveTab('clearance')}
            className={`pb-2 px-1 font-medium ${
              activeTab === 'clearance' 
                ? 'text-volt-blue border-b-2 border-volt-blue' 
                : 'text-gray-600'
            }`}
          >
            Clearance
          </button>
          <button
            onClick={() => setActiveTab('bundles')}
            className={`pb-2 px-1 font-medium ${
              activeTab === 'bundles' 
                ? 'text-volt-blue border-b-2 border-volt-blue' 
                : 'text-gray-600'
            }`}
          >
            Bundle Offers
          </button>
        </div>
      </div>
      
      {/* Active Tab Content */}
      <div className="mb-12">
        {activeTab === 'flash' && (
          <>
            <ProductGrid products={flashDeals} />
            {flashDeals.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No flash deals available right now. Check back soon!</p>
              </div>
            )}
          </>
        )}
        
        {activeTab === 'clearance' && (
          <>
            <ProductGrid products={clearanceProducts} />
            {clearanceProducts.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No clearance items available right now. Check back soon!</p>
              </div>
            )}
          </>
        )}
        
        {activeTab === 'bundles' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {bundleDeals.slice(0, 2).map((product, index) => (
                <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{product.category.charAt(0).toUpperCase() + product.category.slice(1)} Bundle</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get a {product.name} with accessories at a special price
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-volt-blue">${(product.price * 0.85).toFixed(2)}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                      </div>
                      <Button variant="outline">View Bundle</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <ProductGrid products={bundleDeals.slice(2)} />
          </>
        )}
      </div>
      
      {/* Subscribe to Deals */}
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="heading-lg mb-3">Never Miss a Deal</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Subscribe to our newsletter to receive exclusive offers and be the first to know about new deals.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-2 border rounded-md"
          />
          <Button className="bg-volt-blue text-white hover:bg-blue-600">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
