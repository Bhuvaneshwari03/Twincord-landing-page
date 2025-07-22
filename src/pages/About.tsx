// pages/about.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';
import VisionMissionSection from '../components/VisionMissionSection';

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

        <div className="space-y-16 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-md p-6 rounded-2xl border-l-4 border-[#00bfff]"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#00bfff] mb-2">{milestone.year}</h3>
              <p className="text-[#3b3b3b] text-base">{milestone.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
<VisionMissionSection />
      <TeamSection />
    </>
  );
}
