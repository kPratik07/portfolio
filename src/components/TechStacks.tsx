import React from "react";

const TechStacks: React.FC = () => {
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Svelte",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
  ];

  const descriptions: Record<string, string> = {
    React:
      "Building interactive and responsive UIs with React and modern best practices.",
    JavaScript:
      "Proficient in JavaScript (ES6+) for building dynamic and efficient applications.",
    TypeScript:
      "Writing type-safe code for scalable and maintainable applications.",
    "Node.js": "Creating scalable server-side applications and REST APIs.",
    "Express.js": "Fast and minimal framework for building RESTful APIs.",
    MongoDB: "NoSQL database for flexible and scalable data storage.",
    MySQL: "Relational database management and querying.",
    AWS: "Deploying and managing applications on AWS cloud services.",
    Git: "Version control for efficient collaboration and tracking.",
    GitHub: "Code hosting, collaboration and version control.",
    "Tailwind CSS": "Utility-first CSS framework for rapid UI development.",
    Svelte: "Building fast and lightweight user interfaces.",
  };

  return (
    <section
      id="techstacks"
      className="relative isolate min-h-[660px] scroll-mt-0 overflow-hidden bg-gradient-to-b from-white via-[#fcfcff] to-[#f7f4ff] px-5 pb-5 pt-12 sm:px-8 sm:pb-7 sm:pt-24 lg:px-10 lg:pb-4 lg:pt-20"
    >
      <div className="pointer-events-none absolute left-7 h-16 w-16 opacity-45 [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:9px_9px]" />
      <div className="pointer-events-none absolute right-[5%] top-10 h-[360px] w-[360px] rounded-full border border-violet-200/35" />
      <div className="pointer-events-none absolute right-[8%] top-28 h-[280px] w-[280px] rounded-full border border-violet-100/45" />
      <div className="relative z-10 mx-auto max-w-[940px]">
        <header className="mb-5 text-center sm:mb-6">
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Stacks
            </span>
          </h1>
          <div className="mx-auto mt-1.5 flex max-w-[480px] items-center justify-center gap-3 text-sm text-slate-600">
            <span className="h-px flex-1 bg-violet-200" />
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="whitespace-nowrap">I am well-versed in</span>
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="h-px flex-1 bg-violet-200" />
          </div>
        </header>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3.5">
          {technologies.map((tech) => (
            <article
              key={tech.name}
              className="flex min-h-[164px] flex-col items-center rounded-xl border border-white bg-white/65 px-2.5 py-2 text-center shadow-[0_10px_25px_rgba(91,75,160,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative isolate flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-violet-100 bg-white p-1 shadow-[0_5px_15px_rgba(91,75,160,0.09)]">
                {tech.name === "TypeScript" ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 rounded-full"
                  >
                    <circle cx="12" cy="12" r="12" fill="#1688c7" />
                    <text
                      x="12"
                      y="15.5"
                      textAnchor="middle"
                      fontSize="8"
                      fontWeight="700"
                      fill="white"
                    >
                      TS
                    </text>
                  </svg>
                ) : tech.name === "JavaScript" ? (
                  <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-[#f7df1e] p-0.5 text-[10px] font-bold leading-none text-slate-900">
                    <span>JS</span>
                  </span>
                ) : tech.name === "AWS" ? (
                  <span className="flex h-6 w-6 flex-col items-center justify-center overflow-hidden rounded-full leading-none text-slate-700">
                    <span className="text-[13px] tracking-[-0.08em]">aws</span>
                    <span className="mt-0.5 h-0.5 w-[14px] rounded-full bg-amber-500" />
                  </span>
                ) : (
                  <img
                    src={tech.icon}
                    alt=""
                    className="h-8 w-8 rounded-full object-contain"
                  />
                )}
              </div>
              <h2 className="mt-1 text-[13px] font-bold text-slate-900">
                {tech.name}
              </h2>
              <span className="mt-1 h-0.5 w-5 bg-violet-600" />
              <p className="mt-1 text-[10px] leading-[1.35] text-slate-700">
                {descriptions[tech.name]}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-col items-start gap-2 rounded-xl border border-white bg-violet-50/65 px-5 py-3 shadow-[0_8px_22px_rgba(91,75,160,0.07)] sm:flex-row sm:items-center">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-base text-white">
            ⚒
          </span>
          <div>
            <h3 className="text-sm font-bold text-violet-600">
              Other Tools &amp; Technologies
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-700">
              Docker <b className="px-2 text-violet-500">•</b> REST APIs{" "}
              <b className="px-2 text-violet-500">•</b> Postman{" "}
              <b className="px-2 text-violet-500">•</b> GitHub Copilot{" "}
              <b className="px-2 text-violet-500">•</b> Cursor{" "}
              <b className="px-2 text-violet-500">•</b> CI/CD{" "}
              <b className="px-2 text-violet-500">•</b> Agile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
