import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useModals } from '../context/ModalContext';

export const FinalCTA = () => {
  const { openDemoModal, openSalesModal } = useModals();

  return (
    <section className="relative py-12 px-4 overflow-hidden w-full bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 bg-gradient-to-br from-primary via-accent-teal to-accent-blue rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center overflow-hidden group shadow-2xl shadow-black/20 dark:shadow-black/50 text-white"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h2 className="text-3xl md:text-5xl font-display mb-8 tracking-tight leading-tight">
            Let's Build the Future of Health Together
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            For enterprises, healthcare providers, and partners ready to scale impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={openDemoModal}
              className="px-10 py-5 rounded-full bg-white text-slate-900 font-medium text-base hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 group shadow-xl hover:scale-105"
            >
              Request a Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={openSalesModal}
              className="px-10 py-5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Partner With GOQii
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
