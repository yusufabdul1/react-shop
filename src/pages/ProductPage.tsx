
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Truck, ShieldCheck, RefreshCw, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGrid from '@/components/ui/ProductGrid';
import { products, getRelatedProducts } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { toast } from 'sonner';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  
  const product = products.find(p => p.id === productId);
  const relatedProducts = getRelatedProducts(productId);
  
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  
  useEffect(() => {
    // Reset state when product changes
    if (product) {
      setSelectedImage(product.images[0]);
      setQuantity(1);
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [product]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success(`${product.name} added to cart`);
    }
  };
  
  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist`);
    }
  };
  
  if (!product) {
    return (
      <div className="volt-container py-12 text-center">
        <h1 className="heading-xl mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn-primary">
          Browse Products
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
            <Link to="/products" className="text-gray-600 hover:text-volt-blue">
              Products
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <Link to={`/category/${product.category}`} className="text-gray-600 hover:text-volt-blue">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="volt-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="border rounded-lg p-6 bg-white">
              <img 
                src={selectedImage || product.image} 
                alt={product.name} 
                className="w-full h-80 object-contain"
              />
            </div>
            
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`border rounded-md p-2 min-w-[80px] h-20 flex-shrink-0 hover:border-volt-blue transition-colors ${
                    image === selectedImage ? 'border-volt-blue' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-2 flex items-center">
              <div className="flex items-center text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
            </div>
            
            <h1 className="heading-lg mb-4">{product.name}</h1>
            
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-red-600">${product.salePrice.toFixed(2)}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="ml-2 bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                    Save {product.discount}%
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="w-24 text-gray-700">Availability:</span>
                <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              {product.category && (
                <div className="flex items-center mb-4">
                  <span className="w-24 text-gray-700">Category:</span>
                  <Link 
                    to={`/category/${product.category}`}
                    className="text-volt-blue hover:underline"
                  >
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </Link>
                </div>
              )}
              
              {product.tags && product.tags.length > 0 && (
                <div className="flex items-center">
                  <span className="w-24 text-gray-700">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md w-32">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-volt-blue transition-colors"
                    disabled={!product.inStock}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center py-2 border-0 focus:ring-0"
                    disabled={!product.inStock}
                  />
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-volt-blue transition-colors"
                    disabled={!product.inStock}
                  >
                    +
                  </button>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="bg-volt-blue text-white hover:bg-blue-600 flex-1"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  onClick={handleWishlistToggle}
                  variant="outline"
                  className="px-4"
                >
                  <Heart 
                    size={18} 
                    className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""} 
                  />
                </Button>
              </div>
            </div>
            
            {/* Shipping and Returns */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Truck size={20} className="text-volt-blue mr-2" />
                  <span className="text-sm">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck size={20} className="text-volt-blue mr-2" />
                  <span className="text-sm">1 Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <RefreshCw size={20} className="text-volt-blue mr-2" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6 bg-white p-6 rounded-lg border">
              <div className="prose max-w-none">
                <p>{product.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis est lacinia, molestie justo id, vehicula enim. Nulla facilisi. Sed ac sagittis nisl, sit amet semper quam. Aenean interdum tincidunt tortor, non gravida urna auctor nec. Integer pulvinar orci eu dignissim posuere.</p>
                <ul>
                  <li>High quality materials</li>
                  <li>Designed for everyday use</li>
                  <li>Sustainable manufacturing</li>
                  <li>Rigorously tested for reliability</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6 bg-white p-6 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-100 py-2">
                    <span className="font-medium text-gray-700 w-32">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6 bg-white p-6 rounded-lg border">
              <div className="flex items-center mb-6">
                <div className="flex items-center text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{product.rating.toFixed(1)} out of 5</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600">Based on {product.reviews} reviews</p>
              </div>
              
              {/* Sample Reviews - In a real app, these would come from an API */}
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${i < 5 ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">John D.</span>
                    <span className="text-gray-500 text-sm ml-2">2 weeks ago</span>
                  </div>
                  <h4 className="font-medium mb-2">Excellent product!</h4>
                  <p className="text-gray-600">I'm extremely satisfied with this purchase. The quality is outstanding and it works exactly as described. Would definitely recommend!</p>
                </div>
                
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${i < 4 ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Sarah M.</span>
                    <span className="text-gray-500 text-sm ml-2">1 month ago</span>
                  </div>
                  <h4 className="font-medium mb-2">Great value for money</h4>
                  <p className="text-gray-600">This product offers great value for money. It has all the features I needed and the performance is solid. The only minor issue is the battery life could be a bit better.</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${i < 5 ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Michael T.</span>
                    <span className="text-gray-500 text-sm ml-2">2 months ago</span>
                  </div>
                  <h4 className="font-medium mb-2">Exceeded my expectations</h4>
                  <p className="text-gray-600">I wasn't expecting much given the price point, but this product completely exceeded my expectations. The build quality is premium, and the performance is top-notch. Very happy with my purchase!</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <ProductGrid 
              products={relatedProducts} 
              title="Related Products" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
