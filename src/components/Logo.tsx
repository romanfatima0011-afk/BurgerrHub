import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Geometric Burger Flame Emblem */}
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1C1710] to-[#0B0B0B] p-2 border border-[#F5B51B]/40 shadow-[0_0_15px_rgba(245,181,27,0.2)] group-hover:border-[#F5B51B] transition-colors"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top Bun Arc */}
          <path
            d="M6 13C6 8.58172 9.58172 5 14 5H18C22.4183 5 26 8.58172 26 13C26 13.5523 25.5523 14 25 14H7C6.44772 14 6 13.5523 6 13Z"
            fill="#F5B51B"
          />
          {/* Flame / Ember in center patty space */}
          <path
            d="M16 11C16 11 18.5 13.5 17 16C18.2 16.2 19.5 17.5 19 19.5C18.2 21.8 15.5 22 14.5 20.5C14.5 20.5 14.2 18.5 15.2 17.8C15.2 17.8 13.8 17.5 13.5 16C13.2 14.5 14.8 12.8 16 11Z"
            fill="#F7F1E3"
          />
          {/* Fire Spark Details */}
          <circle cx="21" cy="9.5" r="1" fill="#0B0B0B" />
          <circle cx="16" cy="8" r="1" fill="#0B0B0B" />
          <circle cx="11" cy="9.5" r="1" fill="#0B0B0B" />
          {/* Bottom Bun Base */}
          <rect
            x="6"
            y="22"
            width="20"
            height="4"
            rx="2"
            fill="#F5B51B"
          />
          {/* Patty Line with char-grill lines */}
          <path
            d="M5 16.5H27"
            stroke="#D99512"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span 
          className="font-display tracking-wider text-xl sm:text-2xl text-[#F7F1E3] flex items-center gap-1.5"
          style={{ letterSpacing: '0.08em' }}
        >
          BURGER <span className="text-[#F5B51B]">HUB</span>
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] mt-0.5">
            Fire-Grilled Gourmet
          </span>
        )}
      </div>
    </div>
  );
};
