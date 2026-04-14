import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy = () => {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
          <p className="text-slate-600 dark:text-slate-400">Last Updated: April 14, 2026</p>
        </motion.div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-12">
            At GOQii, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal and health data.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">1. Data Collection</h2>
          <p>
            We collect data that you provide directly to us, such as when you create an account, connect a wearable device, or interact with our health coaches. This includes:
          </p>
          <ul>
            <li>Personal identifiers (name, email, phone number)</li>
            <li>Biometric data (heart rate, sleep patterns, activity levels)</li>
            <li>Health goals and coaching interactions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">2. How We Use Your Data</h2>
          <p>
            Your data is used to provide personalized health insights, facilitate coaching, and improve our preventive health algorithms. We do not sell your personal health information to third parties.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">3. Data Security</h2>
          <p>
            We implement industry-standard security measures, including end-to-end encryption and strict access controls. GOQii is HIPAA compliant and ISO 27001 certified.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">4. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your data at any time. You can also export your data in a machine-readable format.
          </p>

          <div className="mt-16 p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Privacy Contact
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              If you have any questions about our privacy practices, please contact our Data Protection Officer.
            </p>
            <a href="mailto:privacy@goqii.com" className="text-primary font-bold hover:underline">privacy@goqii.com</a>
          </div>
        </div>
      </section>
    </main>
  );
};
