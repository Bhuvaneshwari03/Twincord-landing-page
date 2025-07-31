import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Zap, Globe } from "lucide-react";
import Typewriter from "typewriter-effect";

const AboutUsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const milestones = [
    { year: "2015", description: "Freelance beginnings", icon: Sparkles },
    { year: "2018", description: "First enterprise client", icon: Rocket },
    { year: "2020", description: "National recognition", icon: Zap },
    { year: "2023", description: "Expanding globally", icon: Globe },
  ];

  return (
    <motion.section
      id="about-us"
      className="mt-0 bg-[#eef7ff] py-20 px-6 flex items-center justify-center relative overflow-hidden min-h-[600px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Animated gradient background - subtle blue tones */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0,191,255,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0,136,255,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0,191,255,0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="max-w-4xl text-center z-10 relative">
        {/* Animated heading with wave effect - split colors */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["W", "h", "o", " ", "A", "r", "e", " ", "W", "e", "?"].map(
            (letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                style={{
                  color: index <= 2 ? "#3b3b3b" : "#00bfff",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            )
          )}
        </motion.h2>

        {/* Enhanced typing animation container - dark blue text */}
        <motion.div
          className="text-lg md:text-xl text-[#2c5282] mb-12 max-w-2xl mx-auto h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: [
                "From freelance roots to a nationally recognized tech company",
                "We transform ideas into secure, scalable solutions",
                "Our team of experts delivers cutting-edge technology",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
              cursor: "|",
              wrapperClassName: "text-[#2c5282]",
            }}
          />
        </motion.div>

        {/* Enhanced milestones with better hover animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              className="relative group"
            >
              <motion.div
                className="flex flex-col items-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#00bfff]/30 h-full transform-gpu shadow-sm"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderColor: "rgba(0,191,255,0.5)",
                  boxShadow: "0 10px 30px rgba(0,136,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00bfff] to-[#0088ff] flex items-center justify-center mb-3 shadow-lg"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <milestone.icon className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  className="text-[#1a365d] font-bold text-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {milestone.year}
                </motion.div>
                <div className="text-[#2c5282] text-sm mt-1">
                  {milestone.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ultra enhanced CTA button */}
        <motion.div className="inline-block">
          <Link
            to="/about"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-gradient px-8 py-4 text-white font-bold text-lg rounded-full inline-flex items-center gap-3"
            >
                Explore Our Journey   <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
