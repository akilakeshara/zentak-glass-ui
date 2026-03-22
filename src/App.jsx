import React from 'react';
import NavBar from './components/ui/NavBar';
import ComponentsPage from './pages/ComponentsPage';

function App() {
  return (
    <main className="min-h-screen relative isolate overflow-x-hidden font-sans bg-[linear-gradient(155deg,#070b14_0%,#121b34_34%,#1d1861_66%,#130f2f_100%)]">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(110%_85%_at_12%_4%,rgba(94,232,255,0.14)_0%,rgba(9,13,24,0)_42%),radial-gradient(95%_90%_at_88%_10%,rgba(255,56,178,0.14)_0%,rgba(9,13,24,0)_44%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(140%_120%_at_50%_50%,rgba(0,0,0,0)_45%,rgba(2,6,16,0.45)_100%)]"></div>
      </div>

      <div className="relative z-10">
        <NavBar />

        <div className="pt-16">
          <ComponentsPage />
        </div>
      </div>
    </main>
  );
}

export default App;
