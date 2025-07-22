import React from 'react';
import {
  FaReact, FaNodeJs, FaDocker, FaDatabase, FaGithub, FaHtml5,
  FaCss3Alt, FaGitAlt, FaAws, FaFigma, FaPython, FaCloud,
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiNestjs, SiNextdotjs, SiExpress, SiKubernetes, SiPostgresql, SiMysql, SiFirebase, SiRedis, SiDjango, SiFlask, SiVercel, SiPostman, SiNotion } from 'react-icons/si';

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
          <span className="text-[#00bfff]">Tech</span>
          <span className="text-[#3b3b3b]"> Stack</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-3xl text-[#00bfff] mb-2 group-hover:scale-110 transition-transform">
              {tech.icon}
            </div>
            <p className="text-sm text-[#3b3b3b] font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
