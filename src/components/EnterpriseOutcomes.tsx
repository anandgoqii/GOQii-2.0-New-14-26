import React from 'react';
import { motion } from 'motion/react';
import { TrendingDown, UserCheck, Hospital, Zap } from 'lucide-react';

const OUTCOMES = [
  {
    title: 'Reduce Claims Costs',
    description: 'Optimize utilization through proactive risk management.',
    icon: <TrendingDown className="w-6 h-6" />,
  },
  {
    title: 'Improve Patient Adherence',
    description: 'Drive sustained engagement with behavioral neurocoding.',
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: 'Lower Hospital Readmissions',
    description: 'Continuous monitoring and timely clinical interventions.',
    icon: <Hospital className="w-6 h-6" />,
  },
  {
    title: 'Increase Workforce Productivity',
    description: 'Enhance employee vitality and reduce absenteeism.',
    icon: <Zap className="w-6 h-6" />,
  },
];

export const EnterpriseOutcomes = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/30 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold mb-4 tracking-tight">Driving Measurable Health & Business Outcomes</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTCOMES.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{outcome.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
