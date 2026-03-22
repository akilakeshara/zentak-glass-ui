import React, { useState } from 'react';
import './style.css';

export default function GlassSidebar({ className = '' }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3" />
        </svg>
      ),
    },
    {
      name: 'Analytics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 20V10m5 10V4m5 16v-7" />
        </svg>
      ),
    },
    {
      name: 'Projects',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      name: 'Messages',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8m-8 4h5m7 5l-3-3H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v12z" />
        </svg>
      ),
    },
    {
      name: 'Settings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100 6 3 3 0 000-6zm0-6v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.41-1.41M7.05 7.05 5.64 5.64m12.72 0-1.41 1.41M7.05 16.95l-1.41 1.41" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`glass-sidebar-wrapper ${className}`}>
      <nav className="glass-sidebar">
        <div className="brand">
          <div className="logo-box">Z</div>
          <h2>ZENTAK UI</h2>
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
              onClick={() => setActiveItem(item.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveItem(item.name);
              }}
              role="button"
              tabIndex={0}
            >
              <span className="icon" aria-hidden="true">{item.icon}</span>
              <span className="text">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
