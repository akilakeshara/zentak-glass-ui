import React from 'react';
import GlassButton from './GlassButton';
import GlassBadge from './GlassBadge';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function GlassPricing({ className = '' }) {
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 py-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:gap-10">
        
        {/* Basic Tier */}
        <div className="flex flex-col p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] hover:bg-white/10 transition-colors duration-300">
          <h3 className="text-xl font-bold text-white/90 mb-2">Basic</h3>
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white tracking-tight">$9</span>
            <span className="text-white/50 font-medium">/mo</span>
          </div>
          <p className="text-white/60 text-sm mb-6 pb-6 border-b border-white/10 leading-relaxed">
            Perfect for starting small and personal projects.
          </p>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <CheckIcon /> 1 Project
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <CheckIcon /> 5GB Storage
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <CheckIcon /> Basic Analytics
            </li>
            <li className="flex items-center gap-3 text-white/40 text-sm">
              <svg className="w-5 h-5 text-white/20 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> Custom Domain
            </li>
          </ul>
          <GlassButton className="w-full justify-center text-sm py-2.5 opacity-80 hover:opacity-100">Get Started</GlassButton>
        </div>

        {/* Pro Tier (Middle) */}
        <div className="relative flex flex-col p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-fuchsia-500/30 shadow-[0_8px_32px_0_rgba(217,70,239,0.15)] md:scale-105 z-10 transition-transform duration-300 hover:scale-110">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <GlassBadge variant="fuchsia" className="px-4 py-1 shadow-lg shadow-fuchsia-500/20 text-xs uppercase font-bold tracking-widest border-fuchsia-400/50">Most Popular</GlassBadge>
          </div>
          <h3 className="text-2xl font-bold text-fuchsia-300 mb-2 mt-2 tracking-wide">Pro</h3>
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-tight">$29</span>
            <span className="text-white/50 font-medium">/mo</span>
          </div>
          <p className="text-white/70 text-sm mb-6 pb-6 border-b border-white/20 leading-relaxed">
            Ideal for growing teams and professionals.
          </p>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-white/95 text-sm font-medium">
              <CheckIcon /> Unlimited Projects
            </li>
            <li className="flex items-center gap-3 text-white/95 text-sm font-medium">
              <CheckIcon /> 50GB Storage
            </li>
            <li className="flex items-center gap-3 text-white/95 text-sm font-medium">
              <CheckIcon /> Advanced Analytics
            </li>
            <li className="flex items-center gap-3 text-white/95 text-sm font-medium">
              <CheckIcon /> Custom Domain
            </li>
          </ul>
          <button className="relative overflow-hidden w-full px-8 py-3 rounded-2xl font-semibold text-white tracking-wide bg-gradient-to-r from-fuchsia-600/80 to-indigo-600/80 backdrop-blur-xl border border-fuchsia-500/50 shadow-[0_8px_32px_0_rgba(217,70,239,0.3)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(217,70,239,0.5)] active:scale-95 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <span className="relative z-10">Start Free Trial</span>
          </button>
        </div>

        {/* Enterprise Tier */}
        <div className="flex flex-col p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] hover:bg-white/10 transition-colors duration-300">
          <h3 className="text-xl font-bold text-white/90 mb-2">Enterprise</h3>
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white tracking-tight">$99</span>
            <span className="text-white/50 font-medium">/mo</span>
          </div>
          <p className="text-white/60 text-sm mb-6 pb-6 border-b border-white/10 leading-relaxed">
            Everything you need for large scale apps.
          </p>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <CheckIcon /> Unlimited Projects
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <CheckIcon /> 500GB Storage
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <CheckIcon /> Real-time Analytics
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm">
              <CheckIcon /> 24/7 Dedicated Support
            </li>
          </ul>
          <GlassButton className="w-full justify-center text-sm py-2.5 opacity-80 hover:opacity-100">Contact Sales</GlassButton>
        </div>

      </div>
    </div>
  );
}
