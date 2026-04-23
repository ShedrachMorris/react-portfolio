import React, { useEffect, useRef, useState } from "react";
import { portfolioProjects } from "../data/portfolioData";

export default function Portfolio() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);
  const titleRef = useRef();
  const itemsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) setTitleVisible(true);
            if (entry.target === itemsRef.current) setItemsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (itemsRef.current) observer.observe(itemsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      className="container mx-auto py-10 md:py-16 relative px-4 sm:px-8 md:px-12"
    >
      <div ref={titleRef} className={`section-header-cool scroll-animate ${titleVisible ? 'animate' : ''}`}>
        <span className="bg-text">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#3061bb] bg-gradient-to-r from-[#3061bb] to-[#4f46e5] bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="underline"></div>
        <p className="port-text hidden sm:block py-4 text-center text-sm md:text-lg text-[#dbe1e8] max-w-2xl mx-auto">
          Here is some of my work that I've done in various programming languages and modern frameworks.
        </p>
      </div>
      <div ref={itemsRef} className={`portfolios grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 scroll-animate ${itemsVisible ? 'animate' : ''}`}>
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item relative overflow-hidden rounded-xl hover-lift shadow-lg"
          >
            <div className="image w-full h-56 sm:h-64 md:h-72 lg:h-80 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hover-items absolute inset-0 bg-gradient-to-br from-[#3061bb]/90 to-[#4f46e5]/90 flex flex-col items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-all duration-400 backdrop-blur-sm px-6 py-6 overflow-hidden">
              <h3 className="text-lg font-bold text-center leading-tight">{project.title}</h3>
              <p className="text-xs text-center leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">{tech}</span>
                ))}
              </div>
              <div className="icons flex gap-4 mt-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="icon w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
