import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Cpu, 
  Brain, 
  Activity, 
  Route, 
  Plus, 
  Minus,
  Sparkles,
  ArrowDown
} from 'lucide-react';

interface ArchLayer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
  isBehavioral?: boolean;
  stats?: { label: string; value: string }[];
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    id: 'input',
    title: 'Input Layer',
    subtitle: 'Data Capture',
    description: 'Wearables • Labs • Genomics • Lifestyle Data',
    items: ['Wearables & IoT', 'Blood Biomarkers', 'Clinical Genomics', 'Lifestyle Logging'],
    icon: <Database className="w-6 h-6" />,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'neurocoding',
    title: 'Behavioral Neurocoding',
    subtitle: 'Core Moat Layer',
    isBehavioral: true,
    description: '10 years of proprietary IP — the behavioral engine no competitor can replicate.',
    items: [
      'Built on a decade of behavioral data, coaching intelligence, and neurocoding research that powers long-term human adherence and engagement at scale.'
    ],
    icon: <Brain className="w-8 h-8" />,
    color: 'from-primary/30 to-primary-dark/30',
  },
  {
    id: 'intelligence',
    title: 'Intelligence Layer',
    subtitle: 'Predictive Modeling',
    description: 'AI Prediction • Digital Twin • Risk Modeling',
    items: ['Digital Health Twin', 'AI Risk Prediction', 'Metabolic Modeling', 'Longevity Forecasting'],
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    id: 'routing',
    title: 'Routing Layer',
    subtitle: 'Intervention Delivery',
    description: 'Interventions • Coaching • Protocol Optimization',
    items: ['Human-in-the-loop Coaching', 'Quantum Intervention Routing', 'Care Pathway Orchestration'],
    icon: <Route className="w-6 h-6" />,
    color: 'from-accent-teal/20 to-emerald-500/20',
  },
  {
    id: 'outcomes',
    title: 'Outcomes Layer',
    subtitle: 'Measured Human Success',
    description: 'Measured biological and adherence improvements across our global user base.',
    items: [],
    stats: [
      { label: 'Digital Adherence', value: '+28%' },
      { label: 'Immune Function', value: '+21%' },
      { label: 'Cognitive Performance', value: '+23%' },
      { label: 'Muscularity', value: '+16%' }
    ],
    icon: <Activity className="w-6 h-6" />,
    color: 'from-orange-500/20 to-red-500/20',
  }
];

export const AliveOS = () => {
  const [expandedLayer, setExpandedLayer] = useState<string | null>('neurocoding');

  return (
    <section id="alive-os" className="py-24 bg-white dark:bg-[#020617] transition-colors duration-300 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-6">
            <Sparkles className="w-3 h-3" />
            System Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            ALIVE O.S.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed italic font-medium">
            Behavioral Intelligence • Longevity Infrastructure • Proprietary Neurocoding
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 mb-20 relative group"
          >
            <div className="aspect-video md:aspect-[21/9] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative shadow-2xl">
              <img 
                src="https://appcdn.goqii.com/storeimg/97510_1778669923.png" 
                alt="ALIVE O.S. Architecture"
                className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Stacked Layers */}
        <div className="flex flex-col gap-4 relative">
          {ARCH_LAYERS.map((layer, idx) => (
            <React.Fragment key={layer.id}>
              {/* Connector Arrow */}
              {idx > 0 && (
                <div className="flex justify-center -my-2 relative z-20">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 shadow-sm"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.div>
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative rounded-[2rem] border transition-all duration-500 ${
                  expandedLayer === layer.id 
                    ? 'border-primary/50 shadow-2xl shadow-primary/10' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40'
                } ${layer.isBehavioral ? 'bg-gradient-to-br from-white via-slate-50 to-primary/5 dark:from-slate-900 dark:via-[#0f172a] dark:to-primary/10 border-primary/20 ring-1 ring-primary/10' : 'bg-white dark:bg-slate-900/80 overflow-hidden'}`}
              >
                {/* Layer Highlight Bar */}
                <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${layer.color.replace('from-', 'from-').replace('to-', 'to-')}`} />

                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className={`mt-1 p-3 rounded-2xl bg-gradient-to-br ${layer.color} ${layer.isBehavioral ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>
                        {layer.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold font-display ${layer.isBehavioral ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                          {layer.title}
                          {layer.isBehavioral && <span className="ml-3 text-[10px] tracking-[0.2em] font-bold text-primary/60 uppercase">The Proprietary Moat</span>}
                        </h3>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">{layer.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-primary/30 transition-colors">
                      {expandedLayer === layer.id ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {expandedLayer === layer.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 mt-6">
                          <p className={`text-lg mb-8 leading-relaxed max-w-2xl ${layer.isBehavioral ? 'text-slate-800 dark:text-slate-100 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                            {layer.description}
                          </p>
                          
                          {layer.id === 'outcomes' ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                              {layer.stats?.map((stat) => (
                                <div key={stat.label} className="text-center p-6 rounded-2xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5 shadow-sm">
                                  <div className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold leading-tight">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 gap-4">
                              {layer.items.map((item) => (
                                <div key={item} className={`flex items-start gap-4 px-6 py-5 rounded-xl border ${layer.isBehavioral ? 'bg-primary/5 border-primary/10' : 'bg-slate-100 dark:bg-black/20 border-slate-200 dark:border-white/5'}`}>
                                  {layer.isBehavioral ? (
                                    <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                  ) : (
                                    <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0 mt-2" />
                                  )}
                                  <span className={`text-sm md:text-base font-medium ${layer.isBehavioral ? 'text-slate-900 dark:text-slate-200 leading-relaxed' : 'text-slate-600 dark:text-slate-300'}`}>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Full-Width Moat Band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-white max-w-4xl mx-auto leading-tight">
            “GOQii’s behavioral engine is built on a decade of proprietary <span className="text-primary italic">neurocoding research</span> — the foundation layer that powers long-term adherence, engagement, and measurable health outcomes at scale.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

