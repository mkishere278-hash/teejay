/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, User, ArrowRight } from 'lucide-react';

const BACKYARD_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDsoWTqv77uSzmtxA_m0OmIrwJ5CHuJsCkOBQ-pTyCu04jbeisniObWCED0HIttjIwDpfjHsjuIPMXElmIKN8caqukR0PuHUn8-J8MR5IK6poszwbalPezNUCLQxPHwL15F5TLlMPCgOPzxurYjULk-1C1H-U4o8z9O5v_go42-j2Vhp4oq05hwD98HAv_RqV8dtlgkdve-xj6opljjewxuXVah1CD9JHvg9arBnXr9k8csx9lwoOFFfb2lXdHR574UJIBzPfS9T1k";

export function Testimonials() {
  const Stars = () => (
    <div className="flex gap-1 text-secondary mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-secondary" />)}
    </div>
  );

  const REVIEWS = [
    {
      name: "Tracey O",
      review: "Awesome service!",
      location: "Tucson"
    },
    {
      name: "Andy Steinert",
      review: "Very friendly, efficient and was able to complete the job quickly. Would definitely recommend and will be using his services in the future!",
      location: "Tucson"
    },
    {
      name: "Victoria Simone Swan",
      review: "TeeJay was very polite and collaborative as we were figuring out our plans. I felt his charge was reasonable and he came on time. I will certainly call him when I need such services again.",
      location: "Local Resident"
    },
    {
      name: "Allyssa Camille Tee",
      review: "Highly recommend TeeJay’s Junk Removal! They were absolute lifesavers. I had an overwhelming amount of junk piled up and they came out right away to haul it all off. They were incredibly fast, polite, and handled all the heavy lifting. I will definitely use them again in the future!",
      location: "Homeowner"
    },
    {
      name: "Antonio Paghubasan",
      review: "Highly recommend TeeJay’s Junk Removal! Professional, responsive, and made the whole process smooth from start to finish. Great communication, fair pricing, and excellent service. Definitely appreciate the hard work and would recommend to anyone needing reliable junk removal.",
      location: "Tucson"
    },
    {
      name: "Anne Marie King",
      review: "Tee Jay has once again come through for us! After our move, we had an impossible number of boxes and other discarded items that he loaded up and hauled away so fast it was unbelievable. He also installed several things we needed help with...",
      location: "Sahuarita"
    },
    {
      name: "Rosio Pina",
      review: "Teejays did an amazing job transforming our backyard! We were preparing for a foster home inspection and the yard was nowhere near ready... overgrown weeds, lots of clutter, and a large wooden playground that needed to be dismantled...",
      location: "Tucson"
    },
    {
      name: "Diana Fisher",
      review: "Arrived within 30 minutes Price was fair. I recommend this business",
      location: "Local Resident"
    },
    {
      name: "Jim King",
      review: "We recently moved from a house that we had been in 25 years. It is amazing how much you accumulate over that period of time. As we were downsizing we had a lot of things to trash or donate. TeeJay's Junk Removal was able to help us move...",
      location: "Tucson"
    },
    {
      name: "justin harrington",
      review: "Great customer service",
      location: "Tucson"
    },
    {
      name: "Wanda Smith",
      review: "If you want an all round handyman then TeeJay is your guy!!! I never seen someone work so hard and fast! He’s can do anything and he is always on time and does what he says he will do. Yep! He’s my go to person",
      location: "Tucson"
    },
    {
      name: "Shawna Plumb",
      review: "TeeJay's was very responsive, replying to my request for yard waste removal immediately. A quote was provided and the removal was scheduled quickly. They communicated throughout the process, arrived as scheduled and did a great job cleaning up.",
      location: "Oro Valley"
    }
  ];

  return (
    <div className="pt-32 md:pt-32">
      {/* Hero / Trust Header */}
      <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
        <div className="inline-flex items-center gap-4 bg-surface-container-high border border-primary px-6 py-2.5 mb-10">
          <Stars />
          <span className="font-display font-bold text-[14px] uppercase tracking-[0.2em] text-primary">5-Star Rated Local Service</span>
        </div>
        <h1 className="font-display font-black text-[40px] md:text-[56px] text-primary mb-8 max-w-4xl mx-auto uppercase leading-tight tracking-tighter">
          WHAT OUR NEIGHBORS IN TUCSON ARE SAYING
        </h1>
        <p className="font-sans text-[20px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          We pride ourselves on professional precision and desert-tough reliability. From estate clear-outs to single appliance hauls, we leave every site spotless.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border-2 border-primary p-8 md:p-10 relative flex flex-col shadow-xl hover:shadow-2xl transition-all group"
            >
              <Stars />
              <blockquote className="font-sans font-bold text-[18px] text-primary mb-8 italic leading-relaxed relative z-10 flex-grow">
                "{item.review}"
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-secondary border-2 border-secondary font-display font-black text-[18px] italic">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-black text-[16px] uppercase tracking-wider text-primary">{item.name}</p>
                  <p className="font-sans text-[12px] text-on-surface-variant uppercase font-bold tracking-widest">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA / Leave Review Section */}
      <section className="bg-primary text-on-primary py-32 border-t-8 border-secondary-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <img 
              src="https://res.cloudinary.com/dfusupw5h/image/upload/v1779392531/FhevXB-removebg-preview_asbeck.png" 
              alt="TeeJay's Logo" 
              className="h-32 md:h-48 w-auto object-contain"
            />
          </div>
          <h2 className="font-display font-black text-[32px] md:text-[40px] mb-6 text-secondary-container uppercase tracking-tight">SATISFIED WITH OUR WORK?</h2>
          <p className="font-sans text-[18px] mb-16 max-w-2xl mx-auto text-primary-fixed-dim leading-relaxed">
            Your feedback helps us continue providing top-tier service to the Tucson community. Join our wall of 5-star reviews today.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <a 
              className="group flex items-center gap-6 bg-white text-primary px-8 py-5 border-2 border-secondary-container hover:bg-secondary-container transition-all w-full md:w-auto justify-center shadow-md" 
              href="https://search.google.com/local/writereview?placeid=ChIJ569_35raJY4RQUZrjnReASg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star size={28} className="text-secondary fill-secondary" />
              <div className="text-left">
                <p className="font-display font-bold text-[10px] uppercase leading-none mb-1 opacity-70">Review us on</p>
                <p className="font-display font-black text-[20px] leading-none">GOOGLE</p>
              </div>
            </a>
            <a 
              className="group flex items-center gap-6 bg-white text-primary px-8 py-5 border-2 border-secondary-container hover:bg-secondary-container transition-all w-full md:w-auto justify-center shadow-md" 
              href="https://nextdoor.com/pages/teejays-junk-removal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://www.vectorlogo.zone/logos/nextdoor/nextdoor-icon.svg" alt="Nextdoor" className="w-8 h-8" />
              <div className="text-left">
                <p className="font-display font-bold text-[10px] uppercase leading-none mb-1 opacity-70">Review us on</p>
                <p className="font-display font-black text-[20px] leading-none uppercase">Nextdoor</p>
              </div>
            </a>
            <a 
              className="group flex items-center gap-6 bg-white text-primary px-8 py-5 border-2 border-secondary-container hover:bg-secondary-container transition-all w-full md:w-auto justify-center shadow-md" 
              href="https://www.mapquest.com/us/arizona/teejays-junk-removal-808986123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://www.vectorlogo.zone/logos/mapquest/mapquest-icon.svg" alt="MapQuest" className="w-8 h-8" />
              <div className="text-left">
                <p className="font-display font-bold text-[10px] uppercase leading-none mb-1 opacity-70">Review us on</p>
                <p className="font-display font-black text-[20px] leading-none uppercase">MapQuest</p>
              </div>
            </a>
            <a 
              className="group flex items-center gap-6 bg-white text-primary px-8 py-5 border-2 border-secondary-container hover:bg-secondary-container transition-all w-full md:w-auto justify-center shadow-md" 
              href="https://m.yelp.com/biz/teejays-junk-removal-tucson?dd_referrer=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-red-600 font-black text-2xl italic">Yelp</div>
              <div className="text-left">
                <p className="font-display font-bold text-[10px] uppercase leading-none mb-1 opacity-70">Review us on</p>
                <p className="font-display font-black text-[20px] leading-none uppercase">YELP</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
