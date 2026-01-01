import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) setTitleVisible(true);
            if (entry.target === contentRef.current) setContentVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="container mx-auto contact py-8">
      <div className="contact-container">
        <div
          ref={titleRef}
          className={`main-title scroll-animate text-center ${
            titleVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl">
            Contact <span className="text-[#3061bb]">Me</span>
          </h2>
        </div>
        <div
          ref={contentRef}
          className={`contact-content-con grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 scroll-animate ${
            contentVisible ? "animate" : ""
          }`}
        >
          <div>
            <h4 className="text-2xl">Contact me here</h4>
            <p className="mt-2">
              Interested in working together? <br /> let's connect via
              <span className="inline-flex items-center ml-2">
                <a
                  href="https://www.linkedin.com/in/shedrach-morris-uzoigwe-466b15252/"
                  target="_blank"
                  className="mr-3 transition-colors duration-300 hover:text-[#0077b5]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/ShedrachMorris8"
                  target="_blank"
                  className="mr-3 transition-colors duration-300 hover:text-[#1da1f2]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/ShedrachMorris"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </span>
            </p>
            <div className="contact-info mt-4 space-y-3 text-[#dbe1e8]">
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Location</span>
                </div>
                <p>: Lagos, Nigeria</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Email</span>
                </div>
                <p>: shedrachuzo4190@gmail.com</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                  <span>Education</span>
                </div>
                <p>: Dalewares Institute Of Technology</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Mobile</span>
                </div>
                <p>: 09050721435</p>
              </div>
              <div className="contact-item flex items-start gap-4">
                <div className="icon flex items-center gap-2 w-28">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                  </svg>
                  <span>Languages</span>
                </div>
                <p>: English</p>
              </div>
            </div>
          </div>
          <div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-form space-y-4 bg-[#0f1720] p-6 rounded"
            >
              <input
                type="hidden"
                name="access_key"
                value="9baf501a-207b-4c7e-8210-6e7ccfaff80c"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="NAME"
                  required
                  placeholder="YOUR NAME"
                  className="p-2 bg-[#0b0f13] rounded"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="YOUR EMAIL"
                  className="p-2 bg-[#0b0f13] rounded"
                />
              </div>
              <input
                type="text"
                name="text"
                required
                placeholder="ENTER SUBJECT"
                className="w-full p-2 bg-[#0b0f13] rounded"
              />
              <textarea
                name="message"
                cols="15"
                rows="8"
                placeholder="Message Here..."
                className="w-full p-2 bg-[#0b0f13] rounded"
              ></textarea>
              <button
                type="submit"
                className="submit-btn bg-[#3061bb] px-4 py-2 rounded inline-flex items-center"
              >
                <span className="sub-btn">SUBMIT</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
