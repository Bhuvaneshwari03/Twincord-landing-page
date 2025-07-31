import React from 'react';

const cards = [
  {
    title: 'Mission',
    text: 'Our mission is to innovate and deliver secure, scalable, and user-centric software solutions that empower businesses to thrive in the digital era. We are committed to building long-term partnerships with our clients, grounded in trust and mutual success.',
  },
  {
    title: 'Vision',
    text: 'Our vision is to be a globally recognized leader and a pioneering force in technology. We aspire to be the go-to partner for solving complex digital challenges, renowned for our expertise in cybersecurity and transformative custom-built products.',
  }
];

const VisionMissionSection = () => {
  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '70px 20px' }}>
      <style>{`
        .vision-mission-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
        }
        .vision-mission-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 6px 24px rgba(0, 191, 255, 0.08);
          padding: 32px 28px 24px 28px;
          transition: box-shadow 0.3s, border 0.3s;
          text-align: center;
          position: relative;
          width: 100%;
          max-width: 400px;
          min-height: 320px;
          border-top: 4px solid transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .vision-mission-card:hover {
          box-shadow: 0 12px 32px rgba(0,191,255,0.18);
          border-top: 4px solid #00bfff;
        }
        .vision-mission-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #00bfff;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }
        .vision-mission-text {
          font-size: 1.08rem;
          color: #444;
          line-height: 1.7;
          margin-bottom: 0;
          margin-top: 0;
        }
        @media (max-width: 899px) {
          .vision-mission-container {
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .vision-mission-card {
            max-width: 100%;
            min-height: unset;
            padding: 24px 10px 18px 10px;
          }
        }
      `}</style>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#3b3b3b',
            letterSpacing: '-1px'
          }}
        >
          <span>Vision </span>
          <span style={{ color: '#00bfff' }}>&</span>
          <span> Mission</span>
        </h2>
      </div>
      <div className="vision-mission-container">
        {cards.map((item) => (
          <div className="vision-mission-card" key={item.title}>
            <div className="vision-mission-title">{item.title}</div>
            <p className="vision-mission-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionSection;