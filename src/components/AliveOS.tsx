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
    subtitle: 'Multimodal Data Capture',
    description: 'Continuous streams of biological and behavioral data points processed in real-time.',
    items: ['Wearables & IoT', 'Blood Biomarkers', 'Clinical Genomics', 'Lifestyle Logging'],
    icon: <Database className="w-6 h-6" />,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'behavioral',
    title: 'Behavioral Engine',
    subtitle: 'Proprietary Motivation Core',
    isBehavioral: true,
    description: 'The foundation of GOQii. 10+ years of proprietary IP in habit formation and neurocoding.',
    items: ['Dynamic Motivation Logic', 'Behavioral Neurocoding', 'Reward Tokenomics', 'Social Graph Analysis'],
    icon: <Brain className="w-8 h-8" />,
    color: 'from-primary/20 to-primary-dark/20',
  },
  {
    id: 'intelligence',
    title: 'Intelligence Layer',
    subtitle: 'Predictive Modeling & Twin',
    description: 'Transforming raw data into actionable biological understanding.',
    items: ['Digital Health Twin', 'AI Risk Prediction', 'Metabolic Modeling', 'Longevity Forecasting'],
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    id: 'routing',
    title: 'Routing Layer',
    subtitle: 'Optimization & Delivery',
    description: 'Dynamic decision engine routing every user to the optimal health intervention.',
    items: ['Human-in-the-loop Coaching', 'Quantum Intervention Routing', 'Care Pathway Orchestration'],
    icon: <Route className="w-6 h-6" />,
    color: 'from-accent-teal/20 to-emerald-500/20',
  },
  {
    id: 'outcomes',
    title: 'Clinical Outcomes',
    subtitle: 'System Performance Metrics',
    description: 'Measured biological and adherence improvements across our global user base.',
    items: [],
    stats: [
      { label: 'Immune Bio-Markers', value: '+21%' },
      { label: 'Muscle Mass Index', value: '+16%' },
      { label: 'Cognitive Function', value: '+23%' },
      { label: 'Standard Adherence', value: '+28%' }
    ],
    icon: <Activity className="w-6 h-6" />,
    color: 'from-orange-500/20 to-red-500/20',
  }
];

export const AliveOS = () => {
  const [expandedLayer, setExpandedLayer] = useState<string | null>('behavioral');

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
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Artificial Life Intelligence for Vitality Enhancement. A vertically integrated system that connects biological signals to behavioral triggers.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 mb-20 relative group"
          >
            <div className="aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" 
                alt="ALIVE O.S. Architecture Visualization"
                className="w-full h-full object-cover opacity-50 dark:opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#020617] via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="px-6 py-2 rounded-full bg-primary text-white font-bold text-xs tracking-widest uppercase shadow-xl">
                    System Architecture Visualization
                  </div>
                </div>
              </div>

              {/* Decorative Tech Elements */}
              <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <div className="w-2 h-2 rounded-full bg-primary/20" />
              </div>
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
                } ${layer.isBehavioral ? 'bg-gradient-to-br from-white via-slate-50 to-primary/5 dark:from-slate-900 dark:via-[#0f172a] dark:to-primary/10' : 'bg-white dark:bg-slate-900/80 overflow-hidden'}`}
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
                        <h3 className={`text-xl font-bold font-display ${layer.isBehavioral ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                          {layer.title}
                          {layer.isBehavioral && <span className="ml-3 text-[10px] tracking-[0.2em] font-bold text-primary/60 uppercase">Proprietary Core</span>}
                        </h3>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">{layer.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-primary/30 transition-colors">
                      {expandedLayer === layer.id ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedLayer === layer.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 mt-6">
                          <p className={`text-lg mb-8 leading-relaxed ${layer.isBehavioral ? 'text-slate-700 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                            {layer.description}
                          </p>
                          
                          {layer.id === 'outcomes' ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                              {layer.stats?.map((stat) => (
                                <div key={stat.label} className="text-center p-4 rounded-2xl bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/5">
                                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold leading-tight">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {layer.items.map((item) => (
                                <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/20 border border-slate-200 dark:border-white/5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{item}</span>
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
      </div>
    </section>
  );
};

