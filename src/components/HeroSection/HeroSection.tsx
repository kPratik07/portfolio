import React from "react";
import "./HeroSection.css";

const About: React.FC = () => {
  return (
    <section id="header">
      <div className="header-content">
        <h3>Hey there! I'm</h3>
        <h1>Pratik Raj</h1>
        <p>
          And I'm a <span className="highlight">Full Stack Web Developer!</span>
        </p>
        <button
          className="resume-btn"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1H5lqlOUC4LD-DExhkgDXJgU7ihJa1g9x/view?usp=drive_link",
              "_blank"
            )
          }
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default About;
