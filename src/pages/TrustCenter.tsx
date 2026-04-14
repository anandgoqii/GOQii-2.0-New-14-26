import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, CheckCircle, FileText, Cpu, UserCheck } from 'lucide-react';
import { FinalCTA } from '../components/FinalCTA';

export const TrustCenter = () => {
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
              Trust Center
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Privacy, Security <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">& Compliance</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              At GOQii, trust is the foundation of everything we do. We are committed to protecting your data with institutional-grade security and absolute transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900/50 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Security & Compliance</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We adhere to the highest global standards for data protection and healthcare compliance. Our platform is built to exceed the requirements of the most regulated industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "HIPAA Compliant", desc: "Healthcare data privacy and security" },
                  { title: "ISO 27001 Certified", desc: "Information security management" },
                  { title: "GDPR Compliant", desc: "European data protection standards" },
                  { title: "DPDPA Ready", desc: "Digital Personal Data Protection Act" },
                  { title: "SOC 2 Type II", desc: "Security, Availability, and Confidentiality" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent-blue/20 flex items-center justify-center p-12">
                <Shield className="w-48 h-48 text-primary opacity-20 absolute" />
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <Lock className="w-8 h-8 text-primary mb-4" />
                    <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded-full mb-2" />
                    <div className="h-2 w-8 bg-slate-100 dark:bg-slate-700/50 rounded-full" />
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 translate-y-8">
                    <Eye className="w-8 h-8 text-accent-blue mb-4" />
                    <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded-full mb-2" />
                    <div className="h-2 w-8 bg-slate-100 dark:bg-slate-700/50 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Documents */}
      <section className="py-24 px-4 w-full bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Trust Documents</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Access our core compliance documents and legal frameworks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HIPAA BAA", desc: "Business Associate Agreement for healthcare partners." },
              { title: "GDPR DPA", desc: "Data Processing Addendum for EU data subjects." },
              { title: "SOC 2 Report", desc: "Available upon request under NDA." },
              { title: "Sub-processor List", desc: "Transparency on our third-party data handlers." }
            ].map((doc, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all group">
                <FileText className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold mb-2">{doc.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-24 px-4 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Data Protection</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our infrastructure is built with multiple layers of protection to ensure data integrity and availability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Lock, 
                title: "End-to-end encryption", 
                desc: "All data is encrypted in transit and at rest using industry-standard protocols." 
              },
              { 
                icon: Cpu, 
                title: "Secure cloud infrastructure", 
                desc: "Built on world-class cloud providers with redundant systems and 24/7 monitoring." 
              },
              { 
                icon: UserCheck, 
                title: "Role-based access control", 
                desc: "Strict access policies ensure that only authorized personnel can access specific data." 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 px-4 bg-slate-900 text-white w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                <FileText className="w-16 h-16 text-primary mb-8" />
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                  <div className="h-4 w-2/3 bg-white/10 rounded-full" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Governance & Ethics</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We believe in responsible innovation. Our governance framework ensures that AI and data are used ethically and for the benefit of our users.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Data privacy policies", desc: "Clear, transparent, and user-centric privacy guidelines." },
                  { title: "Responsible AI usage", desc: "Ethical AI frameworks to prevent bias and ensure accuracy." },
                  { title: "Clinical and ethical standards", desc: "Adherence to medical best practices and ethical guidelines." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Have questions about our security?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10">
            Our security and compliance team is here to help you understand how we protect your data.
          </p>
          <a 
            href="mailto:security@goqii.com"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            Contact our security team
          </a>
        </motion.div>
      </section>

      <FinalCTA />
    </main>
  );
};
