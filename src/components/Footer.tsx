import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kPratik07",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pratik-raj-dev07/",
      icon: "fab fa-linkedin",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#header", icon: "fa-house" },
    { label: "About", href: "#about", icon: "fa-user" },
    { label: "Skills", href: "#skills", icon: "fa-code" },
    { label: "Projects", href: "#projects", icon: "fa-briefcase" },
    { label: "Contact", href: "#contact", icon: "fa-envelope" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-700/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500" />
      <div className="relative mx-auto max-w-6xl px-6 py-5 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-[1.45fr_1fr_1fr] md:gap-8">
          <div className="flex items-start gap-5">
            <img
              src={`${process.env.PUBLIC_URL}/assets/passport-image.png`}
              alt="Pratik Raj"
              className="h-[72px] w-[72px] shrink-0 rounded-full border-2 border-violet-500 object-cover object-top p-0.5"
            />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Pratik Raj
              </h2>
              <p className="mt-1 text-base font-medium text-violet-400">
                Software Engineer
              </p>
              <p className="mt-3 max-w-xs text-sm leading-5 text-slate-400">
                I build responsive, scalable, and user-friendly web applications
                that solve real-world problems.
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-slate-400">
                <a
                  href="mailto:kpratik071997@gmail.com"
                  className="flex items-center gap-3 transition-colors hover:text-violet-300"
                >
                  <i className="fas fa-envelope w-4 text-violet-400" />{" "}
                  kpratik071997@gmail.com
                </a>
                <span className="flex items-center gap-3">
                  <i className="fas fa-location-dot w-4 text-violet-400" />{" "}
                  India
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="mb-3 w-fit border-b-2 border-violet-500 pb-2 text-xl font-bold text-white">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 border-b border-slate-700/50 py-1 text-sm text-slate-300 transition-colors hover:text-violet-300"
                  >
                    <i className={`fas ${link.icon} w-4 text-violet-400`} />{" "}
                    {link.label}
                    <i className="fas fa-chevron-right ml-auto text-xs text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 w-fit border-b-2 border-violet-500 pb-2 text-xl font-bold text-white">
              Connect
            </h3>
            <p className="mb-3 text-sm text-slate-400">
              Let&apos;s connect and build something amazing!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`flex h-14 w-14 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-2xl transition-all hover:-translate-y-1 hover:border-violet-500 ${link.name === "LinkedIn" ? "text-[#0A66C2] hover:text-[#70B7FF]" : "text-white hover:text-violet-300"}`}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-slate-700/70 pt-4 text-center">
          <p className="text-sm text-slate-400">
            © {currentYear} Pratik Raj. All rights reserved.
          </p>
          <p className="mt-1 flex items-center justify-center gap-2 text-sm text-slate-400">
            Made with <i className="fas fa-heart text-rose-500" /> using{" "}
            <span className="text-violet-400">React &amp; Tailwind CSS</span>
          </p>
        </div>

        <button
          className="absolute bottom-7 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-lg text-white shadow-lg transition-transform hover:-translate-y-1 sm:right-8"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
