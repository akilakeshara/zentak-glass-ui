import React from 'react';

export default function GlassBadge({ children, variant = "emerald", className = '' }) {
  const variants = {
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    fuchsia: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    white: 'bg-white/10 text-white border-white/20'
  };

  return (
    <span className={`
      px-3 py-1 rounded-full text-sm font-medium tracking-wide
      border backdrop-blur-md shadow-sm
      transition-colors duration-200
      ${variants[variant] || variants.white}
      ${className}
    `}>
      {children}
    </span>
  );
}
