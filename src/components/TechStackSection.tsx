import React from 'react';
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
  return (
    <section className="py-16 px-4 md:px-12 bg-[#f8f8f8]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3b3b3b]">
          <span className="text-[#00bfff]">Tech</span>{" "}
          <span className="text-[#3b3b3b]">Stack</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-[150px] h-[150px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center px-4 py-3 transition-all duration-300 group hover:scale-105 relative z-10"
          >
            <div className="absolute inset-0 bg-[#00bfff] opacity-10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 z-0" />
            <div className="relative z-20 text-4xl text-[#00bfff] mb-2 group-hover:scale-110 transition-transform">
              {tech.icon}
            </div>
            <p className="relative z-20 text-sm font-semibold text-[#3b3b3b]">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
