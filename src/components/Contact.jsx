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
    <section id="contact" className="container mx-auto py-10 md:py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={titleRef}
          className={`section-header-cool scroll-animate ${titleVisible ? "animate" : ""}`}
        >
          <span className="bg-text">Contact</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Get In <span className="text-[#3061bb]">Touch</span>
          </h2>
          <div className="underline"></div>
        </div>

        {/* Cards grid */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 mt-10 scroll-animate ${
            contentVisible ? "animate" : ""
          }`}
        >
          {/* ── Info Card ── */}
          <div className="lg:col-span-2 glass-card p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2">Contact Information</h4>
              <p className="text-[#dbe1e8] text-sm sm:text-base mb-6">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="contact-info space-y-1">
                {[
                  { icon: "fas fa-map-marker-alt", label: "Location", value: "Nigeria" },
                  { icon: "fas fa-envelope",       label: "Email",    value: "shedrachuzo4190@gmail.com" },
                  { icon: "fas fa-phone-alt",      label: "Mobile",   value: "+234 905 072 1435" },
                  { icon: "fas fa-globe",          label: "Languages",value: "English" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="contact-item-cool">
                    <div className="icon-box flex-shrink-0">
                      <i className={`${icon} fa-fw text-xl`}></i>
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-xs text-[#3061bb] uppercase font-bold tracking-wider">{label}</h5>
                      <p className="text-white text-sm sm:text-base truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-base font-semibold mb-3">Connect with me</h5>
              <div className="flex gap-3 flex-wrap">
                {[
                  { href: "https://www.linkedin.com/in/shedrach-morris-uzoigwe-466b15252/", icon: "fab fa-linkedin-in" },
                  { href: "https://twitter.com/ShedrachMorris8", icon: "fab fa-twitter" },
                  { href: "https://github.com/ShedrachMorris", icon: "fab fa-github" },
                ].map(({ href, icon }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 glass-card flex items-center justify-center hover:bg-[#3061bb] hover:scale-110 transition-all duration-300"
                  >
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Form Card ── */}
          <div className="lg:col-span-3 glass-card p-6 sm:p-8 md:p-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-form space-y-5"
            >
              <input type="hidden" name="access_key" value="9baf501a-207b-4c7e-8210-6e7ccfaff80c" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#3061bb]">YOUR NAME</label>
                  <input type="text" name="NAME" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#3061bb]">YOUR EMAIL</label>
                  <input type="email" name="email" required placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3061bb]">SUBJECT</label>
                <input type="text" name="text" required placeholder="How can I help you?" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3061bb]">MESSAGE</label>
                <textarea name="message" rows="5" placeholder="Write your message here..."></textarea>
              </div>

              <button
                type="submit"
                className="main-btn bg-[#3061bb] text-white w-full sm:w-auto px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
