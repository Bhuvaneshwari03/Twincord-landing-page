import React from 'react';

const VisionMissionSection = () => {
  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '100px 20px' }}>
      <style>{`
        .vision-mission-card {
          width: 450px;
          height: 450px;
          background: white;
          border-radius: 28px;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
          padding: 45px;
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }
        .vision-mission-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #00bfff, #00bfff);
          transform: scaleX(0);
          transition: transform 0.4s ease;
          z-index: 2;
        }
        .vision-mission-card:hover::before {
          transform: scaleX(1);
        }
      `}</style>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '14px',
          }}
        >
          <span style={{ color: '#3b3b3b' }}>Vision</span>{' '}
          <span style={{ color: '#00bfff' }}>& </span>
          <span style={{ color: '#3b3b3b' }}>Mission</span>
        </h2>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '60px',
        }}
      >
        {[
          {
            title: 'Mission',
            text: 'Our mission is to innovate and deliver secure, scalable, and user-centric software solutions that empower businesses to thrive in the digital era. We are committed to building long-term partnerships with our clients, grounded in trust and mutual success.',
          },
          {
            title: 'Vision',
            text: 'Our vision is to be a globally recognized leader and a pioneering force in technology. We aspire to be the go-to partner for solving complex digital challenges, renowned for our expertise in cybersecurity and transformative custom-built products.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="vision-mission-card"
            style={{
              transform: 'translateY(0)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 35px 60px rgba(0, 191, 255, 0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.05)';
            }}
          >
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#00bfff',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: '18px',
                color: '#444',
                marginTop: '28px',
                lineHeight: '1.7',
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionSection;
