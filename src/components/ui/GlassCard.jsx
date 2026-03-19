import React from 'react';

export default function GlassCard({ title, children, className = '', onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`
      relative overflow-hidden group
      p-6 rounded-3xl
      bg-white/5 backdrop-blur-lg
      border border-white/10
      shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:shadow-[0_8px_32px_-8px_rgba(31,38,135,0.4)] hover:bg-white/10 hover:border-white/20
      flex flex-col
      ${onClick ? 'cursor-pointer' : ''}
      ${className}
    `}>
      {/* Soft inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {title && (
        <div className="mb-6 flex items-center justify-between relative z-10">
          <h3 className="text-lg font-semibold text-white/90 tracking-wide">
            {title}
          </h3>
          <div className="w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>
      )}
      
      <div className="flex-1 flex items-center justify-center relative z-10">
        {children}
      </div>
    </div>
  );
}
