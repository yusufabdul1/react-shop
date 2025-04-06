
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate additional costs
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.085; // 8.5% tax rate
  const total = subtotal + shipping + tax;
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/checkout');
    }, 800);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="volt-container py-8">
        <h1 className="heading-lg mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="font-semibold text-lg">Cart Items ({cartItems.length})</h2>
                </div>
                
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.product.id} className="p-6">
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex-shrink-0 mb-4 sm:mb-0">
                          <Link to={`/product/${item.product.id}`}>
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-20 h-20 object-contain"
                            />
                          </Link>
                        </div>
                        
                        <div className="sm:ml-6 flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div>
                              <h3 className="text-base font-medium mb-1">
                                <Link to={`/product/${item.product.id}`} className="hover:text-volt-blue">
                                  {item.product.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-500 mb-4">
                                {item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1)}
                              </p>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-base font-medium">
                                ${(item.product.salePrice || item.product.price).toFixed(2)}
                              </p>
                              {item.product.salePrice && (
                                <p className="text-sm text-gray-500 line-through">
                                  ${item.product.price.toFixed(2)}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-0 sm:items-center">
                            <div className="flex items-center border border-gray-300 rounded-md w-32">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="px-3 py-1 text-gray-600 hover:text-volt-blue transition-colors"
                              >
                                <ChevronLeft size={16} />
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                                className="w-full text-center py-1 border-0 focus:ring-0"
                              />
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:text-volt-blue transition-colors"
                              >
                                <ChevronRight size={16} />
                              </button>
                            </div>
                            
                            <div className="mt-4 sm:mt-0">
                              <button
                                onClick={() => {
                                  removeFromCart(item.product.id);
                                  toast.success(`${item.product.name} removed from cart`);
                                }}
                                className="text-red-600 hover:text-red-800 text-sm flex items-center"
                              >
                                <Trash size={16} className="mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="p-6 border-t flex justify-between items-center">
                  <Link to="/products" className="text-volt-blue hover:underline flex items-center">
                    <ChevronLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                  
                  <Button
                    onClick={() => {
                      clearCart();
                      toast.success('Cart cleared');
                    }}
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <span>${shipping.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8.5%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0 || isProcessing}
                  className="w-full bg-volt-blue text-white hover:bg-blue-600"
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                </Button>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  <p>Secure Checkout</p>
                  <p className="mt-1">We accept all major credit cards, PayPal, and more</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
