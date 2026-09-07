import profileImage from './assets/Profilephoto.png'; 
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top button
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowScroll(window.scrollY > 400);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // await axios.post('http://localhost:5000/api/contact', {
      await axios.post('https://your-backend.vercel.app/api/contact', {
        fullName: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ loading: false, success: false, error: null }), 5000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Failed to send message' });
    }
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">My<span className="highlight">Portfolio</span></span>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Aneeq Shams</span>
            </h1>
            <h2 className="hero-subtitle">MERN Stack Developer</h2>
            <p className="hero-description">
              Building scalable web applications with modern technologies. 
              Passionate about clean code and exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                <i className="fas fa-paper-plane"></i> Hire Me
              </a>
              <a href="#projects" className="btn-secondary">
                <i className="fas fa-code"></i> View Work
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
  <div className="profile-card">
    <div className="profile-image">
      <img 
        src={profileImage}  // ← Use the imported variable
        alt="Aneeq Shams" 
        className="profile-img" 
      />
    </div>
 
              <div className="profile-info">
                <h4>Aneeq Shams</h4>
                <p>MERN Stack Developer</p>
                <div className="profile-skills">
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-content">
              <p>
                I’m Aneeq Shams, a Software Engineer student at Sir Syed University of Engineering & Technology, passionate about building modern web applications and solving real-world problems through technology. 

I have hands-on experience with MERN Stack development. I also have experience in Software Quality Assurance, manual testing using JIRA, automation testing using Selenium with Python and MySQL.

I enjoy turning ideas into functional, user-friendly web applications and continuously improving my development and problem-solving skills. Currently, I’m focused on Full-Stack Web Development, AI-powered applications, and modern software engineering practices.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-label">🎓 Education</span>
                  <span>BS in Software Engineering</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📞 Phone</span>
                  <span>03171115465</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📍 Address</span>
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {['MERN Stack Developer', 'WordPress Website Developer','Software Quality Assuarnce', 'Manual Testing', 'Automation Testing', 'MySQL', 'Python', 'Java'].map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-icon">⚡</div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {[
              { title: 'Islamic Charity Optimizer', desc: 'Full-Stack Web Application. A web-based Islamic charity platform designed to help users calculate Zakat and make informed donation decisions based on poverty data.', tech: ['React.js', 'Node.js', 'Express.js', 'JWT', 'JavaScript', 'MongoDB'] },
              { title: 'E-Commerce Platform', desc: 'Full-Stack Web Application. A responsive e-commerce platform designed to provide users with a smooth online shopping experience while allowing products and orders to be managed efficiently.', tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
              { title: 'US Embassy System', desc: 'Desktop/System Application. This is a GUI-based web- application is designed to streamline the process of scheduling passport interviews, tracking application status, and approving or rejecting applicants. The system allows users to register as applicants, schedule interviews, and view the status of their applications.', tech: ['Java', 'OOP', 'MySQL'] }
            ].map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-icon"></div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href="#" className="project-link"></a>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="contact">
  <div className="container">
    <h2 className="section-title" style={{ textAlign: 'center', display: 'block' }}>
      Get in Touch
    </h2>
    <div className="contact-wrapper" style={{ display: 'block' }}>
      <div className="contact-info" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h3>Let's Work Together</h3>
        <p>Have a project in mind? Let's discuss how I can help you.</p>
        
        <div className="contact-item" style={{ justifyContent: 'center' }}>
          <span>📧</span>
          <span>aneeqshams5@gmail.com</span>
        </div>
        
        <div className="contact-social" style={{ justifyContent: 'center' }}>
          <a 
            href="https://github.com/HafizAneeqShams" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/hafizaneeqshams10/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
                href="https://wa.me/923171115465?text=Hi%20Aneeq%2C%20I%20saw%20your%20portfolio!" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
          
      </div>
    </div>
  </div>
</section>

{/* Scroll to top */}
{showScroll && (
  <button className="scroll-top" onClick={scrollToTop}>
    ↑
  </button>
)}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Aneeq Shams. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;