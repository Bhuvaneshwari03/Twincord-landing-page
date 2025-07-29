import React, { useState, useEffect } from 'react';

const TeamSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const teamMembers = [...Array(14)]; // 14 placeholders

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show 6 + "You" on mobile, all on desktop or if showAll
  const visibleMembers = isMobile && !showAll ? teamMembers.slice(0, 6) : teamMembers;

  return (
    <section className="bg-[#f8f8f8] py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#3b3b3b] mb-2">Team</h2>
        <div className="w-16 h-1.5 bg-[#00bfff] mx-auto rounded" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl mx-auto justify-items-center">
        {visibleMembers.map((_, index) => (
          <div key={index} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-[#e0e0e0] flex items-center justify-center text-xs sm:text-sm text-[#7d7d7d]">
            Image
          </div>
        ))}
        {/* "You" Circle at the end */}
        <div className="team-member">
          <a href="https://hrm.twincord.in/web/index.php/recruitmentApply/jobs.html" target="_blank" rel="noopener noreferrer" className="no-underline">
            <div
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-[#e6f7ff] flex items-center justify-center flex-col shadow-md transition-transform duration-300"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-xs sm:text-sm md:text-base text-[#00bfff] font-bold">You</span>
            </div>
          </a>
        </div>
      </div>
      {/* See More button only on mobile and only if not showing all */}
      <div className="mt-6 flex justify-center md:hidden">
        {!showAll && teamMembers.length > 6 && (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-[#00bfff] text-white rounded-lg font-medium shadow hover:bg-[#0099cc] transition"
          >
            See More
          </button>
        )}
        {showAll && teamMembers.length > 6 && (
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-2 bg-gray-200 text-[#00bfff] rounded-lg font-medium shadow hover:bg-gray-300 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default TeamSection;