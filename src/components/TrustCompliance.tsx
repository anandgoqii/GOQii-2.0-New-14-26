import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Award, 
  Check 
} from 'lucide-react';

const COMPLIANCE_ITEMS = [
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-5.png" alt="GDPR" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "GDPR Ready",
  },
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-6.png" alt="HIPAA" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "HIPAA Compliant",
  },
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-7.png" alt="Cyber Essentials" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "Cyber Essentials Certified",
  },
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-8.png" alt="DCB" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "DCB0129 & DCB0160 Certified",
  },
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-9.png" alt="AICPA" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "SOC 2 Compliant",
  },
  {
    icon: <img src="https://appcdn.goqii.com/storeimg/26305_1733141292.png" alt="CDSCO" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "CDSCO Registered Medical Device",
  },
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-2.png" alt="ISO 9001" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "ISO 9001:2015 Certified",
  },
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-3.png" alt="ISO 13485" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "ISO 13485:2016 Certified",
  },
  {
    icon: <img src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-4.png" alt="ISO/IEC 27001" className="w-[80px] h-[80px] object-contain" referrerPolicy="no-referrer" />,
    label: "ISO/IEC 27001:2022 Certified",
  },
];

export const TrustCompliance = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[28px] font-semibold text-slate-900 dark:text-white leading-tight">
            Secure, Scalable & Compliant
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Gradient Overlays for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1800], // Adjust based on item width * count
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-x-12 whitespace-nowrap py-4"
          >
            {/* Duplicate items for seamless loop */}
            {[...COMPLIANCE_ITEMS, ...COMPLIANCE_ITEMS].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-default w-[200px] shrink-0"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#F1F5F9] dark:bg-slate-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-slate-200/50 dark:group-hover:shadow-none">
                  <div className="text-[#475569] dark:text-slate-400 group-hover:text-primary transition-colors duration-300 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <span className="text-[13px] font-medium text-[#475569] dark:text-slate-400 leading-tight max-w-[140px] whitespace-normal">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
