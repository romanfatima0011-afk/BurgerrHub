import React from 'react';
import { ArrowRight, Flame, UtensilsCrossed, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onExploreMenu }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0B0B0B]"
    >
      {/* Cinematic Background Atmosphere: layered smoke, subtle amber radial glows, vignettes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right intense golden aura */}
        <div className="absolute top-1/4 right-1/10 w-[550px] h-[550px] bg-[#F5B51B]/15 rounded-full blur-[120px] -translate-y-1/2" />
        {/* Center ambient warm ember glow */}
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#D99512]/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#202020_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
        {/* Dark Vignette around edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: 45% Desktop Split */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#F5B51B]/30 self-start mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5B51B] animate-ping" />
              <span className="text-[#F5B51B] text-xs font-sans tracking-[0.25em] font-extrabold uppercase">
                HANDCRAFTED • FIRE-GRILLED • MADE FRESH
              </span>
            </div>

            {/* Giant Headline: 2 lines, 'BIG FLAVOR' in gold */}
            <h1
              id="hero-main-headline"
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[112px] leading-[0.9] tracking-tight uppercase text-[#F7F1E3] mb-6 drop-shadow-md"
            >
              BUILT FOR
              <br />
              <span className="text-[#F5B51B] text-glow-gold">BIG FLAVOR</span>
            </h1>

            {/* Description */}
            <p className="font-sans text-[#A7A7A7] text-lg sm:text-xl font-normal leading-relaxed max-w-xl mb-9">
              Bold burgers, fire-kissed sides, and indulgent creations made for serious cravings. Smoked over hardwood embers, stacked high, and delivered smoking fresh.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
              {/* Primary Gold CTA */}
              <button
                id="hero-order-now-cta"
                type="button"
                onClick={onOrderNow}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] font-sans font-black text-sm sm:text-base tracking-widest uppercase rounded-xl shadow-[0_8px_30px_rgba(245,181,27,0.35)] hover:shadow-[0_12px_40px_rgba(245,181,27,0.5)] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5B51B]"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-explore-menu-cta"
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#171717] hover:bg-[#202020] text-[#F7F1E3] hover:text-[#F5B51B] font-sans font-bold text-sm sm:text-base tracking-wider uppercase rounded-xl border border-white/10 hover:border-[#F5B51B]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-[#F5B51B]"
              >
                <div className="w-6 h-6 rounded-full bg-[#F5B51B]/15 text-[#F5B51B] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                </div>
                <span>EXPLORE MENU</span>
              </button>
            </div>

            {/* SECTION 7: Hero Support Features */}
            <div
              id="hero-features"
              className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#171717] text-[#F5B51B] border border-[#F5B51B]/20">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display tracking-wider text-sm sm:text-base uppercase text-[#F7F1E3] leading-tight">
                    FAST LOCAL DELIVERY
                  </h4>
                  <p className="text-xs text-[#A7A7A7]">Under 30 minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#171717] text-[#F5B51B] border border-[#F5B51B]/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display tracking-wider text-sm sm:text-base uppercase text-[#F7F1E3] leading-tight">
                    PREMIUM INGREDIENTS
                  </h4>
                  <p className="text-xs text-[#A7A7A7]">100% Certified Angus</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#171717] text-[#F5B51B] border border-[#F5B51B]/20">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display tracking-wider text-sm sm:text-base uppercase text-[#F7F1E3] leading-tight">
                    FRESH OFF THE GRILL
                  </h4>
                  <p className="text-xs text-[#A7A7A7]">Hardwood ember-seared</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 55% Desktop Split — Gourmet Burger Cinematic Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            
            {/* Dramatic Ambient Backdrop Behind Burger */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Radial Golden Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F5B51B]/25 via-[#D99512]/15 to-transparent rounded-full filter blur-[90px] transform scale-90 -z-10" />

              {/* Main Burger Container with layered depth */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl border border-[#F5B51B]/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(245,181,27,0.15)] bg-gradient-to-b from-[#1C1710] to-[#0B0B0B]">
                  <img
                    id="hero-burger-image"
                    src="/images/hero_burger_1790087409149.jpg"
                    alt="The Firehouse Double smash burger with dripping cheese and brioche bun"
                    referrerPolicy="no-referrer"
                    className="w-full h-[380px] sm:h-[460px] lg:h-[540px] object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle smoke & vignette gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                </div>

                {/* Circular Quality Stamp / Badge: "CRAFTED FRESH • EST. 2024" */}
                <div
                  id="hero-quality-badge"
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#111111]/90 backdrop-blur-md border-2 border-[#F5B51B] p-2 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,181,27,0.3)] animate-spin-slow select-none pointer-events-none"
                  style={{ animationDuration: '30s' }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="stamp-curve"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10.5px] font-sans font-black tracking-[0.22em] fill-[#F5B51B] uppercase">
                      <textPath href="#stamp-curve">
                        • CRAFTED FRESH • EST. 2024 •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-[#F5B51B]" />
                  </div>
                </div>

                {/* Floating Chef Note Card */}
                <div
                  id="hero-signature-tag"
                  className="absolute -bottom-5 left-4 sm:left-8 px-5 py-3 rounded-2xl bg-[#111111]/95 backdrop-blur-md border border-[#F5B51B]/40 shadow-2xl flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5B51B] text-[#0B0B0B] flex items-center justify-center font-display text-xl font-bold">
                    ★
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#F5B51B] uppercase">
                      CHEF'S CROWN JEWEL
                    </div>
                    <div className="font-display text-lg tracking-wider text-[#F7F1E3] flex items-center gap-2">
                      FIREHOUSE DOUBLE <span className="text-[#F5B51B] font-sans font-black text-sm">$15.95</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
