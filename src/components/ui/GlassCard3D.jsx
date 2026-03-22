import React, { useRef } from 'react';

export default function GlassCard3D() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const xAxis = (centerX - e.clientX) / 18;
    const yAxis = (e.clientY - centerY) / 18;

    cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.5s ease';
    cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'none';
  };

  return (
    <div
      className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden rounded-3xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="pointer-events-none absolute inset-0 blur-[90px]" aria-hidden="true">
        <div className="absolute top-[2%] left-[10%] h-[240px] w-[240px] rounded-full bg-[#ff007a] animate-orb-drift"></div>
        <div className="absolute -bottom-[6%] right-[8%] h-[280px] w-[280px] rounded-full bg-[#7000ff] animate-orb-drift animation-delay-2000"></div>
        <div className="absolute top-[32%] left-[46%] h-[210px] w-[210px] rounded-full bg-[#00e5ff] animate-orb-drift animation-delay-4000"></div>
      </div>

      <div className="relative z-10 [perspective:1000px]">
        <div
          className="w-[min(380px,85vw)] rounded-[24px] border border-white/20 bg-white/5 p-10 shadow-[0_30px_50px_rgba(0,0,0,0.3)] backdrop-blur-[25px] [transform-style:preserve-3d] transition-transform duration-100 ease-out"
          ref={cardRef}
        >
          <div className="text-center text-white [transform:translateZ(50px)]">
            <div className="mb-5 text-[50px] [text-shadow:0_0_20px_rgba(255,255,255,0.5)]">✨</div>
            <h2 className="mb-4 text-[28px] tracking-wide">Pro UI Design</h2>
            <p className="mb-8 text-sm leading-relaxed text-white/75">
              Experience the next level of interactive 3D Glassmorphism with smooth animations.
            </p>
            <button className="cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff007a] to-[#7000ff] px-8 py-3 text-base font-semibold text-white shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all duration-300 [transform:translateZ(20px)] hover:shadow-[0_0_30px_rgba(255,0,122,0.8)] hover:[transform:translateZ(30px)_scale(1.05)]">
              Explore Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
