import React from 'react';
import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { 
  ChevronRight, 
  AlertCircle, 
  CheckCircle2, 
  Zap, 
  Users, 
  BarChart3, 
  Layers, 
  ShieldCheck,
  TrendingDown,
  Activity,
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import { useModals } from '../context/ModalContext';
import { FinalCTA } from '../components/FinalCTA';

const INDUSTRY_MAP: Record<string, string> = {
  'insurance': 'Insurers',
  'pharma': 'Pharma Companies',
  'hospital': 'Healthcare Providers',
  'corporate': 'Global Enterprises'
};

const CASE_STUDIES: Record<string, { client: string; result: string; desc: string }> = {
  'insurance': {
    client: 'Global Life Insurer',
    result: '15% Reduction in Claims',
    desc: 'Implemented GOQii HealthEngage to incentivize healthy behaviors among policyholders.'
  },
  'pharma': {
    client: 'Top 10 Pharma Co',
    result: '28% Increase in Adherence',
    desc: 'Digital therapeutic companion for chronic patients improved medication compliance.'
  },
  'hospital': {
    client: 'Multi-specialty Hospital Chain',
    result: '34% Lower Readmissions',
    desc: 'Post-discharge remote monitoring and coaching reduced emergency returns.'
  },
  'corporate': {
    client: 'Fortune 500 Tech Firm',
    result: '85% Employee Engagement',
    desc: 'Holistic wellness platform boosted workforce productivity and reduced absenteeism.'
  },
  'default': {
    client: 'Enterprise Partner',
    result: '90% Satisfaction Rate',
    desc: 'Driving measurable health outcomes across diverse populations.'
  }
};

export const ForBusiness = () => {
  const { industry } = useParams<{ industry: string }>();
  const { openDemoModal } = useModals();
  
  const industryName = industry ? INDUSTRY_MAP[industry] || 'Enterprises' : 'Enterprises';
  const caseStudy = industry ? CASE_STUDIES[industry] || CASE_STUDIES.default : CASE_STUDIES.default;

  return (
    <main className="relative bg-[var(--bg-primary)] overflow-hidden">
      {/* 1. Hero */}
      <section className="relative py-24 px-4 border-b border-black/5 dark:border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(235,153,37,0.1)_0%,transparent_70%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-medium tracking-widest uppercase mb-8 inline-block">
              Enterprise Solutions
            </span>
            <h1 className="hero-title font-display tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              Transform Healthcare <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Outcomes at Scale</span>
            </h1>
            <p className="hero-subtext text-slate-600 dark:text-slate-300 leading-relaxed mx-auto mb-12">
              AI-powered preventive healthcare platform designed for <span className="font-semibold text-slate-900 dark:text-white">{industryName}</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={openDemoModal}
                className="px-10 py-5 bg-primary text-white rounded-full font-medium text-base hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
              >
                Request a Demo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-slate-900 dark:text-white mb-8 leading-tight">
                Healthcare today is <span className="text-red-500">reactive, fragmented, and expensive.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Traditional models wait for illness to occur, leading to spiraling costs and poor patient outcomes. The gap between clinical care and daily life is where health fails.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Rising Costs", desc: "Chronic diseases drive 80% of healthcare spending." },
                  { title: "Poor Adherence", desc: "50% of patients fail to follow treatment plans." },
                  { title: "Low Engagement", desc: "Traditional wellness programs see less than 10% participation." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-1">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-500 text-sm max-w-none">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-red-500/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">System Status</p>
                      <p className="font-bold text-red-500">Reactive Mode</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-red-500" />
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-red-500" />
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-red-500" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution (GOQii) */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-slate-900 dark:text-white mb-6">
              GOQii enables <span className="text-primary">continuous, preventive, and personalized</span> healthcare.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We bridge the gap between clinical visits and daily life with a unified ecosystem of data, AI, and human expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "AI-driven insights", 
                desc: "Predictive analytics that identify health risks before they become clinical events." 
              },
              { 
                icon: Users, 
                title: "Human coaching", 
                desc: "Expert health coaches who provide the motivation and guidance needed for permanent behavior change." 
              },
              { 
                icon: Activity, 
                title: "Real-time engagement", 
                desc: "Continuous monitoring and micro-interventions that keep users on track every single day." 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-none">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Outcomes */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display mb-6">Measurable Business Impact</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our platform is built to deliver hard clinical and financial outcomes for our partners.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Reduce claims / costs", value: "-15%", icon: TrendingDown },
              { label: "Improve adherence", value: "+28%", icon: HeartPulse },
              { label: "Increase engagement", value: "85%", icon: Users },
              { label: "Better outcomes", value: "90%", icon: CheckCircle2 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-display font-semibold mb-2 text-primary">{item.value}</div>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest max-w-none">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Platform Modules */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "HealthEngage", icon: Zap, color: "bg-orange-500" },
                  { title: "Coaching", icon: Users, color: "bg-blue-500" },
                  { title: "Analytics", icon: BarChart3, color: "bg-teal-500" },
                  { title: "Integrations", icon: Layers, color: "bg-purple-500" }
                ].map((module, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-2xl ${module.color} text-white flex items-center justify-center mb-4 shadow-lg`}>
                      <module.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{module.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-slate-900 dark:text-white mb-8">A Unified Health Intelligence Stack</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                GOQii isn't just an app—it's a comprehensive infrastructure for preventive health. Our modular platform allows you to deploy exactly what you need.
              </p>
              <ul className="space-y-6">
                {[
                  "Seamless integration with existing health systems via API",
                  "White-label capabilities for brand consistency",
                  "Enterprise-grade security and data privacy",
                  "Real-time dashboard for population health management"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-center text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Case Study */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <ShieldCheck className="w-64 h-64 text-primary" />
            </div>
            <div className="relative z-10">
              <span className="text-primary font-medium uppercase tracking-widest text-[10px] mb-6 block">Featured Case Study</span>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display text-slate-900 dark:text-white mb-2">{caseStudy.client}</h3>
                  <p className="text-lg text-slate-500 max-w-none">{caseStudy.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2">{caseStudy.result}</div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium max-w-none">Primary Outcome</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group">
                Read full case study
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <FinalCTA />
    </main>
  );
};

