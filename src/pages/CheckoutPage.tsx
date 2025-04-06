
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit-card'
  });
  
  // Calculate totals
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.085; // 8.5% tax rate
  const total = subtotal + shipping + tax;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      clearCart();
    }, 1500);
  };
  
  // Order confirmation screen
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="volt-container py-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h1 className="heading-lg mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We've received your payment and will process your items shortly.
              A confirmation email has been sent to {formData.email}.
            </p>
            <p className="text-gray-600 mb-8">
              Order reference: <span className="font-medium">VM-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate('/')} variant="outline">
                Continue Shopping
              </Button>
              <Button onClick={() => navigate('/account/orders')} className="bg-volt-blue text-white hover:bg-blue-600">
                Track Your Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="volt-container py-8">
        <div className="mb-6">
          <Link to="/cart" className="text-volt-blue hover:underline flex items-center">
            <ChevronLeft size={16} className="mr-1" />
            Back to Cart
          </Link>
        </div>
        
        <h1 className="heading-lg mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="font-semibold text-lg mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="font-semibold text-lg mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">State/Province *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">ZIP/Postal Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>Credit Card</span>
                  </label>
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>PayPal</span>
                  </label>
                  <label className="flex items-center p-3 border rounded cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={formData.paymentMethod === 'bank-transfer'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>Bank Transfer</span>
                  </label>
                </div>
                
                {formData.paymentMethod === 'credit-card' && (
                  <div className="mt-4 p-4 border border-gray-200 rounded">
                    <p className="text-sm text-gray-500 mb-4">
                      This is a demo application. No actual payment will be processed.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="**** **** **** ****"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full p-2 border border-gray-300 rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">CVC</label>
                          <input
                            type="text"
                            placeholder="***"
                            className="w-full p-2 border border-gray-300 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={cartItems.length === 0 || isSubmitting}
                className="w-full bg-volt-blue text-white hover:bg-blue-600 py-3"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              
              <div className="max-h-80 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex py-3 border-b">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium line-clamp-2">{item.product.name}</p>
                      <div className="flex justify-between mt-1">
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium">
                          ${((item.product.salePrice || item.product.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
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
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                <p>By placing your order, you agree to VoltMart's terms and conditions and privacy policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
