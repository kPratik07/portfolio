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
            I completed my B.Tech. in Electrical and Electronics Engineering
            (2019) from IEM Kolkata. I worked as an Associate Software Developer
            at Masai School, where I built multiple IIT pages, migrated the
            Masai main website to Astro, and developed the “Hire From Us” page
            along with scalable dashboards and internal tools. I have experience
            migrating applications using React, Svelte, Astro, Tailwind, and
            TypeScript, integrated with Node.js, Express, REST APIs, MongoDB,
            and MySQL. I have also deployed personal full-stack projects on
            Vercel, Netlify, and Render, gaining hands-on experience in
            end-to-end development and deployment. Additionally, I am
            comfortable with AI-powered tools like Cursor, GitHub Copilot,
            Windsurf, and Zed for AI-assisted coding and collaboration, which
            help me boost quality and speed. I enjoy solving complex problems,
            crafting seamless user experiences, and collaborating in Agile teams
            to deliver impactful solutions.
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
