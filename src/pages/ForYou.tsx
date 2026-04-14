import React from 'react';
import { motion } from 'motion/react';
import { DynamicMotivation } from '../components/DynamicMotivation';
import { HealthEngage } from '../components/HealthEngage';
import { AppEcosystem } from '../components/AppEcosystem';
import { Sanjeevini } from '../components/Sanjeevini';
import { FinalCTA } from '../components/FinalCTA';

export const ForYou = () => {
  return (
    <main>
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Your Journey to <span className="text-primary">Longevity</span>
            </h1>
            <p className="text-xl opacity-70 max-w-3xl mx-auto leading-relaxed">
              Personalized AI coaching, wearable integration, and preventive health services designed for your unique biology.
            </p>
          </motion.div>
        </div>
      </section>

      <DynamicMotivation />
      <HealthEngage />
      <AppEcosystem />
      <Sanjeevini />
      <FinalCTA />
    </main>
  );
};
