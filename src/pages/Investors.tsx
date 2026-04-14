import React from 'react';
import { motion } from 'motion/react';
import { Globe, TrendingUp, Users, Target, BarChart3, Award } from 'lucide-react';
import { FinalCTA } from '../components/FinalCTA';

export const Investors = () => {
  return (
    <main className="relative bg-[var(--bg-primary)] transition-colors duration-300 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 px-4 w-full">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              Investors & Company
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              The Future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Preventive Health</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              GOQii is a global leader in preventive healthcare, combining AI, data, and human coaching to shift the world from reactive sick care to proactive longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900/50 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Company Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Founded in 2014, GOQii has pioneered the "Smart Health" category. Our ecosystem integrates wearable technology, AI-driven health insights, and expert human coaching into a unified platform.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We serve millions of users and hundreds of enterprise partners globally, delivering measurable clinical outcomes and driving a permanent shift in health behavior.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <span className="block text-2xl font-bold text-primary">2014</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Founded</span>
                </div>
                <div className="px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <span className="block text-2xl font-bold text-primary">Millions</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Users</span>
                </div>
                <div className="px-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <span className="block text-2xl font-bold text-primary">500+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Enterprises</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/company/800/450" alt="GOQii Company" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Global Presence</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Headquartered in Silicon Valley, we have established a strong presence across key global markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { country: "India", city: "Mumbai", desc: "Primary engineering and operations hub serving one of the world's largest health markets." },
              { country: "United Kingdom", city: "London", desc: "Strategic center for European expansion and public health partnerships." },
              { country: "United States", city: "Menlo Park", desc: "Global headquarters and innovation center in the heart of Silicon Valley." }
            ].map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <Globe className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{loc.country}</h3>
                <p className="text-primary font-medium mb-4">{loc.city}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{loc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 px-4 bg-slate-900 text-white w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Institutional Confidence</h2>
              <div className="space-y-8">
                {[
                  { icon: Users, title: "Millions of users", desc: "A massive, engaged community driving continuous data and insights." },
                  { icon: BarChart3, title: "Enterprise deployments", desc: "Trusted by Fortune 500 companies and global insurance leaders." },
                  { icon: Award, title: "Preventive health at scale", desc: "Proven clinical outcomes across diverse populations and use cases." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-12 rounded-[3rem] border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl font-light text-slate-300 leading-relaxed mb-8 italic">
                "To shift healthcare from reactive treatment to continuous prevention, empowering every individual to become the force of change in their own health journey."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">Proactive Longevity</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Global Mission</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Partner With Us</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10">
            Join us in building the future of preventive healthcare. We are looking for partners who share our vision for a healthier world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Partner With Us
            </button>
            <button className="px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Contact Investor Relations
            </button>
          </div>
        </motion.div>
      </section>

      <FinalCTA />
    </main>
  );
};
