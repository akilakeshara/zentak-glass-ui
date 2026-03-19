import React from 'react';

export default function GlassButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        px-8 py-3 rounded-2xl
        font-semibold text-white tracking-wide
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        transition-all duration-300 ease-out
        hover:bg-white/20 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)]
        active:scale-95 active:bg-white/10
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
