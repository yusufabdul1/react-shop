
import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { categories } from '@/data/products';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg overflow-y-auto animate-slide-from-right">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button 
            onClick={onClose} 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4">
          <div className="mb-6">
            <h3 className="text-sm text-volt-gray mb-2 uppercase tracking-wider">Main Menu</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                  onClick={onClose}
                >
                  <span>Home</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                  onClick={onClose}
                >
                  <span>All Products</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link 
                  to="/deals" 
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                  onClick={onClose}
                >
                  <span>Deals & Offers</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm text-volt-gray mb-2 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`} 
                    className="flex items-center justify-between py-2 border-b border-gray-100"
                    onClick={onClose}
                  >
                    <span>{category.name}</span>
                    <ChevronRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm text-volt-gray mb-2 uppercase tracking-wider">Account</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/account" 
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                  onClick={onClose}
                >
                  <span>My Account</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link 
                  to="/wishlist" 
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                  onClick={onClose}
                >
                  <span>Wishlist</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link 
                  to="/cart" 
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                  onClick={onClose}
                >
                  <span>Cart</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
