import React, { useState } from "react";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-heading">Contact Me</h1>
      <p className="contact-subtitle">Get In Touch</p>

      <div className="contact-container">
        <div className="contact-info">
          <h1>Let's Connect</h1>
          <p className="intro">
            Let’s connect and create something amazing together, whether it’s
            big or small, for mobile or web. Reach out and let’s make your
            vision a reality!
          </p>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:kpratik071997@email.com">kpratik071997@email.com</a>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+91 9062144984">+91 9062144984</a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/kPratik07"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-raj-543527214/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Updated form for Formspree */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xvgpkbeo"
          method="POST"
        >
          <h2>Send Me Your Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
