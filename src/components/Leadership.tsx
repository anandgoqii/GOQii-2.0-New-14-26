import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const LEADERSHIP = [
  { 
    name: "Vishal Gondal", 
    role: "CEO & Founder", 
    image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Vishal.png", 
    bio: `Vishal Gondal, often regarded as the pioneer of the Indian gaming industry, is now leading innovation in preventive healthcare and the emerging Health Metaverse. As the founder of GOQii, he combines technology, fitness, and behavioral science to build a platform focused on healthier lifestyles and long-term well-being.

Previously, Vishal founded Indiagames, which was acquired by Walt Disney, and has been recognized among the top global executives in mobile content alongside industry leaders like Steve Jobs. He continues to contribute to the tech ecosystem as a member of the Tech Entrepreneurs Association of Mumbai (TEAM) and the Academic Advisory Board at the Somaiya School of Design.

An active angel investor and podcast host of ‘Beneath the Force’, Vishal engages with diverse leaders and innovators. A passionate fitness enthusiast, he regularly participates in marathons, trekking, and adventure sports—reflecting his belief in living the philosophy he builds through GOQii.

Vishal’s vision continues to shape the intersection of health, technology, and engagement—driving the future of preventive healthcare.`
  },
  { 
    name: "Abhishek Sharma", 
    role: "Co-Founder & CEO – GOQii UK", 
    image: "https://appcdn.goqii.com/storeimg/69425_1775110219.jpg", 
    bio: `Abhishek leads brand development, product marketing, PR, and social media at GOQii. A seasoned fitness product expert, he has worked with global brands like Nike across India, the USA, and the UK, driving both product innovation and consumer engagement.

He is deeply committed to sustainability and social impact, having collaborated with global non-profit organizations on key initiatives. Outside work, Abhishek is an avid football fan, travel photographer, and enjoys long motorbike road trips.`
  },
  { 
    name: "Sachin Janghel", 
    role: "Co-Founder & CTO", 
    image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", 
    bio: `Sachin leads the technology behind the GOQii ecosystem, bringing extensive experience across mobile, online, and interactive platforms. He has previously served as Technology Director at Indiagames (acquired by Disney UTV), where he led large-scale development teams.

At Disney UTV, he worked on building technologies for Interactive TV platforms including satellite, digital cable, and IPTV. A passionate technologist, Sachin enjoys exploring new innovations, gaming, and has represented his state in national-level football and hockey.`
  },
  { 
    name: "Champ Alreja", 
    role: "Co-Founder & CBO – Health Store", 
    image: "https://appcdn.goqii.com/storeimg/93100_1775110237.jpg", 
    bio: `Champ combines engineering, manufacturing, and entrepreneurship to drive innovation at GOQii’s Health Store. As the founder of HitPlay, he brings deep expertise in building and delivering consumer tech products with a strong focus on quality and affordability.

Known for his creative and execution-driven mindset, Champ continuously pushes industry benchmarks in product development and service. A passionate tennis player, he enjoys staying active and competitive on the court.`
  },
  { 
    name: "Krishna Kumar", 
    role: "Chief Customer Officer", 
    image: "https://appcdn.goqii.com/storeimg/41869_1756732325.png", 
    bio: `KK leads customer experience, brand strategy, and consumer engagement at GOQii. With a strong background in advertising and digital marketing, he has worked with leading global networks like Publicis, Leo Burnett, and WPP, and founded Media2win—one of India’s top digital agencies.

An avid mountaineer and marathon runner, KK regularly scales Himalayan peaks and brings the same discipline and endurance into building impactful brands.`
  },
  { 
    name: "Rohit Pareek", 
    role: "Chief Financial Officer", 
    image: "https://appcdn.goqii.com/storeimg/57617_1775121635.jpg", 
    bio: `Rohit leads finance and corporate development at GOQii, bringing deep expertise from his investment banking career at Jefferies, JM Financial, and Times Group. He has worked with numerous companies and investors, gaining strong insights into growth, governance, and financial strategy.

An alumnus of IIM Ahmedabad and IIT BHU, Rohit is passionate about sustainability and social impact. He enjoys meditation and spending time with family.`
  },
  { 
    name: "V Srinivasan", 
    role: "Director", 
    image: "https://appcdn.goqii.com/storeimg/66392_1775110257.jpg", 
    bio: `Srini is a Chartered Accountant with over 25 years of experience across leading corporates. He previously served as CFO of Bharti AXA Life Insurance and has extensive expertise in financial planning, data analysis, and growth strategy.

He has also contributed to regulatory and policy discussions as part of committees with IRDA and the Ministry of Finance. A fitness enthusiast, Srini enjoys food, music, and staying active.`
  },
  { 
    name: "Luke Coutinho", 
    role: "Master Coach & Head Nutritionist", 
    image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Like-Counho.png", 
    bio: `Luke is a globally recognized nutritionist, author, and motivational speaker. His book “Eat Smart, Move More, Sleep Right” has reached audiences worldwide. He collaborates with the Yale Griffin Prevention Research Center and leads educational programs across India and Asia.

A strong advocate of preventive health and lifestyle-based healing, Luke focuses on nutrition, holistic wellness, and sustainable habit change—helping individuals shift towards healthier living.`
  },
];

