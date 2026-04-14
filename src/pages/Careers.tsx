import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Target, 
  Heart, 
  Globe, 
  ArrowRight, 
  ChevronRight,
  Zap,
  Users,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModals } from '../context/ModalContext';

const WHY_GOQII = [
  {
    title: 'AI-powered health platforms',
    description: 'Building the next generation of predictive health models.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: 'Preventive healthcare at scale',
    description: 'Impacting millions through proactive health management.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Consumer & Enterprise solutions',
    description: 'Creating seamless health experiences for everyone.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'Behavior change systems',
    description: 'Leveraging science to drive lasting healthy habits.',
    icon: <Zap className="w-6 h-6" />
  }
];

const CULTURE = [
  'Mission-first thinking',
  'Ownership and accountability',
  'Fast execution and experimentation',
  'Continuous learning'
];

const LIFE_AT_GOQII = [
  {
    title: 'Health Ecosystem',
    description: 'Full access to the GOQii health ecosystem for you and your family.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: 'Wellness Programs',
    description: 'Personalized coaching, wellness programs, and fitness challenges.',
    icon: <ActivityIcon className="w-6 h-6" />
  },
  {
    title: 'Flexible Work',
    description: 'A collaborative environment that respects work-life harmony.',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: 'Growth Opportunities',
    description: 'Continuous learning and opportunities to grow across functions.',
    icon: <Target className="w-6 h-6" />
  }
];

const ROLES = [
  'Engineering & AI',
  'Product & Design',
  'Health & Coaching',
  'Marketing & Growth',
  'Sales & Partnerships'
];

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export const Careers = () => {
  const { openApplyModal, openRecruitmentModal } = useModals();

  return (
    <div className="pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Briefcase className="w-4 h-4" />
              Careers at GOQii
            </div>
            <h1 className="font-display font-bold mb-8 leading-[1.1]">
              Build the Future of <span className="text-primary">Preventive Healthcare</span>
            </h1>
            <p className="text-xl opacity-70 font-light leading-relaxed mb-12 max-w-xl">
              Join us in transforming how the world approaches health — from reactive treatment to continuous, AI-driven prevention.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openApplyModal}
                className="px-8 py-4 button-primary text-base shadow-xl shadow-primary/20 group"
              >
                View Open Roles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/team/1000/1000" 
                alt="GOQii Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-xs opacity-50 uppercase tracking-widest">Team Presence</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why GOQii */}
      <section className="py-32 bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold mb-6">Why GOQii</h2>
            <h3 className="text-2xl opacity-70 font-light max-w-3xl mx-auto leading-relaxed">
              Work on What Truly Matters. We are building an ecosystem that impacts millions of lives.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_GOQII.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 hover:border-primary/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="opacity-60 font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Life */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Culture */}
            <div>
              <h2 className="font-display font-bold mb-8">Our Culture</h2>
              <p className="text-xl opacity-70 font-light leading-relaxed mb-12">
                Driven by Purpose. Powered by People. We are a team of technologists, designers, and health experts.
              </p>
              <div className="space-y-4">
                {CULTURE.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-black/5 dark:bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Life at GOQii */}
            <div>
              <h2 className="font-display font-bold mb-8">Life at GOQii</h2>
              <p className="text-xl opacity-70 font-light leading-relaxed mb-12">
                A Culture of Health and Performance. We believe in practicing what we build.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LIFE_AT_GOQII.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-black/5 dark:border-white/10">
                    <div className="text-primary mb-4">{item.icon}</div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm opacity-60 font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-32 bg-primary text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold mb-6 text-white">Open Roles</h2>
              <p className="text-xl opacity-80 font-light leading-relaxed">
                Explore opportunities across our core functions. Join our team and make an impact.
              </p>
            </div>
            <button 
              onClick={openApplyModal}
              className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              View All Open Positions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLES.map((role, idx) => (
              <div 
                key={idx} 
                onClick={openApplyModal}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-pointer group flex items-center justify-between"
              >
                <span className="text-xl font-bold">{role}</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold mb-8">Ready to Make an Impact?</h2>
          <p className="text-xl opacity-70 font-light leading-relaxed mb-12">
            If you’re passionate about health, technology, and building for scale — we’d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={openApplyModal}
              className="px-10 py-5 button-primary text-lg w-full sm:w-auto"
            >
              Apply Now
            </button>
            <button 
              onClick={openRecruitmentModal}
              className="px-10 py-5 rounded-full border border-black/10 dark:border-white/10 font-bold text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Contact Recruitment Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
