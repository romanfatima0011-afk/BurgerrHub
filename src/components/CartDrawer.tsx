import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Check, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  appliedPromo: string | null;
  onApplyPromo: (code: string) => boolean;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  appliedPromo,
  onApplyPromo,
  onProceedToCheckout,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  if (!isOpen) return null;

  // Calculation
  const subtotal = items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  
  let discountRate = 0;
  if (appliedPromo === 'DOUBLEFLAVOR') discountRate = 0.25;
  else if (appliedPromo === 'HUB15' || appliedPromo === 'EMBER15') discountRate = 0.15;
  
  const discountAmount = subtotal * discountRate;
  const deliveryFee = orderType === 'delivery' ? (subtotal > 45 || subtotal === 0 ? 0 : 3.99) : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.0825;
  const total = taxableAmount + tax + deliveryFee;

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (!promoInput.trim()) return;
    const success = onApplyPromo(promoInput.trim());
    if (success) {
      setPromoInput('');
    } else {
      setPromoError('Invalid promo code. Try DOUBLEFLAVOR or HUB15');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0E0E0E] text-[#F7F1E3] border-l border-[#F5B51B]/20 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111111]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#171717] text-[#F5B51B] border border-[#F5B51B]/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wider uppercase text-[#F7F1E3]">
                  YOUR CRAVING BAG
                </h3>
                <span className="text-xs text-[#A7A7A7]">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#171717] hover:bg-[#202020] text-[#A7A7A7] hover:text-[#F7F1E3] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery / Pickup Toggle */}
          <div className="p-4 bg-[#141414] border-b border-white/5">
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#0B0B0B] rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  orderType === 'delivery'
                    ? 'bg-[#F5B51B] text-[#0B0B0B] shadow'
                    : 'text-[#A7A7A7] hover:text-[#F7F1E3]'
                }`}
              >
                Delivery (25-35m)
              </button>
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  orderType === 'pickup'
                    ? 'bg-[#F5B51B] text-[#0B0B0B] shadow'
                    : 'text-[#A7A7A7] hover:text-[#F7F1E3]'
                }`}
              >
                Pickup (15m)
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#171717] flex items-center justify-center text-[#A7A7A7] mb-4 border border-white/5">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h4 className="font-display text-xl uppercase tracking-wider text-[#F7F1E3] mb-2">
                  BAG IS CURRENTLY EMPTY
                </h4>
                <p className="text-xs text-[#A7A7A7] max-w-xs mb-6">
                  Add signature double-stacks, truffle fries, or artisan shakes to fire up your order.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-[#F5B51B] text-[#0B0B0B] font-bold text-xs uppercase tracking-wider hover:bg-[#D99512] transition-colors"
                >
                  START EXPLORING MENU
                </button>
              </div>
            ) : (
              items.map((ci) => (
                <div
                  key={ci.item.id}
                  className="p-3.5 rounded-xl bg-[#141414] border border-white/5 flex gap-3.5 items-center justify-between"
                >
                  <img
                    src={ci.item.image}
                    alt={ci.item.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover bg-[#171717] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-display text-base tracking-wide uppercase text-[#F7F1E3] truncate">
                      {ci.item.name}
                    </h5>
                    <div className="text-xs font-sans font-bold text-[#F5B51B]">
                      ${(ci.item.price * ci.quantity).toFixed(2)}
                    </div>
                    {ci.selectedOptions?.temperature && (
                      <div className="text-[10px] text-[#A7A7A7] truncate">
                        Temp: {ci.selectedOptions.temperature}
                      </div>
                    )}
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 bg-[#0B0B0B] rounded-lg p-1 border border-white/5">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(ci.item.id, -1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#A7A7A7] hover:text-[#F7F1E3] hover:bg-[#202020]"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono font-bold w-4 text-center">
                      {ci.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(ci.item.id, 1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#A7A7A7] hover:text-[#F7F1E3] hover:bg-[#202020]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Trash */}
                  <button
                    type="button"
                    onClick={() => onRemoveItem(ci.item.id)}
                    className="p-1.5 text-[#A7A7A7] hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Bottom Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-5 bg-[#111111] border-t border-white/10 space-y-4">
              {/* Promo Code Input */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#171717] border border-[#F5B51B]/40 text-xs">
                    <div className="flex items-center gap-2 text-[#F5B51B]">
                      <Sparkles className="w-4 h-4" />
                      <span>Code <strong>{appliedPromo}</strong> applied ({discountRate * 100}% OFF)</span>
                    </div>
                    <span className="text-emerald-400 font-bold">
                      -${discountAmount.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handlePromoSubmit} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7A7A7]" />
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                        placeholder="PROMO CODE (e.g. DOUBLEFLAVOR)"
                        className="w-full pl-9 pr-3 py-2 bg-[#171717] rounded-lg border border-white/10 text-xs font-mono placeholder-[#A7A7A7]/50 text-[#F7F1E3] uppercase focus:outline-none focus:border-[#F5B51B]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#202020] hover:bg-[#2A2A2A] text-xs font-bold text-[#F5B51B] rounded-lg border border-white/5 transition-colors"
                    >
                      APPLY
                    </button>
                  </form>
                )}
                {promoError && (
                  <p className="text-[11px] text-rose-400 mt-1">{promoError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#A7A7A7]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#F7F1E3]">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Tax (8.25%)</span>
                  <span className="font-mono text-[#F7F1E3]">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-mono text-[#F7F1E3]">
                    {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold text-[#F7F1E3]">
                  <span>Total</span>
                  <span className="font-sans font-black text-xl text-[#F5B51B]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="drawer-checkout-button"
                type="button"
                onClick={onProceedToCheckout}
                className="w-full py-4 bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] font-sans font-black text-sm tracking-widest uppercase rounded-xl shadow-[0_4px_25px_rgba(245,181,27,0.4)] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <span>PROCEED TO CHECKOUT (${total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
