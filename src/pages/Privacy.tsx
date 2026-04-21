import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Eye, ChevronDown, CheckCircle2, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ title, children, isOpen, onClick }: { title: string, children: React.ReactNode, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>
        {title}
      </h3>
      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="pb-8 prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const Privacy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="pt-32 pb-24 bg-[var(--bg-primary)]">
      <section className="px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Legal & Privacy
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Info className="w-4 h-4" />
            <span>LAST UPDATED: 01 OCT 2025</span>
          </div>
        </motion.div>

        <div className="mb-12">
          <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8">
            We, GOQii bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals. We know that the privacy of your personal data is very important to you.
          </p>
          
          <div className="p-6 rounded-[2rem] bg-blue-50/50 dark:bg-primary/5 border border-blue-100 dark:border-primary/10 flex items-start gap-4 mb-12">
            <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-sm text-slate-600 dark:text-slate-400 italic font-light">
              This Privacy Policy sets forth GOQii’s policy with respect to information including personally identifiable data ("Personal Data") and other information that is collected from Platform visitors and users.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden px-8 shadow-sm">
          <AccordionItem 
            title="1. TrueDepth API & AI Skin Analysis" 
            isOpen={openIndex === 0} 
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
          >
            <p className="font-bold mb-4">Use of TrueDepth API for AI Skin Analysis</p>
            <p className="mb-4">Our Skin Wellness Assessment (Skinalyze) feature uses your device's TrueDepth camera API. We handle this data with the following principles:</p>
            <ul className="space-y-4">
              <li><strong>On-Device Processing:</strong> All TrueDepth camera data is processed in real time on your device only. It never leaves your device and is not collected, stored, or shared by us.</li>
              <li><strong>Purpose of Use:</strong> This data is used exclusively to power our AI Skin Analysis and augmented reality features that provide real-time skin health insights.</li>
              <li><strong>No Identification or Advertising:</strong> We do not use TrueDepth data for facial recognition, authentication, user identification, advertising, or marketing.</li>
            </ul>
            <p className="mt-4">While TrueDepth camera data itself is never stored, you may choose to save your skin analysis results or photos to your profile. These results are stored securely, never shared with third parties without your explicit consent.</p>
          </AccordionItem>

          <AccordionItem 
            title="2. Personal Data Collection" 
            isOpen={openIndex === 1} 
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
          >
            <p className="mb-4">We collect Personal Data from you when you voluntarily provide such information, such as when you contact us, use the GOQii Band, post comments, or register for GOQii Services.</p>
            <p className="font-bold mb-2">Information we collect includes:</p>
            <ul className="columns-1 md:columns-2 gap-8">
              <li>Full name & email address</li>
              <li>Gender & profile picture</li>
              <li>Contact details & address</li>
              <li>Date of birth, height & weight</li>
              <li>Dietary & fitness details</li>
              <li>Medical history & medication</li>
            </ul>
            <p className="mt-4">By voluntarily providing us with Personal Data, you are consenting to our use of it, in accordance with this Privacy Policy. Such data may be transferred to our authorized offices and servers worldwide.</p>
          </AccordionItem>

          <AccordionItem 
            title="3. Non-Identifiable Data & Cookies" 
            isOpen={openIndex === 2} 
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
          >
            <p className="mb-4">When you interact with the Platform, we receive and store certain personally non-identifiable information which cannot presently be used to specifically identify you.</p>
            <p className="mb-4"><strong>Cookies:</strong> We use "cookies" to provide additional functionality and analyze usage more accurately (e.g., remembering your password for a visit). You can turn cookies off in your browser settings, though some features may then be unavailable.</p>
            <p><strong>Flash Cookies:</strong> Our Platform may use Adobe Flash cookies to remember user settings and preferences. You can control these through the Adobe Flash settings manager.</p>
          </AccordionItem>

          <AccordionItem 
            title="4. Aggregated & Location Information" 
            isOpen={openIndex === 3} 
            onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
          >
            <p className="mb-4"><strong>Aggregated Data:</strong> We conduct research on customer demographics and behavior based on Personal Data. This information is analyzed on an aggregate basis and does not identify you personally.</p>
            <p><strong>Location:</strong> Our Service may collect and use location info (GPS on mobile or GOQii Band) to provide specific functionality. We may use this in conjunction with your Personal Data or in an aggregate way.</p>
          </AccordionItem>

          <AccordionItem 
            title="5. Use of HealthKit & Personal Data" 
            isOpen={openIndex === 4} 
            onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
          >
            <p className="mb-4">We use Personal Data consistent with this Privacy Policy. If you provide it for a reason (e.g., an email query), we will use it for that specific purpose. Our Related Companies may also use this info to improve Platform functionality and content.</p>
            <p className="mb-4 font-bold text-slate-800 dark:text-slate-200">Opting-Out:</p>
            <p>Email and SMS/IVR communications contain instructions to opt-out. You can also write to <strong>support@goqii.com</strong> to have your name deleted from our mailing lists.</p>
          </AccordionItem>

          <AccordionItem 
            title="6. Sharing Collected Data" 
            isOpen={openIndex === 5} 
            onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
          >
            <p className="mb-6">GOQii is not in the business of selling your information. However, we may share Personal Data in the following circumstances:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Business Transfers</p>
                <p className="text-sm">During a corporate sale, merger, reorganization, or dissolution.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Related Companies</p>
                <p className="text-sm">With our subsidiaries and affiliates for consistent purposes.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Legal Requirements</p>
                <p className="text-sm">To comply with legal obligations or protect GOQii's rights.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                <p className="font-bold text-slate-900 dark:text-white mb-2">Third Parties</p>
                <p className="text-sm">With Eco-System Partners or Insurers (with your specific authorization).</p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="7. Social Media & Links" 
            isOpen={openIndex === 6} 
            onClick={() => setOpenIndex(openIndex === 6 ? null : 6)}
          >
            <p className="mb-4">This Platform may contain links to Third Party Sites or enable access to Social Media Services (Facebook, Twitter). The information you share with them is governed by their respective privacy policies.</p>
            <p>If you log in via Social Media Services, we will collect relevant info required for integration. We are not responsible for the privacy practices of these third-party platforms.</p>
          </AccordionItem>

          <AccordionItem 
            title="8. Security & Storage" 
            isOpen={openIndex === 7} 
            onClick={() => setOpenIndex(openIndex === 7 ? null : 7)}
          >
            <p className="mb-4">GOQii takes reasonable steps to protect Personal Data from loss, misuse, and unauthorized access. We have adopted security practices and procedures to ensure data is secure.</p>
            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
              <p className="text-sm italic font-light">
                Note: No Internet transmission is ever fully secure. While we endeavor to keep info secure, we cannot guarantee absolute security for email or online data transfers.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="9. Data Retention & Deletion" 
            isOpen={openIndex === 8} 
            onClick={() => setOpenIndex(openIndex === 8 ? null : 8)}
          >
            <p className="mb-4">You have control over your data. You can choose not to provide certain Personal Data, though it may limit your use of core GOQii Services.</p>
            <p><strong>Deletion:</strong> You can request data deletion through the app's settings. Our Privacy Policy does not apply to unsolicited info you provide through public areas of the Platform.</p>
          </AccordionItem>

          <AccordionItem 
            title="10. Policy Changes & Contact" 
            isOpen={openIndex === 9} 
            onClick={() => setOpenIndex(openIndex === 9 ? null : 9)}
          >
            <p className="mb-4">We may update this policy over time. Your continued use of the Platform after changes constitutes your agreement to the new terms.</p>
            <p className="font-bold mb-4 text-slate-800 dark:text-slate-200 text-lg">Contact Information:</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Email: support@goqii.com</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Live Chat: Available on the GOQii app and website</span>
              </li>
            </ul>
          </AccordionItem>
        </div>

        <div className="mt-16 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <Lock className="w-6 h-6 text-primary" />
            Your Data, Protected.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            GOQii is committed to the highest standards of data security and transparency. For detailed compliance info, visit our Trust Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:privacy@goqii.com" className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              Email DPO
            </a>
            <Link to="/trust-center" className="px-10 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold hover:bg-slate-50 transition-colors">
              Trust Center
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
