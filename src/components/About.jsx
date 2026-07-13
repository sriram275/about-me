import React from 'react';
import './About.css';

export default function About() {
  const stats = [
    { value: '14+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Built' },
    { value: '4+', label: 'Enterprise Roles' },
    { value: '100%', label: 'Commitment' }
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <div className="about-image-container">
          <div className="image-border-glow"></div>
          <div className="about-image-wrapper">
            <img 
              src="/avatar.jpg" 
              alt="Sriramulu Geddapu profile avatar" 
              className="about-image" 
            />
          </div>
        </div>

        <div className="about-details">
          <h3 className="about-subtitle">Empowering Ideas Through Code</h3>
          
          <p className="about-text">
            Hello! I'm Sriramulu Geddapu, a Principal Software Engineer based in Bengaluru, India. With over 14 years of professional experience across top technology enterprises, my journey has evolved from custom web development to leading engineering initiatives for complex corporate systems.
          </p>
          
          <p className="about-text">
            Throughout my career, I've designed and scaled enterprise systems ranging from Identity & Access Management (IAM) to robust storage administration software (like Dell PowerProtect Data Manager). I enjoy solving complex systems infrastructure challenges as well as building modern web frontends.
          </p>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-card">
                <h4 className="stat-value">{stat.value}</h4>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
