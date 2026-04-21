import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <p className="text-slate-600 dark:text-slate-400">LAST UPDATED: 26Th OCT 2023</p>
        </motion.div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-12">
            We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and/or its subsidiaries, affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals.
          </p>

          <p>
            While fitness trackers and apps are useful tools, they are missing the elements of on-going engagement, motivation and accountability. GOQii solves this, by connecting your activity tracker or smart watch to a professional health and fitness coach of your choice via the "GOQii App" (available on iOS and Android platforms) and a wearable GOQii fitness band ("GOQii Tracker"). You can read more about GOQii and our product on the website "goqii.com" (together with the GOQii App is hereby referred to as the "Platform"). For ease of reading and clarity, the Platform, the GOQii App and the GOQii Tracker are collectively referred to as the "Services".
          </p>

          <p>
            These Terms of Service along with the Privacy Policy ("Terms") govern your access to and use of the Services, so please read them carefully before using the Services. By accessing and using any of the Services, you agree to be bound by these Terms. If you do not agree to be bound by these Terms, please do not access or use any of the Services.
          </p>

          <p>
            As our business grows and we add new functionality to the Services, we may revise these Terms at any time and without giving you prior notice. The last date these Terms was revised is written on this page. Your acceptance of these Terms (including revised Terms through your continued access and use of the Services), along with other terms and conditions, policies and disclaimers of GOQii, constitute a valid and binding agreement between you and GOQii.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Your Use of Services</h2>
          <p>
            You must be 18 years of age to access and use the Services and should be able to contract as per the laws of your jurisdiction. You may use the Services only in compliance with these Terms and all laws applicable to you and your access and use of the Services.
          </p>
          <p>
            Once you purchase GOQii Services, you may learn more about the Services via information available on the Platform, including the Frequently Answered Questions (FAQs) available at: <a href="https://goqiisupport.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">https://goqiisupport.zendesk.com/hc/en-us</a>.
          </p>
          <p>
            In order to register an account and access or use the Services, you may be required to provide certain information including but not restricted to your full name, email address, password, gender, profile picture, contact details, address, date of birth, height, weight, dietary information, fitness and exercise details, medical history and conditions and medication details. You are responsible for maintaining the accuracy and completeness of this information provided.
          </p>
          <p>
            You may register for use of the Services through your existing email accounts (such as Gmail, Hotmail etc.) Your email address will constitute your username for your account. You are responsible for maintaining the confidentiality of your username and password. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) for your account. You will be fully responsible for all activities that occur under your account, including activities of others to whom you have provided your username or password, so please notify GOQii immediately of any unauthorized use of your account or any other breach of security.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">We Do Not Provide Medical Advice</h2>
          <div className="p-8 rounded-3xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 mb-8">
            <p className="text-amber-800 dark:text-amber-200 font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-[10px]">
              <AlertCircle className="w-5 h-5" />
              Emergency Notice
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
              GOQii DOES NOT PROVIDE MEDICAL ADVICE. DO NOT USE THE SITE OR THE SERVICES FOR ANY MEDICAL OR MENTAL HEALTH NEEDS. IF YOU THINK YOU MAY BE A DANGER TO YOURSELF OR OTHERS, OR YOU ARE HAVING A MEDICAL OR MENTAL HEALTH EMERGENCY, CALL THE EMERGENCY MEDICAL SERVICES IN YOUR HOME JURISDICTION.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              The Services provided by GOQii, including information provided through personalized coaching services, does not constitute medical advice of any kind and it is not intended to be, and should not be, used to diagnose or identify treatment for a medical or mental health condition. Nothing on the Platform or in the Services should be construed as an attempt to offer or render a medical or mental health opinion or diagnosis, or otherwise engage in the practice of medicine by GOQii.
            </p>
          </div>

          <p>
            You should consult with your physician before making any changes to your diet or exercise program, including making any changes suggested through any of the GOQii Services. By using the Services, you represent that you have received consent from your physician to participate in the programs, you learn about through the Services. We are not responsible for any medical or mental health problems you may face as a result of accessing or using the Services, or from training programs, nutrition changes, products, or relationships with our Eco-System partners (who are third parties we sign up with to track your health records and data such as Thyrocare Technologies Ltd. and Max Hospitals or any other third party service provider) that you learn about through the Services. If you make any lifestyle changes based on information you receive through the Service, you agree that you do so at your own risk and GOQii will in no manner be liable for any harm of injury, whether bodily or otherwise that may occur as a result of such lifestyle changes.
          </p>

          <p className="font-bold text-slate-800 dark:text-slate-200">
            GOQii DOES NOT RECOMMEND, REFER, ENDORSE, VERIFY, EVALUATE OR GUARANTEE ANY ADVICE, INFORMATION, EXERCISE, DIET, INSTITUTION, PRODUCT, ECO-SYSTEM PARTNER, OPINION OR OTHER INFORMATION OR SERVICES PROVIDED THROUGH THE SERVICES, AND NOTHING SHALL BE CONSIDERED AS A REFERRAL, ENDORSEMENT, RECOMMENDATION OR GUARANTEE OF ANY COACH OR ECO-SYSTEM PARTNER.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Modifications to Services and Data</h2>
          <p>
            The Services may change over time as we add more features. We may modify, suspend or discontinue, temporarily or permanently, the Services (or a part of the Services) from time to time without prior notice to you. Please backup your data as GOQii has no responsibility for the deletion or failure to store any data or other content maintained or transmitted by the Services.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">User Content</h2>
          <p>
            You are solely responsible for all information, data, text, music, sound, photographs, graphics, video, messages or other materials ("User Content") that you upload, transmit, post, publish or display ("Post") on the Platform or email or otherwise transmit or use via the Services, including content posted through use of the GOQii Tracker.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Services Content</h2>
          <p>
            The Services may contain content and information such as data, text, audio, video, images ("Services Content") that is protected by copyright, patent, trademark, trade secret or other proprietary rights under applicable laws. All Services Content is owned exclusively by GOQii.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Third Party Services</h2>
          <p>
            The Services may, in certain instances, be offered to you (i) as a result of you purchasing or availing of certain third party products / services, and / or (ii) bundled with certain third party products / services. GOQii Terms would supersede in case of any conflict between such third party terms and GOQii Terms.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Doctor Policy</h2>
          <p>
            GOQii Service connects you with GOQii Doctors (General Practitioners) to help and advise you on all routine medical and lifestyle challenges. GOQii Health Service is not for medical care. On the GOQii Health Service, no formal medical diagnosis, treatment, or prescriptions will be provided.
          </p>

          <div className="mt-16 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Scale className="w-6 h-6 text-primary" />
              Contact for Support
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 font-light">
              If you have any complaints or grievances, please contact us via Live chat from the GOQii application or website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:support@goqii.com" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-center hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                Contact Support
              </a>
              <Link to="/trust-center" className="px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full font-bold text-center hover:bg-slate-50 transition-colors text-slate-900 dark:text-white">
                View Trust Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
