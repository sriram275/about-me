import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Orbs for Deep Space depth */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-glow"></span>
          <span className="badge-text">Available for Opportunities</span>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="highlight-text">Sriramulu Geddapu</span>
        </h1>
        
        <p className="hero-subtitle">
          Principal Software Engineer crafting scalable storage management applications and premium full-stack web architectures.
        </p>

        <div className="hero-ctas">
          <button 
            id="hero-cta-showcase" 
            className="btn btn-primary" 
            onClick={() => handleScrollTo('showcase')}
          >
            Explore My Work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button 
            id="hero-cta-contact" 
            className="btn btn-secondary" 
            onClick={() => handleScrollTo('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator" onClick={() => handleScrollTo('about')}>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}
