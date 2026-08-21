import React from "react";

type TechIconName =
  | "react"
  | "node"
  | "mongo"
  | "aws"
  | "javascript"
  | "typescript";

const TechIcon: React.FC<{ name: TechIconName }> = ({ name }) => {
  if (name === "react") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "node") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-emerald-600"
      >
        <path
          d="M12 2.5 20.2 7v10L12 21.5 3.8 17V7L12 2.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <text
          x="12"
          y="14.5"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fill="currentColor"
        >
          JS
        </text>
      </svg>
    );
  }
  if (name === "mongo") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-green-600"
        fill="currentColor"
      >
        <path d="M12.8 2.2c-.2 2.4-1.5 3.4-2.1 5.1-1.1 3.1-.2 6.5 1.3 8.8.5.8.8 1.8.8 3.1 1.4-1.5 2.5-3.7 2.5-6.2 0-3.2-1.2-6.8-2.5-10.8Z" />
        <path d="M11.9 19.1c.1 1.1-.1 1.8-.5 2.7h1.2c.4-.9.5-1.8.2-2.7Z" />
      </svg>
    );
  }
  if (name === "aws") {
    return (
      <svg aria-hidden="true" viewBox="0 0 34 20" className="h-5 w-7">
        <text x="1" y="11" fontSize="10" fontWeight="700" fill="#182230">
          aws
        </text>
        <path
          d="M3 15c7 4 17 4 25-1"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  if (name === "javascript") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
        <rect width="20" height="20" fill="#facc15" />
        <text
          x="10"
          y="14"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#111827"
        >
          JS
        </text>
      </svg>
    );
  }
  if (name === "typescript") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <rect width="24" height="24" rx="2" fill="#1688c7" />
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
    );
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-violet-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 5 5 5v14h4M15 5h4v14h-4" />
    </svg>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="header"
      className="relative overflow-hidden bg-[#fcfcff] px-6 pb-12 pt-28 sm:px-10 lg:min-h-[665px] lg:px-12 lg:pb-10 lg:pt-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(139, 92, 246, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.025) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="pointer-events-none absolute right-[10%] top-20 h-[430px] w-[430px] rounded-full bg-violet-100/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-24 h-[350px] w-[350px] rounded-full border border-violet-200/45" />
      <div className="pointer-events-none absolute right-7 top-24 h-28 w-16 opacity-35 [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:9px_9px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1000px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-7">
        <div className="max-w-[420px] self-center pt-2">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50/70 px-3 py-1.5 text-xs font-semibold text-violet-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Software
            Engineer
          </div>
          <h1 className="mb-5 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[3.6rem]">
            Hi, I&apos;m
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Pratik Raj
            </span>
          </h1>
          <p className="mb-6 max-w-[390px] text-sm leading-6 text-slate-600 sm:text-base">
            I build responsive, scalable, and user-friendly web applications
            that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
            >
              View My Work{" "}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-violet-400 px-5 py-3 text-xs font-semibold text-violet-600 transition hover:bg-violet-50"
            >
              Let&apos;s Connect{" "}
              <i className="fas fa-arrow-up-right-from-square" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[600px] self-center lg:translate-x-2">
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_35px_rgba(91,75,160,0.16)]">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3 text-[11px] text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="mx-auto font-medium">about-me.js</span>
              <i className="far fa-copy text-sm" />
            </div>
            <div className="min-h-[260px] overflow-hidden bg-white p-5 font-mono text-[10px] leading-[1.9] text-slate-600 sm:min-h-[305px] sm:p-7 sm:text-[12px]">
              <p>
                <span className="text-violet-600">const</span> developer = {`{`}
              </p>
              <p className="pl-4">
                <span className="text-violet-600">name</span>:{" "}
                <span className="text-green-600">&quot;Pratik Raj&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-violet-600">role</span>:{" "}
                <span className="text-green-600">
                  &quot;Software Engineer&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                <span className="text-violet-600">experience</span>:{" "}
                <span className="text-green-600">&quot;2 years&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-violet-600">studentsMentored</span>:{" "}
                <span className="text-green-600">&quot;150+&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-violet-600">passion</span>:{" "}
                <span className="text-green-600">
                  &quot;Building meaningful products&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                <span className="text-violet-600">focus</span>: [
                <span className="text-green-600">
                  &quot;Clean Code&quot;, &quot;Scalability&quot;, &quot;Great
                  UX&quot;
                </span>
                ],
              </p>
              <p className="pl-4">
                <span className="text-violet-600">alwaysLearning</span>:{" "}
                <span className="text-violet-600">true</span>
              </p>
              <p>{`};`}</p>
              <p className="mt-3 text-slate-400">
                {"// Code. Solve. Build. Repeat."}
              </p>
            </div>
          </div>
          <div className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl border border-violet-100 bg-white text-lg text-violet-600 shadow-[0_12px_26px_rgba(91,75,160,0.15)]">
            <i className="fas fa-code" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-[0.9fr_1.35fr] lg:col-span-2 lg:grid-cols-[0.8fr_1.2fr] lg:gap-7">
          <div className="grid grid-cols-3 rounded-xl border border-slate-100 bg-white p-2 shadow-[0_10px_25px_rgba(91,75,160,0.08)] lg:w-[calc(100%+24px)]">
            {[
              { value: "2", label: "Years Experience", icon: "fa-clock" },
              {
                value: "150+",
                label: "Students Mentored",
                icon: "fa-user-group",
              },
              {
                value: "35%",
                label: "Performance Improvement",
                icon: "fa-arrow-trend-up",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-0 flex-col items-center border-r border-slate-200 px-1 last:border-0"
              >
                <span className="mb-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-violet-50 text-[10px] text-violet-600">
                  <i className={`fas ${stat.icon}`} />
                </span>
                <strong className="text-lg font-bold text-violet-600">
                  {stat.value}
                </strong>
                <small className="text-center text-[9px] leading-3 text-slate-600">
                  {stat.label}
                </small>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-[0_10px_25px_rgba(91,75,160,0.08)] lg:translate-x-2">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-violet-600">
              Tech Stack
            </p>
            <div className="grid min-h-[28px] translate-y-1 grid-cols-3 items-center gap-1.5 text-[9px] text-slate-600 sm:grid-cols-6">
              {(
                [
                  "react",
                  "node",
                  "mongo",
                  "javascript",
                  "typescript",
                  "aws",
                ] as TechIconName[]
              ).map((name) => (
                <span
                  key={name}
                  className="flex min-h-[26px] items-center justify-center gap-1 border-r border-slate-100 text-center last:border-0 [&>svg]:h-5 [&>svg]:w-5"
                >
                  <TechIcon name={name} />
                  {name === "mongo"
                    ? "MongoDB"
                    : name === "node"
                      ? "Node.js"
                      : name === "javascript"
                        ? "JavaScript"
                        : name === "typescript"
                          ? "TypeScript"
                          : name.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
