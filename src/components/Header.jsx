import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/hero.jpg";
import resumePdf from "../assets/shedrach new resume.pdf";

export default function Header() {
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const imageRef = useRef();
  const textRef = useRef();

  const roles = [
    "A Software Developer.",
    "A Web Developer.",
    "A Mobile Developer.",
    "A Backend Engineer.",
    "A Frontend Engineer.",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) setImageVisible(true);
            if (entry.target === textRef.current) setTextVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
        if (!isDeleting && text === fullText) {
          setTimeout(() => setIsDeleting(true), 900);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setLoopNum((n) => n + 1);
        }
      },
      isDeleting ? 40 : 120
    );
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loopNum]);

  return (
    <header
      id="home"
      className="min-h-screen container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 flex items-center py-12 md:py-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-8">
        {/* Image column — comes second on mobile, first on md+ */}
        <div
          ref={imageRef}
          className={`relative flex items-center justify-center order-1 md:order-none scroll-animate ${
            imageVisible ? "animate" : ""
          }`}
        >
          <div className="absolute left-0 top-0 w-2/3 h-full bg-[#3061bb] clip-path hidden md:block animate-glow"></div>
          <div className="image rounded-2xl h-64 sm:h-80 md:h-[90%] w-full max-w-sm mx-auto md:max-w-none md:w-2/3 md:ml-8 bg-black overflow-hidden hover-lift shadow-2xl">
            <img
              src={hero}
              alt="Shedrach Morris Uzoigwe"
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Text column */}
        <div
          ref={textRef}
          className={`flex flex-col justify-center order-2 md:order-none scroll-animate ${
            textVisible ? "animate" : ""
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
            Hi, I'm{" "}
            <span className="text-[#3061bb]">Shedrach Morris Uzoigwe.</span>{" "}
            <span className="typed-text ml-1">{text}</span>
            <span className="typed-cursor">|</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#dbe1e8] leading-relaxed">
            I'm a Software Developer who loves creating beautiful and functional
            applications with modern technologies and elegant design.
          </p>
          <div className="btn-con mt-6 sm:mt-8">
            <a
              href={resumePdf}
              download
              aria-label="Download CV (PDF)"
              className="main-btn inline-flex items-center gap-3 bg-[#3061bb] px-6 h-12 rounded-lg font-semibold text-white hover-scale group"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon transition-transform group-hover:translate-x-1">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
