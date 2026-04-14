/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { LongevityJourney } from './pages/LongevityJourney';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Careers } from './pages/Careers';
import { ForBusiness } from './pages/ForBusiness';
import { ForYou } from './pages/ForYou';
import { TrustCenter } from './pages/TrustCenter';
import { Investors } from './pages/Investors';
import { Footer } from './components/Footer';
import { ModalProvider } from './context/ModalContext';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = (dark: boolean) => {
    setIsDark(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  return (
    <>
      <ScrollToTop />
      <ModalProvider>
        <div className="min-h-screen font-sans selection:bg-primary/30 transition-colors duration-300">
          <Navbar isDark={isDark} setIsDark={toggleTheme} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/longevity-journey" element={<LongevityJourney />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/for-business" element={<ForBusiness />} />
            <Route path="/for-you" element={<ForYou />} />
            <Route path="/trust-center" element={<TrustCenter />} />
            <Route path="/investors" element={<Investors />} />
          </Routes>

          <Footer />
        </div>
      </ModalProvider>
    </>
  );
}
