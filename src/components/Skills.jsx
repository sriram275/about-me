import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5 & CSS3', level: '95%' },
        { name: 'JavaScript (ES6+)', level: '90%' },
        { name: 'React.js', level: '85%' },
        { name: 'Next.js', level: '80%' },
        { name: 'TypeScript', level: '75%' }
      ],
      glowClass: 'glow-frontend'
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js / Express', level: '85%' },
        { name: 'REST APIs & GraphQL', level: '90%' },
        { name: 'PostgreSQL / SQL', level: '80%' },
        { name: 'MongoDB / NoSQL', level: '85%' },
        { name: 'Firebase', level: '80%' }
      ],
      glowClass: 'glow-backend'
    },
    {
      title: 'DevOps & Tooling',
      skills: [
        { name: 'Git & GitHub', level: '90%' },
        { name: 'Docker', level: '70%' },
        { name: 'CI/CD Pipelines', level: '75%' },
        { name: 'Webpack / Vite', level: '85%' },
        { name: 'AWS Services', level: '70%' }
      ],
      glowClass: 'glow-devops'
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills &amp; Tech Stack</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className={`skills-category-card glass-card ${category.glowClass}`}>
            <h3 className="category-title">{category.title}</h3>
            
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar-fill"
                      style={{ '--skill-width': skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
