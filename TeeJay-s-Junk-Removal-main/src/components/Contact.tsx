/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Clock, MapPin, Mail, ArrowRight, Verified, Star, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { SERVICES, SERVICE_AREAS } from '../types';
import { ScrollReveal } from './ScrollReveal';

const CONTACT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD0TykGSD6HuzyMiVy-FCLhAyA_ufDVtWy993ydLDMwF2zmsbl9h_jKg_WaD9LZVlilZU_6e4rcYnyu0fAy0fkQTj6eFstqOjIodn7yPqARz3Ac_On_oSm0DszccB5PBpBcCppXZ7h4EeUn1fCi6q3RXhnp0MP_4iX_wDRI0pSIy8qyJaSIzP4rfEtQSA3D8itwkED9WzcC0qGv3h7b6iOKCJC0CB9rY5pkuj11kr_APirRl7Psy6dWZ0iv7Q3TBusBoixL5NwteIQ";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const address = formData.get('address');
    const area = formData.get('area');
    const date = formData.get('date');
    const time = formData.get('time');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Quote Request: ${service} - ${name}`);
    const body = encodeURIComponent(
      `Full Name: ${name}\n` +
      `Phone Number: ${phone}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n` +
      `Address: ${address}\n` +
      `Area: ${area}\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n\n` +
      `Message: ${message}`
    );

    const mailtoUrl = `mailto:tj@teejaysjunkremoval.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="pt-28 md:pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left Side: Contact Information */}
        <ScrollReveal direction="right" distance={50} className="lg:col-span-5 space-y-16 lg:pr-10">
          <div>
            <h1 
              className="font-display font-black text-[40px] md:text-[56px] text-primary uppercase mb-8 leading-tight tracking-tighter"
            >
              CLEAR THE CLUTTER <span className="text-secondary">TODAY</span>
            </h1>
            <p className="font-sans text-[18px] text-on-surface-variant max-w-md leading-relaxed">
              Rugged reliability for Tucson and surrounding areas. We transform your chaos into clean space with professional precision.
            </p>
          </div>

          <div className="space-y-10">
            {/* Phone */}
            <div className="flex items-start gap-6 group">
              <div className="bg-secondary-container p-4 border border-primary shadow-lg transition-transform group-hover:scale-110">
                <Phone size={28} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-[12px] uppercase text-on-surface-variant tracking-widest mb-1">Direct Line</p>
                <a href="tel:15204904478" className="font-display font-bold text-[28px] text-primary hover:text-secondary transition-colors block">+1 (520) 490-4478</a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-6 group">
              <div className="bg-secondary p-4 border border-primary text-white transition-transform group-hover:scale-110">
                <Clock size={28} />
              </div>
              <div>
                <p className="font-display font-bold text-[12px] uppercase text-on-surface-variant tracking-widest mb-1">Operational Hours</p>
                <p className="font-display font-bold text-[24px] text-primary">Mon - Sat: 7AM - 6PM</p>
                <p className="font-sans text-[14px] text-on-surface-variant opacity-80 backdrop-blur-sm">Emergency removals available upon request.</p>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex items-start gap-6 group">
              <div className="bg-primary p-4 border border-primary text-white transition-transform group-hover:scale-110">
                <MapPin size={28} />
              </div>
              <div>
                <p className="font-display font-bold text-[12px] uppercase text-on-surface-variant tracking-widest mb-1">Service Area</p>
                <p className="font-display font-bold text-[24px] text-primary">Greater Tucson Area</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Oro Valley', 'Marana', 'Sahuarita'].map(town => (
                    <span key={town} className="bg-primary-container text-white px-4 py-1 font-display font-bold text-[10px] uppercase border border-primary tracking-widest">
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 group">
              <div className="bg-secondary-container p-4 border border-primary shadow-lg transition-transform group-hover:scale-110">
                <Mail size={28} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-[12px] uppercase text-on-surface-variant tracking-widest mb-1">Email Us</p>
                <a href="mailto:tj@teejaysjunkremoval.com" className="font-display font-bold text-[22px] md:text-[24px] text-primary hover:text-secondary transition-colors underline break-all">
                  tj@teejaysjunkremoval.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-6 group">
              <div className="bg-[#25D366] p-4 border border-primary shadow-lg transition-transform group-hover:scale-110 text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.711 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-[12px] uppercase text-on-surface-variant tracking-widest mb-1">WhatsApp Message</p>
                <a href="https://wa.me/15204904478" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-[24px] md:text-[28px] text-primary hover:text-[#25D366] transition-colors underline block">
                  +1 (520) 490-4478 (Chat)
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Contact Form */}
        <ScrollReveal direction="left" distance={50} className="lg:col-span-7 mt-20 lg:mt-0">
          <div className="bg-primary p-8 md:p-16 border-b-[12px] border-secondary-container shadow-2xl">
            <h2 className="font-display font-black text-[32px] text-white uppercase mb-10 flex items-center gap-4">
              <Mail size={32} className="text-secondary-container" />
              Request a Quote
            </h2>
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary-container p-10 text-center border-2 border-primary space-y-4"
              >
                <Verified size={64} className="mx-auto text-primary" />
                <h3 className="font-display font-black text-[28px] text-primary uppercase">Quote Sent!</h3>
                <p className="font-sans text-primary font-bold">We will be in touch within 24 hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 font-display font-bold text-primary underline uppercase tracking-widest"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="name">Full Name</label>
                    <input 
                      required
                      name="name"
                      className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                      id="name" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="phone">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                      id="phone" 
                      placeholder="520-000-0000" 
                      type="tel" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="address">Site Address</label>
                  <input 
                    required
                    name="address"
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                    id="address" 
                    placeholder="123 Desert View Dr, Tucson, AZ" 
                    type="text" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="service">Service Requested</label>
                    <select 
                      required
                      name="service"
                      defaultValue=""
                      className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] appearance-none cursor-pointer" 
                      id="service"
                    >
                      <option value="" disabled>Select a Service</option>
                      {SERVICES.map(service => (
                        <option key={service} value={service} className="bg-primary text-white">{service}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="area">Service Area</label>
                    <select 
                      required
                      name="area"
                      defaultValue=""
                      className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] appearance-none cursor-pointer" 
                      id="area"
                    >
                      <option value="" disabled>Select Area</option>
                      {SERVICE_AREAS.map(area => (
                        <option key={area} value={area} className="bg-primary text-white">{area}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="date">Preferred Date</label>
                    <input 
                      required
                      name="date"
                      className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] color-scheme-dark" 
                      id="date" 
                      type="date" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="time">Preferred Time</label>
                    <input 
                      required
                      name="time"
                      className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] color-scheme-dark" 
                      id="time" 
                      type="time" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="email">Email Address</label>
                  <input 
                    required
                    name="email"
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                    id="email" 
                    placeholder="john@example.com" 
                    type="email" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="message">Your Message</label>
                  <textarea 
                    required
                    name="message"
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px] min-h-[160px] resize-none" 
                    id="message" 
                    placeholder="Tell us what needs hauling (e.g., old sofa, garage cleanup, construction debris)..."
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-secondary-container text-primary font-display font-black text-[22px] uppercase py-6 px-10 flex items-center justify-center gap-6 transition-all group relative overflow-hidden" 
                  type="submit"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={28} />
                  ) : (
                    <>
                      <span className="relative z-10">SEND MESSAGE</span>
                      <ArrowRight className="relative z-10 group-hover:translate-x-3 transition-transform" size={28} />
                    </>
                  )}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </form>
            )}
          </div>

          {/* Trust Signal */}
          <div className="mt-12 flex items-center justify-between border-2 border-primary p-10 bg-white shadow-xl relative">
            <div className="flex items-center gap-6">
              <div className="bg-primary p-4 text-white">
                <Star size={32} className="fill-secondary-container text-secondary-container" />
              </div>
              <div>
                <p className="font-display font-black text-[20px] uppercase text-primary">Fully Insured & Licensed</p>
                <p className="font-sans text-[16px] text-on-surface-variant">Peace of mind for every pickup since 2026.</p>
              </div>
            </div>
            <div className="hidden sm:flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-secondary text-secondary" />
              ))}
            </div>
          </div>

          <div className="mt-12 bg-white border-b-[8px] border-primary shadow-2xl overflow-hidden aspect-video md:aspect-[21/9]">
            <iframe 
              src="https://maps.google.com/maps?q=5750%20S%20Houghton%20Rd,%20Tucson,%20AZ%2085747&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TeeJay's Junk Removal Location"
            ></iframe>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
