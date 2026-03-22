import React, { useRef } from 'react';
import './style.css';

const MagneticButton = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = (event) => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    text.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    button.style.transform = 'translate(0px, 0px)';
    text.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div className="magnetic-demo-wrapper">
      <div className="magnetic-demo-content">
        <div className="magnetic-glass-showcase">
          <h2>Pro Magnetic Button</h2>
          <p>Hover over the button to feel the pull.</p>

          <button
            type="button"
            className="magnetic-btn"
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <span className="magnetic-btn-text" ref={textRef}>
              <span className="magnetic-bolt" aria-hidden="true">⚡</span>
              Explore Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagneticButton;