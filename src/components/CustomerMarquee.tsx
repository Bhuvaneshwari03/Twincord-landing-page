import { motion } from "framer-motion";

const CustomerMarquee = () => {
  const keywords = [
    "STARTUPS",
    "ACADEMIC INSTITUTIONS", 
    "GROWING BUSINESSES",
    "CYBERSECURITY",
    "SOFTWARE DEVELOPMENT",
    "SECURE SOLUTIONS",
    "MODERN TECHNOLOGY",
    "SCALABLE PLATFORMS",
    "INNOVATION",
    "DIGITAL TRANSFORMATION"
  ];

  const extendedKeywords = [...keywords, ...keywords, ...keywords];

  return (
    <div className="w-full overflow-hidden bg-primary/5 border-y border-border py-6">
      <motion.div 
        className="flex space-x-12"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "3rem"
        }}
      >
        {extendedKeywords.map((keyword, index) => (
          <span
            key={`keyword-${index}`}
            className="marquee-text whitespace-nowrap font-medium"
          >
            {keyword}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerMarquee;