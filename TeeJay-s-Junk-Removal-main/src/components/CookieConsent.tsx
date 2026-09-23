/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-[9999]"
        >
          <div className="bg-primary border-t-8 border-secondary p-8 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] relative mx-4 md:mx-0 mb-4 md:mb-0">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors p-2"
              aria-label="Close cookie consent"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 text-primary shrink-0 rounded-sm">
                  <Cookie size={32} strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-black text-[22px] text-white uppercase tracking-tighter">Cookies & Privacy</h3>
              </div>
              
              <p className="font-sans text-[15px] text-white/70 leading-relaxed">
                We use strictly necessary cookies to enhance your project estimation experience. No personal data is stored without your consent.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  onClick={handleAccept}
                  className="bg-secondary text-primary font-display font-black text-[14px] px-8 py-4 uppercase tracking-wider hover:bg-white hover:scale-[1.02] transition-all"
                >
                  Accept All
                </button>
                <button 
                  onClick={handleDecline}
                  className="bg-white/10 text-white font-display font-bold text-[14px] px-8 py-4 uppercase tracking-wider hover:bg-white/20 transition-all border border-white/20"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
