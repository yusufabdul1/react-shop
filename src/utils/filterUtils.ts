
import { Product } from '@/data/products';

// Filter products by subcategory
export const filterBySubcategory = (products: Product[], subcategory: string | null): Product[] => {
  if (!subcategory) return products;
  return products.filter(product => 
    product.subcategory.toLowerCase() === subcategory.toLowerCase()
  );
};

// Filter products by price range
export const filterByPriceRange = (products: Product[], minPrice: number, maxPrice: number): Product[] => {
  return products.filter(product => {
    // Use sale price if available, otherwise use regular price
    const productPrice = product.salePrice || product.price;
    return productPrice >= minPrice && productPrice <= maxPrice;
  });
};

// Filter products by minimum rating
export const filterByRating = (products: Product[], minRating: number | null): Product[] => {
  if (!minRating) return products;
  return products.filter(product => product.rating >= minRating);
};

// Apply all filters together
export const applyAllFilters = (
  products: Product[], 
  subcategory: string | null, 
  priceRange: [number, number],
  minRating: number | null
): Product[] => {
  let filteredProducts = [...products];
  
  // Apply subcategory filter
  filteredProducts = filterBySubcategory(filteredProducts, subcategory);
  
  // Apply price range filter
  filteredProducts = filterByPriceRange(filteredProducts, priceRange[0], priceRange[1]);
  
  // Apply rating filter
  filteredProducts = filterByRating(filteredProducts, minRating);
  
  return filteredProducts;
};
