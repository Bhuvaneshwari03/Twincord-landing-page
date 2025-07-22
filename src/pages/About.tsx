// pages/about.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';
import VisionMissionSection from '../components/VisionMissionSection';
import TechStackSection from '../components/TechStackSection';
import FounderQuoteSection from '@/components/FounderQuoteSection';

const milestones = [
  {
    year: '2022',
    desc: 'Started as a passionate tech team, delivering freelance projects in software, design, and digital solutions.',
  },
  {
    year: '2023',
    desc: 'Transitioned into an individual-led business, expanding into web/app development and cybersecurity.',
  },
  {
    year: 'Dec 2023',
    desc: 'Won the Smart India Hackathon 2023 – a major milestone validating our innovation power.',
  },
  {
    year: 'Apr 2024',
    desc: 'Secured grant funding via Yukti Innovation Challenge to boost R&D efforts.',
  },
  {
    year: '17 June 2025',
    desc: 'Incorporated as Twincord Technologies Private Limited with a global vision.',
  },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Twincord Technologies";
  }, []);
  return (
    <>

      <div className="bg-[#f8f8f8] min-h-screen py-20 px-6 text-[#3b3b3b]">
        <motion.div
          className="max-w-5xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Our <span className="text-gradient">Journey</span></h1>
          <p className="text-lg max-w-3xl mx-auto">
            We started small but dreamt big. Here’s how Twincord grew into a bold tech company that’s solving real-world problems.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4">
  {/* Vertical timeline line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00bfff] to-[#0088ff]"></div>

  {milestones.map((milestone, index) => {
    const isLeft = index % 2 === 0;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative w-full md:w-1/2 px-4 py-6 ${
          isLeft ? 'md:pr-10 text-right md:ml-0 md:left-0' : 'md:pl-10 text-left md:ml-auto md:right-0'
        }`}
        style={{
          marginLeft: isLeft ? '0' : 'auto',
          marginRight: isLeft ? 'auto' : '0',
        }}
      >
        

        {/* Card */}
        <div className="bg-white shadow-xl border border-[#e6f7ff] p-6 rounded-xl">
          <h3 className="text-[#00bfff] font-semibold text-lg mb-2">{milestone.year}</h3>
          <p className="text-[#3b3b3b] text-base leading-relaxed">{milestone.desc}</p>
        </div>
      </motion.div>
    );
  })}
</div>

      </div>
<VisionMissionSection />
<FounderQuoteSection />
      <TeamSection />
      <TechStackSection/>
     
    </>
  );
}
