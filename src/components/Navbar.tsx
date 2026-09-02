import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses =
    "whitespace-nowrap text-[11px] font-semibold text-slate-700 transition-colors duration-200 hover:text-violet-600 md:text-[13px]";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("href");

    if (target === "#header") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target?.startsWith("#")) {
      document.getElementById(target.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-[1000] flex h-[72px] w-full items-center justify-between border-b border-slate-100 bg-white/95 px-5 shadow-[0_8px_25px_rgba(76,81,130,0.08)] backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="heading-name flex shrink-0 items-center gap-3 lg:gap-5">
        <img
          src={`${process.env.PUBLIC_URL}/assets/name_logo.png`}
          alt="PR logo"
          className="h-12 w-12 rounded-full object-contain"
        />
        <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          Pratik Raj
        </h1>
      </div>
      <div
        id="primary-navigation"
        className={`fixed right-0 top-20 flex h-auto max-h-[calc(100vh-6rem)] w-3/4 flex-col items-center justify-center gap-6 overflow-y-auto rounded-bl-2xl border-l border-slate-200 bg-white/95 py-6 shadow-2xl backdrop-blur-xl transition-all duration-300 md:static md:flex-1 md:flex-row md:justify-end md:gap-7 md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:py-0 md:shadow-none lg:gap-8 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <a
          href="#header"
          className={`${navLinkClasses} text-violet-600`}
          onClick={handleNavClick}
        >
          Home
        </a>
        <a href="#about" className={navLinkClasses} onClick={handleNavClick}>
          About
        </a>
        <a href="#skills" className={navLinkClasses} onClick={handleNavClick}>
          Skills
        </a>
        <a
          href="#techstacks"
          className={navLinkClasses}
          onClick={handleNavClick}
        >
          Tech Stacks
        </a>
        <a href="#projects" className={navLinkClasses} onClick={handleNavClick}>
          Projects
        </a>
        <a href="#contact" className={navLinkClasses} onClick={handleNavClick}>
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/16A9cpy-ajPN6_7e6l3FHAntUFmulFCTu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-violet-500 px-3.5 py-2 text-[11px] font-semibold text-violet-600 shadow-sm shadow-violet-100 transition hover:bg-violet-50 sm:text-xs"
        >
          Download Resume <i className="fas fa-download" />
        </a>
      </div>
      <button
        type="button"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        className="md:hidden w-11 h-11 p-2 cursor-pointer flex flex-col gap-1.5 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 hover:bg-violet-50 transition-colors z-50"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></div>
      </button>
    </nav>
  );
};

export default Navbar;
