import React from "react";
import "./Skills.css";

type Skill = {
  title: string;
  subtitle: string;
  iconClass: string; // Font Awesome icon class
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      title: "React",
      subtitle: "Proficient in React",
      iconClass: "fa-brands fa-react",
    },
    {
      title: "JavaScript",
      subtitle: "Proficient in JavaScript.",
      iconClass: "fa-brands fa-js",
    },
    {
      title: "Node.js",
      subtitle: "Proficient in Node.js",
      iconClass: "fa-brands fa-node-js",
    },
  ];

  return (
    <section className="skills-section">
      <h1 id="skills">Skills</h1>
      <p className="skills-subtitle">I bring with me</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <i className={skill.iconClass} aria-hidden="true"></i>
            </div>
            <h2>{skill.title}</h2>
            <p className="skill-subtitle">{skill.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
