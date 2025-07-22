import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const FounderQuoteSection = () => {
  return (
    <motion.section
      className="bg-[#f8f8f8] py-16 px-6 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Floating quote icon */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 opacity-10 pointer-events-none"
      >
        <Quote className="w-20 h-20 text-[#00bfff]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 7,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 opacity-10 pointer-events-none"
      >
        <Quote className="w-20 h-20 text-[#0088ff]" />
      </motion.div>

      {/* Quote Content */}
      <div className="max-w-4xl mx-auto px-4">
        <motion.blockquote
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-l-8 border-[#00bfff] transition-all duration-300"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 leading-relaxed">
            “Innovation in cybersecurity isn’t about doing what others do better; it’s about doing what others haven’t even imagined yet.”
          </p>
          <footer className="text-[#3b3b3b] font-medium text-sm md:text-base">
            – <span className="text-[#00bfff] font-bold">Harrisjayakumar V</span>, Founder & CEO, Twincord Technologies Pvt. Ltd.
          </footer>
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

export default FounderQuoteSection;
