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
      className="container mx-auto py-16 relative px-4 md:px-20"
    >
      <div ref={titleRef} className={`main-title scroll-animate ${titleVisible ? 'animate' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-[#3061bb] bg-gradient-to-r from-[#3061bb] to-[#4f46e5] bg-clip-text text-transparent">Portfolio</span>
        </h2>
        <p className="port-text py-6 text-center text-lg text-[#dbe1e8] max-w-2xl mx-auto">
          Here is some of my work that I've done in various programming languages and modern frameworks.
        </p>
      </div>
      <div ref={itemsRef} className={`portfolios grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 scroll-animate ${itemsVisible ? 'animate' : ''}`}>
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item relative overflow-hidden rounded-xl hover-lift shadow-lg"
          >
            <div className="image w-full h-80 md:h-72 lg:h-80 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hover-items absolute inset-0 bg-gradient-to-br from-[#3061bb]/90 to-[#4f46e5]/90 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-all duration-400 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
              <p className="text-sm mb-3 text-center px-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-300 delay-75">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4 px-4 justify-center transform translate-y-4 hover:translate-y-0 transition-transform duration-300 delay-100">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="icons flex gap-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-300 delay-150">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200">
                  <i className="fas fa-external-link-alt text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
