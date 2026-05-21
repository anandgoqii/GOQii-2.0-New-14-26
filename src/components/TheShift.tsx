import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, User, Heart, ShieldAlert, ShieldCheck } from 'lucide-react';

const TRANSFORMATION_CASE = {
  narrative: 'Restoring Metabolic Vitality',
  description: 'How continuous biological telemetry and coach-supported behavioral reconditioning shifted a 48-year-old patient from chronic pre-diabetic trajectory to thriving longevity.',
  timeline: [
    { label: 'Baseline Biomarkers', date: 'Month 00' },
    { label: 'Circadian Integration', date: 'Month 02' },
    { label: 'Metabolic Stabilization', date: 'Month 06' },
  ],
  legacy: {
    title: 'Reactive Sick-Care Model',
    subtitle: 'Episodic, Fragmented Interventions',
    consequence: 'Patient tracks blood biomarkers once a year. Spiky metabolic variance goes unnoticed. Silent endothelial inflammation rises, leading to pharmaceutical dependency.',
    metrics: [
      { label: 'Average HbA1c', value: '6.2%' },
      { label: 'Heart Rate Var (HRV)', value: '28ms' },
      { label: 'Sleep Efficiency', value: '71%' },
      { label: 'Biological Age', value: '+4.5 Years' }
    ]
  },
  livingOS: {
    title: 'The Continuous Living OS',
    subtitle: 'A decade of neurocoded guidance',
    consequence: 'Continuous cellular oversight alerts clinical twins before damage occurs. Micro-nudges dynamically reset physical behavior. Biometrics restore to youthful homeostasis.',
    metrics: [
      { label: 'Average HbA1c', value: '5.3%' },
      { label: 'Heart Rate Var (HRV)', value: '54ms' },
      { label: 'Sleep Efficiency', value: '89%' },
      { label: 'Biological Age', value: '-3.2 Years' }
    ]
  }
};

export const TheShift = () => {
  return (
    <section id="the-shift" className="py-24 md:py-32 bg-white dark:bg-[#070d19] border-t border-slate-200 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Subheader */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            PARADIGM RESTORATION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-slate-900 dark:text-white tracking-[-0.03em] leading-tight mb-4">
            From Episodic Intervention <br />
            to <span className="text-emerald-500 dark:text-emerald-400 font-light italic">Continuous Regeneration</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            The prevailing medical architecture reacts too late. Healthcare today waits for cellular damage to materialize. 
            GOQii 2.0 alters this trajectory entirely, transforming care from high-cost sick repair into continuous, proactive vitality.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Side A: Reactive Care - Red Alert warning tones */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-[#fcf9f7] dark:bg-[#120f13] border border-[#f5eae3]/60 dark:border-red-500/5 relative overflow-hidden group">
            
            <div>
              <div className="flex items-center justify-between border-b border-[#eadecf] dark:border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-500" />
                  <span className="text-[11px] font-mono tracking-wider font-bold text-[#a75d50] uppercase">
                    TRADITIONAL MEDICINE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold">
                  EPISODIC PATTERN
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-2">
                {TRANSFORMATION_CASE.legacy.title}
              </h3>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                {TRANSFORMATION_CASE.legacy.subtitle}
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-lg">
                {TRANSFORMATION_CASE.legacy.consequence}
              </p>
            </div>

            {/* Metrics grid - Legacy */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#eadecf] dark:border-white/5 pt-6 mt-4">
              {TRANSFORMATION_CASE.legacy.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/60 dark:bg-black/30 p-4 rounded-2xl border border-[#ede3d5]/40 dark:border-white/5 text-left">
                  <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                    {m.label}
                  </div>
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-200 mt-1 tracking-tight">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Side B: Living OS Care - Emerald Vitality tones */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-emerald-500/[0.02] dark:bg-[#091020] border border-emerald-500/15 dark:border-emerald-500/10 relative overflow-hidden group">
            
            {/* Subtle glow edge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-emerald-500/10 dark:border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="text-[11px] font-mono tracking-wider font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    GOQII OS DIRECTION
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold tracking-wider uppercase font-mono">
                  ACTIVE PREVENTIVE
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                {TRANSFORMATION_CASE.livingOS.title}
              </h3>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6">
                {TRANSFORMATION_CASE.livingOS.subtitle}
              </p>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-lg">
                {TRANSFORMATION_CASE.livingOS.consequence}
              </p>
            </div>

            {/* Metrics grid - Living OS */}
            <div className="grid grid-cols-2 gap-4 border-t border-emerald-500/10 dark:border-white/5 pt-6 mt-4">
              {TRANSFORMATION_CASE.livingOS.metrics.map((m, idx) => (
                <div key={idx} className="bg-white dark:bg-[#070d19] p-4 rounded-2xl border border-emerald-500/10 dark:border-white/5 text-left shadow-sm shadow-emerald-500/[0.01]">
                  <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                    {m.label}
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1 tracking-tight">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Narrative Flow - Editorial Transformation Details */}
        <div className="mt-16 p-6 md:p-8 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200/50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 rounded-full">
              <User className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 lowercase tracking-wider uppercase leading-none">CASE PROFILE</div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{TRANSFORMATION_CASE.narrative}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-xl">
                {TRANSFORMATION_CASE.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-tight text-slate-400 uppercase">
            <span>Progress: Stable Homeostasis Achieved</span>
          </div>
        </div>

      </div>
    </section>
  );
};
