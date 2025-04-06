
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import MobileMenu from './MobileMenu';
import SearchBar from '../ui/SearchBar';

const Header = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to check if a path is active, supporting both exact matches and prefixes
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="volt-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-volt-blue mr-1">Volt</span>
              <span className="text-2xl font-bold text-volt-black">Mart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') ? 'text-volt-blue' : 'hover:text-volt-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${isActive('/products') ? 'text-volt-blue' : 'hover:text-volt-blue'}`}
            >
              Products
            </Link>
            <Link 
              to="/categories" 
              className={`font-medium transition-colors ${isActive('/categories') ? 'text-volt-blue' : 'hover:text-volt-blue'}`}
            >
              Categories
            </Link>
            <Link 
              to="/deals" 
              className={`font-medium transition-colors ${isActive('/deals') ? 'text-volt-blue' : 'hover:text-volt-blue'}`}
            >
              Deals
            </Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowSearch(!showSearch)} 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
            >
              <Search size={20} />
            </button>
            
            <Link 
              to="/wishlist" 
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 relative"
            >
              <Heart size={20} className={isActive('/wishlist') ? 'text-volt-blue' : ''} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-volt-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            <Link 
              to="/account" 
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
            >
              <User size={20} className={isActive('/account') ? 'text-volt-blue' : ''} />
            </Link>
            
            <Link 
              to="/cart" 
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 relative"
            >
              <ShoppingCart size={20} className={isActive('/cart') ? 'text-volt-blue' : ''} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-volt-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            
            <button 
              onClick={() => setShowMobileMenu(true)} 
              className="md:hidden flex items-center justify-center"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="pb-4 md:hidden">
            <SearchBar />
          </div>
        )}
      </div>

      {/* Category Navigation */}
      <div className="bg-volt-lightgray hidden md:block">
        <div className="volt-container">
          <div className="flex space-x-6 py-2 text-sm overflow-x-auto scrollbar-none">
            <Link 
              to="/category/smartphones" 
              className={`whitespace-nowrap ${currentPath === '/category/smartphones' ? 'text-volt-blue font-medium' : 'hover:text-volt-blue'}`}
            >
              Smartphones
            </Link>
            <Link 
              to="/category/laptops" 
              className={`whitespace-nowrap ${currentPath === '/category/laptops' ? 'text-volt-blue font-medium' : 'hover:text-volt-blue'}`}
            >
              Laptops
            </Link>
            <Link 
              to="/category/tvs" 
              className={`whitespace-nowrap ${currentPath === '/category/tvs' ? 'text-volt-blue font-medium' : 'hover:text-volt-blue'}`}
            >
              TVs & Displays
            </Link>
            <Link 
              to="/category/audio" 
              className={`whitespace-nowrap ${currentPath === '/category/audio' ? 'text-volt-blue font-medium' : 'hover:text-volt-blue'}`}
            >
              Audio
            </Link>
            <Link 
              to="/category/gaming" 
              className={`whitespace-nowrap ${currentPath === '/category/gaming' ? 'text-volt-blue font-medium' : 'hover:text-volt-blue'}`}
            >
              Gaming
            </Link>
            <Link 
              to="/category/wearables" 
              className={`whitespace-nowrap ${currentPath === '/category/wearables' ? 'text-volt-blue font-medium' : 'hover:text-volt-blue'}`}
            >
              Wearables
            </Link>
            <Link 
              to="/category/accessories" 
              className={`whitespace-nowrap ${currentPath === '/category/accessories' ? 'text-volt-blue font-medium' : 'hover:text-volt-blue'}`}
            >
              Accessories
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </header>
  );
};

export default Header;
