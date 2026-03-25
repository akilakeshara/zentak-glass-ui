import React, { useRef, useState } from 'react';
import './style.css';

const HolographicCard = () => {
  const cardRef = useRef(null);
  const frontGlareRef = useRef(null);
  const backGlareRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // 🌟 The 3D Math Magic (Mouse Tracking) 🌟
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    
    // Mouse relative position
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Card rotation amounts
    const rotateX = ((y - centerY) / centerY) * -20; 
    const rotateY = ((x - centerX) / centerX) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // 🌟 Premium Platinum/Silver Glare Effect 🌟
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
    const opacity = (Math.abs(x - centerX) + Math.abs(y - centerY)) / (centerX + centerY);
    
    const glareBackground = `
      linear-gradient(
        ${angle}deg, 
        rgba(255, 255, 255, 0) 0%, 
        rgba(255, 255, 255, 0.1) 30%, 
        rgba(140, 200, 255, 0.4) 40%, 
        rgba(255, 255, 255, 0.9) 50%, 
        rgba(200, 220, 255, 0.4) 60%, 
        rgba(255, 255, 255, 0.1) 70%, 
        rgba(255, 255, 255, 0) 100%
      )
    `;

    // Apply to front glare
    if (frontGlareRef.current) {
      frontGlareRef.current.style.background = glareBackground;
      frontGlareRef.current.style.opacity = opacity * 1.5;
    }
    
    // Apply to back glare with an inverted angle
    if (backGlareRef.current) {
      backGlareRef.current.style.background = glareBackground;
      backGlareRef.current.style.opacity = opacity * 1.5;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = `transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)`;
    
    if (frontGlareRef.current) {
      frontGlareRef.current.style.opacity = 0;
      frontGlareRef.current.style.transition = `opacity 0.5s ease`;
    }
    
    if (backGlareRef.current) {
      backGlareRef.current.style.opacity = 0;
      backGlareRef.current.style.transition = `opacity 0.5s ease`;
    }
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transition = `none`;
    if (frontGlareRef.current) frontGlareRef.current.style.transition = `none`;
    if (backGlareRef.current) backGlareRef.current.style.transition = `none`;
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="holo-wrapper group">
      {/* 3D Perspective Container */}
      <div className="holo-container">
        
        {/* The Card Tracking Area */}
        <div
          className="holo-card"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onClick={toggleFlip}
        >
          {/* Inner transform container for flip */}
          <div className={`holo-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
            
            {/* FRONT SIDE */}
            <div className="holo-card-front">
              <div className="holo-noise"></div>
              <div className="holo-glare" ref={frontGlareRef}></div>
              
              <div className="card-content">
                <div className="card-top">
                  <div className="flex items-center gap-4">
                    {/* Realistic Gold EMV Chip */}
                    <svg width="44" height="34" viewBox="0 0 44 34" fill="none" className="drop-shadow-md">
                      <rect x="0" y="0" width="44" height="34" rx="6" fill="url(#chip-grad)" />
                      <path d="M0 12 L12 12 L12 0 M32 0 L32 12 L44 12 M0 22 L12 22 L12 34 M32 34 L32 22 L44 22 M16 0 L16 34 M28 0 L28 34" stroke="#A67B27" strokeWidth="0.8" opacity="0.6"/>
                      <rect x="13" y="10" width="18" height="14" rx="2" stroke="#A67B27" strokeWidth="0.8" fill="none" opacity="0.6"/>
                      <defs>
                        <linearGradient id="chip-grad" x1="0" y1="0" x2="44" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#EAB308"/>
                          <stop offset="0.5" stopColor="#FEF08A"/>
                          <stop offset="1" stopColor="#CA8A04"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Contactless Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50 drop-shadow-md mt-1">
                      <path d="M6 7C4.5 9.5 4.5 14.5 6 17 M10.5 4.5C8 9 8 15 10.5 19.5 M15 2C11.5 7.5 11.5 16.5 15 22 M19.5 0C15 6.5 15 17.5 19.5 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-end">
                    {/* Authentic Standard Visa Logo */}
                    <svg viewBox="0 7.5 24 9" className="h-8 w-auto fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-1 mr-1">
                      <path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z"/>
                    </svg>
                    <span className="text-[10px] uppercase font-bold tracking-[2px] text-white/50">Platinum</span>
                  </div>
                </div>
                
                <div className="card-number font-mono text-xl sm:text-2xl mt-4">
                  <span>4532</span>
                  <span>****</span>
                  <span>****</span>
                  <span>8892</span>
                </div>
                
                <div className="card-bottom mt-6">
                  <div className="card-info">
                    <span className="label">Card Holder</span>
                    <span className="value text-white/95 text-shadow-sm">Akila Keshara</span>
                  </div>
                  <div className="card-info text-right">
                    <span className="label">Valid Thru</span>
                    <span className="value text-white/95 text-shadow-sm">12/28</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="holo-card-back">
              <div className="holo-noise"></div>
              <div className="holo-glare" ref={backGlareRef}></div>
              
              <div className="card-back-content">
                {/* Magnetic Stripe */}
                <div className="magnetic-stripe"></div>
                
                <div className="px-5 mt-4">
                  <div className="flex justify-between items-start mb-2 text-[8px] sm:text-[9px] text-white/50 leading-tight">
                    <p className="max-w-[75%]">
                      This card is issued by Zentak Bank pursuant to a license by Visa International. Use of this card is subject to the cardholder agreement.
                      If found, please return to any Zentak Bank branch.
                    </p>
                    <div className="flex flex-col text-right">
                      <span className="font-bold text-white/70">ZENTAK BANK INC.</span>
                      <span>Customer Service: +1-800-000-0000</span>
                      <span>www.zentak.io</span>
                    </div>
                  </div>
                  
                  {/* Signature and CVV Panel */}
                  <div className="flex items-center w-full gap-2 mt-3">
                    <div className="signature-panel flex-1 h-12 bg-white/80 rounded flex items-center px-4 relative overflow-hidden">
                      {/* Signature Lines Background */}
                      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
                      <span className="font-['Brush_Script_MT',cursive] italic text-2xl text-slate-800 relative z-10 -rotate-3 ml-2">Akila K</span>
                    </div>
                    <div className="cvv-panel w-14 h-10 bg-white shadow-inner rounded flex items-center justify-center">
                      <span className="font-mono text-slate-900 font-bold tracking-widest text-sm">492</span>
                    </div>
                  </div>
                  
                  {/* Hologram Box & Network Logos */}
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex gap-3">
                      <div className="hologram-sticker w-12 h-8 rounded shrink-0 relative overflow-hidden border border-white/20 flex items-center justify-center">
                         {/* Mini hologram effect inside */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/40 via-fuchsia-400/50 to-amber-300/40 animate-pulse"></div>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" className="relative z-10">
                           <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                         </svg>
                      </div>
                      <div className="flex flex-col justify-end text-[10px] text-white/50 font-medium">
                        <span>PLUS Network</span>
                        <span>Global ATM access</span>
                      </div>
                    </div>
                    
                    <div className="text-[10px] text-white/30 tracking-widest font-mono">
                      A2 94038 920 183
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Hint Text */}
        <p className="text-white/40 text-xs text-center mt-8 tracking-widest uppercase font-semibold animate-pulse absolute -bottom-10 left-1/2 -translate-x-1/2 w-full">
          Click the card to flip
        </p>

      </div>
    </div>
  );
};

export default HolographicCard;
