
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist`);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="product-card h-full flex flex-col">
        {/* Product Image and Badges */}
        <div className="relative pt-4 px-4">
          {product.discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{product.discount}%
            </span>
          )}
          
          {product.new && (
            <span className="absolute top-2 right-2 bg-volt-green text-volt-black text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
          
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-contain mb-4 transition-transform group-hover:scale-105"
          />
          
          {/* Wishlist Button */}
          <button 
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Heart 
              size={16} 
              className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-500"} 
            />
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="mb-1 flex items-center">
            <div className="flex items-center text-yellow-400 mr-1">
              <Star size={14} className="fill-current" />
            </div>
            <span className="text-sm text-gray-700">{product.rating} ({product.reviews})</span>
          </div>
          
          <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-volt-blue transition-colors">
            {product.name}
          </h3>
          
          <div className="mt-auto pt-2">
            <div className="flex items-center mb-2">
              {product.salePrice ? (
                <>
                  <span className="font-bold text-volt-black">${product.salePrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-bold text-volt-black">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="sm"
                variant="outline"
                className="p-0 w-8 h-8"
              >
                <ShoppingCart size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
