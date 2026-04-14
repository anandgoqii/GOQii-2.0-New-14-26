import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Mail, User, Phone, FileText, Briefcase } from 'lucide-react';

export const ApplicationForm = () => {
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
        <h1 className="text-3xl font-display font-bold mb-4">Application Sent!</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Thank you for applying to GOQii. Our talent acquisition team will review your profile and get back to you if there's a match.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
            <input 
              required
              type="tel" 
              placeholder="+91 98765 43210"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Role Interested In</label>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
            <select 
              required
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
            >
              <option value="">Select a role</option>
              <option value="engineering">Engineering & AI</option>
              <option value="product">Product & Design</option>
              <option value="health">Health & Coaching</option>
              <option value="marketing">Marketing & Growth</option>
              <option value="sales">Sales & Partnerships</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Resume Link (Google Drive/Dropbox)</label>
        <div className="relative">
          <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
          <input 
            required
            type="url" 
            placeholder="https://link-to-your-resume.com"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Why do you want to join GOQii?</label>
        <textarea 
          required
          rows={4}
          placeholder="Tell us about your passion for preventive healthcare..."
          className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
        />
      </div>

      <button 
        type="submit"
        className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
      >
        Submit Application
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
      <p className="text-center text-xs opacity-50">
        By submitting, you agree to our recruitment privacy policy.
      </p>
    </form>
  );
};
