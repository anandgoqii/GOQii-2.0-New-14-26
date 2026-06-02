import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Globe } from 'lucide-react';

const RECOGNITIONS = [
  {
    title: "XPRIZE Participation",
    desc: "Recognized for innovation in health technology and preventive care.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Global Health Innovation",
    desc: "Awarded for scaling preventive healthcare across diverse populations.",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Industry Leadership",
    desc: "Consistently ranked among the top digital health platforms globally.",
    icon: <Star className="w-8 h-8" />
  }
];

export const Recognition = () => {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/30 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-4">
            Global Recognition
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-slate-900 dark:text-white tracking-[-0.03em] leading-tight mb-4">
            Excellence and <span className="text-emerald-500 dark:text-emerald-400 font-light italic">Innovation</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Our commitment to innovation and impact has been recognized by leading global organizations and media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {RECOGNITIONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
