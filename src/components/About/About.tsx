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
            I hold a B.Tech. in Electrical and Electronics Engineering (2019) from IEM Kolkata. 
            As an Associate Software Developer at Masai School, I built multiple IIT pages, 
            migrated the main website to Astro, and developed scalable dashboards with internal tools. 
            I specialize in React, TypeScript, Node.js, Express, and modern frameworks like Svelte 
            and Astro, with expertise in MongoDB, MySQL, and REST APIs. I've deployed full-stack 
            projects on Vercel, Netlify, and Render, gaining hands-on experience in end-to-end 
            development. I leverage AI-powered tools like Cursor, GitHub Copilot, and Windsurf to boost 
            productivity. Passionate about solving complex problems and crafting seamless user 
            experiences, I thrive in Agile teams delivering impactful solutions.
          </p>
        </div>

        <div className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Pratik%27s_Photo.png`}
            alt="Pratik Raj"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
