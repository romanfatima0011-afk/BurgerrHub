import React from 'react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/menu';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#070707] text-[#A7A7A7] pt-16 sm:pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/5">
          
          {/* COLUMN 1: Brand & Socials (Span 5 on Desktop) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="mb-5 focus:outline-none focus:ring-2 focus:ring-[#F5B51B] rounded-lg">
              <Logo size="md" showTagline={true} />
            </a>
            
            <p className="font-sans text-sm text-[#A7A7A7] leading-relaxed max-w-sm mb-6">
              A modern, dark-fired culinary sanctuary dedicated to smashed beef artistry, wood-fired crusts, and hand-spun indulgence. No shortcuts, no compromises.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#111111] hover:bg-[#F5B51B] text-[#F7F1E3] hover:text-[#0B0B0B] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#111111] hover:bg-[#F5B51B] text-[#F7F1E3] hover:text-[#0B0B0B] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-[#111111] hover:bg-[#F5B51B] text-[#F7F1E3] hover:text-[#0B0B0B] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.83c0 1.95-.59 3.95-1.78 5.48-1.57 2.01-4.13 3.09-6.66 2.87-2.6-.22-4.99-1.74-6.22-4.04-1.28-2.39-1.14-5.46.36-7.72 1.48-2.22 4.09-3.47 6.74-3.19v4.2c-1.1-.17-2.27.18-3.07.96-.82.8-1.14 2.02-.79 3.08.35 1.05 1.34 1.83 2.45 1.93 1.19.11 2.39-.46 2.97-1.51.27-.49.39-1.06.39-1.63V.02z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#twitter"
                aria-label="X (formerly Twitter)"
                className="w-10 h-10 rounded-xl bg-[#111111] hover:bg-[#F5B51B] text-[#F7F1E3] hover:text-[#0B0B0B] border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-display tracking-widest text-sm uppercase text-[#F7F1E3] mb-5 border-l-2 border-[#F5B51B] pl-2.5">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-[#F5B51B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F5B51B] transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#F5B51B] transition-colors">Special Offers</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F5B51B] transition-colors">Brand Story</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5B51B] transition-colors">Contact & Hours</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Help */}
          <div className="lg:col-span-3">
            <h4 className="font-display tracking-widest text-sm uppercase text-[#F7F1E3] mb-5 border-l-2 border-[#F5B51B] pl-2.5">
              HELP & SERVICE
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#contact" className="hover:text-[#F5B51B] transition-colors">Fast Local Delivery Policy</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F5B51B] transition-colors">Allergen & Nutrition Info</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5B51B] transition-colors">Catering & Bulk Events</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5B51B] transition-colors">Customer Care FAQ</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#F5B51B] transition-colors">Privacy & Terms</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display tracking-widest text-sm uppercase text-[#F7F1E3] mb-5 border-l-2 border-[#F5B51B] pl-2.5">
              CONTACT
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#F5B51B]">
                  Flagship Store
                </span>
                <span className="text-[#F7F1E3]">{RESTAURANT_INFO.address}</span>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#F5B51B]">
                  Direct Grill Line
                </span>
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#F5B51B] text-[#F7F1E3] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#F5B51B]">
                  Inquiries & Feedback
                </span>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#F5B51B] text-[#F7F1E3] transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A7A7]/70">
          <div>
            © {new Date().getFullYear()} BURGER HUB. All rights reserved. Fire-grilled with pride.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#F5B51B] transition-colors">Privacy Policy</a>
            <span className="text-white/10">•</span>
            <a href="#terms" className="hover:text-[#F5B51B] transition-colors">Terms of Service</a>
            <span className="text-white/10">•</span>
            <a href="#accessibility" className="hover:text-[#F5B51B] transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
