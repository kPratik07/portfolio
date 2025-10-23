import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kPratik07",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pratik-raj-543527214/",
      icon: "fab fa-linkedin",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Pratik Raj</h2>
            <p>Full Stack Web Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-section quick-links-section">
              <h3>Quick Links</h3>
              <ul className="quick-links-list">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Connect</h3>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={link.name.toLowerCase()}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Pratik Raj. All rights reserved.
          </p>
          <p className="made-with">
            Made with <span className="heart">❤️</span> using React & TypeScript
          </p>
        </div>

        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
