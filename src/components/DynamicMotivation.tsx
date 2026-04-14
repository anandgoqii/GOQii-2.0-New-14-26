import React from 'react';
import { motion } from 'motion/react';
import { Brain, Users, Trophy, RefreshCw } from 'lucide-react';

export const DynamicMotivation = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display mb-6 tracking-tight">
              Turning Insights into Action
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              GOQii is not just a tracking platform.<br />
              <span className="font-semibold text-primary">It is a behavior change system.</span>
            </p>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <p className="text-[10px] uppercase tracking-widest font-medium text-slate-400 mb-2 max-w-none">Outcome</p>
              <p className="text-xl font-medium text-slate-900 dark:text-white max-w-none">
                Sustained behavior change <span className="text-primary">→</span> measurable health impact
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Brain, title: "AI-driven nudges" },
              { icon: Users, title: "Human coaching" },
              { icon: Trophy, title: "Gamification and rewards" },
              { icon: RefreshCw, title: "Continuous engagement loops" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors group">
                <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
