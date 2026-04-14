import React from 'react';
import { motion } from 'motion/react';

const PARTNERS = [
  { name: "Insurance Partner 1", logo: "https://websitecdn.goqii.com/images/profileimg/mitusui_logo.png" },
  { name: "Pharma Partner 1", logo: "https://websitecdn.goqii.com/images/profileimg/investor_mega.png" },
  { name: "Enterprise Partner 1", logo: "https://websitecdn.goqii.com/images/profileimg/galaxy_digital.png" },
  { name: "Insurance Partner 2", logo: "https://websitecdn.goqii.com/images/profileimg/investor_dsg.png" },
  { name: "Pharma Partner 2", logo: "https://websitecdn.goqii.com/images/profileimg/investor_cm.png" },
  { name: "Enterprise Partner 2", logo: "https://websitecdn.goqii.com/images/profileimg/investor_glue.png" },
];

export const Partners = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Trusted By Leading Organizations</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light">
            We partner with global leaders across insurance, pharma, and enterprise sectors to scale preventive healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center p-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
