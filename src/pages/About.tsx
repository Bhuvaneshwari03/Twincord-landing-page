import { useState, useEffect } from "react";
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

const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    desc: "Started as a passionate tech team delivering freelance projects in software, design, and digital solutions.",
    icon: <FaRocket className="text-white" />,
    color: "#00bfff",
    details: {
      foundation: [
        "Assembled core team",
        "Built expertise across tech stacks",
        "Delivered quality projects",
        "Developed client relationships"
      ],
      focus: ["Web Dev", "UI/UX", "Client Comm"]
    }
  },
  {
    year: "2023",
    title: "Business Evolution",
    desc: "Transitioned into an individual-led business expanding into web/app development and cybersecurity.",
    icon: <FaUserTie className="text-white" />,
    color: "#00bfff",
    details: {
      foundation: [
        "Expanded service offerings",
        "Built scalable applications",
        "Standardized processes",
        "Implemented management systems"
      ],
      focus: ["App Dev", "Cybersecurity", "Process Opt"]
    }
  },
  {
    year: "Dec 2023",
    title: "Major Achievement",
    desc: "Won Smart India Hackathon 2023 - validating our innovation power.",
    icon: <FaTrophy className="text-white" />,
    color: "#00bfff",
    details: {
      foundation: [
        "Developed award-winning solution",
        "Gained industry recognition",
        "Attracted new talent",
        "Boosted company reputation"
      ],
      focus: ["Innovation", "Team Growth", "Recognition"]
    }
  },
  {
    year: "Apr 2024",
    title: "Funding Success",
    desc: "Secured grant funding via Yukti Innovation Challenge to boost R&D efforts.",
    icon: <FaLightbulb className="text-white" />,
    color: "#00bfff",
    details: {
      foundation: [
        "Secured R&D funding",
        "Expanded capabilities",
        "Invested in technologies",
        "Accelerated development"
      ],
      focus: ["Research", "Development", "Innovation"]
    }
  },
  {
    year: "Jun 2025",
    title: "Corporate Milestone",
    desc: "Incorporated as Twincord Technologies Private Limited with a global vision.",
    icon: <FaBuilding className="text-white" />,
    color: "#00bfff",
    details: {
      foundation: [
        "Established as private limited",
        "Expanded global reach",
        "Developed enterprise solutions",
        "Built strategic partnerships"
      ],
      focus: ["Global Expansion", "Enterprise", "Growth"]
    }
  }
];

export default function AboutPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Twincord Technologies";
  }, []);

  return (
    <div className="bg-[#f8f8f8] min-h-screen py-12 px-4">
      {/* Hero Section */}
      <section className="py-12 px-6 text-center">
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
            className="text-4xl md:text-5xl font-bold mb-4 text-[#3b3b3b]"
          >
            Our Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg text-[#3b3b3b] max-w-2xl mx-auto"
          >
            From humble beginnings to global vision - our story of innovation and growth
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative max-w-4xl mx-auto px-4 pb-24">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#00bfff] -translate-x-1/2 z-0" />

        <div className="space-y-8 relative z-10">
          {milestones.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-center w-full relative">
                {/* Left side */}
                <div className={`md:w-1/2 flex ${isLeft ? 'justify-end' : 'justify-start'} md:px-4`}>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-full max-w-[320px]"
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
                  className="flex flex-col items-center z-10"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#00bfff] shadow-md`}>
                    <div className="w-3 h-3 rounded-full bg-[#f8f8f8]" />
                  </div>
                </motion.div>

                {/* Right side */}
                <div className={`md:w-1/2 flex ${!isLeft ? 'justify-start' : 'justify-end'} md:px-4`}>
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-full max-w-[320px]"
                    >
                      <TimelineCard
                        milestone={milestone}
                        isExpanded={expandedIndex === idx}
                        onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function TimelineCard({ milestone, isExpanded, onToggle }: {
  milestone: any,
  isExpanded: boolean,
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg border border-gray-100 w-[320px]"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="p-6">
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
                <h4 className="font-semibold text-[#3b3b3b] mb-3">Foundation:</h4>
                <ul className="space-y-2 mb-4">
                  {milestone.details.foundation.map((item: string, i: number) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 mt-2 mr-2 rounded-full" style={{ backgroundColor: milestone.color }}></span>
                      <span className="text-[#3b3b3b] text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <h4 className="font-semibold text-[#3b3b3b] mb-3">Focus Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {milestone.details.focus.map((item: string, i: number) => (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
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