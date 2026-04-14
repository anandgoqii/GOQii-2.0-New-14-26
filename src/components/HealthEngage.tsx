import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Activity, MessageSquare, Network, BarChart, Route, Stethoscope, Radio, Target, ArrowRight } from 'lucide-react';

export const HealthEngage = () => {
  return (
    <section className="relative py-8 overflow-hidden bg-slate-50 dark:bg-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Top: Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-4 tracking-tight text-slate-900 dark:text-white"
          >
            GOQii HealthEngage
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary mb-6"
          >
            Proof-of-Health at Scale
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mx-auto"
          >
            A unified platform enabling insurers, providers, and enterprises to deliver preventive care, drive engagement, and measure real-world outcomes.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/3 flex flex-col gap-16">
            {/* Middle: 4 icon cards (Capabilities) */}
            <div>
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8"
              >
                Platform Capabilities
              </motion.h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Activity,
                    title: "End-to-End Care Programs",
                    desc: "Design, manage, and monitor personalized preventive care journeys with continuous engagement."
                  },
                  {
                    icon: MessageSquare,
                    title: "Omnichannel Engagement",
                    desc: "Connect with members across WhatsApp, SMS, email, and app through automated workflows."
                  },
                  {
                    icon: Network,
                    title: "Seamless Integration",
                    desc: "Integrates with EHR, claims, billing systems, and provider networks effortlessly."
                  },
                  {
                    icon: BarChart,
                    title: "Real-Time Analytics",
                    desc: "Track engagement, outcomes, and program performance with actionable insights."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-primary/5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary-light dark:bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h5>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-none">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Below: Modules (small pills or grid) */}
            <div>
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8"
              >
                Platform Modules
              </motion.h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Route, title: "Care Pathways", desc: "Structured digital journeys for chronic and preventive care." },
                  { icon: Stethoscope, title: "Risk & Triage Engine", desc: "Identify high-risk individuals and trigger timely interventions." },
                  { icon: Radio, title: "Remote Monitoring", desc: "Continuous tracking of vitals and health parameters." },
                  { icon: Target, title: "Engagement Engine", desc: "AI-driven nudges, reminders, and behavior change interventions." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="mt-1 shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h6>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-none">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-accent-blue p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col sticky top-24 shadow-2xl shadow-primary/20 h-auto"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-display mb-2">Get Started</h3>
                <p className="text-primary-light text-[10px] font-medium uppercase tracking-widest max-w-none">Tailored Solutions for Your Industry</p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { label: "For Insurance", path: "https://goqii.com/healthengage-insurance" },
                  { label: "For Pharma", path: "https://goqii.com/healthengage-pharma" },
                  { label: "For Corporate", path: "https://goqii.com/healthengage-corporate" },
                  { label: "For Hospital", path: "https://go-qii-connected-care-7c49.vercel.app/" }
                ].map((item, idx) => {
                  const isExternal = item.path.startsWith('http');
                  const content = (
                    <>
                      {item.label}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  );
                  const className = "w-full py-4 bg-white/10 hover:bg-white text-white hover:text-primary-dark font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 group border border-white/20 hover:border-white";
                  
                  return isExternal ? (
                    <a 
                      key={idx}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link 
                      key={idx}
                      to={item.path}
                      className={className}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-sm text-white leading-relaxed max-w-none">
                  Join the movement of preventive healthcare. Our platform is designed to scale with your organization's needs.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
