import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  // Track current theme so the icon updates when the body class changes.
  const [isLight, setIsLight] = useState(() =>
    typeof document !== "undefined"
      ? document.body.classList.contains("light-mode")
      : false
  );

  // Keep state in sync if something else toggles the body class (supports external changes)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const mo = new MutationObserver(() => {
      setIsLight(document.body.classList.contains("light-mode"));
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const toggleTheme = () => {
    // add a temporary class that enables transitions
    document.body.classList.add("theme-transition");
    // force removal after animation duration
    // keep theme-transition longer for a slower reveal
    window.setTimeout(
      () => document.body.classList.remove("theme-transition"),
      2400
    );

    // Animate button briefly
    const btn = document.querySelector(".theme-btn");
    if (!btn) return;

    btn.classList.add("animating");
    // match button animating duration with reveal (slower)
    window.setTimeout(() => btn.classList.remove("animating"), 2000);

    // compute center of button (viewport coordinates)
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // compute radius required to cover farthest viewport corner
    const vw = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const vh = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    const distToCorner = (x, y) => Math.hypot(x - cx, y - cy);
    const r1 = distToCorner(0, 0);
    const r2 = distToCorner(vw, 0);
    const r3 = distToCorner(0, vh);
    const r4 = distToCorner(vw, vh);
    const radius = Math.ceil(Math.max(r1, r2, r3, r4));
    const diameter = radius * 2;

    // decide reveal color (new theme background)
    const newIsLight = !isLight;
    // prefer CSS variables if defined, fallback to hardcoded
    const rootStyles = getComputedStyle(document.documentElement);
    const lightBg =
      rootStyles.getPropertyValue("--page-bg-light").trim() || "#ffffff";
    const darkBg =
      rootStyles.getPropertyValue("--page-bg-dark").trim() || "#191d2b";
    const revealColor = newIsLight ? lightBg : darkBg;

    // create reveal element
    const reveal = document.createElement("div");
    reveal.className = "theme-reveal";
    // set inline styles for position/size/color
    reveal.style.left = `${cx}px`;
    reveal.style.top = `${cy}px`;
    reveal.style.width = `${diameter}px`;
    reveal.style.height = `${diameter}px`;
    reveal.style.background = revealColor;

    document.body.appendChild(reveal);

    // trigger expand on next frame
    requestAnimationFrame(() => {
      reveal.classList.add("expand");
    });

    // toggle theme shortly after starting the reveal so new variables apply under the reveal
    // give the reveal a bit more time before flipping theme for a smoother slow reveal
    setTimeout(() => {
      document.body.classList.toggle("light-mode");
      setIsLight(newIsLight);
    }, 300);

    // cleanup when transition ends
    const cleanup = () => {
      reveal.removeEventListener("transitionend", cleanup);
      // small delay to ensure reveal fully covers before removing
      setTimeout(() => {
        if (reveal && reveal.parentNode) reveal.parentNode.removeChild(reveal);
      }, 300);
    };
    reveal.addEventListener("transitionend", cleanup);

    // fallback cleanup if transitionend doesn't fire
    setTimeout(() => {
      if (reveal && reveal.parentNode) reveal.parentNode.removeChild(reveal);
    }, 2600);
  };

  return (
    <div
      className="theme-btn fixed top-5 right-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#454e56] flex items-center justify-center shadow cursor-pointer z-10"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      role="button"
    >
      {isLight ? (
        // sun icon (inline SVG)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#b2becd]"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <g stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      ) : (
        // moon icon (inline SVG)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#b2becd]"
          aria-hidden="true"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
}
