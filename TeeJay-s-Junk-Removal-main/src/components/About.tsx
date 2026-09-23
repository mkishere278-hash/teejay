/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Clock, Leaf, Star, Facebook } from 'lucide-react';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';

const TEAM_IMG = "https://res.cloudinary.com/dfusupw5h/image/upload/v1784878819/iZRqbP_hssmet.jpg";

export function About({ onNavigate }: { onNavigate: (page: any) => void }) {
  const values = [
    { 
      title: 'Professional & Reliable', 
      icon: Clock, 
      text: "We show up on time, respect your property, and work efficiently to get the job done right the first time."
    },
    { 
      title: 'Eco-Conscious Disposal', 
      icon: Leaf, 
      text: 'We do our part for the planet by prioritizing recycling and community donations over landfills, handling your items responsibly.'
    },
    { 
      title: 'Upfront Pricing', 
      icon: MapPin, 
      text: 'No hidden fees, no surprises. We provide clear, transparent estimates before we begin any work.'
    },
  ];

  return (
    <div className="pt-32 md:pt-32 overflow-hidden">
      {/* Hero Split Section */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <ScrollReveal direction="right" distance={60} className="w-full md:w-1/2 relative">
            <div className="bg-surface-container border-2 border-primary overflow-hidden relative shadow-2xl rounded-sm">
              <img 
                src={TEAM_IMG} 
                alt="TeeJay's Team" 
                className="w-full h-auto block object-cover hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-8 border-surface-bright/20 pointer-events-none"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" distance={60} className="w-full md:w-1/2 flex flex-col justify-center">
            <div>
              <span className="font-display font-bold text-[14px] uppercase text-secondary tracking-[0.3em] block mb-4">ABOUT TEE JAY’S JUNK REMOVAL</span>
              <h1 className="font-display font-black text-[40px] md:text-[56px] text-primary uppercase mb-8 leading-tight">Welcome to Tee Jay’s</h1>
              <div className="space-y-6">
                <p className="font-sans text-[18px] text-on-surface-variant leading-relaxed font-bold">
                  Your trusted local partner for clearing the clutter and reclaiming your space!
                </p>
                <p className="font-sans text-[16px] text-on-surface-variant leading-relaxed">
                  Founded on the principles of hard work, reliability, and exceptional customer service, we are dedicated to making junk removal as stress-free and seamless as possible for our community.
                </p>
                <div className="pt-10 border-t border-outline-variant">
                  <h3 className="font-display font-bold text-[20px] text-primary uppercase mb-4">Who We Are</h3>
                  <p className="font-sans text-[16px] text-on-surface-variant leading-relaxed mb-6">
                    At Tee Jay’s, we understand that clutter can accumulate quickly, and getting rid of it can feel overwhelming. Whether you are cleaning out a garage, renovating a home, upgrading office furniture, or just need to dispose of a few heavy items, our professional and friendly team is here to do the heavy lifting for you.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["Tucson", "Oro Valley", "Marana", "Sahuarita"].map(city => (
                      <button 
                        key={city} 
                        onClick={() => onNavigate('book')}
                        className="bg-primary-container text-white px-4 py-2 font-display font-bold text-[12px] uppercase border border-primary hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary text-on-primary py-24 border-y-8 border-secondary-container">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal direction="up" distance={40}>
            <h2 className="font-display font-black text-[32px] md:text-[48px] uppercase mb-8 tracking-tighter text-secondary-container">Our Mission</h2>
            <p className="font-sans text-[20px] md:text-[24px] leading-relaxed italic">
              "To provide top-tier junk removal services with complete transparency, fair pricing, and a smile. We don’t just haul away trash—we strive to handle your items responsibly by recycling whenever possible and donating usable items to local charities."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-surface-container-low py-24 mt-20">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal direction="up" distance={30}>
            <h2 className="font-display font-black text-[32px] text-primary text-center uppercase mb-20 tracking-tight">Why Choose Tee Jay’s Junk Removal?</h2>
          </ScrollReveal>
          
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12" staggerDelay={0.15}>
            {values.map((value, idx) => (
              <ScrollStaggerItem key={idx} direction="up" distance={50}>
                <div className="bg-surface-bright p-10 border border-primary relative group hover:border-secondary transition-all duration-300 h-full">
                  <div className="absolute -top-6 -left-6 bg-secondary-container w-14 h-14 flex items-center justify-center border border-primary shadow-lg">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-[22px] text-primary uppercase mb-5 mt-6">{value.title}</h3>
                  <p className="font-sans text-[16px] text-on-surface-variant leading-relaxed">
                    {value.text}
                  </p>
                  <div className="w-full h-1 bg-secondary mt-10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center">
        <ScrollReveal direction="up" distance={40}>
          <div className="border-2 border-primary p-12 md:p-16 relative bg-[#FCB444] shadow-xl overflow-hidden">
            <h2 className="font-display font-black text-[32px] md:text-[40px] text-primary uppercase mb-6">Let Us Do the Heavy Lifting</h2>
            <p className="font-sans text-[18px] text-primary font-bold max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to clear out the old and make room for the new? Let the professionals at Tee Jay’s Junk Removal handle it.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => onNavigate('book')}
                className="bg-primary text-on-primary font-display font-black text-[18px] px-12 py-5 transition-all uppercase w-full md:w-auto hover:bg-secondary hover:text-primary active:scale-[0.98]"
              >
                BOOK NOW
              </button>
              <div className="flex flex-col text-left border-l-2 border-secondary pl-6">
                <p className="font-display font-bold text-[12px] uppercase text-on-surface-variant mb-2">Connect with us</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:15204904478" className="font-display font-black text-[22px] text-primary hover:text-secondary leading-none">+1 (520) 490-4478</a>
                  <a 
                    href="https://www.facebook.com/TeeJaysJunkRemoval/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-[#1877F2] hover:opacity-80 transition-opacity font-display font-bold text-[14px] uppercase tracking-wider"
                  >
                    <Facebook size={20} fill="currentColor" strokeWidth={0} />
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
