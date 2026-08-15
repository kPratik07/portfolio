import React from "react";
import "./Projects.css";
import Carousel from "./Carousel";

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
      techStack: [
        "React",
        "Javascript",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini AI",
      ],
      github: "https://github.com/kPratik07/ai-finance-tracker",
      demo: "https://ai-finance-tracker-6jjb.vercel.app/",
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
      techStack: [
        "React",
        "Javascript",
        "Node.js",
        "Groq AI",
        "PDF.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/kPratik07/DocuChat-AI",
      demo: "https://docu-chat-ai-jet.vercel.app/",
    },
    {
      id: 4,
      name: "Attendance Monitoring App",
      description:
        "A full-stack campus attendance platform designed for students and staff, featuring secure JWT authentication, geofenced check-ins, role-based dashboards, real-time alerts, and notification tracking to streamline attendance management and improve campus accountability.",
      image: "/assets/Attendence-monitoring-app.png",
      techStack: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/kPratik07/Attendance-Monitoring-App",
      demo: "https://attendance-monitoring-app-frontend.vercel.app/",
    },
    {
      id: 5,
      name: "HR Dashboard",
      description:
        "A comprehensive employee management system with secure authentication, role-based access control, employee CRUD operations, and real-time analytics with salary analysis and hiring trends.",
      image: "/assets/hr-dashboard.png",
      techStack: [
        "Next.js 14",
        "React 19",
        "Tailwind CSS",
        "NextAuth.js",
        "Prisma",
        "MongoDB",
        "Chart.js",
      ],
      github: "https://github.com/kPratik07/hr-dashboard",
      demo: "https://hr-dashboard-rose-three.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-subtitle">My Recent Projects</p>
      <Carousel projects={projects} />
    </section>
  );
};

export default Projects;
