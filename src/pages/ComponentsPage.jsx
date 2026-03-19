import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import GlassButton from '../components/ui/GlassButton';
import GlassInput from '../components/ui/GlassInput';
import GlassProfile from '../components/ui/GlassProfile';
import GlassToggle from '../components/ui/GlassToggle';
import GlassBadge from '../components/ui/GlassBadge';
import GlassToast from '../components/ui/GlassToast';
import CodeViewerModal from '../components/ui/CodeViewerModal';

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
