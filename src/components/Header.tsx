import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOrderClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['home', 'menu', 'offers', 'about', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'MENU', href: '#menu', id: 'menu' },
    { label: 'OFFERS', href: '#offers', id: 'offers' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#F5B51B]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Brand Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="group focus:outline-none focus:ring-2 focus:ring-[#F5B51B] rounded-lg"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* CENTER: Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`relative font-sans text-xs lg:text-[13px] tracking-[0.2em] font-bold uppercase transition-colors duration-200 py-1.5 group ${
                    isActive ? 'text-[#F5B51B]' : 'text-[#A7A7A7] hover:text-[#F7F1E3]'
                  }`}
                >
                  {link.label}
                  {/* Animated Gold Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#F5B51B] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Shopping Bag Button */}
            <button
              id="header-cart-button"
              type="button"
              onClick={onOpenCart}
              aria-label={`View Cart with ${cartCount} items`}
              className="relative p-2.5 rounded-full bg-[#171717] hover:bg-[#202020] text-[#F7F1E3] hover:text-[#F5B51B] border border-white/10 hover:border-[#F5B51B]/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#F5B51B]"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span
                  id="cart-count-badge"
                  className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-[20px] px-1 text-[11px] font-bold bg-[#F5B51B] text-[#0B0B0B] rounded-full border-2 border-[#0B0B0B] animate-pulse"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Desktop Order Online CTA Button */}
            <button
              id="header-order-online-button"
              type="button"
              onClick={onOrderClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] font-sans font-extrabold text-xs lg:text-sm tracking-wider uppercase rounded-lg shadow-[0_4px_20px_rgba(245,181,27,0.35)] hover:shadow-[0_6px_25px_rgba(245,181,27,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5B51B]"
            >
              <span>ORDER ONLINE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2.5 rounded-lg bg-[#171717] text-[#F7F1E3] hover:text-[#F5B51B] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F5B51B]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100 border-b border-[#F5B51B]/20 bg-[#0B0B0B]/98 backdrop-blur-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-sans font-bold tracking-widest uppercase transition-colors flex items-center justify-between border-b border-white/5 ${
                  activeSection === link.id ? 'text-[#F5B51B]' : 'text-[#F7F1E3] hover:text-[#F5B51B]'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-[#F5B51B]" />}
              </a>
            ))}
          </nav>
          
          <button
            id="mobile-menu-order-cta"
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOrderClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#F5B51B] text-[#0B0B0B] font-bold text-sm tracking-wider uppercase rounded-lg shadow-lg active:scale-95 transition-all mt-4"
          >
            <span>ORDER ONLINE NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
