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
        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] whitespace-nowrap opacity-80">
          Enterprise Trust & Compliance
        </span>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 grayscale-0 opacity-100 transition-all cursor-default scale-105">
            <div className="w-5 h-5 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center border border-white/20 dark:border-slate-800">
              <span className="text-[9px] text-white dark:text-slate-900 font-black">X</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-800 dark:text-white leading-none tracking-tight">XPRIZE</span>
              <span className="text-[7px] font-semibold text-primary uppercase tracking-tighter leading-none">Healthspan Semifinalist</span>
            </div>
          </div>
          <div className="h-3 w-px bg-slate-200 dark:bg-white/10" />
          <div className="flex items-center gap-2 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider">HIPAA COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider">ISO 27001</span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider">GDPR READY</span>
          </div>
          <div className="flex items-center gap-2 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider">SOC 2 TYPE II</span>
          </div>
        </div>
      </div>
    </div>
  );
};
