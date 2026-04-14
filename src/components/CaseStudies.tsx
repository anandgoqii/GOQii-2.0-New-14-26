import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  HeartPulse, 
  ChevronRight,
  Play
} from 'lucide-react';
import { useModals } from '../context/ModalContext';

const CASE_STUDIES = [
  { 
    title: 'Global Insurance Partner', 
    icon: <HeartPulse className="w-6 h-6" />, 
    description: 'Scaling preventive healthcare across a massive policyholder base to reduce long-term risk and claims.', 
    result: '34% reduction in claims',
    metric: 'Outcome Metric: Claims Reduction',
    scale: 'Scale: 1M+ Policyholders',
    year: '2024 Deployment',
    image: 'https://appcdn.goqii.com/user/storeimg/46703_1775726677.png',
    link: 'https://www.youtube.com/watch?v=wfUk6-A891k'
  },
  { 
    title: 'Fortune 500 Corporate', 
    icon: <Users className="w-6 h-6" />, 
    description: 'Enhancing workforce vitality and productivity through AI-driven engagement and human coaching.', 
    result: '85% engagement rate',
    metric: 'Outcome Metric: Daily Active Users',
    scale: 'Scale: 50k+ Employees',
    year: '2023 Deployment',
    image: 'https://appcdn.goqii.com/user/storeimg/66210_1775727922.png',
    link: 'https://youtu.be/ycTIWOo_F2g?si=T-qxdyxLTTOngaK4'
  },
  { 
    title: 'Public Health (NHS)', 
    icon: <BarChart3 className="w-6 h-6" />, 
    description: 'Enabling large-scale preventive healthcare initiatives for governments and public health organizations.', 
    result: '90% patient satisfaction',
    metric: 'Outcome Metric: Patient Satisfaction',
    scale: 'Scale: Regional Deployment',
    year: '2024 Scale-up',
    image: 'https://appcdn.goqii.com/user/storeimg/31090_1775735420.png',
    link: 'https://www.youtube.com/watch?v=jMxC0WCxNYA&t=6s'
  },
];

export const CaseStudies = () => {
  const { openVideoModal } = useModals();

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="font-display font-bold mb-6 tracking-tight">Real Case Studies, Real Results.</h2>
          <p className="opacity-70 max-w-3xl mx-auto font-light leading-relaxed">
            From improving chronic disease management to scaling public health initiatives, our dynamic motivation model delivers measurable clinical outcomes today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={idx}
              onClick={() => openVideoModal(study.link, study.title)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card rounded-[2.5rem] overflow-hidden hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-primary/5 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-xl">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {study.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                <p className="opacity-70 leading-relaxed mb-6 group-hover:opacity-100 transition-opacity">
                  {study.description}
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80">{study.metric}</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">{study.scale}</p>
                </div>
                <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold text-lg">{study.result}</span>
                    <span className="text-[10px] opacity-50 uppercase tracking-widest font-bold">{study.year}</span>
                  </div>
                  <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
