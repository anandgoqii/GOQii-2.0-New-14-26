import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const SalesForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Message Sent!</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Thank you for reaching out to GOQii Enterprise Sales. A regional account executive will be in touch with you shortly to discuss your requirements.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">First Name</label>
          <input 
            required
            type="text" 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Last Name</label>
          <input 
            required
            type="text" 
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Work Email</label>
        <input 
          required
          type="email" 
          className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Company Name</label>
        <input 
          required
          type="text" 
          className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Industry</label>
        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
          <option>Insurance</option>
          <option>Pharma & Life Sciences</option>
          <option>Healthcare Provider</option>
          <option>Corporate / Employer</option>
          <option>Government</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Message</label>
        <textarea 
          required
          rows={4}
          placeholder="How can we help you?"
          className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
      >
        Contact Sales
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};
