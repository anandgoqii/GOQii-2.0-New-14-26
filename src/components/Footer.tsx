import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Linkedin, 
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useModals } from '../context/ModalContext';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const Footer = () => {
  const { openDemoModal, openSalesModal } = useModals();
  const location = useLocation();
  const isLegalPage = location.pathname === '/privacy' || location.pathname === '/terms';

  return (
    <footer className="relative pt-12 pb-12 overflow-hidden bg-[var(--bg-primary)] text-slate-600 dark:text-slate-300 transition-colors duration-300 border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <div className="footer-column">
            <h4 className="text-slate-900 dark:text-white text-[10px] font-medium tracking-[2px] mb-6 uppercase max-w-none">CONSUMER</h4>
            <div className="flex flex-col gap-3">
              <a href="https://goqii.com/superlife/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">SuperLife</a>
              <a href="https://consult.goqii.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Personal Care</a>
              <a href="https://goqii.com/smartrx" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">SmartRx</a>
              <a href="https://store.goqii.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Wearables</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="text-slate-900 dark:text-white text-[10px] font-medium tracking-[2px] mb-6 uppercase max-w-none">ENTERPRISE</h4>
            <div className="flex flex-col gap-3">
              <Link to="/for-business" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">For Business</Link>
              <a href="https://goqii.com/healthengage-insurance" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Insurance</a>
              <a href="https://goqii.com/healthengage-pharma" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Pharma</a>
              <a href="https://goqii.com/healthengage-corporate" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Corporate</a>
              <a href="https://go-qii-connected-care-7c49.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Hospital</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="text-slate-900 dark:text-white text-[10px] font-medium tracking-[2px] mb-6 uppercase max-w-none">COMPANY</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">About Us</Link>
              <Link 
                to="/contact"
                className="text-left text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
              >
                Contact Us
              </Link>
              <Link to="/about#leadership" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Leadership</Link>
              <Link to="/careers" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Careers</Link>
              <Link to="/investors" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Investors</Link>
              <Link to="/about#partners" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Partners</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="text-slate-900 dark:text-white text-[10px] font-medium tracking-[2px] mb-6 uppercase max-w-none">TRUST & LEGAL</h4>
            <div className="flex flex-col gap-3">
              <Link to="/trust-center" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Trust Center</Link>
              <Link to="/privacy" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pt-12 border-t border-black/5 dark:border-white/5">
          <div className="flex items-center gap-6">
            <img 
              src="https://appcdn.goqii.com/user/storeimg/98354_1775837380.png" 
              alt="GOQii" 
              className="h-8 w-auto object-contain hidden dark:block"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://appcdn.goqii.com/user/storeimg/94402_1775837615.png" 
              alt="GOQii" 
              className="h-8 w-auto object-contain block dark:hidden"
              referrerPolicy="no-referrer"
            />
            <p className="text-slate-500 text-sm max-w-xs">
              Transforming healthcare from reactive treatment to continuous, AI-driven prevention.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://x.com/GOQii" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110" title="X (Twitter)">
              <XIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </a>
            <a href="https://www.facebook.com/GOQiiLife" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110" title="Facebook">
              <Facebook className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </a>
            <a href="https://www.instagram.com/goqiilife/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110" title="Instagram">
              <Instagram className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </a>
            <a href="https://www.linkedin.com/company/goqii" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110" title="LinkedIn">
              <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </a>
            <a href="https://www.youtube.com/@GOQii" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110" title="YouTube">
              <Youtube className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-sm">
          <p>© 2026 GOQii Inc. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-slate-900 dark:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
