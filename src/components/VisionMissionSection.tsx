import React from 'react';

const VisionMissionSection = () => {
  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '100px 20px' }}>
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
            text: 'To innovate and deliver secure, scalable software solutions that empower businesses and individuals to thrive in the digital era.',
          },
          {
            title: 'Vision',
            text: 'To be a pioneering tech force known for cybersecurity, custom-built products, and redefining innovation through digital excellence.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: '450px',
              height: '450px',
              backgroundColor: 'white',
              borderRadius: '28px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.05)',
              padding: '45px',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow =
                '0 35px 60px rgba(0, 191, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 6px 14px rgba(0, 0, 0, 0.05)';
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
