import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative isolate min-h-[680px] scroll-mt-0 overflow-hidden bg-[#fcfcff] px-6 py-4 sm:px-10 sm:py-8 lg:min-h-[550px] lg:px-14 lg:py-10"
    >
      <div className="pointer-events-none absolute left-8 top-24 h-14 w-16 opacity-45 [background-image:radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:9px_9px]" />
      <div className="pointer-events-none absolute right-[5%] top-24 h-[380px] w-[380px] rounded-full border border-violet-200/40" />
      <div className="pointer-events-none absolute right-[8%] top-44 h-[300px] w-[300px] rounded-full border border-violet-100/50" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1380px] flex-col">
        <header className="mb-7 shrink-0 pt-4 text-center lg:pt-16">
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mx-auto mt-2 flex max-w-[680px] items-center justify-center gap-3 text-xs text-slate-600 sm:text-sm">
            <span className="h-px min-w-24 flex-1 bg-violet-300" />
            <span className="h-2 w-2 rounded-full bg-violet-300" />
            <span>Get to know me better</span>
            <span className="h-2 w-2 rounded-full bg-violet-300" />
            <span className="h-px min-w-24 flex-1 bg-violet-300" />
          </div>
        </header>

        <div className="grid flex-1 items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:gap-20">
          <div className="pt-1 lg:pt-3">
            <span className="inline-flex rounded-md bg-violet-100 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-600">
              Who I am
            </span>
            <h3 className="mt-5 max-w-[700px] text-2xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-3xl lg:text-[2.35rem]">
              I&apos;m Pratik Raj, a{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h3>
            <p className="mt-3 max-w-[680px] text-sm leading-6 text-slate-600">
              I&apos;m a Software Engineer with 2 years of experience building
              scalable, production-ready web applications.
            </p>
            <div className="my-5 h-0.5 w-8 bg-violet-600" />
            <div className="max-w-[700px] space-y-3 text-xs leading-5 text-slate-600 sm:text-[13px]">
              <p>
                Currently at CipherSchools, I&apos;ve built 15+ React and
                TypeScript features, developed 10+ reusable components, and
                mentored 150+ developers through live sessions and frontend
                workshops. At Masai School, I migrated 10+ production pages,
                improving load speed by 35%, and built analytics dashboards that
                reduced manual reporting time by 50%.
              </p>
              <p>
                My core expertise includes{" "}
                <strong className="text-violet-600">
                  React, TypeScript, JavaScript, Node.js, Express, MongoDB,
                  MySQL, and REST APIs
                </strong>
                , with hands-on experience in Svelte, AWS, and modern deployment
                platforms. I also use Cursor, GitHub Copilot, and Windsurf to
                improve development productivity.
              </p>
              <p>
                I&apos;m passionate about solving complex problems, building
                intuitive user experiences, and delivering impactful products in
                Agile environments.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-[0_16px_35px_rgba(91,75,160,0.12)] lg:mt-6 lg:translate-x-4 lg:justify-self-end">
            <div className="aspect-square overflow-hidden bg-violet-100/70">
              <img
                src={`${process.env.PUBLIC_URL}/assets/passport-image.png`}
                alt="Pratik Raj"
                className="h-full w-full -translate-y-2 scale-[1.08] object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-3 bg-white px-2 py-3 sm:px-3">
              <div className="border-r border-slate-200 text-center">
                <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                  <i className="fas fa-code" />
                </span>
                <strong className="mt-1 block text-[10px] text-slate-800">
                  Clean Code
                </strong>
                <small className="mt-1 block text-[9px] text-slate-500">
                  Quality First
                </small>
              </div>
              <div className="border-r border-slate-200 text-center">
                <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                  <i className="fas fa-arrow-trend-up" />
                </span>
                <strong className="mt-1 block text-[10px] text-slate-800">
                  Problem Solver
                </strong>
                <small className="mt-1 block text-[9px] text-slate-500">
                  Think · Build · Optimize
                </small>
              </div>
              <div className="text-center">
                <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-600">
                  <i className="fas fa-user-group" />
                </span>
                <strong className="mt-1 block text-[10px] text-slate-800">
                  Team Player
                </strong>
                <small className="mt-1 block text-[9px] text-slate-500">
                  Collaborate · Grow
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
