import React, { useEffect, useState } from "react";

const ICONS = {
  home:      "fas fa-home",
  about:     "fas fa-user",
  portfolio: "fas fa-briefcase",
  contact:   "fas fa-envelope-open",
};

export default function Controls() {
  const ids = ["home", "about", "portfolio", "contact"];
  const [active, setActive] = useState("home");

  // Highlight the active section when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (!section) return;
    // Re-trigger scroll animations
    section.querySelectorAll(".scroll-animate").forEach((el) => {
      el.classList.remove("animate");
      setTimeout(() => el.classList.add("animate"), 100);
    });
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop — right side vertical pills */}
      <div className="controls hidden sm:flex fixed top-1/2 right-3 transform -translate-y-1/2 flex-col items-center z-10">
        {ids.map((id) => (
          <div
            key={id}
            onClick={() => handleClick(id)}
            className={`control ${
              active === id ? "active-btn" : ""
            } p-4 bg-[#454e56] w-12 h-12 rounded-full flex items-center justify-center m-2 shadow cursor-pointer`}
            data-id={id}
            title={id}
          >
            <i className={ICONS[id]}></i>
          </div>
        ))}
      </div>

      {/* Mobile — bottom horizontal bar */}
      <div className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1f2430] px-4 py-2 rounded-full z-20 shadow flex gap-2">
        {ids.map((id) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`control ${
              active === id ? "active-btn" : ""
            } p-2 bg-[#454e56] w-10 h-10 rounded-full flex items-center justify-center`}
          >
            <i className={ICONS[id]}></i>
          </button>
        ))}
      </div>
    </>
  );
}
