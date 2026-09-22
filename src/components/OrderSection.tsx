import React from 'react';
import { ArrowRight, UtensilsCrossed, Flame } from 'lucide-react';

interface OrderSectionProps {
  onOrderOnline: () => void;
  onViewMenu: () => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({
  onOrderOnline,
  onViewMenu,
}) => {
  return (
    <section id="order-cta" className="py-24 sm:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Intense Radial Amber Glow centered behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#F5B51B]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Flame Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#F5B51B]/40 mb-6 shadow-md">
          <Flame className="w-4 h-4 text-[#F5B51B] fill-[#F5B51B]" />
          <span className="text-[#F5B51B] text-xs font-sans font-extrabold uppercase tracking-[0.25em]">
            DELIVERED HOT & FAST
          </span>
        </div>

        {/* Large Centered Heading */}
        <h2
          id="final-conversion-heading"
          className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#F7F1E3] leading-none mb-6 drop-shadow-lg"
        >
          READY FOR YOUR <br />
          <span className="text-[#F5B51B] text-glow-gold">NEXT CRAVING?</span>
        </h2>

        {/* Supporting Line */}
        <p className="font-sans text-lg sm:text-xl text-[#A7A7A7] max-w-xl mx-auto mb-10 leading-relaxed">
          Order fresh, fire-grilled favorites delivered straight to your door. Average prep & arrival in under 30 minutes.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            id="final-order-online-cta"
            type="button"
            onClick={onOrderOnline}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] font-sans font-black text-base tracking-widest uppercase rounded-xl shadow-[0_10px_35px_rgba(245,181,27,0.4)] hover:shadow-[0_15px_45px_rgba(245,181,27,0.6)] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5B51B]"
          >
            <span>ORDER ONLINE</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </button>

          <button
            id="final-view-menu-cta"
            type="button"
            onClick={onViewMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171717] hover:bg-[#202020] text-[#F7F1E3] hover:text-[#F5B51B] font-sans font-bold text-base tracking-wider uppercase rounded-xl border border-white/10 hover:border-[#F5B51B]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-[#F5B51B]"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#F5B51B]" />
            <span>VIEW MENU</span>
          </button>
        </div>

      </div>
    </section>
  );
};
