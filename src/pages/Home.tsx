import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Hero } from '../components/Hero';
import { TheShift } from '../components/TheShift';
import { PathSelector } from '../components/PathSelector';
import { AliveOS } from '../components/AliveOS';
import { DynamicMotivation } from '../components/DynamicMotivation';
import { HealthStack } from '../components/HealthStack';
import { HealthEngage } from '../components/HealthEngage';
import { Industries } from '../components/Industries';
import { EnterpriseOutcomes } from '../components/EnterpriseOutcomes';
import { AppEcosystem } from '../components/AppEcosystem';
import { Sanjeevini } from '../components/Sanjeevini';
import { CaseStudies } from '../components/CaseStudies';
import { Partners } from '../components/Partners';
import { Recognition } from '../components/Recognition';
import { TrustCompliance } from '../components/TrustCompliance';
import { FinalCTA } from '../components/FinalCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export const Home = () => {
  const [activePath, setActivePath] = useState<'all' | 'org' | 'ind'>('all');
  const [isLocked, setIsLocked] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);

  // Scroll Locking Logic
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLocked && activePath === 'all') {
          document.body.style.overflow = 'hidden';
          setIsLocked(true);
          
          // Ensure the section is centered when locked
          gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: entry.target, offsetY: 0 },
            ease: "power2.out"
          });
        }
      },
      { threshold: 0.6 }
    );

    if (selectorRef.current) {
      observer.observe(selectorRef.current);
    }

    return () => observer.disconnect();
  }, [isLocked, activePath]);

  const unlockScroll = () => {
    document.body.style.overflow = 'auto';
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax backgrounds for snap sections
      gsap.utils.toArray<HTMLElement>(".snap-section").forEach(section => {
        const bg = section.querySelector(".parallax-bg");
        if (bg) {
          gsap.to(bg, {
            y: "20%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });

      // Horizontal scroll for Industries
      const industrySection = document.querySelector(".industry-section");
      const scrollContainer = document.querySelector(".horizontal-scroll");

      if (industrySection && scrollContainer) {
        gsap.to(scrollContainer, {
          x: () => -(scrollContainer.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: industrySection,
            start: "top top",
            end: () => "+=" + scrollContainer.scrollWidth,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          }
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, [activePath]);

  const handlePathChange = (path: 'org' | 'ind') => {
    setActivePath(path);
    unlockScroll();
    
    // Wait for the exit/enter animations to start before scrolling
    setTimeout(() => {
      const container = selectorRef.current;
      const nextSection = container?.nextElementSibling;

      if (nextSection) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: nextSection, offsetY: 80 },
          ease: "power3.inOut"
        });
      }
    }, 100);
  };

  const handleContinue = () => {
    setActivePath('all');
    unlockScroll();
    
    const container = selectorRef.current;
    const nextSection = container?.nextElementSibling;

    if (nextSection) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: nextSection, offsetY: 80 },
        ease: "power3.inOut"
      });
    }
  };

  const handleReset = () => {
    setActivePath('all');
    setIsLocked(false);
    unlockScroll();
    setTimeout(() => {
      const element = document.getElementById('path-selector');
      if (element) {
        const offset = 80;
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: element, offsetY: offset },
          ease: "power2.out"
        });
      }
    }, 100);
  };

  return (
    <main ref={mainRef} className="relative">
      <div id="hero" className="snap-section">
        <div className="parallax-bg bg-gradient-to-b from-primary/10 to-transparent" />
        <Hero />
      </div>
      
      <div id="theshift" className="snap-section">
        <div className="parallax-bg bg-slate-100 dark:bg-slate-900/50" />
        <TheShift />
      </div>

      <div id="trust-compliance" className="snap-section">
        <TrustCompliance />
      </div>

      <div id="path-selector" className="snap-section" ref={selectorRef}>
        <PathSelector 
          activePath={activePath} 
          onPathChange={handlePathChange} 
          onContinue={handleContinue}
        />
      </div>

      <AnimatePresence mode="wait">
        {activePath === 'all' && (
          <motion.div
            key="all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Org Sections */}
            <div id="aliveos" className="snap-section">
              <AliveOS />
            </div>
            <div id="healthstack" className="snap-section">
              <HealthStack />
            </div>
            <div id="industries" className="industry-section">
              <Industries />
            </div>
            <div id="outcomes" className="snap-section">
              <EnterpriseOutcomes />
            </div>
            <div id="casestudies" className="snap-section">
              <CaseStudies />
            </div>
            <div id="recognition" className="snap-section">
              <Recognition />
            </div>
            <div id="partners" className="snap-section">
              <Partners />
            </div>

            {/* Ind Sections */}
            <div id="dynamicmotivation" className="snap-section">
              <DynamicMotivation />
            </div>
            <div id="healthengage" className="snap-section">
              <HealthEngage />
            </div>
            <div id="app" className="snap-section">
              <AppEcosystem />
            </div>
            <div id="sanjeevini" className="snap-section">
              <Sanjeevini />
            </div>
            <FinalCTA />
          </motion.div>
        )}

        {activePath === 'org' && (
          <motion.div
            key="org"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div id="aliveos" className="snap-section">
              <AliveOS />
            </div>
            <div id="healthstack" className="snap-section">
              <HealthStack />
            </div>
            <div id="industries" className="industry-section">
              <Industries />
            </div>
            <div id="outcomes" className="snap-section">
              <EnterpriseOutcomes />
            </div>
            <div id="casestudies" className="snap-section">
              <CaseStudies />
            </div>
            <div id="recognition" className="snap-section">
              <Recognition />
            </div>
            <div id="partners" className="snap-section">
              <Partners />
            </div>
            <FinalCTA />
          </motion.div>
        )}

        {activePath === 'ind' && (
          <motion.div
            key="ind"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div id="dynamicmotivation" className="snap-section">
              <DynamicMotivation />
            </div>
            <div id="healthengage" className="snap-section">
              <HealthEngage />
            </div>
            <div id="app" className="snap-section">
              <AppEcosystem />
            </div>
            <div id="sanjeevini" className="snap-section">
              <Sanjeevini />
            </div>
            <FinalCTA />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Reset Button */}
      <AnimatePresence>
        {activePath !== 'all' && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleReset}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-2xl font-bold hover:scale-110 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to full site
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
};
