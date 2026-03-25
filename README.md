# Zentak Glass UI 💎

[![NPM Version](https://img.shields.io/npm/v/zentak-glass-ui.svg?cacheBus=1)](https://www.npmjs.com/package/zentak-glass-ui)
[![NPM Downloads](https://img.shields.io/npm/dt/zentak-glass-ui.svg?cacheBus=1)](https://www.npmjs.com/package/zentak-glass-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern, highly customizable glassmorphism UI library built with React and Tailwind CSS. Elevate your next dashboard or client project with stunning, semi-transparent components equipped with smooth transitions and premium aesthetics.

## ✨ What's New (v1.0.4)

- **NEW Component**: Added `HolographicCard` ✨ — A stunningly realistic, interactive 3D Visa Platinum card component featuring a double-sided flip animation.
- Includes a premium icy silver/platinum multi-layered glare that reacts dynamically to your mouse movement across its glassmorphic surface.
- Features highly realistic dual-sided details including a beautiful SVG EMV chip, magnetic stripe, secure hologram sticker, and signature panel.
- Polished existing glass background theme with softer glow and smoother motion.
- Upgraded `GlassSidebar` with expandable hover navigation styling.
- Added `MagneticButton` and `GlassCard3D` with advanced pointer-driven motions.

## 🌐 Live Demo

Check out the live interactive playground to view and interact with all components:  
**[https://zentak-glass-ui.netlify.app](https://zentak-glass-ui.netlify.app)**

## 📦 Installation

Install the package via npm:

```bash
npm install zentak-glass-ui
```

If you want to lock to the latest published version:

```bash
npm install zentak-glass-ui@1.0.4
```

Notes:
- This library relies on Tailwind CSS. Ensure Tailwind is installed and configured.
- `react` and `react-dom` are peer dependencies.

## 🚀 Quick Start

Import any component and use it directly within your React application. The components are fully responsive right out of the box.

```jsx
import React from 'react';
import { GlassButton } from 'zentak-glass-ui';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-fuchsia-900 p-10 flex items-center justify-center">
      <GlassButton onClick={() => alert('Clicked!')}>
        Click Me ✨
      </GlassButton>
    </div>
  );
}

export default App;
```

## 🧩 Available Components

### Core Elements
- **GlassButton** — Premium interactive buttons with hover glow effects.
- **GlassInput** — Semi-transparent text fields with modern focus rings.
- **GlassToggle** — Smoothly animated toggle switches.
- **GlassBadge** — Dynamic status badges available in multiple semantic colors.
- **GlassToast** — Sleek notification and alert popups.
- **GlassProfile** — User identity cards with gradient avatars.
- **GlassCard** — Responsive layout containers featuring strong backdrop blurs.

### Complex UI Blocks
- **HolographicCard** ✨ — Ultra-realistic, interactive 3D Visa card with a full double-sided flip animation and dynamic metallic reflection glare.
- **GlassLoginForm** — A fully designed, ready-to-use login panel with input handling layout.
- **PasswordInput** — Advanced password field with real-time strength validation, caps lock detection, and live password requirements checklist.
- **GlassSidebar Navigation** — A glassy vertical dashboard sidebar with expandable hover behavior and active layout states.
- **GlassPricing Cards** — A stunning 3-tier pricing table highlighting an emphasized 'Pro' focal tier.
- **GlassCard3D** — Interactive 3D glass card with full-area mouse movement response.
- **MagneticButton** — High-impact magnetic CTA with parallax text and neon border motion.

## 🛠️ Development

Run the project locally:

```bash
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## 🔗 Package

- NPM: **[https://www.npmjs.com/package/zentak-glass-ui](https://www.npmjs.com/package/zentak-glass-ui)**
- Current release: **1.0.4**

## 📄 License

This project is open-source and available under the MIT License.

---
<p align="center">
  Crafted with ❤️ by Akila Keshara @ Zentak Solutions
</p>
