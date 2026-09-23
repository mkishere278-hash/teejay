/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, X, Phone, Star, Facebook, Instagram, Mail, Music } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const LOGO_URL = "https://res.cloudinary.com/dfusupw5h/image/upload/v1779392531/FhevXB-removebg-preview_asbeck.png";

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: Page }[] = [
    { label: 'HOME', id: 'home' },
    { label: 'SERVICES', id: 'services' },
    { label: 'ESTIMATOR', id: 'estimator' },
    { label: 'WORK VIDEO', id: 'work_video' },
    { label: 'TESTIMONIALS', id: 'testimonials' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
    { label: 'BOOK NOW', id: 'book' },
  ];

  const handleNavClick = (id: Page) => {
    onPageChange(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-surface-bright border-b border-primary fixed top-0 w-full z-50 shadow-sm">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-2 max-w-max-width mx-auto">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleNavClick('home')}
            className="h-16 sm:h-18 md:h-24 flex items-center cursor-pointer group py-1"
          >
            <img 
              alt="TeeJay's Junk Removal Logo" 
              className="h-full w-auto object-contain transition-transform group-hover:scale-105" 
              src={LOGO_URL} 
            />
            <div className="ml-2 sm:ml-3 flex flex-col justify-center">
              <span className="font-display font-black text-[18px] sm:text-[20px] md:text-[25px] text-primary uppercase leading-[0.85] tracking-tighter italic">
                TeeJay's
              </span>
              <span className="font-display font-black text-[18px] sm:text-[20px] md:text-[25px] text-secondary uppercase leading-[0.85] tracking-tighter italic">
                Junk Removal
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden xl:flex gap-5 items-center">
          {navItems.filter(i => i.id !== 'book').map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-display font-bold text-[13px] uppercase tracking-wide transition-colors duration-200 py-1 whitespace-nowrap ${
                currentPage === item.id 
                  ? 'text-primary border-b-2 border-secondary' 
                  : 'text-on-surface-variant hover:text-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('book')}
            className="ml-2 bg-primary text-on-primary font-display font-black text-[14px] uppercase px-6 py-3 hover:bg-secondary hover:text-primary transition-all transform hover:-translate-y-0.5 shadow-lg active:translate-y-0"
          >
            BOOK NOW
          </button>
        </div>

        {/* Medium Screen Menu Trigger (md to xl) */}
        <div className="hidden md:flex xl:hidden items-center gap-4">
          <button 
            onClick={() => handleNavClick('book')}
            className="bg-primary text-on-primary font-display font-bold text-[12px] uppercase px-4 py-2"
          >
            BOOK NOW
          </button>
          <button 
            className="text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-surface-bright border-t border-primary absolute top-full left-0 w-full p-6 space-y-2 shadow-2xl max-h-[80vh] overflow-y-auto">
          {navItems.filter(i => i.id !== 'book').map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left font-display font-black text-[18px] md:text-[20px] uppercase py-3 border-b border-primary/5 last:border-0 ${
                currentPage === item.id ? 'text-secondary translate-x-2' : 'text-primary'
              } transition-all duration-300`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <button 
              onClick={() => handleNavClick('book')}
              className="w-full bg-primary text-on-primary font-display font-black text-[18px] uppercase py-5 text-center shadow-xl hover:bg-secondary hover:text-primary transition-colors"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer({ onPageChange }: { onPageChange: (page: Page) => void }) {
  const handleNavClick = (id: Page) => {
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container border-t-2 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-max-width mx-auto">
        <div className="space-y-6">
          <img 
            src={LOGO_URL} 
            alt="TEEJAY'S JUNK REMOVAL" 
            className="h-16 md:h-20 w-auto object-contain mb-4" 
          />
          <p className="font-sans text-[16px] text-on-surface-variant max-w-sm">
            Professional, reliable, and locally owned junk removal services in Tucson and surrounding areas. Rugged reliability, professional precision.
          </p>
          <div className="space-y-1">
            <p className="font-sans text-[14px] text-on-surface-variant font-bold uppercase tracking-wide">Address</p>
            <p className="font-sans text-[14px] text-on-surface-variant">5750 S Houghton Rd, Tucson, AZ 85747</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-display font-bold text-[14px] uppercase text-primary animate-pulse-slow">Explore</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavClick('home')} className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Home</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Services</button></li>
              <li><button onClick={() => handleNavClick('estimator')} className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Price Estimator</button></li>
              <li><button onClick={() => handleNavClick('work_video')} className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Work Video</button></li>
              <li><button onClick={() => handleNavClick('about')} className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">About Us</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Contact</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-display font-bold text-[14px] uppercase text-primary">Legal</h4>
            <ul className="space-y-2">
              <li><button className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Privacy Policy</button></li>
              <li><button className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Terms of Service</button></li>
              <li><button onClick={() => { localStorage.removeItem('cookie-consent'); window.location.reload(); }} className="text-on-surface-variant hover:text-secondary underline font-sans text-[14px]">Cookie Preferences</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-display font-bold text-[14px] uppercase text-primary">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/TeeJaysJunkRemoval/" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                <Facebook size={24} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://www.instagram.com/teejaysjunkremoval/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:opacity-80 transition-opacity">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@tjsjunkremoval25" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.232 10.724 6.33 6.33 0 0010.59-4.5V9.13a8.232 8.232 0 005.255 1.684V7.369a4.835 4.835 0 01-1.381-.683z" />
                </svg>
              </a>
              <a href="https://wa.me/15204904478" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity flex items-center justify-center" title="WhatsApp (+1 (520) 490-4478)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.711 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
            <p className="font-sans text-[12px] text-on-surface-variant">Follow us @tjsjunkremoval25</p>
          </div>
        </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-outline-variant">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            "residential garage cleanout services Tucson",
            "same day furniture removal Marana AZ",
            "affordable appliance disposal Oro Valley",
            "construction debris hauling Sahuarita",
            "eco-friendly mattress recycling Tucson",
            "commercial office cleanout Green Valley",
            "hot tub removal and disposal Vail AZ",
            "estate cleanout specialists Tucson",
            "old refrigerator pickup Tucson AZ",
            "bulk trash removal services near me"
          ].map((kw, i) => (
            <span key={i} className="text-[10px] font-sans text-on-surface-variant/40 uppercase tracking-tighter hover:text-secondary transition-colors cursor-default">
              {kw}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center text-on-surface-variant font-display font-bold text-[12px] uppercase gap-4 text-center md:text-left">
        <span>© 2026 TEEJAY'S JUNK REMOVAL. ALL RIGHTS RESERVED.</span>
        <span className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a href="tel:15204904478" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone size={14} className="text-secondary" />
            +1 (520) 490-4478
          </a>
          <a href="mailto:tj@teejaysjunkremoval.com" className="flex items-center gap-2 hover:text-secondary transition-colors lowercase font-sans font-normal text-[14px]">
            <Mail size={14} className="text-secondary" />
            tj@teejaysjunkremoval.com
          </a>
        </span>
      </div>
    </footer>
  );
}
