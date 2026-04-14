import React from 'react';
import { motion } from 'motion/react';
import { 
  Dna, 
  Brain, 
  Handshake, 
  Lock, 
  FlaskConical, 
  Target,
  ArrowRight,
  ArrowDown,
  ArrowLeft
} from 'lucide-react';

const ECO_COMPONENTS = [
  // Row 1
  { 
    id: 'wearables', 
    title: 'Smart Wearable Devices', 
    icon: <Dna className="w-8 h-8" />, 
    description: 'Capture real-time biological signals and activity data.',
    row: 1,
    col: 1
  },
  { 
    id: 'twin', 
    title: 'Personalized Digital Twin', 
    icon: <Brain className="w-8 h-8" />, 
    description: 'A dynamic model of your health that evolves with your data.',
    row: 1,
    col: 2
  },
  { 
    id: 'coaching', 
    title: 'AI-Augmented Coaching', 
    icon: <Handshake className="w-8 h-8" />, 
    description: 'Human + AI guidance to drive sustained behavior change.',
    row: 1,
    col: 3
  },
  // Row 2 (Order for flow: Rewards -> Labs -> Locker)
  { 
    id: 'rewards', 
    title: 'UHT Rewards System', 
    icon: <Target className="w-8 h-8" />, 
    description: 'Gamified incentives that reinforce healthy behaviors.',
    row: 2,
    col: 3
  },
  { 
    id: 'labs', 
    title: 'Integrated Lab Testing', 
    icon: <FlaskConical className="w-8 h-8" />, 
    description: 'Seamless diagnostics and health insights integration.',
    row: 2,
    col: 2
  },
  { 
    id: 'locker', 
    title: 'Health Locker', 
    icon: <Lock className="w-8 h-8" />, 
    description: 'Secure, unified storage for medical records and reports.',
    row: 2,
    col: 1
  },
];

export const HealthStack = () => {
  return (
    <section className="relative py-8 overflow-hidden w-full ecosystem-section">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-[10px] font-medium tracking-[0.3em] uppercase text-primary mb-4 max-w-none mx-auto">Scene — The GOQii Ecosystem</h2>
          <h3 className="font-display mb-6 tracking-tight">A Connected Intelligence System for Health</h3>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Every component works together to track, understand, and improve human health continuously.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Connection Lines (Hidden on Mobile) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              {/* Row 1: Wearable -> Twin -> Coaching */}
              <motion.path
                d="M350 150 L450 150"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path
                d="M750 150 L850 150"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              {/* Vertical: Coaching -> Rewards */}
              <motion.path
                d="M1000 250 L1000 350"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
 
              {/* Row 2: Rewards -> Labs -> Locker */}
              <motion.path
                d="M850 450 L750 450"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 2 }}
              />
              <motion.path
                d="M450 450 L350 450"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-24">
            {ECO_COMPONENTS.map((comp, idx) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.15,
                  ease: "easeOut"
                }}
                className="eco-card group relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {comp.icon}
                </div>
                
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {comp.title}
                </h4>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors max-w-none">
                  {comp.description}
                </p>

                {/* Flow Indicators for Mobile/Tablet */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
                  {idx < 2 && <ArrowRight className="w-5 h-5 text-primary/40" />}
                  {idx === 2 && <ArrowDown className="w-5 h-5 text-primary/40" />}
                  {idx > 2 && idx < 5 && <ArrowLeft className="w-5 h-5 text-primary/40" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-accent-teal/10 to-accent-blue/10 border border-white/5">
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400 mb-2 max-w-none">System Message</h4>
            <p className="text-2xl md:text-3xl font-display font-medium gradient-text max-w-none">
              One platform. Continuous engagement. Measurable outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
