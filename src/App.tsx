import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import TechStacks from "./components/Techstacks/TechStacks";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <TechStacks />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Pratik Raj❤️. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
