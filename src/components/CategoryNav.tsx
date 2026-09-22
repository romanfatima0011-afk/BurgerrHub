import React from 'react';
import { Flame, Utensils, Pizza, CupSoda, Drumstick, IceCream } from 'lucide-react';
import { CATEGORIES } from '../data/menu';
import { CategoryId } from '../types';

interface CategoryNavProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const getIcon = (iconName: string, isActive: boolean) => {
    const className = `w-7 h-7 transition-colors duration-200 ${
      isActive ? 'text-[#0B0B0B]' : 'text-[#F5B51B] group-hover:text-[#F5B51B]'
    }`;

    switch (iconName) {
      case 'Flame':
        return <Flame className={className} />;
      case 'Utensils':
        return <Utensils className={className} />;
      case 'Pizza':
        return <Pizza className={className} />;
      case 'CupSoda':
        return <CupSoda className={className} />;
      case 'Drumstick':
        return <Drumstick className={className} />;
      case 'IceCream':
        return <IceCream className={className} />;
      default:
        return <Flame className={className} />;
    }
  };

  return (
    <section id="categories" className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#111111] rounded-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] p-2 sm:p-3 overflow-hidden backdrop-blur-md">
        
        {/* Mobile Horizontal Scroll Carousel / Desktop 6-Column Equal Grid */}
        <div className="flex lg:grid lg:grid-cols-6 overflow-x-auto no-scrollbar divide-x divide-white/5 lg:divide-white/10 scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`category-btn-${cat.id}`}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 min-w-[170px] lg:min-w-0 p-4 sm:p-5 flex flex-col items-center text-center group transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5B51B] ${
                  isActive
                    ? 'bg-[#F5B51B] text-[#0B0B0B] shadow-lg -translate-y-1'
                    : 'bg-transparent text-[#F7F1E3] hover:bg-[#171717] hover:-translate-y-1'
                }`}
              >
                {/* Icon Wrapper */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${
                    isActive
                      ? 'bg-[#0B0B0B] text-[#F5B51B]'
                      : 'bg-[#171717] border border-white/5 group-hover:border-[#F5B51B]/40'
                  }`}
                >
                  {getIcon(cat.iconName, !isActive)}
                </div>

                {/* Category Title */}
                <span
                  className={`font-display text-lg tracking-wider uppercase mb-1 transition-colors ${
                    isActive ? 'text-[#0B0B0B]' : 'text-[#F7F1E3] group-hover:text-[#F5B51B]'
                  }`}
                >
                  {cat.title}
                </span>

                {/* Category Tagline */}
                <span
                  className={`text-[11px] leading-tight transition-colors line-clamp-2 ${
                    isActive ? 'text-[#0B0B0B]/80 font-medium' : 'text-[#A7A7A7] group-hover:text-[#F7F1E3]'
                  }`}
                >
                  {cat.tagline}
                </span>

                {/* Active Indicator Underline */}
                <div
                  className={`h-0.5 w-6 rounded-full mt-2.5 transition-all ${
                    isActive ? 'bg-[#0B0B0B]' : 'bg-transparent group-hover:bg-[#F5B51B]/50'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
