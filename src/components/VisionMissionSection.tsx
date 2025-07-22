import React from 'react';

const VisionMissionSection = () => {
  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '80px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#3b3b3b',
            marginBottom: '12px',
          }}
        >
          Vision & Mission
        </h2>
        <div
          style={{
            width: '70px',
            height: '6px',
            backgroundColor: '#00bfff',
            margin: '0 auto',
            borderRadius: '3px',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '50px',
        }}
      >
        {[
          {
            title: 'Mission',
            text: 'To innovate and deliver secure, scalable software solutions that empower businesses and individuals in the digital era.',
          },
          {
            title: 'Vision',
            text: 'To be a leading technology company known for pioneering cybersecurity products and delivering custom software that redefines innovation.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: '450px',
              height: '450px',
              backgroundColor: 'white',
              borderRadius: '24px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
              padding: '35px',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow =
                '0 25px 45px rgba(0, 191, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 10px rgba(0, 0, 0, 0.05)';
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#00bfff' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '16px', color: '#444', marginTop: '20px', lineHeight: '1.5' }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionSection;
