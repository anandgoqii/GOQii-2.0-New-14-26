import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Cpu, 
  Route, 
  Activity, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Compass, 
  Heart, 
  LineChart, 
  Radio, 
  Dna,
  Users,
  Lock,
  ArrowRight
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
    step: '01',
    title: 'Input Layer',
    subtitle: 'Continuous Bio-Telemetry & Genomics',
    themeColor: 'emerald',
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    summary: 'Ingesting multi-modal medical and biometric telemetry streams to compile a high-fidelity continuous patient baseline.',
    pillars: [
      {
        name: 'Sentient Wearables',
        badge: 'Continuous Stream',
        tagline: 'Real-time physiological tracking',
        description: 'Passive, medical-grade biotelemetry tracking heart rate variability (HRV), continuous glucose monitoring (CGM), sleep architecture, blood oxygenation, and systemic inflammation markers without patient burden.',
        details: [
          'High-frequency background parsing (250Hz)',
          'Algorithmic anomaly detection grids',
          'Biometric sync latency < 800ms'
        ],
        metrics: [
          { label: 'Sampling Rate', value: '250Hz' },
          { label: 'Battery Life', value: '14 Days' },
          { label: 'Sync SLA', value: '99.9%' }
        ]
      },
      {
        name: 'Predictive Genomics',
        badge: 'Molecular Baseline',
        tagline: 'Epigenetic & genomic methylation profiles',
        description: 'Complete clinical sequencing mapping genetic predispositions, chemical sensitivities, micronutrient deficiencies, and cellular age metrics to craft the ultimate hyper-personalized preventive baseline.',
        details: [
          'High-depth whole-genome mapping',
          'Epigenetic methylation tracking',
          'Clinical polygenic risk scoring'
        ],
        metrics: [
          { label: 'SNPs Mapped', value: '700K+' },
          { label: 'Accuracy', value: '99.99%' },
          { label: 'Markers', value: 'Longevity + Disease' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Data Ingestion Rate', value: '4.2 Billion Datapoints/Day' },
      { label: 'FHIR Compliance', value: 'HL7 / FHIR R4 Compliant' },
      { label: 'Sensor Integration', value: 'Direct SDK / Bluetooth LE' }
    ]
  },
  {
    id: 'intelligence',
    step: '02',
    title: 'Intelligence Layer',
    subtitle: 'Behavioral Neurocoding & Digital Twins',
    themeColor: 'teal',
    icon: <Cpu className="w-5 h-5 text-teal-500" />,
    summary: 'Consolidating ingested telemetry into clinical prediction algorithms and generative digital health simulations.',
    pillars: [
      {
        name: 'Behavioral Neurocoding',
        badge: 'THE PROPRIETARY MOAT',
        tagline: '10 Years of Longevity Coaching Science',
        description: 'The foundation competitors cannot duplicate. Fueled by a decade of proprietary coach-in-the-loop engagement models, our neurocoding algorithms rewire user daily habits, maintaining unmatched 90-day adherence and metabolic reversal rates.',
        details: [
          'Over 10 billion behavioral datapoints analyzed',
          'Adaptive psychological friction optimization',
          'Neuro-linguistic habit looping structures'
        ],
        metrics: [
          { label: '90-Day Adherence', value: '84%' },
          { label: 'Habit Longevity', value: '3.4 Years' },
          { label: 'Coaching Touches', value: '45M+' }
        ]
      },
      {
        name: 'AI Avatars',
        badge: 'Generative Clinical Companion',
        tagline: 'Empathetic dynamic digital twins',
        description: 'Hyper-personalized generative clinical agents conversing via voice and text, acting as an always-on medical concierge. Fed directly by the digital health twin, they deliver clinical advice and guide physical actions.',
        details: [
          'Localized medical-grade LLM architectures',
          'Empathetic conversational tone matching',
          'Clinical safety sandbox validation'
        ],
        metrics: [
          { label: 'Response Time', value: '< 350ms' },
          { label: 'Resolution Rate', value: '92%' },
          { label: 'Conversational Accuracy', value: '99.8%' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Intelligence Moat', value: '10-Year Clinical Dataset' },
      { label: 'Digital Twin Model', value: 'Bayesian Risk Progression' },
      { label: 'Compute Architecture', value: 'Edge-Inference Optimized' }
    ]
  },
  {
    id: 'routing',
    step: '03',
    title: 'Routing Layer',
    subtitle: 'Quantum Intervention Orchestration',
    themeColor: 'blue',
    icon: <Route className="w-5 h-5 text-blue-500" />,
    summary: 'Executing immediate clinical, behavioral, and pharmacological interventions via an optimized care pathway network.',
    pillars: [
      {
        name: 'Quantum Health Routing',
        badge: 'Path Optimization',
        tagline: 'Precision pathway and clinic matching',
        description: 'Dynamic resource-allocation engine resolving immediately where, when, and how interventions should occur. Routes critical signals to telemedicine physicians, continuous personal coaches, lab testing, or clinical-grade nutrition programs.',
        details: [
          'Immediate risk-stratified triage routing',
          'Dynamic load-balancing across clinical teams',
          'Proactive diagnostic appointment booking'
        ],
        metrics: [
          { label: 'Triage Speed', value: 'Instantaneous' },
          { label: 'Routing Efficiency', value: '+46%' },
          { label: 'Care Avoided', value: '38%' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Routing Framework', value: 'Risk-Stratified Triage Router' },
      { label: 'HISP Connectivity', value: 'Direct Secure Messaging' },
      { label: 'Intervention Dispatch', value: '< 2-Minute SLA' }
    ]
  },
  {
    id: 'outcomes',
    step: '04',
    title: 'Outcomes Layer',
    subtitle: 'Evidence-Backed Clinical Reversal',
    themeColor: 'emerald',
    icon: <Activity className="w-5 h-5 text-emerald-600" />,
    summary: 'Consistently transforming patient health profiles, reducing biomedical markers, and reversing chronic metabolic diseases.',
    pillars: [
      {
        name: 'Evidence-Backed Longevity',
        badge: 'Validated Metrics',
        tagline: 'Clinically proven systemic rejuvenation',
        description: 'Not a fitness tracker—a certified healthcare utility. Our outcomes are peer-reviewed and clinically validated, proving drastic reductions in HbA1c, baseline inflammation, biological age, and standard corporate healthcare expenditures.',
        details: [
          'Documented reduction in cardiovascular risk',
          'Certified HbA1c reversal protocols',
          'Peer-reviewed cohort evaluations'
        ],
        metrics: [
          { label: 'Metabolic Reversal', value: '72%' },
          { label: 'Biological Age', value: '-3.2 Years' },
          { label: 'ER Readmissions', value: '-41%' }
        ]
      }
    ],
    technicalSpecs: [
      { label: 'Clinical Trial Alignment', value: 'Double-Blind Cohort Validated' },
      { label: 'Peer Review Status', value: 'Published in Lancet/JMIR' },
      { label: 'FDA Status', value: 'Class II Medical Device Software' }
    ]
  }
];

export const AliveOS = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('intelligence');
  const activeLayer = OS_LAYERS.find(l => l.id === activeLayerId) || OS_LAYERS[1];

  return (
    <section id="alive-os" className="py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#070d19] transition-colors duration-500 relative overflow-hidden border-t border-slate-200 dark:border-white/5">
      
      {/* Structural Minimalist Grid lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/[0.015] dark:bg-[#10B981]/[0.012] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Enterprise Polish */}
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            PLATFORM ARCHITECTURE
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-slate-900 dark:text-white tracking-[-0.03em] leading-none mb-4">
                The Living Healthcare <span className="text-emerald-500 dark:text-emerald-400 font-light italic">OS</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl font-normal leading-relaxed">
                GOQii 2.0 operates as an interconnected, intelligent biological software stack. Discover how continuous telemetry transitions dynamically into precise clinical outcomes.
              </p>
            </div>
            
            {/* Regulatory statement */}
            <div className="shrink-0 flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/10 rounded-xl text-left shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">REGULATORY CLEARANCE</div>
                <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 mt-1">CDSCO Registered Medical Utility</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT 5 COLUMNS: Layer Stack Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2 px-2">
              Select Architecture Layer
            </div>
            {OS_LAYERS.map((layer) => {
              const isSelected = layer.id === activeLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900/80 border-emerald-500/40 dark:border-emerald-500/30 shadow-md shadow-emerald-500/[0.02] scale-[1.01]'
                      : 'bg-transparent border-slate-200/50 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-900/30 hover:border-slate-300 dark:hover:border-white/10'
                  }`}
                >
                  {/* Subtle active state indicators */}
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-emerald-500" />
                  )}

                  <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                    isSelected ? 'bg-emerald-500/10 text-emerald-600' : 'bg-slate-100 dark:bg-slate-900/60 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                  }`}>
                    {layer.icon}
                  </div>

                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500">
                        {layer.step}
                      </span>
                      <h3 className={`text-base font-bold tracking-tight ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                        {layer.title}
                      </h3>
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mt-0.5 truncate uppercase tracking-wide">
                      {layer.subtitle}
                    </div>
                    <p className={`text-xs mt-2 leading-relaxed ${isSelected ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-400'}`}>
                      {layer.summary}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-all self-center ${
                    isSelected ? 'text-emerald-500 translate-x-0' : 'text-slate-300 dark:text-slate-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT 7 COLUMNS: High-Fidelity Interface Display */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              
              {/* Minimal decoration */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/[0.02] dark:bg-emerald-400/[0.015] rounded-full blur-xl pointer-events-none" />

              <div>
                {/* Active Layer Header Details */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-white/5 pb-5 mb-6">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">ACTIVE SUBSYSTEM</div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-1 flex items-center gap-2">
                      {activeLayer.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 rounded-full">
                    <Compass className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Module Status: Active
                    </span>
                  </div>
                </div>

                {/* Sub-Pillars representation */}
                <div className="flex flex-col gap-6">
                  {activeLayer.pillars.map((pillar, pIdx) => {
                    const isMoat = pillar.badge === 'THE PROPRIETARY MOAT';
                    return (
                      <div 
                        key={pIdx} 
                        className={`p-5 rounded-2xl border transition-all ${
                          isMoat 
                            ? 'bg-gradient-to-br from-white via-[#FAF9F6] to-emerald-500/[0.04] dark:from-slate-900 dark:via-[#091020] dark:to-emerald-500/[0.03] border-emerald-500/20 shadow-sm shadow-emerald-500/[0.01]' 
                            : 'bg-slate-50/50 dark:bg-[#091020]/20 border-slate-200/50 dark:border-white/5'
                        }`}
                      >
                        {/* Title and Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h5 className={`text-base font-bold tracking-tight ${isMoat ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                            {pillar.name}
                          </h5>
                          {pillar.badge && (
                            <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-[0.05em] uppercase ${
                              isMoat 
                                ? 'bg-emerald-500 text-white shadow-sm' 
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}>
                              {pillar.badge}
                            </span>
                          )}
                        </div>

                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1 leading-tight">
                          {pillar.tagline}
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-400 leading-relaxed mb-4">
                          {pillar.description}
                        </p>

                        {/* Subsystem Specifications (Nested Checklist) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {pillar.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Pillar Metrics Panel */}
                        {pillar.metrics && (
                          <div className="bg-white/80 dark:bg-black/30 border border-slate-200/40 dark:border-white/5 rounded-xl p-3 grid grid-cols-3 gap-2">
                            {pillar.metrics.map((metric, mIdx) => (
                              <div key={mIdx} className="text-center">
                                <div className="text-[13px] md:text-sm font-bold text-slate-800 dark:text-white tracking-tight">{metric.value}</div>
                                <div className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technical Specifications Footer inside Visualizer */}
              <div className="border-t border-slate-100 dark:border-white/5 pt-5 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeLayer.technicalSpecs.map((spec, sIdx) => (
                  <div key={sIdx} className="border-r border-slate-100 dark:border-white/5 last:border-none pr-2">
                    <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">{spec.label}</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Central Enterprise Moat Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 dark:bg-[#091020] border border-slate-800 dark:border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/[0.04] rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[9px] tracking-[0.25em] uppercase font-bold">
              THE PROPRIETARY MOAT
            </span>
            <p className="text-lg md:text-2xl lg:text-3xl font-display font-medium text-white leading-tight">
              “Competitors can replicate devices, but they cannot replicate a <span className="text-emerald-400 italic font-light">decade of behavioral science</span> and coaching insight. Our neurocoding protocols generate the long-term adherence that clinical outcomes require.”
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-2 font-medium">
              <span>Backed by 10 Years of Longitudinal Human Data</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>45M+ Monitored Healthcare Interactions</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
