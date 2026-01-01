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
      className="container mx-auto about py-8 relative px-2 md:px-8"
    >
      <div
        ref={titleRef}
        className={`main-title scroll-animate text-center ${
          titleVisible ? "animate" : ""
        }`}
      >
        <h2 className="text-2xl md:text-3xl">
          About <span className="text-[#3061bb]">me</span>
        </h2>
      </div>
      <div
        ref={contentRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 md:pt-8 pb-12 scroll-animate ${
          contentVisible ? "animate" : ""
        }`}
      >
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-xl md:text-2xl uppercase text-center">
            Information About me
          </h4>
          <p className="mt-4 text-[#dbe1e8] leading-7 md:leading-8 text-justify mr-16 sm:mr-20">
            Hello there! I'm Shedrach Morris Uzoigwe, a results-driven software
            developer residing in Lagos State, Nigeria. My passion for crafting
            exceptional digital solutions has fueled my journey in the world of
            software development. I specialize in web and mobile development,
            and I'm dedicated to bringing innovative digital solutions to life.
            <br />
            <br />I am fueled by the thrill of problem-solving and am constantly
            seeking new challenges to push my boundaries. Whether it's
            optimizing website performance, ensuring cross-browser
            compatibility, or implementing the latest web development trends, I
            thrive on delivering solutions that not only meet but exceed
            expectations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* about items commented out */}
        </div>
      </div>
      <div
        ref={skillsRef}
        className={`about-stats pb-16 px-0 md:px-4 scroll-animate ${
          skillsVisible ? "animate" : ""
        }`}
      >
        <h4 className="stat-title text-center uppercase text-lg md:text-xl pb-6">
          Skills
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-6 px-2 md:px-0">
          <div className="flex flex-col items-center">
            <i className="fab fa-js-square text-4xl text-[#f7df1e] mb-2"></i>
            <p className="uppercase font-medium text-sm">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-node-js text-4xl text-[#e0234e] mb-2"></i>
            <p className="uppercase font-medium text-sm">NestJS</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-react text-4xl text-[#61dafb] mb-2"></i>
            <p className="uppercase font-medium text-sm">React.JS</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-10 h-10 mb-2" viewBox="0 0 24 24" fill="#06b6d4">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
            <p className="uppercase font-medium text-sm">Tailwind Css</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-python text-4xl text-[#3776ab] mb-2"></i>
            <p className="uppercase font-medium text-sm">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-js-square text-4xl text-[#3178c6] mb-2"></i>
            <p className="uppercase font-medium text-sm">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-10 h-10 mb-2" viewBox="0 0 24 24" fill="#02569b">
              <path d="M14.314 0L12 2.828L9.686 0H0l9.686 9.686L12 7.372l2.314 2.314L24 0h-9.686zM0 24l9.686-9.686L12 16.628l2.314-2.314L24 24H0z" />
            </svg>
            <p className="uppercase font-medium text-sm">Flutter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
