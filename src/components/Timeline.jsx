import React, { useState } from 'react';
import './Timeline.css';

export default function Timeline() {
  const [expandedId, setExpandedId] = useState(null);

  const journeyData = [
    {
      id: 1,
      year: '2012 - 2015',
      title: 'Senior Web Developer',
      subtitle: 'Softscript Solutions (Visakhapatnam)',
      summary: 'Crafted web solutions from concept to launch, managing entire architectures, responsive UI, and feature sets.',
      details: 'Designed and built custom client websites from the ground up. Directed home page designs, layout architecture, and custom interaction functionalities. Established modular styling systems and managed deployment lifecycles for multiple small-to-medium business sites.'
    },
    {
      id: 2,
      year: '2015 - 2016',
      title: 'Programming Analyst',
      subtitle: 'EXILANT Technologies (Bengaluru)',
      summary: 'Engineered web applications and user portals, focusing on modular code quality and team integration.',
      details: 'Contributed to professional software consulting and custom systems engineering. Developed dynamic frontend dashboards, analyzed system requirements, and built clean backend endpoints using modern JavaScript ecosystem libraries.'
    },
    {
      id: 3,
      year: '2016 - 2022',
      title: 'Technical Lead',
      subtitle: 'Micro Focus (Bengaluru)',
      summary: 'Directed engineering for enterprise Identity & Access Management (IAM) software suites.',
      details: 'Spearheaded technical development and alignment of secure access management solutions. Drove decisions on security protocols, authentication microservices, and user-centric IAM frontends. Mentored mid-level engineers and coordinated release schedules with cross-functional global teams.'
    },
    {
      id: 4,
      year: '2022 - Present',
      title: 'Principal Software Engineer',
      subtitle: 'Dell EMC (Bengaluru)',
      summary: 'Leading development for Dell PowerProtect Data Manager storage administration systems.',
      details: 'Currently responsible for architectural leadership and feature scaling of Dell PowerProtect Data Manager. Developing robust enterprise data backup systems, handling cloud-native integration challenges, and designing scalable storage cluster analytics dashboards.'
    }
  ];

  const handleToggle = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="journey" className="section">
      <h2 className="section-title">My Journey</h2>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {journeyData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isExpanded = expandedId === item.id;
          
          return (
            <div 
              key={item.id} 
              className={`timeline-item ${isLeft ? 'left' : 'right'} ${isExpanded ? 'expanded' : ''}`}
            >
              <div className="timeline-marker">
                <span className="marker-core"></span>
              </div>
              
              <div 
                className="timeline-content glass-card"
                onClick={() => handleToggle(item.id)}
              >
                <div className="timeline-header">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-item-title">{item.title}</h3>
                  <h4 className="timeline-item-subtitle">{item.subtitle}</h4>
                </div>
                
                <p className="timeline-summary">{item.summary}</p>
                
                {isExpanded && (
                  <div className="timeline-details-extended">
                    <p>{item.details}</p>
                  </div>
                )}
                
                <button 
                  className="timeline-expand-btn"
                  aria-expanded={isExpanded}
                  id={`timeline-btn-${item.id}`}
                >
                  {isExpanded ? 'Show Less' : 'Read Full Story'}
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
