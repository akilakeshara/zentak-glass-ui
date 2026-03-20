import React, { useState, useEffect } from 'react';

export default function CodeViewerModal({ isOpen, onClose, componentData }) {
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock body scroll when open and reset tab
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('preview');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !componentData) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(componentData.code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-black/40 backdrop-blur-md opacity-100 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-white/10 border border-white/20 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {componentData.title}
            </h2>
            <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/10">
              <button 
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'preview' ? 'bg-white/20 text-white shadow' : 'text-white/60 hover:text-white'}`}
              >
                Preview
              </button>
              <button 
                onClick={() => setActiveTab('code')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'code' ? 'bg-white/20 text-white shadow' : 'text-white/60 hover:text-white'}`}
              >
                Code
              </button>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col flex-1 overflow-hidden min-h-[500px]">
          
          {/* Live Preview Area */}
          <div className={`flex-1 p-8 items-center justify-center bg-transparent overflow-auto custom-scrollbar ${activeTab === 'preview' ? 'flex' : 'hidden'}`}>
            <div className="w-full h-full flex items-center justify-center">
              {componentData.component}
            </div>
          </div>

          {/* Raw Code Area */}
          <div className={`flex-1 w-full relative group flex-col bg-[#0d1117] backdrop-blur-xl ${activeTab === 'code' ? 'flex' : 'hidden'}`}>
            {/* Copy Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCopy}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${isCopied 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10'
                  }
                `}
              >
                {isCopied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Copy Code
                  </>
                )}
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed text-blue-200/90 custom-scrollbar mt-12">
              <pre>
                <code>
                  {componentData.code.trim()}
                </code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
