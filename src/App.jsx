import React from 'react';
import NavBar from './components/ui/NavBar';
import ComponentsPage from './pages/ComponentsPage';

function App() {
  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#070b16]">
      {/* Cohesive atmospheric base gradient for a cleaner glass look */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_8%_8%,rgba(34,211,238,0.16)_0%,rgba(7,11,22,0)_44%),radial-gradient(95%_95%_at_88%_18%,rgba(217,70,239,0.18)_0%,rgba(7,11,22,0)_50%),linear-gradient(145deg,#070b16_0%,#0a1020_46%,#141331_100%)]"></div>

      {/* Floating glow blobs to strengthen the glass refraction feel */}
      <div className="absolute top-[14%] left-[12%] w-[30rem] h-[30rem] bg-cyan-500/22 rounded-full mix-blend-screen filter blur-[165px] opacity-52 animate-blob pointer-events-none"></div>
      <div className="absolute top-[10%] right-[8%] w-[28rem] h-[28rem] bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-[165px] opacity-48 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[36%] w-[26rem] h-[26rem] bg-indigo-500/22 rounded-full mix-blend-screen filter blur-[165px] opacity-44 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Subtle edge vignette to keep focus on components */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(140%_120%_at_50%_50%,rgba(0,0,0,0)_45%,rgba(2,6,16,0.45)_100%)]"></div>

      <NavBar />

      <div className="pt-16 relative z-10">
        <ComponentsPage />
      </div>
    </main>
  );
}

export default App;
