import React from "react";

interface ProjectType {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
}

interface CarouselProps {
  projects: ProjectType[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => (
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
    {projects.slice(0, 3).map((project) => (
      <article
        key={project.id}
        className="flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-[0_12px_30px_rgba(91,75,160,0.10)] transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="mx-3 mt-3 aspect-[16/9] overflow-hidden rounded-xl bg-violet-50">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h2 className="text-base font-bold text-slate-900 sm:text-lg">
            {project.name}
          </h2>
          <p className="mt-2 flex-1 text-xs leading-5 text-slate-600">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-violet-50 px-2 py-1 text-[10px] font-medium text-violet-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-violet-700"
            >
              <i className="fab fa-github" aria-hidden="true" /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-violet-300 px-3 py-2.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-50"
            >
              <i className="fas fa-window-restore" aria-hidden="true" /> Live
              Demo
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default Carousel;
