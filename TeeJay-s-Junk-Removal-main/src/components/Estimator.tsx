/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Phone, AlertCircle, CheckCircle2, ChevronRight, Truck, Trash2, Home as HomeIcon, Construction, Layers, RefreshCcw, Minus, Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface PricingItem {
  id: string;
  label: string;
  min: number;
  max: number;
  unit: string;
  category: 'volume' | 'appliances' | 'demo' | 'moving';
}

const PRICING_DATA: PricingItem[] = [
  // Volume
  { id: 'vol-min', label: 'Minimum (1–2 items)', min: 120, max: 180, unit: 'load', category: 'volume' },
  { id: 'vol-14', label: '1/4 Load (Up to 3 cu. yards)', min: 250, max: 325, unit: 'load', category: 'volume' },
  { id: 'vol-12', label: '1/2 Load (Up to 6 cu. yards)', min: 375, max: 450, unit: 'load', category: 'volume' },
  { id: 'vol-34', label: '3/4 Load (Up to 9 cu. yards)', min: 500, max: 600, unit: 'load', category: 'volume' },
  { id: 'vol-full', label: 'Full Load (Up to 12 cu. yards)', min: 600, max: 750, unit: 'load', category: 'volume' },
  // Appliances
  { id: 'app-fridge', label: 'Refrigerator/Freezer', min: 100, max: 130, unit: 'unit', category: 'appliances' },
  { id: 'app-wash', label: 'Washer/Dryer', min: 90, max: 110, unit: 'unit', category: 'appliances' },
  { id: 'app-stove', label: 'Stove/Oven', min: 80, max: 100, unit: 'unit', category: 'appliances' },
  { id: 'app-water', label: 'Water Heater', min: 85, max: 130, unit: 'unit', category: 'appliances' },
  { id: 'app-ac', label: 'AC Units', min: 100, max: 150, unit: 'unit', category: 'appliances' },
  // Demo
  { id: 'demo-tile', label: 'Tile Removal (per sq ft)', min: 3, max: 6, unit: 'sqft', category: 'demo' },
  { id: 'demo-bath', label: 'Small Bathroom Demo', min: 200, max: 400, unit: 'unit', category: 'demo' },
  { id: 'demo-cabinet', label: 'Cabinet Removal', min: 275, max: 550, unit: 'unit', category: 'demo' },
  { id: 'demo-kitchen', label: 'Full Kitchen Demo', min: 300, max: 875, unit: 'unit', category: 'demo' },
  // Moving
  { id: 'move-single', label: 'Single Item Move', min: 75, max: 130, unit: 'unit', category: 'moving' },
  { id: 'move-apt', label: 'Small Apartment Move', min: 220, max: 375, unit: 'unit', category: 'moving' },
  { id: 'move-labor', label: 'Hourly Labor Only', min: 50, max: 50, unit: 'hour', category: 'moving' },
];

