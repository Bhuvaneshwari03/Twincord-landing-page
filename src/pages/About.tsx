import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaUserTie,
  FaTrophy,
  FaLightbulb,
  FaBuilding,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import TeamSection from "../components/TeamSection";
import VisionMissionSection from "../components/VisionMissionSection";
import TechStackSection from "../components/TechStackSection";
import FounderQuoteSection from "@/components/FounderQuoteSection";

// Timeline data (no badge)
const milestones = [
  {
    year: "2022",
    icon: <FaRocket className="text-white" />,
    color: "#00bfff",
    title: "The Beginning",
    desc: "Started as a passionate tech team, delivering freelance projects in software development, design, and digital solutions.",
    foundation: [
      "Assembled a core team of passionate developers and designers",
      "Focused on building expertise across multiple technology stacks",
      "Delivered high-quality freelance projects to establish reputation",
      "Developed strong client relationships and project management skills"
    ],
    focus: [
      "Software Development",
      "UI/UX Design",
      "Digital Solutions"
    ]
  },
  {
    year: "2023",
    icon: <FaUserTie className="text-white" />,
    color: "#00bfff",
    title: "Business Evolution",
    desc: "Transitioned into an individual-led business entity, expanding into web development, app development, and cybersecurity services.",
    foundation: [
      "Formalized business structure and operations",
      "Expanded service portfolio to include cybersecurity",
      "Invested in advanced development tools and infrastructure",
      "Built specialized expertise in mobile app development"
    ],
    focus: [
      "Web Development",
      "App Development",
      "Cybersecurity"
    ]
  },
  {
    year: "Dec 2023",
    icon: <FaTrophy className="text-white" />,
    color: "#00bfff",
    title: "Smart India Hackathon 2023 Winners",
    desc: "Achieved a national-level innovation award, solving real-world problems through technology—this marked a key turning point for our growth.",
    foundation: [
      "Competed against thousands of teams nationwide",
      "Developed innovative solution addressing critical societal challenges",
      "Demonstrated technical excellence and problem-solving capabilities",
      "Gained recognition from industry experts and government officials"
    ],
    focus: [
      "Innovation",
      "Technical Excellence",
      "Recognition"
    ]
  },
  {
    year: "Apr 2024",
    icon: <FaLightbulb className="text-white" />,
    color: "#00bfff",
    title: "Yukti Innovation Challenge Success",
    desc: "Recognized for innovative product development and awarded funding to fuel R&D and technology advancement.",
    foundation: [
      "Presented cutting-edge product concepts to expert panel",
      "Secured substantial funding for research and development",
      "Gained access to mentorship and industry networks",
      "Accelerated product development timeline"
    ],
    focus: [
      "Product Innovation",
      "R&D Funding",
      "Mentorship"
    ]
  },
  {
    year: "17 June 2025",
    icon: <FaBuilding className="text-white" />,
    color: "#00bfff",
    title: "Twincord Technologies Pvt Ltd",
    desc: "Officially incorporated as Twincord Technologies Private Limited, with a vision to scale cybersecurity solutions and software products globally.",
    foundation: [
      "Official incorporation as Private Limited Company",
      "Established formal governance and operational structure",
      "Positioned for rapid scaling and global expansion",
      "Enhanced credibility with enterprise clients and partners"
    ],
    focus: [
      "Global Expansion",
      "Enterprise Solutions",
      "Credibility"
    ]
  }
];

const stats = [
  { number: "3+", label: "Years of Innovation" },
  { number: "2", label: "Major Awards Won" },
  { number: "1", label: "Grant Secured" },
  { number: "∞", label: "Future Possibilities" },
];

