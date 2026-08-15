import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
        <p className="subtitle">A Brief Info</p>
      </div>

      <div className="about-container">
        <div className="about-left">
          <h3>
            I am Pratik Raj and I'm a{" "}
            <span className="highlight">Full stack web Developer!</span>
          </h3>
          <p>
            I’m a Software Engineer with 2 years of professional experience
            building scalable, production-ready web applications. Currently at
            CipherSchools, I’ve developed 15+ React and TypeScript features,
            built 10+ reusable React components, and mentored 500+ developers
            through live coding sessions and frontend workshops. Previously at
            Masai School, I migrated 10+ production pages, improving load speed
            by 35%, and developed analytics dashboards that reduced manual
            reporting time by 50%. My core expertise includes React, TypeScript,
            JavaScript, Node.js, Express, MongoDB, MySQL, and REST APIs, with
            hands-on experience in Svelte, AWS, and modern deployment platforms.
            I also leverage Cursor, GitHub Copilot, and Windsurf to improve
            development productivity. Passionate about solving complex problems,
            building intuitive user experiences, and delivering impactful
            products in Agile environments.
          </p>
        </div>

        <div className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Passport_photo.jpg`}
            alt="Pratik Raj"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
