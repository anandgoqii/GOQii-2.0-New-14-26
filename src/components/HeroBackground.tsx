import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Desktop Image */}
      <img 
        src="https://appcdn.goqii.com/user/storeimg/45521_1775718820.jpg" 
        alt="Hero Background Desktop" 
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        referrerPolicy="no-referrer"
      />
      {/* Mobile Image */}
      <img 
        src="https://appcdn.goqii.com/user/storeimg/34686_1775720059.jpg" 
        alt="Hero Background Mobile" 
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
        referrerPolicy="no-referrer"
      />
      {/* Theme-aware Overlay */}
      <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/60 transition-colors duration-500" />
    </div>
  );
};
