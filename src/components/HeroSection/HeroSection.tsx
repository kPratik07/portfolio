import React from "react";
import "./HeroSection.css";

const About: React.FC = () => {
  return (
    <section id="header">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="header-content">
        <h3>Hey there! I'm</h3>
        <h1>Pratik Raj</h1>
        <p>
          And I'm a <span className="hero-highlight">Full Stack Web Developer!</span>
        </p>
        <button
          className="resume-btn"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/14haBqHdO8x9uHm_RpAV_1vv_4SLu6Eem/view?usp=sharing",
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
