import React, { useState } from 'react';
import { X, CheckCircle, Clock, MapPin, CreditCard, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  total,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'cash'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `BH-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setStep('confirmed');
      onOrderSuccess();
    }, 1200);
  };

  const handleDone = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#111111] text-[#F7F1E3] rounded-3xl border border-[#F5B51B]/30 shadow-2xl p-6 sm:p-8 z-10">
        
        {step === 'form' ? (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#171717] text-[#F5B51B]">
                  <Flame className="w-5 h-5 fill-[#F5B51B]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-[#F7F1E3]">
                    EXPRESS CHECKOUT
                  </h3>
                  <span className="text-xs text-[#F5B51B] font-mono">
                    Total: ${total.toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#A7A7A7] hover:text-[#F7F1E3]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase tracking-wider text-[#A7A7A7] mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-white/10 text-sm text-[#F7F1E3] focus:border-[#F5B51B] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#A7A7A7] mb-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#171717] border border-white/10 text-sm text-[#F7F1E3] focus:border-[#F5B51B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#A7A7A7] mb-1">
                    ESTIMATED TIME
                  </label>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#171717] border border-white/10 text-[#F5B51B] text-xs font-bold">
                    <Clock className="w-4 h-4" />
                    <span>25–35 MINUTES</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[#A7A7A7] mb-1">
                  DELIVERY STREET ADDRESS
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7A7A7]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 104 Hope St, Apt 4B"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171717] border border-white/10 text-sm text-[#F7F1E3] focus:border-[#F5B51B] focus:outline-none"
                  />
                </div>
              </div>

              {/* Payment selection */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-[#A7A7A7] mb-1.5">
                  PAYMENT METHOD
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#F5B51B] bg-[#F5B51B]/10 text-[#F5B51B] font-bold'
                        : 'border-white/5 bg-[#171717] text-[#A7A7A7]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mx-auto mb-1" />
                    Credit Card
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'apple'
                        ? 'border-[#F5B51B] bg-[#F5B51B]/10 text-[#F5B51B] font-bold'
                        : 'border-white/5 bg-[#171717] text-[#A7A7A7]'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 mx-auto mb-1" />
                    Apple / GPay
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      paymentMethod === 'cash'
                        ? 'border-[#F5B51B] bg-[#F5B51B]/10 text-[#F5B51B] font-bold'
                        : 'border-white/5 bg-[#171717] text-[#A7A7A7]'
                    }`}
                  >
                    <Flame className="w-4 h-4 mx-auto mb-1" />
                    Pay at Door
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#F5B51B] hover:bg-[#D99512] disabled:opacity-50 text-[#0B0B0B] font-sans font-black text-sm tracking-widest uppercase rounded-xl shadow-[0_4px_25px_rgba(245,181,27,0.4)] flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">FIRING UP YOUR TICKET...</span>
                  ) : (
                    <>
                      <span>CONFIRM ORDER • ${total.toFixed(2)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmed View */
          <div className="text-center py-6">
            <div className="w-20 h-20 rounded-full bg-[#171717] border-2 border-[#F5B51B] flex items-center justify-center mx-auto mb-6 text-[#F5B51B] shadow-[0_0_30px_rgba(245,181,27,0.3)]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#F5B51B]/40 text-[#F5B51B] text-xs font-mono font-bold mb-3">
              <span>ORDER TICKET: #{orderId}</span>
            </div>

            <h3 className="font-display text-4xl uppercase tracking-wider text-[#F7F1E3] mb-3">
              THE GRILL IS ON FIRE!
            </h3>

            <p className="font-sans text-sm text-[#A7A7A7] max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you, {name || 'valued guest'}! Your flame-seared order has been dispatched to our kitchen line. Delivery ETA is approximately <strong>25–35 minutes</strong>.
            </p>

            <div className="p-4 rounded-xl bg-[#171717] border border-white/5 text-left text-xs space-y-2 mb-8">
              <div className="flex justify-between text-[#A7A7A7]">
                <span>Recipient:</span>
                <span className="text-[#F7F1E3] font-medium">{name}</span>
              </div>
              <div className="flex justify-between text-[#A7A7A7]">
                <span>Destination:</span>
                <span className="text-[#F7F1E3] font-medium truncate max-w-[200px]">{address}</span>
              </div>
              <div className="flex justify-between text-[#A7A7A7]">
                <span>Total Charged:</span>
                <span className="text-[#F5B51B] font-bold font-mono">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDone}
              className="w-full py-3.5 bg-[#F5B51B] text-[#0B0B0B] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#D99512] transition-colors"
            >
              RETURN TO BROWSE
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
