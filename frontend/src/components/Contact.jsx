import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ fullName: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: null });
        }, 5000);
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.error || 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        <i className="fas fa-paper-plane"></i> Get in Touch
      </h2>
      
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I'm always interested in hearing about new opportunities, collaborations, or just a friendly chat.</p>
          
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>hello@yourportfolio.com</span>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Remote / Open to Relocate</span>
          </div>
          
          <div className="social-links">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-dev"></i></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              disabled={status.loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              disabled={status.loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="5"
              disabled={status.loading}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={status.loading}>
            {status.loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Send Message
              </>
            )}
          </button>

          {status.success && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              Message sent successfully!
            </div>
          )}

          {status.error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {status.error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;