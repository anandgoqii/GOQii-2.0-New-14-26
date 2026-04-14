import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FlaskConical, Building2, Stethoscope, Activity, Network, ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'insurance',
    title: 'For Insurers & Payers',
    subtitle: 'Transform insurance from reactive claims to proactive health assurance.',
    icon: ShieldCheck,
    capabilities: [
      'AI-driven risk scoring',
      'Dynamic premium optimization',
      'Continuous member engagement',
      'Preventive health programs'
    ],
    outcome: 'Reduced claims. Improved risk pools. Healthier members.',
    image: 'https://appcdn.goqii.com/storeimg/60552_1775040924.png',
    link: 'https://goqii.com/healthengage-insurance'
  },
  {
    id: 'pharma',
    title: 'For Pharma & Life Sciences',
    subtitle: 'Drive adherence and real-world outcomes across patient journeys.',
    icon: FlaskConical,
    capabilities: [
      'Therapy adherence programs',
      'Patient engagement platforms',
      'Real-world evidence generation',
      'AI-driven intervention systems'
    ],
    outcome: 'Improved adherence. Better outcomes. Actionable insights.',
    image: 'https://appcdn.goqii.com/storeimg/62451_1775040945.png',
    link: 'https://goqii.com/healthengage-pharma'
  },
  {
    id: 'corporates',
    title: 'For Employers & Corporates',
    subtitle: 'Build healthier, more productive, and engaged workforces.',
    icon: Building2,
    capabilities: [
      'Employee wellness programs',
      'Behavior change coaching',
      'Gamified engagement',
      'Productivity insights'
    ],
    outcome: 'Higher engagement. Reduced absenteeism. Better performance.',
    image: 'https://appcdn.goqii.com/storeimg/53633_1775040958.png',
    link: 'https://goqii.com/healthengage-corporate'
  },
  {
    id: 'hospitals',
    title: 'For Hospitals & Providers',
    subtitle: 'Extend care beyond discharge with continuous monitoring.',
    icon: Stethoscope,
    capabilities: [
      'Remote patient monitoring',
      'Digital care pathways',
      'Post-discharge engagement',
      'Clinical triage systems'
    ],
    outcome: 'Better recovery. Lower readmissions. Continuous care.',
    image: 'https://appcdn.goqii.com/user/storeimg/78786_1775742039.jpg',
    link: 'https://go-qii-connected-care-7c49.vercel.app/'
  }
];

// Use isomorphic layout effect for accurate measurement without SSR warnings
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return;
    const updateRange = () => {
      if (trackRef.current) {
        const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
        const range = trackRef.current.scrollWidth - viewportWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };
    
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, [isMobile]);

  // Map scroll progress to exact pixel translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={containerRef} className={`relative ${isMobile ? 'h-auto py-12' : 'h-[400vh]'} bg-[var(--bg-primary)] transition-colors duration-300 w-full`}>
      <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen overflow-hidden'} flex flex-col pt-12 md:pt-20`}>
        
        {/* Header */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-4 md:mb-6 shrink-0">
          <p className="text-[10px] md:text-xs text-primary font-medium tracking-widest uppercase mb-1">Industry Ecosystems</p>
          <h2 className="text-2xl md:text-4xl font-display text-slate-900 dark:text-white leading-tight">One Platform. Multiple Healthcare Ecosystems.</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl text-sm md:text-base">GOQii adapts to the needs of every stakeholder in the healthcare value chain.</p>
        </div>

        {/* Track */}
        <motion.div 
          ref={trackRef}
          style={{ x: isMobile ? 0 : x }} 
          className={`flex ${isMobile ? 'flex-col px-4 gap-8' : 'flex-row w-max px-8 gap-6 md:gap-8 items-center pb-12 md:pb-20'}`}
        >
          {INDUSTRIES.map((ind, idx) => {
            const isExternal = ind.link.startsWith('http');
            const content = (
              <>
                {/* Background Image */}
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 z-[1]" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <ind.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-display text-white mb-2">{ind.title}</h4>
                    <p className="text-slate-300 text-xs md:text-sm lg:text-base mb-4 leading-relaxed line-clamp-3 max-w-none">{ind.subtitle}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-[10px] font-medium text-primary uppercase tracking-widest mb-2">Capabilities</h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-[11px] md:text-xs lg:text-sm">
                            <Activity className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outcome - Anchored to bottom */}
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 mt-auto group-hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="text-[10px] font-medium text-primary uppercase tracking-widest">Outcome</h5>
                      <div className="flex items-center gap-2 text-white text-[10px] font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                        Explore Solution
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-white max-w-none">{ind.outcome}</p>
                  </div>
                </div>
              </>
            );
            const className = "w-full md:w-[420px] lg:w-[500px] min-h-[500px] md:h-[52vh] md:min-h-[450px] max-h-[650px] shrink-0 rounded-[2rem] p-6 shadow-xl relative overflow-hidden group text-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20";

            return isExternal ? (
              <a 
                key={idx} 
                href={ind.link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link 
                key={idx} 
                to={ind.link}
                className={className}
              >
                {content}
              </Link>
            );
          })}

          {/* Final Card */}
          <div className="w-full md:w-[420px] lg:w-[500px] min-h-[350px] md:h-[50vh] md:min-h-[400px] shrink-0 bg-gradient-to-br from-primary via-accent-teal to-accent-blue rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/network/1920/1080?blur=10')] opacity-20 mix-blend-overlay" />
            <Network className="w-12 h-12 md:w-16 md:h-16 text-white mb-6 relative z-10" />
            <h3 className="text-xl md:text-3xl font-display mb-4 relative z-10 leading-tight">
              All systems connect back into ALIVE O.S.
            </h3>
            <p className="text-[10px] md:text-xs font-medium tracking-widest uppercase opacity-90 relative z-10 max-w-none">One Platform</p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};
