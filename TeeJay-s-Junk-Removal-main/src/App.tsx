/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header, Footer } from './components/layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { BookingForm } from './components/BookingForm';
import { Services, Gallery } from './components/OtherPages';
import { Estimator } from './components/Estimator';
import { Videos } from './components/Videos';
import type { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(regs => {
      regs.forEach(reg => reg.unregister());
    });
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      case 'book':
        return <BookingForm />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'gallery':
        return <Gallery />;
      case 'estimator':
        return <Estimator onNavigate={setCurrentPage} />;
      case 'work_video':
        return <Videos onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={setCurrentPage} />

      <CookieConsent />
    </div>
  );
}
