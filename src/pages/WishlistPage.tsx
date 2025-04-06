
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/ui/ProductGrid';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

const WishlistPage = () => {
  const { wishlistItems, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddAllToCart = () => {
    wishlistItems.forEach(product => {
      addToCart(product);
    });
    toast.success("All items added to cart");
  };

  return (
    <div className="volt-container py-8">
      <h1 className="heading-xl mb-2">My Wishlist</h1>
      <p className="text-gray-600 mb-6">Items you've saved for later</p>

      {wishlistItems.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">{wishlistItems.length} items in your wishlist</p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                onClick={clearWishlist}
              >
                Clear Wishlist
              </Button>
              <Button 
                onClick={handleAddAllToCart}
                className="bg-volt-blue text-white hover:bg-blue-600"
              >
                <ShoppingCart size={16} className="mr-2" />
                Add All to Cart
              </Button>
            </div>
          </div>

          <ProductGrid 
            products={wishlistItems} 
            emptyMessage="Your wishlist is empty. Let's find some products for you!" 
          />
        </>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="heading-lg mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Add items to your wishlist by clicking the heart icon on products you love.
          </p>
          <Link to="/products">
            <Button className="bg-volt-blue text-white hover:bg-blue-600">
              Start Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
