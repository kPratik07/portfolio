import React from "react";
import "./Projects.css";

interface ProjectType {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      name: "BuildHub",
      description:
        "A comprehensive construction project management platform featuring real-time progress tracking, team collaboration tools, and resource management capabilities.",
      image: "/assets/BuildHub.png",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
      github: "https://github.com/babureddyg2308/BuildHub_Rct104",
      demo: "https://rctapp-dien.vercel.app/",
    },
    {
      id: 2,
      name: "Knowledge Knook",
      description:
        "An interactive e-learning platform connecting students with educators, featuring live sessions, course management, and progress tracking.",
      image: "/assets/Knowledge_Knook.png",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/kPratik07/LG-Legends_053-NEM104-",
      demo: "https://lg-legends-053-nem-104.vercel.app/",
    },
    {
      id: 3,
      name: "Vendor-Management-System",
      description:
        "A high-performance vendor management platform for handling large-scale data with a modern, user-friendly interface",
      image: "/assets/vms.png",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "ShadCN UI"],
      github: "https://github.com/kPratik07/Vendor-Management-System",
      demo: "https://vendor-management-system-5ptv.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-subtitle">My Recent Projects</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img
                src={`${process.env.PUBLIC_URL}${project.image}`}
                alt={project.name}
              />
            </div>

            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
