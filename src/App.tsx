import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <TechStacks />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
