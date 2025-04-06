
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  { name: "Smartphones", image: "/images/categories/smartphones.jpg", url: "/category/smartphones" },
  { name: "Laptops", image: "/images/categories/laptops.jpg", url: "/category/laptops" },
  { name: "TVs & Displays", image: "/images/categories/tvs.jpg", url: "/category/tvs" },
  { name: "Audio", image: "/images/categories/audio.jpg", url: "/category/audio" },
  { name: "Gaming", image: "/images/categories/gaming.jpg", url: "/category/gaming" },
  { name: "Wearables", image: "/images/categories/wearables.jpg", url: "/category/wearables" },
  { name: "Accessories", image: "/images/categories/accessories.jpg", url: "/category/accessories" }
];

const CategoriesPage = () => {
  return (
    <div className="volt-container py-8">
      <h1 className="heading-xl mb-6">Browse Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link to={category.url} key={category.name} className="group">
            <Card className="overflow-hidden h-full transition-all hover:shadow-md">
              <div className="relative h-48 bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">{category.name}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Explore our selection of {category.name.toLowerCase()}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-volt-blue group-hover:text-white transition-colors"
                >
                  Browse {category.name}
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 bg-volt-lightgray p-8 rounded-lg">
        <h2 className="heading-lg mb-4">Featured Collections</h2>
        <p className="text-gray-600 mb-6">
          Discover our handpicked collections featuring the best products across categories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Work From Home</h3>
            <p className="text-sm text-gray-600 mb-4">Essential tech for your home office setup.</p>
            <Link to="/collections/work-from-home">
              <Button variant="link" className="p-0 text-volt-blue">Explore Collection →</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Gaming Essentials</h3>
            <p className="text-sm text-gray-600 mb-4">Level up your gaming experience.</p>
            <Link to="/collections/gaming-essentials">
              <Button variant="link" className="p-0 text-volt-blue">Explore Collection →</Button>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Smart Home</h3>
            <p className="text-sm text-gray-600 mb-4">Connect and automate your living space.</p>
            <Link to="/collections/smart-home">
              <Button variant="link" className="p-0 text-volt-blue">Explore Collection →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
