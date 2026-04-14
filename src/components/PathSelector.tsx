import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PathSelectorProps {
  activePath: 'all' | 'org' | 'ind';
  onPathChange: (path: 'org' | 'ind') => void;
  onContinue: () => void;
}

export const PathSelector: React.FC<PathSelectorProps> = ({ activePath, onPathChange, onContinue }) => {
  return (
    <section className="choose-section min-h-screen py-20 relative z-20 flex flex-col items-center justify-center bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden w-full">
      
      {/* Background Morph */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none transition-colors duration-700">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] transition-colors duration-1000 ${
          activePath === 'org' ? 'bg-primary/30' : activePath === 'ind' ? 'bg-accent-teal/30' : 'bg-slate-400/10'
        }`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* SCENE — ENTRY POINT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-display text-slate-900 dark:text-white mb-6">
            A system that moves from <br className="hidden md:block" />
            <span className="gradient-text">reaction to prevention.</span>
          </h2>
          <h3 className="text-slate-600 dark:text-slate-400">
            Choose how you want to experience GOQii
          </h3>
        </motion.div>
        
        {/* INTERACTIVE SELECTOR */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative inline-flex items-center p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-xl mb-8"
        >
          {/* Sliding Indicator */}
          <motion.div
            className="absolute inset-y-2 w-[calc(50%-8px)] bg-gradient-to-r from-primary to-accent-teal rounded-full shadow-md z-0"
            initial={false}
            animate={{
              left: activePath === 'org' ? '8px' : activePath === 'ind' ? 'calc(50% + 0px)' : '8px',
              opacity: activePath === 'all' ? 0 : 1,
              scale: activePath === 'all' ? 0.9 : 1
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          
          <button
            onClick={() => onPathChange('org')}
            className={`relative z-10 px-8 md:px-12 py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
              activePath === 'org' ? 'text-white scale-105' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            For Organizations
          </button>
          
          <button
            onClick={() => onPathChange('ind')}
            className={`relative z-10 px-8 md:px-12 py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
              activePath === 'ind' ? 'text-white scale-105' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            For Individuals
          </button>
        </motion.div>

        {/* SUBTEXT (DYNAMIC) */}
        <div className="h-16 flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            {activePath !== 'all' && (
              <motion.p
                key={activePath}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium"
              >
                {activePath === 'org' 
                  ? "Designed for insurers, enterprises, hospitals, and governments."
                  : "Built for individuals to take control of their health journey."}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* CONTINUE LINK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={onContinue}
            className="continue-link group flex items-center justify-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg transition-all duration-300 mx-auto"
          >
            Continue to full site
            <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
