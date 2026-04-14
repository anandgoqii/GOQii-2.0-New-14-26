import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Globe, Activity, Heart, ShieldCheck, Users, MapPin, Target } from 'lucide-react';
import { Leadership } from '../components/Leadership';
import { Recognition } from '../components/Recognition';
import { Partners } from '../components/Partners';
import { FinalCTA } from '../components/FinalCTA';

export const About = () => {
  const [activeMapQuery, setActiveMapQuery] = useState("Mumbai");

  return (
    <main className="relative pb-20 bg-[var(--bg-primary)] transition-colors duration-300 overflow-hidden">
      
      {/* HERO — ABOUT GOQii */}
      <section className="relative flex items-center justify-center px-4 w-full">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              About GOQii
            </span>
            <h1 className="hero-title font-display font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Transforming Preventive <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Healthcare at Scale</span>
            </h1>
            <p className="hero-subtext text-slate-600 dark:text-slate-300 font-light leading-relaxed mx-auto">
              GOQii is a Smart Health Ecosystem that combines advanced technology with human coaching to drive a permanent shift from reactive sick care to proactive preventive healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SCENE — OUR STORY (fade text) */}
      <section className="px-4 relative w-full">
        <div className="max-w-3xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-4">Our Story</p>
            <h2 className="font-display font-bold text-slate-900 dark:text-white mb-8">A Mission to Redefine Healthcare</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              <p>
                Founded in 2014 by visionary entrepreneur Vishal Gondal, GOQii has been at the forefront of transforming preventive healthcare on a global scale.
              </p>
              <p>
                What started as a mission to shift the focus from reactive “sick care” to proactive preventive care has evolved into a comprehensive digital health platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCENE — WHAT WE DO (zoom) */}
      <section className="px-4 bg-white dark:bg-slate-900 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-4">What We Do</p>
            <h2 className="font-display font-bold text-slate-900 dark:text-white mb-6">A Complete Health Platform</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
              GOQii is a comprehensive digital health and wellness solution that integrates healthcare, fitness, and chronic disease management into one seamless experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "Wearable technology" },
              { icon: Target, title: "AI-driven insights" },
              { icon: Users, title: "Personalized coaching" },
              { icon: Heart, title: "Medical & health services" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl text-center border border-slate-100 dark:border-slate-700"
              >
                <div className="w-16 h-16 mx-auto bg-primary-light dark:bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE — HOW WE WORK */}
      <section className="px-4 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-4">How We Work</p>
            <h2 className="font-display font-bold text-slate-900 dark:text-white mb-6">Technology + Human Intelligence</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light mb-8">
              GOQii blends intelligent data with expert human coaching to deliver continuous engagement and long-term behavior change.
            </p>
            <ul className="space-y-4">
              {[
                "Personalized health journeys",
                "Real-time insights and nudges",
                "Continuous monitoring and engagement",
                "Expert-led coaching and guidance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/coaching/800/800" alt="Coaching" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCENE — OUR ECOSYSTEM (visual) */}
      <section className="px-4 bg-slate-900 text-white relative overflow-hidden w-full">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(235,153,37,0.4)_0%,transparent_100%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-4">Our Ecosystem</p>
            <h2 className="font-display font-bold mb-8">A Smart Preventive Health Ecosystem</h2>
            <p className="text-slate-300 font-light max-w-3xl mx-auto mb-16">
              GOQii’s platform connects devices, data, AI, and human coaching into a unified system that delivers measurable health outcomes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Track health continuously",
              "Understand risks early",
              "Take proactive action",
              "Sustain healthy behavior"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
              >
                <div className="text-primary font-bold text-2xl mb-4">0{idx + 1}</div>
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE — GLOBAL PRESENCE (map style) */}
      <section className="px-4 relative w-full">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-4">Global Presence</p>
            <h2 className="font-display font-bold text-slate-900 dark:text-white mb-6">Built in Silicon Valley. Scaled Globally.</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
              Headquartered in Menlo Park, California, with offices in Mumbai, India and UK.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
            <div className="flex flex-col gap-4">
              {[
                {
                  country: "United States",
                  company: "GOQii Inc",
                  address: "120, Wood Avenue South, Suite 300,\nIselin, NJ 08830",
                  query: "120 Wood Avenue South, Iselin, NJ 08830"
                },
                {
                  country: "United Kingdom",
                  company: "GOQii UK Limited",
                  address: "29 West Way, Hove, England, BN3 8LS",
                  query: "29 West Way, Hove, England, BN3 8LS"
                },
                {
                  country: "India",
                  company: "GOQii Technologies Pvt. Ltd.",
                  address: "101 Satyam Tower, Govandi East,\nMumbai 400088, India",
                  query: "101 Satyam Tower, Govandi East, Mumbai 400088, India"
                }
              ].map((loc, idx) => {
                const isActive = activeMapQuery === loc.query;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setActiveMapQuery(loc.query)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-white dark:bg-slate-800 border-primary shadow-lg shadow-primary/10 -translate-y-1' 
                        : 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:-translate-y-1 hover:border-primary/50'
                    }`}
                  >
                    <h4 className={`text-xl font-bold mb-2 ${isActive ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                      {loc.country}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{loc.company}</p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm whitespace-pre-line mt-1">{loc.address}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700"
            >
              <iframe 
                src={`https://www.google.com/maps?q=${encodeURIComponent(activeMapQuery)}&output=embed`}
                width="100%" 
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GOQii Global Locations"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCENE — OUR IMPACT (metrics) */}
      <section className="px-4 bg-white dark:bg-slate-900 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-4">Our Impact</p>
            <h2 className="font-display font-bold text-slate-900 dark:text-white mb-6">Driving Health Outcomes at Scale</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
              GOQii has empowered millions of users to take control of their health and has contributed to building healthier communities globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Individuals", value: "Millions+" },
              { label: "Enterprises", value: "500+" },
              { label: "Insurers", value: "Global" },
              { label: "Governments", value: "Partnered" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE — OUR APPROACH */}
      <section className="px-4 w-full">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-4">Our Approach</p>
            <h2 className="font-display font-bold text-slate-900 dark:text-white mb-8">From Data to Behavior Change</h2>
            <p className="text-slate-700 dark:text-slate-300 font-light mb-12">
              GOQii focuses on the most critical gap in healthcare:<br/>
              <span className="font-bold text-primary">Turning insights into sustained action.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {["Continuous engagement", "Habit formation", "Measurable outcomes"].map((item, idx) => (
                <div key={idx} className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 font-medium text-slate-800 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Leadership />
      <Recognition />
      <Partners />

      {/* SCENE — OUR VISION (slow cinematic) */}
      <section className="px-4 relative overflow-hidden bg-slate-950 text-white w-full">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-[url('https://picsum.photos/seed/vision/1920/1080')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <p className="small font-bold uppercase tracking-widest text-primary mb-6">Our Vision</p>
            <h2 className="font-display font-bold mb-8">The Future of Preventive Healthcare</h2>
            <p className="font-light text-slate-300 mb-12">
              We believe healthcare should not begin when illness occurs.<br/>
              It should be continuous, personalized, and proactive.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              {[
                "Health is monitored in real time",
                "Interventions happen early",
                "Outcomes are measurable",
                "Longevity is optimized"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCENE — OUR MOVEMENT */}
      <section className="px-4 bg-primary text-slate-900 text-center w-full">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="small font-bold uppercase tracking-widest opacity-60 mb-4">Our Movement</p>
            <h2 className="font-display font-bold mb-8 text-slate-900">Be The Force</h2>
            <p className="font-medium mb-8 opacity-80">
              GOQii is more than a platform—it is a movement.
            </p>
            <p className="text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
              We are enabling individuals to become the force of change in their own health journey and creating a global shift toward healthier living.
            </p>
          </motion.div>
        </div>
      </section>

      <FinalCTA />

    </main>
  );
};
