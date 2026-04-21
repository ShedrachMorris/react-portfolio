import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();
  const skillsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) setTitleVisible(true);
            if (entry.target === contentRef.current) setContentVisible(true);
            if (entry.target === skillsRef.current) setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="container mx-auto about py-10 md:py-16 relative px-4 sm:px-8 md:px-12"
    >
      {/* Section Header */}
      <div
        ref={titleRef}
        className={`section-header-cool scroll-animate ${
          titleVisible ? "animate" : ""
        }`}
      >
        <span className="bg-text">About</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl">
          About <span className="text-[#3061bb]">me</span>
        </h2>
        <div className="underline"></div>
      </div>

      {/* Bio */}
      <div
        ref={contentRef}
        className={`pt-4 pb-10 scroll-animate ${
          contentVisible ? "animate" : ""
        }`}
      >
        <h4 className="text-lg sm:text-xl md:text-2xl uppercase text-center mb-4">
          Information About me
        </h4>
        <p className="text-[#dbe1e8] leading-7 md:leading-8 text-sm sm:text-base text-justify max-w-4xl mx-auto">
          Hello there! I'm Shedrach Morris Uzoigwe, Full-stack engineer bridging the gap between physical hardware
          and scalable software. With a foundation in computer hardware engineering at Olive Computer, I build clean,
          documented, and maintainable systems using NestJS, React, and Prisma. I recently automated booking workflows
          for LuxHome (reducing errors by 30%) and streamlined API documentation at Princeps Credit Systems (cutting
          integration issues by 40%). I don't just write code, I optimize the entire system, from database queries to user sessions.
          <br /><br />
          I am fueled by the thrill of problem-solving and am constantly seeking new challenges to push my boundaries.
          Whether it's optimizing website performance, ensuring cross-browser compatibility, or implementing the latest
          web development trends, I thrive on delivering solutions that not only meet but exceed expectations.
        </p>
      </div>

      {/* Skills */}
      <div
        ref={skillsRef}
        className={`about-stats pb-16 scroll-animate ${
          skillsVisible ? "animate" : ""
        }`}
      >
        <div className="section-header-cool pb-6">
          <span className="bg-text">Skills</span>
          <h4 className="text-xl sm:text-2xl uppercase">Skills</h4>
          <div className="underline"></div>
        </div>

        {/* Responsive grid: 2 cols → 4 cols (tablet) → 7 cols (desktop) */}
        <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
          {[
            { icon: <i className="fab fa-js-square text-4xl text-[#f7df1e] mb-3"></i>, label: "JavaScript" },
            { icon: <i className="fab fa-node-js text-4xl text-[#e0234e] mb-3"></i>, label: "NestJS" },
            { icon: <i className="fab fa-react text-4xl text-[#61dafb] mb-3"></i>, label: "React.JS" },
            {
              icon: (
                <svg className="w-9 h-9 mb-3" viewBox="0 0 24 24" fill="#06b6d4">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              ),
              label: "Tailwind CSS",
            },
            { icon: <i className="fab fa-python text-4xl text-[#3776ab] mb-3"></i>, label: "Python" },
            { icon: <i className="fab fa-js-square text-4xl text-[#3178c6] mb-3"></i>, label: "TypeScript" },
            {
              icon: (
                <svg className="w-9 h-9 mb-3" viewBox="0 0 166.3 200">
                  <path fill="#40D3FE" d="M166.3 100L111.4 154.9 56.4 100 111.4 45.1z" />
                  <path fill="#02539A" d="M111.4 45.1L56.4 100 0 43.6 56.4 0zm0 109.8L56.4 100 0 156.4 56.4 200z" />
                </svg>
              ),
              label: "Flutter",
            },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="skill-card flex flex-col items-center justify-center p-4 sm:p-6 border border-[#2a2e35] rounded-xl bg-[#191d2b] shadow-lg transition-all duration-300 hover:border-[#3061bb] hover:-translate-y-2"
            >
              {icon}
              <p className="uppercase font-medium text-xs text-center">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
