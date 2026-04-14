import React from 'react';
import { motion } from 'motion/react';
import { Heart, Shield, Zap, Target, ArrowRight } from 'lucide-react';

export const LongevityJourney = () => {
  return (
    <main className="pb-20 px-4 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Your Longevity Journey
          </span>
          <h1 className="hero-title font-display font-bold tracking-tight mb-8">
            The Path to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Optimal Healthspan</span>
          </h1>
          <p className="hero-subtext text-slate-600 dark:text-slate-400 font-light mb-12 leading-relaxed mx-auto">
            Longevity is not just about living longer—it's about living better. Discover your personalized roadmap to a healthier, more vibrant life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            { icon: Heart, title: "Biological Age Tracking", desc: "Understand your true age at the molecular level with advanced biomarkers." },
            { icon: Shield, title: "Personalized Protocols", desc: "Customized nutrition, exercise, and sleep plans tailored to your unique biology." },
            { icon: Zap, title: "Real-time Optimization", desc: "Continuous monitoring and adjustments based on your body's daily signals." },
            { icon: Target, title: "Expert Guidance", desc: "Access to world-class longevity coaches and medical experts." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <button className="px-10 py-5 rounded-full bg-primary text-white font-bold text-xl hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-primary/30 flex items-center gap-3 mx-auto group">
            Start Your Journey Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </main>
  );
};
