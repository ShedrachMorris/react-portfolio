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
    <section id="contact" className="container mx-auto contact py-16 px-4">
      <div className="contact-container max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`section-header-cool scroll-animate ${titleVisible ? "animate" : ""
            }`}
        >
          <span className="bg-text">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-[#3061bb]">Touch</span>
          </h2>
          <div className="underline"></div>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12 scroll-animate ${contentVisible ? "animate" : ""
            }`}
        >
          {/* Contact Info Card */}
          <div className="lg:col-span-2 glass-card p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold mb-2">Contact Information</h4>
              <p className="text-[#dbe1e8] mb-8">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="contact-info space-y-4">
                <div className="contact-item-cool">
                  <div className="icon-box">
                    <i className="fas fa-map-marker-alt fa-fw text-xl"></i>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#3061bb] uppercase font-bold tracking-wider">Location</h5>
                    <p className="text-white">Nigeria</p>
                  </div>
                </div>

                <div className="contact-item-cool">
                  <div className="icon-box">
                    <i className="fas fa-envelope fa-fw text-2xl"></i>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#3061bb] uppercase font-bold tracking-wider">Email</h5>
                    <p className="text-white">shedrachuzo4190@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item-cool">
                  <div className="icon-box">
                    <i className="fas fa-phone-alt fa-fw text-xl"></i>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#3061bb] uppercase font-bold tracking-wider">Mobile</h5>
                    <p className="text-white">+234 905 072 1435</p>
                  </div>
                </div>

                <div className="contact-item-cool">
                  <div className="icon-box">
                    <i className="fas fa-globe fa-fw text-xl"></i>
                  </div>
                  <div>
                    <h5 className="text-sm text-[#3061bb] uppercase font-bold tracking-wider">Languages</h5>
                    <p className="text-white">English</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h5 className="text-lg font-semibold mb-4">Connect with me</h5>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/shedrach-morris-uzoigwe-466b15252/"
                  target="_blank"
                  className="w-12 h-12 glass-card flex items-center justify-center hover:bg-[#3061bb] hover:scale-110 transition-all duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://twitter.com/ShedrachMorris8"
                  target="_blank"
                  className="w-12 h-12 glass-card flex items-center justify-center hover:bg-[#3061bb] hover:scale-110 transition-all duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/ShedrachMorris"
                  target="_blank"
                  className="w-12 h-12 glass-card flex items-center justify-center hover:bg-[#3061bb] hover:scale-110 transition-all duration-300"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-3 glass-card p-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-form space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="9baf501a-207b-4c7e-8210-6e7ccfaff80c"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#3061bb]">YOUR NAME</label>
                  <input
                    type="text"
                    name="NAME"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#3061bb]">YOUR EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3061bb]">SUBJECT</label>
                <input
                  type="text"
                  name="text"
                  required
                  placeholder="How can I help you?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3061bb]">MESSAGE</label>
                <textarea
                  name="message"
                  cols="15"
                  rows="6"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="main-btn bg-[#3061bb] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover-lift"
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
