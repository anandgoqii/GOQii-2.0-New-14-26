import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useModals } from '../context/ModalContext';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const NavDropdown = ({ title, sections, isScrolled }: { title: string; sections: any[]; isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1.5 hover:text-primary transition-all duration-300 hover:-translate-y-0.5 opacity-70 group-hover:opacity-100 tracking-wide font-medium py-2">
        {title}
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-black/5 dark:border-white/10 overflow-hidden p-6 z-[110] backdrop-blur-xl"
          >
            {sections.map((section, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                {section.title && (
                  section.path ? (
                    <Link 
                      to={section.path}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors mb-3 block group/title flex items-center gap-2"
                    >
                      {section.title}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
                    </Link>
                  ) : (
                    <h4 className="text-[10px] font-medium text-slate-400 dark:text-slate-500 tracking-wider mb-3">{section.title}</h4>
                  )
                )}
                <div className="flex flex-col gap-1.5">
                  {section.links.map((link: any, lIdx: number) => {
                    const isExternal = link.path.startsWith('http');
                    const content = (
                      <>
                        {link.name}
                        <ChevronDown className="w-3 h-3 -rotate-90 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </>
                    );
                    const className = "text-[14px] text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all duration-200 py-1.5 px-3 -mx-3 rounded-xl hover:bg-primary/5 block flex items-center justify-between group/link";
                    
                    return isExternal ? (
                      <a
                        key={lIdx}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        key={lIdx}
                        to={link.path}
                        className={className}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { openDemoModal, openSalesModal } = useModals();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const enterpriseLinks = [
    {
      title: 'HealthEngage Platform',
      path: '/for-business',
      links: [
        { name: 'For Insurance', path: 'https://goqii.com/healthengage-insurance' },
        { name: 'For Pharma', path: 'https://goqii.com/healthengage-pharma' },
        { name: 'For Hospital', path: 'https://go-qii-connected-care-7c49.vercel.app/' },
        { name: 'For Corporate', path: 'https://goqii.com/healthengage-corporate' },
      ]
    }
  ];

  const personalLinks = [
    {
      title: '',
      links: [
        { name: 'Personal Care', path: 'https://consult.goqii.com/' },
        { name: 'Chronic Care', path: '/for-you#chronic-care' },
        { name: 'Insurance Plus', path: 'https://store.goqii.com/goqii-insureplus' },
        { name: 'Longevity', path: 'https://goqii.com/superlife/' },
        { name: 'NutriGenius', path: 'https://goqii.com/nutrigenius' },
      ]
    }
  ];

  return (
    <motion.nav 
      initial={false}
      animate={{
        y: isScrolled ? 10 : 0,
        width: isScrolled ? '95%' : '100%',
        x: isScrolled ? '-50%' : '0%',
        left: isScrolled ? '50%' : '0%',
        borderRadius: isScrolled ? '40px' : '0px',
        paddingTop: isScrolled ? '12px' : '16px',
        paddingBottom: isScrolled ? '12px' : '16px',
        backgroundColor: isScrolled 
          ? (isDark ? 'rgba(15, 23, 42, 0.75)' : 'rgba(255, 255, 255, 0.75)') 
          : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none'
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-[100] top-0 px-4 md:px-10"
    >
      <div className="flex items-center justify-between gap-4 lg:gap-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="transition-transform duration-300 hover:scale-105 block">
            <img 
              src={isDark ? "https://appcdn.goqii.com/user/storeimg/98354_1775837380.png" : "https://appcdn.goqii.com/user/storeimg/94402_1775837615.png"} 
              alt="GOQii" 
              className="h-6 md:h-8 object-contain transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-[13px] lg:text-[14px] font-medium tracking-wide">
          <Link to="/about" className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5 opacity-70 hover:opacity-100">About Us</Link>
          
          <NavDropdown title="Enterprise Solutions" sections={enterpriseLinks} isScrolled={isScrolled} />
          <NavDropdown title="Personal Solutions" sections={personalLinks} isScrolled={isScrolled} />
          
          <Link 
            to="/sanjeevini" 
            className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5 opacity-70 hover:opacity-100 tracking-wide font-medium"
          >
            Sanjeevini
          </Link>

          <a 
            href="https://store.goqii.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5 opacity-70 hover:opacity-100 tracking-wide font-medium"
          >
            Store
          </a>
          
          <Link 
            to="/contact"
            className="hover:text-primary transition-all duration-300 hover:-translate-y-0.5 opacity-70 hover:opacity-100 tracking-wide font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
          
          <button 
            onClick={openDemoModal}
            className="hidden sm:block px-5 py-2 button-primary font-medium text-[10px] md:text-xs shadow-lg shadow-primary/20"
          >
            Request a Demo
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-current"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden mt-4 bg-white dark:bg-slate-900 rounded-2xl border border-black/5 dark:border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link to="/about" className="text-sm font-medium tracking-wide hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              
              {/* Enterprise Mobile */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'enterprise' ? null : 'enterprise')}
                  className="flex items-center justify-between w-full text-sm font-medium tracking-wide hover:text-primary transition-colors"
                >
                  Enterprise Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'enterprise' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'enterprise' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 mt-3 flex flex-col gap-2 border-l border-primary/20">
                      {enterpriseLinks[0].links.map((l, i) => {
                        const isExternal = l.path.startsWith('http');
                        return isExternal ? (
                          <a key={i} href={l.path} target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 py-1" onClick={() => setIsMobileMenuOpen(false)}>{l.name}</a>
                        ) : (
                          <Link key={i} to={l.path} className="text-sm opacity-70 hover:opacity-100 py-1" onClick={() => setIsMobileMenuOpen(false)}>{l.name}</Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Personal Mobile */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'personal' ? null : 'personal')}
                  className="flex items-center justify-between w-full text-sm font-medium tracking-wide hover:text-primary transition-colors"
                >
                  Personal Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'personal' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'personal' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 mt-3 flex flex-col gap-2 border-l border-primary/20">
                      {personalLinks[0].links.map((l, i) => {
                        const isExternal = l.path.startsWith('http');
                        return isExternal ? (
                          <a key={i} href={l.path} target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 py-1" onClick={() => setIsMobileMenuOpen(false)}>{l.name}</a>
                        ) : (
                          <Link key={i} to={l.path} className="text-sm opacity-70 hover:opacity-100 py-1" onClick={() => setIsMobileMenuOpen(false)}>{l.name}</Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/sanjeevini" 
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sanjeevini
              </Link>

              <a 
                href="https://store.goqii.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Store
              </a>

              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                Contact
              </Link>
              
              <button 
                onClick={() => { openDemoModal(); setIsMobileMenuOpen(false); }}
                className="w-full py-3 button-primary font-medium text-sm mt-2 text-center"
              >
                Request a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
