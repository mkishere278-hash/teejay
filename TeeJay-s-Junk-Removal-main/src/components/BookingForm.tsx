/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Clock, MapPin, Mail, ArrowRight, Verified, Star, Loader2, Calendar, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { SERVICES, SERVICE_AREAS } from '../types';

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [estimate, setEstimate] = useState<{service: string, price: string, tax_status: string} | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('teejays_pending_estimate');
    if (stored) {
      try {
        setEstimate(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse estimate", e);
      }
    }
  }, []);

  const clearEstimate = () => {
    localStorage.removeItem('teejays_pending_estimate');
    setEstimate(null);
  };

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

    const serviceName = estimate ? estimate.service : service;
    const priceRange = estimate ? estimate.price : 'TBD (Enquire on-site)';

    const text = encodeURIComponent(
      `Hello Teejay's! I'd like to book a service.\n` +
      `--------------------------\n` +
      `SERVICE SELECTED: ${serviceName}\n` +
      `ESTIMATED PRICE: ${priceRange}\n` +
      `(Note: Includes applicable taxes)\n` +
      `--------------------------\n` +
      `CUSTOMER DETAILS:\n` +
      `Name: ${name}\n` +
      `Address: ${address}\n` +
      `Preferred Date/Time: ${date} @ ${time}\n` +
      `Photos Attached: [User to Attach in WA]\n` +
      `--------------------------\n` +
      `Details: ${message}\n\n` +
      `Please confirm this booking.`
    );

    // Using wa.me/number?text= for pre-filled message support.
    const whatsappUrl = `https://wa.me/15204904478?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSuccess(true);
      clearEstimate(); // Clear after booking
    }, 1000);
  };

  return (
    <div className="pt-40 md:pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <div className="text-center mb-16 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-black text-[40px] md:text-[56px] text-primary uppercase mb-6 leading-tight tracking-tighter"
        >
          BOOK YOUR <span className="text-secondary">CLEANOUT</span>
        </motion.h1>
        <p className="font-sans text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Ready to reclaim your space? Fill out the form below to lock in your preferred date and time. Our team will confirm within 24 hours.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {estimate && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-[#FCB444] border-l-[12px] border-primary p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-10 shadow-2xl relative"
          >
            <div className="flex-1">
              <p className="font-display font-black text-[14px] uppercase text-primary/60 tracking-[0.2em] mb-4">Estimated Project</p>
              
              <h3 className="font-display font-black text-[28px] md:text-[34px] text-primary uppercase leading-[1.1] mb-6 tracking-tighter">
                {estimate.service}
              </h3>

              <div className="flex items-center gap-6">
                <div className="font-display font-black text-[42px] md:text-[56px] text-primary leading-none tracking-tighter">
                  {estimate.price}
                </div>
                <div className="w-10 h-[2px] bg-primary/20"></div>
                <p className="font-sans text-[14px] text-primary/70 font-bold uppercase tracking-widest italic">
                  Instant Quote
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <button 
                onClick={clearEstimate}
                className="border-2 border-primary/30 p-6 flex flex-col items-center justify-center hover:bg-primary/10 transition-all group"
              >
                <X size={20} className="text-primary mb-2 group-hover:rotate-90 transition-transform" />
                <span className="font-display font-black text-[12px] uppercase text-primary tracking-widest text-center">Clear<br/>Estimate</span>
              </button>
            </div>
          </motion.div>
        )}

        <div className="bg-primary p-8 md:p-16 border-b-[12px] border-secondary-container shadow-2xl">
          <h2 className="font-display font-black text-[32px] text-white uppercase mb-10 flex items-center gap-4">
            <Calendar size={32} className="text-secondary-container" />
            Secure Your Slot
          </h2>
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-secondary-container p-10 text-center border-2 border-primary space-y-4"
            >
              <Verified size={64} className="mx-auto text-primary" />
              <h3 className="font-display font-black text-[28px] text-primary uppercase">Booking Requested!</h3>
              <p className="font-sans text-primary font-bold">We will call or text you shortly to confirm your appointment.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-6 font-display font-bold text-primary underline uppercase tracking-widest"
              >
                Book another service
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-name">Full Name</label>
                  <input 
                    required
                    name="name"
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                    id="book-name" 
                    placeholder="John Doe" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-phone">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                    id="book-phone" 
                    placeholder="520-000-0000" 
                    type="tel" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-address">Site Address</label>
                <input 
                  required
                  name="address"
                  className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                  id="book-address" 
                  placeholder="123 Desert View Dr, Tucson, AZ" 
                  type="text" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-service">Service Requested</label>
                  <select 
                    required
                    name="service"
                    defaultValue=""
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] appearance-none cursor-pointer" 
                    id="book-service"
                  >
                    <option value="" disabled>Select a Service</option>
                    {SERVICES.map(service => (
                      <option key={service} value={service} className="bg-primary text-white">{service}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-area">Service Area</label>
                  <select 
                    required
                    name="area"
                    defaultValue=""
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] appearance-none cursor-pointer" 
                    id="book-area"
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
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-date">Preferred Date</label>
                  <input 
                    required
                    name="date"
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] color-scheme-dark" 
                    id="book-date" 
                    type="date" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-time">Preferred Time</label>
                  <select 
                    required
                    name="time"
                    defaultValue=""
                    className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-[18px] appearance-none cursor-pointer" 
                    id="book-time"
                  >
                    <option value="" disabled>Select a Time</option>
                    <option value="morning">Morning (7AM - 11AM)</option>
                    <option value="midday">Midday (11AM - 3PM)</option>
                    <option value="afternoon">Afternoon (3PM - 6PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-email">Email Address</label>
                <input 
                  name="email"
                  className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px]" 
                  id="book-email" 
                  placeholder="john@example.com" 
                  type="email" 
                />
              </div>
              <div className="space-y-2">
                <label className="block font-display font-bold text-[12px] uppercase text-secondary-container tracking-[0.2em]" htmlFor="book-message">Your Message</label>
                <textarea 
                  required
                  name="message"
                  className="w-full bg-primary-container border-outline text-white py-5 px-6 font-sans focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all placeholder:text-white/20 text-[18px] min-h-[120px] resize-none" 
                  id="book-message" 
                  placeholder="E.g., 3-seater sofa, garage shelving, 10 bags of yard waste..."
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
                    <span className="relative z-10">BOOK NOW</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-3 transition-transform" size={28} />
                  </>
                )}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
