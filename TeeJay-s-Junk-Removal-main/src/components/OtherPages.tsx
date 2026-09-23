/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, CheckCircle2, X } from 'lucide-react';
import { SERVICES } from '../types';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';

export function Services({ onNavigate }: { onNavigate: (page: any) => void }) {
  const serviceList = SERVICES;

  return (
    <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <ScrollReveal direction="up" distance={40} className="text-center mb-20">
        <h1 className="font-display font-black text-[40px] md:text-[56px] text-primary uppercase mb-6">Our Services</h1>
        <p className="font-sans text-[18px] text-on-surface-variant max-w-2xl mx-auto">
          We handle the heavy lifting so you don't have to. Professional, fast, and eco-friendly removal for every situation.
        </p>
      </ScrollReveal>

      <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
        {serviceList.map((service, idx) => (
          <ScrollStaggerItem key={idx} direction="up" distance={40}>
            <div className="flex flex-col bg-white border border-primary shadow-lg group transition-all hover:-translate-y-2.5 hover:shadow-2xl h-full">
              <div className="p-8 pb-4 flex items-center gap-4">
                <CheckCircle2 className="text-secondary shrink-0" size={32} />
                <span className="font-display font-bold text-[20px] text-primary uppercase">{service}</span>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button 
                  onClick={() => onNavigate('book')}
                  className="w-full bg-primary text-on-primary font-display font-black text-[14px] py-4 uppercase tracking-wider hover:bg-secondary hover:text-primary transition-all active:scale-[0.98]"
                >
                  Book Now
                </button>
              </div>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerContainer>
    </div>
  );
}

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525357/Messenger_creation_15882CF0-3F70-4288-81EF-CA4524FE6643_yqquki.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525356/Messenger_creation_5050E8E2-E14D-4EC8-A98C-BB997A1DF829_wnmov2.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525355/Messenger_creation_4547BE97-1CCE-423F-8338-CB2626FFA319_zkwzg9.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525355/Messenger_creation_980A633E-D8DC-4700-A3CD-5F0D02679D19_g718y6.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525350/Messenger_creation_E0CED05F-7D0A-4A41-8ADA-EE40FCD3BF88_gd7c9n.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525349/Messenger_creation_F9166165-764D-49FA-8DF9-AF831ADCF56A_bitnou.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525350/Messenger_creation_DF76A7FF-562F-4651-AC4B-DE7B109298D4_nha0gw.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525349/Messenger_creation_616E1BBB-8773-4025-AAA1-05CF2C21F575_nhewjl.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525349/Messenger_creation_C57402EC-B863-4F90-B47C-7E5EE9C764C8_v891iq.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525348/Messenger_creation_C4E094A4-2496-4F32-978B-59C1F6236857_c7e6en.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525348/Messenger_creation_B415065C-E28D-4606-BB6C-FA162B8668F3_dxxhao.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780525348/Messenger_creation_31415A3F-9EE4-4A47-9A38-60DF4E08A5E0_f7eglb.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1780757440/cHYLZw_mmn1m0.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1785838062/Messenger_creation_E5CFC75C-31D7-499D-B9F3-F37BDC9020D2_d7evil.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1785838054/Messenger_creation_2930DF59-F3F0-4285-8AB0-5AD8FAB99945_xjvih8.jpg",
    "https://res.cloudinary.com/dfusupw5h/image/upload/v1785838045/Messenger_creation_AD7C5183-1D4D-4788-8A8D-54CAA062364E_aasf3t.jpg"
  ];

  return (
    <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <ScrollReveal direction="up" distance={40} className="text-center mb-20">
        <h1 className="font-display font-black text-[40px] md:text-[56px] text-primary uppercase mb-6">Project Gallery</h1>
        <p className="font-sans text-[18px] text-on-surface-variant max-w-2xl mx-auto">
          Seeing is believing. A collection of our recent transformations across Tucson and the surrounding communities.
        </p>
      </ScrollReveal>

      <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" staggerDelay={0.08}>
        {images.map((src, idx) => (
          <ScrollStaggerItem key={idx} direction="up" distance={40}>
            <div 
              className="group cursor-pointer h-full flex flex-col justify-between"
              onClick={() => setSelectedImg(src)}
            >
              {/* The Image Frame Requirement */}
              <div className="bg-white border-2 border-primary p-4 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 relative">
                <div className="aspect-[4/3] overflow-hidden border border-outline-variant bg-surface-container">
                  <img 
                    src={src} 
                    alt={`Tee Jay's Junk Removal Project ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="font-display font-black text-[14px] text-primary uppercase tracking-tighter">Recent Completion</span>
                  <span className="font-sans text-[12px] text-on-surface-variant opacity-70">Tucson, AZ</span>
                </div>
                <div className="bg-secondary-container text-primary px-3 py-1 font-display font-bold text-[10px] uppercase border border-primary">
                  PRO-CLEAN
                </div>
              </div>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerContainer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-primary/95 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white hover:text-secondary-container transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImg(null)}
            >
              <X size={48} strokeWidth={3} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white border-[12px] border-primary shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden bg-surface-container">
                <img 
                  src={selectedImg} 
                  alt="Enlarged Project View" 
                  className="w-full h-auto max-h-[80vh] object-contain block mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-primary text-white p-4 flex justify-between items-center">
                <p className="font-display font-black text-[14px] uppercase tracking-widest">Tee Jay's Junk Removal • Professional Execution</p>
                <div className="hidden md:block bg-secondary-container text-primary px-4 py-1 font-display font-bold text-[12px] uppercase">
                  Verified Result
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

