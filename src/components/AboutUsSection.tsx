import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Lock, Globe } from "lucide-react";

const floatTransition = {
  repeat: Infinity,
  repeatType: "mirror",
  duration: 6,
  ease: "easeInOut",
};

const AboutUsSection = () => {
  return (
    <motion.section
      id="about-us"
      className="bg-gradient-to-r from-[#00bfff] to-[#0088ff] py-20 px-6 flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Floating Background Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={floatTransition}
        className="absolute top-16 left-10 pointer-events-none"
      >
        <ShieldCheck className="w-16 h-16 text-[#cceeff] opacity-5 blur-[1px]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={floatTransition}
        className="absolute bottom-20 right-14 pointer-events-none"
      >
        <Lock className="w-14 h-14 text-[#a7dfff] opacity-5 blur-[1px]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={floatTransition}
        className="absolute top-28 right-24 pointer-events-none"
      >
        <Globe className="w-12 h-12 text-[#cceeff] opacity-5 blur-[1px]" />
      </motion.div>

      {/* Foreground Content */}
      <div className="max-w-4xl text-center z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="text-white">Who </span>
          <span className="text-white">Are We?</span>
        </h2>

        <p className="text-lg md:text-xl text-white mb-8">
          From freelance roots to a nationally recognized tech company, our
          journey is fueled by innovation and impact.
        </p>

        <Link to="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00bfff] font-semibold rounded-2xl shadow-md hover:bg-gray-100 transition-all"
          >
            Explore Our Journey <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
