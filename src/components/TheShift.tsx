import React, { useState } from 'react';
import { motion } from 'motion/react';

const FlipCard = ({ from, to, delay }: { from: string, to: string, delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative h-72 w-full cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2rem] p-8 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-slate-400 font-medium tracking-widest uppercase text-[10px] mb-4">Before</span>
          <h3 className="font-display text-slate-500 dark:text-slate-400 text-center">{from}</h3>
          <div className="absolute bottom-6 text-slate-400 dark:text-slate-500 text-sm font-medium flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            Hover to transform <span className="text-lg">→</span>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-accent-teal to-accent-blue rounded-[2rem] p-8 flex flex-col items-center justify-center shadow-xl shadow-primary/20"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-primary-light font-medium tracking-widest uppercase text-[10px] mb-4">After</span>
          <h3 className="font-display text-white text-center">{to}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const TheShift = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500 w-full">
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        
        {/* SCENE — THE SHIFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-6"
        >
          <p className="small font-medium uppercase tracking-widest text-primary mb-4 mx-auto">The Shift</p>
          <h2 className="font-display tracking-tight text-slate-900 dark:text-white mb-6">
            From Reactive Care <br />
            <span className="gradient-text">to Continuous Health</span>
          </h2>
          
          <div className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            <p className="font-medium text-slate-800 dark:text-slate-200 mb-4 mx-auto">Healthcare today is broken.</p>
            <p className="mx-auto">Care is episodic.<br/>Action comes too late.</p>
          </div>

          <div className="inline-block px-8 py-4 rounded-full bg-primary/10 border border-primary/20 text-primary-dark dark:text-primary font-medium">
            GOQii changes this
          </div>
        </motion.div>

        {/* TRANSFORMATION GRID */}
        <div className="grid gap-6 md:grid-cols-3 text-left max-w-5xl mx-auto mb-16">
          <FlipCard from="Sick Care" to="Preventive Care" delay={0.2} />
          <FlipCard from="Fragmented Data" to="Continuous Intelligence" delay={0.4} />
          <FlipCard from="Passive Tracking" to="Active Intervention" delay={0.6} />
        </div>

      </div>
    </section>
  );
};
