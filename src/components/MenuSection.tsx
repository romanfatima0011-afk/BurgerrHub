import React from 'react';
import { MenuCard } from './MenuCard';
import { MenuItem, CategoryId } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data/menu';

interface MenuSectionProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onAddToCart,
  onQuickView,
}) => {
  // Filter items if specific category chosen, else show all
  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const filterTabs: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'ALL ITEMS' },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.title })),
  ];

  return (
    <section id="menu" className="py-24 sm:py-28 bg-[#0B0B0B] relative">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F5B51B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D99512]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
            <span className="text-[#F5B51B] text-xs font-sans font-extrabold uppercase tracking-[0.25em]">
              MADE TO BE CRAVED
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
          </div>

          <h2
            id="menu-section-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F1E3] leading-none mb-4"
          >
            MEET THE <span className="text-[#F5B51B]">FLAVOR ICONS</span>
          </h2>

          <p className="font-sans text-[#A7A7A7] text-base sm:text-lg">
            Every patty is smashed fresh on 600°F cast iron, every sauce is simmered in-house, and every bun is toasted in golden garlic butter.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 mb-12 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                type="button"
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans font-extrabold uppercase tracking-wider transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#F5B51B] ${
                  isActive
                    ? 'bg-[#F5B51B] text-[#0B0B0B] shadow-[0_2px_15px_rgba(245,181,27,0.3)] scale-105'
                    : 'bg-[#171717] hover:bg-[#202020] text-[#A7A7A7] hover:text-[#F7F1E3] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid: Desktop 4, Tablet 2, Mobile 1 */}
        <div
          id="menu-items-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom Menu Guarantee Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#171717] via-[#141414] to-[#171717] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#F5B51B]" />
            <p className="text-sm text-[#A7A7A7]">
              Have dietary restrictions or allergies? Halal certified beef, gluten-free buns, and vegan cheese available on request.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className="text-xs font-sans font-bold tracking-widest uppercase text-[#F5B51B] hover:underline whitespace-nowrap"
          >
            VIEW COMPLETE ALLERGEN GUIDE →
          </button>
        </div>

      </div>
    </section>
  );
};
