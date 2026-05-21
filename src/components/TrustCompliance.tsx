import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HelpCircle } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  authority: string;
  scope: string;
  status: string;
  logo: React.ReactNode;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: 'soc2',
    name: 'SOC 2 Type II Certified',
    authority: 'AICPA Standard',
    scope: 'Certified for high-end operational security, continuously audited.',
    status: 'Certified Active',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-9.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="SOC 2 Certification Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'hipaa',
    name: 'HIPAA Compliant',
    authority: 'US Healthcare Standard',
    scope: 'Fully encrypted PHI protection mechanisms meeting federal healthcare statutes.',
    status: 'Validated',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-6.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="HIPAA Compliance Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'gdpr',
    name: 'GDPR Compliant',
    authority: 'EU Regulation 2016/679',
    scope: 'Guaranteed user sovereignty and data rights for EU global members.',
    status: 'Verified',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-5.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="GDPR Compliance Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'cyberessentials',
    name: 'Cyber Essentials Certified',
    authority: 'UK National Cyber Security Centre',
    scope: 'Guaranteed protection against common cyber threats, certified under the UK government-backed scheme.',
    status: 'Certified Active',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-7.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="Cyber Essentials Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'iso27001',
    name: 'ISO/IEC 27001:2022',
    authority: 'Information Security',
    scope: 'Elite global standard for enterprise information security systems (ISMS).',
    status: 'Certified Audit',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-4.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="ISO 27001 Certification Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'iso13485',
    name: 'ISO 13485:2016',
    authority: 'Medical Device Quality',
    scope: 'Quality management standard validation for software as a medical utility.',
    status: 'Certified Audit',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-3.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="ISO 13485 Certification Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'cdsco',
    name: 'CDSCO Medical Utility',
    authority: 'Ministry of Health, India',
    scope: 'Class B Registered Sovereign Medical Software status registry.',
    status: 'Registered Active',
    logo: (
      <img 
        src="https://appcdn.goqii.com/storeimg/26305_1733141292.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="CDSCO Medical Utility Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'dpdpa',
    name: 'DPDPA Ready',
    authority: 'Data Protection Act',
    scope: 'Aligned to physical data localization and sovereign privacy regulations.',
    status: 'Compliant',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-8.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="DPDPA Ready Logo" 
        referrerPolicy="no-referrer"
      />
    )
  },
  {
    id: 'fda',
    name: 'FDA Registered Class II',
    authority: 'US Food & Drug Administration',
    scope: 'Registered and listed as a Class II Medical Device for advanced health monitoring and digital therapeutics.',
    status: 'Registered Active',
    logo: (
      <img 
        src="https://goqii.com/goqii_uk_home/assets/images/img-cetificate-2.png" 
        className="h-20 w-auto object-contain transition-all group-hover:scale-105 opacity-80 group-hover:opacity-100" 
        alt="FDA Registered Logo" 
        referrerPolicy="no-referrer"
      />
    )
  }
];

export const TrustCompliance = () => {
  return (
    <section id="security-compliance" className="py-24 md:py-32 bg-[#FAF9F6] dark:bg-[#070d19] border-t border-slate-200/60 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      
      {/* Blueprint Grid Lines & Faded Atmospheric Aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.006] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Institutional Section Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] tracking-[0.25em] uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            REGULATORY COMPLIANCE SYSTEM
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 dark:text-white tracking-[-0.03em] leading-tight mb-4">
            Secure, Scalable & <span className="text-emerald-500 dark:text-emerald-400 font-light italic">Regulatory-Grade</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            The GOQii 2.0 platform behaves as a highly audited compliance mechanism. Built with zero-trust architectural boundaries, our enterprise pipeline guarantees complete validation across sovereign insurance and medical ecosystems.
          </p>
        </div>

        {/* Sophisticated Corporate Grid Layout with high density */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 border-t border-slate-200/60 dark:border-white/5 pt-12">
          {CERTIFICATIONS.map((cert) => (
            <div 
              key={cert.id} 
              className="group flex flex-col justify-between p-6 bg-white dark:bg-[#091020]/20 border border-slate-100 dark:border-white/5 rounded-2xl hover:border-slate-200 dark:hover:border-white/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Micro border lighting effect under active hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Clean, authentic vector logo aligned left */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    {cert.logo}
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/20 dark:border-white/5 uppercase">
                    {cert.status}
                  </span>
                </div>

                {/* Typography Hierarchy */}
                <h3 className="text-base font-bold text-slate-800 dark:text-white tracking-tight mb-1 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                  {cert.name}
                </h3>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-3">
                  {cert.authority}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {cert.scope}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Institutional Assurance Layer */}
        <div className="border-t border-slate-200/60 dark:border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-600 dark:text-slate-400">
              Audit Status: Continuous Compliance Verification Loop Active
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500 font-mono text-[10px] font-semibold">
            <span>SLA: 99.99% INGESTION</span>
            <span>DATA LOCK: SHIELDRUNTIME v3.4</span>
          </div>
        </div>

      </div>
    </section>
  );
};
