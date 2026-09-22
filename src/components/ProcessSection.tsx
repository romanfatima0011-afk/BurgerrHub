import React from 'react';
import { Flame, ChefHat, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/menu';

export const ProcessSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#F5B51B]" />;
      case 'ChefHat':
        return <ChefHat className="w-6 h-6 text-[#F5B51B]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F5B51B]" />;
      default:
        return <Flame className="w-6 h-6 text-[#F5B51B]" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
            <span className="text-[#F5B51B] text-xs font-sans font-extrabold uppercase tracking-[0.25em]">
              THE FLAME STANDARD
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B51B]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#F7F1E3]">
            HOW WE CRAFT <span className="text-[#F5B51B]">PERFECTION</span>
          </h2>
        </div>

        {/* 3 Steps with Desktop Connecting Gold Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Desktop connecting line behind step circles */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-transparent via-[#F5B51B]/40 to-transparent -z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`process-step-${idx + 1}`}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#F5B51B]/30 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Step Number Circle */}
              <div className="relative w-20 h-20 rounded-full bg-[#171717] border-2 border-[#F5B51B] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,181,27,0.25)]">
                <span className="font-display text-2xl text-[#F7F1E3] tracking-wider">
                  {step.step}
                </span>
                
                {/* Floating icon badge */}
                <div className="absolute -bottom-2 -right-1 w-8 h-8 rounded-full bg-[#0B0B0B] border border-[#F5B51B]/50 flex items-center justify-center">
                  {getIcon(step.icon)}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F7F1E3] mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-sans text-sm sm:text-base text-[#A7A7A7] leading-relaxed max-w-xs">
                {step.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
