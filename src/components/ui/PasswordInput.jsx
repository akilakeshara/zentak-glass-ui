import React, { useMemo, useState } from 'react';
import './style.css';

const EyeIcon = () => (
  <svg className="password-eye-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M2.25 12C3.92 8.94 7.42 6.75 12 6.75s8.08 2.19 9.75 5.25c-1.67 3.06-5.17 5.25-9.75 5.25S3.92 15.06 2.25 12Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="password-eye-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 3l18 18"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.73 5.08A11.58 11.58 0 0 1 12 5.01c4.58 0 8.08 2.19 9.75 5.25a11.9 11.9 0 0 1-3.19 3.67"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.58 6.58A12.44 12.44 0 0 0 2.25 12c1.67 3.06 5.17 5.25 9.75 5.25 1.97 0 3.72-.4 5.22-1.11"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getStrengthDetails = (password, strength) => {
  if (!password) return { color: '#64748b', text: 'Enter a password' };
  if (strength <= 1) return { color: '#ff4d8d', text: 'Weak Password' };
  if (strength <= 3) return { color: '#f59e0b', text: 'Good Password' };
  return { color: '#22d3ee', text: 'Strong Password' };
};

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const checks = useMemo(() => ([
    { id: 'length', label: 'At least 8 characters', met: password.length >= 8 },
    { id: 'upper', label: 'One uppercase letter', met: /[A-Z]/.test(password) },
    { id: 'number', label: 'One number', met: /[0-9]/.test(password) },
    { id: 'special', label: 'One special character', met: /[^A-Za-z0-9]/.test(password) }
  ]), [password]);

  const strength = checks.filter((item) => item.met).length;
  const activeState = getStrengthDetails(password, strength);
  const isStrong = password.length > 0 && strength === checks.length;
  const shouldFloat = isFocused || password.length > 0;

  const triggerWeakShake = () => {
    if (!password || strength >= 2) return;
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 360);
  };

  const handleCapsLockState = (event) => {
    setCapsLockOn(event.getModifierState('CapsLock'));
  };

  return (
    <div className="password-demo-wrapper">
      <div className="password-glass-showcase">
        <h2>Create Password 🔐</h2>
        <p>Live validation with modern motion feedback</p>

        <div className="password-input-container">
          <div
            className={`password-input-box ${isShaking ? 'is-shaking' : ''}`}
            style={{
              boxShadow:
                password.length > 0
                  ? `0 0 15px ${activeState.color}40, inset 0 0 10px ${activeState.color}20`
                  : '',
              borderColor: password.length > 0 ? activeState.color : 'rgba(255,255,255,0.2)'
            }}
          >
            <span className="password-lock-icon" aria-hidden="true">🔒</span>

            <label
              className={`password-floating-label ${shouldFloat ? 'is-floating' : ''}`}
              htmlFor="password-input-field"
            >
              Password
            </label>

            <input
              id="password-input-field"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                triggerWeakShake();
              }}
              onKeyUp={handleCapsLockState}
              onKeyDown={handleCapsLockState}
              aria-label="Password input"
            />

            <button
              type="button"
              className={`password-eye-icon ${showPassword ? 'is-active' : ''}`}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          <div className={`password-caps-chip ${capsLockOn ? 'is-visible' : ''}`}>
            Caps Lock is ON
          </div>

          <div className="password-strength-meter">
            <div className="password-segmented-bar" role="presentation">
              {[0, 1, 2, 3].map((index) => (
                <span
                  key={index}
                  className={`password-segment ${index < strength ? 'is-active' : ''}`}
                  style={index < strength ? { backgroundColor: activeState.color, boxShadow: `0 0 14px ${activeState.color}66` } : undefined}
                />
              ))}
            </div>

            <span className="password-strength-text" style={{ color: password.length > 0 ? activeState.color : '#94a3b8' }}>
              {activeState.text}
            </span>

            <ul className="password-checklist">
              {checks.map((item) => (
                <li key={item.id} className={item.met ? 'is-done' : ''}>
                  <span className="password-check-icon" aria-hidden="true">
                    {item.met ? '✓' : '•'}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            <div className={`password-success-badge ${isStrong ? 'is-visible' : ''}`}>
              Strong password ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;