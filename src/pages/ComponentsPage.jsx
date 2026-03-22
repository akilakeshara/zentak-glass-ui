import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import GlassButton from '../components/ui/GlassButton';
import GlassInput from '../components/ui/GlassInput';
import GlassProfile from '../components/ui/GlassProfile';
import GlassToggle from '../components/ui/GlassToggle';
import GlassBadge from '../components/ui/GlassBadge';
import GlassToast from '../components/ui/GlassToast';
import CodeViewerModal from '../components/ui/CodeViewerModal';
import GlassLoginForm from '../components/ui/GlassLoginForm';
import GlassSidebar from '../components/ui/GlassSidebar';
import glassSidebarCode from '../components/ui/GlassSidebar.jsx?raw';
import GlassPricing from '../components/ui/GlassPricing';

// --- Code Strings ---
const codeStrings = {
  button: `import React from 'react';

export default function GlassButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={\`
        relative overflow-hidden
        px-8 py-3 rounded-2xl
        font-semibold text-white tracking-wide
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        transition-all duration-300 ease-out
        hover:bg-white/20 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)]
        active:scale-95 active:bg-white/10
        \${className}
      \`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}`,
  input: `import React from 'react';

export default function GlassInput({ type = "text", placeholder, className = '', ...props }) {
  return (
    <div className="relative w-full">
      <input 
        type={type} 
        placeholder={placeholder}
        className={\`
          w-full px-4 py-3 rounded-xl
          bg-white/5 border border-white/20
          text-white placeholder-white/40
          backdrop-blur-md transition-all duration-300
          focus:outline-none focus:bg-white/10 focus:border-white/40
          focus:ring-2 focus:ring-fuchsia-500/30
          shadow-inner
          \${className}
        \`}
        {...props}
      />
    </div>
  );
}`,
  profile: `import React from 'react';

export default function GlassProfile({ name, role, avatarUrl, className = '' }) {
  return (
    <div className={\`
      flex items-center gap-4 p-4 rounded-2xl
      bg-white/5 border border-white/10
      backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]
      hover:bg-white/10 transition-colors duration-300
      w-full max-w-[280px]
      \${className}
    \`}>
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
}`,
  toggle: `import React, { useState } from 'react';

export default function GlassToggle({ initialState = false, onChange, className = '' }) {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) onChange(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={\`
        relative w-14 h-8 rounded-full p-1 
        border border-white/20 shadow-inner
        transition-colors duration-300 ease-in-out
        flex items-center backdrop-blur-md
        \${isOn ? 'bg-fuchsia-500/80 shadow-fuchsia-500/40' : 'bg-white/5'}
        \${className}
      \`}
      aria-pressed={isOn}
    >
      <div 
        className={\`
          w-6 h-6 rounded-full shadow-md
          transition-all duration-300 ease-in-out transform
          border
          \${isOn ? 'translate-x-6 bg-white border-fuchsia-200' : 'translate-x-0 bg-white/70 border-white/30 backdrop-blur-sm'}
        \`}
      />
    </button>
  );
}`,
  badge: `import React from 'react';

export default function GlassBadge({ children, variant = "emerald", className = '' }) {
  const variants = {
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    fuchsia: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    white: 'bg-white/10 text-white border-white/20'
  };

  return (
    <span className={\`
      px-3 py-1 rounded-full text-sm font-medium tracking-wide
      border backdrop-blur-md shadow-sm
      transition-colors duration-200
      \${variants[variant] || variants.white}
      \${className}
    \`}>
      {children}
    </span>
  );
}`,
  toast: `import React from 'react';

export default function GlassToast({ title, description, icon, className = '' }) {
  return (
    <div className={\`
      w-full max-w-sm p-4 rounded-2xl
      bg-white/10 backdrop-blur-md
      border border-white/20
      shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]
      flex gap-4 items-start
      animate-in slide-in-from-bottom-5 duration-300 fade-in
      \${className}
    \`}>
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
}`,
  loginForm: `import React from 'react';
import GlassInput from './GlassInput';
import GlassButton from './GlassButton';
import GlassToggle from './GlassToggle';

export default function GlassLoginForm({ className = '' }) {
  return (
    <div className={\`
      w-full max-w-md p-8 rounded-3xl
      bg-white/10 backdrop-blur-xl
      border border-white/20
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      \${className}
    \`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-white/60 mt-2 font-medium tracking-wide">
          Log in to your account
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <GlassInput 
            type="email" 
            placeholder="Email address" 
            required
          />
          <GlassInput 
            type="password" 
            placeholder="Password" 
            required
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <GlassToggle />
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
              Remember me
            </span>
          </label>
          <button 
            type="button" 
            className="text-sm font-semibold text-fuchsia-300 hover:text-fuchsia-400 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <GlassButton className="w-full justify-center text-lg mt-2">
          Sign In
        </GlassButton>

        <div className="mt-8 flex items-center justify-between">
          <span className="w-1/5 border-b border-white/20"></span>
          <span className="text-xs text-white/50 font-medium uppercase tracking-wider">
            Or continue with
          </span>
          <span className="w-1/5 border-b border-white/20"></span>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-inner group"
          >
            <svg className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            <span className="text-sm font-semibold text-white/90">Google</span>
          </button>
          
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-inner group"
          >
            <svg className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="text-sm font-semibold text-white/90">GitHub</span>
          </button>
        </div>
      </form>
    </div>
  );
}`,
  sidebar: `import React, { useState } from 'react';

export default function GlassSidebar({ className = '' }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Home', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11l1.293 1.293a1 1 0 011.414 0l.707.707M19 10v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { name: 'Dashboard', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
    { name: 'Projects', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )},
    { name: 'Analytics', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )},
    { name: 'Settings', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
  ];

  return (
    <div className={\`
      flex flex-col h-full w-64 p-5 rounded-3xl
      bg-white/10 backdrop-blur-xl border border-white/20
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      \${className}
    \`}>
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-2 mb-8 mt-2 cursor-pointer group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/20 border border-white/20 group-hover:scale-105 transition-transform duration-300">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
          ZENTAK
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={\`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-300 font-medium
                \${isActive 
                  ? 'bg-gradient-to-r from-white/20 to-white/5 text-white shadow-inner border border-white/10' 
                  : 'text-white/60 hover:bg-white/10 hover:text-white border border-transparent'}
              \`}
            >
              <div className={\`\${isActive ? 'text-fuchsia-300' : 'text-white/50'} transition-colors duration-300\`}>
                {item.icon}
              </div>
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Bottom User Area */}
      <div className="mt-auto pt-5 border-t border-white/10">
        <div className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-white/5 transition-colors duration-300 group">
          <div className="w-10 h-10 rounded-full bg-cyan-500/30 border border-cyan-400/30 flex items-center justify-center text-cyan-50 font-bold tracking-wider shadow-inner flex-shrink-0 group-hover:border-cyan-400/50 transition-colors">
            AK
          </div>
          <div className="flex-1 min-w-0 overflow-hidden text-left">
            <p className="text-sm font-semibold text-white/90 truncate">Alex Knight</p>
            <p className="text-xs text-white/50 truncate">alex@zentak.io</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors" title="Log out">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}`,
  pricing: `import React from 'react';
import GlassButton from './GlassButton';
import GlassBadge from './GlassBadge';

export default function GlassPricing({ className = '' }) {
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className={\`w-full max-w-6xl mx-auto px-4 py-8 \${className}\`}>
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
}`
};

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleOpenModal = (title, component, code) => {
    setSelectedComponent({ title, component, code });
  };

  const handleCloseModal = () => {
    setSelectedComponent(null);
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight drop-shadow-sm mb-4">
            Explore Components
          </h1>
          <p className="text-lg text-white/70 max-w-2xl drop-shadow-sm">
            A collection of vibrant, glassmorphic UI elements built with pure Tailwind CSS and React. Click on a component to view and copy its source code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Buttons */}
          <GlassCard 
            title="Buttons" 
            className="min-h-[250px]"
            onClick={() => handleOpenModal(
              "Glass Button", 
              <GlassButton>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Submit Action
              </GlassButton>,
              codeStrings.button
            )}
          >
            <GlassButton>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Submit Action
            </GlassButton>
          </GlassCard>

          {/* Inputs */}
          <GlassCard 
            title="Inputs" 
            className="min-h-[250px]"
            onClick={() => handleOpenModal(
              "Glass Input", 
               <div className="w-full max-w-[240px]"><GlassInput placeholder="Enter your email..." /></div>,
              codeStrings.input
            )}
          >
            <div className="w-full max-w-[240px]">
              <GlassInput placeholder="Enter your email..." disabled />
            </div>
          </GlassCard>

          {/* Profile Cards */}
          <GlassCard 
            title="Profile Cards" 
            className="min-h-[250px]"
            onClick={() => handleOpenModal(
              "Glass Profile Card", 
              <GlassProfile name="John Doe" role="Senior Developer" />,
              codeStrings.profile
            )}
          >
            <GlassProfile name="John Doe" role="Senior Developer" />
          </GlassCard>

          {/* Toggle Switches */}
          <GlassCard 
            title="Toggle Switches" 
            className="min-h-[250px]"
            onClick={() => handleOpenModal(
              "Glass Toggle", 
              <GlassToggle initialState={true} />,
              codeStrings.toggle
            )}
          >
            <GlassToggle initialState={true} />
          </GlassCard>

          {/* Badges */}
          <GlassCard 
            title="Badges" 
            className="min-h-[250px]"
            onClick={() => handleOpenModal(
              "Glass Badge", 
              <GlassBadge variant="emerald">New Status</GlassBadge>,
              codeStrings.badge
            )}
          >
            <div className="flex gap-3 flex-wrap justify-center">
              <GlassBadge variant="emerald">New</GlassBadge>
              <GlassBadge variant="blue">Verified</GlassBadge>
              <GlassBadge variant="amber">Pending</GlassBadge>
            </div>
          </GlassCard>

          {/* Notification Toasts */}
          <GlassCard 
            title="Toasts" 
            className="min-h-[250px]"
            onClick={() => handleOpenModal(
              "Glass Toast", 
              <GlassToast title="System Update" description="Your setup is complete." />,
              codeStrings.toast
            )}
          >
            <GlassToast title="System Update" description="Your setup is complete." />
          </GlassCard>

          {/* Login Form Complex Component */}
          <GlassCard 
            title="Complex Login Form" 
            className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center p-8 min-h-[500px]"
            onClick={() => handleOpenModal(
              "Glass Login Form", 
              <GlassLoginForm />,
              codeStrings.loginForm
            )}
          >
            <div className="w-full flex justify-center items-center my-4">
              <GlassLoginForm />
            </div>
          </GlassCard>

          {/* Sidebar Complex Component */}
          <GlassCard 
            title="Glass Sidebar Navigation" 
            className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center p-8 min-h-[700px] overflow-hidden"
            onClick={() => handleOpenModal(
              "Glass Sidebar", 
              <div className="h-[600px] w-72"><GlassSidebar /></div>,
              glassSidebarCode
            )}
          >
            <div className="w-full flex justify-center items-center py-4">
              <div className="h-[600px] w-72">
                <GlassSidebar />
              </div>
            </div>
          </GlassCard>

          {/* Pricing Cards Complex Component */}
          <GlassCard 
            title="Glass Pricing Section" 
            className="col-span-1 md:col-span-2 lg:col-span-3 p-8 min-h-[650px] overflow-hidden"
            onClick={() => handleOpenModal(
              "Glass Pricing Cards", 
              <div className="w-full"><GlassPricing /></div>,
              codeStrings.pricing
            )}
          >
            <div className="w-full flex justify-center items-center py-8">
              <GlassPricing />
            </div>
          </GlassCard>

        </div>
      </div>

      {/* Code Viewer Modal */}
      <CodeViewerModal 
        isOpen={!!selectedComponent} 
        onClose={handleCloseModal} 
        componentData={selectedComponent} 
      />
    </>
  );
}
