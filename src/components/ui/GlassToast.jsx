import React from 'react';

export default function GlassToast({ title, description, icon, className = '' }) {
  return (
    <div className={`
      w-full max-w-sm p-4 rounded-2xl
      bg-white/10 backdrop-blur-md
      border border-white/20
      shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]
      flex gap-4 items-start
      animate-in slide-in-from-bottom-5 duration-300 fade-in
      ${className}
    `}>
      <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-300 border border-indigo-400/20 shadow-inner">
        {icon ? icon : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <div className="pt-0.5">
        <p className="text-sm font-semibold text-white tracking-wide">{title}</p>
        <p className="text-sm text-white/70 mt-1 leading-relaxed">{description}</p>
      </div>
      <button className="ml-auto p-1 rounded-full hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
