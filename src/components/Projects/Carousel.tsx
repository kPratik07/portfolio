import React, { useState } from "react";
import "./Carousel.css";

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

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      
      // Adjust currentIndex when switching views to prevent showing incomplete cards
      const newCardsPerView = newIsMobile ? 1 : 3;
      const newMaxIndex = newIsMobile ? projects.length - 1 : projects.length - newCardsPerView;
      
      setCurrentIndex((prevIndex) => {
        if (prevIndex > newMaxIndex) {
          return newMaxIndex;
        }
        return prevIndex;
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projects.length]);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = isMobile ? projects.length - 1 : projects.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0; // Loop back to start
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return maxIndex; // Go to last position
      }
      return prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getTransformValue = () => {
    if (isMobile) {
      return currentIndex * 100;
    }
    return currentIndex * 33.333;
  };

  return (
    <div className="carousel-container">
      <div className="projects-carousel">
        <div className="projects-carousel-wrapper">
          <div
            className="projects-track"
            style={{
              transform: `translateX(-${getTransformValue()}%)`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech-stack">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-link"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="carousel-button carousel-button-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="carousel-button carousel-button-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="carousel-dots">
        {projects.map((_, index) => {
          const isVisible = isMobile 
            ? index === currentIndex 
            : index >= currentIndex && index < currentIndex + cardsPerView;
          return (
            <button
              key={index}
              className={`carousel-dot ${isVisible ? "active" : ""}`}
              onClick={() => goToSlide(isMobile ? index : Math.max(0, Math.min(index, maxIndex)))}
              aria-label={`Go to project ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
