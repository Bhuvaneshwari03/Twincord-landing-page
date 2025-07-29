import React, { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Harrisjayakumar V",
    position: "CEO & Managing Director",
    image: "/public/boy.png",
  },
  {
    name: "Naren Karthik",
    position: "CTO",
    image: "/public/boy.png",
  },
  {
    name: "Saran Babu B",
    position: "Product and Marketing Lead",
    image: "/public/boy.png",
  },
  {
    name: "Ragul",
    position: "Head of Security Research",
    image: "/public/boy.png",
  },
  {
    name: "Harisree L G",
    position: "HR & Operations",
    image: "/public/girl.png",
  },
  {
    name: "Nivithitha",
    position: "Backend Engineer",
    image: "/public/girl.png",
  },
  {
    name: "Manoj",
    position: "Frontend Engineer",
    image: "/public/boy.png",
  },
  {
    name: "Kishore",
    position: "Product Designer",
    image: "/public/boy.png",
  },
  {
    name: "Thejas",
    position: "Product Designer",
    image: "/public/boy.png",
  },
];

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleMembers =
    isMobile && !showAll ? teamMembers.slice(0, 6) : teamMembers;

  return (
    <section className="bg-[#f8f8f8] py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#3b3b3b] mb-2">Team</h2>
        <div className="w-16 h-1.5 bg-[#00bfff] mx-auto rounded" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto justify-items-center">
        {visibleMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[120px] group"
          >
            <div
              className="
                w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]
                rounded-full bg-[#e0e0e0] overflow-hidden flex items-center justify-center shadow
                transition-all duration-300
                group-hover:scale-110 group-hover:rotate-[-6deg]
                group-hover:shadow-[0_8px_32px_0_rgba(0,191,255,0.15)]
                group-hover:ring-4 group-hover:ring-[#00bfff]/30
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
            <div className="mt-3 text-center min-w-[120px]">
              <div className="font-semibold text-[#3b3b3b] text-xs sm:text-sm md:text-base truncate w-full">
                {member.name}
              </div>
              <div className="text-[11px] sm:text-xs text-[#7d7d7d] truncate w-full">
                {member.position}
              </div>
            </div>
          </div>
        ))}
        {/* "You" Circle at the end */}
        <div className="flex flex-col items-center min-w-[120px] group">
          <a
            href="https://hrm.twincord.in/web/index.php/recruitmentApply/jobs.html"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div
              className="
                w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]
                rounded-full bg-[#e6f7ff] flex items-center justify-center flex-col shadow-md
                transition-all duration-300
                group-hover:scale-110 group-hover:rotate-[-6deg]
                group-hover:shadow-[0_8px_32px_0_rgba(0,191,255,0.15)]
                group-hover:ring-4 group-hover:ring-[#00bfff]/30
              "
            >
              <span className="text-xs sm:text-sm md:text-base text-[#00bfff] font-bold">
                You
              </span>
            </div>
            <div className="mt-3 text-center min-w-[120px]">
              <div className="font-semibold text-[#3b3b3b] text-xs sm:text-sm md:text-base">
                You
              </div>
              <div className="text-[11px] sm:text-xs text-[#7d7d7d]">
                Join Us
              </div>
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