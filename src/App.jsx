import React from 'react';
import NavBar from './components/ui/NavBar';
import ComponentsPage from './pages/ComponentsPage';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 relative overflow-x-hidden font-sans">
      {/* Decorative background blurs to enhance glass effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      <NavBar />
      
      <div className="pt-16">
        <ComponentsPage />
      </div>
    </main>
  );
}

export default App;
