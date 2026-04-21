import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const LEADERSHIP = [
  { 
    name: "Vishal Gondal", 
    role: "Founder & CEO", 
    image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Vishal.png", 
    bio: `Father of Indian gaming. Sold Indiagames to Walt Disney. Now pioneering preventive health at the intersection of AI, coaching, and the metaverse.`,
    longBio: `A leading global figure at the intersection of healthcare, gaming, and entrepreneurship. As Founder and CEO of GOQii, he has transformed preventive healthcare by integrating AI, technology, and gamification across India, the UK, and the Middle East. 

Known globally as the "Father of the Indian Gaming Industry," his early success with Indiagames culminated in its acquisition by The Walt Disney Company; he subsequently launched nCore Games, creator of FAU-G. Organises Mumbai Hacks for healthcare AI innovation. An avid marathon runner, trekker, and skydiver.`,
    tags: ["Preventive Healthcare", "AI & Tech", "Gaming"],
    location: "Mumbai · Global",
    footerLine: "25+ Years in Tech & Health · Indiagames → Disney · GOQii"
  },
  { 
    name: "Champ Alreja", 
    role: "Co-Founder & Chief Business Officer", 
    image: "https://appcdn.goqii.com/storeimg/93100_1775110237.jpg", 
    bio: `Built GOQii's first wearables, conceived the Health Store, and leads global BD and APAC expansion across Hong Kong, Singapore, and the Asia Pacific.`,
    longBio: `Radical in thought, meticulous in execution. Champ co-founded GOQii in 2014, bringing hardware engineering, behavioural product thinking, and commercial instinct to the company's growth. Before GOQii, he founded HitPlay — a gadget and consumer tech company built from scratch before Flipkart, before Amazon, at 24 with no playbook and no funding. As a product designer and inventor, he built GOQii's first lines of wearables from 2013 — at a time when the only comparable device was the original Fitbit Flex, which had no screen and no real-time feedback. His devices did. His career began as a Sound Engineer, giving him a ground-up understanding of how people interact with technology. He also conceived and built the GOQii Health Store — a scientifically designed rewards and retention engine grounded in behavioural economics and game theory, now one of the platform's most distinctive moats. Leads global BD and APAC expansion across Hong Kong, Singapore, and the Asia Pacific. A competitive tennis player who has built health discipline the same way he builds companies — one consistent rep at a time.`,
    tags: ["Preventive Health", "Health Store", "APAC"],
    location: "Hong Kong · Mumbai",
    footerLine: "Co-Founder · Wearables Pioneer · Health Store Architect"
  },
  { 
    name: "Sachin Janghel", 
    role: "Co-Founder & CTO", 
    image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", 
    bio: `The technology brain behind GOQii. Built the entire HealthEngage ecosystem — AI, blockchain (UHT), wearables, IoT, and clinical platforms. Former Technology Director at Indiagames and Director of iTV at Disney UTV.`,
    longBio: `The technology brain behind the entire GOQii ecosystem. Sachin co-founded GOQii in 2013 and has spent over a decade building one of the world's most comprehensive AI-driven preventive health platforms — from wearables and IoT devices to blockchain initiatives like the Universal Health Token (UHT). His career began with 11 years in game and interactive application development across mobile, online, and social platforms, including as Technology Director at Indiagames, India's #1 gaming company acquired by Disney UTV. At Disney UTV, he then led the build-out of Interactive TV platforms — satellite, digital cable, HITS, and IPTV. At GOQii, he leads AI-powered digital health solutions, remote patient monitoring, clinical workflow automation, and strategic technology partnerships with global insurers and healthcare providers. A football and hockey player who represented his home state at national level tournaments.`,
    tags: ["AI & Healthtech", "Blockchain / UHT", "Gaming & IoT"],
    location: "Saudi Arabia · Mumbai",
    footerLine: "Co-Founder · 12+ Years Building GOQii · Disney UTV · UHT Core Team"
  },
  { 
    name: "Abhishek Sharma", 
    role: "Co-Founder & CEO, GOQii UK", 
    image: "https://appcdn.goqii.com/storeimg/69425_1775110219.jpg", 
    bio: `Leading GOQii's UK operations and NHS-aligned expansion. 7+ years at Nike across India, USA, and UK. Co-founder since 2013; built the brand from startup to recognised UK health platform.`,
    longBio: `Abhishek leads GOQii's UK operations and has been instrumental in building the brand's presence in one of the world's most demanding health markets. He brings over seven years at Nike across India, the USA, and the UK — spanning senior product and consumer roles — along with deep expertise in brand development, product marketing, PR, and social media. As Co-Founder and CMO from 2013, then COO, and now CEO of GOQii UK, he has grown the business from a startup into a recognised NHS-aligned health platform. A strong believer in sustainability and social impact, he has collaborated with global non-profits on key social projects. An ardent football fan, travel photographer, and long-distance motorbike rider.`,
    tags: ["Brand & Marketing", "UK Market", "Consumer Health"],
    location: "London",
    footerLine: "Co-Founder · CEO GOQii UK · Nike · IIM Calcutta"
  },
  { 
    name: "Krishna Kumar", 
    role: "Chief Customer Officer", 
    image: "https://appcdn.goqii.com/storeimg/41869_1756732325.png", 
    bio: `Chief Customer Officer and head of marketing strategy. Founded Media2win — one of India's top digital agencies. Mountaineer who scales 6000m+ Himalayan peaks every year and runs multiple marathons.`,
    longBio: `A passion for brands, mountains, and startups is what drives KK. At GOQii, he is Chief Customer Officer and leads overall marketing strategy and consumer engagement — building systems that help people make healthier choices and sustain them over time. His career began in advertising across networks including Publicis, Leo Burnett, and WPP (Mindshare), before he founded Media2win in 2004 — a digital agency that grew into one of India's top digital firms and won multiple industry awards. That brought him to GOQii, where he works at the intersection of technology, data, coaching, and behavioural science. Also a Core Team member at Universal Health Token (UHT), focused on marketing. Outside work, he scales 6000+ metre peaks in the Himalayas every year and runs multiple marathons — proof that he lives the preventive health philosophy he champions.`,
    tags: ["Consumer Engagement", "Brand Strategy", "Digital Marketing"],
    location: "Mumbai",
    footerLine: "CCO · Media2win Founder · UHT Core Team · Mindshare / WPP"
  },
  { 
    name: "Rohit Pareek", 
    role: "CFO & Head Corporate Development", 
    image: "https://appcdn.goqii.com/storeimg/57617_1775121635.jpg", 
    bio: `50+ PE/VC, M&A, and IPO transactions across India and the US. Built Jefferies India's ECM desk from zero. IIM Ahmedabad MBA · IIT BHU B.Tech.`,
    longBio: `Rohit leads finance and corporate development at GOQii, bringing deep expertise from his investment banking career at Jefferies, JM Financial, and Times Group. He has led 50+ PE/VC, M&A, and IPO transactions across India and the US.

He built Jefferies India's Equity Capital Markets (ECM) desk from zero to a leading position. An alumnus of IIM Ahmedabad and IIT BHU, Rohit is passionate about sustainability and governance. He enjoys meditation and spending time with family.`,
    tags: ["Corp Finance", "M&A", "Governance"],
    location: "USA · Mumbai",
    footerLine: "IIM Ahmedabad · Jefferies Alumnus · Finance Strategy"
  },
  { 
    name: "Piyush Karnani", 
    role: "Chief Business Officer", 
    image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", 
    bio: `23+ years across banking, insurance, and healthtech. Launched industry-first contactless and wearable payment solutions. Ex-Marsh, Standard Chartered, Barclays, Citibank.`,
    longBio: `Senior business leader with 23+ years spanning banking, insurance, and healthtech. At GOQii, Piyush leads P&L ownership and the banking, insurance, payments, and strategic initiatives verticals — building alliances with banks, fintechs, insurers, and governments. He launched industry-first contactless and wearable payment solutions and led global expansion at GOQii. Previously VP of Digital Insurance & Consumer Business at Marsh & McLennan (country head), Head of Consumer Banking Sales & Liabilities at Standard Chartered Bank, Regional Head at Barclays, and Bancassurance roles at Citibank. A specialist in strategic partnerships, payments ecosystems, and embedded finance across global markets.`,
    tags: ["Banking & Insurance", "Payments", "Strategic Partnerships"],
    location: "UAE · Mumbai",
    footerLine: "23+ Years · Marsh · Standard Chartered · Barclays · Citibank"
  },
  { 
    name: "Srinivasan V Swamy", 
    role: "Director", 
    image: "https://appcdn.goqii.com/storeimg/66392_1775110257.jpg", 
    bio: `25+ years in corporate finance. Former CFO of Bharti AXA Life Insurance. Independent Director at Acko and Aegon Life. Pioneer of India's fractional CXO model with 500+ SME clients.`,
    longBio: `A Chartered Accountant with over 25 years in corporate finance and operations. Srini served as CFO of Bharti AXA Life Insurance, where he led finance, strategy, legal, compliance, and investment functions — including direct engagement with IRDA and the Ministry of Finance on complex policy issues. He later served as Independent Director at Aegon Life and Acko Insurance. Since founding CFO Bridge in 2011, he has become one of India's pioneers of the fractional CXO model, partnering with 500+ SMEs and startups across India, the US, and UAE. Also co-founder of CTO Bridge and CHRO Bridge. A passionate sleep advocate, Vipassana meditator, and yoga practitioner.`,
    tags: ["Finance & Governance", "Insurance", "Fractional CFO"],
    location: "Mumbai",
    footerLine: "CA · Bharti AXA CFO · CFO Bridge Founder · 500+ SMEs"
  },
  { 
    name: "Luke Coutinho", 
    role: "Co-Founder, Master Coach & Head Nutritionist", 
    image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Like-Counho.png", 
    bio: `India's leading integrative medicine expert. 17M+ global community, 20K+ patients healed. PM Modi's Fit India Champion. Four-time bestselling author. The clinical heart of GOQii's coaching model.`,
    longBio: `India's foremost integrative and lifestyle medicine expert, and the clinical soul of GOQii's coaching model. Luke has consulted and treated over 20,000 patients globally — including cancer, Alzheimer's, diabetes, and rare metabolic syndromes — through his signature five-pillar framework: Cellular Nutrition, Adequate Exercise, Quality Sleep, Emotional Detox, and Spirit. His global community of 17M+ spans billionaires to A-listers across Bollywood, royal families in the Middle East, and elite athletes. Named Champion for Lifestyle & Wellness for Prime Minister Modi's Fit India Movement. Four-time bestselling author. Founder of You Care Lifestyle and the Lifeness Science Institute. Over 250 talks across the world.`,
    tags: ["Integrative Medicine", "Holistic Nutrition", "Preventive Health"],
    location: "Mumbai · Global",
    footerLine: "17M+ Community · 20K+ Patients · PM Fit India Champion · Author"
  },
  { 
    name: "Kamal Chandran", 
    role: "Chief Compliance & HR Officer", 
    image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", 
    bio: `HR leader, talent strategist, and NLP Life Performance Coach. Leads compliance and people strategy across GOQii and nCORE. Ex-Accenture, ScaleneWorks. IIM Nagpur alumna.`,
    longBio: `HR leader, talent strategist, and NLP Life Performance Coach driving people and AI synergy at GOQii. Kamal leads the company's compliance and human resources function, with a career spanning Accenture (Talent Acquisition Delivery Lead — Product Industry), ScaleneWorks (VP RPO Head), and senior HR business partner roles. Simultaneously serves as Group Head Human Resources at nCORE Games. Specialises in strategic HR planning, talent acquisition, employee relations, diversity and inclusion, succession planning, and coaching. An IIM Nagpur alumna, she brings a rare combination of enterprise rigour and startup agility to building GOQii's people infrastructure.`,
    tags: ["HR Strategy", "Talent & Culture", "Compliance"],
    location: "Mumbai",
    footerLine: "CHRO · nCORE Group HR Head · Accenture · ScaleneWorks · IIM Nagpur"
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
  // HONG KONG
  { 
    name: "Yat Siu", 
    role: "Co-Founder & Executive Chairman", 
    company: "Animoca Brands",
    image: "https://websitecdn.goqii.com/images/profileimg/investor_yatsiu.png",
    bio: "Asia's leading Web3 entrepreneur. Built Outblaze to 75M users, sold to IBM, co-founded Animoca Brands — 500+ portfolio investments in digital property rights. Recently secured HKMA stablecoin licence.",
    tags: ["Web3", "Gaming"],
    location: "Hong Kong",
    region: "HONG KONG"
  },
  { 
    name: "Desmond Lin", 
    role: "PE & VC Investor", 
    company: "Eos Venture Partners",
    image: "https://websitecdn.goqii.com/images/profileimg/investor_desmond.png",
    bio: "Insurtech and healthtech investor spanning Swiss Re, Longreach Group, and Eos Ventures. Deep capital markets expertise across Greater China.",
    tags: ["Insurtech", "PE / VC"],
    location: "Hong Kong",
    region: "HONG KONG"
  },
  { 
    name: "Rich Robinson", 
    role: "Entrepreneur-in-Residence", 
    company: "Animoca Brands",
    image: "https://websitecdn.goqii.com/images/profileimg/investor_rich.png",
    bio: "30 years across Asia's tech waves from Web 1.0 to Web3. 8 startups; 3 public exits. Peking University professor. Rare connector across Silicon Valley and Asia.",
    tags: ["Web3", "Startups"],
    location: "HK · Bali · Beijing",
    region: "HONG KONG"
  },
  // UNITED KINGDOM
  { 
    name: "Prof Vincent Sai", 
    role: "Group CEO & Partner", 
    company: "Modality Partnership (NHS)",
    image: "https://websitecdn.goqii.com/images/profileimg/investor_vincent.png",
    bio: "Scaled the UK's largest NHS GP super-partnership to 12M+ patients across 55+ sites. Honorary Professor at UCL. GOQii's NHS clinical outcomes anchor.",
    tags: ["NHS", "Digital Health"],
    location: "London",
    region: "UNITED KINGDOM"
  },
  // UNITED STATES
  { 
    name: "Amit Singhal", 
    role: "Former SVP Search — Google", 
    company: "Founder, Sitare University & Foundation",
    image: "https://appcdn.goqii.com/storeimg/98313_1775053077.jpg",
    bio: "Architect of Google Search for 15 years as employee #176. Named by Fortune as one of the smartest people in tech. Founded Sitare University — India's first fully free private CS university.",
    tags: ["Search / AI", "Engineering"],
    location: "USA",
    region: "UNITED STATES"
  },
  { 
    name: "Lauren Selig", 
    role: "Founder & CEO", 
    company: "Shake and Bake Productions",
    image: "https://websitecdn.goqii.com/images/profileimg/investor_lauren.png",
    bio: "Executive producer of Hacksaw Ridge, Rocketman, and Wheel of Time. Emmy winner. Investor in A16z and Vaxxinity. XPRIZE board member.",
    tags: ["Entertainment", "Venture"],
    location: "Los Angeles",
    region: "UNITED STATES"
  },
  // UAE / GLOBAL
  { 
    name: "Manoj Narender Madnani", 
    role: "President", 
    company: "GasEntec · Beacon Media",
    image: "https://websitecdn.goqii.com/images/profileimg/investor_manoj.png",
    bio: "$20B+ in global transactions across energy, infrastructure, and media. Brought enterprise AI to UAE and GCC. YPO member. Babson Trustee.",
    tags: ["Investments", "GCC / MENA"],
    location: "Dubai",
    region: "UAE / GLOBAL"
  },
  // INDIA
  { 
    name: "Champ Alreja", 
    role: "Co-Founder & CBO", 
    company: "GOQii",
    image: "https://appcdn.goqii.com/storeimg/93100_1775110237.jpg",
    bio: "Built GOQii's first wearables from 2013 before the category existed. Conceived the Health Store — a retention engine grounded in behavioural economics. Leads global BD and APAC expansion.",
    tags: ["Preventive Health", "Health Store"],
    location: "Hong Kong · Mumbai",
    region: "INDIA"
  },
  { 
    name: "Bala Deshpande", 
    role: "Managing Director", 
    company: "MegaDelta Capital",
    image: "https://appcdn.goqii.com/storeimg/40814_1775053051.jpg",
    bio: "Two decades in venture from ICICI Venture to NEA India. Backed India's first internet IPO, first news channel, and first payments company. Independent director at Info Edge.",
    tags: ["Venture Capital", "Consumer Tech"],
    location: "Mumbai",
    region: "INDIA"
  },
  { 
    name: "Pravin Gandhi", 
    role: "General Partner", 
    company: "Seedfund",
    image: "https://appcdn.goqii.com/storeimg/24219_1775109984.jpg",
    bio: "Founding figure of India's tech and VC ecosystem. 40+ years across Hinditron, Infinity Ventures, and Seedfund. Former TiE Mumbai President and TiE Global Trustee.",
    tags: ["Early Stage VC", "India Ecosystem"],
    location: "Mumbai",
    region: "INDIA"
  },
  // SINGAPORE
  { 
    name: "Christine Li", 
    role: "VP Strategy & Operations", 
    company: "MBK Healthcare (Mitsui & Co.)",
    image: "https://appcdn.goqii.com/storeimg/57121_1775053095.jpg",
    bio: "Physician-turned-strategist at Mitsui's global healthcare investment platform. Previously Parkway Pantai and IHH. UHT advisory board. HBS MBA; MBBS NUS.",
    tags: ["Healthcare Strategy", "HCIT"],
    location: "Singapore",
    region: "SINGAPORE"
  }
];

const LONGEVITY_COUNCIL = [
  { 
    name: "Prof. Anurag Agrawal", 
    role: "Longevity Scientist", 
    company: "Ashoka University",
    image: "", // Use initials
    bio: "Genomics & Precision Medicine. Former Director, CSIR-IGIB; Dean, Ashoka University. A global authority in genomics and precision medicine.",
    tags: ["Clinical", "Longevity"],
    location: "New Delhi"
  },
  { 
    name: "Dr. Aashish Contractor", 
    role: "Cardiology & Rehabilitation", 
    company: "Reliance Foundation Hospital",
    image: "", 
    bio: "Leading expert in cardiac rehab and preventive cardiology. Director at Sir H.N. Reliance Foundation Hospital.",
    tags: ["Cardiology", "Rehab"],
    location: "Mumbai"
  },
  { 
    name: "Dr. Nirmal Punjabi", 
    role: "Metabolic Health", 
    company: "Reliance Foundation Hospital",
    image: "", 
    bio: "Specialist in metabolic health and clinical trial validation. Expert in designing and validating clinical protocols.",
    tags: ["Metabolic Health", "Research"],
    location: "Mumbai"
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
          <p className="opacity-70 max-w-4xl mx-auto font-light leading-relaxed text-lg md:text-xl">
            Founded in 2014 by visionary entrepreneur Vishal Gondal, GOQii has been at the forefront of transforming preventive healthcare on a global scale.
          </p>
          <p className="opacity-70 max-w-4xl mx-auto font-light leading-relaxed text-lg md:text-xl mt-4">
            What started as a mission to shift the focus from reactive "sick care" to proactive preventive care has evolved into a comprehensive digital health platform.
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
              className="w-full"
            >
              {activeTab === 'advisory' ? (
                <div className="space-y-20">
                  {['HONG KONG', 'UNITED KINGDOM', 'UNITED STATES', 'UAE / GLOBAL', 'INDIA', 'SINGAPORE'].map(regionName => {
                    const regionalAdvisors = ADVISORS.filter(a => a.region === regionName);
                    if (regionalAdvisors.length === 0) return null;
                    
                    return (
                      <div key={regionName} className="region-section">
                        <div className="flex items-center gap-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-4">
                          <h3 className="text-primary font-bold tracking-[0.2em] text-xs uppercase shrink-0">
                            {regionName}
                          </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {regionalAdvisors.map((advisor) => (
                            <div
                              key={advisor.name}
                              className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl flex flex-col items-start text-left h-full"
                            >
                              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-slate-100 dark:border-slate-800 group-hover:border-primary/20 transition-colors shrink-0">
                                <img 
                                  src={advisor.image} 
                                  alt={advisor.name} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              
                              <div className="flex-1 flex flex-col w-full">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                  {advisor.name}
                                </h4>
                                <div className="mb-4">
                                  <p className="text-primary font-bold text-sm leading-tight">
                                    {advisor.role}
                                  </p>
                                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5 opacity-80">
                                    {advisor.company}
                                  </p>
                                </div>
                                
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                  {advisor.bio}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50 w-full">
                                  <div className="flex flex-wrap gap-1.5 mb-4">
                                    {(advisor.tags || []).map(tag => (
                                      <span key={tag} className="px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-tight">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  
                                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {advisor.location}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : activeTab === 'longevity' ? (
                <div className="w-full">
                  <div className="flex items-center gap-4 mb-10 border-b border-primary/20 pb-4">
                    <h3 className="text-primary font-bold tracking-[0.2em] text-sm uppercase shrink-0">
                      SANJEEVANI LONGEVITY COUNCIL
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LONGEVITY_COUNCIL.map((member) => (
                      <div
                        key={member.name}
                        className="group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 border-dashed transition-all duration-300 hover:border-primary/50 flex flex-col items-start text-left h-full"
                      >
                        <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-primary/10 flex items-center justify-center mb-6 border-2 border-slate-100 dark:border-primary/20 shrink-0">
                          <span className="text-2xl font-bold text-primary">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex-1 flex flex-col w-full">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                            {member.name}
                          </h4>
                          <div className="mb-4">
                            <p className="text-primary font-bold text-sm leading-tight">
                              {member.role}
                            </p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5 opacity-80">
                              {member.company}
                            </p>
                          </div>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-light">
                            {member.bio}
                          </p>

                          <div className="mt-auto flex flex-col gap-4 w-full">
                            <div className="flex flex-wrap gap-2">
                              {(member.tags || []).map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add Members Placeholder Card */}
                    <div className="group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/30 border-2 border-slate-200 dark:border-slate-800 border-dashed transition-all duration-300 flex flex-col items-start text-left h-full opacity-60">
                      <div className="w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 border-2 border-slate-100 dark:border-slate-700 shrink-0">
                        <span className="text-3xl font-light text-slate-400">+</span>
                      </div>
                      
                      <div className="flex-1 flex flex-col w-full">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          Add members
                        </h4>
                        <div className="mb-4">
                          <p className="text-primary font-bold text-sm leading-tight">
                            Doctors & wellness experts
                          </p>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                            TBD
                          </p>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-light italic">
                          Coming soon.
                        </p>

                        <div className="mt-auto">
                          <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-400 uppercase">
                            Placeholder
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6 justify-center">
                  {activeData.map((leader: any, idx: number) => (
                    <motion.div
                      key={leader.name}
                      layoutId={`card-${leader.name}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setSelectedLeader(leader)}
                      className="group cursor-pointer p-7 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 flex flex-col items-start text-left h-full"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 relative border-4 border-slate-100 dark:border-slate-800 group-hover:border-primary/20 transition-colors shrink-0">
                        <motion.img 
                          layoutId={`image-${leader.name}`}
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col w-full">
                        <motion.h5 layoutId={`card-name-${leader.name}`} className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                          {leader.name}
                        </motion.h5>
                        
                        <motion.div layoutId={`card-role-container-${leader.name}`} className="mb-4">
                          <p className="text-primary font-bold text-sm leading-tight">
                            {leader.role}
                          </p>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                            GOQii
                          </p>
                        </motion.div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light line-clamp-3 mb-6">
                            {leader.bio ? (leader.bio.includes('\n') ? leader.bio.split('\n')[0] : leader.bio) || "Pioneering innovation at GOQii." : "Pioneering innovation at GOQii."}
                        </p>

                        <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-slate-100 dark:border-slate-800/50 w-full">
                          <div className="flex flex-wrap gap-2">
                             {(leader.tags || ["Health Tech", "Innovation"]).slice(0, 2).map((tag: string) => (
                               <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                                 {tag}
                               </span>
                             ))}
                           </div>
                           
                           <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                             {leader.location || "Mumbai • Global"}
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
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
                className="popup-container w-full max-w-2xl p-6 md:p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl relative flex flex-col border border-slate-200 dark:border-slate-800 mx-4"
              >
                <button 
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors z-50 border border-slate-200 dark:border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header: Circle Image + Info */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shrink-0 shadow-lg">
                    <motion.img 
                      layoutId={`image-${selectedLeader.name}`}
                      src={selectedLeader.image} 
                      alt={selectedLeader.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="text-center md:text-left pt-1">
                    <motion.h5 
                      layoutId={`card-name-${selectedLeader.name}`} 
                      className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-1 tracking-tight"
                    >
                      {selectedLeader.name}
                    </motion.h5>
                    <motion.div layoutId={`card-role-container-${selectedLeader.name}`} className="mb-4">
                      <p className="text-primary font-bold text-lg leading-none mb-1">
                        {selectedLeader.role}
                      </p>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        GOQii Inc.
                      </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                      {(selectedLeader.tags || ["Health Tech", "Innovation"]).map((tag: string) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-tight">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-8" />

                {/* Body Content */}
                <div className="overflow-y-auto max-h-[35vh] md:max-h-[40vh] pr-4 custom-scrollbar mb-8">
                  <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap text-sm md:text-base font-light">
                      {selectedLeader.longBio || selectedLeader.bio}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-6" />

                {/* Footer Metadata */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                  <div className="text-primary/80">
                    {selectedLeader.footerLine || "GOQii · Leading Health Innovation"}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {selectedLeader.location || "Mumbai · Global"}
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
