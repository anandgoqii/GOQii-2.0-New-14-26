import React from 'react';

const LOGOS = [
  { name: 'XPRIZE Healthspan', url: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=100&auto=format&fit=crop' }, // Placeholder
  { name: 'HIPAA Compliant', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=100&auto=format&fit=crop' }, // Placeholder
  { name: 'ISO 27001', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=100&auto=format&fit=crop' }, // Placeholder
  { name: 'GDPR Ready', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=100&auto=format&fit=crop' }, // Placeholder
  { name: 'SOC 2', url: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=100&auto=format&fit=crop' } // Placeholder
];

export const TrustBar = () => {
  return (
    <div className="trust-bar w-full">
      {/* 
        The trust-bar class is defined in index.css with:
        height: 20px for imgs
        gap: 2.5rem
        etc.
      */}
      <div className="flex items-center gap-10 overflow-x-auto no-scrollbar py-2">
        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">
          Trusted by Fortune 500 & Global Health Organizations
        </span>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[8px] text-white font-bold">X</div>
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">XPRIZE Healthspan</span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">ISO 27001</span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">SOC 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};