const BOARD = [
  { name: "Bala Deshpande", role: "Director", image: "https://appcdn.goqii.com/storeimg/40814_1775053051.jpg" },
  { name: "Amit Singhal", role: "Director", image: "https://appcdn.goqii.com/storeimg/98313_1775053077.jpg" },
  { name: "Dr. Christine Li", role: "Director", image: "https://appcdn.goqii.com/storeimg/57121_1775053095.jpg" },
  { name: "Pravin Gandhi", role: "Director", image: "https://appcdn.goqii.com/storeimg/24219_1775109984.jpg" },
  { name: "Vishal Gondal", role: "Director", image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Vishal.png" },
];

const INVESTORS = [
  { name: "Mitsui", image: "https://websitecdn.goqii.com/images/profileimg/mitusui_logo.png" },
  { name: "Galaxy Digital", image: "https://websitecdn.goqii.com/images/profileimg/galaxy_digital.png" },
  { name: "Megadelta Capital", image: "https://websitecdn.goqii.com/images/profileimg/investor_mega.png" },
  { name: "Cheetah Mobile", image: "https://websitecdn.goqii.com/images/profileimg/investor_cm.png" },
  { name: "Animoca Brands", image: "https://appcdn.goqii.com/storeimg/33388_1658921764.png" },
  { name: "Modality", image: "https://appcdn.goqii.com/storeimg/87523_1658921815.jpg" },
  { name: "GWC", image: "https://websitecdn.goqii.com/images/profileimg/investor_glue.png" },
  { name: "DSG", image: "https://websitecdn.goqii.com/images/profileimg/investor_dsg.png" }
];

const ADVISORS = [
  { name: "Ilkka Paananen", image: "https://websitecdn.goqii.com/images/profileimg/investor_ilkka.png" },
  { name: "Pravin Gandhi", image: "https://websitecdn.goqii.com/images/profileimg/investor_pravin.png" },
  { name: "Amit Singhal", image: "https://websitecdn.goqii.com/images/profileimg/investor_amit.png" },
  { name: "Neeraj Arora", image: "https://websitecdn.goqii.com/images/profileimg/investor_neeraj.png" },
  { name: "Vijay Sharma", image: "https://websitecdn.goqii.com/images/profileimg/investor_vijay.png" },
  { name: "Marco Argenti", image: "https://websitecdn.goqii.com/images/profileimg/investor_marco.png" },
  { name: "Anil Godhwani", image: "https://websitecdn.goqii.com/images/profileimg/investor_anil.png" },
  { name: "Bharat Vasan", image: "https://websitecdn.goqii.com/images/profileimg/investor_bharat.png" },
  { name: "Dr. Shriram Nene", image: "https://websitecdn.goqii.com/images/profileimg/investor_shriram.png" },
  { name: "Esther Dyson", image: "https://websitecdn.goqii.com/images/profileimg/investor_esther.png" },
  { name: "Gautam Godhwani", image: "https://websitecdn.goqii.com/images/profileimg/investor_gautam.png" },
  { name: "Kanwaljit Bombra", image: "https://websitecdn.goqii.com/images/profileimg/Kanwaljit.png" },
  { name: "Mahesh Samat", image: "https://websitecdn.goqii.com/images/profileimg/investor_mahesh.png" },
  { name: "Mike McNamara", image: "https://websitecdn.goqii.com/images/profileimg/investor_mike.png" },
  { name: "Prashant Gulati", image: "https://websitecdn.goqii.com/images/profileimg/investor_prashant.png" },
  { name: "Sanjay Parthasarthy", image: "https://websitecdn.goqii.com/images/profileimg/investor_sanjay.png" },
  { name: "Sanjay Vaswani", image: "https://websitecdn.goqii.com/images/profileimg/Sanjay.png" },
  { name: "Steve Luczo", image: "https://websitecdn.goqii.com/images/profileimg/investor_steve.png" },
  { name: "Taher Khorakiwala", image: "https://websitecdn.goqii.com/images/profileimg/investor_taher.png" },
  { name: "Vijay Vashee", image: "https://websitecdn.goqii.com/images/profileimg/investor_vijayv.png" },
  { name: "S. Somasegar", image: "https://websitecdn.goqii.com/images/profileimg/investor_somasegar.png" },
  { name: "Rajan Anandan", image: "https://websitecdn.goqii.com/images/profileimg/investor_rajan.png" },
  { name: "Deepak I. Shahdadpuri", image: "https://websitecdn.goqii.com/images/profileimg/investor_deepak.png" }
];

const LONGEVITY_COUNCIL = [
  { 
    name: "Prof. Anurag Agrawal", 
    role: "Genomics & Precision Medicine", 
    image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", // Placeholder
    bio: "Former Director, CSIR-IGIB; Dean, Ashoka University. A global authority in genomics and precision medicine."
  },
  { 
    name: "Dr. Aashish Contractor", 
    role: "Cardiology & Rehabilitation", 
    image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", // Placeholder
    bio: "Leading expert in cardiac rehab and preventive cardiology. Known for his work in scaling cardiac rehabilitation programs."
  },
  { 
    name: "Dr. Nirmal Punjabi", 
    role: "Clinical Research", 
    image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", // Placeholder
    bio: "Specialist in metabolic health and clinical trial validation. Expert in designing and validating clinical protocols."
  }
];

const TABS = [
  { id: 'leadership', label: 'Leadership' },
  { id: 'board', label: 'Board of Directors' },
  { id: 'advisory', label: 'Advisory Board' },
  { id: 'longevity', label: 'Longevity Council' }
];

export const Leadership = () => {
  const [activeTab, setActiveTab] = useState('leadership');
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  const getActiveData = () => {
    switch (activeTab) {
      case 'leadership': return LEADERSHIP;
      case 'board': return BOARD;
      case 'advisory': return ADVISORS;
      case 'longevity': return LONGEVITY_COUNCIL;
      default: return LEADERSHIP;
    }
  };

  const activeData = getActiveData();

  return (
    <section className="relative px-4 bg-[var(--bg-primary)] transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* SCENE — LEADERSHIP & TRUST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="small font-bold uppercase tracking-widest text-primary mb-4 mx-auto">Leadership</p>
          <h2 className="font-display font-bold text-slate-900 dark:text-white mb-6">Built by Experts. Trusted Globally.</h2>
          <p className="opacity-70 max-w-3xl mx-auto font-light leading-relaxed">
            GOQii is led by a team with deep expertise in healthcare, technology, and behavioral science.
          </p>
        </motion.div>

        {/* TABS NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION — DYNAMIC CONTENT */}
        <div className="mb-24 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid gap-8 justify-center ${
                activeTab === 'advisory' 
                  ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6' 
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
              }`}
            >
              {activeData.map((leader: any, idx: number) => (
                <motion.div
                  key={leader.name}
                  layoutId={activeTab !== 'advisory' ? `card-${leader.name}` : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={activeTab !== 'advisory' ? () => setSelectedLeader(leader) : undefined}
                  className="group cursor-pointer text-center"
                >
                  {activeTab === 'advisory' ? (
                    <>
                      <div className="aspect-square rounded-full overflow-hidden mb-3 relative shadow-sm mx-auto w-24 md:w-28 border-2 border-white dark:border-slate-800">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {leader.name}
                      </h5>
                    </>
                  ) : (
                    <>
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 relative shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200/50 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 mx-auto">
                        <motion.img 
                          layoutId={`image-${leader.name}`}
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <motion.h5 layoutId={`card-name-${leader.name}`} className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {leader.name}
                      </motion.h5>
                      <motion.p layoutId={`card-role-${leader.name}`} className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {leader.role || 'Advisor'}
                      </motion.p>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SECTION — INVESTORS & PARTNERS (Always Visible) */}
        <div className="mb-24" id="partners">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 border-b border-slate-200 dark:border-slate-800 pb-4"
          >
            Investors & Partners
          </motion.h4>
          
          {/* Marquee */}
          <div className="relative flex overflow-x-hidden py-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />
            
            <motion.div
              className="flex whitespace-nowrap gap-16 px-8 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {/* Double the array for seamless looping */}
              {[...INVESTORS, ...INVESTORS].map((investor, idx) => (
                <div key={idx} className="flex items-center justify-center h-16 w-48 shrink-0">
                  <img 
                    src={investor.image} 
                    alt={investor.name} 
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Modal for Leader Bio */}
      <AnimatePresence>
        {selectedLeader && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="popup-overlay"
            />
            <div className="popup-wrapper">
              <motion.div
                layoutId={`card-${selectedLeader.name}`}
                className="popup-container w-full max-w-4xl max-h-[85vh] flex flex-col md:flex-row overflow-hidden"
              >
                <button 
                  onClick={() => setSelectedLeader(null)}
                  className="popup-close"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Left Side: Image */}
                <div className="w-full md:w-[40%] relative bg-slate-100 dark:bg-slate-900 min-h-[300px] md:min-h-0">
                  <motion.img 
                    layoutId={`image-${selectedLeader.name}`}
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Mobile Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:hidden to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8 md:hidden">
                    <motion.h5 layoutId={`name-${selectedLeader.name}`} className="text-3xl font-bold text-white mb-1 tracking-tight">
                      {selectedLeader.name}
                    </motion.h5>
                    <motion.p layoutId={`role-${selectedLeader.name}`} className="text-primary text-lg font-medium">
                      {selectedLeader.role}
                    </motion.p>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto bg-white dark:bg-dark-card flex flex-col">
                  <div className="hidden md:block mb-8">
                    <motion.h5 
                      layoutId={`name-${selectedLeader.name}`} 
                      className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
                    >
                      {selectedLeader.name}
                    </motion.h5>
                    <motion.p 
                      layoutId={`role-${selectedLeader.name}`} 
                      className="text-primary-dark dark:text-primary text-xl font-medium"
                    >
                      {selectedLeader.role}
                    </motion.p>
                  </div>
                  
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap text-base md:text-lg font-light">
                      {selectedLeader.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
