import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LineChart, BarChart3, Activity, Heart, Calendar, CheckSquare, Sparkles } from 'lucide-react';

interface MetricCohortAnalysis {
  id: string;
  metric: string;
  title: string;
  description: string;
  cohortSize: string;
  duration: string;
  publication: string;
  chartType: 'sparkline' | 'bars' | 'reversal' | 'circadian';
  breakdown: { label: string; value: string }[];
}

const ANALYTICAL_METRICS: MetricCohortAnalysis[] = [
  {
    id: 'adherence',
    metric: '84.2%',
    title: 'Sustained Daily Program Adherence',
    description: 'While traditional wellness programs lose over 60% of participants within the first 14 days, GOQii’s proprietary behavioral neurocoding keeps patients continuously active across 90 days of intervention.',
    cohortSize: 'n = 12,450 Patients',
    duration: '12-Month Cohort Evaluation',
    publication: 'Published in Journal of Medical Internet Research (JMIR)',
    chartType: 'sparkline',
    breakdown: [
      { label: 'Day 30 Adherence', value: '89.4%' },
      { label: 'Day 90 Adherence', value: '84.2%' },
      { label: 'Standard App Baseline', value: '18.1%' }
    ]
  },
  {
    id: 'engagement',
    metric: '18.4x',
    title: 'Monthly Direct Habit Touches',
    description: 'Active habit reinforcement driven by empathetic AI Avatar concierges and human coaching. Tracks daily dietary, hydration, micro-movements, and mindful breathing loops.',
    cohortSize: 'n = 8,900 Adults',
    duration: '6-Month Longitudinal Study',
    publication: 'Enterprise Operational Analytics',
    chartType: 'bars',
    breakdown: [
      { label: 'Avg Weekly Touches', value: '4.6x' },
      { label: 'Active Coach Interactions', value: '12.2/Mo' },
      { label: 'Daily Logging Complete', value: '91.8%' }
    ]
  },
  {
    id: 'reversal',
    metric: '72.5%',
    title: 'Clinical HbA1c & Metabolic Reversal',
    description: 'Restoration of metabolic homeostatic balance. Patients previously labeled as pre-diabetic or insulin-resistant successfully transitioned into non-clinical reference zones.',
    cohortSize: 'n = 4,200 Prediabetics',
    duration: '180-Day Directed Trial',
    publication: 'CDSCO Clinical Registry Submission',
    chartType: 'reversal',
    breakdown: [
      { label: 'HbA1c Drop Rate', value: '-0.9%' },
      { label: 'Triglycerides Shift', value: '-18.4%' },
      { label: 'Fasting Glucose Shift', value: '-14.6%' }
    ]
  },
  {
    id: 'circadian',
    metric: '+22.4%',
    title: 'Autonomic Circadian Rest Overhaul',
    description: 'Direct measurements of improved sleep architecture, rapid eye movement (REM) ratios, deep sleep restoration, and heart rate variability (HRV) stabilization.',
    cohortSize: 'n = 6,120 Sleep Tracked Users',
    duration: '90-Day Telemetry Tracking',
    publication: 'Cardiorenal Research Consortium Study',
    chartType: 'circadian',
    breakdown: [
      { label: 'Deep Sleep Ratio', value: '+18.2%' },
      { label: 'Median HRV Elevate', value: '+14.1ms' },
      { label: 'Sleep Continuity SLA', value: '94.2%' }
    ]
  }
];

