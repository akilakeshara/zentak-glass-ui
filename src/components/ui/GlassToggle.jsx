import React, { useState } from 'react';

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
      className={`
        relative w-14 h-8 rounded-full p-1 
        border border-white/20 shadow-inner
        transition-colors duration-300 ease-in-out
        flex items-center backdrop-blur-md
        ${isOn ? 'bg-fuchsia-500/80 shadow-fuchsia-500/40' : 'bg-white/5'}
        ${className}
      `}
      aria-pressed={isOn}
    >
      <div 
        className={`
          w-6 h-6 rounded-full shadow-md
          transition-all duration-300 ease-in-out transform
          border
          ${isOn ? 'translate-x-6 bg-white border-fuchsia-200' : 'translate-x-0 bg-white/70 border-white/30 backdrop-blur-sm'}
        `}
      />
    </button>
  );
}
