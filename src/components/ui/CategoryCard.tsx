
import { Link } from 'react-router-dom';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.id}`} 
      className="block group"
    >
      <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
        <div className="p-4">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-16 h-16 mx-auto mb-3 object-contain transition-transform group-hover:scale-110"
          />
          <h3 className="text-center font-medium group-hover:text-volt-blue transition-colors">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
