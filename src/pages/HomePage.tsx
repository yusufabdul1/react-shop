import { Link } from 'react-router-dom';
import Carousel from '@/components/ui/carousel';
import ProductGrid from '@/components/ui/ProductGrid';
import CategoryCard from '@/components/ui/CategoryCard';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { categories, getFeaturedProducts, getSaleProducts, getNewProducts } from '@/data/products';

const HomePage = () => {
  // End of sale date (24 hours from now for demo purposes)
  const saleEndDate = new Date();
  saleEndDate.setHours(saleEndDate.getHours() + 24);
  
  // Get different product groups for different sections
  const featuredProducts = getFeaturedProducts();
  const saleProducts = getSaleProducts();
  const newProducts = getNewProducts();
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner Carousel */}
      <section className="mb-10">
        <Carousel>
          {/* Slide 1 */}
          <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-blue-600 to-volt-blue">
            <div className="volt-container h-full flex flex-col md:flex-row items-center justify-between">
              <div className="text-white max-w-lg text-center md:text-left py-8">
                <h1 className="heading-xl mb-4">The Future of Tech is Here</h1>
                <p className="text-white/80 mb-6">Discover the latest and greatest in electronics with exclusive deals only at VoltMart.</p>
                <Link to="/products" className="btn-accent inline-block">
                  Shop Now
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/placeholder.svg" 
                  alt="Latest electronics" 
                  className="max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-volt-black to-gray-800">
            <div className="volt-container h-full flex flex-col md:flex-row items-center justify-between">
              <div className="text-white max-w-lg text-center md:text-left py-8">
                <h1 className="heading-xl mb-4">Premium Audio Collection</h1>
                <p className="text-white/80 mb-6">Immerse yourself in superior sound quality with our premium headphones and speakers.</p>
                <Link to="/category/audio" className="btn-accent inline-block">
                  Explore Audio
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/placeholder.svg" 
                  alt="Premium audio devices" 
                  className="max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Slide 3 */}
          <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-purple-600 to-blue-500">
            <div className="volt-container h-full flex flex-col md:flex-row items-center justify-between">
              <div className="text-white max-w-lg text-center md:text-left py-8">
                <h1 className="heading-xl mb-4">Gaming Revolution</h1>
                <p className="text-white/80 mb-6">Level up your gaming experience with the latest consoles, accessories, and games.</p>
                <Link to="/category/gaming" className="btn-accent inline-block">
                  Game On
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/placeholder.svg" 
                  alt="Gaming products" 
                  className="max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      
      {/* Featured Categories */}
      <section className="volt-container mb-12">
        <h2 className="heading-lg mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      {/* Flash Sale Section with Countdown Timer */}
      <section className="bg-gray-100 py-10 mb-12">
        <div className="volt-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <h2 className="heading-lg text-red-600 mr-4">Flash Sale</h2>
              <CountdownTimer targetDate={saleEndDate} />
            </div>
            <Link to="/deals" className="text-volt-blue hover:underline font-medium">
              View All Deals
            </Link>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {saleProducts.slice(0, 5).map((product) => (
                <div key={product.id} className="w-full">
                  <div className="product-card h-full">
                    <div className="relative p-4">
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-40 object-contain mb-4"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <span className="font-bold text-red-600">${product.salePrice?.toFixed(2)}</span>
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                      </div>
                      <Link to={`/product/${product.id}`} className="btn-primary w-full text-center block">
                        View Deal
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="volt-container mb-12">
        <ProductGrid 
          products={featuredProducts} 
          title="Featured Products" 
        />
      </section>
      
      {/* New Arrivals */}
      <section className="volt-container mb-12">
        <ProductGrid 
          products={newProducts} 
          title="New Arrivals" 
        />
      </section>
      
      {/* Promotion Banners */}
      <section className="volt-container mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
            <img 
              src="/placeholder.svg" 
              alt="Smartphone Promotion" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center">
              <h3 className="heading-md text-white mb-2">Premium Smartphones</h3>
              <p className="text-white/80 mb-4 max-w-xs">Upgrade your mobile experience with the latest flagship devices.</p>
              <Link to="/category/smartphones" className="btn-outline bg-white/10 text-white border-white hover:bg-white/20 hover:text-white inline-block self-start">
                Explore Smartphones
              </Link>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-volt-black/70 to-transparent z-10"></div>
            <img 
              src="/placeholder.svg" 
              alt="Laptop Promotion" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center">
              <h3 className="heading-md text-white mb-2">Powerful Laptops</h3>
              <p className="text-white/80 mb-4 max-w-xs">Find the perfect laptop for work, gaming, or creative projects.</p>
              <Link to="/category/laptops" className="btn-outline bg-white/10 text-white border-white hover:bg-white/20 hover:text-white inline-block self-start">
                Shop Laptops
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services/Benefits */}
      <section className="bg-gray-100 py-10 mb-12">
        <div className="volt-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-volt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On all orders over $50</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-volt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Get help when you need it</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-volt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Secure Checkout</h3>
              <p className="text-sm text-gray-600">100% secure payment</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-volt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="volt-container mb-12">
        <div className="bg-volt-blue rounded-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="heading-md text-white mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-white/80 max-w-md">Get the latest news, updates, and special offers delivered directly to your inbox.</p>
            </div>
            <form className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-md w-full sm:w-64"
                />
                <button 
                  type="submit" 
                  className="btn-accent whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