export default function AboutPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Twincord Technologies";
  }, []);

  return (
    <div className="bg-[#f8f8f8] min-h-screen py-12 px-2 sm:px-4">
      {/* Hero Section */}
      <section className="py-12 px-2 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-[#00bfff] rounded-full p-4 shadow-lg inline-block">
              <FaRocket className="text-white text-4xl" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#3b3b3b]"
          >
            <span className="text-[#3a3a3a]">Our </span>
            <span className="text-[#00bfff]">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg text-[#3b3b3b] max-w-2xl mx-auto"
          >
            From passionate beginnings to industry recognition
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative max-w-4xl mx-auto px-2 sm:px-4 pb-24">
        {/* Vertical line only on md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-[#00bfff] -translate-x-1/2 z-0" />

        <div className="space-y-8 relative z-10">
          {milestones.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center justify-center w-full relative"
              >
                {/* On mobile, always show card centered. On md+, alternate left/right */}
                <div
                  className={`w-full md:w-1/2 flex justify-center md:justify-${isLeft ? "end" : "start"} md:px-4 mb-4 md:mb-0`}
                >
                  {(isLeft || window.innerWidth < 768) && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-full max-w-md"
                    >
                      <TimelineCard
                        milestone={milestone}
                        isExpanded={expandedIndex === idx}
                        onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                      />
                    </motion.div>
                  )}
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center z-10 my-2 md:my-0"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#00bfff] shadow-md">
                    <div className="w-3 h-3 rounded-full bg-[#f8f8f8]" />
                  </div>
                </motion.div>

                <div
                  className={`w-full md:w-1/2 flex justify-center md:justify-${!isLeft ? "start" : "end"} md:px-4 mb-4 md:mb-0`}
                >
                  {(!isLeft || window.innerWidth < 768) && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-full max-w-md md:max-w-[370px]"
                    >
                      {/* On mobile, only render the card once per milestone */}
                      {window.innerWidth >= 768 || !isLeft ? (
                        <TimelineCard
                          milestone={milestone}
                          isExpanded={expandedIndex === idx}
                          onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                        />
                      ) : null}
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0] rounded-xl p-4 md:p-6">
          {stats.map((stat, i) => (
            <div className="text-center" key={i}>
              <span className="text-3xl font-extrabold text-[#00bfff] block">{stat.number}</span>
              <span className="text-sm text-[#64748b] font-medium mt-1 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <VisionMissionSection />
      <FounderQuoteSection />
      <TeamSection />
      <TechStackSection />
    </div>
  );
}

// TimelineCard component with neat blue line
function TimelineCard({ milestone, isExpanded, onToggle }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg border border-gray-100 w-full max-w-md md:max-w-[370px]"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        position: "relative",
        overflow: "hidden"
      }}
      whileHover={{ y: -8, boxShadow: "0 12px 32px 0 rgba(0,191,255,0.10)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full`} style={{ backgroundColor: milestone.color }}>
            {milestone.icon}
          </div>
          <div>
            <h3 className="text-[#00bfff] font-bold text-lg">{milestone.year}</h3>
            <h2 className="text-xl font-semibold text-[#3b3b3b]">{milestone.title}</h2>
          </div>
        </div>
        <p className="text-[#3b3b3b] mb-4">{milestone.desc}</p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onToggle}
          className="flex items-center justify-center w-full py-2 bg-[#00bfff] hover:bg-[#00a2ff] text-white font-medium rounded-lg transition-colors"
        >
          {isExpanded ? (
            <>
              <FaChevronUp className="mr-2" /> Show Less
            </>
          ) : (
            <>
              <FaChevronDown className="mr-2" /> Learn More
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-gray-200">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-semibold text-[#3b3b3b] mb-3"
                >
                  Foundation:
                </motion.h4>
                <ul className="space-y-2 mb-4">
                  {milestone.foundation.map((item, i) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      key={i}
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-2 rounded-full" style={{ backgroundColor: milestone.color }}></span>
                      <span className="text-[#3b3b3b] text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="font-semibold text-[#3b3b3b] mb-3"
                >
                  Focus Areas:
                </motion.h4>
                <div className="flex flex-wrap gap-2">
                  {milestone.focus.map((item, i) => (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 + 0.2 }}
                      key={i}
                      className="px-3 py-1 bg-[#00bfff]/10 text-[#00bfff] text-xs rounded-full"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}