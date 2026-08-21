import React from "react";

type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Icon: React.FC<{ type: string }> = ({ type }) => {
  const common = "h-12 w-12";
  if (type === "react")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className={`${common} text-sky-400`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <ellipse cx="24" cy="24" rx="20" ry="8" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
      </svg>
    );
  if (type === "javascript")
    return (
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-yellow-400 p-1 text-lg font-bold leading-none text-slate-900">
        JS
      </span>
    );
  if (type === "node")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className={`${common} text-emerald-600`}
        fill="none"
      >
        <path
          d="m24 4 17 10v20L24 44 7 34V14L24 4Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <text
          x="24"
          y="29"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="currentColor"
        >
          JS
        </text>
      </svg>
    );
  if (type === "express")
    return <span className="text-sm font-medium text-slate-600">express</span>;
  if (type === "mongo")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className={`${common} text-green-500`}
        fill="currentColor"
      >
        <path d="M26 3c-1 7-6 10-7 17-1 8 2 14 6 19 2-4 5-8 5-14 0-7-2-14-4-22Z" />
        <path d="M24 35c1 4 0 7-2 10h4c1-4 1-7-2-10Z" />
      </svg>
    );
  if (type === "mysql")
    return <span className="text-sm font-semibold text-sky-700">MySQL</span>;
  if (type === "aws")
    return (
      <span className="flex h-10 w-10 flex-col items-center justify-center overflow-hidden leading-none text-slate-700">
        <span className="text-lg font-medium lowercase tracking-tight">
          aws
        </span>
        <span className="mt-1 h-0.5 w-7 rounded-full bg-amber-500" />
      </span>
    );
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={`${common} text-slate-900`}
      fill="currentColor"
    >
      <path d="M24 5C13.5 5 5 13.7 5 24.5c0 8.6 5.4 15.9 12.9 18.5.9.2 1.2-.4 1.2-.9v-3.2c-5.2 1.2-6.3-2.2-6.3-2.2-.8-2.1-2.1-2.7-2.1-2.7-1.7-1.2.1-1.2.1-1.2 1.8.1 2.7 1.9 2.7 1.9 1.6 2.7 4.1 1.9 5.1 1.5.2-1.2.6-1.9 1.1-2.3-4.2-.5-8.6-2.1-8.6-9.4 0-2.1.7-3.8 1.9-5.2-.2-.5-.8-2.5.2-5.1 0 0 1.5-.5 5.2 2a17.5 17.5 0 0 1 9.5 0c3.6-2.5 5.1-2 5.1-2 1 2.6.4 4.6.2 5.1 1.2 1.4 1.9 3.1 1.9 5.2 0 7.3-4.4 8.9-8.6 9.4.7.6 1.2 1.7 1.2 3.5v5.2c0 .5.3 1.1 1.2.9A19.5 19.5 0 0 0 43 24.5C43 13.7 34.5 5 24 5Z" />
    </svg>
  );
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      title: "React",
      description:
        "Building interactive and responsive UIs with React and modern best practices.",
      icon: <Icon type="react" />,
    },
    {
      title: "JavaScript",
      description:
        "Proficient in JavaScript (ES6+) for building dynamic and efficient applications.",
      icon: <Icon type="javascript" />,
    },
    {
      title: "Node.js",
      description:
        "Developing scalable backend services and REST APIs with Node.js.",
      icon: <Icon type="node" />,
    },
    {
      title: "Express.js",
      description:
        "Creating robust RESTful APIs and middleware with Express.js.",
      icon: <Icon type="express" />,
    },
    {
      title: "MongoDB",
      description:
        "Working with MongoDB for flexible and scalable database solutions.",
      icon: <Icon type="mongo" />,
    },
    {
      title: "MySQL",
      description: "Designing and querying relational databases with MySQL.",
      icon: <Icon type="mysql" />,
    },
    {
      title: "AWS",
      description: "Deploying and managing applications on AWS cloud services.",
      icon: <Icon type="aws" />,
    },
    {
      title: "Git & GitHub",
      description:
        "Version control, collaboration and CI/CD with Git & GitHub.",
      icon: <Icon type="github" />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative isolate min-h-[600px] scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-[#fcfcff] to-[#f7f4ff] px-6 py-10 sm:px-10 lg:px-14 lg:py-2"
    >
      <div className="pointer-events-none absolute  left-6 h-16 w-16 opacity-45 [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:9px_9px] " />
      <div className="pointer-events-none absolute right-[5%] top-14 h-[360px] w-[360px] rounded-full border border-violet-200/25" />
      <div className="pointer-events-none absolute right-[8%] top-32 h-[280px] w-[280px] rounded-full border border-violet-100/35" />
      <div className="relative z-10 mx-auto max-w-[1100px] lg:translate-y-[6px]">
        <header className="mb-6 text-center sm:mb-7">
          <h1 className="text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Skills
          </h1>
          <div className="mx-auto mt-1.5 flex max-w-[520px] items-center justify-center gap-2 text-xs text-slate-500 sm:text-sm">
            <span className="h-px flex-1 bg-violet-200" />
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="whitespace-nowrap">I bring with me</span>
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="h-px flex-1 bg-violet-200" />
          </div>
        </header>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="flex min-h-[175px] flex-col items-center rounded-2xl border border-white bg-white/65 px-4 py-3 text-center shadow-[0_10px_25px_rgba(91,75,160,0.09)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full border border-violet-100 bg-white p-1 shadow-[0_5px_15px_rgba(91,75,160,0.10)]">
                {skill.icon}
              </div>
              <h2 className="mt-2 text-sm font-bold text-slate-900 sm:text-base">
                {skill.title}
              </h2>
              <span className="mt-1.5 h-0.5 w-5 bg-violet-600" />
              <p className="mt-2 max-w-[210px] text-[11px] leading-4 text-slate-700">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-col items-start gap-2 rounded-2xl border border-white bg-violet-50/65 px-4 py-3 shadow-[0_8px_22px_rgba(91,75,160,0.07)] sm:flex-row sm:items-center sm:px-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500 text-sm text-white">
            &lt;/&gt;
          </span>
          <div className="min-w-0">
            <h3 className="text-xs font-bold text-violet-600 sm:text-sm">
              Other Tools &amp; Technologies
            </h3>
            <p className="mt-0.5 text-[11px] leading-4 text-slate-700 sm:text-xs">
              TypeScript <b className="px-2 text-violet-500">•</b> Svelte{" "}
              <b className="px-2 text-violet-500">•</b> REST APIs{" "}
              <b className="px-2 text-violet-500">•</b> Postman{" "}
              <b className="px-2 text-violet-500">•</b> Cursor{" "}
              <b className="px-2 text-violet-500">•</b> GitHub Copilot{" "}
              <b className="px-2 text-violet-500">•</b> Windsurf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
