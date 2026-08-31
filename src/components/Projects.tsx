import React from "react";
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
      name: "DocuChat AI",
      description:
        "An AI-powered document chat application that allows users to upload documents and have intelligent conversations with their content using advanced natural language processing.",
      image: "/assets/DocuChat-AI.png",
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
      id: 3,
      name: "Knowledge Knook",
      description:
        "A modern learning and knowledge platform focused on organizing study material, notes, and resources in a clean digital space with searchable, structured content discovery.",
      image: "/assets/knowledge-knook.png",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "AI"],
      github: "https://github.com/kPratik07/knowledge-knook",
      demo: "https://knowledge-knook.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative isolate min-h-screen scroll-mt-0 overflow-hidden bg-gradient-to-b from-white via-[#fcfcff] to-[#f7f4ff] px-5 pb-4 pt-8 sm:px-8 sm:pb-6 sm:pt-12 lg:min-h-screen lg:px-14 lg:pb-3 lg:pt-12"
    >
      <div className="pointer-events-none absolute left-7 top-8 h-16 w-16 opacity-45 [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:9px_9px]" />
      <div className="pointer-events-none absolute right-[5%] top-10 h-[360px] w-[360px] rounded-full border border-violet-200/35" />
      <div className="relative z-10 mx-auto max-w-[1000px]">
        <header className="mb-3 text-center sm:mb-4">
          <h1 className="text-3xl font-bold tracking-[-0.04em] text-slate-950 [text-shadow:0_2px_0_rgba(124,58,237,0.05)] sm:text-5xl">
            Projects
          </h1>
          <div className="mx-auto mt-2 flex max-w-[520px] items-center justify-center gap-3 text-sm text-slate-600">
            <span className="h-px flex-1 bg-violet-200" />
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="whitespace-nowrap text-violet-600">
              My Recent Projects
            </span>
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="h-px flex-1 bg-violet-200" />
          </div>
          <p className="mx-auto mt-2 max-w-[610px] text-xs leading-5 text-slate-600 sm:text-sm">
            Building impactful projects that solve real-world problems with
            technology.
          </p>
        </header>
        <Carousel projects={projects} />
        <a
          href="https://github.com/kPratik07?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-lg border border-violet-300 bg-white px-5 py-2 text-xs font-semibold text-violet-600 shadow-[0_6px_16px_rgba(91,75,160,0.10)] transition hover:bg-violet-50"
        >
          View More Projects <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
