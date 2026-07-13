import React, { useState } from 'react';
import './Showcase.css';

export default function Showcase() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Interactive SaaS Dashboard',
      category: 'fullstack',
      description: 'A real-time financial tracking dashboard showcasing smooth transitions, glassmorphic analytics cards, and live web-socket connections.',
      tags: ['React', 'Node.js', 'WebSockets', 'Chart.js'],
      svgPattern: (
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="400" height="200" fill="url(#grad1)" />
          <path d="M50 150 L120 90 L190 120 L260 50 L330 80" stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="330" cy="80" r="6" fill="#06b6d4" />
          <circle cx="260" cy="50" r="6" fill="#8b5cf6" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#311042" />
            </linearGradient>
          </defs>
        </svg>
      ),
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'AI Code Assistant API Integration',
      category: 'frontend',
      description: 'A web-based markdown editor with embedded AI autocomplete and context-aware suggestions utilizing the Gemini SDK.',
      tags: ['React', 'Gemini API', 'Markdown', 'CSS Grid'],
      svgPattern: (
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="400" height="200" fill="url(#grad2)" />
          <text x="30" y="80" fill="rgba(255,255,255,0.25)" fontFamily="monospace" fontSize="14">const aiAssistant = async () =&gt; &#123;</text>
          <text x="50" y="110" fill="url(#textGrad)" fontFamily="monospace" fontSize="16" fontWeight="bold">  await gemini.generateText();</text>
          <text x="30" y="140" fill="rgba(255,255,255,0.25)" fontFamily="monospace" fontSize="14">&#125;;</text>
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      ),
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'High-Performance Canvas Engine',
      category: 'frontend',
      description: 'An interactive canvas diagram editor built to handle thousands of elements with smooth panning, zooming, and automated node snapping.',
      tags: ['React', 'HTML5 Canvas', 'Algorithms', 'TypeScript'],
      svgPattern: (
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="400" height="200" fill="url(#grad3)" />
          <circle cx="120" cy="100" r="30" stroke="#8b5cf6" strokeWidth="3" fill="rgba(139,92,246,0.1)" />
          <circle cx="280" cy="100" r="30" stroke="#3b82f6" strokeWidth="3" fill="rgba(59,130,246,0.1)" />
          <line x1="150" y1="100" x2="250" y2="100" stroke="#06b6d4" strokeWidth="3" strokeDasharray="6 4" />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>
      ),
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Cloud-Native API Gateway',
      category: 'backend',
      description: 'A high-throughput API controller featuring rate-limiting, custom token bucket validation, and automatic caching policies.',
      tags: ['Node.js', 'Redis', 'Docker', 'Express'],
      svgPattern: (
        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg">
          <rect width="400" height="200" fill="url(#grad4)" />
          <rect x="150" y="50" width="100" height="40" rx="6" stroke="#ec4899" strokeWidth="2" fill="rgba(236,72,153,0.1)" />
          <rect x="70" y="120" width="100" height="40" rx="6" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.1)" />
          <rect x="230" y="120" width="100" height="40" rx="6" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.1)" />
          <path d="M200 90 L200 105 L120 105 L120 120" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <path d="M200 90 L200 105 L280 105 L280 120" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>
        </svg>
      ),
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="showcase" className="section">
      <h2 className="section-title">My Showcase</h2>
      
      {/* Category filters */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
            onClick={() => setFilter(cat.value)}
            id={`filter-btn-${cat.value}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass-card">
            <div className="project-preview">
              {project.svgPattern}
              <div className="project-overlay">
                <a href={project.demoLink} className="project-action-link" aria-label="View demo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a href={project.codeLink} className="project-action-link" aria-label="View code">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