export const ClinicalOutcomes = () => {
  const [activeMetricId, setActiveMetricId] = useState<string>('reversal');
  const activeMetric = ANALYTICAL_METRICS.find(m => m.id === activeMetricId) || ANALYTICAL_METRICS[2];

  // Helper to render accurate and restrained custom inline SVG charts representing medical statistics
  const renderMicroChart = (type: string) => {
    switch (type) {
      case 'sparkline':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 160">
            {/* Grid baseline */}
            <line x1="10" y1="130" x2="380" y2="130" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" strokeDasharray="4" />
            <line x1="10" y1="80" x2="380" y2="80" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" strokeDasharray="4" />
            <line x1="10" y1="30" x2="380" y2="30" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" strokeDasharray="4" />
            
            {/* Standard App degradation curve */}
            <path
              d="M 10 30 Q 80 120, 160 128 T 380 129"
              fill="none"
              stroke="#cbd5e1"
              className="dark:stroke-slate-700"
              strokeWidth="1.5"
              strokeDasharray="4"
            />
            <text x="110" y="142" className="text-[9px] font-bold text-slate-400 font-mono">LEGACY BASLINE DROP</text>

            {/* GOQii continuous progress line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              d="M 10 30 C 100 28, 200 42, 300 45 T 380 48"
              fill="none"
              stroke="#10B981"
              strokeWidth="3.5"
            />
            
            {/* Nodes */}
            <circle cx="10" cy="30" r="5" fill="#10B981" />
            <circle cx="380" cy="48" r="5" fill="#10B981" />

            <text x="5" y="20" className="text-[9px] font-bold fill-slate-800 dark:fill-slate-300 font-mono">Day 0: 100%</text>
            <text x="340" y="38" className="text-[10px] font-bold fill-emerald-500 font-mono">Day 90: 84.2%</text>
          </svg>
        );

      case 'bars':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 160">
            {/* Grid baseline */}
            <line x1="10" y1="130" x2="380" y2="130" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" />
            
            {/* Custom bars (Week index) */}
            <g>
              {/* Traditional (grey) vs GOQii (emerald) */}
              {/* Week 1 */}
              <rect x="30" y="70" width="16" height="60" fill="#cbd5e1" className="dark:fill-slate-700" rx="3" />
              <rect x="50" y="40" width="16" height="90" fill="#10B981" rx="3" />
              
              {/* Week 4 */}
              <rect x="120" y="90" width="16" height="40" fill="#cbd5e1" className="dark:fill-slate-700" rx="3" />
              <rect x="140" y="30" width="16" height="100" fill="#10B981" rx="3" />

              {/* Week 8 */}
              <rect x="210" y="110" width="16" height="20" fill="#cbd5e1" className="dark:fill-slate-700" rx="3" />
              <rect x="230" y="20" width="16" height="110" fill="#10B981" rx="3" />

              {/* Week 12 */}
              <rect x="300" y="120" width="16" height="10" fill="#cbd5e1" className="dark:fill-slate-700" rx="3" />
              <rect x="320" y="15" width="16" height="115" fill="#10B981" rx="3" />
            </g>

            <text x="40" y="145" className="text-[9px] font-semibold fill-slate-400 font-mono">Wk 1</text>
            <text x="130" y="145" className="text-[9px] font-semibold fill-slate-400 font-mono">Wk 4</text>
            <text x="220" y="145" className="text-[9px] font-semibold fill-slate-400 font-mono">Wk 8</text>
            <text x="310" y="145" className="text-[9px] font-semibold fill-slate-400 font-mono">Wk 12</text>
          </svg>
        );

      case 'circadian':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 160">
            {/* Grid baseline */}
            <line x1="10" y1="130" x2="380" y2="130" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" />
            
            {/* Sine wave tracing circadian rhythms restoration */}
            <path
              d="M 10 80 Q 55 20, 100 80 T 190 80 T 280 80 T 380 80"
              fill="none"
              stroke="rgba(16, 185, 129, 0.15)"
              strokeWidth="5"
            />
            {/* Actual recovered coherent path */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
              d="M 10 80 Q 55 35, 100 80 T 190 80 T 280 80 T 380 80"
              fill="none"
              stroke="#10B981"
              strokeWidth="3.5"
            />

            {/* Reference nodes representing deep sleep phases */}
            <circle cx="55" cy="35" r="4" fill="#06B6D4" />
            <circle cx="235" cy="125" r="4" fill="#3B82F6" />
            <text x="65" y="32" className="text-[9px] font-bold fill-slate-700 dark:fill-slate-300 font-mono">Deep Rest Cohort Peak</text>
            <text x="245" y="129" className="text-[9px] font-bold fill-slate-400 font-mono">SAD Baseline</text>
          </svg>
        );

      case 'reversal':
      default:
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 160">
            {/* Grid baseline */}
            <line x1="10" y1="140" x2="380" y2="140" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" />
            <line x1="10" y1="80" x2="380" y2="80" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" strokeDasharray="3" />
            <line x1="10" y1="20" x2="380" y2="20" stroke="rgba(0,0,0,0.06)" className="dark:stroke-white/5" strokeWidth="1" />

            {/* Clinical threshold limit indicator */}
            <text x="15" y="75" className="text-[8px] font-bold fill-red-400 tracking-wider">DIABETIC REFERENCE THRESHOLD (6.0%+)</text>
            
            {/* Cohort downward regression line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
              d="M 10 40 Q 120 42, 220 90 T 380 115"
              fill="none"
              stroke="#10B981"
              strokeWidth="4"
            />

            <circle cx="10" cy="40" r="5" fill="#EF4444" />
            <circle cx="380" cy="115" r="5" fill="#10B981" />

            <text x="18" y="44" className="text-[10px] font-bold fill-slate-800 dark:fill-slate-300 font-mono">Month 0: 6.2% HbA1c (High Variant)</text>
            <text x="270" y="105" className="text-[10px] font-bold fill-emerald-500 font-mono">Month 6: 5.3% HbA1c (Normal)</text>
          </svg>
        );
    }
  };

  return (
    <section id="clinical-outcomes" className="py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#070d19] border-t border-slate-200 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.008] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] tracking-[0.25em] uppercase mb-4">
            <Activity className="w-3.5 h-3.5" />
            EVIDENCE-BACKED HEALTH INTELLIGENCE
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-slate-900 dark:text-white tracking-[-0.03em] leading-tight mb-4">
                Clinical Outcomes, <span className="text-emerald-500 dark:text-emerald-400 font-light italic">Quantified</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl">
                We believe in rigorous scientific efficacy. GOQii healthcare interventions are modeled against deep longitudinal cohorts, delivering proven behavioral calibration and biological restoration.
              </p>
            </div>

            {/* Scientific Cohort Statement */}
            <div className="shrink-0 flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-semibold px-4 py-2 border border-slate-200/50 dark:border-white/5 bg-white dark:bg-slate-950/40 rounded-xl">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span>Cohort Aggregate: 31,670 Monitored Patient Years</span>
            </div>
          </div>
        </div>

        {/* Modular Dashboard Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-slate-200/50 dark:border-white/5 pt-10">
          
          {/* Left Column (Selector List) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 px-2">
              SELECT CLINICAL STUDY
            </div>
            {ANALYTICAL_METRICS.map((metric) => {
              const isActive = metric.id === activeMetricId;
              return (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetricId(metric.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative flex items-start gap-4 ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-slate-300/60 dark:border-white/10 shadow-md shadow-emerald-500/[0.01]'
                      : 'bg-transparent border-slate-200/30 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-900/30'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-all ${
                    isActive ? 'bg-emerald-500/10 text-emerald-600' : 'bg-slate-100 dark:bg-slate-950/60 text-slate-400'
                  }`}>
                    <Activity className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5">
                      <h4 className={`text-sm font-bold tracking-tight ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                        {metric.title}
                      </h4>
                      <span className={`text-[13px] font-mono font-bold shrink-0 ${isActive ? 'text-emerald-500' : 'text-slate-400 dark:text-slate-500'}`}>
                        {metric.metric}
                      </span>
                    </div>
                    <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wide truncate">
                      {metric.publication}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (Visual Dashboard Display) */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900/30 border border-slate-200/50 dark:border-white/5 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between h-full shadow-sm">
              
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                      ACTIVE BIOMETRIC SIMULATION
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {activeMetric.cohortSize}
                  </span>
                </div>

                <div className="bg-[#FAF9F6] dark:bg-black/30 border border-slate-100 dark:border-white/5 rounded-2xl p-4 flex items-center justify-center">
                  {renderMicroChart(activeMetric.chartType)}
                </div>
              </div>

              {/* Research Text Details */}
              <div className="border-t border-slate-100 dark:border-white/5 pt-6">
                <h5 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Efficacy & Study Context
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {activeMetric.description}
                </p>

                {/* Performance indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeMetric.breakdown.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#FAF9F6] dark:bg-[#091020]/40 rounded-xl border border-slate-100 dark:border-white/5">
                      <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide leading-none">{item.label}</div>
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-2 font-mono leading-none">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publication Credits Row */}
              <div className="border-t border-slate-100 dark:border-white/5 pt-5 mt-6 flex flex-wrap items-center justify-between gap-2.5 text-[10px] text-slate-400/80 font-medium">
                <span>METRIC PROTOCOL: GOQii core-neurocoding v2.1</span>
                <span>STUDY PERIOD: {activeMetric.duration}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
