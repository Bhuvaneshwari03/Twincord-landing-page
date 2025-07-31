import React from "react";
import { motion } from "framer-motion";

// Simple Header

// Simple Footer

const AcademicPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-indigo-100/30 rounded-full blur-3xl z-0"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-indigo-200/30 rounded-full blur-3xl z-0"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <main className="flex-1 flex flex-col items-center justify-center px-2 py-8 sm:px-4 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            w-full max-w-xs
            sm:max-w-md
            md:max-w-2xl
            bg-white/80 rounded-2xl
            sm:rounded-3xl
            shadow-2xl
            p-4 sm:p-8 md:p-10
            text-center
            z-10
          "
        >
          <motion.div
            initial={{ scale: 0.7, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            {/* You can add icons here if needed */}
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-[#00bfff]">
            Welcome to Twincord Academic
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
            <span className="font-semibold text-cyan-600">Academic</span> is your gateway to learning, creativity, and skill-building. Explore our unique programs, from technology to culinary arts!
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default AcademicPage;