export function Estimator({ onNavigate }: { onNavigate?: (page: any) => void }) {
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<PricingItem['category']>('volume');

  const updateQuantity = (id: string, delta: number) => {
    setSelections(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      
      const item = PRICING_DATA.find(p => p.id === id);
      const newSelections = { ...prev };
      
      // Volume: Single selection only
      if (item?.category === 'volume' && delta > 0) {
        PRICING_DATA.filter(p => p.category === 'volume').forEach(p => delete newSelections[p.id]);
        return { ...newSelections, [id]: 1 };
      }

      if (next === 0) {
        delete newSelections[id];
      } else {
        newSelections[id] = next;
      }
      return newSelections;
    });
  };

  const totals = useMemo(() => {
    let min = 0;
    let max = 0;
    
    for (const id in selections) {
      const qty = selections[id];
      const item = PRICING_DATA.find(p => p.id === id);
      if (item && typeof qty === 'number') {
        min += item.min * qty;
        max += item.max * qty;
      }
    }
    
    return { min, max };
  }, [selections]);

  const resetEstimator = () => setSelections({});
  const hasSelections = Object.keys(selections).length > 0;

  const handleConfirm = () => {
    localStorage.setItem('teejays_pending_estimate', JSON.stringify({
      service: Object.keys(selections).map(id => PRICING_DATA.find(p => p.id === id)?.label).join(' + '),
      price: `$${totals.min} – $${totals.max}`,
      tax_status: "Included"
    }));
    onNavigate?.('book');
  };

  const categories = [
    { id: 'volume', label: 'Volume', icon: Truck },
    { id: 'appliances', label: 'Appliances', icon: Trash2 },
    { id: 'demo', label: 'Demolition', icon: Construction },
    { id: 'moving', label: 'Moving', icon: Layers },
  ];

  return (
    <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <ScrollReveal direction="up" distance={40} className="text-center mb-16">
        <div className="inline-flex items-center gap-3 bg-secondary-container px-6 py-2 border border-primary mb-6">
          <Calculator size={20} className="text-primary" />
          <span className="font-display font-bold text-[14px] text-primary uppercase tracking-widest">Teejay's Interactive Estimator</span>
        </div>
        <h1 className="font-display font-black text-[40px] md:text-[56px] text-primary uppercase mb-6 leading-tight tracking-tighter">
          INSTANT <span className="text-secondary">ESTIMATE</span>
        </h1>
        <p className="font-sans text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          I'm here to provide you with standard pricing benchmarks. Select the items below to generate your preliminary estimate range.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input UI */}
        <ScrollReveal direction="right" distance={50} className="lg:col-span-8 space-y-6">
          <div className="flex flex-wrap border-2 border-primary bg-white shadow-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex-1 min-w-[120px] p-6 font-display font-black text-[12px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-3 transition-all ${
                  activeCategory === cat.id 
                  ? 'bg-primary text-white border-b-4 border-secondary' 
                  : 'text-primary hover:bg-surface-container'
                }`}
              >
                <cat.icon size={20} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="bg-white border-2 border-primary p-6 md:p-10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-outline mb-6">
                   <h2 className="font-display font-bold text-[20px] text-primary uppercase">
                     {categories.find(c => c.id === activeCategory)?.label} Pricing
                   </h2>
                </div>
                <div className="grid gap-4">
                  {PRICING_DATA.filter(item => item.category === activeCategory).map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface-container-low border border-outline hover:border-primary transition-all group">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="font-display font-bold text-[16px] md:text-[18px] text-primary uppercase">{item.label}</h3>
                        <p className="font-sans text-[14px] text-on-surface-variant">
                          Range: {item.min === item.max ? `$${item.min}` : `$${item.min} – $${item.max}`} 
                          {item.unit === 'sqft' ? ' per sq ft' : item.unit === 'hour' ? ' / HR' : ''}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 bg-white border-2 border-primary p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.unit === 'sqft' ? -50 : -1)}
                          disabled={!selections[item.id]}
                          className="w-10 h-10 flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary hover:text-white transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="w-12 text-center font-display font-black text-[20px] text-primary">
                          {selections[item.id] || 0}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.unit === 'sqft' ? 50 : 1)}
                          className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Right: Summary Box */}
        <ScrollReveal direction="left" distance={50} className="lg:col-span-4 lg:sticky lg:top-36">
          <div className="bg-primary p-8 border-b-[10px] border-secondary text-white shadow-2xl relative overflow-hidden">
            <h3 className="font-display font-black text-[22px] uppercase mb-8 tracking-tighter flex items-center justify-between">
              PROJECT QUOTE
              {hasSelections && (
                <button onClick={resetEstimator} className="text-secondary hover:text-white transition-colors">
                  <RefreshCcw size={20} />
                </button>
              )}
            </h3>
            
            <div className="space-y-6 mb-10">
              {hasSelections ? (
                <div>
                  <div className="text-[48px] md:text-[56px] font-display font-black leading-none mb-3 text-secondary tracking-tighter">
                    ${totals.min} – ${totals.max}
                  </div>
                  <p className="font-sans text-[15px] text-white/70 italic leading-snug">
                    Estimated range based on volume & specialized items. Loading & hauling included.
                  </p>
                </div>
              ) : (
                <div className="text-center py-10 border-2 border-white/10 border-dashed rounded-lg">
                   <AlertCircle className="mx-auto mb-4 text-secondary/50" size={48} />
                   <p className="font-sans text-[16px] text-white/50 px-4">Ready when you are. Select services to see your quote.</p>
                </div>
              )}
            </div>

            <div className="space-y-4 pt-8 border-t border-white/20">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <div>
                  <p className="font-display font-bold text-[14px] uppercase leading-none mb-1">Full Service</p>
                  <p className="font-sans text-[12px] text-white/60">Estimates include loading, hauling, and disposal fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="text-secondary shrink-0" size={20} />
                <div>
                  <p className="font-display font-bold text-[14px] uppercase leading-none mb-1">Weight Surcharge</p>
                  <p className="font-sans text-[12px] text-white/60">Heavy materials (concrete, dirt, gravel) incur weight surcharges.</p>
                </div>
              </div>
            </div>

            {hasSelections && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                className="mt-12"
              >
                <button 
                  onClick={handleConfirm}
                  className="w-full bg-secondary text-primary font-display font-black text-[20px] py-6 uppercase flex items-center justify-center gap-4 hover:bg-white hover:scale-[1.02] transition-all"
                >
                  <Phone size={24} />
                  CONFIRM & BOOK
                </button>
                <p className="mt-4 font-display font-bold text-[12px] text-center text-white/40 uppercase tracking-[0.2em]">
                  Contact for immediate service
                </p>
              </motion.div>
            )}
          </div>

          <div className="mt-8 p-6 bg-surface-container border-l-4 border-primary shadow-sm">
            <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
              <strong>Estimator Disclaimer:</strong> Prices are estimates only. Final pricing may vary based on actual weight, access/stairs, or specialized requirements. Call <a href="tel:15204904478" className="underline font-bold text-primary">+1 (520) 490-4478</a> or message on <a href="https://wa.me/15204904478" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#25D366]">WhatsApp</a> for a firm, guaranteed on-site quote.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
