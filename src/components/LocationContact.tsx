import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText('24 Market Street, Downtown, Metro City 90012');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
            <span className="text-[#F5B51B] text-xs font-sans font-extrabold uppercase tracking-[0.25em]">
              VISIT OUR KITCHEN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#F7F1E3] leading-none mb-4">
            FIND US IN <span className="text-[#F5B51B]">DOWNTOWN</span>
          </h2>
          <p className="font-sans text-[#A7A7A7] text-base">
            Dine in, take away, or order curbside pickup right outside our doors.
          </p>
        </div>

        {/* 2-Column Layout: Details Left, Styled Interactive Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Contact & Hours Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            {/* Address & Direct Actions */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#171717] border border-white/5 hover:border-[#F5B51B]/20 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#0B0B0B] text-[#F5B51B] border border-[#F5B51B]/30 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wider text-[#F7F1E3] mb-1">
                    LOCATION
                  </h3>
                  <p className="font-sans text-base text-[#F7F1E3]">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-[#A7A7A7]">
                    {RESTAURANT_INFO.city} • Corner of 4th & Market
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#202020] hover:bg-[#2A2A2A] text-xs font-bold uppercase tracking-wider text-[#F7F1E3] flex items-center justify-center gap-2 transition-colors border border-white/5"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#F5B51B]" />
                      <span>COPIED ADDRESS!</span>
                    </>
                  ) : (
                    <span>COPY ADDRESS</span>
                  )}
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('24 Market Street, Downtown')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 rounded-lg bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="p-5 rounded-2xl bg-[#171717] border border-white/5 hover:border-[#F5B51B]/30 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#0B0B0B] text-[#F5B51B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7A7A7]">
                    PHONE ORDERS
                  </span>
                </div>
                <span className="font-sans font-bold text-sm sm:text-base text-[#F7F1E3] group-hover:text-[#F5B51B] transition-colors">
                  {RESTAURANT_INFO.phone}
                </span>
              </a>

              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="p-5 rounded-2xl bg-[#171717] border border-white/5 hover:border-[#F5B51B]/30 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#0B0B0B] text-[#F5B51B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7A7A7]">
                    EMAIL & CATERING
                  </span>
                </div>
                <span className="font-sans font-bold text-sm sm:text-base text-[#F7F1E3] group-hover:text-[#F5B51B] transition-colors">
                  {RESTAURANT_INFO.email}
                </span>
              </a>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#171717] border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#0B0B0B] text-[#F5B51B]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wider text-[#F7F1E3]">
                    OPERATING HOURS
                  </h3>
                  <span className="text-xs text-[#F5B51B] font-bold">GRILL IS CURRENTLY OPEN</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-white/5 last:border-0">
                    <span className="text-[#A7A7A7]">{h.days}</span>
                    <span className="font-medium text-[#F7F1E3]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Minimal Map-Inspired Interactive Visual Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 relative min-h-[400px] lg:min-h-[480px] bg-[#0E0E0E] flex flex-col justify-between p-6 sm:p-8 shadow-2xl">
            
            {/* Dark Styled Vector Grid & Roads Mockup */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.75" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                {/* Diagonal Avenue */}
                <path d="M-100 200 L900 600" stroke="#F5B51B" strokeWidth="6" opacity="0.25" />
                <path d="M-50 450 L800 100" stroke="#FFFFFF" strokeWidth="4" opacity="0.15" />
                <path d="M300 -100 L350 800" stroke="#FFFFFF" strokeWidth="5" opacity="0.15" />
              </svg>
            </div>

            {/* Map Top Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3.5 py-1.5 rounded-full bg-[#0B0B0B]/90 backdrop-blur-md border border-white/10 text-xs text-[#F7F1E3] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[11px]">DOWNTOWN METRO HUB</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-[#A7A7A7]">GPS: 34.0522° N, 118.2437° W</span>
              </div>
            </div>

            {/* Center Animated Map Pin */}
            <div className="relative z-10 self-center flex flex-col items-center my-auto">
              <div className="relative flex items-center justify-center">
                {/* Pulsing Outer Rings */}
                <div className="absolute w-24 h-24 rounded-full bg-[#F5B51B]/20 animate-ping pointer-events-none" />
                <div className="absolute w-16 h-16 rounded-full bg-[#F5B51B]/30 animate-pulse pointer-events-none" />
                
                {/* Pin Container */}
                <div className="relative w-14 h-14 rounded-2xl bg-[#F5B51B] text-[#0B0B0B] flex items-center justify-center shadow-[0_10px_30px_rgba(245,181,27,0.6)] transform hover:scale-110 transition-transform cursor-pointer">
                  <MapPin className="w-7 h-7 fill-[#0B0B0B]" />
                </div>
              </div>

              {/* Pin Callout Bubble */}
              <div className="mt-4 px-4 py-2.5 rounded-xl bg-[#0B0B0B]/95 backdrop-blur-md border border-[#F5B51B]/40 text-center shadow-2xl">
                <div className="font-display tracking-wider text-base text-[#F7F1E3]">
                  BURGER HUB FLAMEHOUSE
                </div>
                <div className="text-xs text-[#F5B51B] font-mono">
                  24 Market St • Curbside & Patio Ready
                </div>
              </div>
            </div>

            {/* Map Bottom Status */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#0B0B0B]/85 backdrop-blur-md border border-white/10">
              <div className="text-xs text-[#A7A7A7] text-center sm:text-left">
                Free validated parking behind the building on 4th street.
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent('24 Market Street, Downtown')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-widest uppercase text-[#F5B51B] hover:text-[#D99512]"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
