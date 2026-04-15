import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Microscope, 
  ShieldCheck, 
  Activity, 
  Users, 
  ChevronRight,
  Zap,
  BrainCircuit,
  Globe
} from 'lucide-react';

const SECTIONS = [
  { title: 'Philosophy', icon: <Stethoscope className="w-5 h-5" />, content: 'Transforming healthcare from reactive treatment to continuous, AI-driven prevention.' },
  { title: 'Thesis', icon: <Microscope className="w-5 h-5" />, content: 'Combining real-time biological data with behavioral science to extend human healthspan.' },
  { title: 'Clinical Consortium', icon: <Users className="w-5 h-5" />, content: 'A global network of medical experts and clinical researchers validating our outcomes.' },
  { title: 'Diagnostics & Infrastructure', icon: <Activity className="w-5 h-5" />, content: 'Advanced lab testing and secure data infrastructure for population-scale health.' },
  { title: 'Adherence Engine', icon: <ShieldCheck className="w-5 h-5" />, content: 'Proprietary behavioral neurocoding that ensures sustained engagement and results.' },
];

export const Sanjeevini = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300 w-full py-24">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase inline-block mb-6">
            GOQii Sanjeevini
          </span>
          <h2 className="font-display font-bold mb-6 tracking-tight text-4xl md:text-5xl">
            AI-Powered Longevity &<br /> Preventive Health Intelligence
          </h2>
          <p className="opacity-70 max-w-3xl mx-auto font-light leading-relaxed mb-8 text-lg">
            Combining genomics, digital twins, and continuous coaching to deliver measurable health improvements.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold tracking-tight">XPRIZE Healthspan Semifinalist</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold tracking-tight">In collaboration with IIT Bombay • Tata 1mg • Decode Age</span>
            </div>
          </div>
        </motion.div>

        {/* Outcome Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { value: '+21%', label: 'Immune Improvement', icon: <Activity className="w-6 h-6" /> },
            { value: '+16%', label: 'Muscle Strength', icon: <Zap className="w-6 h-6" /> },
            { value: '+23%', label: 'Cognitive Performance', icon: <BrainCircuit className="w-6 h-6" /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-primary/20 transition-all text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-display font-bold text-primary mb-3">{stat.value}</div>
              <p className="text-sm opacity-60 font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Experts Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold mb-4">World-Class Clinical Authority</h3>
            <p className="opacity-60 max-w-2xl mx-auto">Led by a consortium of global experts in genomics, cardiology, and preventive medicine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Prof. Anurag Agrawal", role: "Genomics & Precision Medicine", bio: "Former Director, CSIR-IGIB; Dean, Ashoka University." },
              { name: "Dr. Aashish Contractor", role: "Cardiology & Rehabilitation", bio: "Leading expert in cardiac rehab and preventive cardiology." },
              { name: "Dr. Nirmal Punjabi", role: "Clinical Research", bio: "Specialist in metabolic health and clinical trial validation." }
            ].map((expert, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors duration-300">
                <h4 className="text-lg font-bold text-primary mb-1">{expert.name}</h4>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">{expert.role}</p>
                <p className="text-sm opacity-70 leading-relaxed">{expert.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="flex justify-center">
          <a 
            href="https://goqii.com/sanjeevini"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 button-primary flex items-center gap-3 group shadow-2xl shadow-primary/20 transition-all duration-300 hover:scale-105 text-lg"
          >
            Explore Sanjeevini
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
