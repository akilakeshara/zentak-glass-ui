import React from 'react';
import GlassInput from './GlassInput';
import GlassButton from './GlassButton';
import GlassToggle from './GlassToggle';

export default function GlassLoginForm({ className = '' }) {
  return (
    <div className={`
      w-full max-w-md p-8 rounded-3xl
      bg-white/10 backdrop-blur-xl
      border border-white/20
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      ${className}
    `}>
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
}
