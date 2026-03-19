import React from 'react';

export default function GlassInput({ type = "text", placeholder, className = '', ...props }) {
  return (
    <div className="relative w-full">
      <input 
        type={type} 
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white/5 border border-white/20
          text-white placeholder-white/40
          backdrop-blur-md transition-all duration-300
          focus:outline-none focus:bg-white/10 focus:border-white/40
          focus:ring-2 focus:ring-fuchsia-500/30
          shadow-inner
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
