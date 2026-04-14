import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Microscope, 
  ShieldCheck, 
  Activity, 
  Users, 
  ChevronRight,
  Zap,
  BrainCircuit
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
          <h2 className="font-display font-bold mb-6 tracking-tight">Clinically Proven Outcomes</h2>
          <p className="opacity-70 max-w-3xl mx-auto font-light leading-relaxed mb-8 text-lg">
            Built on a foundation of clinical authority and rigorous validation. GOQii is recognized globally for its research-backed approach to human healthspan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-3 bg-primary/5 border border-primary/10 rounded-full flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold tracking-wide">XPRIZE Healthspan Semifinalist</span>
            </div>
            <div className="px-6 py-3 bg-primary/5 border border-primary/10 rounded-full flex items-center gap-3">
              <Microscope className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold tracking-wide">Research-Backed Protocol</span>
            </div>
          </div>
        </motion.div>

        {/* Clinical Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { value: '+21%', label: 'Immune function improvement', icon: <Activity className="w-6 h-6" /> },
            { value: '+16%', label: 'Muscular strength increase', icon: <Zap className="w-6 h-6" /> },
            { value: '+23%', label: 'Cognitive performance boost', icon: <BrainCircuit className="w-6 h-6" /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-all text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-display font-bold text-primary mb-3">{stat.value}</div>
              <p className="text-sm opacity-60 font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Named Experts & Partners */}
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
              <div key={idx} className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <h4 className="text-lg font-bold text-primary mb-1">{expert.name}</h4>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">{expert.role}</p>
                <p className="text-sm opacity-70 leading-relaxed">{expert.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter">IIT Bombay</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter">Tata 1mg</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter">Decode Age</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* 1. Philosophy - Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 lg:row-span-1 p-8 rounded-[2.5rem] bg-black/5 dark:bg-white/5 hover:bg-primary/5 transition-all duration-500 group border border-transparent hover:border-primary/10 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg mb-6">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Sanjeevini Consortium</h3>
              <p className="text-base opacity-60 leading-relaxed font-light">
                A global network of medical experts and clinical researchers validating our outcomes. Transforming healthcare from reactive treatment to continuous, AI-driven prevention.
              </p>
            </div>
          </motion.div>

          {/* 2. Thesis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 p-8 rounded-[2.5rem] bg-black/5 dark:bg-white/5 hover:bg-primary/5 transition-all duration-500 group border border-transparent hover:border-primary/10 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 mb-4">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Thesis</h3>
            <p className="text-sm opacity-60 leading-relaxed font-light">
              Combining real-time biological data with behavioral science to extend human healthspan.
            </p>
          </motion.div>

          {/* 3. Clinical Consortium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 p-8 rounded-[2.5rem] bg-black/5 dark:bg-white/5 hover:bg-primary/5 transition-all duration-500 group border border-transparent hover:border-primary/10 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Clinical Consortium</h3>
            <p className="text-sm opacity-60 leading-relaxed font-light">
              A global network of medical experts and clinical researchers validating our outcomes.
            </p>
          </motion.div>

          {/* 4. Featured Image - Tall/Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-2 lg:row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-8 left-8 z-20">
              <img 
                src="https://appcdn.goqii.com/user/storeimg/9046_1775830352.png" 
                alt="Sanjeevini Logo" 
                className="h-16 w-auto object-contain drop-shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <img 
              src="https://appcdn.goqii.com/user/storeimg/85258_1775725870.jpg" 
              alt="Sanjeevini Consortium Clinical Excellence" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70 mb-2">Clinical Excellence</p>
              <h4 className="text-2xl font-display font-bold">Rigorous Medical Validation</h4>
              <p className="text-sm opacity-70 mt-2 font-light">Our protocols are tested and verified by leading medical institutions worldwide.</p>
            </div>
          </motion.div>

          {/* 5. Diagnostics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 p-8 rounded-[2.5rem] bg-black/5 dark:bg-white/5 hover:bg-primary/5 transition-all duration-500 group border border-transparent hover:border-primary/10 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Diagnostics</h3>
            <p className="text-sm opacity-60 leading-relaxed font-light">
              Advanced lab testing and secure data infrastructure for population-scale health.
            </p>
          </motion.div>

          {/* 6. Adherence Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 p-8 rounded-[2.5rem] bg-black/5 dark:bg-white/5 hover:bg-primary/5 transition-all duration-500 group border border-transparent hover:border-primary/10 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Adherence</h3>
            <p className="text-sm opacity-60 leading-relaxed font-light">
              Proprietary behavioral neurocoding that ensures sustained engagement.
            </p>
          </motion.div>

          {/* 7. Validation Badge - Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 p-8 rounded-[2.5rem] bg-primary/10 border border-primary/20 flex items-center gap-8"
          >
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-primary leading-none mb-2">100%</span>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Validated Protocols</span>
            </div>
            <div className="h-12 w-px bg-primary/20 hidden md:block" />
            <p className="text-sm opacity-70 leading-relaxed font-light max-w-xs">
              Every protocol is rigorously reviewed by our global clinical consortium of medical experts and researchers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
