import React from 'react';
import { ArrowRight, Flame, Sparkles, Clock } from 'lucide-react';

interface PromotionalBannerProps {
  onClaimOffer: () => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ onClaimOffer }) => {
  return (
    <section id="offers" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5B51B] via-[#E5A50B] to-[#D99512] text-[#0B0B0B] p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(245,181,27,0.35)]">
        
        {/* Subtle Decorative Geometric Pattern & Sparks Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0B0B0B_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow with Flame */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-[#F5B51B] text-xs font-sans font-black tracking-[0.25em] uppercase mb-4 shadow-md">
              <Flame className="w-3.5 h-3.5 fill-[#F5B51B]" />
              <span>THIS WEEK'S CRAVING</span>
            </div>

            {/* Huge Headline */}
            <h2
              id="promo-banner-headline"
              className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0B0B0B] leading-none mb-4"
            >
              DOUBLE THE FLAVOR
            </h2>

            {/* Supporting Text */}
            <p className="font-sans text-lg sm:text-xl font-medium text-[#0B0B0B]/85 max-w-xl mb-8 leading-snug">
              Grab two signature burgers and make dinner twice as satisfying. Pair any two classics or double-stacks and receive complimentary seasoned fries + craft drinks.
            </p>

            {/* Actions & Code Note */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="claim-promo-offer-cta"
                type="button"
                onClick={onClaimOffer}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B0B0B] hover:bg-[#1a1a1a] text-[#F7F1E3] hover:text-[#F5B51B] font-sans font-black text-sm sm:text-base tracking-widest uppercase rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-[#0B0B0B]"
              >
                <span>CLAIM OFFER</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0B0B0B]/10 rounded-xl border border-[#0B0B0B]/15 text-xs font-mono font-bold tracking-wider text-[#0B0B0B]">
                <Clock className="w-4 h-4" />
                <span>CODE APPLIED: <strong>DOUBLEFLAVOR</strong></span>
              </div>
            </div>

          </div>

          {/* Right Visual Image & Limited Time Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0B0B0B] bg-[#0B0B0B]">
                <img
                  src="/images/promo_duo_1790087441373.jpg"
                  alt="Double the flavor promotional burgers set"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover object-center transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Circular Badge: "LIMITED TIME" */}
              <div
                id="promo-limited-badge"
                className="absolute -top-5 -right-5 sm:-top-7 sm:-right-7 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0B0B0B] text-[#F5B51B] border-2 border-[#F5B51B] p-2 flex flex-col items-center justify-center shadow-2xl select-none"
              >
                <Sparkles className="w-4 h-4 mb-0.5 text-[#F5B51B]" />
                <span className="font-display text-base sm:text-lg leading-none tracking-wider uppercase text-[#F7F1E3]">
                  LIMITED
                </span>
                <span className="font-display text-lg sm:text-xl leading-none tracking-widest text-[#F5B51B]">
                  TIME
                </span>
                <span className="text-[9px] font-sans font-bold tracking-tighter text-[#A7A7A7] mt-0.5">
                  SAVE 25%
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
