import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle } from 'lucide-react';

export const Terms = () => {
  return (
    <main className="pt-32 pb-24 bg-[var(--bg-primary)]">
      <section className="px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Terms of Service</h1>
          <p className="text-slate-600 dark:text-slate-400">Last Updated: April 14, 2026</p>
        </motion.div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-12">
            By using GOQii, you agree to these terms. Please read them carefully as they contain important information about your legal rights and obligations.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the GOQii platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our services.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">2. Medical Disclaimer</h2>
          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30 mb-8">
            <p className="text-amber-800 dark:text-amber-200 font-medium flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5" />
              Important Notice
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              GOQii is a preventive health platform. Our coaches and AI insights are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician with any questions regarding a medical condition.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use GOQii.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">4. Intellectual Property</h2>
          <p>
            All content on the GOQii platform, including text, graphics, logos, and software, is the property of GOQii Inc. and is protected by international copyright laws.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">5. Limitation of Liability</h2>
          <p>
            GOQii shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform.
          </p>

          <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" />
              Legal Inquiries
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              For any legal questions or formal notices, please contact our legal department.
            </p>
            <a href="mailto:legal@goqii.com" className="text-primary font-bold hover:underline">legal@goqii.com</a>
          </div>
        </div>
      </section>
    </main>
  );
};
