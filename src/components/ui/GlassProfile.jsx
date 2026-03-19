import React from 'react';

export default function GlassProfile({ name, role, avatarUrl, className = '' }) {
  return (
    <div className={`
      flex items-center gap-4 p-4 rounded-2xl
      bg-white/5 border border-white/10
      backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]
      hover:bg-white/10 transition-colors duration-300
      w-full max-w-[280px]
      ${className}
    `}>
      <div className="relative">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border border-white/20 flex items-center justify-center text-white font-bold tracking-wider shadow-lg shadow-cyan-500/30">
            {name ? name.charAt(0).toUpperCase() : 'U'}
          </div>
        )}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-transparent ring-1 ring-white/20"></div>
      </div>
      <div>
        <h4 className="text-white font-semibold tracking-wide text-sm">{name}</h4>
        <p className="text-white/60 text-xs mt-0.5 font-medium tracking-wide">{role}</p>
      </div>
    </div>
  );
}
