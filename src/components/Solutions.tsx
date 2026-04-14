import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Hospital, 
  Microscope, 
  Globe, 
  ChevronRight 
} from 'lucide-react';

const SOLUTIONS = [
  { 
    title: 'Employers & Corporates', 
    icon: <Building2 className="w-6 h-6" />, 
    description: 'Drive employee health, productivity, and engagement at scale.', 
    cta: 'Explore Corporate Solutions',
    color: 'from-accent-blue to-accent-blue/80',
    image: 'https://appcdn.goqii.com/storeimg/53633_1775040958.png',
    link: 'https://goqii.com/healthengage-corporate'
  },
  { 
    title: 'Insurers & Payers', 
    icon: <ShieldCheck className="w-6 h-6" />, 
    description: 'Shift from reactive claims to proactive risk reduction.', 
    cta: 'Explore Insurance Solutions',
    color: 'from-primary to-primary-dark',
    image: 'https://appcdn.goqii.com/storeimg/60552_1775040924.png',
    link: 'https://goqii.com/healthengage-insurance'
  },
  { 
    title: 'Hospitals & Providers', 
    icon: <Hospital className="w-6 h-6" />, 
    description: 'Enable continuous care beyond discharge.', 
    cta: 'Explore Provider Solutions',
    color: 'from-indigo-500 to-indigo-700',
    image: 'https://picsum.photos/seed/hospital-solution/600/400',
    link: 'https://go-qii-connected-care-7c49.vercel.app/'
  },
  { 
    title: 'Pharma & Life Sciences', 
    icon: <Microscope className="w-6 h-6" />, 
    description: 'Drive adherence and real-world patient outcomes.', 
    cta: 'Explore Pharma Solutions',
    color: 'from-emerald-500 to-emerald-700',
    image: 'https://appcdn.goqii.com/storeimg/62451_1775040945.png',
    link: 'https://goqii.com/healthengage-pharma'
  },
  { 
    title: 'Government & Public Health', 
    icon: <Globe className="w-6 h-6" />, 
    description: 'Scale preventive healthcare across populations.', 
    cta: 'Explore Public Health Solutions',
    color: 'from-primary to-primary-dark',
    image: 'https://picsum.photos/seed/public-health-solution/600/400',
    link: '/for-business'
  },
];

export const Solutions = () => {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Industry Solutions</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Built for Every Healthcare Stakeholder. Scalable, AI-driven solutions that deliver measurable health outcomes.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {SOLUTIONS.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card rounded-[2.5rem] hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-500 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity z-20`} />
              
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className={`absolute top-48 left-8 -translate-y-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white z-20`}>
                {solution.icon}
              </div>
              
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{solution.title}</h3>
                <p className="opacity-70 leading-relaxed mb-8 group-hover:opacity-100 transition-opacity flex-1">
                  {solution.description}
                </p>
                
                {(() => {
                  const isExternal = solution.link.startsWith('http');
                  const content = (
                    <>
                      {solution.cta}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  );
                  const className = "flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-primary-dark transition-colors mt-auto";
                  
                  return isExternal ? (
                    <a 
                      href={solution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link 
                      to={solution.link}
                      className={className}
                    >
                      {content}
                    </Link>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
