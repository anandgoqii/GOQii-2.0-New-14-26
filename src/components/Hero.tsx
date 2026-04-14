import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Lock, Globe } from 'lucide-react';
import { useModals } from '../context/ModalContext';

import { HeroBackground } from './HeroBackground';

export const Hero = () => {
  const { openDemoModal } = useModals();

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden w-full">
      {/* Dynamic Hero Background */}
      <HeroBackground />

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 mb-8"
          >
            {/* Logo & Badge Row */}
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <img 
                src="https://appcdn.goqii.com/user/storeimg/9046_1775830352.png" 
                alt="GOQii Sanjeevini" 
                className="h-12 w-auto object-contain opacity-90 hidden dark:block"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://appcdn.goqii.com/storeimg/32592_1775124472.png" 
                alt="Modality Logo" 
                className="h-12 w-auto object-contain opacity-90 block dark:hidden"
                referrerPolicy="no-referrer"
              />
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase inline-block">
                THE OPERATING SYSTEM FOR HUMAN LONGEVITY
              </span>
            </div>

            <h1 className="hero-title font-display tracking-tighter mt-2">
              Predict. Personalize.<br />
              <span className="gradient-text">
                Prevent. Prosper.
              </span>
            </h1>

            <p className="hero-subtext leading-relaxed max-w-3xl">
              Transform healthcare from reactive treatment to continuous, AI-driven prevention—delivering measurable outcomes for insurers, enterprises, providers, and individuals.
            </p>

            {/* Enterprise Proof */}
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">
              <span>5M+ Lives Covered</span>
              <span className="opacity-30 hidden sm:inline">•</span>
              <span>300+ Enterprise Partners</span>
              <span className="opacity-30 hidden sm:inline">•</span>
              <span>Up to 40% Reduction in Healthcare Costs</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={openDemoModal}
                className="px-8 py-4 button-primary flex items-center gap-2 group shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                Request a Demo
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/for-business"
                className="px-8 py-4 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-white/20 transition-all duration-300 border border-black/5 dark:border-white/10 hover:scale-105"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
              <span className="flex items-center gap-2">HIPAA Compliant</span>
              <span className="opacity-30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2">ISO 27001 Certified</span>
              <span className="opacity-30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2">GDPR Compliant</span>
              <span className="opacity-30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2">DPDPA Ready</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
