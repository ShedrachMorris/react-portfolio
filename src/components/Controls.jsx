import React, { useEffect, useState } from "react";

export default function Controls() {
  const ids = ["home", "about", "portfolio", "contact"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id, e) => {
    document.querySelector(".active-btn")?.classList.remove("active-btn");
    e.currentTarget.classList.add("active-btn");
    
    // Reset animations
    const section = document.getElementById(id);
    if (section) {
      const animatedElements = section.querySelectorAll('.scroll-animate');
      animatedElements.forEach(el => {
        el.classList.remove('animate');
        setTimeout(() => el.classList.add('animate'), 100);
      });
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="controls hidden sm:flex fixed top-1/2 right-3 transform -translate-y-1/2 flex-col items-center z-10">
        {ids.map((id) => (
          <div
            key={id}
            onClick={(e) => handleClick(id, e)}
            className={`control ${
              id === "home" ? "active-btn" : ""
            } p-4 bg-[#454e56] w-12 h-12 rounded-full flex items-center justify-center m-2 shadow`}
            data-id={id}
          >
            <i
              className={`${
                id === "home"
                  ? "fas fa-home"
                  : id === "about"
                  ? "fas fa-user"
                  : id === "portfolio"
                  ? "fas fa-briefcase"
                  : "fas fa-envelope-open"
              }`}
            ></i>
          </div>
        ))}
      </div>
      <div className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1f2430] px-4 py-2 rounded-full z-20 shadow flex gap-2">
        {ids.map((id) => (
          <button
            key={id}
            onClick={() => {
              const section = document.getElementById(id);
              if (section) {
                const animatedElements = section.querySelectorAll('.scroll-animate');
                animatedElements.forEach(el => {
                  el.classList.remove('animate');
                  setTimeout(() => el.classList.add('animate'), 100);
                });
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="p-2 bg-[#454e56] w-10 h-10 rounded-full flex items-center justify-center"
          >
            <i
              className={`${
                id === "home"
                  ? "fas fa-home"
                  : id === "about"
                  ? "fas fa-user"
                  : id === "portfolio"
                  ? "fas fa-briefcase"
                  : "fas fa-envelope-open"
              }`}
            ></i>
          </button>
        ))}
      </div>
    </>
  );
}
