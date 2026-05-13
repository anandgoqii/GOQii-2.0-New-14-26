import React from 'react';
import { motion } from 'motion/react';

const CLINICAL_DATA = [
  {
    metric: '+28%',
    label: 'Digital Adherence',
    text: 'Behavioral compliance at scale — the foundation behind every outcome.'
  },
  {
    metric: '+21%',
    label: 'Immune Function',
    text: 'Measured improvements in overall immune health and resilience.'
  },
  {
    metric: '+23%',
    label: 'Cognitive Performance',
    text: 'Enhanced focus, memory, and long-term cognitive function.'
  },
  {
    metric: '+16%',
    label: 'Muscularity',
    text: 'Improved strength, movement, and healthy body composition.'
  }
];

export const ClinicalOutcomes = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-primary mb-6">CLINICAL OUTCOMES</p>
          <h2 className="font-display font-bold mb-8 tracking-tight text-4xl md:text-6xl text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1]">
            Measured Improvements Across Human Performance
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            GOQii combines behavioral intelligence, continuous engagement, and longevity science to drive measurable human outcomes at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 md:gap-12">
          {CLINICAL_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-4 transition-transform duration-500 group-hover:scale-105">
                {item.metric}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 tracking-tight">
                {item.label}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light opacity-70 max-w-[240px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
