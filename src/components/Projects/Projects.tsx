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
      name: "AI Finance Tracker",
      description:
        "An intelligent personal finance management application powered by AI, featuring expense tracking, budget planning, financial insights, and automated categorization of transactions.",
      image: "/assets/ai-finance-tracker.png",
      techStack: ["React", "Javascript", "Node.js", "Express", "MongoDB", "Gemini AI"],
      github: "https://github.com/kPratik07/ai-finance-tracker",
      demo: "https://ai-finance-tracker-rosy.vercel.app/",
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
      name: "DocuChat AI",
      description:
        "An AI-powered document chat application that allows users to upload documents and have intelligent conversations with their content using advanced natural language processing.",
      image: "/assets/document-chat-ai.png",
      techStack: ["React", "Javascript", "Node.js", "Groq AI", "PDF.js", "Tailwind CSS"],
      github: "https://github.com/kPratik07/DocuChat-AI",
      demo: "https://docu-chat-ai-jet.vercel.app/",
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
