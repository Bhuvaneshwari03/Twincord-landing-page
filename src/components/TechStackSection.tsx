import React, { useState, useEffect } from 'react';
import {
  FaReact, FaNodeJs, FaDocker, FaDatabase, FaGithub, FaHtml5,
  FaCss3Alt, FaGitAlt, FaAws, FaFigma, FaPython, FaCloud,
} from 'react-icons/fa';
import {
  SiMongodb, SiTailwindcss, SiNestjs, SiNextdotjs, SiExpress, SiKubernetes,
  SiPostgresql, SiMysql, SiFirebase, SiRedis, SiDjango, SiFlask, SiVercel,
  SiPostman, SiNotion
} from 'react-icons/si';

const techStack = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Azure', icon: <FaCloud /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub Actions', icon: <FaGithub /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Notion', icon: <SiNotion /> },
];

const TechStackSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleTechs = isMobile && !showAll ? techStack.slice(0, 6) : techStack;

  return (
    <section className="py-16 px-4 md:px-12 bg-[#f8f8f8]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3b3b3b]">
          <span className="text-[#00bfff]">Tech</span>{" "}
          <span className="text-[#3b3b3b]">Stack</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {visibleTechs.map((tech, index) => (
          <div
            key={index}
            className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center px-4 py-3 transition-all duration-300 group relative z-10"
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 35px 60px rgba(0, 191, 255, 0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.05)';
            }}
            style={{ boxShadow: '0 6px 14px rgba(0, 0, 0, 0.05)' }}
          >
            <div className="relative z-20 text-3xl sm:text-4xl text-[#00bfff] mb-2 group-hover:scale-110 transition-transform">
              {tech.icon}
            </div>
            <p className="relative z-20 text-xs sm:text-sm font-semibold text-[#3b3b3b]">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
      {/* See More button only on mobile and only if not showing all */}
      <div className="mt-6 flex justify-center md:hidden">
        {!showAll && techStack.length > 6 && (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-[#00bfff] text-white rounded-lg font-medium shadow hover:bg-[#0099cc] transition"
          >
            See More
          </button>
        )}
        {showAll && techStack.length > 6 && (
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

export default TechStackSection;