import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        {/* Contact info details */}
        <div className="contact-info glass-card">
          <h3 className="info-title">Let's Connect</h3>
          <p className="info-text">
            I am always open to discussing new web development opportunities, collaborative ideas, or mentoring projects. Drop me a line, and let's create something extraordinary together!
          </p>
          
          <div className="social-links">
            <a href="mailto:sriramulu.geddapu@example.com" className="social-icon" aria-label="Email Address" id="contact-email-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form glass-card">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-input" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your name" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your email" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-input text-area" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your message details..." 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary form-submit-btn" 
            disabled={status === 'sending'}
            id="contact-submit-btn"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="form-alert success">
              Message sent successfully! I will get back to you shortly.
            </div>
          )}

          {status === 'error' && (
            <div className="form-alert error">
              Please fill in all the details before submitting.
            </div>
          )}
        </form>
      </div>

      <footer className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Sriramulu Geddapu. Built with React.</p>
      </footer>
    </section>
  );
}
