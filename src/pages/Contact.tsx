import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Clock, ArrowRight, ChevronRight, Globe } from 'lucide-react';
import { useModals } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const { openDemoModal } = useModals();

  const offices = [
    {
      country: "USA",
      flag: "🇺🇸",
      name: "United States",
      entity: "GOQii Inc",
      address: "120, Wood Avenue South, Suite 300, Iselin, NJ 08830",
      color: "from-blue-500 to-indigo-600"
    },
    {
      country: "UK",
      flag: "🇬🇧",
      name: "United Kingdom",
      entity: "GOQii UK Limited",
      address: "29 West Way, Hove, England, BN3 8LS",
      color: "from-red-500 to-blue-600"
    },
    {
      country: "India",
      flag: "🇮🇳",
      name: "India",
      entity: "GOQii Technologies Pvt. Ltd.",
      address: "101 Satyam Tower, Govandi East, Mumbai 400088, India",
      color: "from-orange-500 to-green-600"
    }
  ];

  return (
    <div className="pb-20 bg-[var(--bg-primary)] min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title mb-6">Contact Us</h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Connect with GOQii</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We’re here to support individuals, enterprises, and partners across the globe.
          </p>
        </motion.div>
      </section>

      {/* Global Presence Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Global Presence</h3>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-primary/50 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${office.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                {office.flag}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{office.country} Office</h4>
              <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">{office.name}</p>
              <div className="space-y-4">
                <p className="font-bold text-slate-800 dark:text-slate-200">{office.entity}</p>
                <div className="flex gap-3 text-slate-500 dark:text-slate-400">
                  <MapPin className="w-5 h-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed">{office.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support & Queries Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Support Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">For Any Queries</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <a href="tel:+918419940404" className="text-2xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                      +91 8419940404
                    </a>
                    <p className="text-slate-500 mt-1">General Support Line</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">In-App Chat Support</h4>
                    <p className="text-slate-500 mt-1">Reach out via chat support on the GOQii App</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Support Hours</h4>
                    <p className="text-slate-500 mt-1">Monday to Saturday<br />10:00 AM to 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Corporate CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Corporate Enquiries</h3>
                <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed">
                  For partnerships, enterprise solutions, and corporate programs:
                </p>
                <a href="mailto:corporatewellness@goqii.com" className="flex items-center gap-3 text-lg md:text-xl font-bold text-primary hover:text-primary-dark transition-colors mb-8">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  corporatewellness@goqii.com
                </a>
              </div>

              <div className="relative z-10">
                <Link 
                  to="/#industries" 
                  className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all duration-300 group"
                >
                  Explore Corporate Solutions 
                  <ArrowRight className="w-5 h-5 text-primary" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 relative z-10">
            Let’s Build Healthier Populations Together
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 relative z-10 font-light leading-relaxed">
            Whether you're an insurer, enterprise, healthcare provider, or government body — GOQii can help you drive measurable health outcomes.
          </p>
          
          <button 
            onClick={openDemoModal}
            className="relative z-10 px-10 py-5 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 mx-auto group shadow-xl"
          >
            Request a Demo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};
