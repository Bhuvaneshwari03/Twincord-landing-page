import React from 'react';

const VisionMissionSection = () => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#3b3b3b',
          marginBottom: '10px'
        }}>
          Vision & Mission
        </h2>
        <div style={{
          width: '80px',
          height: '5px',
          backgroundColor: '#00bfff',
          margin: '0 auto 40px',
          borderRadius: '2px'
        }} />

        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#3b3b3b',
            marginBottom: '10px'
          }}>
            Mission Statement
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#555',
            lineHeight: '1.6'
          }}>
            To innovate and deliver secure, scalable software solutions that empower businesses and individuals in the digital era.
          </p>
        </div>

        <div>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#3b3b3b',
            marginBottom: '10px'
          }}>
            Vision Statement
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#555',
            lineHeight: '1.6'
          }}>
            To be a leading technology company known for pioneering cybersecurity products and delivering custom software that redefines innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
