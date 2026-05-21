import React from 'react';
import { Shield, Sparkles, Check, Server, FileCheck } from 'lucide-react';

export const TrustBar = () => {
  return (
    <div className="w-full bg-slate-50/80 dark:bg-[#070d19]/80 backdrop-blur-md border-y border-slate-200/60 dark:border-white/5 py-4 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left segment - Context label */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
            ENTERPRISE TRUSTRUNTIME
          </span>
        </div>

        {/* Separator for desktop */}
        <div className="hidden lg:block h-4 w-px bg-slate-200 dark:bg-white/10" />

        {/* Compliance and Certification Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 md:gap-x-10 text-slate-500 dark:text-slate-400 text-xs font-semibold">
          
          {/* XPRIZE - Highlights of high achievement */}
          <div className="flex items-center gap-2 transition-opacity duration-300 hover:text-slate-900 dark:hover:text-white cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            <div className="flex flex-col items-start leading-[1.1]">
              <span className="text-[11px] font-bold tracking-tight text-slate-800 dark:text-slate-200">XPRIZE Healthspan</span>
              <span className="text-[8px] tracking-wide text-slate-400 dark:text-slate-500 uppercase font-bold">Semifinalist</span>
            </div>
          </div>

          <span className="h-3 w-px bg-slate-200 dark:bg-white/10" />

          {/* SOC 2 Type II */}
          <div className="flex items-center gap-1.5 transition-opacity duration-300 hover:text-slate-900 dark:hover:text-white cursor-default">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] tracking-wider uppercase font-mono text-slate-600 dark:text-slate-300">SOC 2 Type II</span>
          </div>

          <span className="h-3 w-px bg-slate-200 dark:bg-white/10" />

          {/* HIPAA Ready */}
          <div className="flex items-center gap-1.5 transition-opacity duration-300 hover:text-slate-900 dark:hover:text-white cursor-default">
            <Server className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] tracking-wider uppercase font-mono text-slate-600 dark:text-slate-300">HIPAA Ready</span>
          </div>

          <span className="h-3 w-px bg-slate-200 dark:bg-white/10" />

          {/* GDPR Compliant */}
          <div className="flex items-center gap-1.5 transition-opacity duration-300 hover:text-slate-900 dark:hover:text-white cursor-default">
            <FileCheck className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] tracking-wider uppercase font-mono text-slate-600 dark:text-slate-300">GDPR Ready</span>
          </div>

          <span className="hidden md:inline h-3 w-px bg-slate-200 dark:bg-white/10" />

          {/* ISO 27001 */}
          <div className="hidden md:flex items-center gap-1.5 transition-opacity duration-300 hover:text-slate-900 dark:hover:text-white cursor-default">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] tracking-wider uppercase font-mono text-slate-600 dark:text-slate-300">ISO 27001</span>
          </div>

        </div>

        {/* Right segment - Global Availability indicator */}
        <div className="hidden xl:flex items-center gap-2">
          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Operational SLA
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            99.99%
          </span>
        </div>

      </div>
    </div>
  );
};
