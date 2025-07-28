import React, { useEffect, useState } from "react";
import TeamSection from "../components/TeamSection";
import VisionMissionSection from "../components/VisionMissionSection";
import TechStackSection from "../components/TechStackSection";
import FounderQuoteSection from "@/components/FounderQuoteSection";

// Timeline data with details
const milestones = [
  {
    year: "2022",
    icon: "🚀",
    dotClass: "start",
    title: "The Beginning",
    desc: "Started as a passionate tech team, delivering freelance projects in software development, design, and digital solutions.",
    details: (
      <>
        <h4>Foundation Phase:</h4>
        <ul>
          <li>Assembled a core team of passionate developers and designers</li>
          <li>Focused on building expertise across multiple technology stacks</li>
          <li>Delivered high-quality freelance projects to establish reputation</li>
          <li>Developed strong client relationships and project management skills</li>
        </ul>
        <h4>Key Focus Areas:</h4>
        <p>
          Software development, UI/UX design, and comprehensive digital solutions that helped businesses establish their online presence and streamline operations.
        </p>
      </>
    ),
  },
  {
    year: '2023',
    desc: 'Transitioned into an individual-led business, expanding into web/app development and cybersecurity.',
  },
  {
    year: "Dec 2023",
    icon: "🎯",
    dotClass: "achievement",
    badge: { icon: "🏆", text: "National Recognition", className: "achievement-badge" },
    title: "Smart India Hackathon 2023 Winners",
    desc: "Achieved a national-level innovation award, solving real-world problems through technology—this marked a key turning point for our growth.",
    details: (
      <>
        <h4>Competition Highlights:</h4>
        <ul>
          <li>Competed against thousands of teams nationwide</li>
          <li>Developed innovative solution addressing critical societal challenges</li>
          <li>Demonstrated technical excellence and problem-solving capabilities</li>
          <li>Gained recognition from industry experts and government officials</li>
        </ul>
        <h4>Impact & Recognition:</h4>
        <p>
          This victory validated our technical capabilities and innovative approach, opening doors to new opportunities and establishing our reputation as a forward-thinking technology company.
        </p>
      </>
    ),
  },
  {
    year: "Apr 2024",
    icon: "💰",
    dotClass: "funding",
    badge: { icon: "💡", text: "Grant Secured", className: "funding-badge" },
    title: "Yukti Innovation Challenge Success",
    desc: "Recognized for innovative product development and awarded funding to fuel R&D and technology advancement.",
    details: (
      <>
        <h4>Innovation Recognition:</h4>
        <ul>
          <li>Presented cutting-edge product concepts to expert panel</li>
          <li>Secured substantial funding for research and development</li>
          <li>Gained access to mentorship and industry networks</li>
          <li>Accelerated product development timeline</li>
        </ul>
        <h4>Future Investment:</h4>
        <p>
          The grant funding enabled us to invest in advanced R&D capabilities, hire specialized talent, and accelerate the development of innovative cybersecurity and software solutions.
        </p>
      </>
    ),
  },
  {
    year: "17 June 2025",
    icon: "🏢",
    dotClass: "milestone",
    badge: { icon: "🚀", text: "Major Milestone", className: "milestone-badge" },
    title: "Twincord Technologies Pvt Ltd",
    desc: "Officially incorporated as Twincord Technologies Private Limited, with a vision to scale cybersecurity solutions and software products globally.",
    details: (
      <>
        <h4>Corporate Milestone:</h4>
        <ul>
          <li>Official incorporation as Private Limited Company</li>
          <li>Established formal governance and operational structure</li>
          <li>Positioned for rapid scaling and global expansion</li>
          <li>Enhanced credibility with enterprise clients and partners</li>
        </ul>
        <h4>Global Vision:</h4>
        <p>
          With incorporation complete, Twincord Technologies is positioned to scale innovative cybersecurity solutions and software products to markets worldwide, building on our foundation of technical excellence and proven innovation.
        </p>
      </>
    ),
  },
];

const stats = [
  { number: "3+", label: "Years of Innovation" },
  { number: "2", label: "Major Awards Won" },
  { number: "1", label: "Grant Secured" },
  { number: "∞", label: "Future Possibilities" },
];

