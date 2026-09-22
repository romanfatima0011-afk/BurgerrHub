import React, { useState } from 'react';
import { Send, CheckCircle2, Flame } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0E0E0E] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="w-12 h-12 rounded-2xl bg-[#171717] border border-[#F5B51B]/30 text-[#F5B51B] flex items-center justify-center mx-auto mb-4">
          <Flame className="w-6 h-6 fill-[#F5B51B]" />
        </div>

        <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-[#F7F1E3] mb-3">
          JOIN THE <span className="text-[#F5B51B]">BURGER HUB VIP CLUB</span>
        </h3>
        
        <p className="font-sans text-sm sm:text-base text-[#A7A7A7] max-w-lg mx-auto mb-8">
          Unlock 15% off your first delivery order, early drop notifications for off-menu secret smash burgers, and VIP tasting invites.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl bg-[#171717] border border-[#F5B51B]/40 inline-flex items-center gap-3 text-[#F5B51B] font-medium text-sm">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Welcome to the club! Use code <strong>HUB15</strong> for 15% off your order.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="w-full px-5 py-3.5 rounded-xl bg-[#171717] text-[#F7F1E3] placeholder-[#A7A7A7]/60 border border-white/10 focus:border-[#F5B51B] focus:outline-none focus:ring-1 focus:ring-[#F5B51B] text-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F5B51B] hover:bg-[#D99512] text-[#0B0B0B] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all flex-shrink-0"
            >
              <span>CLAIM 15%</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
