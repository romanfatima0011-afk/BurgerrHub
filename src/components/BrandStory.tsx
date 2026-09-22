import React from 'react';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface BrandStoryProps {
  onLearnMore?: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F5B51B]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#D99512]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Editorial Food / Chef Grill Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
              <img
                src="/images/chef_grill_1790087426446.jpg"
                alt="Chef searing gourmet burgers over hardwood flame grill"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[450px] sm:h-[540px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Accredit Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 p-4 sm:p-5 rounded-2xl bg-[#171717]/95 backdrop-blur-md border border-[#F5B51B]/30 shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5B51B] text-[#0B0B0B] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-lg tracking-wider text-[#F7F1E3] block leading-tight">
                  HARDWOOD FIRE-CRAFTED
                </span>
                <span className="text-xs text-[#A7A7A7]">
                  Never frozen • Custom proprietary blend
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Story, Manifesto, Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F5B51B]" />
              <span className="text-[#F5B51B] text-xs font-sans font-extrabold uppercase tracking-[0.25em]">
                OUR STORY
              </span>
            </div>

            {/* Heading */}
            <h2
              id="brand-story-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F7F1E3] leading-tight mb-6"
            >
              GOOD FOOD. <span className="text-[#F5B51B]">NO SHORTCUTS.</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#A7A7A7] leading-relaxed mb-8">
              <p>
                BURGER HUB began with a defiant conviction: fast casual food deserved the same meticulous heat, knife-work, and respect as high-end dining. We rejected steam drawers, frozen pre-pressed pucks, and factory dressings.
              </p>
              <p>
                Instead, we grind whole cuts of chuck, brisket, and short rib daily. We slap each patty onto screaming-hot 600°F cast iron, locking in natural juices with lacy, caramelized crusts. Every sauce—from our smoked ember mayo to spicy wildflower hot honey—is reduced and whisked in our kitchen every single morning.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm text-[#F7F1E3]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B51B] flex-shrink-0" />
                <span>100% Certified Angus Beef</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B51B] flex-shrink-0" />
                <span>Brioche baked locally each dawn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B51B] flex-shrink-0" />
                <span>Scratch-made sauces & relishes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B51B] flex-shrink-0" />
                <span>Zero artificial preservatives</span>
              </div>
            </div>

            {/* 3 Small Statistics Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-[#0B0B0B] border border-white/5 mb-8 text-center">
              <div className="py-2">
                <div className="font-display text-3xl sm:text-4xl text-[#F5B51B] leading-none mb-1">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#A7A7A7]">
                  FRESH PREP
                </div>
              </div>

              <div className="py-2 border-x border-white/5">
                <div className="font-display text-3xl sm:text-4xl text-[#F7F1E3] leading-none mb-1">
                  LOCAL
                </div>
                <div className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#A7A7A7]">
                  INGREDIENTS
                </div>
              </div>

              <div className="py-2">
                <div className="font-display text-3xl sm:text-4xl text-[#F5B51B] leading-none mb-1">
                  MADE
                </div>
                <div className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#A7A7A7]">
                  TO ORDER
                </div>
              </div>
            </div>

            {/* Gold CTA */}
            <a
              href="#menu"
              id="story-menu-cta"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-sm font-sans font-extrabold tracking-widest uppercase text-[#F5B51B] hover:text-[#D99512] transition-colors group"
            >
              <span>OUR CRAFT IN ACTION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
