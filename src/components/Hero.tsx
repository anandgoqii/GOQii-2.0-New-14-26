import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useModals } from '../context/ModalContext';

const AUDIENCES = ['Insurance', 'Pharma', 'Hospitals', 'Corporate', 'Individuals'];

const SLIDES = [
  {
    id: 'overview',
    title: <>Predict. Personalize.<br /><span className="gradient-text">Prevent. Prosper.</span></>,
    subtext: 'Transform healthcare from reactive treatment to continuous, AI-driven prevention—delivering measurable outcomes.',
    primaryCTA: { label: 'Request a Demo', isDemo: true },
    secondaryCTA: { label: 'Explore Solutions', link: '/for-business' },
    image: 'https://appcdn.goqii.com/user/storeimg/45521_1775718820.jpg',
    showExtras: true
  },
  {
    id: 'longevity',
    title: <>AI-Powered Longevity &<br /><span className="gradient-text">Health Intelligence</span></>,
    subtext: 'Combining genomics, digital twins, and continuous coaching to deliver measurable health improvements.',
    primaryCTA: { label: 'Explore Sanjeevini', link: '/longevity-journey' },
    image: 'https://appcdn.goqii.com/storeimg/92550_1776244708.jpg',
    showExtras: false
  },
  {
    id: 'enterprise',
    title: <>Intelligence for<br /><span className="gradient-text">Global Enterprises</span></>,
    subtext: 'Reduce healthcare costs by up to 40% through proactive prevention and employee well-being.',
    primaryCTA: { label: 'For Business', link: '/for-business' },
    image: 'https://appcdn.goqii.com/user/storeimg/16492_1775720059.jpg',
    showExtras: false
  },
  {
    id: 'individual',
    title: <>Your Personal Health<br /><span className="gradient-text">Operating System</span></>,
    subtext: 'Personalized AI coaching and wearable integration tailored to your unique biology.',
    primaryCTA: { label: 'Start Your Journey', link: '/for-you' },
    image: 'https://appcdn.goqii.com/user/storeimg/34686_1775720059.jpg',
    showExtras: false
  }
];

export const Hero = () => {
  const { openDemoModal } = useModals();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAudience, setSelectedAudience] = useState('Insurance');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <section 
      className="relative h-screen flex flex-col justify-center overflow-hidden w-full bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={slide.image} 
              alt={slide.id} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlays - Brighter and cleaner */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/20 to-transparent dark:from-slate-950/80 dark:via-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-slate-950/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {/* Badge Row (Only on Slide 1) */}
              {slide.showExtras && (
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                    THE OPERATING SYSTEM FOR HUMAN LONGEVITY
                  </span>
                </div>
              )}

              <h1 className="hero-title font-display tracking-tighter leading-tight text-slate-900 dark:text-white">
                {slide.title}
              </h1>

              <p className="hero-subtext leading-relaxed max-w-2xl text-slate-600 dark:text-slate-300">
                {slide.subtext}
              </p>

              {/* Audience Selector (Only on Slide 1) */}
              {slide.showExtras && (
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {AUDIENCES.map((audience) => (
                    <button
                      key={audience}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAudience(audience);
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 border ${
                        selectedAudience === audience
                          ? 'bg-primary border-transparent text-white shadow-lg shadow-primary/20'
                          : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      {audience}
                    </button>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
                {slide.primaryCTA.isDemo ? (
                  <button 
                    onClick={openDemoModal}
                    className="px-5 py-2.5 button-primary flex items-center gap-2 group shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 min-w-[140px] justify-center text-xs"
                  >
                    <span>Request {selectedAudience === 'Individuals' ? 'Access' : 'a Demo'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <Link 
                    to={slide.primaryCTA.link || '#'}
                    className="px-5 py-2.5 button-primary flex items-center gap-2 group shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 min-w-[140px] justify-center text-xs"
                  >
                    {slide.primaryCTA.label}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                
                {slide.secondaryCTA && (
                  <Link 
                    to={slide.secondaryCTA.link}
                    className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-white/20 transition-all duration-300 border border-slate-200 dark:border-white/10 hover:scale-105 min-w-[140px] text-center text-xs"
                  >
                    {slide.showExtras ? `Explore ${selectedAudience} Solutions` : slide.secondaryCTA.label}
                  </Link>
                )}
              </div>

              {/* Proof & Trust (Only on Slide 1) */}
              {slide.showExtras && (
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-500 dark:text-slate-400 font-medium text-sm">
                    <span>5M+ Lives Covered</span>
                    <span className="opacity-30 hidden sm:inline">•</span>
                    <span>300+ Enterprise Partners</span>
                    <span className="opacity-30 hidden sm:inline">•</span>
                    <span>40% Cost Reduction</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 opacity-80">
                    <span>HIPAA Compliant</span>
                    <span className="opacity-30 hidden sm:inline">•</span>
                    <span>ISO 27001</span>
                    <span className="opacity-30 hidden sm:inline">•</span>
                    <span>GDPR</span>
                    <span className="opacity-30 hidden sm:inline">•</span>
                    <span>DPDPA Ready</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <div className="flex items-center gap-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === idx ? 'w-8 bg-primary' : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
