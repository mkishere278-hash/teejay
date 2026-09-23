/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play, Video, Clock, Share2 } from 'lucide-react';

export function Videos({ onNavigate }: { onNavigate: (page: any) => void }) {
  const VIDEOS = [
    {
      id: "v1",
      title: "Full Property Transformation",
      url: "https://res.cloudinary.com/dfusupw5h/video/upload/v1780524497/Messenger_creation_6808B515-9A59-4018-AA78-D50F1E6F6204_htxic6.mp4",
      category: "Full Haul"
    },
    {
      id: "v2",
      title: "Efficient Debris Removal",
      url: "https://res.cloudinary.com/dfusupw5h/video/upload/v1780524506/Messenger_creation_FC21ED6F-F158-4899-88AE-5352E949E77D_tc9jdr.mp4",
      category: "Precision"
    },
    {
      id: "v3",
      title: "Standard Load Processing",
      url: "https://res.cloudinary.com/dfusupw5h/video/upload/v1780524485/Messenger_creation_33683782-4E6F-4557-A128-9CABB54862E6_mnp7ym.mp4",
      category: "Workflow"
    },
    {
      id: "v4",
      title: "Project Highlight",
      url: "https://res.cloudinary.com/dfusupw5h/video/upload/v1785838756/Messenger_creation_414F8688-421B-4E8C-899F-66A98F688664_pxq9of.mp4",
      category: "Live Project"
    },
    {
      id: "v5",
      title: "On-Site Work",
      url: "https://res.cloudinary.com/dfusupw5h/video/upload/v1785838669/Messenger_creation_ED75B2A4-84E5-44F6-88A9-2C0BF720012A_e33ddy.mp4",
      category: "Live Project"
    },
    {
      id: "v6",
      title: "Site Progress",
      url: "https://res.cloudinary.com/dfusupw5h/video/upload/v1785838649/Messenger_creation_D663C93C-8792-48FF-8423-4351AEA1FE85_mmotc1.mp4",
      category: "Precision"
    },
    {
      id: "v7",
      title: "Job in Action",
      url: "https://res.cloudinary.com/dfusupw5h/video/upload/v1785838445/Messenger_creation_2D0BC440-C2A8-4122-9483-49477395AD17_xjr6cu.mp4",
      category: "Workflow"
    }
  ];

  return (
    <div className="pt-32 md:pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-3 bg-secondary-container px-6 py-2 border border-primary mb-6"
        >
          <Video size={20} className="text-primary" />
          <span className="font-display font-bold text-[14px] text-primary uppercase tracking-widest">Work in Motion</span>
        </motion.div>
        <h1 className="font-display font-black text-[40px] md:text-[56px] text-primary uppercase mb-6 leading-tight tracking-tighter">
          PROJECT <span className="text-secondary">WORKS</span>
        </h1>
        <p className="font-sans text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Watch our team in action. Real projects, real results. We bring efficiency and professionalism 
          to every job site across Tucson.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {VIDEOS.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="relative aspect-[9/16] overflow-hidden border-2 border-primary bg-primary shadow-2xl group">
              <video 
                src={video.url} 
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-display font-bold uppercase tracking-widest px-3 py-1 pointer-events-none">
                {video.category}
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="font-display font-black text-[22px] text-primary uppercase leading-tight tracking-tight italic">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-8 h-[2px] bg-secondary"></div>
                  <p className="font-sans text-[14px] text-primary/60 uppercase font-black tracking-widest">
                    Live Project
                  </p>
                </div>
              </div>
              <button className="text-primary/40 hover:text-secondary transition-colors p-2">
                <Share2 size={24} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-primary text-white border-b-[10px] border-secondary relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-display font-black text-[32px] uppercase leading-none mb-4 italic tracking-tighter">
              SEE THE <span className="text-secondary">DIFFERENCE?</span>
            </h2>
            <p className="font-sans text-white/70">
              Our videos are just a glimpse of the speed and care we provide. 
              Let us handle your next removal project with the same level of expertise.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('book')}
            className="shrink-0 bg-secondary text-primary font-display font-black px-10 py-5 uppercase hover:bg-white transition-all transform hover:scale-105 shadow-xl"
          >
            GET A CUSTOM QUOTE
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
}
