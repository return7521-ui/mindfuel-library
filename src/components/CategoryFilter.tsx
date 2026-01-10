import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Mountain, 
  Cpu, 
  Sparkles, 
  FlaskConical, 
  Rocket, 
  Brain, 
  Scroll,
  LayoutGrid
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Mountain,
  Cpu,
  Sparkles,
  FlaskConical,
  Rocket,
  Brain,
  Scroll,
  LayoutGrid
};

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface CategoryFilterProps {
  categories: readonly Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  type: 'quote' | 'fact';
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, type }: CategoryFilterProps) => {
  const allCategories = [
    { id: 'all', label: 'All', icon: 'LayoutGrid' },
    ...categories
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {allCategories.map((category) => {
        const Icon = iconMap[category.icon] || LayoutGrid;
        const isActive = activeCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              isActive
                ? type === 'quote'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{category.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;