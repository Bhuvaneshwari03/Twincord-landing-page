import React, { useState } from 'react';

const TeamSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const teamMembers = [...Array(14)]; // 24 placeholders + 1 You = 25 = 5x5

  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '60px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#3b3b3b',
          marginBottom: '10px'
        }}>
          Team
        </h2>
        <div style={{
          width: '60px',
          height: '5px',
          backgroundColor: '#00bfff',
          margin: '0 auto',
          borderRadius: '2px'
        }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '30px',
        maxWidth: '800px',
        margin: '0 auto',
        justifyItems: 'center',
      }}>
        {teamMembers.map((_, index) => (
          <div key={index} style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#7d7d7d',
          }}>
            Image
          </div>
        ))}

        {/* "You" Circle at the end */}
        <div className="team-member">
          <a href="https://hrm.twincord.in/web/index.php/recruitmentApply/jobs.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#e6f7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span style={{ fontSize: '16px', color: '#00bfff', fontWeight: 'bold' }}>You</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;