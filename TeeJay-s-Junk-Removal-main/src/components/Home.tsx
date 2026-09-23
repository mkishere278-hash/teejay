/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Phone, Star, Building2, Home as HomeIcon, Construction, LayoutPanelTop, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';

const HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDHFWiopsmrZusFK_cKX9dXgAz-4FXD0QNNCyYtVbt5DcHr2TNA5wCi7VzxeKIRlLzWS_21b2loB_ZqBkQp0Yun97XqN5_vd1JjpmC_auZgi3lgY2TVRKHfBvoGTXX4XdU2rqylPnoPVHYCIh7b11RYGa9eJxpcFKSSZB-tT-AQQmuamrCIryWMK61EyU4ZrzsTSE6KZPJAsuJtxPYpR4hiZCVj_fNBy7KehCFULWaeaZSJjL8QbVyDHkk4nSQfzwxiqlm2OR1EaT8";
const LOGO_BADGE = "https://res.cloudinary.com/dfusupw5h/image/upload/v1779392531/FhevXB-removebg-preview_asbeck.png";

export function Home({ onNavigate }: { onNavigate: (page: any) => void }) {
  const PRO_SERVICES = [
    { title: 'Realtors', icon: Star, text: 'Fast, reliable clear-outs to get your listings photo-ready and escrow-closed ahead of schedule.' },
    { title: 'Owners', icon: HomeIcon, text: 'Reclaim your space from unwanted clutter, estate leftovers, or residential debris without lifting a finger.' },
    { title: 'Contractors', icon: Construction, text: 'Post-construction cleanup and debris removal so you can move your crew to the next job site faster.' },
    { title: 'Landlords', icon: LayoutPanelTop, text: 'Turnover management including eviction cleanouts and move-out debris removal to minimize vacancy time.' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/50 z-10"></div>
          <img src={HERO_BG} alt="Desert Landscape" className="w-full h-full object-cover grayscale-[0.2] scale-105" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary via-primary/80 to-transparent z-15 pointer-events-none" />
        </div>
        <div className="relative z-20 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full text-white pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
          <ScrollReveal direction="right" distance={60} duration={0.8} className="max-w-2xl">
            <h1 className="font-display font-black text-[40px] md:text-[64px] lg:text-[80px] uppercase mb-6 leading-[0.95] tracking-tighter">
              Tucson's <span className="text-secondary-container italic">Heavy-Duty</span> <br className="hidden md:block" />
              Junk Removal Pros.
            </h1>
            <p className="font-sans text-[18px] md:text-[20px] text-white/90 mb-10 leading-relaxed max-w-xl">
              Reclaim your space with Tucson’s most reliable disposal team. We provide professional relief from the clutter that holds you back—fast, affordable, and eco-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => onNavigate('book')}
                className="bg-secondary-container text-primary font-display font-bold text-[18px] px-8 py-5 transition-all uppercase flex items-center justify-center gap-3 hover:bg-secondary hover:text-primary active:scale-[0.98]"
              >
                BOOK YOUR CLEANOUT NOW
                <Calendar size={20} />
              </button>
              <a 
                href="tel:15204904478" 
                className="border-2 border-secondary-container text-secondary-container font-display font-bold text-[18px] px-8 py-5 hover:bg-secondary-container/10 transition-all flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                +1 (520) 490-4478
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal direction="up" distance={40}>
            <div className="bg-primary p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 blur-3xl rounded-full"></div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="font-display font-black text-[24px] md:text-[28px] text-secondary uppercase mb-6 italic tracking-tight">Professional Hauling for the Old Pueblo</h2>
                <p className="font-sans text-[16px] md:text-[18px] text-white/80 leading-relaxed">
                  At TeeJay’s, we don’t just haul trash; we provide professional relief from the clutter that holds you back. Whether you're clearing out a garage in Marana, managing a commercial site in Oro Valley, or need a single appliance removed in Sahuarita, our crew handles the heavy lifting with precision and speed. We take pride in being a locally owned business that understands the needs of our community, offering transparent pricing and a commitment to responsible, eco-friendly disposal. From furniture to full property clean-outs, we ensure your junk disappears so you can focus on what matters.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal direction="up" distance={30} className="text-center mb-16">
            <span className="font-sans font-black text-[12px] uppercase text-secondary tracking-[0.3em] block mb-4">THE TEEJAY'S ADVANTAGE</span>
            <h2 className="font-display font-black text-[36px] md:text-[48px] text-primary uppercase leading-tight">BEATING THE <span className="text-secondary italic">"KINGS"</span></h2>
          </ScrollReveal>
          
          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {[
              { 
                title: "HYPER-LOCAL SPEED", 
                desc: "Born and bred in Tucson—we know the shortcuts to Marana and Sahuarita." 
              },
              { 
                title: "TOTAL TRANSPARENCY", 
                desc: "Volume-based quotes with zero hidden surcharges or 'king-sized' surprises." 
              },
              { 
                title: "PRECISION SORTING", 
                desc: "We sort for recyclables and donations, keeping the Old Pueblo clean and green." 
              },
              { 
                title: "HEAVY-LIFT PROS", 
                desc: "From hot tubs to warehouses, we leave every site 'broom-clean' every time." 
              }
            ].map((usp, idx) => (
              <ScrollStaggerItem key={idx} direction="up" distance={40}>
                <div className="bg-[#FCB444] border-2 border-primary p-8 transition-all hover:-translate-y-2 group h-full">
                  <div className="font-display font-black text-[32px] text-primary mb-2 italic group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-black text-[20px] text-primary uppercase italic mb-3 leading-tight">{usp.title}</h3>
                  <p className="font-sans text-[14px] text-primary font-bold leading-relaxed">{usp.desc}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 bg-surface-container-low border-b border-primary">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal direction="up" distance={30} className="text-center mb-16">
            <span className="font-sans font-bold text-[14px] uppercase text-secondary tracking-widest block mb-3">WHO WE SERVE</span>
            <h2 className="font-display font-bold text-[32px] text-primary uppercase">Specialized Solutions for Every Pro</h2>
          </ScrollReveal>

          <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter" staggerDelay={0.12}>
            {PRO_SERVICES.map((service, idx) => (
              <ScrollStaggerItem key={idx} direction="up" distance={40}>
                <div className="bg-[#FCB444] border-2 border-primary p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group relative h-full">
                  <div className="mb-6 text-primary">
                    <service.icon size={48} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-black text-[24px] text-primary mb-4 uppercase italic tracking-tighter">{service.title}</h3>
                  <p className="font-sans text-[16px] text-primary font-medium leading-relaxed">{service.text}</p>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 bg-surface-bright overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right" distance={50}>
              <h2 className="font-display font-bold text-[32px] md:text-[40px] text-primary uppercase mb-6 leading-[1.2]">
                SEE THE <span className="text-secondary">TRANSFORMATION</span>
              </h2>
              <p className="font-sans text-[18px] text-on-surface-variant mb-8 leading-relaxed">
                We don't just haul junk; we restore possibilities. From hoarder situations to commercial warehouse clear-outs, TeeJay's brings precision and speed to every site. See how we clear the chaos and restore order to your property.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Furniture', 'Appliances', 'Debris', 'Commercial'].map(tag => (
                  <span key={tag} className="bg-surface-container text-on-surface-variant font-display font-bold text-[12px] px-4 py-1.5 uppercase border border-outline">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => onNavigate('gallery')}
                className="bg-primary text-on-primary font-display font-bold text-[18px] px-10 py-4 uppercase transition-all hover:bg-secondary hover:text-primary active:scale-[0.98]"
              >
                VIEW OUR GALLERY
              </button>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={50}>
              <div className="relative border-4 border-primary overflow-hidden shadow-2xl bg-white">
                <img 
                  src="https://res.cloudinary.com/dfusupw5h/image/upload/v1779400870/Screenshot_2026-05-21_150023_dv6goj.png" 
                  alt="Transformation Results" 
                  className="w-full h-auto block hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary text-on-primary border-t-8 border-secondary-container overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal direction="up" distance={40}>
            <div className="bg-primary-container/20 border-2 border-secondary/30 p-6 sm:p-10 md:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
              {/* Background accent glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="text-center lg:text-left max-w-2xl w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 border border-secondary/40 text-secondary-container text-xs font-display font-bold uppercase tracking-widest mb-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                    Fast Tucson Service
                  </div>
                  <h2 className="font-display font-black text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] uppercase mb-4 leading-tight tracking-tight text-white">
                    Ready to clear the chaos?
                  </h2>
                  <p className="font-sans text-[15px] sm:text-[17px] md:text-[19px] text-white/85 leading-relaxed">
                    Get an instant quote and book your service today. No job too big, no property too messy.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 w-full sm:w-auto shrink-0 justify-center">
                  <button 
                    onClick={() => onNavigate('book')}
                    className="w-full sm:w-auto bg-secondary-container text-primary font-display font-black text-[16px] sm:text-[18px] lg:text-[19px] px-6 sm:px-8 py-4 sm:py-5 uppercase transition-all hover:bg-secondary hover:text-primary active:scale-[0.98] shadow-lg flex items-center justify-center gap-3 text-center"
                  >
                    SCHEDULE CLEANOUT
                    <Calendar size={20} className="shrink-0" />
                  </button>
                  <a 
                    href="tel:15204904478" 
                    className="w-full sm:w-auto border-2 border-white text-white font-display font-bold text-[16px] sm:text-[18px] lg:text-[19px] px-6 sm:px-8 py-4 sm:py-5 uppercase text-center flex items-center justify-center gap-3 transition-all hover:bg-white/10 active:scale-[0.98]"
                  >
                    <Phone size={20} className="shrink-0" />
                    +1 (520) 490-4478
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
