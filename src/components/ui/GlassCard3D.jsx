import React, { useRef } from 'react';

export default function GlassCard3D() {
  const stageRef = useRef(null);
  const cardRef = useRef(null);

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const handleMouseMove = (e) => {
    if (!cardRef.current || !stageRef.current) return;

    const rect = stageRef.current.getBoundingClientRect();
    const relativeX = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    const relativeY = clamp((e.clientY - rect.top) / rect.height, 0, 1);

    // Full showcase area mapping with stronger motion so the effect is clearly visible.
    const rotateY = (0.5 - relativeX) * 26;
    const rotateX = (relativeY - 0.5) * 18;
    const shiftX = (relativeX - 0.5) * 20;
    const shiftY = (relativeY - 0.5) * 12;

    cardRef.current.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
    cardRef.current.style.transform = 'translate3d(0px, 0px, 0) rotateY(0deg) rotateX(0deg)';
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.08s linear';
  };

  return (
    <div
      ref={stageRef}
      className="relative w-full h-full min-h-[460px] flex items-center justify-center overflow-hidden rounded-3xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative z-10 [perspective:1000px]">
        <div
          className="w-[min(420px,86vw)] rounded-[24px] border border-white/20 bg-white/5 p-10 shadow-[0_30px_50px_rgba(0,0,0,0.3)] backdrop-blur-[25px] [transform-style:preserve-3d] transition-transform duration-100 ease-out will-change-transform"
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
