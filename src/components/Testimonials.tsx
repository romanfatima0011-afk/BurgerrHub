import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/menu';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
            <span className="text-[#F5B51B] text-xs font-sans font-extrabold uppercase tracking-[0.25em]">
              COMMUNITY VOICES
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#F7F1E3] leading-none mb-4">
            PRAISE FROM THE <span className="text-[#F5B51B]">TABLE</span>
          </h2>
          <p className="font-sans text-[#A7A7A7] text-base">
            Over 25,000 burgers grilled and counted across the downtown metro.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="relative p-7 sm:p-8 rounded-2xl bg-[#171717] border border-white/5 hover:border-[#F5B51B]/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#F5B51B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5B51B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#F5B51B]/30" />
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-base text-[#F7F1E3] italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-display tracking-wider text-base text-[#F7F1E3] uppercase">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#A7A7A7]">{t.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#F5B51B] bg-[#0B0B0B] px-2 py-1 rounded border border-[#F5B51B]/20">
                    {t.favoriteItem}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
