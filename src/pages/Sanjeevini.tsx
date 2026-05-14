import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Dna, 
  UserCircle, 
  ShieldCheck, 
  Building2, 
  Microwave, 
  Brain,
  Timer
} from 'lucide-react';

const SanjeeviniPage = () => {
  return (
    <main className="bg-white dark:bg-[#020617] transition-colors duration-300">
      
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-white dark:bg-[#020617]">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-teal/5 blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-10"
          >
            The Protocol
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-[8rem] font-display font-bold tracking-tighter mb-8 text-slate-900 dark:text-white leading-[0.9]"
          >
            Sanjeevini
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-medium text-primary tracking-[0.15em] uppercase mb-8"
          >
            The Science of Longevity, Rooted in India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-slate-500 dark:text-slate-400 font-light text-lg md:text-xl max-w-2xl">
              Engineered for the Future of Human Health. Sanjeevini is not a wellness program — it is a clinical-grade operating system for human regeneration.
            </p>
            <div className="h-20 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ORIGIN STORY (Editorial) */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-slate dark:prose-invert max-w-none"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary" />
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-0">The Eternal Source</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900 dark:text-white leading-[1.1] mb-12 tracking-tight">
              In the Ramayana, Sanjeevini was the herb that restored life.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              <p>
                Today, we bring that ancient philosophy into the realm of modern science — combining genomics, AI, and behavioral intelligence to extend human healthspan.
              </p>
              <p>
                Longevity is not merely the absence of disease; it is the optimization of biological function across decades. Sanjeevini is our response to the modern epidemic of reactive care. It is a transition from "dying slowly" to "living fully."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONSORTIUM (Academic Authority) */}
      <section className="py-32 px-6 bg-white dark:bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">Scientific Consortium</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Built by Authority</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light text-sm md:text-base">
              Sanjeevini is the result of a multi-disciplinary partnership between India's leading research institutions and digital health pioneers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center mb-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center">
                    <UserCircle className="w-20 h-20 text-slate-400 dark:text-slate-600 opacity-20" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-slate-100 dark:border-slate-800 pt-20">
            {[
              { 
                name: "Ashoka University", 
                role: "Clinical Bio-Informatics", 
                desc: "Validating the intersection of nutrition and metabolic profiling through large-scale demographic data." 
              },
              { 
                name: "IISc Bangalore", 
                role: "Computational Modeling", 
                desc: "Developing the digital twin architectures that simulate physiological responses to behavioral interventions." 
              },
              { 
                name: "NIMS Hyderabad", 
                role: "Clinical Validation", 
                desc: "Overseeing institutional review boards and clinical efficacy of the Sanjeevini protocols." 
              }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">{p.name}</h3>
                <p className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4">{p.role}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIGATORS (Structured Grid) */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">The Investigators</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Principal Research Board</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Prof. Anurag Agrawal", role: "Principal Investigator - Genomics", org: "Ashoka University" },
              { name: "Dr. Aashish Contractor", role: "Clinical Lead - Cardiovascular", org: "HMS Foundation" },
              { name: "Dr. Nirmal Punjabi", role: "Protocol Architect - Metabolic", org: "NIMS" },
              { name: "Satyen Kothari", role: "Systems Design - Behavioral", org: "Stanford d.school" },
              { name: "Vishal Gondal", role: "Product Strategy - ALIVE O.S.", org: "GOQii" },
              { name: "Dr. Pallavi Gondal", role: "Informatics & Data Privacy", org: "Clinical Research" }
            ].map((inv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl group hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 mb-6 grayscale group-hover:grayscale-0 transition-all">
                   <UserCircle className="w-full h-full text-slate-300 group-hover:text-primary/40" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{inv.name}</h4>
                <p className="text-primary font-bold text-[10px] tracking-[0.1em] uppercase mb-2">{inv.role}</p>
                <p className="text-slate-400 text-xs font-medium">{inv.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SYSTEM (Link to ALIVE OS) */}
      <section className="py-24 bg-white dark:bg-[#020617] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">The Intelligence Foundation</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Powered by ALIVE O.S.
              </h2>
              <p className="text-primary font-bold text-sm mb-8">
                10 years of proprietary IP — the behavioral engine no competitor can replicate.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: <Dna className="w-5 h-5" />, title: "Genomics", desc: "Whole genome sequencing and multi-omic blood biomarkers." },
                  { icon: <UserCircle className="w-5 h-5" />, title: "Digital Twin", desc: "Predictive physiological modeling built on 10B+ data points." },
                  { icon: <Brain className="w-5 h-5" />, title: "Behavioral Intelligence", desc: "Proprietary neurocoding for permanent habit change." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors bg-slate-50/50 dark:bg-white/5">
                    <div className="mt-1 text-primary">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/#alive-os" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                Explore The Architecture <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-[80%] h-[80%] border-2 border-dashed border-primary/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-[60%] h-[60%] border-2 border-dashed border-primary/40 rounded-full flex items-center justify-center">
                    <div className="w-[40%] h-[40%] bg-primary/10 rounded-full flex items-center justify-center">
                      <Microwave className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#020617] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES (High Impact) */}
      <section className="py-32 bg-slate-900 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">Clinical Outcomes</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">Measurable Longevity Gains</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "+21%", label: "Immune Resilience", desc: "Enhanced baseline cellular response" },
              { val: "+16%", label: "Muscle Strength", desc: "Improved biological age vs chronological" },
              { val: "+23%", label: "Cognitive Performance", desc: "Focus and neuro-plasticity metrics" },
              { val: "+28%", label: "Digital Adherence", desc: "Engagement with clinical outcomes" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold text-primary mb-4"
                >
                  {stat.val}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-slate-400 text-xs md:text-sm font-light uppercase tracking-widest">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & EXPERIENCE */}
      <section className="py-24 bg-white dark:bg-[#020617] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12 text-center mb-12">
               <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-4">The Membership</p>
               <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Precision Longevity Protocol</h2>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
               {[
                 { icon: <ShieldCheck />, title: "Personal Health Coach", desc: "24/7 dedicated support for protocol implementation." },
                 { icon: <UserCircle />, title: "Live Digital Twin", desc: "Real-time modeling based on continuous biomarkers." },
                 { icon: <Timer />, title: "Sentient Wearables", desc: "Proactive tracking of stress and recovery signals." },
                 { icon: <Brain />, title: "Behavioral Gamification", desc: "Neuro-coding loops for sustainable lifestyle shift." }
               ].map(item => (
                 <div key={item.title} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="lg:col-span-5">
              <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl" />
                
                <div className="mb-auto">
                  <h3 className="text-2xl font-bold mb-8">System Access</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-display font-bold text-primary">$110</span>
                    <span className="text-slate-400">/ month</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-12 uppercase tracking-widest">Inclusive of full clinical testing</p>
                  
                  <ul className="space-y-4 mb-16">
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Cohort-based intake
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Limited annual slots
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Scientific board review of applications
                    </li>
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-primary text-white font-bold rounded-2xl tracking-widest uppercase hover:bg-primary-dark transition-colors"
                >
                  Apply for Sanjeevini
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SanjeeviniPage;
