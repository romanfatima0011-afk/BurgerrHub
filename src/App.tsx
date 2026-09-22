/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { MenuSection } from './components/MenuSection';
import { PromotionalBanner } from './components/PromotionalBanner';
import { BrandStory } from './components/BrandStory';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { OrderSection } from './components/OrderSection';
import { LocationContact } from './components/LocationContact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemQuickModal } from './components/ItemQuickModal';
import { CheckoutModal } from './components/CheckoutModal';
import { MenuItem, CartItem, CategoryId } from './types';
import { MENU_ITEMS } from './data/menu';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Initial appetizing pre-selected item so bag feels alive
    {
      item: MENU_ITEMS[0], // Firehouse Double
      quantity: 1,
      selectedOptions: {
        temperature: 'Medium',
      },
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedQuickViewItem, setSelectedQuickViewItem] = useState<MenuItem | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Show brief notification toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add Item Directly from card "+"
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    triggerToast(`Added ${item.name} to your craving bag`);
  };

  // Add item with custom options from QuickView modal
  const handleConfirmCustomAdd = (item: MenuItem, quantity: number, options: any) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + quantity, selectedOptions: options } : ci
        );
      }
      return [...prev, { item, quantity, selectedOptions: options }];
    });
    triggerToast(`Added ${quantity}x ${item.name} to your craving bag`);
  };

  // Update item quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove item
  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  // Promo handling
  const handleApplyPromo = (code: string): boolean => {
    const clean = code.toUpperCase();
    if (clean === 'DOUBLEFLAVOR' || clean === 'HUB15' || clean === 'EMBER15') {
      setAppliedPromo(clean);
      triggerToast(`Promo code ${clean} applied successfully!`);
      return true;
    }
    return false;
  };

  // Claim offer from promotional banner
  const handleClaimOffer = () => {
    setAppliedPromo('DOUBLEFLAVOR');
    // Also ensure Firehouse Double is in cart
    const firehouse = MENU_ITEMS.find((m) => m.id === 'firehouse-double');
    if (firehouse && !cartItems.some((c) => c.item.id === firehouse.id)) {
      setCartItems((prev) => [...prev, { item: firehouse, quantity: 2 }]);
    }
    setIsCartOpen(true);
    triggerToast('Double Flavor offer applied with 25% discount!');
  };

  // Smooth scroll to menu
  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  // Cart calculation for checkout modal
  const subtotal = cartItems.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const discountRate = appliedPromo === 'DOUBLEFLAVOR' ? 0.25 : (appliedPromo === 'HUB15' || appliedPromo === 'EMBER15') ? 0.15 : 0;
  const discountAmount = subtotal * discountRate;
  const taxable = Math.max(0, subtotal - discountAmount);
  const tax = taxable * 0.0825;
  const delivery = subtotal > 45 || subtotal === 0 ? 0 : 3.99;
  const finalCartTotal = taxable + tax + delivery;

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F7F1E3] font-sans antialiased overflow-x-hidden selection:bg-[#F5B51B] selection:text-[#0B0B0B]">
      
      {/* Toast Notification Pill */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#171717] border border-[#F5B51B]/40 text-[#F7F1E3] shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(245,181,27,0.2)] animate-bounce text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-[#F5B51B] flex-shrink-0" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs font-bold uppercase tracking-wider text-[#F5B51B] underline hover:text-[#D99512]"
          >
            VIEW BAG
          </button>
        </div>
      )}

      {/* Floating Quick Order Pill for mobile */}
      {totalCartCount > 0 && !isCartOpen && (
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="sm:hidden fixed bottom-6 left-6 right-6 z-40 py-3.5 px-6 rounded-2xl bg-[#F5B51B] text-[#0B0B0B] font-bold text-sm uppercase tracking-wider flex items-center justify-between shadow-[0_10px_30px_rgba(245,181,27,0.5)] border border-[#0B0B0B]"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span>VIEW CRAVING BAG ({totalCartCount})</span>
          </div>
          <span className="font-sans font-black">${finalCartTotal.toFixed(2)}</span>
        </button>
      )}

      {/* 1. Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderClick={() => {
          setIsCartOpen(true);
        }}
      />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero
          onOrderNow={() => {
            const firehouse = MENU_ITEMS[0];
            handleAddToCart(firehouse);
            setIsCartOpen(true);
          }}
          onExploreMenu={handleExploreMenu}
        />

        {/* 3. Category Navigation Panel */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            handleExploreMenu();
          }}
        />

        {/* 4. Signature Menu Section */}
        <MenuSection
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onAddToCart={handleAddToCart}
          onQuickView={(item) => setSelectedQuickViewItem(item)}
        />

        {/* 5. Promotional Banner Section */}
        <PromotionalBanner onClaimOffer={handleClaimOffer} />

        {/* 6. Brand Story Section */}
        <BrandStory onLearnMore={handleExploreMenu} />

        {/* 7. Process / Food Quality Section */}
        <ProcessSection />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Final Order Conversion Section */}
        <OrderSection
          onOrderOnline={() => setIsCartOpen(true)}
          onViewMenu={handleExploreMenu}
        />

        {/* 10. Contact & Location Interactive Map Section */}
        <LocationContact />

        {/* 11. VIP Newsletter Signup */}
        <Newsletter />
      </main>

      {/* 12. Multi-Column Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Item Customizer Modal */}
      <ItemQuickModal
        item={selectedQuickViewItem}
        onClose={() => setSelectedQuickViewItem(null)}
        onConfirmAdd={handleConfirmCustomAdd}
      />

      {/* Express Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        total={finalCartTotal}
        onOrderSuccess={() => {
          setCartItems([]);
          setAppliedPromo(null);
        }}
      />

    </div>
  );
}
