import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Cpu, 
  Route, 
  Activity, 
  Sparkles,
  Dna,
  ShieldCheck,
  Compass,
  ArrowRight,
  LineChart,
  Brain,
  Layers,
  Fingerprint
} from 'lucide-react';

interface ComponentPillar {
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  details: string[];
  metrics?: { label: string; value: string }[];
}

interface OSLayer {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  themeColor: string;
  icon: React.ReactNode;
  summary: string;
  pillars: ComponentPillar[];
  technicalSpecs: { label: string; value: string }[];
}

const OS_LAYERS: OSLayer[] = [
  {
    id: 'input',
    step: 'EL-01',
    title: 'Biotelemetry Streams',
    subtitle: 'Continuous Multimodal Telemetry',
    themeColor: 'emerald',
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    summary: 'Ingesting passive multi-harmonic data from CGM sensors, continuous wearable biosensors, and methylation-sequenced predictive genomics.',
    pillars: [
      {
        name: 'Sentient Weables & Sensors',
        badge: 'Continuous Stream',
        tagline: 'High-fidelity continuous physiological tracking',
        description: 'Enables continuous monitoring of heart rate variability (HRV), chemical changes, Sleep-Architecture parameters, blood oxygen, and dynamic temperature variations.',
        details: [
          'Unsupervised background ingestion protocols',
          'Intelligent signal-loss error handling',
          'Biometric correlation analysis'
        ],
        metrics: [
          { label: 'Ingestion SLA', value: '99.9%' },
          { label: 'Frequency Rate', value: '250Hz' },
          { label: 'Signal Clutter', value: '< 1%' }
        ]
      },
      {
        name: 'Epigenetic Baselines',
        badge: 'Predictive Profile',
        tagline: 'Deep longevity profiling and molecular tracking',
        description: 'Combines full genome mapping, environmental chemical sensitivities, micro-nutrition profiles, and cellular age metrics to initialize a highly detailed preventive map.',
        details: [
          'High-depth whole-genome profile mapping',
          'Environmental methylation monitoring',
          'Predictive clinical biological scores'
        ],
        metrics: [
          { label: 'Markers Mapped', value: '700K+' },
          { label: 'Baseline Models', value: 'Polygenic' },
          { label: 'Precision Rating', value: '99.9%' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Ingestion Threshold', value: '4.2 Billion Signals/Day' },
      { label: 'Format Compliance', value: 'HL7 & FHIR Standard' },
      { label: 'Sensor Overrides', value: 'Active Fallback System' }
    ]
  },
  {
    id: 'intelligence',
    step: 'EL-02',
    title: 'Neurocoding Engine',
    subtitle: 'Behavioral Science & Digital Twins',
    themeColor: 'teal',
    icon: <Cpu className="w-5 h-5 text-teal-500" />,
    summary: 'Translating rich biometric data streams into clinical model projections and personal active digital twin maps.',
    pillars: [
      {
        name: 'Behavioral Neurocoding',
        badge: 'PROPRIETARY MOAT',
        tagline: 'Over a decade of coaching interaction histories',
        description: 'Our behavioral science system rewires user habits to provide exceptional long-term engagement. Over 10 years of personal human coaching insights keep users actively involved in metabolic and longevity regimes.',
        details: [
          'Interactions analyzed: Over 45 Million',
          'Automated psychological friction management',
          'Intelligent behavioral system progression'
        ],
        metrics: [
          { label: '90-Day Adherence', value: '84%' },
          { label: 'Daily Engagement', value: '4.8 Times' },
          { label: 'Habit Retention', value: '3.4 Years' }
        ]
      },
      {
        name: 'Personal Digital Twins',
        badge: 'Enterprise Intelligence',
        tagline: 'Comprehensive clinical companion simulators',
        description: 'Generative software models that replicate dynamic personal health trajectories. Fed directly by live telemetric updates, they allow clinicians to preview real-time intervention success.',
        details: [
          'Strictly private localized clinical LLMs',
          'Accurate hazard-ratio simulations',
          'Fully sandboxed clinical analysis'
        ],
        metrics: [
          { label: 'Model Confidence', value: '98.6%' },
          { label: 'Compute Latency', value: '180ms' },
          { label: 'Active Parameters', value: '140+' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Neurocoding Moat', value: '10-Year Clinical Model' },
      { label: 'Twin Projection', value: 'Bayesian Progression Map' },
      { label: 'Hardware Tuning', value: 'Clustered Edge Inference' }
    ]
  },
  {
    id: 'routing',
    step: 'EL-03',
    title: 'Pathway Dispatch',
    subtitle: 'Intervention Delivery Infrastructure',
    themeColor: 'blue',
    icon: <Route className="w-5 h-5 text-blue-500" />,
    summary: 'Orchestrating instantaneous medical actions and clinical programs securely across the entire partner ecosystem.',
    pillars: [
      {
        name: 'Signal Routing System',
        badge: 'Optimized Delivery',
        tagline: 'Smart connection to clinics and providers',
        description: 'Instantly identifies care requirements and coordinates responses. Directs biometric warnings and patient needs directly to medical practitioners, lifestyle coaches, or certified prescription providers.',
        details: [
          'Instant incident triage logic matrices',
          'Dynamic load management for providers',
          'Proactive clinical diagnostic matching'
        ],
        metrics: [
          { label: 'Dispatch Latency', value: 'Instant' },
          { label: 'Friction Rate', value: '0%' },
          { label: 'Ecosystem Partners', value: '300+' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Routing Logic', value: 'Automated Triaging Gateway' },
      { label: 'EHR Integrations', value: 'Direct secure endpoints' },
      { label: 'Action Threshold', value: 'Live 2-Minute SLA' }
    ]
  },
  {
    id: 'outcomes',
    step: 'EL-04',
    title: 'Evidence-Backed Results',
    subtitle: 'Proving Metabolic & Physiological Reversal',
    themeColor: 'emerald',
    icon: <Activity className="w-5 h-5 text-emerald-600" />,
    summary: 'Consistently lowering risk, reversing long-term lifestyle diseases, and establishing verifiable longevity benefits.',
    pillars: [
      {
        name: 'Validated Outcomes Ledger',
        badge: 'Clinical Verification',
        tagline: 'Peer-reviewed evidence of biological rejuvenation',
        description: 'Our methods are clinically backed and verified. Our processes offer documented improvements in metabolic markers, biological ages, and enterprise healthcare claims.',
        details: [
          'Documented average reduction in cardiovascular risk',
          'Certified HbA1c normalization support',
          'Peer-reviewed cohort updates'
        ],
        metrics: [
          { label: 'Metabolic Reversal', value: '72%' },
          { label: 'Biological Age Offset', value: '-3.2 Yrs' },
          { label: 'Readmission Redux', value: '-41%' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Study Verification', value: 'Double-Blind Cohorts' },
      { label: 'Academic Publishing', value: 'Lancet / JMIR Allied Articles' },
      { label: 'Medical Clearance', value: 'CDSCO Registered' }
    ]
  }
];

export const AliveOS = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('intelligence');
  const activeLayer = OS_LAYERS.find(l => l.id === activeLayerId) || OS_LAYERS[1];

  return (
    <section 
      id="alive-os" 
      className="py-24 md:py-32 w-full bg-[#FCFAF7] dark:bg-[#070b13] transition-colors duration-500 relative overflow-hidden border-t border-zinc-200/60 dark:border-white/5"
    >
      {/* Editorial subtle grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e1_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none opacity-80" />
      
      {/* Faint system architecture guide lines to represent an architectural layout */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-zinc-200/30 dark:bg-zinc-800/20 pointer-events-none" />
      <div className="absolute inset-y-0 left-2/3 w-[1px] bg-zinc-200/30 dark:bg-zinc-800/20 pointer-events-none" />
      <div className="absolute inset-x-0 top-1/3 h-[1px] bg-zinc-200/30 dark:bg-zinc-800/20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-1/4 h-[1px] bg-zinc-200/30 dark:bg-zinc-800/20 pointer-events-none" />

      {/* Background soft ambient grid element */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-[#10B981]/[0.012] dark:bg-[#10B981]/[0.006] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* PLATFORM ARCHITECTURE CAPSULE */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 dark:bg-[#10B981]/5 border border-[#10B981]/25 dark:border-[#10B981]/15 rounded-full text-emerald-700 dark:text-emerald-400 font-mono text-[10px] tracking-[0.15em] uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            PLATFORM ARCHITECTURE
          </div>
          
          {/* MAIN HEADING - Editorial Asymmetric Pairing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#1F211E] dark:text-zinc-100 tracking-[-0.03em] leading-[1.05]">
                The Living Healthcare <span className="text-[#10B981] font-light italic">OS</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pl-4">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
                GOQii 2.0 operates as an interconnected, intelligent biological software stack. Discover how continuous telemetry transitions dynamically into precise clinical outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch mt-12">
          
          {/* LEFT 5 COLUMNS: Premium Quiet Step Index Selector */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-start">
            <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.25em] mb-2 pl-1">
              Architecture Subsystems
            </div>
            <div className="flex flex-col gap-3">
              {OS_LAYERS.map((layer) => {
                const isSelected = layer.id === activeLayerId;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 ${
                      isSelected
                        ? 'bg-white dark:bg-[#0c121e] border-zinc-300 dark:border-zinc-800 shadow-sm'
                        : 'bg-transparent border-transparent hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 '
                    }`}
                  >
                    {/* Quiet Left Accent Bar */}
                    {isSelected && (
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#10B981]" />
                    )}

                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#10B981]/10 text-[#10B981]' 
                        : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500'
                    }`}>
                      {layer.icon}
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[9px] font-extrabold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                          {layer.step}
                        </span>
                        <h3 className={`text-sm md:text-base font-bold tracking-tight ${isSelected ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                          {layer.title}
                        </h3>
                      </div>
                      <div className="text-[10px] font-semibold text-[#10B981]/80 mt-1 uppercase tracking-wider">
                        {layer.subtitle}
                      </div>
                      <p className={`text-xs mt-2 leading-relaxed ${isSelected ? 'text-zinc-500 dark:text-zinc-400' : 'text-zinc-400/80 dark:text-zinc-500/80'}`}>
                        {layer.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Integrated Interactive Subsystem Visualization */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* LARGE PREMIUM VISUALIZATION CONTAINER */}
            <div className="relative w-full bg-gradient-to-b from-white to-[#FAF9F5] dark:from-[#0d121f] dark:to-[#070b13] border border-zinc-200/90 dark:border-white/5 rounded-[2.5rem] p-6 lg:p-8 overflow-hidden shadow-sm flex flex-col justify-between group min-h-[460px]">
              
              {/* Internal Thin Grid lines */}
              <div className="absolute inset-0 bg-[#10B981]/[0.01] bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              {/* HUD / Label Header */}
              <div className="flex justify-between items-center z-10 border-b border-zinc-100 dark:border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[9px] font-mono font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">
                    ACTIVE SUBSYSTEM VISUALIZER
                  </span>
                </div>
                <div className="text-[9px] font-mono font-semibold text-emerald-600 dark:text-[#10B981] uppercase tracking-wider">
                  {activeLayer.step} // ONLINE
                </div>
              </div>

              {/* CENTER CONTEXT: THE DYNAMIC Blueprints */}
              <div className="my-auto py-6 flex flex-col items-center justify-center relative min-h-[220px]">
                
                <AnimatePresence mode="wait">
                  {/* LAYER 1: Biotelemetry Streams (EL-01) */}
                  {activeLayerId === 'input' && (
                    <motion.div
                      key="input-viz"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col items-center gap-4"
                    >
                      <div className="relative w-full max-w-[340px] h-32 flex items-center justify-center">
                        {/* Helical Genomics & HRV Wave background */}
                        <svg className="absolute inset-0 w-full h-full text-[#10B981]/15 dark:text-[#10B981]/10" viewBox="0 0 340 128">
                          {/* Sinusoidal Telemetry Stream */}
                          <path 
                            d="M0,64 Q42,10 85,64 T170,64 T255,64 T340,64" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            fill="none" 
                          />
                          <path 
                            d="M0,64 Q42,118 85,64 T170,64 T255,64 T340,64" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeDasharray="4 4" 
                            fill="none" 
                          />
                          {/* Pulse Markers */}
                          <circle cx="85" cy="64" r="3" fill="#10B981" />
                          <circle cx="170" cy="64" r="3" fill="#10B981" />
                          <circle cx="255" cy="64" r="3" fill="#10B981" />
                        </svg>

                        {/* Centered Graphic Icons */}
                        <div className="relative flex items-center gap-6 z-10">
                          <div className="p-4 bg-white dark:bg-[#141b2b] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm text-center">
                            <Dna className="w-8 h-8 text-emerald-500 mx-auto mb-1 animate-pulse" />
                            <div className="text-[9px] font-mono font-bold text-zinc-500">GENOMICS</div>
                          </div>
                          
                          <div className="h-6 w-[2px] bg-zinc-200 dark:bg-zinc-800" />

                          <div className="p-4 bg-white dark:bg-[#141b2b] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm text-center">
                            <Fingerprint className="w-8 h-8 text-[#10B981] mx-auto mb-1" />
                            <div className="text-[9px] font-mono font-bold text-zinc-500">BIOMETRIC</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center z-10">
                        <div className="text-xs font-bold text-zinc-600 dark:text-zinc-300">Continuous Epigenetic Baseline Assembly</div>
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">HIGH-FREQUENCY CORRELATION SYNC (250Hz)</div>
                      </div>
                    </motion.div>
                  )}

                  {/* LAYER 2: Neurocoding Engine (EL-02) */}
                  {activeLayerId === 'intelligence' && (
                    <motion.div
                      key="intelligence-viz"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col items-center gap-4"
                    >
                      <div className="relative w-full max-w-[340px] h-32 flex items-center justify-center">
                        {/* Dynamic network nodes */}
                        <svg className="absolute inset-0 w-full h-full text-zinc-200 dark:text-zinc-800/60" viewBox="0 0 340 128">
                          <line x1="80" y1="40" x2="260" y2="40" stroke="currentColor" strokeWidth="1" />
                          <line x1="80" y1="40" x2="170" y2="90" stroke="currentColor" strokeWidth="1" />
                          <line x1="260" y1="40" x2="170" y2="90" stroke="currentColor" strokeWidth="1" />
                          <line x1="170" y1="10" x2="170" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                          
                          {/* Moving signals along network vector */}
                          <circle cx="170" cy="40" r="4" fill="#10B981">
                            <animate attributeName="cx" values="80;260;170;80" dur="8s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="170" cy="90" r="4" fill="#10B981" />
                        </svg>

                        {/* Central Neural Intelligence Unit */}
                        <div className="z-10 flex gap-4 items-center">
                          <div className="p-3 bg-[#10B981]/5 border border-[#10B981]/20 rounded-full">
                            <Brain className="w-10 h-10 text-[#10B981] animate-pulse" />
                          </div>
                          
                          <div className="text-left">
                            <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 font-mono">10-Yr Behavioral Moat</div>
                            <div className="text-[10px] text-zinc-400 dark:text-zinc-500">45M+ Adaptive Coaching Connections</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center z-10">
                        <div className="text-xs font-bold text-zinc-600 dark:text-zinc-300">Continuous Behavioral Twin Projection</div>
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">UNMATCHED 90-DAY RETENTION METRICS</div>
                      </div>
                    </motion.div>
                  )}

                  {/* LAYER 3: Pathway Dispatch (EL-03) */}
                  {activeLayerId === 'routing' && (
                    <motion.div
                      key="routing-viz"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col items-center gap-4"
                    >
                      <div className="relative w-full max-w-[340px] h-32 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full text-zinc-300 dark:text-zinc-800" viewBox="0 0 340 128">
                          {/* Dynamic Routing Hub Vectors */}
                          <path d="M 60 64 L 140 64" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M 140 64 L 220 24" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M 140 64 L 220 64" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M 140 64 L 220 104" stroke="currentColor" strokeWidth="1.5" />
                          
                          <circle cx="140" cy="64" r="5" fill="#10B981" />
                          <circle cx="220" cy="24" r="3" fill="#10B981" />
                          <circle cx="220" cy="64" r="3" fill="#10B981" />
                          <circle cx="220" cy="104" r="3" fill="#10B981" />
                        </svg>

                        <div className="absolute left-[30px] p-2 bg-white dark:bg-[#141b2b] border border-zinc-200 dark:border-zinc-800 rounded-xl font-mono text-[9px] font-bold text-zinc-500">
                          ALERT SIGNAL
                        </div>

                        <div className="absolute right-[40px] flex flex-col gap-2.5 text-right font-mono text-[8.5px] font-bold text-zinc-400">
                          <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded border border-[#10B981]/20">CLINICAL TEAM</span>
                          <span className="bg-blue-500/10 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">LIFESTYLE COACH</span>
                          <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">DIAGNOSTICS</span>
                        </div>
                      </div>

                      <div className="text-center z-10">
                        <div className="text-xs font-bold text-zinc-600 dark:text-zinc-300">Quantum Bio-Alarm Dispatch Router</div>
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">INSTANT TARGET TRIAGE DIRECTIVES</div>
                      </div>
                    </motion.div>
                  )}

                  {/* LAYER 4: Evidence-Backed Results (EL-04) */}
                  {activeLayerId === 'outcomes' && (
                    <motion.div
                      key="outcomes-viz"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col items-center gap-4"
                    >
                      <div className="relative w-full max-w-[340px] h-32 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full text-zinc-200 dark:text-zinc-800" viewBox="0 0 340 128">
                          {/* Cartesian Grid */}
                          <line x1="40" y1="10" x2="40" y2="110" stroke="currentColor" strokeWidth="1" />
                          <line x1="40" y1="110" x2="300" y2="110" stroke="currentColor" strokeWidth="1" />
                          
                          {/* Decreasing Curve for Metabolic Risk */}
                          <path 
                            d="M 40 30 Q 150 40, 280 95" 
                            stroke="#EF4444" 
                            strokeWidth="1.5" 
                            strokeDasharray="3 3"
                            fill="none" 
                          />

                          {/* Reversal Improvement curve */}
                          <path 
                            d="M 40 90 Q 150 85, 280 20" 
                            stroke="#10B981" 
                            strokeWidth="2.5" 
                            fill="none" 
                          />
                        </svg>

                        <div className="absolute top-[15px] right-[50px] flex items-center gap-1.5 font-mono text-[9px] font-bold text-emerald-600 bg-[#10B981]/15 px-2 py-0.5 rounded">
                          <Activity className="w-3 h-3" /> Metabolic Normalization
                        </div>

                        <div className="absolute bottom-[20px] left-[60px] font-mono text-[9px] font-semibold text-red-500">
                          Primary Marker Trend
                        </div>
                      </div>

                      <div className="text-center z-10">
                        <div className="text-xs font-bold text-zinc-600 dark:text-zinc-300">Clinically Documented Biochemical Improvement</div>
                        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">VERIFIABLE LONG-TERM REVERSAL INDEX</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* CENTER LABEL - Exactly as requested */}
              <div className="text-center z-10 border-t border-zinc-100 dark:border-white/5 pt-4">
                <div className="text-xs tracking-wider uppercase font-semibold text-zinc-700 dark:text-zinc-300 flex items-center justify-center gap-2">
                  <Compass className="w-4 h-4 text-[#10B981]" />
                  <span>ALIVE O.S. Architecture Visualization</span>
                </div>
              </div>

            </div>

            {/* TECHNICAL SPECS ROW */}
            <div className="grid grid-cols-3 gap-4 mt-6 bg-[#FAF9F5] dark:bg-[#090d16] border border-zinc-200/50 dark:border-white/5 rounded-3xl p-4">
              {activeLayer.technicalSpecs.map((spec, index) => (
                <div key={index} className="text-center border-r last:border-none border-zinc-200/50 dark:border-white/5 px-2">
                  <div className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">
                    {spec.label}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-1 truncate">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* METABOLIC INTEGRATION SUB-PILLARS EXPANSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {activeLayer.pillars.map((pillar, index) => {
            const isMoat = pillar.badge === 'PROPRIETARY MOAT';
            return (
              <div 
                key={index} 
                className={`p-6 md:p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between ${
                  isMoat 
                    ? 'bg-gradient-to-br from-white to-[#F2EFEA]/30 dark:from-[#0d121f] dark:to-[#10B981]/[0.02] border-[#10B981]/20 shadow-sm'
                    : 'bg-white dark:bg-[#0c101a] border-zinc-200/60 dark:border-white/5 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-white/5 text-zinc-600 dark:text-zinc-400">
                      {activeLayer.step} // Subsystem-0{index + 1}
                    </span>
                    {pillar.badge && (
                      <span className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-bold tracking-[0.05em] uppercase ${
                        isMoat 
                          ? 'bg-[#10B981] text-white shadow-sm shadow-[#10B981]/15' 
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}>
                        {pillar.badge}
                      </span>
                    )}
                  </div>

                  <h4 className={`text-lg font-bold tracking-tight mb-1 ${isMoat ? 'text-[#10B981]' : 'text-zinc-900 dark:text-white'}`}>
                    {pillar.name}
                  </h4>
                  <p className="text-xs font-semibold text-zinc-400 mb-4">{pillar.tagline}</p>
                  
                  <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {pillar.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {pillar.metrics && (
                  <div className="bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/30 dark:border-white/5 rounded-2xl p-4 grid grid-cols-3 gap-2 align-bottom">
                    {pillar.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="text-center">
                        <div className="text-xs md:text-sm font-bold text-zinc-800 dark:text-white tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-[7.5px] font-extrabold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* PROPRIETARY MOAT BANNER - Centered Enterprise Moat Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-[#11141D] text-center relative overflow-hidden shadow-xl"
        >
          {/* subtle decoration elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#10B981]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="px-3.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] font-mono text-[9px] tracking-[0.25em] uppercase font-bold">
              THE PROPRIETARY MOAT
            </span>
            <p className="text-lg md:text-2xl lg:text-3xl font-display font-medium text-white leading-snug">
              “Competitors can replicate devices, but they cannot replicate a <span className="text-[#10B981] italic font-light">decade of behavioral science</span> and coaching insight. Our neurocoding protocols generate the long-term adherence that clinical outcomes require.”
            </p>
            <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-xs text-zinc-400 mt-2 font-medium">
              <span>Backed by 10 Years of Longitudinal Human Data</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] hidden sm:block" />
              <span>45M+ Monitored Healthcare Interactions</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
