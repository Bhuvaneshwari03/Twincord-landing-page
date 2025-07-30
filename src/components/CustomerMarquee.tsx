import React from "react";

const CustomerMarquee = () => {
  const keywords = [
    "STARTUPS",
    "CYBERSECURITY",
    "GROWING BUSINESSES",
    "SOFTWARE DEVELOPMENT",
    "SECURE SOLUTIONS",
    "SCALABLE PLATFORMS",
    "AI & DATA SOLUTIONS",
    "MODERN TECHNOLOGY",
    "INNOVATION",
    "CLOUD & INFRASTRUCTURE",
    "UI/UX & DESIGN",
    "DIGITAL TRANSFORMATION",
  ];

  // This component renders the list of keywords. It's used twice to create the seamless effect.
  const MarqueeContent = () => (
    <div className="flex-shrink-0 flex items-center justify-around min-w-full animate-marquee">
      {keywords.map((keyword, index) => (
        <span
          key={`keyword-${index}`}
          className="mx-6 text-base font-medium text-gray-500"
        >
          {keyword}
        </span>
      ))}
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
      <div className="w-full overflow-hidden bg-primary/5 border-y border-border py-6">
        <div className="flex">
          {/* We render the content twice, side-by-side */}
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </>
  );
};

export default CustomerMarquee;
