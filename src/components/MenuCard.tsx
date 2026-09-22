import React from 'react';
import { Plus, Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  onAddToCart,
  onQuickView,
}) => {
  return (
    <div
      id={`menu-card-${item.id}`}
      className="group relative flex flex-col bg-[#111111] hover:bg-[#151515] rounded-[18px] border border-white/10 hover:border-[#F5B51B]/40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.8),0_0_20px_rgba(245,181,27,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Top Image Container */}
      <div 
        className="relative h-56 sm:h-52 w-full overflow-hidden cursor-pointer bg-[#171717]"
        onClick={() => onQuickView(item)}
      >
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-106"
        />

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/20" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {item.badge && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-sans font-extrabold uppercase tracking-wider bg-[#F5B51B] text-[#0B0B0B] shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {item.badge}
            </span>
          )}
          {item.spicyLevel && item.spicyLevel > 0 ? (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-[#D99512]/90 text-[#F7F1E3] backdrop-blur-sm flex items-center gap-0.5">
              <Flame className="w-3 h-3 text-[#0B0B0B]" />
              {item.spicyLevel === 3 ? 'Extra Hot' : item.spicyLevel === 2 ? 'Spicy' : 'Mild'}
            </span>
          ) : null}
        </div>

        {/* Quick View hint on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200">
          <span className="px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-[#F5B51B]/60 text-xs font-bold text-[#F5B51B] tracking-wider uppercase">
            Quick Customize
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-wider text-[#A7A7A7] bg-[#171717] px-2 py-0.5 rounded border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 
            className="font-display text-xl sm:text-2xl uppercase tracking-wide text-[#F7F1E3] group-hover:text-[#F5B51B] transition-colors leading-tight mb-2 cursor-pointer"
            onClick={() => onQuickView(item)}
          >
            {item.name}
          </h3>

          {/* Description */}
          <p className="font-sans text-xs sm:text-[13px] text-[#A7A7A7] leading-relaxed line-clamp-3 mb-4">
            {item.description}
          </p>
        </div>

        {/* Bottom Row: Price & Circular Gold Plus Button */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-extrabold text-xl text-[#F5B51B] tracking-tight">
              ${item.price.toFixed(2)}
            </span>
            {item.originalPrice && (
              <span className="text-xs text-[#A7A7A7] line-through font-mono">
                ${item.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Interactive Gold Action Button */}
          <button
            id={`add-to-cart-btn-${item.id}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
            aria-label={`Add ${item.name} to order`}
            className="relative w-10 h-10 rounded-full bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] flex items-center justify-center shadow-[0_2px_12px_rgba(245,181,27,0.35)] transition-all duration-200 transform group-hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F5B51B]"
          >
            <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};
