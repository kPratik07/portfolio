import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar">
      <div className="heading-name">
        <h1>Pratik Raj</h1>
      </div>
      <div className={`links ${isMenuOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#techstacks">TechStacks</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="https://drive.google.com/file/d/1jRSfWtRiLNGktUKMOY6P8cHl-dlQ60Qv/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isMenuOpen ? "active" : ""}></div>
        <div className={isMenuOpen ? "active" : ""}></div>
        <div className={isMenuOpen ? "active" : ""}></div>
      </div>
    </nav>
  );
};

export default Header;