export default function AboutPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Twincord Technologies";
  }, []);


  return (
    <>
      <style>{`
        /* Paste your CSS here or import a CSS file */
        .timeline-container {
          max-width: 1000px;
          margin: 0 auto;
          background: rgba(255,255,255,0.98);
          border-radius: 24px;
          padding: 50px 40px;
          /* Removed box-shadow and backdrop-filter for flat look */
        }
        .header { text-align: center; margin-bottom: 60px; }
        .header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: -0.02em;
        }
        .header p { font-size: 1.3rem; color: #64748b; font-weight: 500; }
        .timeline { position: relative; padding: 30px 0; }
        .timeline-line {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 4px;
          background: linear-gradient(to bottom, #00bfff, #00bfff, #00bfff, #00bfff);
          transform: translateX(-50%);
          border-radius: 2px;
          /* Removed box-shadow for flat look */
        }
        .timeline-item { position: relative; margin: 80px 0; opacity: 1; }
        .timeline-item.left { text-align: right; padding-right: calc(50% + 50px); }
        .timeline-item.right { text-align: left; padding-left: calc(50% + 50px); }
        .timeline-dot {
          position: absolute; left: 50%; top: 30px; width: 24px; height: 24px; border-radius: 50%;
          transform: translateX(-50%); cursor: pointer; transition: all 0.4s ease; z-index: 10;
          border: 4px solid #fff;
          /* Removed box-shadow for flat look */
        }
        .timeline-dot.start { background: linear-gradient(135deg, #00bfff, #00bfff); }
        .timeline-dot.growth { background: linear-gradient(135deg, #00bfff, #00bfff); }
        .timeline-dot.achievement { background: linear-gradient(135deg, #00bfff, #00bfff); }
        .timeline-dot.funding { background: linear-gradient(135deg, #00bfff, #00bfff); }
        .timeline-dot.milestone { background: linear-gradient(135deg, #00bfff, #00bfff); }
        .timeline-dot:hover { transform: translateX(-50%) scale(1.4); /* Removed box-shadow for flat look */}
        .timeline-content {
          background: #fff; padding: 35px; border-radius: 20px; /* Removed box-shadow for flat look */
          cursor: pointer; transition: all 0.4s ease; border: 2px solid transparent; position: relative; overflow: hidden;
        }
        .timeline-content::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #00bfff, #00bfff); transform: scaleX(0); transition: transform 0.4s ease;
        }
        .timeline-content:hover::before { transform: scaleX(1); }
        .timeline-content:hover {
          /* Removed pop-up effect */
        }
        .timeline-date { font-size: 1.4rem; font-weight: 700; margin-bottom: 15px; color: #00bfff; display: flex; align-items: center; gap: 10px; }
        .timeline-title { font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; color: #1e293b; line-height: 1.3; }
        .timeline-description { font-size: 1.1rem; line-height: 1.7; color: #475569; margin-bottom: 20px; }
        .achievement-badge, .funding-badge, .milestone-badge {
          display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 25px; font-weight: 600; font-size: 0.95rem; margin-bottom: 15px;
        }
        .achievement-badge { background: linear-gradient(135deg, #fef3c7, #fde68a); border: 2px solid #00bfff; color: #00bfff; }
        .funding-badge { background: linear-gradient(135deg, #d1fae5, #a7f3d0); border: 2px solid #00bfff; color: #00bfff; }
        .milestone-badge { background: linear-gradient(135deg, #fee2e2, #fecaca); border: 2px solid #00bfff; color: #00bfff; }
        .expand-btn {
          background: linear-gradient(135deg, #00bfff, #00bfff); border: none; color: white; font-weight: 600; cursor: pointer;
          font-size: 1rem; padding: 12px 24px; border-radius: 12px; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 8px;
        }
        .expand-btn:hover {
          background: linear-gradient(135deg, #00bfff, #00bfff); transform: translateY(-2px); /* Removed box-shadow for flat look */
        }
        .detailed-info { max-height: 0; overflow: hidden; transition: max-height 0.5s ease; border-top: 2px solid #e2e8f0; margin-top: 20px; }
        .detailed-info.expanded { max-height: 2000px; padding-top: 20px; }
        .detailed-content { font-size: 1rem; line-height: 1.8; color: #475569; }
        .detailed-content h4 { color: #1e293b; margin: 20px 0 12px 0; font-size: 1.2rem; font-weight: 600; }
        .detailed-content ul { margin-left: 20px; margin-bottom: 15px; }
        .detailed-content li { margin-bottom: 8px; position: relative; }
        .detailed-content li::marker { color: #00bfff; }
        .stats-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px; padding: 25px;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 16px; border: 1px solid #e2e8f0;
        }
        .stat-item { text-align: center; padding: 15px; }
        .stat-number { font-size: 2rem; font-weight: 800; color: #00bfff; display: block; }
        .stat-label { font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 5px; }
        @media (max-width: 768px) {
          .timeline-line { left: 30px; }
          .timeline-item.left, .timeline-item.right { text-align: left; padding-left: 70px; padding-right: 20px; }
          .timeline-dot { left: 30px; }
          .header h1 { font-size: 2.5rem; }
          .timeline-container { padding: 30px 20px; }
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="timeline-container">
        <div className="header">
          <h1>
            <span style={{ color: '#3b3b3b' }}>Our </span>
            <span style={{ color: '#00bfff' }}>Journey</span>
          </h1>
          <p>From passionate beginnings to industry recognition</p>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          {milestones.map((m, i) => (
            <div
              className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              key={i}
              onMouseEnter={e => {
                const card = e.currentTarget.querySelector('.timeline-content') as HTMLElement | null;
                if (card) {
                  card.style.transform = 'translateY(-15px)';
                  card.style.boxShadow = '0 35px 60px rgba(0, 191, 255, 0.2)';
                }
              }}
              onMouseLeave={e => {
                const card = e.currentTarget.querySelector('.timeline-content') as HTMLElement | null;
                if (card) {
                  card.style.transform = 'translateY(0)';
                  card.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              <div className={`timeline-dot ${m.dotClass}`}></div>
              <div className="timeline-content" style={{ boxShadow: '0 6px 14px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s ease' }}>
                {m.badge && (
                  <div className={m.badge.className}>
                    <span>{m.badge.icon}</span>
                    {m.badge.text}
                  </div>
                )}
                <div className="timeline-date">
                  <span>{m.icon}</span>
                  {m.year}
                </div>
                <div className="timeline-title">{m.title}</div>
                <div className="timeline-description">{m.desc}</div>
                <button
                  className="expand-btn"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span>{expanded === i ? "Show Less" : "Learn More"}</span>
                  <span>{expanded === i ? "▲" : "▼"}</span>
                </button>
                <div className={`detailed-info${expanded === i ? " expanded" : ""}`}>
                  <div className="detailed-content">{m.details}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <VisionMissionSection />
      <FounderQuoteSection />
      <TeamSection />
      <TechStackSection />
    </>
  );
}