import React, { useState } from 'react';
import { X, Plus, Minus, Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemQuickModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onConfirmAdd: (item: MenuItem, quantity: number, options: any) => void;
}

export const ItemQuickModal: React.FC<ItemQuickModalProps> = ({
  item,
  onClose,
  onConfirmAdd,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [temperature, setTemperature] = useState('Medium');
  const [addCheese, setAddCheese] = useState(false);
  const [addBacon, setAddBacon] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const isBurger = item.category === 'burgers';
  const extraCheeseCost = 1.50;
  const extraBaconCost = 2.00;

  const unitPrice = item.price + (addCheese ? extraCheeseCost : 0) + (addBacon ? extraBaconCost : 0);
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onConfirmAdd(item, quantity, {
      temperature: isBurger ? temperature : undefined,
      addCheese,
      addBacon,
      specialInstructions: specialInstructions.trim() || undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#111111] text-[#F7F1E3] rounded-3xl border border-[#F5B51B]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10">
        
        {/* Modal Header Image */}
        <div className="relative h-60 w-full overflow-hidden bg-[#171717]">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0B0B]/80 text-[#F7F1E3] hover:text-[#F5B51B] flex items-center justify-center backdrop-blur-md border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category / Badge */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            {item.badge && (
              <span className="px-3 py-1 rounded-md text-[11px] font-sans font-extrabold uppercase tracking-wider bg-[#F5B51B] text-[#0B0B0B]">
                {item.badge}
              </span>
            )}
            {item.calories && (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/70 text-[#A7A7A7] backdrop-blur-sm border border-white/5">
                {item.calories} CAL
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto no-scrollbar">
          
          <div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#F7F1E3] mb-2">
              {item.name}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Burger Patty Doneness (if burger) */}
          {isBurger && (
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#F5B51B]">
                GRILL TEMPERATURE
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Medium Rare', 'Medium', 'Well Done'].map((temp) => (
                  <button
                    key={temp}
                    type="button"
                    onClick={() => setTemperature(temp)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      temperature === temp
                        ? 'bg-[#F5B51B] text-[#0B0B0B] border-[#F5B51B]'
                        : 'bg-[#171717] text-[#A7A7A7] border-white/5 hover:border-white/20'
                    }`}
                  >
                    {temp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#F5B51B]">
              CHEF UPGRADES
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-white/5 cursor-pointer hover:border-white/20">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addCheese}
                    onChange={(e) => setAddCheese(e.target.checked)}
                    className="w-4 h-4 rounded text-[#F5B51B] focus:ring-0 focus:ring-offset-0 bg-[#0B0B0B] border-white/20 accent-[#F5B51B]"
                  />
                  <span className="text-xs font-medium text-[#F7F1E3]">Extra Aged Gruyère Melt</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#F5B51B]">+$1.50</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-white/5 cursor-pointer hover:border-white/20">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addBacon}
                    onChange={(e) => setAddBacon(e.target.checked)}
                    className="w-4 h-4 rounded text-[#F5B51B] focus:ring-0 focus:ring-offset-0 bg-[#0B0B0B] border-white/20 accent-[#F5B51B]"
                  />
                  <span className="text-xs font-medium text-[#F7F1E3]">Double Applewood Smoked Bacon</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#F5B51B]">+$2.00</span>
              </label>
            </div>
          </div>

          {/* Kitchen Special Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#A7A7A7]">
              SPECIAL INSTRUCTIONS (OPTIONAL)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. sauce on the side, extra crispy edges..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#171717] border border-white/10 text-xs text-[#F7F1E3] placeholder-[#A7A7A7]/50 focus:border-[#F5B51B] focus:outline-none"
            />
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#171717] border-t border-white/10 flex items-center justify-between gap-4">
          {/* Quantity */}
          <div className="flex items-center gap-3 bg-[#0B0B0B] rounded-xl p-1.5 border border-white/10">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A7A7A7] hover:text-[#F7F1E3] hover:bg-[#202020]"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-mono font-bold text-sm w-6 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A7A7A7] hover:text-[#F7F1E3] hover:bg-[#202020]"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add CTA */}
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 py-3.5 px-6 rounded-xl bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] font-sans font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,181,27,0.35)] transition-all active:scale-95"
          >
            <span>ADD TO BAG — ${totalPrice.toFixed(2)}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
